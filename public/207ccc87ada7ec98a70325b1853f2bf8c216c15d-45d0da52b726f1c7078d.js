(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"9cXN":function(e,t,r){"use strict";var i=r("q1tI"),a=r.n(i),n=r("wEEd");function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e}).apply(this,arguments)}var o=new Map,l=new Map,d=0;function u(e){return Object.keys(e).sort().filter((function(t){return void 0!==e[t]})).map((function(t){return t+"_"+("root"===t?(r=e.root)?(l.has(r)||(d+=1,l.set(r,d.toString())),l.get(r)):"0":e[t]);var r})).toString()}function c(e,t,r){if(void 0===r&&(r={}),!e)return function(){};var i=function(e){var t=u(e),r=o.get(t);if(!r){var i,a=new Map,n=new IntersectionObserver((function(t){t.forEach((function(t){var r,n=t.isIntersecting&&i.some((function(e){return t.intersectionRatio>=e}));e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=n),null==(r=a.get(t.target))||r.forEach((function(e){e(n,t)}))}))}),e);i=n.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:n,elements:a},o.set(t,r)}return r}(r),a=i.id,n=i.observer,s=i.elements,l=s.get(e)||[];return s.has(e)||s.set(e,l),l.push(t),n.observe(e),function(){l.splice(l.indexOf(t),1),0===l.length&&(s.delete(e),n.unobserve(e)),0===s.size&&(n.disconnect(),o.delete(a))}}function f(e){return"function"!=typeof e.children}var p=function(e){var t,r;function a(t){var r;return(r=e.call(this,t)||this).node=null,r._unobserveCb=null,r.handleNode=function(e){r.node&&(r.unobserve(),e||r.props.triggerOnce||r.props.skip||r.setState({inView:!!r.props.initialInView,entry:void 0})),r.node=e||null,r.observeNode()},r.handleChange=function(e,t){e&&r.props.triggerOnce&&r.unobserve(),f(r.props)||r.setState({inView:e,entry:t}),r.props.onChange&&r.props.onChange(e,t)},r.state={inView:!!t.initialInView,entry:void 0},r}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var n=a.prototype;return n.componentDidUpdate=function(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())},n.componentWillUnmount=function(){this.unobserve(),this.node=null},n.observeNode=function(){if(this.node&&!this.props.skip){var e=this.props,t=e.threshold,r=e.root,i=e.rootMargin,a=e.trackVisibility,n=e.delay;this._unobserveCb=c(this.node,this.handleChange,{threshold:t,root:r,rootMargin:i,trackVisibility:a,delay:n})}},n.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},n.render=function(){if(!f(this.props)){var e=this.state,t=e.inView,r=e.entry;return this.props.children({inView:t,entry:r,ref:this.handleNode})}var a=this.props,n=a.children,o=a.as,l=a.tag,d=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(a,["children","as","tag","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView"]);return Object(i.createElement)(o||l||"div",s({ref:this.handleNode},d),n)},a}(i.Component);p.displayName="InView",p.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1};t.a=function(e){var t=e.children,r=Object(i.useState)(!1),s=r[0],o=r[1],l=function(e){var t=void 0===e?{}:e,r=t.threshold,a=t.delay,n=t.trackVisibility,s=t.rootMargin,o=t.root,l=t.triggerOnce,d=t.skip,u=t.initialInView,f=Object(i.useRef)(),p=Object(i.useState)({inView:!!u}),g=p[0],m=p[1],h=Object(i.useCallback)((function(e){void 0!==f.current&&(f.current(),f.current=void 0),d||e&&(f.current=c(e,(function(e,t){m({inView:e,entry:t}),t.isIntersecting&&l&&f.current&&(f.current(),f.current=void 0)}),{root:o,rootMargin:s,threshold:r,trackVisibility:n,delay:a}))}),[Array.isArray(r)?r.toString():r,o,s,l,d,n,a]);Object(i.useEffect)((function(){f.current||!g.entry||l||d||m({inView:!!u})}));var b=[h,g.inView,g.entry];return b.ref=b[0],b.inView=b[1],b.entry=b[2],b}({rootMargin:"0px 0px"}),d=l[0],u=l[1],f=Object(n.b)({config:{mass:1,tension:200,friction:40},opacity:s?1:0,transform:s?"translate3d(0,0rem,0)":"translate3d(0,6rem,0)"});return Object(i.useEffect)((function(){!s&&u&&o(!0)}),[u]),a.a.createElement(n.a.div,{ref:d,style:f},t)}},"9eSz":function(e,t,r){"use strict";var i=r("TqRt");t.__esModule=!0,t.default=void 0;var a,n=i(r("PJYZ")),s=i(r("VbXa")),o=i(r("8OQS")),l=i(r("pVnL")),d=i(r("q1tI")),u=i(r("17x9")),c=function(e){var t=(0,l.default)({},e),r=t.resolutions,i=t.sizes,a=t.critical;return r&&(t.fixed=r,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),a&&(t.loading="eager"),t.fluid&&(t.fluid=x([].concat(t.fluid))),t.fixed&&(t.fixed=x([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,r=e.fixed,i=g(t||r||[]);return i&&i.src},g=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var r=e.findIndex((function(e){return void 0===e.media}));if(-1!==r)return e[r]}return e[0]},m=Object.create({}),h=function(e){var t=c(e),r=p(t);return m[r]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,v=y&&window.IntersectionObserver,w=new WeakMap;function S(e){return e.map((function(e){var t=e.src,r=e.srcSet,i=e.srcSetWebp,a=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},i&&d.default.createElement("source",{type:"image/webp",media:a,srcSet:i,sizes:n}),r&&d.default.createElement("source",{media:a,srcSet:r,sizes:n}))}))}function x(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function E(e){return e.map((function(e){var t=e.src,r=e.media,i=e.tracedSVG;return d.default.createElement("source",{key:t,media:r,srcSet:i})}))}function I(e){return e.map((function(e){var t=e.src,r=e.media,i=e.base64;return d.default.createElement("source",{key:t,media:r,srcSet:i})}))}function V(e,t){var r=e.srcSet,i=e.srcSetWebp,a=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(a?'media="'+a+'" ':"")+'srcset="'+(t?i:r)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var O=function(e,t){var r=(void 0===a&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=new window.IntersectionObserver((function(e){e.forEach((function(e){if(w.has(e.target)){var t=w.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),w.delete(e.target),t())}}))}),{rootMargin:"200px"})),a);return r&&(r.observe(e),w.set(e,t)),function(){r.unobserve(e),w.delete(e)}},k=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",a=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?V(e,!0):"")+V(e)})).join("")+"<img "+d+s+o+r+i+t+n+a+l+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},z=d.default.forwardRef((function(e,t){var r=e.src,i=e.imageVariants,a=e.generateSources,n=e.spreadProps,s=e.ariaHidden,o=d.default.createElement(N,(0,l.default)({ref:t,src:r},n,{ariaHidden:s}));return i.length>1?d.default.createElement("picture",null,a(i),o):o})),N=d.default.forwardRef((function(e,t){var r=e.sizes,i=e.srcSet,a=e.src,n=e.style,s=e.onLoad,u=e.onError,c=e.loading,f=e.draggable,p=e.ariaHidden,g=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,l.default)({"aria-hidden":p,sizes:r,srcSet:i,src:a},g,{onLoad:s,onError:u,ref:t,loading:c,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));N.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var L=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=y&&h(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!b&&v&&!r.isCritical&&!r.seenBefore;var i=r.isCritical||y&&(b||!r.useIOSupport);return r.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn,isHydrated:!1},r.imageRef=d.default.createRef(),r.placeholderRef=t.placeholderRef||d.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,n.default)(r)),r.handleRef=r.handleRef.bind((0,n.default)(r)),r}(0,s.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.setState({isHydrated:y}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=O(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=c(e),(r=p(t))&&(m[r]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=c(this.props),t=e.title,r=e.alt,i=e.className,a=e.style,n=void 0===a?{}:a,s=e.imgStyle,o=void 0===s?{}:s,u=e.placeholderStyle,f=void 0===u?{}:u,p=e.placeholderClassName,m=e.fluid,h=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,v=e.Tag,w=e.itemProp,x=e.loading,V=e.draggable,O=m||h;if(!O)return null;var L=!1===this.state.fadeIn||this.state.imgLoaded,T=!0===this.state.fadeIn&&!this.state.imgCached,R=(0,l.default)({opacity:L?1:0,transition:T?"opacity "+y+"ms":"none"},o),C="boolean"==typeof b?"lightgray":b,j={transitionDelay:y+"ms"},M=(0,l.default)({opacity:this.state.imgLoaded?0:1},T&&j,o,f),P={title:t,alt:this.state.isVisible?"":r,style:M,className:p,itemProp:w},W=this.state.isHydrated?g(O):O[0];if(m)return d.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden",maxWidth:W.maxWidth?W.maxWidth+"px":null,maxHeight:W.maxHeight?W.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(W.srcSet)},d.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/W.aspectRatio+"%"}}),C&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:C,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},T&&j)}),W.base64&&d.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:W.base64,spreadProps:P,imageVariants:O,generateSources:I}),W.tracedSVG&&d.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:W.tracedSVG,spreadProps:P,imageVariants:O,generateSources:E}),this.state.isVisible&&d.default.createElement("picture",null,S(O),d.default.createElement(N,{alt:r,title:t,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:x,draggable:V})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,l.default)({alt:r,title:t,loading:x},W,{imageVariants:O}))}}));if(h){var H=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:W.width,height:W.height},n);return"inherit"===n.display&&delete H.display,d.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:H,ref:this.handleRef,key:"fixed-"+JSON.stringify(W.srcSet)},C&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:C,width:W.width,opacity:this.state.imgLoaded?0:1,height:W.height},T&&j)}),W.base64&&d.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:W.base64,spreadProps:P,imageVariants:O,generateSources:I}),W.tracedSVG&&d.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:W.tracedSVG,spreadProps:P,imageVariants:O,generateSources:E}),this.state.isVisible&&d.default.createElement("picture",null,S(O),d.default.createElement(N,{alt:r,title:t,width:W.width,height:W.height,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:x,draggable:V})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,l.default)({alt:r,title:t,loading:x},W,{imageVariants:O}))}}))}return null},t}(d.default.Component);L.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var T=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),R=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string,maxWidth:u.default.number,maxHeight:u.default.number});function C(e){return function(t,r,i){var a;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+i+"`, but their values are both `undefined`.");u.default.checkPropTypes(((a={})[r]=e,a),t,"prop",i)}}L.propTypes={resolutions:T,sizes:R,fixed:C(u.default.oneOfType([T,u.default.arrayOf(T)])),fluid:C(u.default.oneOfType([R,u.default.arrayOf(R)])),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var j=L;t.default=j},lAxN:function(e,t,r){"use strict";var i=r("q1tI"),a=r.n(i),n=r("Wbzz"),s=r("wEEd"),o=r("9eSz"),l=r.n(o),d=function(e,t){return[-(t-window.innerHeight/2)/80,(e-window.innerWidth/2)/80,.96]},u=function(e,t,r){return"perspective(1200px) rotateX("+e+"deg) rotateY("+t+"deg) scale("+r+")"};var c=function(e){var t=e.linkTo,r=e.href,i=e.title,o=e.subTitle,c=e.cta,f=e.tileImg,p=e.imgAlt,g=e.marginTop,m=e.marginBottom,h=e.rounded,b=e.isPageNav,y=Object(s.b)((function(){return{xys:[0,0,1],config:{mass:5,tension:150,friction:30}}})),v=y[0],w=y[1];return a.a.createElement(a.a.Fragment,null,t?a.a.createElement(n.Link,{to:t},a.a.createElement(s.a.div,{onMouseMove:function(e){var t=e.clientX,r=e.clientY;return w({xys:d(t,r)})},onMouseLeave:function(){return w({xys:[0,0,1]})},style:{transform:v.xys.interpolate(u)},className:"group w-full cursor-pointer relative transition duration-500 transform hover:scale-98 text-center overflow-hidden  md:mt-"+g+" md:mb-"+m+" rounded-"+(h||0)+" "},a.a.createElement("div",{className:"w-full text-primary absolute top-1 z-50 opacity-0 group-hover:opacity-100 transition duration-500",style:{top:"50%",left:"50%",transform:"translate(-50%, -50%)"}},b?null:a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",{className:"mb-0 md:mb-1 text-4xl md:text-6xl lg:text-9xl"},i),a.a.createElement("p",{className:"text-xs md:text-2xl md:mt-2"},o)),a.a.createElement("p",{className:"absolute z-100 text-xs md:text-2xl text-primary leading-6 border-2 border-primary px-4 py-2 rounded md:rounded ",style:{top:"130%",left:"50%",transform:"translate(-50%, -50%)"}},c)),a.a.createElement("div",{className:"bg-blackPure absolute inset-0 z-40 opacity-0 group-hover:opacity-75 transition-all duration-1000"}),a.a.createElement(l.a,{fluid:f,alt:p,loading:"eager"}))):a.a.createElement("a",{href:r,target:"_blank"},a.a.createElement(s.a.div,{onMouseMove:function(e){var t=e.clientX,r=e.clientY;return w({xys:d(t,r)})},onMouseLeave:function(){return w({xys:[0,0,1]})},style:{transform:v.xys.interpolate(u)},className:"group w-full cursor-pointer relative transition duration-500 transform hover:scale-98 text-center overflow-hidden  md:mt-"+g+" md:mb-"+m+" rounded-"+(h||0)+" "},a.a.createElement("div",{className:"w-full text-primary absolute top-1 z-50 opacity-0 group-hover:opacity-100 transition duration-500",style:{top:"50%",left:"50%",transform:"translate(-50%, -50%)"}},!b&&a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",{className:"mb-0 md:mb-1 text-4xl md:text-6xl lg:text-9xl"},i),a.a.createElement("p",{className:"text-xs md:text-2xl md:mt-2"},o))),a.a.createElement("div",{className:"bg-blackPure absolute inset-0 z-40 opacity-0 group-hover:opacity-75 transition-all duration-1000"}),a.a.createElement(l.a,{fluid:f,alt:p,loading:"eager"}))))},f=r("9cXN");t.a=function(e){var t=e.isPageNav,r=Object(n.useStaticQuery)("1315902381"),i=[{title:"Pet Time",subTitle:"Pet management app - UI/UX Design",cta:"View use case",tileImg:r.petImg.childImageSharp.fluid,linkTo:"/pet-time",imgAlt:"Pet Time app ui design",rounded:"lg"},{title:"Shuush!",subTitle:"Messaging app - UI/UX Design",cta:"View use case",tileImg:r.shuushImg.childImageSharp.fluid,linkTo:"/shuush",imgAlt:"Shuush! app ui design",rounded:"lg"},{title:"Classica",subTitle:"Classical music app - UI/UX Design",cta:"View use case",tileImg:r.classicaImg.childImageSharp.fluid,linkTo:"/classica",imgAlt:"classica app ui design",rounded:"lg"},{title:"Space Digest",subTitle:"Website - Web Design / Development",cta:"View more",tileImg:r.spaceDigestImg.childImageSharp.fluid,linkTo:"/space-digest",imgAlt:"Website page",rounded:"lg"},{title:"BuzzSumo.com",subTitle:"Web marketing assets - Web design",cta:"View more",tileImg:r.buzzsumoImg.childImageSharp.fluid,linkTo:"/buzzsumo",imgAlt:"Buzzsumo web page",rounded:"lg"}];return a.a.createElement("section",{className:"w-full"},t&&a.a.createElement("h2",{className:"block text-center mb-12 text-2xl md:text-4xl text-primary pt-10"},"Check other projects"),a.a.createElement("div",{className:"mx-auto -mb-10 md:m-0\n            grid "+(t?"grid-cols-2 md:grid-cols-5 gap-0":"grid-cols-1 md:gap-20 gap-3")},i.map((function(e,r){return a.a.createElement(f.a,null,a.a.createElement(c,{key:r,title:!t&&e.title,subTitle:!t&&e.subTitle,cta:e.cta,tileImg:e.tileImg,linkTo:e.linkTo,imgAlt:e.imgAlt,marginTop:e.marginTop,marginBottom:e.marginBottom,rounded:!t&&e.rounded,isPageNav:t}))}))))}}}]);
//# sourceMappingURL=207ccc87ada7ec98a70325b1853f2bf8c216c15d-45d0da52b726f1c7078d.js.map