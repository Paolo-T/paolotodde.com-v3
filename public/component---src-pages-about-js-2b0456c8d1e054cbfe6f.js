(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"3XHS":function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),a=r.n(n),i=r("9CUm"),o=r("Wbzz"),s=r("9eSz"),l=r.n(s),c=r("oq01"),u=r("9cXN"),d=r("lAxN");t.default=function(){var e=Object(o.useStaticQuery)("20935346");return a.a.createElement(a.a.Fragment,null,a.a.createElement(i.a,{keywords:["UI Design","Product Design","Product Designer","Messaging App","App","UI Designer","Web Designer","Product Designer","Front-end Developer","Portfolio","Brighton","Uk"],title:"About"}),a.a.createElement(c.a,null,a.a.createElement("div",{className:"w-screen bg-ImageAboutBg sm:bg-ImageAboutBg__sm md:bg-ImageAboutBg__md lg:bg-ImageAboutBg__lg xl:bg-ImageAboutBg__xl bg-no-repeats pt-20 md:pt-48"},a.a.createElement(u.a,null,a.a.createElement("section",{className:"w-10/12 md:w-7/12 mx-auto pt-20 md:pt-10"},a.a.createElement("h2",{className:"md:w-12/12 text-4xl md:text-5xl"},"Hi!"),a.a.createElement("div",{className:"lg:w-8/12 block flex-2 pt-4 lg:pt-10"},a.a.createElement("p",{className:"mt-2"},"My name is Paolo Todde, and I am a designer specializing in web and mobile experiences. Currently designing remotely for ",a.a.createElement("a",{className:"cursor-pointer text-primary underline",rel:"noopener noreferrer",href:"https://www.brandwatch.com/",target:"_blank"},"Brandwatch")," in Brighton (UK).",a.a.createElement("br",null),a.a.createElement("br",null),"I have a passion for visual communication, creating and developing well crafted designs, user focused utilitarian interfaces. Contributing to the great web environment making the best experience mixing creativity and technology, sifting out the unnecessary."),a.a.createElement("p",{className:"mt-8"},"Staying curious and seeking new skills, discovering better ways of implementing techniques."),a.a.createElement("p",{className:"mt-8"},"Learning focus: UI/UX Design, Javascript, React."),a.a.createElement("p",{className:"mt-8"},"Member of the Jury Panel at ",a.a.createElement("a",{className:"cursor-pointer text-primary underline ",rel:"noopener noreferrer",href:"https://www.cssdesignawards.com/",target:"_blank"},"CSS Design Awards"))),a.a.createElement("a",{target:"_parent",rel:"noopener noreferrer",href:"mailto:iampaolotodde@gmail.com"},a.a.createElement("button",{type:"button",className:"inline-block bg-primary hover:bg-yellow-600 hover:text-white focus:outline-none transition duration-500 ease-in-out font-header text-xl md:text-2xl mt-20 py-3 px-10 rounded"},"Contact")))),a.a.createElement(u.a,null,a.a.createElement("section",{className:"w-full mt-20 mb-10 bg-yellow-100 py-10"},a.a.createElement("div",{className:"w-10/12 md:w-8/12 mx-auto"},a.a.createElement("h2",{className:"text-2xl md:text-3xl flex-1 mb-10 text-center"},"Side projects"),a.a.createElement("div",{className:"grid md:grid-cols-2 gap-8"},a.a.createElement("div",{className:"w-full"},a.a.createElement("a",{href:"https://www.instagram.com/roomzeroone/",target:"_blank"},a.a.createElement(l.a,{fluid:e.digitalArtImg.childImageSharp.fluid,alt:"Digital Art",className:"transition duration-500 transform hover:scale-98 rounded-lg cursor-pointer underline",loading:"eager"})),a.a.createElement("h2",{className:"text-lg mt-4"},"Digital Art")),a.a.createElement("div",{className:"w-full"},a.a.createElement(o.Link,{to:"/three",target:"_blank"},a.a.createElement(l.a,{fluid:e.threeImg.childImageSharp.fluid,alt:"3dc designs",className:"transition duration-500 transform hover:scale-98 rounded-lg cursor-pointer underline",loading:"eager"})),a.a.createElement("h2",{className:"text-lg mt-4"},"3DC (Brand)")))))))),a.a.createElement("div",{className:"bg-blackPure"},a.a.createElement(d.a,{isPageNav:!0})))}},"9cXN":function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n),i=r("wEEd");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var s=new Map,l=new Map,c=0;function u(e){return Object.keys(e).sort().filter((function(t){return void 0!==e[t]})).map((function(t){return t+"_"+("root"===t?(r=e.root)?(l.has(r)||(c+=1,l.set(r,c.toString())),l.get(r)):"0":e[t]);var r})).toString()}function d(e,t,r){if(void 0===r&&(r={}),!e)return function(){};var n=function(e){var t=u(e),r=s.get(t);if(!r){var n,a=new Map,i=new IntersectionObserver((function(t){t.forEach((function(t){var r,i=t.isIntersecting&&n.some((function(e){return t.intersectionRatio>=e}));e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=i),null==(r=a.get(t.target))||r.forEach((function(e){e(i,t)}))}))}),e);n=i.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:i,elements:a},s.set(t,r)}return r}(r),a=n.id,i=n.observer,o=n.elements,l=o.get(e)||[];return o.has(e)||o.set(e,l),l.push(t),i.observe(e),function(){l.splice(l.indexOf(t),1),0===l.length&&(o.delete(e),i.unobserve(e)),0===o.size&&(i.disconnect(),s.delete(a))}}function m(e){return"function"!=typeof e.children}var g=function(e){var t,r;function a(t){var r;return(r=e.call(this,t)||this).node=null,r._unobserveCb=null,r.handleNode=function(e){r.node&&(r.unobserve(),e||r.props.triggerOnce||r.props.skip||r.setState({inView:!!r.props.initialInView,entry:void 0})),r.node=e||null,r.observeNode()},r.handleChange=function(e,t){e&&r.props.triggerOnce&&r.unobserve(),m(r.props)||r.setState({inView:e,entry:t}),r.props.onChange&&r.props.onChange(e,t)},r.state={inView:!!t.initialInView,entry:void 0},r}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var i=a.prototype;return i.componentDidUpdate=function(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())},i.componentWillUnmount=function(){this.unobserve(),this.node=null},i.observeNode=function(){if(this.node&&!this.props.skip){var e=this.props,t=e.threshold,r=e.root,n=e.rootMargin,a=e.trackVisibility,i=e.delay;this._unobserveCb=d(this.node,this.handleChange,{threshold:t,root:r,rootMargin:n,trackVisibility:a,delay:i})}},i.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},i.render=function(){if(!m(this.props)){var e=this.state,t=e.inView,r=e.entry;return this.props.children({inView:t,entry:r,ref:this.handleNode})}var a=this.props,i=a.children,s=a.as,l=a.tag,c=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(a,["children","as","tag","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView"]);return Object(n.createElement)(s||l||"div",o({ref:this.handleNode},c),i)},a}(n.Component);g.displayName="InView",g.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1};t.a=function(e){var t=e.children,r=Object(n.useState)(!1),o=r[0],s=r[1],l=function(e){var t=void 0===e?{}:e,r=t.threshold,a=t.delay,i=t.trackVisibility,o=t.rootMargin,s=t.root,l=t.triggerOnce,c=t.skip,u=t.initialInView,m=Object(n.useRef)(),g=Object(n.useState)({inView:!!u}),p=g[0],h=g[1],f=Object(n.useCallback)((function(e){void 0!==m.current&&(m.current(),m.current=void 0),c||e&&(m.current=d(e,(function(e,t){h({inView:e,entry:t}),t.isIntersecting&&l&&m.current&&(m.current(),m.current=void 0)}),{root:s,rootMargin:o,threshold:r,trackVisibility:i,delay:a}))}),[Array.isArray(r)?r.toString():r,s,o,l,c,i,a]);Object(n.useEffect)((function(){m.current||!p.entry||l||c||h({inView:!!u})}));var b=[f,p.inView,p.entry];return b.ref=b[0],b.inView=b[1],b.entry=b[2],b}({rootMargin:"0px 0px"}),c=l[0],u=l[1],m=Object(i.b)({config:{mass:1,tension:200,friction:40},opacity:o?1:0,transform:o?"translate3d(0,0rem,0)":"translate3d(0,6rem,0)"});return Object(n.useEffect)((function(){!o&&u&&s(!0)}),[u]),a.a.createElement(i.a.div,{ref:c,style:m},t)}}}]);
//# sourceMappingURL=component---src-pages-about-js-2b0456c8d1e054cbfe6f.js.map