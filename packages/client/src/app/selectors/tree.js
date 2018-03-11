import path from "path";
import querystring from "querystring";
import url from "url";
import { merge } from "lodash";

const WEIGHTS = {
  folder: 0,
  doc: 1,
  pattern: 2
};

export function flatten(tree) {
  return tree.children;
}

export function sanitize(tree, context) {
  const { id, config = {}, prefix, base, location, search } = context;

  tree.children = tree.children
    .map(child => {
      const enriched = enrich(child, {
        base,
        location,
        id,
        config,
        prefix,
        search,
      });
      return enriched.children
        ? sanitize(enriched, context)
        : enriched;
    })
    .sort((a, b) => {
      const order =
        (a.manifest.options.order || 0) - (b.manifest.options.order || 0);
      const weight = (WEIGHTS[a.type] || 0) - (WEIGHTS[b.type] || 0);
      const comp = a.manifest.displayName.localeCompare(b.manifest.displayName);

      if (order !== 0) {
        return order;
      }

      if (weight !== 0) {
        return weight;
      }

      return comp;
    });

  return enrich(tree, { base, location, id, config, prefix, search });
}

export function enrich(child, context) {
  const { id, prefix, search } = context;
  const childid = [child.contentType, child.id].join('/');
  child.active = (childid === id) || `doc/${context.parent}/${childid}` === id;
  const parsed = url.parse(child.href || path.join(prefix, child.id || child.path));

  const q =
    typeof parsed.query === "string"
      ? querystring.parse(parsed.query)
      : parsed.query;

  child.href = url.format({
    pathname: pre(context.base || '', parsed.pathname || ''),
    query: Object.assign({}, context.location.query, q)
  });

  child.warnings = child.warnings || [];

  if (child.contentType === "doc") {
    const {options = {}} = child.manifest;
    const {query = ""} = options;

    if (query) {
      const virtual = query
        ? search(query).filter(Boolean)
        : [];

      child.type = "folder";
      child.children = virtual.map(v => {
        const virtual = merge({}, v, {
          id: [child.id, v.id].join("/"),
          href: [v.contentType, child.id, v.id].join("/"),
          virtual: true,
          reference: child.id
        });
        return enrich(virtual, {...context, parent: child.id});
      });
      child.active = child.active || child.children.some(c => c.active);
    }
  }

  if (
    child.manifest &&
    child.type === "pattern" &&
    (child.manifest.flag === "alpha" || child.manifest.flag === "deprecated")
  ) {
    child.warnings.push({
      type: "flag",
      value: child.manifest.flag,
      message: `${child.manifest.displayName} is flagged as ${child.manifest
        .flag}.`
    });
  }

  return child;
}

function pre(base, pathname) {
  const b = norm(base);
  const p = norm(pathname);

  if (p.startsWith(b)) {
    return `/${p}`;
  }

  return `/${[norm(base), norm(pathname)].join("/")}`;
}

function norm(p) {
  return p.split("/").filter(Boolean).join("/");
}
