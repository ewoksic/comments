!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){},function(e,t,n){!function(t,n){var i=function(e,t,n){"use strict";var i,r;if(function(){var t,n={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(t in r=e.lazySizesConfig||e.lazysizesConfig||{},n)t in r||(r[t]=n[t])}(),!t||!t.getElementsByClassName)return{init:function(){},cfg:r,noSupport:!0};var a=t.documentElement,o=e.HTMLPictureElement,s=e.addEventListener.bind(e),l=e.setTimeout,u=e.requestAnimationFrame||l,c=e.requestIdleCallback,d=/^picture$/i,f=["load","error","lazyincluded","_lazyloaded"],h={},m=Array.prototype.forEach,p=function(e,t){return h[t]||(h[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),h[t].test(e.getAttribute("class")||"")&&h[t]},g=function(e,t){p(e,t)||e.setAttribute("class",(e.getAttribute("class")||"").trim()+" "+t)},v=function(e,t){var n;(n=p(e,t))&&e.setAttribute("class",(e.getAttribute("class")||"").replace(n," "))},y=function(e,t,n){var i=n?"addEventListener":"removeEventListener";n&&y(e,t),f.forEach((function(n){e[i](n,t)}))},b=function(e,n,r,a,o){var s=t.createEvent("Event");return r||(r={}),r.instance=i,s.initEvent(n,!a,!o),s.detail=r,e.dispatchEvent(s),s},z=function(t,n){var i;!o&&(i=e.picturefill||r.pf)?(n&&n.src&&!t.getAttribute("srcset")&&t.setAttribute("srcset",n.src),i({reevaluate:!0,elements:[t]})):n&&n.src&&(t.src=n.src)},w=function(e,t){return(getComputedStyle(e,null)||{})[t]},E=function(e,t,n){for(n=n||e.offsetWidth;n<r.minSize&&t&&!e._lazysizesWidth;)n=t.offsetWidth,t=t.parentNode;return n},A=(he=[],me=[],pe=he,ge=function(){var e=pe;for(pe=he.length?me:he,de=!0,fe=!1;e.length;)e.shift()();de=!1},ve=function(e,n){de&&!n?e.apply(this,arguments):(pe.push(e),fe||(fe=!0,(t.hidden?l:u)(ge)))},ve._lsFlush=ge,ve),C=function(e,t){return t?function(){A(e)}:function(){var t=this,n=arguments;A((function(){e.apply(t,n)}))}},x=function(e){var t,i,r=function(){t=null,e()},a=function(){var e=n.now()-i;e<99?l(a,99-e):(c||r)(r)};return function(){i=n.now(),t||(t=l(a,99))}},_=(U=/^img$/i,G=/^iframe$/i,V="onscroll"in e&&!/(gle|ing)bot/.test(navigator.userAgent),J=0,K=0,Q=-1,X=function(e){K--,(!e||K<0||!e.target)&&(K=0)},Y=function(e){return null==$&&($="hidden"==w(t.body,"visibility")),$||!("hidden"==w(e.parentNode,"visibility")&&"hidden"==w(e,"visibility"))},Z=function(e,n){var i,r=e,o=Y(e);for(D-=n,H+=n,F-=n,R+=n;o&&(r=r.offsetParent)&&r!=t.body&&r!=a;)(o=(w(r,"opacity")||1)>0)&&"visible"!=w(r,"overflow")&&(i=r.getBoundingClientRect(),o=R>i.left&&F<i.right&&H>i.top-1&&D<i.bottom+1);return o},ee=function(){var e,n,o,s,l,u,c,d,f,h,m,p,g=i.elements;if((N=r.loadMode)&&K<8&&(e=g.length)){for(n=0,Q++;n<e;n++)if(g[n]&&!g[n]._lazyRace)if(!V||i.prematureUnveil&&i.prematureUnveil(g[n]))se(g[n]);else if((d=g[n].getAttribute("data-expand"))&&(u=1*d)||(u=J),h||(h=!r.expand||r.expand<1?a.clientHeight>500&&a.clientWidth>500?500:370:r.expand,i._defEx=h,m=h*r.expFactor,p=r.hFac,$=null,J<m&&K<1&&Q>2&&N>2&&!t.hidden?(J=m,Q=0):J=N>1&&Q>1&&K<6?h:0),f!==u&&(O=innerWidth+u*p,W=innerHeight+u,c=-1*u,f=u),o=g[n].getBoundingClientRect(),(H=o.bottom)>=c&&(D=o.top)<=W&&(R=o.right)>=c*p&&(F=o.left)<=O&&(H||R||F||D)&&(r.loadHidden||Y(g[n]))&&(q&&K<3&&!d&&(N<3||Q<4)||Z(g[n],u))){if(se(g[n]),l=!0,K>9)break}else!l&&q&&!s&&K<4&&Q<4&&N>2&&(L[0]||r.preloadAfterLoad)&&(L[0]||!d&&(H||R||F||D||"auto"!=g[n].getAttribute(r.sizesAttr)))&&(s=L[0]||g[n]);s&&!l&&se(s)}},te=function(e){var t,i=0,a=r.throttleDelay,o=r.ricTimeout,s=function(){t=!1,i=n.now(),e()},u=c&&o>49?function(){c(s,{timeout:o}),o!==r.ricTimeout&&(o=r.ricTimeout)}:C((function(){l(s)}),!0);return function(e){var r;(e=!0===e)&&(o=33),t||(t=!0,(r=a-(n.now()-i))<0&&(r=0),e||r<9?u():l(u,r))}}(ee),ne=function(e){var t=e.target;t._lazyCache?delete t._lazyCache:(X(e),g(t,r.loadedClass),v(t,r.loadingClass),y(t,re),b(t,"lazyloaded"))},ie=C(ne),re=function(e){ie({target:e.target})},ae=function(e){var t,n=e.getAttribute(r.srcsetAttr);(t=r.customMedia[e.getAttribute("data-media")||e.getAttribute("media")])&&e.setAttribute("media",t),n&&e.setAttribute("srcset",n)},oe=C((function(e,t,n,i,a){var o,s,u,c,f,h;(f=b(e,"lazybeforeunveil",t)).defaultPrevented||(i&&(n?g(e,r.autosizesClass):e.setAttribute("sizes",i)),s=e.getAttribute(r.srcsetAttr),o=e.getAttribute(r.srcAttr),a&&(c=(u=e.parentNode)&&d.test(u.nodeName||"")),h=t.firesLoad||"src"in e&&(s||o||c),f={target:e},g(e,r.loadingClass),h&&(clearTimeout(P),P=l(X,2500),y(e,re,!0)),c&&m.call(u.getElementsByTagName("source"),ae),s?e.setAttribute("srcset",s):o&&!c&&(G.test(e.nodeName)?function(e,t){try{e.contentWindow.location.replace(t)}catch(n){e.src=t}}(e,o):e.src=o),a&&(s||c)&&z(e,{src:o})),e._lazyRace&&delete e._lazyRace,v(e,r.lazyClass),A((function(){var t=e.complete&&e.naturalWidth>1;h&&!t||(t&&g(e,"ls-is-cached"),ne(f),e._lazyCache=!0,l((function(){"_lazyCache"in e&&delete e._lazyCache}),9)),"lazy"==e.loading&&K--}),!0)})),se=function(e){if(!e._lazyRace){var t,n=U.test(e.nodeName),i=n&&(e.getAttribute(r.sizesAttr)||e.getAttribute("sizes")),a="auto"==i;(!a&&q||!n||!e.getAttribute("src")&&!e.srcset||e.complete||p(e,r.errorClass)||!p(e,r.lazyClass))&&(t=b(e,"lazyunveilread").detail,a&&j.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,K++,oe(e,t,a,i,n))}},le=x((function(){r.loadMode=3,te()})),ue=function(){3==r.loadMode&&(r.loadMode=2),le()},ce=function(){q||(n.now()-T<999?l(ce,999):(q=!0,r.loadMode=3,te(),s("scroll",ue,!0)))},{_:function(){T=n.now(),i.elements=t.getElementsByClassName(r.lazyClass),L=t.getElementsByClassName(r.lazyClass+" "+r.preloadClass),s("scroll",te,!0),s("resize",te,!0),s("pageshow",(function(e){if(e.persisted){var n=t.querySelectorAll("."+r.loadingClass);n.length&&n.forEach&&u((function(){n.forEach((function(e){e.complete&&se(e)}))}))}})),e.MutationObserver?new MutationObserver(te).observe(a,{childList:!0,subtree:!0,attributes:!0}):(a.addEventListener("DOMNodeInserted",te,!0),a.addEventListener("DOMAttrModified",te,!0),setInterval(te,999)),s("hashchange",te,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach((function(e){t.addEventListener(e,te,!0)})),/d$|^c/.test(t.readyState)?ce():(s("load",ce),t.addEventListener("DOMContentLoaded",te),l(ce,2e4)),i.elements.length?(ee(),A._lsFlush()):te()},checkElems:te,unveil:se,_aLSL:ue}),j=(k=C((function(e,t,n,i){var r,a,o;if(e._lazysizesWidth=i,i+="px",e.setAttribute("sizes",i),d.test(t.nodeName||""))for(a=0,o=(r=t.getElementsByTagName("source")).length;a<o;a++)r[a].setAttribute("sizes",i);n.detail.dataAttr||z(e,n.detail)})),S=function(e,t,n){var i,r=e.parentNode;r&&(n=E(e,r,n),(i=b(e,"lazybeforesizes",{width:n,dataAttr:!!t})).defaultPrevented||(n=i.detail.width)&&n!==e._lazysizesWidth&&k(e,r,i,n))},B=x((function(){var e,t=M.length;if(t)for(e=0;e<t;e++)S(M[e])})),{_:function(){M=t.getElementsByClassName(r.autosizesClass),s("resize",B)},checkElems:B,updateElem:S}),I=function(){!I.i&&t.getElementsByClassName&&(I.i=!0,j._(),_._())};var M,k,S,B;var L,q,P,N,T,O,W,D,F,R,H,$,U,G,V,J,K,Q,X,Y,Z,ee,te,ne,ie,re,ae,oe,se,le,ue,ce;var de,fe,he,me,pe,ge,ve;return l((function(){r.init&&I()})),i={cfg:r,autoSizer:j,loader:_,init:I,uP:z,aC:g,rC:v,hC:p,fire:b,gW:E,rAF:A}}(t,t.document,Date);t.lazySizes=i,e.exports&&(e.exports=i)}("undefined"!=typeof window?window:{})},function(e,t,n){"use strict";n.r(t);n(0),n(1);function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.reviews=[{id:1,name:"susan smith",job:"web developer",img:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",text:"I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"},{id:2,name:"anna johnson",job:"web designer",img:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",text:"Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."},{id:3,name:"peter jones",job:"intern",img:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",text:"Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."},{id:4,name:"bill anderson",job:"the boss",img:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",text:"Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. "}],this.image=document.getElementById("person-img"),this.author=document.getElementById("author"),this.position=document.getElementById("job"),this.info=document.getElementById("info"),this.prevBtn=document.querySelector(".prev-btn"),this.nextBtn=document.querySelector(".next-btn"),this.randomBtn=document.querySelector(".random-btn"),this.currentItem=0,this.events()}var t,n,r;return t=e,(n=[{key:"events",value:function(){var e=this;window.addEventListener("DOMContentLoaded",(function(){return e.showPerson(e.currentItem)})),this.prevBtn.addEventListener("click",(function(){return e.nextItem()})),this.nextBtn.addEventListener("click",(function(){return e.prevItem()})),this.randomBtn.addEventListener("click",(function(){return e.randomPerson()}))}},{key:"showPerson",value:function(e){var t=this.reviews[e];this.image.src=t.img,this.author.innerText=t.name,this.position.innerText=t.job,this.info.innerText=t.text}},{key:"nextItem",value:function(){this.currentItem++,this.currentItem>this.reviews.length-1&&(this.currentItem=0),this.showPerson(this.currentItem)}},{key:"prevItem",value:function(){this.currentItem--,this.currentItem<0&&(this.currentItem=this.reviews.length-1),this.showPerson(this.currentItem)}},{key:"randomPerson",value:function(){this.currentItem=Math.floor(Math.random()*this.reviews.length),this.showPerson(this.currentItem)}}])&&i(t.prototype,n),r&&i(t,r),e}())}]);