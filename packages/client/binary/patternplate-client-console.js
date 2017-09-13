#!/usr/bin/env node
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

require('babel-polyfill');

var _minimist = require('minimist');

var _minimist2 = _interopRequireDefault(_minimist);

var _ = require('../');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Function.prototype.$asyncbind = function $asyncbind(self, catcher) {
	"use strict";

	if (!Function.prototype.$asyncbind) {
		Object.defineProperty(Function.prototype, "$asyncbind", {
			value: $asyncbind,
			enumerable: false,
			configurable: true,
			writable: true
		});
	}

	if (!$asyncbind.trampoline) {
		$asyncbind.trampoline = function trampoline(t, x, s, e, u) {
			return function b(q) {
				while (q) {
					if (q.then) {
						q = q.then(b, e);
						return u ? undefined : q;
					}

					try {
						if (q.pop) {
							if (q.length) return q.pop() ? x.call(t) : q;
							q = s;
						} else q = q.call(t);
					} catch (r) {
						return e(r);
					}
				}
			};
		};
	}

	if (!$asyncbind.LazyThenable) {
		$asyncbind.LazyThenable = function () {
			function isThenable(obj) {
				return obj && obj instanceof Object && typeof obj.then === "function";
			}

			function resolution(p, r, how) {
				try {
					var x = how ? how(r) : r;
					if (p === x) return p.reject(new TypeError("Promise resolution loop"));

					if (isThenable(x)) {
						x.then(function (y) {
							resolution(p, y);
						}, function (e) {
							p.reject(e);
						});
					} else {
						p.resolve(x);
					}
				} catch (ex) {
					p.reject(ex);
				}
			}

			function Chained() {}

			;
			Chained.prototype = {
				resolve: _unchained,
				reject: _unchained,
				then: thenChain
			};

			function _unchained(v) {}

			function thenChain(res, rej) {
				this.resolve = res;
				this.reject = rej;
			}

			function then(res, rej) {
				var chain = new Chained();

				try {
					this._resolver(function (value) {
						return isThenable(value) ? value.then(res, rej) : resolution(chain, value, res);
					}, function (ex) {
						resolution(chain, ex, rej);
					});
				} catch (ex) {
					resolution(chain, ex, rej);
				}

				return chain;
			}

			function Thenable(resolver) {
				this._resolver = resolver;
				this.then = then;
			}

			;

			Thenable.resolve = function (v) {
				return Thenable.isThenable(v) ? v : {
					then: function then(resolve) {
						return resolve(v);
					}
				};
			};

			Thenable.isThenable = isThenable;
			return Thenable;
		}();

		$asyncbind.EagerThenable = $asyncbind.Thenable = ($asyncbind.EagerThenableFactory = function (tick) {
			tick = tick || (typeof process === 'undefined' ? 'undefined' : _typeof(process)) === "object" && process.nextTick || typeof setImmediate === "function" && setImmediate || function (f) {
				setTimeout(f, 0);
			};

			var soon = function () {
				var fq = [],
				    fqStart = 0,
				    bufferSize = 1024;

				function callQueue() {
					while (fq.length - fqStart) {
						try {
							fq[fqStart]();
						} catch (ex) {}

						fq[fqStart++] = undefined;

						if (fqStart === bufferSize) {
							fq.splice(0, bufferSize);
							fqStart = 0;
						}
					}
				}

				return function (fn) {
					fq.push(fn);
					if (fq.length - fqStart === 1) tick(callQueue);
				};
			}();

			function Zousan(func) {
				if (func) {
					var me = this;
					func(function (arg) {
						me.resolve(arg);
					}, function (arg) {
						me.reject(arg);
					});
				}
			}

			Zousan.prototype = {
				resolve: function resolve(value) {
					if (this.state !== undefined) return;
					if (value === this) return this.reject(new TypeError("Attempt to resolve promise with self"));
					var me = this;

					if (value && (typeof value === "function" || (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === "object")) {
						try {
							var first = 0;
							var then = value.then;

							if (typeof then === "function") {
								then.call(value, function (ra) {
									if (!first++) {
										me.resolve(ra);
									}
								}, function (rr) {
									if (!first++) {
										me.reject(rr);
									}
								});
								return;
							}
						} catch (e) {
							if (!first) this.reject(e);
							return;
						}
					}

					this.state = STATE_FULFILLED;
					this.v = value;
					if (me.c) soon(function () {
						for (var n = 0, l = me.c.length; n < l; n++) {
							STATE_FULFILLED(me.c[n], value);
						}
					});
				},
				reject: function reject(reason) {
					if (this.state !== undefined) return;
					this.state = STATE_REJECTED;
					this.v = reason;
					var clients = this.c;
					if (clients) soon(function () {
						for (var n = 0, l = clients.length; n < l; n++) {
							STATE_REJECTED(clients[n], reason);
						}
					});
				},
				then: function then(onF, onR) {
					var p = new Zousan();
					var client = {
						y: onF,
						n: onR,
						p: p
					};

					if (this.state === undefined) {
						if (this.c) this.c.push(client);else this.c = [client];
					} else {
						var s = this.state,
						    a = this.v;
						soon(function () {
							s(client, a);
						});
					}

					return p;
				}
			};

			function STATE_FULFILLED(c, arg) {
				if (typeof c.y === "function") {
					try {
						var yret = c.y.call(undefined, arg);
						c.p.resolve(yret);
					} catch (err) {
						c.p.reject(err);
					}
				} else c.p.resolve(arg);
			}

			function STATE_REJECTED(c, reason) {
				if (typeof c.n === "function") {
					try {
						var yret = c.n.call(undefined, reason);
						c.p.resolve(yret);
					} catch (err) {
						c.p.reject(err);
					}
				} else c.p.reject(reason);
			}

			Zousan.resolve = function (val) {
				if (val && val instanceof Zousan) return val;
				var z = new Zousan();
				z.resolve(val);
				return z;
			};

			Zousan.reject = function (err) {
				if (err && err instanceof Zousan) return err;
				var z = new Zousan();
				z.reject(err);
				return z;
			};

			Zousan.version = "2.3.3-nodent";
			return Zousan;
		})();
	}

	var resolver = this;

	switch (catcher) {
		case true:
			return new $asyncbind.Thenable(boundThen);

		case 0:
			return new $asyncbind.LazyThenable(boundThen);

		case undefined:
			boundThen.then = boundThen;
			return boundThen;

		default:
			return function () {
				try {
					return resolver.apply(self, arguments);
				} catch (ex) {
					return catcher(ex);
				}
			};
	}

	function boundThen() {
		return resolver.apply(self, arguments);
	}
};

function start(options) {
	return new Promise(function ($return, $error) {
		var mode, settings, _settings$_, command, application;

		mode = 'console';
		settings = _extends({}, options, { mode: mode });
		_settings$_ = _slicedToArray(settings._, 2), command = _settings$_[1];
		return (0, _2.default)(settings).then(function ($await_3) {

			application = $await_3;
			return application.run(command, settings).then(function ($await_4) {
				return $return();
			}.$asyncbind(this, $error), $error);
		}.$asyncbind(this, $error), $error);
	}.$asyncbind(this));
}

var args = (0, _minimist2.default)(process.argv.slice(1));

start(args).catch(function (err) {
	setTimeout(function () {
		throw err;
	});
});

// Catch unhandled rejections globally
process.on('unhandledRejection', function (reason, promise) {
	console.log('Unhandled Rejection at: Promise ', promise, ' reason: ', reason);
	throw reason;
});