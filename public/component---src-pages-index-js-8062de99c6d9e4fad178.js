(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"9cXN":function(e,t,n){"use strict";var r=n("q1tI"),i=n.n(r),a=n("wEEd");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var l=new Map,s=new Map,c=0;function u(e){return Object.keys(e).sort().filter((function(t){return void 0!==e[t]})).map((function(t){return t+"_"+("root"===t?(n=e.root)?(s.has(n)||(c+=1,s.set(n,c.toString())),s.get(n)):"0":e[t]);var n})).toString()}function m(e,t,n){if(void 0===n&&(n={}),!e)return function(){};var r=function(e){var t=u(e),n=l.get(t);if(!n){var r,i=new Map,a=new IntersectionObserver((function(t){t.forEach((function(t){var n,a=t.isIntersecting&&r.some((function(e){return t.intersectionRatio>=e}));e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=a),null==(n=i.get(t.target))||n.forEach((function(e){e(a,t)}))}))}),e);r=a.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:a,elements:i},l.set(t,n)}return n}(n),i=r.id,a=r.observer,o=r.elements,s=o.get(e)||[];return o.has(e)||o.set(e,s),s.push(t),a.observe(e),function(){s.splice(s.indexOf(t),1),0===s.length&&(o.delete(e),a.unobserve(e)),0===o.size&&(a.disconnect(),l.delete(i))}}function d(e){return"function"!=typeof e.children}var p=function(e){var t,n;function i(t){var n;return(n=e.call(this,t)||this).node=null,n._unobserveCb=null,n.handleNode=function(e){n.node&&(n.unobserve(),e||n.props.triggerOnce||n.props.skip||n.setState({inView:!!n.props.initialInView,entry:void 0})),n.node=e||null,n.observeNode()},n.handleChange=function(e,t){e&&n.props.triggerOnce&&n.unobserve(),d(n.props)||n.setState({inView:e,entry:t}),n.props.onChange&&n.props.onChange(e,t)},n.state={inView:!!t.initialInView,entry:void 0},n}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var a=i.prototype;return a.componentDidUpdate=function(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())},a.componentWillUnmount=function(){this.unobserve(),this.node=null},a.observeNode=function(){if(this.node&&!this.props.skip){var e=this.props,t=e.threshold,n=e.root,r=e.rootMargin,i=e.trackVisibility,a=e.delay;this._unobserveCb=m(this.node,this.handleChange,{threshold:t,root:n,rootMargin:r,trackVisibility:i,delay:a})}},a.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},a.render=function(){if(!d(this.props)){var e=this.state,t=e.inView,n=e.entry;return this.props.children({inView:t,entry:n,ref:this.handleNode})}var i=this.props,a=i.children,l=i.as,s=i.tag,c=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(i,["children","as","tag","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView"]);return Object(r.createElement)(l||s||"div",o({ref:this.handleNode},c),a)},i}(r.Component);p.displayName="InView",p.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1};t.a=function(e){var t=e.children,n=Object(r.useState)(!1),o=n[0],l=n[1],s=function(e){var t=void 0===e?{}:e,n=t.threshold,i=t.delay,a=t.trackVisibility,o=t.rootMargin,l=t.root,s=t.triggerOnce,c=t.skip,u=t.initialInView,d=Object(r.useRef)(),p=Object(r.useState)({inView:!!u}),g=p[0],h=p[1],b=Object(r.useCallback)((function(e){void 0!==d.current&&(d.current(),d.current=void 0),c||e&&(d.current=m(e,(function(e,t){h({inView:e,entry:t}),t.isIntersecting&&s&&d.current&&(d.current(),d.current=void 0)}),{root:l,rootMargin:o,threshold:n,trackVisibility:a,delay:i}))}),[Array.isArray(n)?n.toString():n,l,o,s,c,a,i]);Object(r.useEffect)((function(){d.current||!g.entry||s||c||h({inView:!!u})}));var f=[b,g.inView,g.entry];return f.ref=f[0],f.inView=f[1],f.entry=f[2],f}({rootMargin:"0px 0px"}),c=s[0],u=s[1],d=Object(a.b)({config:{mass:1,tension:200,friction:30},opacity:o?1:0,transform:o?"translate3d(0,0rem,0)":"translate3d(0,10rem,0)"});return Object(r.useEffect)((function(){!o&&u&&l(!0)}),[u]),i.a.createElement(a.a.div,{ref:c,style:d},t)}},RXBc:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),i=n.n(r),a=n("9CUm"),o=n("Wbzz"),l=n("oq01"),s=n("9cXN"),c=n("lCxP");t.default=function(){var e=Object(o.useStaticQuery)("1315902381");return i.a.createElement(i.a.Fragment,null,i.a.createElement(a.a,{keywords:["UI Designer","Web Designer","Product Designer","Front-end Developer","Portfolio","Brighton","Uk"],title:"Home"}),i.a.createElement(l.a,null,i.a.createElement("div",{className:"w-screen bg-ImageHomeBg sm:bg-ImageHomeBg__sm md:bg-ImageHomeBg__md lg:bg-ImageHomeBg__lg xl:bg-ImageHomeBg__xl cover bg-no-repeat"},i.a.createElement("div",{className:"w-10/12 md:w-10/12 mx-auto pt-40 md:pt-30"},i.a.createElement(s.a,null,i.a.createElement("h1",{className:"text-3xl sm:text-5xl md:text-5xl lg:text-7xl xl:text-8xl ml-0 sm:ml-10 md:ml-24 lg:pl-20 md:mt-10 lg:mt-4 md:mb-0 lg:pt-32 lg:mb-24"},"Hello, I’m"," ",i.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://www.linkedin.com/in/paolo-todde/"},i.a.createElement("span",{className:"hover:text-primary hover:underline transition duration-500 cursor-pointer"}," ","Paolo.")),i.a.createElement("br",null),i.a.createElement("span",{className:"inline text-primary"},"Designer")," ",i.a.createElement("span",{className:"inline"},"and"),i.a.createElement("br",null),i.a.createElement("span",{className:"inline"},"front-end")," ",i.a.createElement("span",{className:"inline text-primary"},"coder"),".")),i.a.createElement(c.a,{Title:"Pet Time",SubTitle:"UI/UX Design",TileImg:e.petImg.childImageSharp.fluid,LinkTo:"/petTime",ImgAlt:"Pet Time app ui design",MarginTop:"20",MarginBottom:"20",Rounded:"lg"}),i.a.createElement(s.a,null,i.a.createElement(c.a,{Title:" Shuush!",SubTitle:"UI/UX Design",TileImg:e.shuushImg.childImageSharp.fluid,LinkTo:"/shuush",ImgAlt:"Shuush! app ui design",MarginTop:"20",MarginBottom:"20",Rounded:"lg"})),i.a.createElement(s.a,null,i.a.createElement(c.a,{Title:"classica",SubTitle:"UI/UX Design",TileImg:e.classicaImg.childImageSharp.fluid,LinkTo:"/classica",ImgAlt:"classica app ui design",MarginTop:"20",MarginBottom:"20",Rounded:"lg"})),i.a.createElement(s.a,null,i.a.createElement(c.a,{Title:"BuzzSumo.com",SubTitle:"Web design",TileImg:e.buzzsumoImg.childImageSharp.fluid,LinkTo:"/buzzsumo",ImgAlt:"Buzzsumo",MarginTop:"20",MarginBottom:"20",Rounded:"lg"})),i.a.createElement(s.a,null,i.a.createElement(c.a,{Title:"Space Digest",SubTitle:"Web Design",TileImg:e.spaceDigestImg.childImageSharp.fluid,Href:"https://www.spacedigest.live/",ImgAlt:"Website icon",MarginTop:"20",MarginBottom:"20",Rounded:"lg"})),i.a.createElement("section",{className:"text-center mt-16 md:mt-32"},i.a.createElement("button",{rel:"noopener noreferrer",onClick:"location.href='mailto:iampaolotodde@gmail.com'",type:"button",className:"inline-block bg-primary hover:bg-yellow-600 hover:text-white focus:outline-none  focus:border-red-600 transition duration-500 ease-in-out font-header text-2xl md:text-5xl py-3 px-10 rounded"},"Contact"))))))}},lCxP:function(e,t,n){"use strict";var r=n("q1tI"),i=n.n(r),a=n("Wbzz"),o=n("9eSz"),l=n.n(o);t.a=function(e){var t=e.LinkTo,n=e.Href,r=e.Title,o=e.SubTitle,s=e.TileImg,c=e.ImgAlt,u=e.MarginTop,m=e.MarginBottom,d=e.Rounded;return i.a.createElement(i.a.Fragment,null,t?i.a.createElement(a.Link,{to:t},i.a.createElement("div",{className:"group w-full cursor-pointer relative transition duration-500 transform hover:scale-98 text-center overflow-hidden my-4 md:mt-"+u+" md:mb-"+m+" rounded-"+(d||0)+" "},i.a.createElement("div",{className:"w-full text-yellow-500 absolute top-1 z-50 opacity-0 group-hover:opacity-100 transition duration-500",style:{top:"50%",left:"50%",transform:"translate(-50%, -50%)"}},i.a.createElement("h1",{className:"mb-1 text-3xl md:text-6xl lg:text-9xl"},r),i.a.createElement("p",{className:"text-xs md:text-md md:text-2xl mt-2 tracking-wider"},o)),i.a.createElement("div",{className:"bg-blackPure absolute inset-0 z-40 opacity-0 group-hover:opacity-75 transition-all duration-1000"}),i.a.createElement(l.a,{fluid:s,alt:c,loading:"eager"}))):i.a.createElement("a",{href:n,target:"_blank"},i.a.createElement("div",{className:"group w-full cursor-pointer relative transition duration-500 transform hover:scale-98 text-center overflow-hidden my-4 md:mt-"+u+" md:mb-"+m+" rounded-"+(d||0)+" "},i.a.createElement("div",{className:"w-full text-yellow-500 absolute top-1 z-50 opacity-0 group-hover:opacity-100 transition duration-500",style:{top:"50%",left:"50%",transform:"translate(-50%, -50%)"}},i.a.createElement("h1",{className:"mb-1 text-3xl md:text-6xl lg:text-9xl"},r),i.a.createElement("p",{className:"text-xs md:text-md md:text-3xl"},o)),i.a.createElement("div",{className:"bg-blackPure absolute inset-0 z-40 opacity-0 group-hover:opacity-75 transition-all duration-1000"}),i.a.createElement(l.a,{fluid:s,alt:c,loading:"eager"}))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-8062de99c6d9e4fad178.js.map