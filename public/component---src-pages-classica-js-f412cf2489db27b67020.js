(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"2lns":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),i=n("9CUm"),o=n("oq01"),c=(n("9cXN"),n("i2vu")),s=n.n(c),l=n("jlVs"),f=n.n(l),d=n("97yu"),u=n.n(d),p=n("HCUH"),h=n.n(p),g=n("TQx7"),b=n.n(g),m=n("bR3x"),v=n.n(m),w=n("EPUT"),E=n.n(w),y=n("hm8Y"),O=n.n(y),x=n("uiKE"),V=n.n(x),N=n("wxFb"),_=n.n(N);t.default=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(i.a,{keywords:["UI Designer","Web Designer","Product Designer","Front-end Developer"],title:"Classica"}),a.a.createElement(o.a,null,a.a.createElement("div",{className:"w-full max-w-full mx-auto mb-10"},a.a.createElement("img",{src:s.a,className:"w-full"}),a.a.createElement("img",{src:E.a,className:"w-full pt-8"}),a.a.createElement("img",{src:O.a,className:"w-full pt-8"}),a.a.createElement("img",{src:V.a,className:"w-full pt-8"}),a.a.createElement("img",{src:v.a,className:"w-full pt-8"}),a.a.createElement("div",{class:"grid sm:grid-cols-2 gap-6 py-8"},a.a.createElement("img",{src:f.a}),a.a.createElement("img",{src:u.a}),a.a.createElement("img",{src:h.a}),a.a.createElement("img",{src:b.a})),a.a.createElement("img",{src:_.a,className:"w-full"}))))}},"97yu":function(e,t,n){e.exports=n.p+"static/classica_2-2992e71a12927ab62dfda8d0af253225.png"},"9cXN":function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),i=n("wEEd");n("dZ+Y"),n("8+KV"),n("LK8F"),n("a1Th"),n("h7Nl"),n("XfO3"),n("9AAn"),n("V+eJ"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("hHhE"),n("91GP"),n("HAE/");var o=function(e,t){if(!e)throw new Error("Invariant failed")};function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var f=new Map,d=new Map,u=new Map,p=0;function h(e,t,n){void 0===n&&(n={}),n.threshold||(n.threshold=0);var r=n,a=r.root,i=r.rootMargin,c=r.threshold;if(f.has(e)&&o(!1),e){var s=function(e){return e?u.has(e)?u.get(e):(p+=1,u.set(e,p.toString()),u.get(e)+"_"):""}(a)+(i?c.toString()+"_"+i:c.toString()),l=d.get(s);l||(l=new IntersectionObserver(b,n),s&&d.set(s,l));var h={callback:t,element:e,inView:!1,observerId:s,observer:l,thresholds:l.thresholds||(Array.isArray(c)?c:[c])};return f.set(e,h),l.observe(e),h}}function g(e){if(e){var t=f.get(e);if(t){var n=t.observerId,r=t.observer,a=r.root;r.unobserve(e);var i=!1,o=!1;n&&f.forEach((function(t,r){r!==e&&(t.observerId===n&&(i=!0,o=!0),t.observer.root===a&&(o=!0))})),!o&&a&&u.delete(a),r&&!i&&r.disconnect(),f.delete(e)}}}function b(e){e.forEach((function(e){var t=e.isIntersecting,n=e.intersectionRatio,r=e.target,a=f.get(r);if(a&&n>=0){var i=a.thresholds.some((function(e){return a.inView?n>e:n>=e}));void 0!==t&&(i=i&&t),a.inView=i,a.callback(i,e)}}))}var m=function(e){var t,n;function a(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return c(l(t=e.call.apply(e,[this].concat(r))||this),"state",{inView:!1,entry:void 0}),c(l(t),"node",null),c(l(t),"handleNode",(function(e){t.node&&(g(t.node),e||t.props.triggerOnce||t.setState({inView:!1,entry:void 0})),t.node=e||null,t.observeNode()})),c(l(t),"handleChange",(function(e,n){(e!==t.state.inView||e)&&t.setState({inView:e,entry:n}),t.props.onChange&&t.props.onChange(e,n)})),t}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=a.prototype;return i.componentDidMount=function(){this.node||o(!1)},i.componentDidUpdate=function(e,t){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold||(g(this.node),this.observeNode()),t.inView!==this.state.inView&&this.state.inView&&this.props.triggerOnce&&(g(this.node),this.node=null)},i.componentWillUnmount=function(){this.node&&(g(this.node),this.node=null)},i.observeNode=function(){if(this.node){var e=this.props,t=e.threshold,n=e.root,r=e.rootMargin;h(this.node,this.handleChange,{threshold:t,root:n,rootMargin:r})}},i.render=function(){var e=this.state,t=e.inView,n=e.entry;if(!function(e){return"function"!=typeof e.children}(this.props))return this.props.children({inView:t,entry:n,ref:this.handleNode});var a=this.props,i=a.children,o=a.as,c=a.tag,l=(a.triggerOnce,a.threshold,a.root,a.rootMargin,a.onChange,function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(a,["children","as","tag","triggerOnce","threshold","root","rootMargin","onChange"]));return Object(r.createElement)(o||c||"div",s({ref:this.handleNode},l),i)},a}(r.Component);c(m,"displayName","InView"),c(m,"defaultProps",{threshold:0,triggerOnce:!1});var v={inView:!1,entry:void 0};t.a=function(e){var t=e.children,n=Object(r.useState)(!1),o=n[0],c=n[1],s=function(e){void 0===e&&(e={});var t=Object(r.useRef)(),n=Object(r.useState)(v),a=n[0],i=n[1],o=Object(r.useCallback)((function(n){t.current&&g(t.current),n&&h(n,(function(t,r){i({inView:t,entry:r}),t&&e.triggerOnce&&g(n)}),e),t.current=n}),[e.threshold,e.root,e.rootMargin,e.triggerOnce]);return Object(r.useEffect)((function(){t.current||a===v||e.triggerOnce||i(v)})),[o,a.inView,a.entry]}({rootMargin:"-100px 0px"}),l=s[0],f=s[1],d=Object(i.b)({config:{mass:1,tension:120,friction:30},opacity:o?1:0,transform:o?"translate3d(0,0rem,0)":"translate3d(0,10rem,0)"});return Object(r.useEffect)((function(){!o&&f&&c(!0)}),[f]),a.a.createElement(i.a.div,{ref:l,style:d},t)}},EPUT:function(e,t,n){e.exports=n.p+"static/classica_13-d09676a0191524fe1212f9ce202742fb.png"},HCUH:function(e,t,n){e.exports=n.p+"static/classica_3-6cb214bb9636c42e5a0074c180d914e2.png"},TQx7:function(e,t,n){e.exports=n.p+"static/classica_4-0b4128e4499e4afd3ed60f7a28dafbcf.png"},bR3x:function(e,t,n){e.exports=n.p+"static/classica_12-317f3e42a65d2b9c32dd7dfaed751ae2.png"},hm8Y:function(e,t,n){e.exports=n.p+"static/classica_14-bc8e9cf486ec6d41ab757606bd0c79c9.png"},i2vu:function(e,t,n){e.exports=n.p+"static/classica_banner_1-2fabc06801918af3813c8d34ca9d68bc.png"},jlVs:function(e,t,n){e.exports=n.p+"static/classica_1-9960d87e9dd46bc40f6e019c26565e62.png"},uiKE:function(e,t,n){e.exports=n.p+"static/classica_15-c522def56fc3fe675079058e373700b6.png"},wxFb:function(e,t,n){e.exports=n.p+"static/classica_16-8a3ca496cd4ef1453af5dff57390c66d.png"}}]);
//# sourceMappingURL=component---src-pages-classica-js-f412cf2489db27b67020.js.map