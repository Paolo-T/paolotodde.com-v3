(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"2lns":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),i=n("9CUm"),o=n("oq01"),c=(n("9cXN"),n("5wpE")),s=n.n(c),l=n("720e"),u=n.n(l),f=n("fFuR"),d=n.n(f),p=n("cyFg"),h=n.n(p),g=n("TOXu"),b=n.n(g),w=n("iuYe"),m=n.n(w),v=n("6w11"),y=n.n(v),E=n("mud+"),O=n.n(E),V=n("yiR6"),N=n.n(V),_=n("4qeY"),x=n.n(_);t.default=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(i.a,{keywords:["UI Design","Product Design","Product Designer","Messaging App","App","UI Designer","Web Designer","Product Designer","Front-end Developer","Portfolio","Brighton","Uk"],title:"Classica"}),a.a.createElement(o.a,null,a.a.createElement("div",{className:"w-full max-w-full mx-auto mb-10"},a.a.createElement("img",{src:s.a,className:"w-full"}),a.a.createElement("img",{src:y.a,className:"w-full pt-8"}),a.a.createElement("img",{src:O.a,className:"w-full pt-8"}),a.a.createElement("img",{src:N.a,className:"w-full pt-8"}),a.a.createElement("img",{src:m.a,className:"w-full pt-8"}),a.a.createElement("div",{class:"grid sm:grid-cols-2 gap-6 py-8"},a.a.createElement("img",{src:u.a}),a.a.createElement("img",{src:d.a}),a.a.createElement("img",{src:h.a}),a.a.createElement("img",{src:b.a})),a.a.createElement("img",{src:x.a,className:"w-full"}))))}},"4qeY":function(e,t,n){e.exports=n.p+"static/classica_16-f83de54d01ad7f46905763e0514d649c.webp"},"5wpE":function(e,t,n){e.exports=n.p+"static/classica_banner_1-7a8b63c5915da42efca9be3a97674626.webp"},"6w11":function(e,t,n){e.exports=n.p+"static/classica_13-9727db507fc7a480d7c2ec7ba5c752b4.webp"},"720e":function(e,t,n){e.exports=n.p+"static/classica_1-e3c7738b8a9aa3a5a61c89c6ed2b4559.webp"},"9cXN":function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),i=n("wEEd");n("dZ+Y"),n("8+KV"),n("LK8F"),n("a1Th"),n("h7Nl"),n("XfO3"),n("9AAn"),n("V+eJ"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("hHhE"),n("91GP"),n("HAE/");var o=function(e,t){if(!e)throw new Error("Invariant failed")};function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var u=new Map,f=new Map,d=new Map,p=0;function h(e,t,n){void 0===n&&(n={}),n.threshold||(n.threshold=0);var r=n,a=r.root,i=r.rootMargin,c=r.threshold;if(u.has(e)&&o(!1),e){var s=function(e){return e?d.has(e)?d.get(e):(p+=1,d.set(e,p.toString()),d.get(e)+"_"):""}(a)+(i?c.toString()+"_"+i:c.toString()),l=f.get(s);l||(l=new IntersectionObserver(b,n),s&&f.set(s,l));var h={callback:t,element:e,inView:!1,observerId:s,observer:l,thresholds:l.thresholds||(Array.isArray(c)?c:[c])};return u.set(e,h),l.observe(e),h}}function g(e){if(e){var t=u.get(e);if(t){var n=t.observerId,r=t.observer,a=r.root;r.unobserve(e);var i=!1,o=!1;n&&u.forEach((function(t,r){r!==e&&(t.observerId===n&&(i=!0,o=!0),t.observer.root===a&&(o=!0))})),!o&&a&&d.delete(a),r&&!i&&r.disconnect(),u.delete(e)}}}function b(e){e.forEach((function(e){var t=e.isIntersecting,n=e.intersectionRatio,r=e.target,a=u.get(r);if(a&&n>=0){var i=a.thresholds.some((function(e){return a.inView?n>e:n>=e}));void 0!==t&&(i=i&&t),a.inView=i,a.callback(i,e)}}))}var w=function(e){var t,n;function a(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return c(l(t=e.call.apply(e,[this].concat(r))||this),"state",{inView:!1,entry:void 0}),c(l(t),"node",null),c(l(t),"handleNode",(function(e){t.node&&(g(t.node),e||t.props.triggerOnce||t.setState({inView:!1,entry:void 0})),t.node=e||null,t.observeNode()})),c(l(t),"handleChange",(function(e,n){(e!==t.state.inView||e)&&t.setState({inView:e,entry:n}),t.props.onChange&&t.props.onChange(e,n)})),t}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=a.prototype;return i.componentDidMount=function(){this.node||o(!1)},i.componentDidUpdate=function(e,t){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold||(g(this.node),this.observeNode()),t.inView!==this.state.inView&&this.state.inView&&this.props.triggerOnce&&(g(this.node),this.node=null)},i.componentWillUnmount=function(){this.node&&(g(this.node),this.node=null)},i.observeNode=function(){if(this.node){var e=this.props,t=e.threshold,n=e.root,r=e.rootMargin;h(this.node,this.handleChange,{threshold:t,root:n,rootMargin:r})}},i.render=function(){var e=this.state,t=e.inView,n=e.entry;if(!function(e){return"function"!=typeof e.children}(this.props))return this.props.children({inView:t,entry:n,ref:this.handleNode});var a=this.props,i=a.children,o=a.as,c=a.tag,l=(a.triggerOnce,a.threshold,a.root,a.rootMargin,a.onChange,function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(a,["children","as","tag","triggerOnce","threshold","root","rootMargin","onChange"]));return Object(r.createElement)(o||c||"div",s({ref:this.handleNode},l),i)},a}(r.Component);c(w,"displayName","InView"),c(w,"defaultProps",{threshold:0,triggerOnce:!1});var m={inView:!1,entry:void 0};t.a=function(e){var t=e.children,n=Object(r.useState)(!1),o=n[0],c=n[1],s=function(e){void 0===e&&(e={});var t=Object(r.useRef)(),n=Object(r.useState)(m),a=n[0],i=n[1],o=Object(r.useCallback)((function(n){t.current&&g(t.current),n&&h(n,(function(t,r){i({inView:t,entry:r}),t&&e.triggerOnce&&g(n)}),e),t.current=n}),[e.threshold,e.root,e.rootMargin,e.triggerOnce]);return Object(r.useEffect)((function(){t.current||a===m||e.triggerOnce||i(m)})),[o,a.inView,a.entry]}({rootMargin:"-100px 0px"}),l=s[0],u=s[1],f=Object(i.b)({config:{mass:1,tension:120,friction:30},opacity:o?1:0,transform:o?"translate3d(0,0rem,0)":"translate3d(0,10rem,0)"});return Object(r.useEffect)((function(){!o&&u&&c(!0)}),[u]),a.a.createElement(i.a.div,{ref:l,style:f},t)}},TOXu:function(e,t,n){e.exports=n.p+"static/classica_4-99fbc513fbdcfce05aad5bf17d391cb9.webp"},cyFg:function(e,t,n){e.exports=n.p+"static/classica_3-4b533bd5772cf134dd854bb22a97b180.webp"},fFuR:function(e,t,n){e.exports=n.p+"static/classica_2-7ca3e6b22b584f53c0c8a1c3e942a382.webp"},iuYe:function(e,t,n){e.exports=n.p+"static/classica_12-7f03fe627cbb685807f190c5338a616b.webp"},"mud+":function(e,t,n){e.exports=n.p+"static/classica_14-2317f76a91531d9f1f7448ebed2888aa.webp"},yiR6:function(e,t,n){e.exports=n.p+"static/classica_15-fd4c2fc95dbc0f859ea199487a3369a0.webp"}}]);
//# sourceMappingURL=component---src-pages-classica-js-7e7f5434ac63a9853f32.js.map