(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7913:function(e,t,n){"use strict";var r=n(5696);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,u=(o=n(7294))&&o.__esModule?o:{default:o},a=n(2199),c=n(1587),f=n(7215);var l={};function i(e,t,n,r){if(e&&a.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(o?"%"+o:"")]=!0}}var s=function(e){var t,n=!1!==e.prefetch,o=c.useRouter(),s=u.default.useMemo((function(){var t=a.resolveHref(o,e.href,!0),n=r(t,2),u=n[0],c=n[1];return{href:u,as:e.as?a.resolveHref(o,e.as):c||u}}),[o,e.href,e.as]),d=s.href,p=s.as,v=u.default.useRef(d),h=u.default.useRef(p),b=e.children,g=e.replace,y=e.shallow,_=e.scroll,m=e.locale;"string"===typeof b&&(b=u.default.createElement("a",null,b));var E=(t=u.default.Children.only(b))&&"object"===typeof t&&t.ref,L=f.useIntersection({rootMargin:"200px"}),M=r(L,3),k=M[0],w=M[1],C=M[2],j=u.default.useCallback((function(e){h.current===p&&v.current===d||(C(),h.current=p,v.current=d),k(e),E&&("function"===typeof E?E(e):"object"===typeof E&&(E.current=e))}),[p,E,d,C,k]);u.default.useEffect((function(){var e=w&&n&&a.isLocalURL(d),t="undefined"!==typeof m?m:o&&o.locale,r=l[d+"%"+p+(t?"%"+t:"")];e&&!r&&i(o,d,p,{locale:t})}),[p,d,w,m,n,o]);var x={ref:j,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,u,c,f){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(n))&&(e.preventDefault(),t[o?"replace":"push"](n,r,{shallow:u,locale:f,scroll:c}))}(e,o,d,p,g,y,_,m)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),a.isLocalURL(d)&&i(o,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var R="undefined"!==typeof m?m:o&&o.locale,I=o&&o.isLocaleDomain&&a.getDomainLocale(p,R,o&&o.locales,o&&o.domainLocales);x.href=I||a.addBasePath(a.addLocale(p,R,o&&o.defaultLocale))}return u.default.cloneElement(t,x)};t.default=s,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},7215:function(e,t,n){"use strict";var r=n(5696);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,l=e.disabled||!a,i=o.useRef(),s=o.useState(!1),d=r(s,2),p=d[0],v=d[1],h=o.useState(t?t.current:null),b=r(h,2),g=b[0],y=b[1],_=o.useCallback((function(e){i.current&&(i.current(),i.current=void 0),l||p||e&&e.tagName&&(i.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=f.find((function(e){return e.root===n.root&&e.margin===n.margin}));r?t=c.get(r):(t=c.get(n),f.push(n));if(t)return t;var o=new Map,u=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(n,t={id:n,observer:u,elements:o}),t}(n),o=r.id,u=r.observer,a=r.elements;return a.set(e,t),u.observe(e),function(){if(a.delete(e),u.unobserve(e),0===a.size){u.disconnect(),c.delete(o);var t=f.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&f.splice(t,1)}}}(e,(function(e){return e&&v(e)}),{root:g,rootMargin:n}))}),[l,g,n,p]),m=o.useCallback((function(){v(!1)}),[]);return o.useEffect((function(){if(!a&&!p){var e=u.requestIdleCallback((function(){return v(!0)}));return function(){return u.cancelIdleCallback(e)}}}),[p]),o.useEffect((function(){t&&y(t.current)}),[t]),[_,p,m]};var o=n(7294),u=n(8065),a="undefined"!==typeof IntersectionObserver;var c=new Map,f=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},8265:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});var r=n(1664),o=n.n(r),u=n(5893);function a(){return(0,u.jsxs)("div",{children:["Hello World."," ",(0,u.jsx)(o(),{href:"/about",as:"/Next-gh-page-example/about",children:(0,u.jsx)("a",{children:"About"})})]})}},8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(8265)}])},1664:function(e,t,n){e.exports=n(7913)}},function(e){e.O(0,[774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);