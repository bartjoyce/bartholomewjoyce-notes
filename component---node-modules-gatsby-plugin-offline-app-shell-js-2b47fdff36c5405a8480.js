webpackJsonp([99219681209289],{"./node_modules/gatsby-plugin-offline/app-shell.js":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n("./node_modules/babel-runtime/helpers/classCallCheck.js"),i=r(o),a=n("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),l=r(a),u=n("./node_modules/babel-runtime/helpers/inherits.js"),c=r(u),p=n("./node_modules/preact-compat/dist/preact-compat.js"),s=r(p),f=function(e){function t(){return(0,i.default)(this,t),(0,l.default)(this,e.apply(this,arguments))}return(0,c.default)(t,e),t.prototype.render=function(){return s.default.createElement("div",null)},t}(s.default.Component);t.default=f},"./node_modules/preact-compat/dist/preact-compat.js":function(e,t,n){(function(t){!function(t,r){e.exports=r(n("./node_modules/prop-types/index.js"),n("./node_modules/preact/dist/preact.js"))}(this,function(e,n){function r(){return null}function o(e){var t=e.nodeName,n=e.attributes;e.attributes={},t.defaultProps&&C(e.attributes,t.defaultProps),n&&C(e.attributes,n)}function i(e,t){var n,r,o;if(t){for(o in t)if(n=z.test(o))break;if(n){r=e.attributes={};for(o in t)t.hasOwnProperty(o)&&(r[z.test(o)?o.replace(/([A-Z0-9])/,"-$1").toLowerCase():o]=t[o])}}}function a(e,t,r){var o=t&&t._preactCompatRendered&&t._preactCompatRendered.base;o&&o.parentNode!==t&&(o=null),!o&&t&&(o=t.firstElementChild);for(var i=t.childNodes.length;i--;)t.childNodes[i]!==o&&t.removeChild(t.childNodes[i]);var a=n.render(e,t,o);return t&&(t._preactCompatRendered=a&&(a._component||{base:a})),"function"==typeof r&&r(),a&&a._component||a}function l(e,t,r,o){var i=n.h(F,{context:e.context},t),l=a(i,r),u=l._component||l.base;return o&&o.call(u,l),u}function u(e){var t=e._preactCompatRendered&&e._preactCompatRendered.base;return!(!t||t.parentNode!==e)&&(n.render(n.h(r),e,t),!0)}function c(e){return h.bind(null,e)}function p(e,t){for(var n=t||0;n<e.length;n++){var r=e[n];Array.isArray(r)?p(r):r&&"object"==typeof r&&!v(r)&&(r.props&&r.type||r.attributes&&r.nodeName||r.children)&&(e[n]=h(r.type||r.nodeName,r.props||r.attributes,r.children))}}function s(e){return"function"==typeof e&&!(e.prototype&&e.prototype.render)}function f(e){return P({displayName:e.displayName||e.name,render:function(){return e(this.props,this.context)}})}function d(e){var t=e[$];return t?t===!0?e:t:(t=f(e),Object.defineProperty(t,$,{configurable:!0,value:!0}),t.displayName=e.displayName,t.propTypes=e.propTypes,t.defaultProps=e.defaultProps,Object.defineProperty(e,$,{configurable:!0,value:t}),t)}function h(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return p(e,2),m(n.h.apply(void 0,e))}function m(e){e.preactCompatNormalized=!0,g(e),s(e.nodeName)&&(e.nodeName=d(e.nodeName));var t=e.attributes.ref,n=t&&typeof t;return!J||"string"!==n&&"number"!==n||(e.attributes.ref=y(t,J)),b(e),e}function _(e,t){for(var r=[],o=arguments.length-2;o-- >0;)r[o]=arguments[o+2];if(!v(e))return e;var i=e.attributes||e.props,a=n.h(e.nodeName||e.type,i,e.children||i&&i.children),l=[a,t];return r&&r.length?l.push(r):t&&t.children&&l.push(t.children),m(n.cloneElement.apply(void 0,l))}function v(e){return e&&(e instanceof q||e.$$typeof===V)}function y(e,t){return t._refProxies[e]||(t._refProxies[e]=function(n){t&&t.refs&&(t.refs[e]=n,null===n&&(delete t._refProxies[e],t=null))})}function b(e){var t=e.nodeName,n=e.attributes;if(n&&"string"==typeof t){var r={};for(var o in n)r[o.toLowerCase()]=o;if(r.ondoubleclick&&(n.ondblclick=n[r.ondoubleclick],delete n[r.ondoubleclick]),r.onchange&&("textarea"===t||"input"===t.toLowerCase()&&!/^fil|che|rad/i.test(n.type))){var i=r.oninput||"oninput";n[i]||(n[i]=j([n[i],n[r.onchange]]),delete n[r.onchange])}}}function g(e){var t=e.attributes||(e.attributes={});ee.enumerable="className"in t,t.className&&(t.class=t.className),Object.defineProperty(t,"className",ee)}function C(e,t){for(var n=arguments,r=1,o=void 0;r<arguments.length;r++)if(o=n[r])for(var i in o)o.hasOwnProperty(i)&&(e[i]=o[i]);return e}function N(e,t){for(var n in e)if(!(n in t))return!0;for(var r in t)if(e[r]!==t[r])return!0;return!1}function w(e){return e&&e.base||e}function x(){}function P(e){function t(e,t){S(this),O.call(this,e,t,H),E.call(this,e,t)}return e=C({constructor:t},e),e.mixins&&T(e,k(e.mixins)),e.statics&&C(t,e.statics),e.propTypes&&(t.propTypes=e.propTypes),e.defaultProps&&(t.defaultProps=e.defaultProps),e.getDefaultProps&&(t.defaultProps=e.getDefaultProps()),x.prototype=O.prototype,t.prototype=C(new x,e),t.displayName=e.displayName||"Component",t}function k(e){for(var t={},n=0;n<e.length;n++){var r=e[n];for(var o in r)r.hasOwnProperty(o)&&"function"==typeof r[o]&&(t[o]||(t[o]=[])).push(r[o])}return t}function T(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=j(t[n].concat(e[n]||K),"getDefaultProps"===n||"getInitialState"===n||"getChildContext"===n))}function S(e){for(var t in e){var n=e[t];"function"!=typeof n||n.__bound||I.hasOwnProperty(t)||((e[t]=n.bind(e)).__bound=!0)}}function U(e,t,n){if("string"==typeof t&&(t=e.constructor.prototype[t]),"function"==typeof t)return t.apply(e,n)}function j(e,t){return function(){for(var n,r=arguments,o=this,i=0;i<e.length;i++){var a=U(o,e[i],r);if(t&&null!=a){n||(n={});for(var l in a)a.hasOwnProperty(l)&&(n[l]=a[l])}else"undefined"!=typeof a&&(n=a)}return n}}function E(e,t){L.call(this,e,t),this.componentWillReceiveProps=j([L,this.componentWillReceiveProps||"componentWillReceiveProps"]),this.render=j([L,A,this.render||"render",M])}function L(t,n){if(t){var r=t.children;if(r&&Array.isArray(r)&&1===r.length&&("string"==typeof r[0]||"function"==typeof r[0]||r[0]instanceof q)&&(t.children=r[0],t.children&&"object"==typeof t.children&&(t.children.length=1,t.children[0]=t.children)),G){var o="function"==typeof this?this:this.constructor,i=this.propTypes||o.propTypes,a=this.displayName||o.name;i&&e.checkPropTypes(i,t,"prop",a)}}}function A(e){J=this}function M(){J===this&&(J=null)}function O(e,t,r){n.Component.call(this,e,t),this.state=this.getInitialState?this.getInitialState():{},this.refs={},this._refProxies={},r!==H&&E.call(this,e,t)}function W(e,t){O.call(this,e,t)}e="default"in e?e.default:e;var R="15.1.0",D="a abbr address area article aside audio b base bdi bdo big blockquote body br button canvas caption cite code col colgroup data datalist dd del details dfn dialog div dl dt em embed fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i iframe img input ins kbd keygen label legend li link main map mark menu menuitem meta meter nav noscript object ol optgroup option output p param picture pre progress q rp rt ruby s samp script section select small source span strong style sub summary sup table tbody td textarea tfoot th thead time title tr track u ul var video wbr circle clipPath defs ellipse g image line linearGradient mask path pattern polygon polyline radialGradient rect stop svg text tspan".split(" "),V="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,$="undefined"!=typeof Symbol?Symbol.for("__preactCompatWrapper"):"__preactCompatWrapper",I={constructor:1,render:1,shouldComponentUpdate:1,componentWillReceiveProps:1,componentWillUpdate:1,componentDidUpdate:1,componentWillMount:1,componentDidMount:1,componentWillUnmount:1,componentDidUnmount:1},z=/^(?:accent|alignment|arabic|baseline|cap|clip|color|fill|flood|font|glyph|horiz|marker|overline|paint|stop|strikethrough|stroke|text|underline|unicode|units|v|vector|vert|word|writing|x)[A-Z]/,H={},G="undefined"==typeof t||!1||!1,q=n.h("a",null).constructor;q.prototype.$$typeof=V,q.prototype.preactCompatUpgraded=!1,q.prototype.preactCompatNormalized=!1,Object.defineProperty(q.prototype,"type",{get:function(){return this.nodeName},set:function(e){this.nodeName=e},configurable:!0}),Object.defineProperty(q.prototype,"props",{get:function(){return this.attributes},set:function(e){this.attributes=e},configurable:!0});var Z=n.options.event;n.options.event=function(e){return Z&&(e=Z(e)),e.persist=Object,e.nativeEvent=e,e};var B=n.options.vnode;n.options.vnode=function(e){if(!e.preactCompatUpgraded){e.preactCompatUpgraded=!0;var t=e.nodeName,n=e.attributes=C({},e.attributes);"function"==typeof t?(t[$]===!0||t.prototype&&"isReactComponent"in t.prototype)&&(e.children&&""===String(e.children)&&(e.children=void 0),e.children&&(n.children=e.children),e.preactCompatNormalized||m(e),o(e)):(e.children&&""===String(e.children)&&(e.children=void 0),e.children&&(n.children=e.children),n.defaultValue&&(n.value||0===n.value||(n.value=n.defaultValue),delete n.defaultValue),i(e,n))}B&&B(e)};var F=function(){};F.prototype.getChildContext=function(){return this.props.context},F.prototype.render=function(e){return e.children[0]};for(var J,K=[],Q={map:function(e,t,n){return null==e?null:(e=Q.toArray(e),n&&n!==e&&(t=t.bind(n)),e.map(t))},forEach:function(e,t,n){return null==e?null:(e=Q.toArray(e),n&&n!==e&&(t=t.bind(n)),void e.forEach(t))},count:function(e){return e&&e.length||0},only:function(e){if(e=Q.toArray(e),1!==e.length)throw new Error("Children.only() expects only one child.");return e[0]},toArray:function(e){return null==e?[]:K.concat(e)}},X={},Y=D.length;Y--;)X[D[Y]]=c(D[Y]);var ee={configurable:!0,get:function(){return this.class},set:function(e){this.class=e}};C(O.prototype=new n.Component,{constructor:O,isReactComponent:{},replaceState:function(e,t){var n=this;this.setState(e,t);for(var r in n.state)r in e||delete n.state[r]},getDOMNode:function(){return this.base},isMounted:function(){return!!this.base}}),x.prototype=O.prototype,W.prototype=new x,W.prototype.isPureReactComponent=!0,W.prototype.shouldComponentUpdate=function(e,t){return N(this.props,e)||N(this.state,t)};var te={version:R,DOM:X,PropTypes:e,Children:Q,render:a,createClass:P,createFactory:c,createElement:h,cloneElement:_,isValidElement:v,findDOMNode:w,unmountComponentAtNode:u,Component:O,PureComponent:W,unstable_renderSubtreeIntoContainer:l,__spread:C};return te})}).call(t,n("./node_modules/process/browser.js"))},"./node_modules/preact/dist/preact.js":function(e,t,n){!function(){"use strict";function t(){}function n(e,n){var r,o,i,a,l=A;for(a=arguments.length;a-- >2;)L.push(arguments[a]);for(n&&null!=n.children&&(L.length||L.push(n.children),delete n.children);L.length;)if((o=L.pop())&&void 0!==o.pop)for(a=o.length;a--;)L.push(o[a]);else"boolean"==typeof o&&(o=null),(i="function"!=typeof e)&&(null==o?o="":"number"==typeof o?o=String(o):"string"!=typeof o&&(i=!1)),i&&r?l[l.length-1]+=o:l===A?l=[o]:l.push(o),r=i;var u=new t;return u.nodeName=e,u.children=l,u.attributes=null==n?void 0:n,u.key=null==n?void 0:n.key,void 0!==E.vnode&&E.vnode(u),u}function r(e,t){for(var n in t)e[n]=t[n];return e}function o(e,t){return n(e.nodeName,r(r({},e.attributes),t),arguments.length>2?[].slice.call(arguments,2):e.children)}function i(e){!e.__d&&(e.__d=!0)&&1==W.push(e)&&(E.debounceRendering||M)(a)}function a(){var e,t=W;for(W=[];e=t.pop();)e.__d&&k(e)}function l(e,t,n){return"string"==typeof t||"number"==typeof t?void 0!==e.splitText:"string"==typeof t.nodeName?!e._componentConstructor&&u(e,t.nodeName):n||e._componentConstructor===t.nodeName}function u(e,t){return e.__n===t||e.nodeName.toLowerCase()===t.toLowerCase()}function c(e){var t=r({},e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(void 0!==n)for(var o in n)void 0===t[o]&&(t[o]=n[o]);return t}function p(e,t){var n=t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e);return n.__n=e,n}function s(e){var t=e.parentNode;t&&t.removeChild(e)}function f(e,t,n,r,o){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)n&&n(null),r&&r(e);else if("class"!==t||o)if("style"===t){if(r&&"string"!=typeof r&&"string"!=typeof n||(e.style.cssText=r||""),r&&"object"==typeof r){if("string"!=typeof n)for(var i in n)i in r||(e.style[i]="");for(var i in r)e.style[i]="number"==typeof r[i]&&!1===O.test(i)?r[i]+"px":r[i]}}else if("dangerouslySetInnerHTML"===t)r&&(e.innerHTML=r.__html||"");else if("o"==t[0]&&"n"==t[1]){var a=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),r?n||e.addEventListener(t,h,a):e.removeEventListener(t,h,a),(e.__l||(e.__l={}))[t]=r}else if("list"!==t&&"type"!==t&&!o&&t in e)d(e,t,null==r?"":r),null!=r&&!1!==r||e.removeAttribute(t);else{var l=o&&t!==(t=t.replace(/^xlink\:?/,""));null==r||!1===r?l?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof r&&(l?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),r):e.setAttribute(t,r))}else e.className=r||""}function d(e,t,n){try{e[t]=n}catch(e){}}function h(e){return this.__l[e.type](E.event&&E.event(e)||e)}function m(){for(var e;e=R.pop();)E.afterMount&&E.afterMount(e),e.componentDidMount&&e.componentDidMount()}function _(e,t,n,r,o,i){D++||(V=null!=o&&void 0!==o.ownerSVGElement,$=null!=e&&!("__preactattr_"in e));var a=v(e,t,n,r,i);return o&&a.parentNode!==o&&o.appendChild(a),--D||($=!1,i||m()),a}function v(e,t,n,r,o){var i=e,a=V;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||o)?e.nodeValue!=t&&(e.nodeValue=t):(i=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(i,e),b(e,!0))),i.__preactattr_=!0,i;var l=t.nodeName;if("function"==typeof l)return T(e,t,n,r);if(V="svg"===l||"foreignObject"!==l&&V,l=String(l),(!e||!u(e,l))&&(i=p(l,V),e)){for(;e.firstChild;)i.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(i,e),b(e,!0)}var c=i.firstChild,s=i.__preactattr_,f=t.children;if(null==s){s=i.__preactattr_={};for(var d=i.attributes,h=d.length;h--;)s[d[h].name]=d[h].value}return!$&&f&&1===f.length&&"string"==typeof f[0]&&null!=c&&void 0!==c.splitText&&null==c.nextSibling?c.nodeValue!=f[0]&&(c.nodeValue=f[0]):(f&&f.length||null!=c)&&y(i,f,n,r,$||null!=s.dangerouslySetInnerHTML),C(i,t.attributes,s),V=a,i}function y(e,t,n,r,o){var i,a,u,c,p,f=e.childNodes,d=[],h={},m=0,_=0,y=f.length,g=0,C=t?t.length:0;if(0!==y)for(var N=0;N<y;N++){var w=f[N],x=w.__preactattr_,P=C&&x?w._component?w._component.__k:x.key:null;null!=P?(m++,h[P]=w):(x||(void 0!==w.splitText?!o||w.nodeValue.trim():o))&&(d[g++]=w)}if(0!==C)for(var N=0;N<C;N++){c=t[N],p=null;var P=c.key;if(null!=P)m&&void 0!==h[P]&&(p=h[P],h[P]=void 0,m--);else if(!p&&_<g)for(i=_;i<g;i++)if(void 0!==d[i]&&l(a=d[i],c,o)){p=a,d[i]=void 0,i===g-1&&g--,i===_&&_++;break}p=v(p,c,n,r),u=f[N],p&&p!==e&&p!==u&&(null==u?e.appendChild(p):p===u.nextSibling?s(u):e.insertBefore(p,u))}if(m)for(var N in h)void 0!==h[N]&&b(h[N],!1);for(;_<=g;)void 0!==(p=d[g--])&&b(p,!1)}function b(e,t){var n=e._component;n?S(n):(null!=e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),!1!==t&&null!=e.__preactattr_||s(e),g(e))}function g(e){for(e=e.lastChild;e;){var t=e.previousSibling;b(e,!0),e=t}}function C(e,t,n){var r;for(r in n)t&&null!=t[r]||null==n[r]||f(e,r,n[r],n[r]=void 0,V);for(r in t)"children"===r||"innerHTML"===r||r in n&&t[r]===("value"===r||"checked"===r?e[r]:n[r])||f(e,r,n[r],n[r]=t[r],V)}function N(e){var t=e.constructor.name;(I[t]||(I[t]=[])).push(e)}function w(e,t,n){var r,o=I[e.name];if(e.prototype&&e.prototype.render?(r=new e(t,n),U.call(r,t,n)):(r=new U(t,n),r.constructor=e,r.render=x),o)for(var i=o.length;i--;)if(o[i].constructor===e){r.__b=o[i].__b,o.splice(i,1);break}return r}function x(e,t,n){return this.constructor(e,n)}function P(e,t,n,r,o){e.__x||(e.__x=!0,(e.__r=t.ref)&&delete t.ref,(e.__k=t.key)&&delete t.key,!e.base||o?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,r),r&&r!==e.context&&(e.__c||(e.__c=e.context),e.context=r),e.__p||(e.__p=e.props),e.props=t,e.__x=!1,0!==n&&(1!==n&&!1===E.syncComponentUpdates&&e.base?i(e):k(e,1,o)),e.__r&&e.__r(e))}function k(e,t,n,o){if(!e.__x){var i,a,l,u=e.props,p=e.state,s=e.context,f=e.__p||u,d=e.__s||p,h=e.__c||s,v=e.base,y=e.__b,g=v||y,C=e._component,N=!1;if(v&&(e.props=f,e.state=d,e.context=h,2!==t&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(u,p,s)?N=!0:e.componentWillUpdate&&e.componentWillUpdate(u,p,s),e.props=u,e.state=p,e.context=s),e.__p=e.__s=e.__c=e.__b=null,e.__d=!1,!N){i=e.render(u,p,s),e.getChildContext&&(s=r(r({},s),e.getChildContext()));var x,T,U=i&&i.nodeName;if("function"==typeof U){var j=c(i);a=C,a&&a.constructor===U&&j.key==a.__k?P(a,j,1,s,!1):(x=a,e._component=a=w(U,j,s),a.__b=a.__b||y,a.__u=e,P(a,j,0,s,!1),k(a,1,n,!0)),T=a.base}else l=g,x=C,x&&(l=e._component=null),(g||1===t)&&(l&&(l._component=null),T=_(l,i,s,n||!v,g&&g.parentNode,!0));if(g&&T!==g&&a!==C){var L=g.parentNode;L&&T!==L&&(L.replaceChild(T,g),x||(g._component=null,b(g,!1)))}if(x&&S(x),e.base=T,T&&!o){for(var A=e,M=e;M=M.__u;)(A=M).base=T;T._component=A,T._componentConstructor=A.constructor}}if(!v||n?R.unshift(e):N||(e.componentDidUpdate&&e.componentDidUpdate(f,d,h),E.afterUpdate&&E.afterUpdate(e)),null!=e.__h)for(;e.__h.length;)e.__h.pop().call(e);D||o||m()}}function T(e,t,n,r){for(var o=e&&e._component,i=o,a=e,l=o&&e._componentConstructor===t.nodeName,u=l,p=c(t);o&&!u&&(o=o.__u);)u=o.constructor===t.nodeName;return o&&u&&(!r||o._component)?(P(o,p,3,n,r),e=o.base):(i&&!l&&(S(i),e=a=null),o=w(t.nodeName,p,n),e&&!o.__b&&(o.__b=e,a=null),P(o,p,1,n,r),e=o.base,a&&e!==a&&(a._component=null,b(a,!1))),e}function S(e){E.beforeUnmount&&E.beforeUnmount(e);var t=e.base;e.__x=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var n=e._component;n?S(n):t&&(t.__preactattr_&&t.__preactattr_.ref&&t.__preactattr_.ref(null),e.__b=t,s(t),N(e),g(t)),e.__r&&e.__r(null)}function U(e,t){this.__d=!0,this.context=t,this.props=e,this.state=this.state||{}}function j(e,t,n){return _(n,e,{},!1,t,!1)}var E={},L=[],A=[],M="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout,O=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,W=[],R=[],D=0,V=!1,$=!1,I={};r(U.prototype,{setState:function(e,t){var n=this.state;this.__s||(this.__s=r({},n)),r(n,"function"==typeof e?e(n,this.props):e),t&&(this.__h=this.__h||[]).push(t),i(this)},forceUpdate:function(e){e&&(this.__h=this.__h||[]).push(e),k(this,2)},render:function(){}});var z={h:n,createElement:n,cloneElement:o,Component:U,render:j,rerender:a,options:E};e.exports=z}()},"./node_modules/process/browser.js":function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(p===setTimeout)return setTimeout(e,0);if((p===n||!p)&&setTimeout)return p=setTimeout,setTimeout(e,0);try{return p(e,0)}catch(t){try{return p.call(null,e,0)}catch(t){return p.call(this,e,0)}}}function i(e){if(s===clearTimeout)return clearTimeout(e);if((s===r||!s)&&clearTimeout)return s=clearTimeout,clearTimeout(e);try{return s(e)}catch(t){try{return s.call(null,e)}catch(t){return s.call(this,e)}}}function a(){m&&d&&(m=!1,d.length?h=d.concat(h):_=-1,h.length&&l())}function l(){if(!m){var e=o(a);m=!0;for(var t=h.length;t;){for(d=h,h=[];++_<t;)d&&d[_].run();_=-1,t=h.length}d=null,m=!1,i(e)}}function u(e,t){this.fun=e,this.array=t}function c(){}var p,s,f=e.exports={};!function(){try{p="function"==typeof setTimeout?setTimeout:n}catch(e){p=n}try{s="function"==typeof clearTimeout?clearTimeout:r}catch(e){s=r}}();var d,h=[],m=!1,_=-1;f.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];h.push(new u(e,t)),1!==h.length||m||o(l)},u.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=c,f.addListener=c,f.once=c,f.off=c,f.removeListener=c,f.removeAllListeners=c,f.emit=c,f.prependListener=c,f.prependOnceListener=c,f.listeners=function(e){return[]},f.binding=function(e){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(e){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}}});
//# sourceMappingURL=component---node-modules-gatsby-plugin-offline-app-shell-js-2b47fdff36c5405a8480.js.map