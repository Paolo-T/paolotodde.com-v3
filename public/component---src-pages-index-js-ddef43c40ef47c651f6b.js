(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"7NZg":function(e,t,n){e.exports=n.p+"static/shuush_banner_1-f018d972b57ff7add2bf4d77814d951d.png"},"9cXN":function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),i=n("wEEd");n("dZ+Y"),n("8+KV"),n("LK8F"),n("a1Th"),n("h7Nl"),n("XfO3"),n("9AAn"),n("V+eJ"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("hHhE"),n("91GP"),n("HAE/");var a=function(e,t){if(!e)throw new Error("Invariant failed")};function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var l=new Map,h=new Map,d=new Map,f=0;function p(e,t,n){void 0===n&&(n={}),n.threshold||(n.threshold=0);var r=n,o=r.root,i=r.rootMargin,s=r.threshold;if(l.has(e)&&a(!1),e){var c=function(e){return e?d.has(e)?d.get(e):(f+=1,d.set(e,f.toString()),d.get(e)+"_"):""}(o)+(i?s.toString()+"_"+i:s.toString()),u=h.get(c);u||(u=new IntersectionObserver(v,n),c&&h.set(c,u));var p={callback:t,element:e,inView:!1,observerId:c,observer:u,thresholds:u.thresholds||(Array.isArray(s)?s:[s])};return l.set(e,p),u.observe(e),p}}function g(e){if(e){var t=l.get(e);if(t){var n=t.observerId,r=t.observer,o=r.root;r.unobserve(e);var i=!1,a=!1;n&&l.forEach((function(t,r){r!==e&&(t.observerId===n&&(i=!0,a=!0),t.observer.root===o&&(a=!0))})),!a&&o&&d.delete(o),r&&!i&&r.disconnect(),l.delete(e)}}}function v(e){e.forEach((function(e){var t=e.isIntersecting,n=e.intersectionRatio,r=e.target,o=l.get(r);if(o&&n>=0){var i=o.thresholds.some((function(e){return o.inView?n>e:n>=e}));void 0!==t&&(i=i&&t),o.inView=i,o.callback(i,e)}}))}var b=function(e){var t,n;function o(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return s(u(t=e.call.apply(e,[this].concat(r))||this),"state",{inView:!1,entry:void 0}),s(u(t),"node",null),s(u(t),"handleNode",(function(e){t.node&&(g(t.node),e||t.props.triggerOnce||t.setState({inView:!1,entry:void 0})),t.node=e||null,t.observeNode()})),s(u(t),"handleChange",(function(e,n){(e!==t.state.inView||e)&&t.setState({inView:e,entry:n}),t.props.onChange&&t.props.onChange(e,n)})),t}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=o.prototype;return i.componentDidMount=function(){this.node||a(!1)},i.componentDidUpdate=function(e,t){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold||(g(this.node),this.observeNode()),t.inView!==this.state.inView&&this.state.inView&&this.props.triggerOnce&&(g(this.node),this.node=null)},i.componentWillUnmount=function(){this.node&&(g(this.node),this.node=null)},i.observeNode=function(){if(this.node){var e=this.props,t=e.threshold,n=e.root,r=e.rootMargin;p(this.node,this.handleChange,{threshold:t,root:n,rootMargin:r})}},i.render=function(){var e=this.state,t=e.inView,n=e.entry;if(!function(e){return"function"!=typeof e.children}(this.props))return this.props.children({inView:t,entry:n,ref:this.handleNode});var o=this.props,i=o.children,a=o.as,s=o.tag,u=(o.triggerOnce,o.threshold,o.root,o.rootMargin,o.onChange,function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(o,["children","as","tag","triggerOnce","threshold","root","rootMargin","onChange"]));return Object(r.createElement)(a||s||"div",c({ref:this.handleNode},u),i)},o}(r.Component);s(b,"displayName","InView"),s(b,"defaultProps",{threshold:0,triggerOnce:!1});var m={inView:!1,entry:void 0};t.a=function(e){var t=e.children,n=Object(r.useState)(!1),a=n[0],s=n[1],c=function(e){void 0===e&&(e={});var t=Object(r.useRef)(),n=Object(r.useState)(m),o=n[0],i=n[1],a=Object(r.useCallback)((function(n){t.current&&g(t.current),n&&p(n,(function(t,r){i({inView:t,entry:r}),t&&e.triggerOnce&&g(n)}),e),t.current=n}),[e.threshold,e.root,e.rootMargin,e.triggerOnce]);return Object(r.useEffect)((function(){t.current||o===m||e.triggerOnce||i(m)})),[a,o.inView,o.entry]}({rootMargin:"-100px 0px"}),u=c[0],l=c[1],h=Object(i.b)({config:{mass:1,tension:120,friction:30},opacity:a?1:0,transform:a?"translate3d(0,0rem,0)":"translate3d(0,10rem,0)"});return Object(r.useEffect)((function(){!a&&l&&s(!0)}),[l]),o.a.createElement(i.a.div,{ref:u,style:h},t)}},OGtf:function(e,t,n){var r=n("XKFU"),o=n("eeVq"),i=n("vhPU"),a=/"/g,s=function(e,t,n,r){var o=String(i(e)),s="<"+t;return""!==n&&(s+=" "+n+'="'+String(r).replace(a,"&quot;")+'"'),s+">"+o+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(s),r(r.P+r.F*o((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}},RXBc:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),i=n("Wbzz"),a=(n("9CUm"),n("wEEd")),s=n("oq01"),c=n("7NZg"),u=n.n(c),l=n("vrJ9"),h=n.n(l),d=n("i2vu"),f=n.n(d),p=(n("tUrg"),n("9cXN"));var g=function(e){e.title,e.subTitle;var t=e.img,n=e.link;return o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,null,o.a.createElement("div",{className:"w-full my-4 md:my-20 cursor-pointer relative transition duration-500 transform hover:scale-95"},o.a.createElement(i.Link,{to:n},o.a.createElement("img",{src:t,className:"rounded"})))))};t.default=function(){return Object(a.b)({opacity:1,from:{opacity:0}}),o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,null,o.a.createElement("div",{className:"w-11/12 md:container md:px-0 mx-auto pt-32"},o.a.createElement(g,{title:"Classica",subTitle:"UI DESIGN",img:f.a,link:"/classica"}),o.a.createElement(g,{title:"shuush!",subTitle:"PRODUCT DESIGN",img:u.a,link:"/shuush"}),o.a.createElement(g,{title:"3DC",subTitle:"BRANDING",img:h.a,link:"/three"}))))}},i2vu:function(e,t,n){e.exports=n.p+"static/classica_banner_1-2fabc06801918af3813c8d34ca9d68bc.png"},tUrg:function(e,t,n){"use strict";n("OGtf")("link",(function(e){return function(t){return e(this,"a","href",t)}}))},vrJ9:function(e,t,n){e.exports=n.p+"static/three_15-dd75c690cf5ebe7ffff1e44bee1e947d.png"}}]);
//# sourceMappingURL=component---src-pages-index-js-ddef43c40ef47c651f6b.js.map