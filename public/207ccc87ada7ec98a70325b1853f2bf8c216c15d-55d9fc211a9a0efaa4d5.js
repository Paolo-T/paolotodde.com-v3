(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"9eSz":function(e,t,a){"use strict";var i=a("TqRt");t.__esModule=!0,t.default=void 0;var r,n=i(a("PJYZ")),s=i(a("VbXa")),l=i(a("8OQS")),o=i(a("pVnL")),d=i(a("q1tI")),u=i(a("17x9")),c=function(e){var t=(0,o.default)({},e),a=t.resolutions,i=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed,i=g(t||a||[]);return i&&i.src},g=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},p=Object.create({}),h=function(e){var t=c(e),a=m(t);return p[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,v=y&&window.IntersectionObserver,S=new WeakMap;function x(e){return e.map((function(e){var t=e.src,a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},i&&d.default.createElement("source",{type:"image/webp",media:r,srcSet:i,sizes:n}),a&&d.default.createElement("source",{media:r,srcSet:a,sizes:n}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function E(e){return e.map((function(e){var t=e.src,a=e.media,i=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:i})}))}function I(e){return e.map((function(e){var t=e.src,a=e.media,i=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:i})}))}function z(e,t){var a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?i:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var L=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return a&&(a.observe(e),S.set(e,t)),function(){a.unobserve(e),S.delete(e)}},T=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?z(e,!0):"")+z(e)})).join("")+"<img "+d+s+l+a+i+t+n+r+o+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},R=d.default.forwardRef((function(e,t){var a=e.src,i=e.imageVariants,r=e.generateSources,n=e.spreadProps,s=e.ariaHidden,l=d.default.createElement(k,(0,o.default)({ref:t,src:a},n,{ariaHidden:s}));return i.length>1?d.default.createElement("picture",null,r(i),l):l})),k=d.default.forwardRef((function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,n=e.style,s=e.onLoad,u=e.onError,c=e.loading,f=e.draggable,m=e.ariaHidden,g=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,o.default)({"aria-hidden":m,sizes:a,srcSet:i,src:r},g,{onLoad:s,onError:u,ref:t,loading:c,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));k.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var N=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=y&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&v&&!a.isCritical&&!a.seenBefore;var i=a.isCritical||y&&(b||!a.useIOSupport);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=d.default.createRef(),a.placeholderRef=t.placeholderRef||d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:y}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=L(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=c(e),(a=m(t))&&(p[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=c(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,s=e.imgStyle,l=void 0===s?{}:s,u=e.placeholderStyle,f=void 0===u?{}:u,m=e.placeholderClassName,p=e.fluid,h=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,v=e.Tag,S=e.itemProp,w=e.loading,z=e.draggable,L=p||h;if(!L)return null;var N=!1===this.state.fadeIn||this.state.imgLoaded,V=!0===this.state.fadeIn&&!this.state.imgCached,O=(0,o.default)({opacity:N?1:0,transition:V?"opacity "+y+"ms":"none"},l),P="boolean"==typeof b?"lightgray":b,C={transitionDelay:y+"ms"},H=(0,o.default)({opacity:this.state.imgLoaded?0:1},V&&C,l,f),W={title:t,alt:this.state.isVisible?"":a,style:H,className:m,itemProp:S},M=this.state.isHydrated?g(L):L[0];if(p)return d.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden",maxWidth:M.maxWidth?M.maxWidth+"px":null,maxHeight:M.maxHeight?M.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(M.srcSet)},d.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/M.aspectRatio+"%"}}),P&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:P,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},V&&C)}),M.base64&&d.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:M.base64,spreadProps:W,imageVariants:L,generateSources:I}),M.tracedSVG&&d.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:M.tracedSVG,spreadProps:W,imageVariants:L,generateSources:E}),this.state.isVisible&&d.default.createElement("picture",null,x(L),d.default.createElement(k,{alt:a,title:t,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:z})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:T((0,o.default)({alt:a,title:t,loading:w},M,{imageVariants:L}))}}));if(h){var j=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:M.width,height:M.height},n);return"inherit"===n.display&&delete j.display,d.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:j,ref:this.handleRef,key:"fixed-"+JSON.stringify(M.srcSet)},P&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:P,width:M.width,opacity:this.state.imgLoaded?0:1,height:M.height},V&&C)}),M.base64&&d.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:M.base64,spreadProps:W,imageVariants:L,generateSources:I}),M.tracedSVG&&d.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:M.tracedSVG,spreadProps:W,imageVariants:L,generateSources:E}),this.state.isVisible&&d.default.createElement("picture",null,x(L),d.default.createElement(k,{alt:a,title:t,width:M.width,height:M.height,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:z})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:T((0,o.default)({alt:a,title:t,loading:w},M,{imageVariants:L}))}}))}return null},t}(d.default.Component);N.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var V=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),O=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string,maxWidth:u.default.number,maxHeight:u.default.number});function P(e){return function(t,a,i){var r;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+i+"`, but their values are both `undefined`.");u.default.checkPropTypes(((r={})[a]=e,r),t,"prop",i)}}N.propTypes={resolutions:V,sizes:O,fixed:P(u.default.oneOfType([V,u.default.arrayOf(V)])),fluid:P(u.default.oneOfType([O,u.default.arrayOf(O)])),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var C=N;t.default=C},lAxN:function(e,t,a){"use strict";var i=a("q1tI"),r=a.n(i),n=a("Wbzz"),s=a("wEEd"),l=a("9eSz"),o=a.n(l),d=function(e,t){return[-(t-window.innerHeight/2)/80,(e-window.innerWidth/2)/80,.96]},u=function(e,t,a){return"perspective(1200px) rotateX("+e+"deg) rotateY("+t+"deg) scale("+a+")"};var c=function(e){var t=e.linkTo,a=e.href,i=e.title,l=e.subTitle,c=e.cta,f=e.tileImg,m=e.imgAlt,g=e.marginTop,p=e.marginBottom,h=e.rounded,b=e.isPageNav,y=Object(s.b)((function(){return{xys:[0,0,1],config:{mass:5,tension:150,friction:30}}})),v=y[0],S=y[1];return r.a.createElement(r.a.Fragment,null,t?r.a.createElement(n.Link,{to:t},r.a.createElement(s.a.div,{onMouseMove:function(e){var t=e.clientX,a=e.clientY;return S({xys:d(t,a)})},onMouseLeave:function(){return S({xys:[0,0,1]})},style:{transform:v.xys.interpolate(u)},className:"group w-full cursor-pointer relative transition duration-500 transform hover:scale-98 text-center overflow-hidden  md:mt-"+g+" md:mb-"+p+" rounded-"+(h||0)+" "},r.a.createElement("div",{className:"w-full text-primary absolute top-1 z-50 opacity-0 group-hover:opacity-100 transition duration-500",style:{top:"50%",left:"50%",transform:"translate(-50%, -50%)"}},b?null:r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"mb-0 md:mb-1 text-4xl md:text-6xl lg:text-9xl"},i),r.a.createElement("p",{className:"text-xs md:text-2xl md:mt-2"},l)),r.a.createElement("p",{className:"absolute z-100 text-xs md:text-2xl text-primary border-2 border-primary px-4 py-2  rounded md:rounded ",style:{top:"130%",left:"50%",transform:"translate(-50%, -50%)"}},c)),r.a.createElement("div",{className:"bg-blackPure absolute inset-0 z-40 opacity-0 group-hover:opacity-75 transition-all duration-1000"}),r.a.createElement(o.a,{fluid:f,alt:m,loading:"eager"}))):r.a.createElement("a",{href:a,target:"_blank"},r.a.createElement(s.a.div,{onMouseMove:function(e){var t=e.clientX,a=e.clientY;return S({xys:d(t,a)})},onMouseLeave:function(){return S({xys:[0,0,1]})},style:{transform:v.xys.interpolate(u)},className:"group w-full cursor-pointer relative transition duration-500 transform hover:scale-98 text-center overflow-hidden  md:mt-"+g+" md:mb-"+p+" rounded-"+(h||0)+" "},r.a.createElement("div",{className:"w-full text-primary absolute top-1 z-50 opacity-0 group-hover:opacity-100 transition duration-500",style:{top:"50%",left:"50%",transform:"translate(-50%, -50%)"}},!b&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"mb-0 md:mb-1 text-4xl md:text-6xl lg:text-9xl"},i),r.a.createElement("p",{className:"text-xs md:text-2xl md:mt-2"},l))),r.a.createElement("div",{className:"bg-blackPure absolute inset-0 z-40 opacity-0 group-hover:opacity-75 transition-all duration-1000"}),r.a.createElement(o.a,{fluid:f,alt:m,loading:"eager"}))))};t.a=function(e){var t=e.isPageNav,a=("undefined"!=typeof window&&window.location.pathname,Object(n.useStaticQuery)("1315902381")),i=[{title:"Pet Time",subTitle:"Pet management app - UI/UX Design",cta:"View use case",tileImg:a.petImg.childImageSharp.fluid,linkTo:"/pet-time",imgAlt:"Pet Time app ui design",rounded:"lg"},{title:"Shuush!",subTitle:"Messaging app - UI/UX Design",cta:"View use case",tileImg:a.shuushImg.childImageSharp.fluid,linkTo:"/shuush",imgAlt:"Shuush! app ui design",rounded:"lg"},{title:"Classica",subTitle:"Classical music app - UI/UX Design",cta:"View use case",tileImg:a.classicaImg.childImageSharp.fluid,linkTo:"/classica",imgAlt:"classica app ui design",rounded:"lg"},{title:"Space Digest",subTitle:"Website - Web Design / Development",cta:"View more",tileImg:a.spaceDigestImg.childImageSharp.fluid,linkTo:"/space-digest",imgAlt:"Website page",rounded:"lg"},{title:"BuzzSumo.com",subTitle:"Web marketing assets - Web design",cta:"View more",tileImg:a.buzzsumoImg.childImageSharp.fluid,linkTo:"/buzzsumo",imgAlt:"Buzzsumo web page",rounded:"lg"}];return r.a.createElement("section",{className:"w-full"},t&&r.a.createElement("h2",{className:"block text-center mb-12 text-2xl md:text-4xl text-primary pt-10"},"Check other projects"),r.a.createElement("div",{className:"mx-auto -mb-10 md:m-0\n            grid "+(t?"grid-cols-2 md:grid-cols-5 gap-0":"grid-cols-1 md:gap-20 gap-3")},i.map((function(e,a){return r.a.createElement(c,{key:a,title:!t&&e.title,subTitle:!t&&e.subTitle,cta:e.cta,tileImg:e.tileImg,linkTo:e.linkTo,imgAlt:e.imgAlt,marginTop:e.marginTop,marginBottom:e.marginBottom,rounded:!t&&e.rounded,isPageNav:t})}))))}}}]);
//# sourceMappingURL=207ccc87ada7ec98a70325b1853f2bf8c216c15d-55d9fc211a9a0efaa4d5.js.map