vcvWebpackJsonp([5],{0:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}n("./public/polyfills.js");var s=n("./public/resources/api/publicAPI.js"),i=o(s);window.vcv=i["default"],jQuery("[data-vcv-no-js]").removeAttr("data-vcv-no-js"),jQuery(document).ready(function(){i["default"].trigger("ready")},!1)},"./node_modules/event-emitter/index.js":function(e,t,n){"use strict";var o,s,i,c,r,u,l,a=n("./node_modules/d/index.js"),d=n("./node_modules/es5-ext/object/valid-callable.js"),f=Function.prototype.apply,p=Function.prototype.call,j=Object.create,_=Object.defineProperty,m=Object.defineProperties,b=Object.prototype.hasOwnProperty,v={configurable:!0,enumerable:!1,writable:!0};o=function(e,t){var n;return d(t),b.call(this,"__ee__")?n=this.__ee__:(n=v.value=j(null),_(this,"__ee__",v),v.value=null),n[e]?"object"==typeof n[e]?n[e].push(t):n[e]=[n[e],t]:n[e]=t,this},s=function(e,t){var n,s;return d(t),s=this,o.call(this,e,n=function(){i.call(s,e,n),f.call(t,this,arguments)}),n.__eeOnceListener__=t,this},i=function(e,t){var n,o,s,i;if(d(t),!b.call(this,"__ee__"))return this;if(n=this.__ee__,!n[e])return this;if(o=n[e],"object"==typeof o)for(i=0;s=o[i];++i)s!==t&&s.__eeOnceListener__!==t||(2===o.length?n[e]=o[i?0:1]:o.splice(i,1));else o!==t&&o.__eeOnceListener__!==t||delete n[e];return this},c=function(e){var t,n,o,s,i;if(b.call(this,"__ee__")&&(s=this.__ee__[e]))if("object"==typeof s){for(n=arguments.length,i=new Array(n-1),t=1;t<n;++t)i[t-1]=arguments[t];for(s=s.slice(),t=0;o=s[t];++t)f.call(o,this,i)}else switch(arguments.length){case 1:p.call(s,this);break;case 2:p.call(s,this,arguments[1]);break;case 3:p.call(s,this,arguments[1],arguments[2]);break;default:for(n=arguments.length,i=new Array(n-1),t=1;t<n;++t)i[t-1]=arguments[t];f.call(s,this,i)}},r={on:o,once:s,off:i,emit:c},u={on:a(o),once:a(s),off:a(i),emit:a(c)},l=m({},u),e.exports=t=function(e){return null==e?j(l):m(Object(e),u)},t.methods=r},"./public/resources/api/publicAPI.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n("./node_modules/event-emitter/index.js"),i=o(s),c=function(){};(0,i["default"])(c.prototype);var r=new c;t["default"]={on:function(e,t){r.on("vcv:api:"+e,t)},once:function(e,t){r.once("vcv:api:"+e,t)},off:function(e,t){r.off("vcv:api:"+e,t)},trigger:function(e){var t=Array.prototype.slice.call(arguments,1);r.emit.apply(r,["vcv:api:"+e].concat(t))},ready:function(e){this.once("ready",e)}}},"./node_modules/d/index.js":function(e,t,n){"use strict";var o,s=n("./node_modules/es5-ext/object/assign/index.js"),i=n("./node_modules/es5-ext/object/normalize-options.js"),c=n("./node_modules/es5-ext/object/is-callable.js"),r=n("./node_modules/es5-ext/string/#/contains/index.js");o=e.exports=function(e,t){var n,o,c,u,l;return arguments.length<2||"string"!=typeof e?(u=t,t=e,e=null):u=arguments[2],null==e?(n=c=!0,o=!1):(n=r.call(e,"c"),o=r.call(e,"e"),c=r.call(e,"w")),l={value:t,configurable:n,enumerable:o,writable:c},u?s(i(u),l):l},o.gs=function(e,t,n){var o,u,l,a;return"string"!=typeof e?(l=n,n=t,t=e,e=null):l=arguments[3],null==t?t=void 0:c(t)?null==n?n=void 0:c(n)||(l=n,n=void 0):(l=t,t=n=void 0),null==e?(o=!0,u=!1):(o=r.call(e,"c"),u=r.call(e,"e")),a={get:t,set:n,configurable:o,enumerable:u},l?s(i(l),a):a}},"./node_modules/es5-ext/function/noop.js":function(e,t){"use strict";e.exports=function(){}},"./node_modules/es5-ext/object/assign/index.js":function(e,t,n){"use strict";e.exports=n("./node_modules/es5-ext/object/assign/is-implemented.js")()?Object.assign:n("./node_modules/es5-ext/object/assign/shim.js")},"./node_modules/es5-ext/object/assign/is-implemented.js":function(e,t){"use strict";e.exports=function(){var e,t=Object.assign;return"function"==typeof t&&(e={foo:"raz"},t(e,{bar:"dwa"},{trzy:"trzy"}),e.foo+e.bar+e.trzy==="razdwatrzy")}},"./node_modules/es5-ext/object/assign/shim.js":function(e,t,n){"use strict";var o=n("./node_modules/es5-ext/object/keys/index.js"),s=n("./node_modules/es5-ext/object/valid-value.js"),i=Math.max;e.exports=function(e,t){var n,c,r,u=i(arguments.length,2);for(e=Object(s(e)),r=function(o){try{e[o]=t[o]}catch(s){n||(n=s)}},c=1;c<u;++c)t=arguments[c],o(t).forEach(r);if(void 0!==n)throw n;return e}},"./node_modules/es5-ext/object/is-callable.js":function(e,t){"use strict";e.exports=function(e){return"function"==typeof e}},"./node_modules/es5-ext/object/is-value.js":function(e,t,n){"use strict";var o=n("./node_modules/es5-ext/function/noop.js")();e.exports=function(e){return e!==o&&null!==e}},"./public/polyfills.js":function(e,t){"use strict";!function(e){"function"!=typeof e.matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,n=(t.document||t.ownerDocument).querySelectorAll(e),o=0;n[o]&&n[o]!==t;)++o;return Boolean(n[o])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window.Element.prototype)},"./node_modules/es5-ext/object/keys/is-implemented.js":function(e,t){"use strict";e.exports=function(){try{return Object.keys("primitive"),!0}catch(e){return!1}}},"./node_modules/es5-ext/object/keys/shim.js":function(e,t,n){"use strict";var o=n("./node_modules/es5-ext/object/is-value.js"),s=Object.keys;e.exports=function(e){return s(o(e)?Object(e):e)}},"./node_modules/es5-ext/object/normalize-options.js":function(e,t,n){"use strict";var o=n("./node_modules/es5-ext/object/is-value.js"),s=Array.prototype.forEach,i=Object.create,c=function(e,t){var n;for(n in e)t[n]=e[n]};e.exports=function(e){var t=i(null);return s.call(arguments,function(e){o(e)&&c(Object(e),t)}),t}},"./node_modules/es5-ext/object/valid-callable.js":function(e,t){"use strict";e.exports=function(e){if("function"!=typeof e)throw new TypeError(e+" is not a function");return e}},"./node_modules/es5-ext/object/valid-value.js":function(e,t,n){"use strict";var o=n("./node_modules/es5-ext/object/is-value.js");e.exports=function(e){if(!o(e))throw new TypeError("Cannot use null or undefined");return e}},"./node_modules/es5-ext/string/#/contains/index.js":function(e,t,n){"use strict";e.exports=n("./node_modules/es5-ext/string/#/contains/is-implemented.js")()?String.prototype.contains:n("./node_modules/es5-ext/string/#/contains/shim.js")},"./node_modules/es5-ext/string/#/contains/is-implemented.js":function(e,t){"use strict";var n="razdwatrzy";e.exports=function(){return"function"==typeof n.contains&&(n.contains("dwa")===!0&&n.contains("foo")===!1)}},"./node_modules/es5-ext/string/#/contains/shim.js":function(e,t){"use strict";var n=String.prototype.indexOf;e.exports=function(e){return n.call(this,e,arguments[1])>-1}},"./node_modules/es5-ext/object/keys/index.js":function(e,t,n){"use strict";e.exports=n("./node_modules/es5-ext/object/keys/is-implemented.js")()?Object.keys:n("./node_modules/es5-ext/object/keys/shim.js")}});