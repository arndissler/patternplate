'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var styled = require('styled-components').default;

var _require = require('lodash'),
    omit = _require.omit,
    merge = _require.merge,
    uniq = _require.uniq;

var withSideEffect = require('react-side-effect');

/* eslint-disable max-len */
var _arrowLeft = 'M9.452 13.233c-.14-.148-.258-.31-.344-.494-.215-.465-.215-1.01 0-1.475.085-.184.203-.346.343-.494l3.543-3.544 1.06 1.06c-1.183 1.186-2.46 2.285-3.55 3.558-.058.075-.073.175-.033.262.013.03.033.054.056.078l3.527 3.527-1.06 1.06-3.54-3.54z';
var _arrowRight = 'm 14.202,10.767 c 0.14,0.147 0.258,0.31 0.344,0.494 0.215,0.464 0.215,1.01 0,1.474 -0.085,0.185 -0.203,0.347 -0.343,0.494 L 10.66,16.775 9.6,15.715 c 1.183,-1.186 2.46,-2.285 3.55,-3.558 0.058,-0.075 0.073,-0.176 0.033,-0.262 -0.013,-0.03 -0.033,-0.055 -0.056,-0.08 L 9.601,8.29 l 1.06,-1.06 3.54,3.54 z';
var _code = 'M20.54 10.76l-3.313-3.313-.777 1.344 3.03 3.03c.098.1.098.257 0 .354l-3.533 3.538 1.06 1.06 3.536-3.538c.68-.683.68-1.792-.002-2.473zM4.52 11.82L8.05 8.29l-1.06-1.06L3.46 10.76c-.682.683-.683 1.79-.003 2.474l3.316 3.32.777-1.345-3.032-3.036c-.097-.097-.097-.255 0-.353zM7.6 18.12l7.5-12.99 1.3.75-7.5 12.99z';
var _dark = 'M12 16v3.227L5.52 15.15l-.02-6.3L12 4.77V8l-2 2 4 4-2 2zm0-13L4 8.02l.02 7.96L12 21l7.937-5L20 8l-8-5z';
var _dependencies = 'M9.453 20.026L6.75 21.378v-4.17l3.256-1.627v3.56c0 .38-.214.73-.553.9m-6.906 0c-.34-.17-.553-.515-.553-.893v-3.55l3.256 1.62v4.17L2.547 20.03zm3.006-7.062c.14-.07.294-.106.447-.106.153 0 .306.036.447.106l2.72 1.36L6 15.906 2.833 14.32l2.72-1.36zm4.57.16L7.12 11.62c-.345-.17-.732-.263-1.118-.263-.386 0-.773.09-1.118.26L1.878 13.12c-.854.423-1.384 1.28-1.384 2.233v3.77c0 .953.53 1.81 1.382 2.237l3.006 1.503c.345.174.732.266 1.118.266.386 0 .773-.09 1.118-.27l3.006-1.505c.852-.427 1.382-1.283 1.382-2.236v-3.77c0-.954-.53-1.81-1.382-2.237m11.33 6.906l-2.704 1.35V17.2l3.256-1.625v3.55c0 .38-.214.728-.553.897m-6.906 0c-.34-.17-.553-.517-.553-.895v-3.55l3.256 1.627v4.17l-2.703-1.353zm3.006-7.064c.14-.07.294-.104.447-.104.153 0 .306.04.447.11l2.72 1.36L18 15.91l-3.167-1.583 2.72-1.36zm4.57.16l-3.005-1.5c-.345-.17-.732-.262-1.118-.262-.386 0-.773.097-1.118.27l-3.006 1.502c-.852.425-1.382 1.28-1.382 2.234v3.772c0 .952.53 1.81 1.382 2.236l3.006 1.503c.345.17.732.262 1.118.262.386 0 .773-.092 1.118-.264l3.006-1.5c.852-.43 1.382-1.287 1.382-2.24v-3.77c0-.953-.53-1.81-1.382-2.236M8.547 9.53c-.34-.17-.553-.516-.553-.894v-3.55l3.256 1.627v4.17L8.547 9.53zm3.006-7.063c.14-.07.294-.106.447-.106.153 0 .306.04.447.11l2.72 1.36L12 5.41 8.833 3.827l2.72-1.36zm3.9 7.063l-2.703 1.352v-4.17l3.256-1.627v3.55c0 .38-.214.726-.553.895m.67 1.342c.853-.427 1.383-1.283 1.383-2.236V4.864c0-.953-.53-1.81-1.382-2.236l-3.006-1.503C12.773.953 12.386.86 12 .86c-.386 0-.773.093-1.118.265L7.876 2.628c-.852.427-1.382 1.283-1.382 2.236v3.772c0 .952.53 1.81 1.382 2.236l3.006 1.503c.345.172.732.264 1.118.264.386 0 .773-.1 1.118-.27l3.006-1.51z';
var _ecospheres = 'M18.052 15.315c0 .287-.162.55-.418.677l-5.296 2.648c-.107.053-.222.08-.338.08-.116 0-.232-.027-.34-.08l-5.295-2.648c-.256-.128-.418-.39-.418-.677v-6.63c0-.287.162-.55.418-.677L11.66 5.36c.108-.053.224-.08.34-.08.116 0 .23.027.338.08l5.296 2.648c.256.128.418.39.418.677v6.63zm.253-8.65L13.01 4.02c-.313-.155-.662-.238-1.01-.238-.35 0-.698.083-1.01.238L5.696 6.666c-.77.385-1.248 1.16-1.248 2.02v6.63c0 .86.478 1.633 1.247 2.017l5.296 2.648c.315.16.66.24 1.01.24s.7-.08 1.01-.235l5.298-2.65c.77-.383 1.247-1.157 1.247-2.017v-6.63c0-.86-.478-1.634-1.247-2.02';
var _folder = 'M10.5 4.5h-8v14c0 .552.448 1 1 1h17c.552 0 1-.448 1-1v-11h-11v-3zM9 6v3h11v9H4V6h5';
var _fullscreen = 'M9 3.75v-1.5l-5 .003c-.966 0-1.75.785-1.75 1.75V9h1.5V4.813L8.38 9.44l1.06-1.06-4.63-4.63H9zm-.62 10.81l-4.63 4.626V15h-1.5v4.997c0 .964.785 1.75 1.75 1.75l5 .002v-1.5l-4.19-.005 4.63-4.626-1.06-1.06zM20 2.25l-5-.005v1.5l4.194.003-4.634 4.63 1.06 1.06 4.63-4.624v4.18h1.5V4c0-.966-.785-1.75-1.75-1.75m.25 16.936l-4.63-4.626-1.06 1.06 4.634 4.63-4.194.005v1.5l5-.004c.965 0 1.75-.782 1.75-1.75v-4.993h-1.5v4.18z';
var _globals = 'M12 20.5c-3.046 0-5.716-1.616-7.217-4.03l.16.065 1.75-4.25c.08-.196.075-.416-.015-.607l-1.936-4.08c.595-.977 1.38-1.824 2.305-2.49L8.25 6.31V9c0 .116.028.23.08.335l3 6c.1.2.282.343.498.394.057.01.115.02.172.02.16 0 .32-.06.45-.15l4-3c.167-.13.275-.32.296-.53l.283-2.746 2.83-.543c.404.99.632 2.075.632 3.21 0 4.688-3.814 8.5-8.5 8.5M3.92 9.37l1.258 2.65-1.172 2.848C3.686 13.97 3.5 13.008 3.5 12c0-.92.15-1.802.422-2.63M19.138 7.4l-2.94.564c-.324.06-.57.33-.604.66l-.306 2.972-3.02 2.264L9.75 8.823V6c0-.2-.08-.39-.22-.53L8.38 4.32c1.1-.52 2.325-.82 3.62-.82 2.992 0 5.623 1.558 7.138 3.9M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2';
var _environment = _globals;
var _home = 'M12.055 2l-11 10h1.89v9.02c0 .524.422.95.943.95h7.223V18.2H13v3.77l7.103.03h.008c.524 0 .947-.424.947-.95v-9.01l1.89-.04-10.89-10zm-.005 2.032l7.505 6.892v9.574l-5.055-.023V16.7H9.61v3.77H4.445v-9.525L12.05 4.03';
var _light = 'M12 8V4.773l6.48 4.078.018 6.3L12 19.23V16l2-2-4-4 2-2zm0 13l8-5.02-.02-7.96L12 3 4.063 8 4 16l8 5z';
var _molecules = 'M6.372 4.75h11.255v1.5H6.372zM12.9 16.172c.32.124.617.31.868.56.12.12.222.248.312.383l5.626-9.143c-.514-.06-.99-.274-1.377-.624l-5.43 8.824zM6.08 6.886c-.09.135-.193.263-.312.382-.25.25-.548.437-.87.56l5.43 8.825c.388-.35.864-.564 1.378-.624L6.08 6.883zm4.86 10.554c-.587.586-.587 1.536 0 2.12.585.587 1.535.587 2.12 0 .586-.584.586-1.534 0-2.12-.585-.586-1.535-.586-2.12 0m10.12-13c-.585-.586-1.535-.586-2.12 0-.586.586-.586 1.536 0 2.12.585.587 1.535.587 2.12 0 .587-.584.587-1.534 0-2.12m-16 0c-.585-.586-1.535-.586-2.12 0-.586.586-.586 1.536 0 2.12.585.587 1.535.587 2.12 0 .587-.584.587-1.534 0-2.12';
var _organisms = 'M6.475 15.75c.008.084.025.165.025.25 0 .48-.142.922-.376 1.302l3.766 2.37c.287-.455.715-.808 1.224-1.002l-4.64-2.92zm11.05-.004l-4.64 2.923c.51.19.937.54 1.225 1l3.765-2.37c-.233-.38-.375-.83-.375-1.3 0-.09.017-.17.026-.26m2.454-5.25c-.564-.004-1.078-.203-1.495-.524l-.032 4.08c.417-.33.934-.54 1.505-.55l.023-3.005zm-15.973.01l.008 3c.567.003 1.083.203 1.5.524l-.01-4.042c-.418.318-.933.515-1.498.516m13.515-2.28c-.007-.08-.022-.15-.022-.22 0-.49.145-.94.386-1.32l-3.773-2.36c-.285.45-.71.81-1.22 1l4.63 2.893zm-11.046.01l4.635-2.91c-.5-.194-.93-.548-1.22-1.003L6.12 6.69c.237.383.38.83.38 1.31 0 .082-.016.16-.024.238M4 9.5c.828 0 1.5-.672 1.5-1.5S4.828 6.5 4 6.5 2.5 7.172 2.5 8 3.172 9.5 4 9.5m8-5c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5m-8 10c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5m8 5c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5m8-5c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5m-8-4c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5m8-1c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5';
var _pattern = 'M12.75 18.948v-7.412c.846-.34 2.457-1.153 5.75-2.892v7.43l-5.75 2.874zM5.5 8.588l5.75 2.874v7.486L5.5 16.073V8.588zm6.5-3.91l5.546 2.772c-3.208 1.687-4.896 2.514-5.47 2.75l-5.56-2.78L12 4.676zm7.447 2.046l-7-3.5c-.14-.07-.294-.106-.447-.106-.153 0-.306.035-.447.106l-7 3.5c-.34.17-.553.515-.553.894v8.764c0 .38.214.725.553.894l7 3.5c.14.07.294.106.447.106.153 0 .307-.035.447-.106l7-3.5c.34-.17.553-.515.553-.894V7.618c0-.38-.214-.725-.553-.894';
var _patternplate = 'M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm-2 15.5v-2H8v2h2zm3-3v-2h-2v2h2zm-3 0v-2H8v2h2zm6 0v-2h-2v2h2zm-6-3v-2H8v2h2zm6 0v-2h-2v2h2zm-3-3v-2h-2v2h2zm-3 0v-2H8v2h2zm6 0v-2h-2v2h2z';
var _polymers = 'M6.475 15.75c.008.084.025.165.025.25 0 .48-.142.922-.376 1.302l3.766 2.37c.287-.455.715-.808 1.224-1.002l-4.64-2.92zm11.05-.004l-4.64 2.923c.51.19.937.54 1.225 1l3.765-2.37c-.233-.38-.375-.83-.375-1.3 0-.09.017-.17.026-.26m2.454-5.25c-.564-.008-1.078-.207-1.495-.528l-.032 4.08c.417-.33.934-.54 1.505-.55l.023-3.005zm-15.973.01l.008 3c.567 0 1.083.2 1.5.52l-.01-4.04c-.418.32-.933.514-1.498.515m13.515-2.28c-.007-.08-.022-.15-.022-.22 0-.49.145-.94.386-1.32l-3.773-2.36c-.285.45-.71.81-1.22 1l4.63 2.893zm-11.046.01l4.635-2.91c-.5-.194-.93-.548-1.22-1.003L6.12 6.69c.237.383.38.83.38 1.31 0 .082-.016.16-.024.238m11.064.152l-4.79 2.392v-5.41c-.238.076-.486.127-.75.127-.262 0-.51-.06-.75-.13v5.44l-4.79-2.4c-.088.51-.327.98-.68 1.34l4.512 2.26-4.502 2.24c.35.36.58.82.67 1.34l4.79-2.397v5.42c.24-.074.48-.127.75-.127s.51.05.75.126v-5.38l4.78 2.394c.077-.516.31-.983.653-1.35l-4.543-2.27 4.56-2.27c-.35-.36-.584-.827-.666-1.343M4 9.5c.828 0 1.5-.672 1.5-1.5S4.828 6.5 4 6.5 2.5 7.172 2.5 8 3.172 9.5 4 9.5m8-5c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5m-8 10c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5m8 5c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5m8-5c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5m0-5c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5';
var _react = 'M 16.019531 3 C 15.671125 3.00715 15.300981 3.091375 14.921875 3.2324219 C 14.163662 3.5145156 13.340776 4.0384002 12.503906 4.7753906 C 12.340395 4.9193891 12.176009 5.0979185 12.011719 5.2578125 C 11.901617 5.1513016 11.791835 5.0267433 11.681641 4.9277344 C 10.795655 4.1316628 9.9236686 3.5712298 9.125 3.2695312 C 8.7256657 3.1186821 8.3365968 3.0284378 7.9726562 3.0195312 C 7.6087157 3.0106212 7.270437 3.0833582 6.9726562 3.2578125 C 6.3972498 3.5948924 6.0860013 4.2551581 5.9492188 5.0585938 C 5.8124361 5.8620294 5.8476604 6.8442943 6.0605469 7.9453125 C 6.1031041 8.1654193 6.1740595 8.4036874 6.2304688 8.6328125 C 5.97484 8.7063633 5.7047008 8.7722283 5.46875 8.8554688 C 4.432811 9.2209626 3.5945928 9.6796197 2.9921875 10.201172 C 2.3897822 10.722724 2 11.327349 2 11.984375 C 2 12.662118 2.4082566 13.289795 3.0429688 13.839844 C 3.6776808 14.389892 4.5645597 14.878259 5.65625 15.255859 C 5.8317684 15.316571 6.0331245 15.360088 6.21875 15.414062 C 6.1582822 15.66053 6.0832065 15.917073 6.0390625 16.152344 C 5.8346362 17.241844 5.8098143 18.204961 5.9550781 18.992188 C 6.1003415 19.779412 6.4197964 20.423275 6.9863281 20.753906 C 7.5707485 21.094948 8.3167421 21.047508 9.1054688 20.765625 C 9.8941954 20.483741 10.754805 19.951627 11.623047 19.183594 C 11.761961 19.060717 11.898899 18.906452 12.037109 18.771484 C 12.216283 18.945766 12.396455 19.138171 12.574219 19.292969 C 13.405466 20.016801 14.218158 20.522511 14.966797 20.789062 C 15.715436 21.055615 16.430103 21.095246 16.996094 20.763672 C 17.579942 20.42164 17.910332 19.748024 18.0625 18.917969 C 18.214668 18.087913 18.188624 17.069767 17.964844 15.925781 C 17.929929 15.747281 17.867388 15.554788 17.822266 15.371094 C 17.950462 15.332733 18.093563 15.303037 18.216797 15.261719 C 19.34199 14.884455 20.256474 14.401339 20.914062 13.853516 C 21.571651 13.305692 22 12.675711 22 11.984375 C 22 11.316537 21.592337 10.708795 20.972656 10.185547 C 20.352976 9.6622986 19.494727 9.2034761 18.445312 8.8378906 C 18.238082 8.7656964 18.000825 8.7093156 17.779297 8.6445312 C 17.816133 8.4924793 17.870208 8.3318492 17.900391 8.1835938 C 18.13931 7.0099907 18.183182 5.96782 18.042969 5.1191406 C 17.902756 4.2704612 17.578578 3.5803124 16.982422 3.2324219 C 16.694443 3.0643682 16.367938 2.9928547 16.019531 3 z M 16.023438 3.8652344 C 16.246408 3.8595757 16.422746 3.9010322 16.548828 3.9746094 C 16.815675 4.1303292 17.07873 4.5521623 17.195312 5.2578125 C 17.311895 5.9634627 17.281462 6.9169667 17.058594 8.0117188 C 17.032589 8.1394545 16.984815 8.2822106 16.953125 8.4140625 C 16.134284 8.2234679 15.235015 8.0912672 14.294922 8.0019531 C 13.751908 7.2186476 13.191061 6.4913648 12.617188 5.8652344 C 12.768776 5.7177962 12.922862 5.5514965 13.072266 5.4199219 C 13.849433 4.7355084 14.600382 4.2698533 15.220703 4.0390625 C 15.530864 3.9236671 15.800467 3.8708931 16.023438 3.8652344 z M 7.9667969 3.8847656 C 8.204941 3.8916645 8.4921202 3.9495056 8.8222656 4.0742188 C 9.4825566 4.3236447 10.28203 4.8247788 11.107422 5.5664062 C 11.205243 5.6542984 11.305753 5.7681072 11.404297 5.8632812 C 10.828373 6.4891798 10.260402 7.2150849 9.7109375 8 C 8.7742691 8.0878313 7.878881 8.2210717 7.0605469 8.4082031 C 7.0093893 8.1995211 6.9427183 7.979966 6.9042969 7.78125 C 6.7063246 6.7573656 6.6823383 5.8644203 6.7949219 5.203125 C 6.9075054 4.5418297 7.1543156 4.1475862 7.40625 4 C 7.5395435 3.9219104 7.7286527 3.8778668 7.9667969 3.8847656 z M 12.011719 6.4746094 C 12.406433 6.9082361 12.7994 7.4001799 13.1875 7.9238281 C 12.794349 7.9049913 12.404259 7.8808594 12 7.8808594 C 11.601264 7.8808594 11.215567 7.9055035 10.826172 7.9238281 C 11.218061 7.4011371 11.614064 6.9090918 12.011719 6.4746094 z M 12 8.7402344 C 12.62139 8.7402344 13.227614 8.7668454 13.818359 8.8125 C 14.151039 9.3088157 14.475839 9.8245485 14.785156 10.365234 C 15.09578 10.908201 15.379531 11.451329 15.642578 11.990234 C 15.381336 12.536206 15.099335 13.084929 14.787109 13.632812 C 14.47815 14.17496 14.155199 14.694701 13.826172 15.193359 C 13.231026 15.236716 12.621925 15.263672 12 15.263672 C 11.385158 15.263672 10.783354 15.241979 10.195312 15.203125 C 9.857099 14.704207 9.5270761 14.182489 9.2148438 13.636719 C 8.9026472 13.090995 8.6226165 12.543692 8.3652344 12.001953 C 8.6223479 11.459349 8.9033118 10.912375 9.2128906 10.369141 C 9.5231725 9.8246773 9.8493881 9.3072485 10.183594 8.8125 C 10.77474 8.7671354 11.382161 8.7402344 12 8.7402344 z M 9.0917969 8.9335938 C 8.8809698 9.2664173 8.6672078 9.5936441 8.4667969 9.9453125 C 8.26942 10.29166 8.0992881 10.639079 7.921875 10.986328 C 7.6728423 10.387485 7.4513424 9.8008736 7.2792969 9.2402344 C 7.8448649 9.1122912 8.4555981 9.0142998 9.0917969 8.9335938 z M 14.912109 8.9335938 C 15.551594 9.0156474 16.16691 9.1173252 16.734375 9.2480469 C 16.562073 9.8064733 16.34146 10.391171 16.089844 10.988281 C 15.90762 10.63874 15.729215 10.288907 15.529297 9.9394531 C 15.33083 9.5925325 15.120651 9.264526 14.912109 8.9335938 z M 6.4472656 9.4648438 C 6.6951622 10.278405 7.0319189 11.134632 7.4277344 12.003906 C 7.026288 12.886892 6.6864667 13.756169 6.4355469 14.582031 C 6.272336 14.53433 6.0902943 14.49621 5.9375 14.443359 C 4.9277033 14.094085 4.1309727 13.643168 3.6074219 13.189453 C 3.0838711 12.735738 2.859375 12.295484 2.859375 11.984375 C 2.859375 11.681865 3.0645925 11.275878 3.5546875 10.851562 C 4.0447825 10.427248 4.7971191 10.004273 5.7558594 9.6660156 C 5.9674342 9.5913747 6.2155634 9.5317521 6.4472656 9.4648438 z M 17.5625 9.4765625 C 17.761147 9.5349289 17.977705 9.5841952 18.162109 9.6484375 C 19.135811 9.987647 19.909923 10.414765 20.417969 10.84375 C 20.926014 11.272735 21.140625 11.684825 21.140625 11.984375 C 21.140625 12.30116 20.909935 12.739581 20.365234 13.193359 C 19.820534 13.647138 18.990692 14.096108 17.943359 14.447266 C 17.839835 14.481976 17.715549 14.506445 17.607422 14.539062 C 17.350826 13.718687 16.99339 12.85937 16.583984 11.988281 C 16.977973 11.130028 17.315538 10.284009 17.5625 9.4765625 z M 16.097656 12.992188 C 16.360815 13.600657 16.599902 14.199577 16.779297 14.767578 C 16.197615 14.901882 15.568725 15.005518 14.908203 15.085938 C 15.119082 14.747835 15.331463 14.412597 15.533203 14.058594 C 15.735416 13.703757 15.915097 13.347868 16.097656 12.992188 z M 7.921875 13.021484 C 8.1000429 13.369168 8.2716246 13.716461 8.4707031 14.064453 C 8.6760168 14.423334 8.8964141 14.759151 9.1132812 15.099609 C 8.4651932 15.026399 7.8402627 14.934137 7.2675781 14.808594 C 7.4427132 14.236002 7.6671378 13.634621 7.921875 13.021484 z M 16.994141 15.599609 C 17.033614 15.76138 17.090652 15.934214 17.121094 16.089844 C 17.32857 17.150499 17.342782 18.076459 17.216797 18.763672 C 17.090815 19.450885 16.824358 19.868082 16.5625 20.021484 C 16.307877 20.17065 15.861548 20.194868 15.253906 19.978516 C 14.646267 19.762166 13.908649 19.315011 13.138672 18.644531 C 12.976886 18.503647 12.809552 18.324509 12.644531 18.164062 C 13.213719 17.533605 13.768067 16.796304 14.304688 16.009766 C 15.256548 15.924226 16.164838 15.793207 16.994141 15.599609 z M 7.046875 15.644531 C 7.8734712 15.828556 8.7843105 15.944441 9.7285156 16.021484 C 10.281098 16.80836 10.851201 17.535739 11.429688 18.164062 C 11.304718 18.286056 11.178838 18.429245 11.054688 18.539062 C 10.250844 19.250131 9.4655785 19.725022 8.8164062 19.957031 C 8.1672342 20.18904 7.6820257 20.164669 7.4199219 20.011719 C 7.1650564 19.862976 6.9174785 19.478939 6.7988281 18.835938 C 6.6801777 18.192936 6.695132 17.321208 6.8847656 16.310547 C 6.9241429 16.100681 6.9927179 15.866659 7.046875 15.644531 z M 13.201172 16.083984 C 12.816824 16.612397 12.428545 17.113513 12.037109 17.550781 C 11.636336 17.112875 11.235674 16.616934 10.839844 16.089844 C 11.2244 16.104917 11.606956 16.123047 12 16.123047 C 12.406689 16.123047 12.803605 16.101833 13.201172 16.083984 z';
var _reload = 'M17.266 6.664C15.91 5.327 14.05 4.5 12 4.5c-4.135 0-7.5 3.365-7.5 7.5s3.365 7.5 7.5 7.5 7.5-3.365 7.5-7.5c0-.544-.058-1.074-.168-1.586h1.53C20.95 10.93 21 11.46 21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c2.453 0 4.677.98 6.3 2.572v-.986h1.5v3.578h-3.578v-1.5h1.044zM12 13.5c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5c.828 0 1.5.673 1.5 1.5s-.672 1.5-1.5 1.5z';
var _rulers = 'M21 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zm-.5 8.5H18V13h-1.5v2.5h-2V13H13v2.5h-2V13H9.5v2.5h-2V13H6v2.5H3.5v-7h17z';
var _search = 'M8.65 14.248c-.376-.46-.697-.962-.955-1.496-.335-.695-.56-1.44-.668-2.205-.11-.787-.096-1.59.044-2.373.13-.726.37-1.432.71-2.09.75-1.448 1.96-2.636 3.43-3.343.64-.3 1.32-.52 2.02-.64.35-.05.69-.08 1.04-.09h.29c.35.01.7.03 1.04.09.7.11 1.39.32 2.03.62 1.53.717 2.8 1.95 3.55 3.466.32.63.54 1.31.67 2.006.14.78.16 1.584.05 2.37-.106.76-.332 1.51-.667 2.204-.393.81-.933 1.55-1.586 2.174-.675.643-1.472 1.16-2.34 1.515-.895.365-1.862.553-2.832.553s-1.933-.186-2.83-.553c-.684-.28-1.325-.66-1.9-1.13-2.09 2.21-4.294 4.307-6.437 6.464-.09.08-.186.15-.3.187-.1.034-.205.046-.31.035-.072-.01-.145-.03-.213-.058-.308-.13-.497-.455-.454-.79.02-.15.088-.28.184-.395 2.09-2.23 4.3-4.343 6.46-6.506zM14.377 3.5c-.28.006-.56.027-.836.07-.56.085-1.1.25-1.62.49-1.16.542-2.13 1.457-2.74 2.58-.28.518-.48 1.075-.6 1.65-.13.65-.15 1.318-.07 1.974.08.612.25 1.21.52 1.77.31.655.73 1.253 1.25 1.758.54.523 1.17.945 1.86 1.236.715.302 1.486.462 2.26.472.777.01 1.554-.13 2.277-.416.695-.275 1.34-.682 1.885-1.192.53-.492.97-1.08 1.29-1.726.276-.55.464-1.144.557-1.753.1-.63.09-1.273-.01-1.9-.094-.56-.266-1.103-.51-1.613-.58-1.197-1.555-2.185-2.744-2.776-.505-.252-1.047-.43-1.603-.53-.273-.05-.55-.077-.83-.09-.1-.003-.204-.004-.31-.004z';

var _atoms = ['M12 3c-1.39 0-2.7.324-3.874.886.355.357.608.807.75 1.305.952-.436 2.008-.69 3.124-.69 4.135 0 7.5 3.367 7.5 7.5s-3.365 7.5-7.5 7.5-7.5-3.363-7.5-7.5c0-1.114.252-2.17.69-3.123-.497-.14-.947-.395-1.304-.75C3.324 9.3 3 10.612 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9-4.03-9-9-9', 'M13.5 12c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5.672 1.5 1.5 1.5 1.5-.672 1.5-1.5M6 7.5c.828 0 1.5-.672 1.5-1.5S6.828 4.5 6 4.5 4.5 5.172 4.5 6 5.172 7.5 6 7.5'];

var _arrowDoubleLeft = ['M7.452 13.233c-.14-.148-.258-.31-.344-.494-.215-.465-.215-1.01 0-1.475.085-.184.203-.346.343-.494l3.543-3.544 1.06 1.06c-1.183 1.186-2.46 2.285-3.55 3.558-.058.075-.073.175-.033.262.013.03.033.054.056.078l3.527 3.527-1.06 1.06-3.54-3.54z', 'M12.452 13.233c-.14-.148-.258-.31-.344-.494-.215-.465-.215-1.01 0-1.475.085-.184.203-.346.343-.494l3.543-3.544 1.06 1.06c-1.183 1.186-2.46 2.285-3.55 3.558-.058.075-.073.175-.033.262.013.03.033.054.056.078l3.527 3.527-1.06 1.06-3.54-3.54z'];

var _arrowDoubleRight = ['M16.548 10.767c.14.147.258.31.344.494.215.464.215 1.01 0 1.474-.085.185-.203.347-.343.494l-3.543 3.546-1.06-1.06c1.183-1.186 2.46-2.285 3.55-3.558.058-.075.073-.176.033-.262-.013-.03-.033-.055-.056-.08L11.947 8.29l1.06-1.06 3.54 3.54z', 'M11.548 10.767c.14.147.258.31.344.494.215.464.215 1.01 0 1.474-.085.185-.203.347-.343.494l-3.543 3.546-1.06-1.06c1.183-1.186 2.46-2.285 3.55-3.558.058-.075.073-.176.033-.262-.013-.03-.033-.055-.056-.08L6.947 8.29l1.06-1.06 3.54 3.54z'];

var _folderOpen = [{
	d: 'M20 18H4V9h5v3h11v6zM10.5 7.5v-3h-8v14c0 .552.448 1 1 1h17c.552 0 1-.448 1-1v-11h-11z'
}];

var _documentation = ['M18.375 16.625h-9v-13h9v13zm-10.5-14.5v15c0 .552.447 1 1 1h11v-16h-12z', 'M14.125 20.375h-8.25c-.137 0-.25-.112-.25-.25V6.875h1.25v-1.5h-2.75v14.75c0 .965.786 1.75 1.75 1.75h9.75v-2.75h-1.5v1.25z', {
	tagName: 'circle',
	cx: 14,
	cy: 6.5,
	r: 1.5
}, 'M14.75 9h.75v1.5h-.75v3H16V15h-4v-1.5h1.25v-3h-.75V9h.75v-.004h1.5V9z'];

var _issue = ['M19.98 10.99l-2.647-5.295c-.385-.77-1.158-1.248-2.02-1.248h-6.63c-.858 0-1.633.48-2.018 1.248L4.018 10.99c-.156.313-.238.66-.238 1.01s.082.697.237 1.01l2.648 5.295c.385.77 1.16 1.248 2.02 1.248h6.63c.86 0 1.633-.48 2.018-1.247l2.647-5.296c.156-.312.24-.66.24-1.01s-.083-.697-.24-1.01zm-1.34 1.35l-2.648 5.295c-.127.256-.39.418-.677.418h-6.63c-.287 0-.55-.162-.677-.418L5.36 12.34c-.053-.11-.08-.225-.08-.34 0-.116.026-.23.08-.338l2.647-5.297c.128-.256.39-.418.677-.418h6.63c.287 0 .55.162.677.418l2.65 5.297c.053.106.08.222.08.338 0 .115-.027.23-.08.34z', {
	tagName: 'circle',
	cx: 12,
	cy: 15,
	r: 1.5
}, 'M11.25 7.474h1.5v4.5h-1.5z'];

var _command = ['M20.5 5.5h-17c-.55 0-1 .45-1 1v11c0 .552.45 1 1 1h17c.552 0 1-.448 1-1v-11c0-.55-.448-1-1-1zM20 17H4V7h16v10z', 'M8.375 14.25h7.25v1.5h-7.25zm-2.875-6H7v1.5H5.5zm2.875 0h1.5v1.5h-1.5zm2.875 0h1.5v1.5h-1.5zm5.75 0h1.5v1.5H17zm-2.875 0h1.5v1.5h-1.5zm-4.313 3h1.5v1.5h-1.5zm2.876 0h1.5v1.5h-1.5zm-7.188 0h2.938v1.5H5.5zm10.078 0h2.938v1.5h-2.938zm-10.078 3H7v1.5H5.5zm11.516 0h1.5v1.5h-1.5z'];

var _placeholder = [{
	tagName: 'rect',
	x: 0,
	y: 0,
	width: 24,
	height: 24
}];

var icons = {
	'arrow-double-left': function arrowDoubleLeft() {
		return _arrowDoubleLeft;
	},
	'arrow-double-right': function arrowDoubleRight() {
		return _arrowDoubleRight;
	},
	'arrow-left': function arrowLeft() {
		return _arrowLeft;
	},
	'arrow-right': function arrowRight() {
		return _arrowRight;
	},
	'atoms': function atoms() {
		return _atoms;
	},
	'checkers-inverted': function checkersInverted() {
		return _checkers(true);
	},
	'checkers': function checkers() {
		return _checkers();
	},
	'code': function code() {
		return _code;
	},
	'command': function command() {
		return _command;
	},
	'dark': function dark() {
		return _dark;
	},
	'dependencies': function dependencies() {
		return _dependencies;
	},
	'documentation': function documentation() {
		return _documentation;
	},
	'doc': function doc() {
		return _documentation;
	},
	'ecospheres': function ecospheres() {
		return _ecospheres;
	},
	'environment': function environment() {
		return _environment;
	},
	'placeholder': function placeholder() {
		return _placeholder;
	},
	'folder-open': function folderOpen() {
		return _folderOpen;
	},
	'folder': function folder() {
		return _folder;
	},
	'fullscreen': function fullscreen() {
		return _fullscreen;
	},
	'globals': function globals() {
		return _globals;
	},
	'home': function home() {
		return _home;
	},
	'issue': function issue() {
		return _issue;
	},
	'light': function light() {
		return _light;
	},
	'molecules': function molecules() {
		return _molecules;
	},
	'organisms': function organisms() {
		return _organisms;
	},
	'pattern': function pattern() {
		return _pattern;
	},
	'patternplate': function patternplate() {
		return _patternplate;
	},
	'polymers': function polymers() {
		return _polymers;
	},
	'react': function react() {
		return _react;
	},
	'reload': function reload() {
		return _reload;
	},
	'rulers': function rulers() {
		return _rulers;
	},
	'search': function search() {
		return _search;
	}
};

function _checkers(inverted) {
	var length = 20;
	var count = 5;
	var dim = length / count;
	var offset = (24 - length) / 2;
	var field = count * count / 2;

	var fields = range(count * count).map(function (_, i) {
		var x = i % count;
		var y = (i - x) / count;

		var filled = y % 2 === 0 ? x % 2 === 0 : x % 2 !== 0;

		if (!filled) {
			return null;
		}

		var product = (y + 1) * (x + 1);
		var inArea = inverted ? true : product <= field;

		if (!inArea) {
			return null;
		}

		return rect({
			x: offset + x * dim,
			y: offset + y * dim,
			width: dim,
			height: dim
		});
	}).filter(Boolean);

	return joinPaths(fields);
}

function rect(props) {
	var p = omit(props, ['width', 'height', 'x', 'y']);
	var d = `M${props.x},${props.y}h${props.width}v${props.height}h-${props.width}z`;
	return merge({}, p, { d });
}

function range(count) {
	return Array(count).fill(true);
}

function joinPaths(paths) {
	var d = paths.map(function (path) {
		return path.d;
	}).join('');
	return [{
		d
	}];
}

var iconNames = Object.keys(icons);

module.exports = withSideEffect(toState, onChange)(Icon);
module.exports.symbols = iconNames;

function toState(propsList) {
	var list = propsList.map(function (item) {
		return item.symbol;
	}).sort();
	var symbols = uniq(list);
	return React.createElement(IconRegistry, { symbols: symbols });
}

function onChange(registry) {
	var element = getRegistryMountPoint();
	ReactDOM.render(registry, element);
}

function getRegistryMountPoint() {
	var _global = global,
	    document = _global.document;

	var found = document.querySelector('[data-icon-registry]');
	if (found) {
		return found;
	}

	var created = document.createElement('div');
	created.setAttribute('data-icon-registry', true);
	document.body.appendChild(created);
	return created;
}

var SIZES = {
	s: 14,
	m: 22,
	l: 38
};

function Icon(props) {
	return React.createElement(
		StyledIcon,
		{ className: props.className, size: props.size },
		React.createElement('use', { title: props.title, xlinkHref: `#${props.symbol || 'placeholder'}` })
	);
}

Icon.defaultProps = {
	size: 'm',
	symbol: 'placeholder'
};

var StyledIcon = styled.svg`
	display: flex;
	width: ${function (props) {
	return SIZES[props.size];
}}px;
	height: ${function (props) {
	return SIZES[props.size];
}}px;
	justify-content: center;
	align-items: center;
	color: inherit;
	fill: currentColor;
`;

function IconRegistry(props) {
	return React.createElement(
		StyledRegistry,
		null,
		props.symbols.map(function (symbol) {
			var creator = typeof icons[symbol] === 'function' ? icons[symbol] : icons.placeholder;

			var paths = creator();
			return React.createElement(Symbol, { key: symbol, id: symbol, definition: paths });
		})
	);
}

IconRegistry.defaultProps = {
	symbols: []
};

var StyledRegistry = styled.svg`
	position: fixed;
	height: 0;
	width: 0;
	overflow: hidden;
	padding: 0;
	visibility: hidden;
`;

function Symbol(props) {
	var paths = Array.isArray(props.definition) ? props.definition : [props.definition];

	return React.createElement(
		'symbol',
		{
			id: props.id,
			viewBox: '0 0 24 24'
		},
		paths.map(function (path) {
			return React.createElement(Path, { key: path, definition: path });
		})
	);
}

function Path(props) {
	var definition = props.definition;

	var def = typeof definition === 'string' ? { d: definition } : definition;
	var p = omit(def, ['tagName']);
	var Component = def.tagName || 'path';
	return React.createElement(Component, p);
}
//# sourceMappingURL=index.js.map