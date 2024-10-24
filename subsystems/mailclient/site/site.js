/*!
  * Bootstrap v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).bootstrap=e()}(this,(function(){"use strict";const t=new Map,e={set(e,i,n){t.has(e)||t.set(e,new Map);const s=t.get(e);s.has(i)||0===s.size?s.set(i,n):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`)},get:(e,i)=>t.has(e)&&t.get(e).get(i)||null,remove(e,i){if(!t.has(e))return;const n=t.get(e);n.delete(i),0===n.size&&t.delete(e)}},i="transitionend",n=t=>(t&&window.CSS&&window.CSS.escape&&(t=t.replace(/#([^\s"#']+)/g,((t,e)=>`#${CSS.escape(e)}`))),t),s=t=>{t.dispatchEvent(new Event(i))},o=t=>!(!t||"object"!=typeof t)&&(void 0!==t.jquery&&(t=t[0]),void 0!==t.nodeType),r=t=>o(t)?t.jquery?t[0]:t:"string"==typeof t&&t.length>0?document.querySelector(n(t)):null,a=t=>{if(!o(t)||0===t.getClientRects().length)return!1;const e="visible"===getComputedStyle(t).getPropertyValue("visibility"),i=t.closest("details:not([open])");if(!i)return e;if(i!==t){const e=t.closest("summary");if(e&&e.parentNode!==i)return!1;if(null===e)return!1}return e},l=t=>!t||t.nodeType!==Node.ELEMENT_NODE||!!t.classList.contains("disabled")||(void 0!==t.disabled?t.disabled:t.hasAttribute("disabled")&&"false"!==t.getAttribute("disabled")),c=t=>{if(!document.documentElement.attachShadow)return null;if("function"==typeof t.getRootNode){const e=t.getRootNode();return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?c(t.parentNode):null},h=()=>{},d=t=>{t.offsetHeight},u=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,f=[],p=()=>"rtl"===document.documentElement.dir,m=t=>{var e;e=()=>{const e=u();if(e){const i=t.NAME,n=e.fn[i];e.fn[i]=t.jQueryInterface,e.fn[i].Constructor=t,e.fn[i].noConflict=()=>(e.fn[i]=n,t.jQueryInterface)}},"loading"===document.readyState?(f.length||document.addEventListener("DOMContentLoaded",(()=>{for(const t of f)t()})),f.push(e)):e()},g=(t,e=[],i=t)=>"function"==typeof t?t(...e):i,_=(t,e,n=!0)=>{if(!n)return void g(t);const o=(t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:i}=window.getComputedStyle(t);const n=Number.parseFloat(e),s=Number.parseFloat(i);return n||s?(e=e.split(",")[0],i=i.split(",")[0],1e3*(Number.parseFloat(e)+Number.parseFloat(i))):0})(e)+5;let r=!1;const a=({target:n})=>{n===e&&(r=!0,e.removeEventListener(i,a),g(t))};e.addEventListener(i,a),setTimeout((()=>{r||s(e)}),o)},b=(t,e,i,n)=>{const s=t.length;let o=t.indexOf(e);return-1===o?!i&&n?t[s-1]:t[0]:(o+=i?1:-1,n&&(o=(o+s)%s),t[Math.max(0,Math.min(o,s-1))])},v=/[^.]*(?=\..*)\.|.*/,y=/\..*/,w=/::\d+$/,A={};let E=1;const T={mouseenter:"mouseover",mouseleave:"mouseout"},C=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function O(t,e){return e&&`${e}::${E++}`||t.uidEvent||E++}function x(t){const e=O(t);return t.uidEvent=e,A[e]=A[e]||{},A[e]}function k(t,e,i=null){return Object.values(t).find((t=>t.callable===e&&t.delegationSelector===i))}function L(t,e,i){const n="string"==typeof e,s=n?i:e||i;let o=I(t);return C.has(o)||(o=t),[n,s,o]}function S(t,e,i,n,s){if("string"!=typeof e||!t)return;let[o,r,a]=L(e,i,n);if(e in T){const t=t=>function(e){if(!e.relatedTarget||e.relatedTarget!==e.delegateTarget&&!e.delegateTarget.contains(e.relatedTarget))return t.call(this,e)};r=t(r)}const l=x(t),c=l[a]||(l[a]={}),h=k(c,r,o?i:null);if(h)return void(h.oneOff=h.oneOff&&s);const d=O(r,e.replace(v,"")),u=o?function(t,e,i){return function n(s){const o=t.querySelectorAll(e);for(let{target:r}=s;r&&r!==this;r=r.parentNode)for(const a of o)if(a===r)return P(s,{delegateTarget:r}),n.oneOff&&N.off(t,s.type,e,i),i.apply(r,[s])}}(t,i,r):function(t,e){return function i(n){return P(n,{delegateTarget:t}),i.oneOff&&N.off(t,n.type,e),e.apply(t,[n])}}(t,r);u.delegationSelector=o?i:null,u.callable=r,u.oneOff=s,u.uidEvent=d,c[d]=u,t.addEventListener(a,u,o)}function D(t,e,i,n,s){const o=k(e[i],n,s);o&&(t.removeEventListener(i,o,Boolean(s)),delete e[i][o.uidEvent])}function $(t,e,i,n){const s=e[i]||{};for(const[o,r]of Object.entries(s))o.includes(n)&&D(t,e,i,r.callable,r.delegationSelector)}function I(t){return t=t.replace(y,""),T[t]||t}const N={on(t,e,i,n){S(t,e,i,n,!1)},one(t,e,i,n){S(t,e,i,n,!0)},off(t,e,i,n){if("string"!=typeof e||!t)return;const[s,o,r]=L(e,i,n),a=r!==e,l=x(t),c=l[r]||{},h=e.startsWith(".");if(void 0===o){if(h)for(const i of Object.keys(l))$(t,l,i,e.slice(1));for(const[i,n]of Object.entries(c)){const s=i.replace(w,"");a&&!e.includes(s)||D(t,l,r,n.callable,n.delegationSelector)}}else{if(!Object.keys(c).length)return;D(t,l,r,o,s?i:null)}},trigger(t,e,i){if("string"!=typeof e||!t)return null;const n=u();let s=null,o=!0,r=!0,a=!1;e!==I(e)&&n&&(s=n.Event(e,i),n(t).trigger(s),o=!s.isPropagationStopped(),r=!s.isImmediatePropagationStopped(),a=s.isDefaultPrevented());const l=P(new Event(e,{bubbles:o,cancelable:!0}),i);return a&&l.preventDefault(),r&&t.dispatchEvent(l),l.defaultPrevented&&s&&s.preventDefault(),l}};function P(t,e={}){for(const[i,n]of Object.entries(e))try{t[i]=n}catch(e){Object.defineProperty(t,i,{configurable:!0,get:()=>n})}return t}function j(t){if("true"===t)return!0;if("false"===t)return!1;if(t===Number(t).toString())return Number(t);if(""===t||"null"===t)return null;if("string"!=typeof t)return t;try{return JSON.parse(decodeURIComponent(t))}catch(e){return t}}function M(t){return t.replace(/[A-Z]/g,(t=>`-${t.toLowerCase()}`))}const F={setDataAttribute(t,e,i){t.setAttribute(`data-bs-${M(e)}`,i)},removeDataAttribute(t,e){t.removeAttribute(`data-bs-${M(e)}`)},getDataAttributes(t){if(!t)return{};const e={},i=Object.keys(t.dataset).filter((t=>t.startsWith("bs")&&!t.startsWith("bsConfig")));for(const n of i){let i=n.replace(/^bs/,"");i=i.charAt(0).toLowerCase()+i.slice(1,i.length),e[i]=j(t.dataset[n])}return e},getDataAttribute:(t,e)=>j(t.getAttribute(`data-bs-${M(e)}`))};class H{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,e){const i=o(e)?F.getDataAttribute(e,"config"):{};return{...this.constructor.Default,..."object"==typeof i?i:{},...o(e)?F.getDataAttributes(e):{},..."object"==typeof t?t:{}}}_typeCheckConfig(t,e=this.constructor.DefaultType){for(const[n,s]of Object.entries(e)){const e=t[n],r=o(e)?"element":null==(i=e)?`${i}`:Object.prototype.toString.call(i).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(s).test(r))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${r}" but expected type "${s}".`)}var i}}class W extends H{constructor(t,i){super(),(t=r(t))&&(this._element=t,this._config=this._getConfig(i),e.set(this._element,this.constructor.DATA_KEY,this))}dispose(){e.remove(this._element,this.constructor.DATA_KEY),N.off(this._element,this.constructor.EVENT_KEY);for(const t of Object.getOwnPropertyNames(this))this[t]=null}_queueCallback(t,e,i=!0){_(t,e,i)}_getConfig(t){return t=this._mergeConfigObj(t,this._element),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}static getInstance(t){return e.get(r(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,"object"==typeof e?e:null)}static get VERSION(){return"5.3.3"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(t){return`${t}${this.EVENT_KEY}`}}const B=t=>{let e=t.getAttribute("data-bs-target");if(!e||"#"===e){let i=t.getAttribute("href");if(!i||!i.includes("#")&&!i.startsWith("."))return null;i.includes("#")&&!i.startsWith("#")&&(i=`#${i.split("#")[1]}`),e=i&&"#"!==i?i.trim():null}return e?e.split(",").map((t=>n(t))).join(","):null},z={find:(t,e=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(e,t)),findOne:(t,e=document.documentElement)=>Element.prototype.querySelector.call(e,t),children:(t,e)=>[].concat(...t.children).filter((t=>t.matches(e))),parents(t,e){const i=[];let n=t.parentNode.closest(e);for(;n;)i.push(n),n=n.parentNode.closest(e);return i},prev(t,e){let i=t.previousElementSibling;for(;i;){if(i.matches(e))return[i];i=i.previousElementSibling}return[]},next(t,e){let i=t.nextElementSibling;for(;i;){if(i.matches(e))return[i];i=i.nextElementSibling}return[]},focusableChildren(t){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map((t=>`${t}:not([tabindex^="-"])`)).join(",");return this.find(e,t).filter((t=>!l(t)&&a(t)))},getSelectorFromElement(t){const e=B(t);return e&&z.findOne(e)?e:null},getElementFromSelector(t){const e=B(t);return e?z.findOne(e):null},getMultipleElementsFromSelector(t){const e=B(t);return e?z.find(e):[]}},R=(t,e="hide")=>{const i=`click.dismiss${t.EVENT_KEY}`,n=t.NAME;N.on(document,i,`[data-bs-dismiss="${n}"]`,(function(i){if(["A","AREA"].includes(this.tagName)&&i.preventDefault(),l(this))return;const s=z.getElementFromSelector(this)||this.closest(`.${n}`);t.getOrCreateInstance(s)[e]()}))},q=".bs.alert",V=`close${q}`,K=`closed${q}`;class Q extends W{static get NAME(){return"alert"}close(){if(N.trigger(this._element,V).defaultPrevented)return;this._element.classList.remove("show");const t=this._element.classList.contains("fade");this._queueCallback((()=>this._destroyElement()),this._element,t)}_destroyElement(){this._element.remove(),N.trigger(this._element,K),this.dispose()}static jQueryInterface(t){return this.each((function(){const e=Q.getOrCreateInstance(this);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}R(Q,"close"),m(Q);const X='[data-bs-toggle="button"]';class Y extends W{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(t){return this.each((function(){const e=Y.getOrCreateInstance(this);"toggle"===t&&e[t]()}))}}N.on(document,"click.bs.button.data-api",X,(t=>{t.preventDefault();const e=t.target.closest(X);Y.getOrCreateInstance(e).toggle()})),m(Y);const U=".bs.swipe",G=`touchstart${U}`,J=`touchmove${U}`,Z=`touchend${U}`,tt=`pointerdown${U}`,et=`pointerup${U}`,it={endCallback:null,leftCallback:null,rightCallback:null},nt={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class st extends H{constructor(t,e){super(),this._element=t,t&&st.isSupported()&&(this._config=this._getConfig(e),this._deltaX=0,this._supportPointerEvents=Boolean(window.PointerEvent),this._initEvents())}static get Default(){return it}static get DefaultType(){return nt}static get NAME(){return"swipe"}dispose(){N.off(this._element,U)}_start(t){this._supportPointerEvents?this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX):this._deltaX=t.touches[0].clientX}_end(t){this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX-this._deltaX),this._handleSwipe(),g(this._config.endCallback)}_move(t){this._deltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this._deltaX}_handleSwipe(){const t=Math.abs(this._deltaX);if(t<=40)return;const e=t/this._deltaX;this._deltaX=0,e&&g(e>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(N.on(this._element,tt,(t=>this._start(t))),N.on(this._element,et,(t=>this._end(t))),this._element.classList.add("pointer-event")):(N.on(this._element,G,(t=>this._start(t))),N.on(this._element,J,(t=>this._move(t))),N.on(this._element,Z,(t=>this._end(t))))}_eventIsPointerPenTouch(t){return this._supportPointerEvents&&("pen"===t.pointerType||"touch"===t.pointerType)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const ot=".bs.carousel",rt=".data-api",at="next",lt="prev",ct="left",ht="right",dt=`slide${ot}`,ut=`slid${ot}`,ft=`keydown${ot}`,pt=`mouseenter${ot}`,mt=`mouseleave${ot}`,gt=`dragstart${ot}`,_t=`load${ot}${rt}`,bt=`click${ot}${rt}`,vt="carousel",yt="active",wt=".active",At=".carousel-item",Et=wt+At,Tt={ArrowLeft:ht,ArrowRight:ct},Ct={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},Ot={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class xt extends W{constructor(t,e){super(t,e),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=z.findOne(".carousel-indicators",this._element),this._addEventListeners(),this._config.ride===vt&&this.cycle()}static get Default(){return Ct}static get DefaultType(){return Ot}static get NAME(){return"carousel"}next(){this._slide(at)}nextWhenVisible(){!document.hidden&&a(this._element)&&this.next()}prev(){this._slide(lt)}pause(){this._isSliding&&s(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval((()=>this.nextWhenVisible()),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?N.one(this._element,ut,(()=>this.cycle())):this.cycle())}to(t){const e=this._getItems();if(t>e.length-1||t<0)return;if(this._isSliding)return void N.one(this._element,ut,(()=>this.to(t)));const i=this._getItemIndex(this._getActive());if(i===t)return;const n=t>i?at:lt;this._slide(n,e[t])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(t){return t.defaultInterval=t.interval,t}_addEventListeners(){this._config.keyboard&&N.on(this._element,ft,(t=>this._keydown(t))),"hover"===this._config.pause&&(N.on(this._element,pt,(()=>this.pause())),N.on(this._element,mt,(()=>this._maybeEnableCycle()))),this._config.touch&&st.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const t of z.find(".carousel-item img",this._element))N.on(t,gt,(t=>t.preventDefault()));const t={leftCallback:()=>this._slide(this._directionToOrder(ct)),rightCallback:()=>this._slide(this._directionToOrder(ht)),endCallback:()=>{"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout((()=>this._maybeEnableCycle()),500+this._config.interval))}};this._swipeHelper=new st(this._element,t)}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const e=Tt[t.key];e&&(t.preventDefault(),this._slide(this._directionToOrder(e)))}_getItemIndex(t){return this._getItems().indexOf(t)}_setActiveIndicatorElement(t){if(!this._indicatorsElement)return;const e=z.findOne(wt,this._indicatorsElement);e.classList.remove(yt),e.removeAttribute("aria-current");const i=z.findOne(`[data-bs-slide-to="${t}"]`,this._indicatorsElement);i&&(i.classList.add(yt),i.setAttribute("aria-current","true"))}_updateInterval(){const t=this._activeElement||this._getActive();if(!t)return;const e=Number.parseInt(t.getAttribute("data-bs-interval"),10);this._config.interval=e||this._config.defaultInterval}_slide(t,e=null){if(this._isSliding)return;const i=this._getActive(),n=t===at,s=e||b(this._getItems(),i,n,this._config.wrap);if(s===i)return;const o=this._getItemIndex(s),r=e=>N.trigger(this._element,e,{relatedTarget:s,direction:this._orderToDirection(t),from:this._getItemIndex(i),to:o});if(r(dt).defaultPrevented)return;if(!i||!s)return;const a=Boolean(this._interval);this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(o),this._activeElement=s;const l=n?"carousel-item-start":"carousel-item-end",c=n?"carousel-item-next":"carousel-item-prev";s.classList.add(c),d(s),i.classList.add(l),s.classList.add(l),this._queueCallback((()=>{s.classList.remove(l,c),s.classList.add(yt),i.classList.remove(yt,c,l),this._isSliding=!1,r(ut)}),i,this._isAnimated()),a&&this.cycle()}_isAnimated(){return this._element.classList.contains("slide")}_getActive(){return z.findOne(Et,this._element)}_getItems(){return z.find(At,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(t){return p()?t===ct?lt:at:t===ct?at:lt}_orderToDirection(t){return p()?t===lt?ct:ht:t===lt?ht:ct}static jQueryInterface(t){return this.each((function(){const e=xt.getOrCreateInstance(this,t);if("number"!=typeof t){if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t]()}}else e.to(t)}))}}N.on(document,bt,"[data-bs-slide], [data-bs-slide-to]",(function(t){const e=z.getElementFromSelector(this);if(!e||!e.classList.contains(vt))return;t.preventDefault();const i=xt.getOrCreateInstance(e),n=this.getAttribute("data-bs-slide-to");return n?(i.to(n),void i._maybeEnableCycle()):"next"===F.getDataAttribute(this,"slide")?(i.next(),void i._maybeEnableCycle()):(i.prev(),void i._maybeEnableCycle())})),N.on(window,_t,(()=>{const t=z.find('[data-bs-ride="carousel"]');for(const e of t)xt.getOrCreateInstance(e)})),m(xt);const kt=".bs.collapse",Lt=`show${kt}`,St=`shown${kt}`,Dt=`hide${kt}`,$t=`hidden${kt}`,It=`click${kt}.data-api`,Nt="show",Pt="collapse",jt="collapsing",Mt=`:scope .${Pt} .${Pt}`,Ft='[data-bs-toggle="collapse"]',Ht={parent:null,toggle:!0},Wt={parent:"(null|element)",toggle:"boolean"};class Bt extends W{constructor(t,e){super(t,e),this._isTransitioning=!1,this._triggerArray=[];const i=z.find(Ft);for(const t of i){const e=z.getSelectorFromElement(t),i=z.find(e).filter((t=>t===this._element));null!==e&&i.length&&this._triggerArray.push(t)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return Ht}static get DefaultType(){return Wt}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t=[];if(this._config.parent&&(t=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((t=>t!==this._element)).map((t=>Bt.getOrCreateInstance(t,{toggle:!1})))),t.length&&t[0]._isTransitioning)return;if(N.trigger(this._element,Lt).defaultPrevented)return;for(const e of t)e.hide();const e=this._getDimension();this._element.classList.remove(Pt),this._element.classList.add(jt),this._element.style[e]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const i=`scroll${e[0].toUpperCase()+e.slice(1)}`;this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove(jt),this._element.classList.add(Pt,Nt),this._element.style[e]="",N.trigger(this._element,St)}),this._element,!0),this._element.style[e]=`${this._element[i]}px`}hide(){if(this._isTransitioning||!this._isShown())return;if(N.trigger(this._element,Dt).defaultPrevented)return;const t=this._getDimension();this._element.style[t]=`${this._element.getBoundingClientRect()[t]}px`,d(this._element),this._element.classList.add(jt),this._element.classList.remove(Pt,Nt);for(const t of this._triggerArray){const e=z.getElementFromSelector(t);e&&!this._isShown(e)&&this._addAriaAndCollapsedClass([t],!1)}this._isTransitioning=!0,this._element.style[t]="",this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove(jt),this._element.classList.add(Pt),N.trigger(this._element,$t)}),this._element,!0)}_isShown(t=this._element){return t.classList.contains(Nt)}_configAfterMerge(t){return t.toggle=Boolean(t.toggle),t.parent=r(t.parent),t}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const t=this._getFirstLevelChildren(Ft);for(const e of t){const t=z.getElementFromSelector(e);t&&this._addAriaAndCollapsedClass([e],this._isShown(t))}}_getFirstLevelChildren(t){const e=z.find(Mt,this._config.parent);return z.find(t,this._config.parent).filter((t=>!e.includes(t)))}_addAriaAndCollapsedClass(t,e){if(t.length)for(const i of t)i.classList.toggle("collapsed",!e),i.setAttribute("aria-expanded",e)}static jQueryInterface(t){const e={};return"string"==typeof t&&/show|hide/.test(t)&&(e.toggle=!1),this.each((function(){const i=Bt.getOrCreateInstance(this,e);if("string"==typeof t){if(void 0===i[t])throw new TypeError(`No method named "${t}"`);i[t]()}}))}}N.on(document,It,Ft,(function(t){("A"===t.target.tagName||t.delegateTarget&&"A"===t.delegateTarget.tagName)&&t.preventDefault();for(const t of z.getMultipleElementsFromSelector(this))Bt.getOrCreateInstance(t,{toggle:!1}).toggle()})),m(Bt);var zt="top",Rt="bottom",qt="right",Vt="left",Kt="auto",Qt=[zt,Rt,qt,Vt],Xt="start",Yt="end",Ut="clippingParents",Gt="viewport",Jt="popper",Zt="reference",te=Qt.reduce((function(t,e){return t.concat([e+"-"+Xt,e+"-"+Yt])}),[]),ee=[].concat(Qt,[Kt]).reduce((function(t,e){return t.concat([e,e+"-"+Xt,e+"-"+Yt])}),[]),ie="beforeRead",ne="read",se="afterRead",oe="beforeMain",re="main",ae="afterMain",le="beforeWrite",ce="write",he="afterWrite",de=[ie,ne,se,oe,re,ae,le,ce,he];function ue(t){return t?(t.nodeName||"").toLowerCase():null}function fe(t){if(null==t)return window;if("[object Window]"!==t.toString()){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function pe(t){return t instanceof fe(t).Element||t instanceof Element}function me(t){return t instanceof fe(t).HTMLElement||t instanceof HTMLElement}function ge(t){return"undefined"!=typeof ShadowRoot&&(t instanceof fe(t).ShadowRoot||t instanceof ShadowRoot)}const _e={name:"applyStyles",enabled:!0,phase:"write",fn:function(t){var e=t.state;Object.keys(e.elements).forEach((function(t){var i=e.styles[t]||{},n=e.attributes[t]||{},s=e.elements[t];me(s)&&ue(s)&&(Object.assign(s.style,i),Object.keys(n).forEach((function(t){var e=n[t];!1===e?s.removeAttribute(t):s.setAttribute(t,!0===e?"":e)})))}))},effect:function(t){var e=t.state,i={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,i.popper),e.styles=i,e.elements.arrow&&Object.assign(e.elements.arrow.style,i.arrow),function(){Object.keys(e.elements).forEach((function(t){var n=e.elements[t],s=e.attributes[t]||{},o=Object.keys(e.styles.hasOwnProperty(t)?e.styles[t]:i[t]).reduce((function(t,e){return t[e]="",t}),{});me(n)&&ue(n)&&(Object.assign(n.style,o),Object.keys(s).forEach((function(t){n.removeAttribute(t)})))}))}},requires:["computeStyles"]};function be(t){return t.split("-")[0]}var ve=Math.max,ye=Math.min,we=Math.round;function Ae(){var t=navigator.userAgentData;return null!=t&&t.brands&&Array.isArray(t.brands)?t.brands.map((function(t){return t.brand+"/"+t.version})).join(" "):navigator.userAgent}function Ee(){return!/^((?!chrome|android).)*safari/i.test(Ae())}function Te(t,e,i){void 0===e&&(e=!1),void 0===i&&(i=!1);var n=t.getBoundingClientRect(),s=1,o=1;e&&me(t)&&(s=t.offsetWidth>0&&we(n.width)/t.offsetWidth||1,o=t.offsetHeight>0&&we(n.height)/t.offsetHeight||1);var r=(pe(t)?fe(t):window).visualViewport,a=!Ee()&&i,l=(n.left+(a&&r?r.offsetLeft:0))/s,c=(n.top+(a&&r?r.offsetTop:0))/o,h=n.width/s,d=n.height/o;return{width:h,height:d,top:c,right:l+h,bottom:c+d,left:l,x:l,y:c}}function Ce(t){var e=Te(t),i=t.offsetWidth,n=t.offsetHeight;return Math.abs(e.width-i)<=1&&(i=e.width),Math.abs(e.height-n)<=1&&(n=e.height),{x:t.offsetLeft,y:t.offsetTop,width:i,height:n}}function Oe(t,e){var i=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(i&&ge(i)){var n=e;do{if(n&&t.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function xe(t){return fe(t).getComputedStyle(t)}function ke(t){return["table","td","th"].indexOf(ue(t))>=0}function Le(t){return((pe(t)?t.ownerDocument:t.document)||window.document).documentElement}function Se(t){return"html"===ue(t)?t:t.assignedSlot||t.parentNode||(ge(t)?t.host:null)||Le(t)}function De(t){return me(t)&&"fixed"!==xe(t).position?t.offsetParent:null}function $e(t){for(var e=fe(t),i=De(t);i&&ke(i)&&"static"===xe(i).position;)i=De(i);return i&&("html"===ue(i)||"body"===ue(i)&&"static"===xe(i).position)?e:i||function(t){var e=/firefox/i.test(Ae());if(/Trident/i.test(Ae())&&me(t)&&"fixed"===xe(t).position)return null;var i=Se(t);for(ge(i)&&(i=i.host);me(i)&&["html","body"].indexOf(ue(i))<0;){var n=xe(i);if("none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||-1!==["transform","perspective"].indexOf(n.willChange)||e&&"filter"===n.willChange||e&&n.filter&&"none"!==n.filter)return i;i=i.parentNode}return null}(t)||e}function Ie(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function Ne(t,e,i){return ve(t,ye(e,i))}function Pe(t){return Object.assign({},{top:0,right:0,bottom:0,left:0},t)}function je(t,e){return e.reduce((function(e,i){return e[i]=t,e}),{})}const Me={name:"arrow",enabled:!0,phase:"main",fn:function(t){var e,i=t.state,n=t.name,s=t.options,o=i.elements.arrow,r=i.modifiersData.popperOffsets,a=be(i.placement),l=Ie(a),c=[Vt,qt].indexOf(a)>=0?"height":"width";if(o&&r){var h=function(t,e){return Pe("number"!=typeof(t="function"==typeof t?t(Object.assign({},e.rects,{placement:e.placement})):t)?t:je(t,Qt))}(s.padding,i),d=Ce(o),u="y"===l?zt:Vt,f="y"===l?Rt:qt,p=i.rects.reference[c]+i.rects.reference[l]-r[l]-i.rects.popper[c],m=r[l]-i.rects.reference[l],g=$e(o),_=g?"y"===l?g.clientHeight||0:g.clientWidth||0:0,b=p/2-m/2,v=h[u],y=_-d[c]-h[f],w=_/2-d[c]/2+b,A=Ne(v,w,y),E=l;i.modifiersData[n]=((e={})[E]=A,e.centerOffset=A-w,e)}},effect:function(t){var e=t.state,i=t.options.element,n=void 0===i?"[data-popper-arrow]":i;null!=n&&("string"!=typeof n||(n=e.elements.popper.querySelector(n)))&&Oe(e.elements.popper,n)&&(e.elements.arrow=n)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Fe(t){return t.split("-")[1]}var He={top:"auto",right:"auto",bottom:"auto",left:"auto"};function We(t){var e,i=t.popper,n=t.popperRect,s=t.placement,o=t.variation,r=t.offsets,a=t.position,l=t.gpuAcceleration,c=t.adaptive,h=t.roundOffsets,d=t.isFixed,u=r.x,f=void 0===u?0:u,p=r.y,m=void 0===p?0:p,g="function"==typeof h?h({x:f,y:m}):{x:f,y:m};f=g.x,m=g.y;var _=r.hasOwnProperty("x"),b=r.hasOwnProperty("y"),v=Vt,y=zt,w=window;if(c){var A=$e(i),E="clientHeight",T="clientWidth";A===fe(i)&&"static"!==xe(A=Le(i)).position&&"absolute"===a&&(E="scrollHeight",T="scrollWidth"),(s===zt||(s===Vt||s===qt)&&o===Yt)&&(y=Rt,m-=(d&&A===w&&w.visualViewport?w.visualViewport.height:A[E])-n.height,m*=l?1:-1),s!==Vt&&(s!==zt&&s!==Rt||o!==Yt)||(v=qt,f-=(d&&A===w&&w.visualViewport?w.visualViewport.width:A[T])-n.width,f*=l?1:-1)}var C,O=Object.assign({position:a},c&&He),x=!0===h?function(t,e){var i=t.x,n=t.y,s=e.devicePixelRatio||1;return{x:we(i*s)/s||0,y:we(n*s)/s||0}}({x:f,y:m},fe(i)):{x:f,y:m};return f=x.x,m=x.y,l?Object.assign({},O,((C={})[y]=b?"0":"",C[v]=_?"0":"",C.transform=(w.devicePixelRatio||1)<=1?"translate("+f+"px, "+m+"px)":"translate3d("+f+"px, "+m+"px, 0)",C)):Object.assign({},O,((e={})[y]=b?m+"px":"",e[v]=_?f+"px":"",e.transform="",e))}const Be={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(t){var e=t.state,i=t.options,n=i.gpuAcceleration,s=void 0===n||n,o=i.adaptive,r=void 0===o||o,a=i.roundOffsets,l=void 0===a||a,c={placement:be(e.placement),variation:Fe(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:s,isFixed:"fixed"===e.options.strategy};null!=e.modifiersData.popperOffsets&&(e.styles.popper=Object.assign({},e.styles.popper,We(Object.assign({},c,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:r,roundOffsets:l})))),null!=e.modifiersData.arrow&&(e.styles.arrow=Object.assign({},e.styles.arrow,We(Object.assign({},c,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})},data:{}};var ze={passive:!0};const Re={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(t){var e=t.state,i=t.instance,n=t.options,s=n.scroll,o=void 0===s||s,r=n.resize,a=void 0===r||r,l=fe(e.elements.popper),c=[].concat(e.scrollParents.reference,e.scrollParents.popper);return o&&c.forEach((function(t){t.addEventListener("scroll",i.update,ze)})),a&&l.addEventListener("resize",i.update,ze),function(){o&&c.forEach((function(t){t.removeEventListener("scroll",i.update,ze)})),a&&l.removeEventListener("resize",i.update,ze)}},data:{}};var qe={left:"right",right:"left",bottom:"top",top:"bottom"};function Ve(t){return t.replace(/left|right|bottom|top/g,(function(t){return qe[t]}))}var Ke={start:"end",end:"start"};function Qe(t){return t.replace(/start|end/g,(function(t){return Ke[t]}))}function Xe(t){var e=fe(t);return{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function Ye(t){return Te(Le(t)).left+Xe(t).scrollLeft}function Ue(t){var e=xe(t),i=e.overflow,n=e.overflowX,s=e.overflowY;return/auto|scroll|overlay|hidden/.test(i+s+n)}function Ge(t){return["html","body","#document"].indexOf(ue(t))>=0?t.ownerDocument.body:me(t)&&Ue(t)?t:Ge(Se(t))}function Je(t,e){var i;void 0===e&&(e=[]);var n=Ge(t),s=n===(null==(i=t.ownerDocument)?void 0:i.body),o=fe(n),r=s?[o].concat(o.visualViewport||[],Ue(n)?n:[]):n,a=e.concat(r);return s?a:a.concat(Je(Se(r)))}function Ze(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function ti(t,e,i){return e===Gt?Ze(function(t,e){var i=fe(t),n=Le(t),s=i.visualViewport,o=n.clientWidth,r=n.clientHeight,a=0,l=0;if(s){o=s.width,r=s.height;var c=Ee();(c||!c&&"fixed"===e)&&(a=s.offsetLeft,l=s.offsetTop)}return{width:o,height:r,x:a+Ye(t),y:l}}(t,i)):pe(e)?function(t,e){var i=Te(t,!1,"fixed"===e);return i.top=i.top+t.clientTop,i.left=i.left+t.clientLeft,i.bottom=i.top+t.clientHeight,i.right=i.left+t.clientWidth,i.width=t.clientWidth,i.height=t.clientHeight,i.x=i.left,i.y=i.top,i}(e,i):Ze(function(t){var e,i=Le(t),n=Xe(t),s=null==(e=t.ownerDocument)?void 0:e.body,o=ve(i.scrollWidth,i.clientWidth,s?s.scrollWidth:0,s?s.clientWidth:0),r=ve(i.scrollHeight,i.clientHeight,s?s.scrollHeight:0,s?s.clientHeight:0),a=-n.scrollLeft+Ye(t),l=-n.scrollTop;return"rtl"===xe(s||i).direction&&(a+=ve(i.clientWidth,s?s.clientWidth:0)-o),{width:o,height:r,x:a,y:l}}(Le(t)))}function ei(t){var e,i=t.reference,n=t.element,s=t.placement,o=s?be(s):null,r=s?Fe(s):null,a=i.x+i.width/2-n.width/2,l=i.y+i.height/2-n.height/2;switch(o){case zt:e={x:a,y:i.y-n.height};break;case Rt:e={x:a,y:i.y+i.height};break;case qt:e={x:i.x+i.width,y:l};break;case Vt:e={x:i.x-n.width,y:l};break;default:e={x:i.x,y:i.y}}var c=o?Ie(o):null;if(null!=c){var h="y"===c?"height":"width";switch(r){case Xt:e[c]=e[c]-(i[h]/2-n[h]/2);break;case Yt:e[c]=e[c]+(i[h]/2-n[h]/2)}}return e}function ii(t,e){void 0===e&&(e={});var i=e,n=i.placement,s=void 0===n?t.placement:n,o=i.strategy,r=void 0===o?t.strategy:o,a=i.boundary,l=void 0===a?Ut:a,c=i.rootBoundary,h=void 0===c?Gt:c,d=i.elementContext,u=void 0===d?Jt:d,f=i.altBoundary,p=void 0!==f&&f,m=i.padding,g=void 0===m?0:m,_=Pe("number"!=typeof g?g:je(g,Qt)),b=u===Jt?Zt:Jt,v=t.rects.popper,y=t.elements[p?b:u],w=function(t,e,i,n){var s="clippingParents"===e?function(t){var e=Je(Se(t)),i=["absolute","fixed"].indexOf(xe(t).position)>=0&&me(t)?$e(t):t;return pe(i)?e.filter((function(t){return pe(t)&&Oe(t,i)&&"body"!==ue(t)})):[]}(t):[].concat(e),o=[].concat(s,[i]),r=o[0],a=o.reduce((function(e,i){var s=ti(t,i,n);return e.top=ve(s.top,e.top),e.right=ye(s.right,e.right),e.bottom=ye(s.bottom,e.bottom),e.left=ve(s.left,e.left),e}),ti(t,r,n));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}(pe(y)?y:y.contextElement||Le(t.elements.popper),l,h,r),A=Te(t.elements.reference),E=ei({reference:A,element:v,strategy:"absolute",placement:s}),T=Ze(Object.assign({},v,E)),C=u===Jt?T:A,O={top:w.top-C.top+_.top,bottom:C.bottom-w.bottom+_.bottom,left:w.left-C.left+_.left,right:C.right-w.right+_.right},x=t.modifiersData.offset;if(u===Jt&&x){var k=x[s];Object.keys(O).forEach((function(t){var e=[qt,Rt].indexOf(t)>=0?1:-1,i=[zt,Rt].indexOf(t)>=0?"y":"x";O[t]+=k[i]*e}))}return O}function ni(t,e){void 0===e&&(e={});var i=e,n=i.placement,s=i.boundary,o=i.rootBoundary,r=i.padding,a=i.flipVariations,l=i.allowedAutoPlacements,c=void 0===l?ee:l,h=Fe(n),d=h?a?te:te.filter((function(t){return Fe(t)===h})):Qt,u=d.filter((function(t){return c.indexOf(t)>=0}));0===u.length&&(u=d);var f=u.reduce((function(e,i){return e[i]=ii(t,{placement:i,boundary:s,rootBoundary:o,padding:r})[be(i)],e}),{});return Object.keys(f).sort((function(t,e){return f[t]-f[e]}))}const si={name:"flip",enabled:!0,phase:"main",fn:function(t){var e=t.state,i=t.options,n=t.name;if(!e.modifiersData[n]._skip){for(var s=i.mainAxis,o=void 0===s||s,r=i.altAxis,a=void 0===r||r,l=i.fallbackPlacements,c=i.padding,h=i.boundary,d=i.rootBoundary,u=i.altBoundary,f=i.flipVariations,p=void 0===f||f,m=i.allowedAutoPlacements,g=e.options.placement,_=be(g),b=l||(_!==g&&p?function(t){if(be(t)===Kt)return[];var e=Ve(t);return[Qe(t),e,Qe(e)]}(g):[Ve(g)]),v=[g].concat(b).reduce((function(t,i){return t.concat(be(i)===Kt?ni(e,{placement:i,boundary:h,rootBoundary:d,padding:c,flipVariations:p,allowedAutoPlacements:m}):i)}),[]),y=e.rects.reference,w=e.rects.popper,A=new Map,E=!0,T=v[0],C=0;C<v.length;C++){var O=v[C],x=be(O),k=Fe(O)===Xt,L=[zt,Rt].indexOf(x)>=0,S=L?"width":"height",D=ii(e,{placement:O,boundary:h,rootBoundary:d,altBoundary:u,padding:c}),$=L?k?qt:Vt:k?Rt:zt;y[S]>w[S]&&($=Ve($));var I=Ve($),N=[];if(o&&N.push(D[x]<=0),a&&N.push(D[$]<=0,D[I]<=0),N.every((function(t){return t}))){T=O,E=!1;break}A.set(O,N)}if(E)for(var P=function(t){var e=v.find((function(e){var i=A.get(e);if(i)return i.slice(0,t).every((function(t){return t}))}));if(e)return T=e,"break"},j=p?3:1;j>0&&"break"!==P(j);j--);e.placement!==T&&(e.modifiersData[n]._skip=!0,e.placement=T,e.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function oi(t,e,i){return void 0===i&&(i={x:0,y:0}),{top:t.top-e.height-i.y,right:t.right-e.width+i.x,bottom:t.bottom-e.height+i.y,left:t.left-e.width-i.x}}function ri(t){return[zt,qt,Rt,Vt].some((function(e){return t[e]>=0}))}const ai={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(t){var e=t.state,i=t.name,n=e.rects.reference,s=e.rects.popper,o=e.modifiersData.preventOverflow,r=ii(e,{elementContext:"reference"}),a=ii(e,{altBoundary:!0}),l=oi(r,n),c=oi(a,s,o),h=ri(l),d=ri(c);e.modifiersData[i]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:h,hasPopperEscaped:d},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":h,"data-popper-escaped":d})}},li={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(t){var e=t.state,i=t.options,n=t.name,s=i.offset,o=void 0===s?[0,0]:s,r=ee.reduce((function(t,i){return t[i]=function(t,e,i){var n=be(t),s=[Vt,zt].indexOf(n)>=0?-1:1,o="function"==typeof i?i(Object.assign({},e,{placement:t})):i,r=o[0],a=o[1];return r=r||0,a=(a||0)*s,[Vt,qt].indexOf(n)>=0?{x:a,y:r}:{x:r,y:a}}(i,e.rects,o),t}),{}),a=r[e.placement],l=a.x,c=a.y;null!=e.modifiersData.popperOffsets&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=c),e.modifiersData[n]=r}},ci={name:"popperOffsets",enabled:!0,phase:"read",fn:function(t){var e=t.state,i=t.name;e.modifiersData[i]=ei({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})},data:{}},hi={name:"preventOverflow",enabled:!0,phase:"main",fn:function(t){var e=t.state,i=t.options,n=t.name,s=i.mainAxis,o=void 0===s||s,r=i.altAxis,a=void 0!==r&&r,l=i.boundary,c=i.rootBoundary,h=i.altBoundary,d=i.padding,u=i.tether,f=void 0===u||u,p=i.tetherOffset,m=void 0===p?0:p,g=ii(e,{boundary:l,rootBoundary:c,padding:d,altBoundary:h}),_=be(e.placement),b=Fe(e.placement),v=!b,y=Ie(_),w="x"===y?"y":"x",A=e.modifiersData.popperOffsets,E=e.rects.reference,T=e.rects.popper,C="function"==typeof m?m(Object.assign({},e.rects,{placement:e.placement})):m,O="number"==typeof C?{mainAxis:C,altAxis:C}:Object.assign({mainAxis:0,altAxis:0},C),x=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,k={x:0,y:0};if(A){if(o){var L,S="y"===y?zt:Vt,D="y"===y?Rt:qt,$="y"===y?"height":"width",I=A[y],N=I+g[S],P=I-g[D],j=f?-T[$]/2:0,M=b===Xt?E[$]:T[$],F=b===Xt?-T[$]:-E[$],H=e.elements.arrow,W=f&&H?Ce(H):{width:0,height:0},B=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},z=B[S],R=B[D],q=Ne(0,E[$],W[$]),V=v?E[$]/2-j-q-z-O.mainAxis:M-q-z-O.mainAxis,K=v?-E[$]/2+j+q+R+O.mainAxis:F+q+R+O.mainAxis,Q=e.elements.arrow&&$e(e.elements.arrow),X=Q?"y"===y?Q.clientTop||0:Q.clientLeft||0:0,Y=null!=(L=null==x?void 0:x[y])?L:0,U=I+K-Y,G=Ne(f?ye(N,I+V-Y-X):N,I,f?ve(P,U):P);A[y]=G,k[y]=G-I}if(a){var J,Z="x"===y?zt:Vt,tt="x"===y?Rt:qt,et=A[w],it="y"===w?"height":"width",nt=et+g[Z],st=et-g[tt],ot=-1!==[zt,Vt].indexOf(_),rt=null!=(J=null==x?void 0:x[w])?J:0,at=ot?nt:et-E[it]-T[it]-rt+O.altAxis,lt=ot?et+E[it]+T[it]-rt-O.altAxis:st,ct=f&&ot?function(t,e,i){var n=Ne(t,e,i);return n>i?i:n}(at,et,lt):Ne(f?at:nt,et,f?lt:st);A[w]=ct,k[w]=ct-et}e.modifiersData[n]=k}},requiresIfExists:["offset"]};function di(t,e,i){void 0===i&&(i=!1);var n,s,o=me(e),r=me(e)&&function(t){var e=t.getBoundingClientRect(),i=we(e.width)/t.offsetWidth||1,n=we(e.height)/t.offsetHeight||1;return 1!==i||1!==n}(e),a=Le(e),l=Te(t,r,i),c={scrollLeft:0,scrollTop:0},h={x:0,y:0};return(o||!o&&!i)&&(("body"!==ue(e)||Ue(a))&&(c=(n=e)!==fe(n)&&me(n)?{scrollLeft:(s=n).scrollLeft,scrollTop:s.scrollTop}:Xe(n)),me(e)?((h=Te(e,!0)).x+=e.clientLeft,h.y+=e.clientTop):a&&(h.x=Ye(a))),{x:l.left+c.scrollLeft-h.x,y:l.top+c.scrollTop-h.y,width:l.width,height:l.height}}function ui(t){var e=new Map,i=new Set,n=[];function s(t){i.add(t.name),[].concat(t.requires||[],t.requiresIfExists||[]).forEach((function(t){if(!i.has(t)){var n=e.get(t);n&&s(n)}})),n.push(t)}return t.forEach((function(t){e.set(t.name,t)})),t.forEach((function(t){i.has(t.name)||s(t)})),n}var fi={placement:"bottom",modifiers:[],strategy:"absolute"};function pi(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return!e.some((function(t){return!(t&&"function"==typeof t.getBoundingClientRect)}))}function mi(t){void 0===t&&(t={});var e=t,i=e.defaultModifiers,n=void 0===i?[]:i,s=e.defaultOptions,o=void 0===s?fi:s;return function(t,e,i){void 0===i&&(i=o);var s,r,a={placement:"bottom",orderedModifiers:[],options:Object.assign({},fi,o),modifiersData:{},elements:{reference:t,popper:e},attributes:{},styles:{}},l=[],c=!1,h={state:a,setOptions:function(i){var s="function"==typeof i?i(a.options):i;d(),a.options=Object.assign({},o,a.options,s),a.scrollParents={reference:pe(t)?Je(t):t.contextElement?Je(t.contextElement):[],popper:Je(e)};var r,c,u=function(t){var e=ui(t);return de.reduce((function(t,i){return t.concat(e.filter((function(t){return t.phase===i})))}),[])}((r=[].concat(n,a.options.modifiers),c=r.reduce((function(t,e){var i=t[e.name];return t[e.name]=i?Object.assign({},i,e,{options:Object.assign({},i.options,e.options),data:Object.assign({},i.data,e.data)}):e,t}),{}),Object.keys(c).map((function(t){return c[t]}))));return a.orderedModifiers=u.filter((function(t){return t.enabled})),a.orderedModifiers.forEach((function(t){var e=t.name,i=t.options,n=void 0===i?{}:i,s=t.effect;if("function"==typeof s){var o=s({state:a,name:e,instance:h,options:n});l.push(o||function(){})}})),h.update()},forceUpdate:function(){if(!c){var t=a.elements,e=t.reference,i=t.popper;if(pi(e,i)){a.rects={reference:di(e,$e(i),"fixed"===a.options.strategy),popper:Ce(i)},a.reset=!1,a.placement=a.options.placement,a.orderedModifiers.forEach((function(t){return a.modifiersData[t.name]=Object.assign({},t.data)}));for(var n=0;n<a.orderedModifiers.length;n++)if(!0!==a.reset){var s=a.orderedModifiers[n],o=s.fn,r=s.options,l=void 0===r?{}:r,d=s.name;"function"==typeof o&&(a=o({state:a,options:l,name:d,instance:h})||a)}else a.reset=!1,n=-1}}},update:(s=function(){return new Promise((function(t){h.forceUpdate(),t(a)}))},function(){return r||(r=new Promise((function(t){Promise.resolve().then((function(){r=void 0,t(s())}))}))),r}),destroy:function(){d(),c=!0}};if(!pi(t,e))return h;function d(){l.forEach((function(t){return t()})),l=[]}return h.setOptions(i).then((function(t){!c&&i.onFirstUpdate&&i.onFirstUpdate(t)})),h}}var gi=mi(),_i=mi({defaultModifiers:[Re,ci,Be,_e]}),bi=mi({defaultModifiers:[Re,ci,Be,_e,li,si,hi,Me,ai]});const vi=Object.freeze(Object.defineProperty({__proto__:null,afterMain:ae,afterRead:se,afterWrite:he,applyStyles:_e,arrow:Me,auto:Kt,basePlacements:Qt,beforeMain:oe,beforeRead:ie,beforeWrite:le,bottom:Rt,clippingParents:Ut,computeStyles:Be,createPopper:bi,createPopperBase:gi,createPopperLite:_i,detectOverflow:ii,end:Yt,eventListeners:Re,flip:si,hide:ai,left:Vt,main:re,modifierPhases:de,offset:li,placements:ee,popper:Jt,popperGenerator:mi,popperOffsets:ci,preventOverflow:hi,read:ne,reference:Zt,right:qt,start:Xt,top:zt,variationPlacements:te,viewport:Gt,write:ce},Symbol.toStringTag,{value:"Module"})),yi="dropdown",wi=".bs.dropdown",Ai=".data-api",Ei="ArrowUp",Ti="ArrowDown",Ci=`hide${wi}`,Oi=`hidden${wi}`,xi=`show${wi}`,ki=`shown${wi}`,Li=`click${wi}${Ai}`,Si=`keydown${wi}${Ai}`,Di=`keyup${wi}${Ai}`,$i="show",Ii='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',Ni=`${Ii}.${$i}`,Pi=".dropdown-menu",ji=p()?"top-end":"top-start",Mi=p()?"top-start":"top-end",Fi=p()?"bottom-end":"bottom-start",Hi=p()?"bottom-start":"bottom-end",Wi=p()?"left-start":"right-start",Bi=p()?"right-start":"left-start",zi={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},Ri={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class qi extends W{constructor(t,e){super(t,e),this._popper=null,this._parent=this._element.parentNode,this._menu=z.next(this._element,Pi)[0]||z.prev(this._element,Pi)[0]||z.findOne(Pi,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return zi}static get DefaultType(){return Ri}static get NAME(){return yi}toggle(){return this._isShown()?this.hide():this.show()}show(){if(l(this._element)||this._isShown())return;const t={relatedTarget:this._element};if(!N.trigger(this._element,xi,t).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(".navbar-nav"))for(const t of[].concat(...document.body.children))N.on(t,"mouseover",h);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add($i),this._element.classList.add($i),N.trigger(this._element,ki,t)}}hide(){if(l(this._element)||!this._isShown())return;const t={relatedTarget:this._element};this._completeHide(t)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(t){if(!N.trigger(this._element,Ci,t).defaultPrevented){if("ontouchstart"in document.documentElement)for(const t of[].concat(...document.body.children))N.off(t,"mouseover",h);this._popper&&this._popper.destroy(),this._menu.classList.remove($i),this._element.classList.remove($i),this._element.setAttribute("aria-expanded","false"),F.removeDataAttribute(this._menu,"popper"),N.trigger(this._element,Oi,t)}}_getConfig(t){if("object"==typeof(t=super._getConfig(t)).reference&&!o(t.reference)&&"function"!=typeof t.reference.getBoundingClientRect)throw new TypeError(`${yi.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return t}_createPopper(){if(void 0===vi)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let t=this._element;"parent"===this._config.reference?t=this._parent:o(this._config.reference)?t=r(this._config.reference):"object"==typeof this._config.reference&&(t=this._config.reference);const e=this._getPopperConfig();this._popper=bi(t,this._menu,e)}_isShown(){return this._menu.classList.contains($i)}_getPlacement(){const t=this._parent;if(t.classList.contains("dropend"))return Wi;if(t.classList.contains("dropstart"))return Bi;if(t.classList.contains("dropup-center"))return"top";if(t.classList.contains("dropdown-center"))return"bottom";const e="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return t.classList.contains("dropup")?e?Mi:ji:e?Hi:Fi}_detectNavbar(){return null!==this._element.closest(".navbar")}_getOffset(){const{offset:t}=this._config;return"string"==typeof t?t.split(",").map((t=>Number.parseInt(t,10))):"function"==typeof t?e=>t(e,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||"static"===this._config.display)&&(F.setDataAttribute(this._menu,"popper","static"),t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,...g(this._config.popperConfig,[t])}}_selectMenuItem({key:t,target:e}){const i=z.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter((t=>a(t)));i.length&&b(i,e,t===Ti,!i.includes(e)).focus()}static jQueryInterface(t){return this.each((function(){const e=qi.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}static clearMenus(t){if(2===t.button||"keyup"===t.type&&"Tab"!==t.key)return;const e=z.find(Ni);for(const i of e){const e=qi.getInstance(i);if(!e||!1===e._config.autoClose)continue;const n=t.composedPath(),s=n.includes(e._menu);if(n.includes(e._element)||"inside"===e._config.autoClose&&!s||"outside"===e._config.autoClose&&s)continue;if(e._menu.contains(t.target)&&("keyup"===t.type&&"Tab"===t.key||/input|select|option|textarea|form/i.test(t.target.tagName)))continue;const o={relatedTarget:e._element};"click"===t.type&&(o.clickEvent=t),e._completeHide(o)}}static dataApiKeydownHandler(t){const e=/input|textarea/i.test(t.target.tagName),i="Escape"===t.key,n=[Ei,Ti].includes(t.key);if(!n&&!i)return;if(e&&!i)return;t.preventDefault();const s=this.matches(Ii)?this:z.prev(this,Ii)[0]||z.next(this,Ii)[0]||z.findOne(Ii,t.delegateTarget.parentNode),o=qi.getOrCreateInstance(s);if(n)return t.stopPropagation(),o.show(),void o._selectMenuItem(t);o._isShown()&&(t.stopPropagation(),o.hide(),s.focus())}}N.on(document,Si,Ii,qi.dataApiKeydownHandler),N.on(document,Si,Pi,qi.dataApiKeydownHandler),N.on(document,Li,qi.clearMenus),N.on(document,Di,qi.clearMenus),N.on(document,Li,Ii,(function(t){t.preventDefault(),qi.getOrCreateInstance(this).toggle()})),m(qi);const Vi="backdrop",Ki="show",Qi=`mousedown.bs.${Vi}`,Xi={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},Yi={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class Ui extends H{constructor(t){super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null}static get Default(){return Xi}static get DefaultType(){return Yi}static get NAME(){return Vi}show(t){if(!this._config.isVisible)return void g(t);this._append();const e=this._getElement();this._config.isAnimated&&d(e),e.classList.add(Ki),this._emulateAnimation((()=>{g(t)}))}hide(t){this._config.isVisible?(this._getElement().classList.remove(Ki),this._emulateAnimation((()=>{this.dispose(),g(t)}))):g(t)}dispose(){this._isAppended&&(N.off(this._element,Qi),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add("fade"),this._element=t}return this._element}_configAfterMerge(t){return t.rootElement=r(t.rootElement),t}_append(){if(this._isAppended)return;const t=this._getElement();this._config.rootElement.append(t),N.on(t,Qi,(()=>{g(this._config.clickCallback)})),this._isAppended=!0}_emulateAnimation(t){_(t,this._getElement(),this._config.isAnimated)}}const Gi=".bs.focustrap",Ji=`focusin${Gi}`,Zi=`keydown.tab${Gi}`,tn="backward",en={autofocus:!0,trapElement:null},nn={autofocus:"boolean",trapElement:"element"};class sn extends H{constructor(t){super(),this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return en}static get DefaultType(){return nn}static get NAME(){return"focustrap"}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),N.off(document,Gi),N.on(document,Ji,(t=>this._handleFocusin(t))),N.on(document,Zi,(t=>this._handleKeydown(t))),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,N.off(document,Gi))}_handleFocusin(t){const{trapElement:e}=this._config;if(t.target===document||t.target===e||e.contains(t.target))return;const i=z.focusableChildren(e);0===i.length?e.focus():this._lastTabNavDirection===tn?i[i.length-1].focus():i[0].focus()}_handleKeydown(t){"Tab"===t.key&&(this._lastTabNavDirection=t.shiftKey?tn:"forward")}}const on=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",rn=".sticky-top",an="padding-right",ln="margin-right";class cn{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,an,(e=>e+t)),this._setElementAttributes(on,an,(e=>e+t)),this._setElementAttributes(rn,ln,(e=>e-t))}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,an),this._resetElementAttributes(on,an),this._resetElementAttributes(rn,ln)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,i){const n=this.getWidth();this._applyManipulationCallback(t,(t=>{if(t!==this._element&&window.innerWidth>t.clientWidth+n)return;this._saveInitialAttribute(t,e);const s=window.getComputedStyle(t).getPropertyValue(e);t.style.setProperty(e,`${i(Number.parseFloat(s))}px`)}))}_saveInitialAttribute(t,e){const i=t.style.getPropertyValue(e);i&&F.setDataAttribute(t,e,i)}_resetElementAttributes(t,e){this._applyManipulationCallback(t,(t=>{const i=F.getDataAttribute(t,e);null!==i?(F.removeDataAttribute(t,e),t.style.setProperty(e,i)):t.style.removeProperty(e)}))}_applyManipulationCallback(t,e){if(o(t))e(t);else for(const i of z.find(t,this._element))e(i)}}const hn=".bs.modal",dn=`hide${hn}`,un=`hidePrevented${hn}`,fn=`hidden${hn}`,pn=`show${hn}`,mn=`shown${hn}`,gn=`resize${hn}`,_n=`click.dismiss${hn}`,bn=`mousedown.dismiss${hn}`,vn=`keydown.dismiss${hn}`,yn=`click${hn}.data-api`,wn="modal-open",An="show",En="modal-static",Tn={backdrop:!0,focus:!0,keyboard:!0},Cn={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class On extends W{constructor(t,e){super(t,e),this._dialog=z.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new cn,this._addEventListeners()}static get Default(){return Tn}static get DefaultType(){return Cn}static get NAME(){return"modal"}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||this._isTransitioning||N.trigger(this._element,pn,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(wn),this._adjustDialog(),this._backdrop.show((()=>this._showElement(t))))}hide(){this._isShown&&!this._isTransitioning&&(N.trigger(this._element,dn).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(An),this._queueCallback((()=>this._hideModal()),this._element,this._isAnimated())))}dispose(){N.off(window,hn),N.off(this._dialog,hn),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Ui({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new sn({trapElement:this._element})}_showElement(t){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const e=z.findOne(".modal-body",this._dialog);e&&(e.scrollTop=0),d(this._element),this._element.classList.add(An),this._queueCallback((()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,N.trigger(this._element,mn,{relatedTarget:t})}),this._dialog,this._isAnimated())}_addEventListeners(){N.on(this._element,vn,(t=>{"Escape"===t.key&&(this._config.keyboard?this.hide():this._triggerBackdropTransition())})),N.on(window,gn,(()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()})),N.on(this._element,bn,(t=>{N.one(this._element,_n,(e=>{this._element===t.target&&this._element===e.target&&("static"!==this._config.backdrop?this._config.backdrop&&this.hide():this._triggerBackdropTransition())}))}))}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide((()=>{document.body.classList.remove(wn),this._resetAdjustments(),this._scrollBar.reset(),N.trigger(this._element,fn)}))}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if(N.trigger(this._element,un).defaultPrevented)return;const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._element.style.overflowY;"hidden"===e||this._element.classList.contains(En)||(t||(this._element.style.overflowY="hidden"),this._element.classList.add(En),this._queueCallback((()=>{this._element.classList.remove(En),this._queueCallback((()=>{this._element.style.overflowY=e}),this._dialog)}),this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._scrollBar.getWidth(),i=e>0;if(i&&!t){const t=p()?"paddingLeft":"paddingRight";this._element.style[t]=`${e}px`}if(!i&&t){const t=p()?"paddingRight":"paddingLeft";this._element.style[t]=`${e}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,e){return this.each((function(){const i=On.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===i[t])throw new TypeError(`No method named "${t}"`);i[t](e)}}))}}N.on(document,yn,'[data-bs-toggle="modal"]',(function(t){const e=z.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&t.preventDefault(),N.one(e,pn,(t=>{t.defaultPrevented||N.one(e,fn,(()=>{a(this)&&this.focus()}))}));const i=z.findOne(".modal.show");i&&On.getInstance(i).hide(),On.getOrCreateInstance(e).toggle(this)})),R(On),m(On);const xn=".bs.offcanvas",kn=".data-api",Ln=`load${xn}${kn}`,Sn="show",Dn="showing",$n="hiding",In=".offcanvas.show",Nn=`show${xn}`,Pn=`shown${xn}`,jn=`hide${xn}`,Mn=`hidePrevented${xn}`,Fn=`hidden${xn}`,Hn=`resize${xn}`,Wn=`click${xn}${kn}`,Bn=`keydown.dismiss${xn}`,zn={backdrop:!0,keyboard:!0,scroll:!1},Rn={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class qn extends W{constructor(t,e){super(t,e),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return zn}static get DefaultType(){return Rn}static get NAME(){return"offcanvas"}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||N.trigger(this._element,Nn,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._backdrop.show(),this._config.scroll||(new cn).hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Dn),this._queueCallback((()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add(Sn),this._element.classList.remove(Dn),N.trigger(this._element,Pn,{relatedTarget:t})}),this._element,!0))}hide(){this._isShown&&(N.trigger(this._element,jn).defaultPrevented||(this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add($n),this._backdrop.hide(),this._queueCallback((()=>{this._element.classList.remove(Sn,$n),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||(new cn).reset(),N.trigger(this._element,Fn)}),this._element,!0)))}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const t=Boolean(this._config.backdrop);return new Ui({className:"offcanvas-backdrop",isVisible:t,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:t?()=>{"static"!==this._config.backdrop?this.hide():N.trigger(this._element,Mn)}:null})}_initializeFocusTrap(){return new sn({trapElement:this._element})}_addEventListeners(){N.on(this._element,Bn,(t=>{"Escape"===t.key&&(this._config.keyboard?this.hide():N.trigger(this._element,Mn))}))}static jQueryInterface(t){return this.each((function(){const e=qn.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}N.on(document,Wn,'[data-bs-toggle="offcanvas"]',(function(t){const e=z.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&t.preventDefault(),l(this))return;N.one(e,Fn,(()=>{a(this)&&this.focus()}));const i=z.findOne(In);i&&i!==e&&qn.getInstance(i).hide(),qn.getOrCreateInstance(e).toggle(this)})),N.on(window,Ln,(()=>{for(const t of z.find(In))qn.getOrCreateInstance(t).show()})),N.on(window,Hn,(()=>{for(const t of z.find("[aria-modal][class*=show][class*=offcanvas-]"))"fixed"!==getComputedStyle(t).position&&qn.getOrCreateInstance(t).hide()})),R(qn),m(qn);const Vn={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Kn=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),Qn=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,Xn=(t,e)=>{const i=t.nodeName.toLowerCase();return e.includes(i)?!Kn.has(i)||Boolean(Qn.test(t.nodeValue)):e.filter((t=>t instanceof RegExp)).some((t=>t.test(i)))},Yn={allowList:Vn,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},Un={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},Gn={entry:"(string|element|function|null)",selector:"(string|element)"};class Jn extends H{constructor(t){super(),this._config=this._getConfig(t)}static get Default(){return Yn}static get DefaultType(){return Un}static get NAME(){return"TemplateFactory"}getContent(){return Object.values(this._config.content).map((t=>this._resolvePossibleFunction(t))).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(t){return this._checkContent(t),this._config.content={...this._config.content,...t},this}toHtml(){const t=document.createElement("div");t.innerHTML=this._maybeSanitize(this._config.template);for(const[e,i]of Object.entries(this._config.content))this._setContent(t,i,e);const e=t.children[0],i=this._resolvePossibleFunction(this._config.extraClass);return i&&e.classList.add(...i.split(" ")),e}_typeCheckConfig(t){super._typeCheckConfig(t),this._checkContent(t.content)}_checkContent(t){for(const[e,i]of Object.entries(t))super._typeCheckConfig({selector:e,entry:i},Gn)}_setContent(t,e,i){const n=z.findOne(i,t);n&&((e=this._resolvePossibleFunction(e))?o(e)?this._putElementInTemplate(r(e),n):this._config.html?n.innerHTML=this._maybeSanitize(e):n.textContent=e:n.remove())}_maybeSanitize(t){return this._config.sanitize?function(t,e,i){if(!t.length)return t;if(i&&"function"==typeof i)return i(t);const n=(new window.DOMParser).parseFromString(t,"text/html"),s=[].concat(...n.body.querySelectorAll("*"));for(const t of s){const i=t.nodeName.toLowerCase();if(!Object.keys(e).includes(i)){t.remove();continue}const n=[].concat(...t.attributes),s=[].concat(e["*"]||[],e[i]||[]);for(const e of n)Xn(e,s)||t.removeAttribute(e.nodeName)}return n.body.innerHTML}(t,this._config.allowList,this._config.sanitizeFn):t}_resolvePossibleFunction(t){return g(t,[this])}_putElementInTemplate(t,e){if(this._config.html)return e.innerHTML="",void e.append(t);e.textContent=t.textContent}}const Zn=new Set(["sanitize","allowList","sanitizeFn"]),ts="fade",es="show",is=".modal",ns="hide.bs.modal",ss="hover",os="focus",rs={AUTO:"auto",TOP:"top",RIGHT:p()?"left":"right",BOTTOM:"bottom",LEFT:p()?"right":"left"},as={allowList:Vn,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},ls={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class cs extends W{constructor(t,e){if(void 0===vi)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(t,e),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return as}static get DefaultType(){return ls}static get NAME(){return"tooltip"}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){this._isEnabled&&(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()?this._leave():this._enter())}dispose(){clearTimeout(this._timeout),N.off(this._element.closest(is),ns,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if("none"===this._element.style.display)throw new Error("Please use show on visible elements");if(!this._isWithContent()||!this._isEnabled)return;const t=N.trigger(this._element,this.constructor.eventName("show")),e=(c(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(t.defaultPrevented||!e)return;this._disposePopper();const i=this._getTipElement();this._element.setAttribute("aria-describedby",i.getAttribute("id"));const{container:n}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(n.append(i),N.trigger(this._element,this.constructor.eventName("inserted"))),this._popper=this._createPopper(i),i.classList.add(es),"ontouchstart"in document.documentElement)for(const t of[].concat(...document.body.children))N.on(t,"mouseover",h);this._queueCallback((()=>{N.trigger(this._element,this.constructor.eventName("shown")),!1===this._isHovered&&this._leave(),this._isHovered=!1}),this.tip,this._isAnimated())}hide(){if(this._isShown()&&!N.trigger(this._element,this.constructor.eventName("hide")).defaultPrevented){if(this._getTipElement().classList.remove(es),"ontouchstart"in document.documentElement)for(const t of[].concat(...document.body.children))N.off(t,"mouseover",h);this._activeTrigger.click=!1,this._activeTrigger[os]=!1,this._activeTrigger[ss]=!1,this._isHovered=null,this._queueCallback((()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),N.trigger(this._element,this.constructor.eventName("hidden")))}),this.tip,this._isAnimated())}}update(){this._popper&&this._popper.update()}_isWithContent(){return Boolean(this._getTitle())}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(t){const e=this._getTemplateFactory(t).toHtml();if(!e)return null;e.classList.remove(ts,es),e.classList.add(`bs-${this.constructor.NAME}-auto`);const i=(t=>{do{t+=Math.floor(1e6*Math.random())}while(document.getElementById(t));return t})(this.constructor.NAME).toString();return e.setAttribute("id",i),this._isAnimated()&&e.classList.add(ts),e}setContent(t){this._newContent=t,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(t){return this._templateFactory?this._templateFactory.changeContent(t):this._templateFactory=new Jn({...this._config,content:t,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{".tooltip-inner":this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(t){return this.constructor.getOrCreateInstance(t.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(ts)}_isShown(){return this.tip&&this.tip.classList.contains(es)}_createPopper(t){const e=g(this._config.placement,[this,t,this._element]),i=rs[e.toUpperCase()];return bi(this._element,t,this._getPopperConfig(i))}_getOffset(){const{offset:t}=this._config;return"string"==typeof t?t.split(",").map((t=>Number.parseInt(t,10))):"function"==typeof t?e=>t(e,this._element):t}_resolvePossibleFunction(t){return g(t,[this._element])}_getPopperConfig(t){const e={placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:t=>{this._getTipElement().setAttribute("data-popper-placement",t.state.placement)}}]};return{...e,...g(this._config.popperConfig,[e])}}_setListeners(){const t=this._config.trigger.split(" ");for(const e of t)if("click"===e)N.on(this._element,this.constructor.eventName("click"),this._config.selector,(t=>{this._initializeOnDelegatedTarget(t).toggle()}));else if("manual"!==e){const t=e===ss?this.constructor.eventName("mouseenter"):this.constructor.eventName("focusin"),i=e===ss?this.constructor.eventName("mouseleave"):this.constructor.eventName("focusout");N.on(this._element,t,this._config.selector,(t=>{const e=this._initializeOnDelegatedTarget(t);e._activeTrigger["focusin"===t.type?os:ss]=!0,e._enter()})),N.on(this._element,i,this._config.selector,(t=>{const e=this._initializeOnDelegatedTarget(t);e._activeTrigger["focusout"===t.type?os:ss]=e._element.contains(t.relatedTarget),e._leave()}))}this._hideModalHandler=()=>{this._element&&this.hide()},N.on(this._element.closest(is),ns,this._hideModalHandler)}_fixTitle(){const t=this._element.getAttribute("title");t&&(this._element.getAttribute("aria-label")||this._element.textContent.trim()||this._element.setAttribute("aria-label",t),this._element.setAttribute("data-bs-original-title",t),this._element.removeAttribute("title"))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout((()=>{this._isHovered&&this.show()}),this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout((()=>{this._isHovered||this.hide()}),this._config.delay.hide))}_setTimeout(t,e){clearTimeout(this._timeout),this._timeout=setTimeout(t,e)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(t){const e=F.getDataAttributes(this._element);for(const t of Object.keys(e))Zn.has(t)&&delete e[t];return t={...e,..."object"==typeof t&&t?t:{}},t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t.container=!1===t.container?document.body:r(t.container),"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),t}_getDelegateConfig(){const t={};for(const[e,i]of Object.entries(this._config))this.constructor.Default[e]!==i&&(t[e]=i);return t.selector=!1,t.trigger="manual",t}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(t){return this.each((function(){const e=cs.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}m(cs);const hs={...cs.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},ds={...cs.DefaultType,content:"(null|string|element|function)"};class us extends cs{static get Default(){return hs}static get DefaultType(){return ds}static get NAME(){return"popover"}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{".popover-header":this._getTitle(),".popover-body":this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(t){return this.each((function(){const e=us.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}m(us);const fs=".bs.scrollspy",ps=`activate${fs}`,ms=`click${fs}`,gs=`load${fs}.data-api`,_s="active",bs="[href]",vs=".nav-link",ys=`${vs}, .nav-item > ${vs}, .list-group-item`,ws={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},As={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class Es extends W{constructor(t,e){super(t,e),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement="visible"===getComputedStyle(this._element).overflowY?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return ws}static get DefaultType(){return As}static get NAME(){return"scrollspy"}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const t of this._observableSections.values())this._observer.observe(t)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(t){return t.target=r(t.target)||document.body,t.rootMargin=t.offset?`${t.offset}px 0px -30%`:t.rootMargin,"string"==typeof t.threshold&&(t.threshold=t.threshold.split(",").map((t=>Number.parseFloat(t)))),t}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(N.off(this._config.target,ms),N.on(this._config.target,ms,bs,(t=>{const e=this._observableSections.get(t.target.hash);if(e){t.preventDefault();const i=this._rootElement||window,n=e.offsetTop-this._element.offsetTop;if(i.scrollTo)return void i.scrollTo({top:n,behavior:"smooth"});i.scrollTop=n}})))}_getNewObserver(){const t={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver((t=>this._observerCallback(t)),t)}_observerCallback(t){const e=t=>this._targetLinks.get(`#${t.target.id}`),i=t=>{this._previousScrollData.visibleEntryTop=t.target.offsetTop,this._process(e(t))},n=(this._rootElement||document.documentElement).scrollTop,s=n>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=n;for(const o of t){if(!o.isIntersecting){this._activeTarget=null,this._clearActiveClass(e(o));continue}const t=o.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(s&&t){if(i(o),!n)return}else s||t||i(o)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const t=z.find(bs,this._config.target);for(const e of t){if(!e.hash||l(e))continue;const t=z.findOne(decodeURI(e.hash),this._element);a(t)&&(this._targetLinks.set(decodeURI(e.hash),e),this._observableSections.set(e.hash,t))}}_process(t){this._activeTarget!==t&&(this._clearActiveClass(this._config.target),this._activeTarget=t,t.classList.add(_s),this._activateParents(t),N.trigger(this._element,ps,{relatedTarget:t}))}_activateParents(t){if(t.classList.contains("dropdown-item"))z.findOne(".dropdown-toggle",t.closest(".dropdown")).classList.add(_s);else for(const e of z.parents(t,".nav, .list-group"))for(const t of z.prev(e,ys))t.classList.add(_s)}_clearActiveClass(t){t.classList.remove(_s);const e=z.find(`${bs}.${_s}`,t);for(const t of e)t.classList.remove(_s)}static jQueryInterface(t){return this.each((function(){const e=Es.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t]()}}))}}N.on(window,gs,(()=>{for(const t of z.find('[data-bs-spy="scroll"]'))Es.getOrCreateInstance(t)})),m(Es);const Ts=".bs.tab",Cs=`hide${Ts}`,Os=`hidden${Ts}`,xs=`show${Ts}`,ks=`shown${Ts}`,Ls=`click${Ts}`,Ss=`keydown${Ts}`,Ds=`load${Ts}`,$s="ArrowLeft",Is="ArrowRight",Ns="ArrowUp",Ps="ArrowDown",js="Home",Ms="End",Fs="active",Hs="fade",Ws="show",Bs=".dropdown-toggle",zs=`:not(${Bs})`,Rs='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',qs=`.nav-link${zs}, .list-group-item${zs}, [role="tab"]${zs}, ${Rs}`,Vs=`.${Fs}[data-bs-toggle="tab"], .${Fs}[data-bs-toggle="pill"], .${Fs}[data-bs-toggle="list"]`;class Ks extends W{constructor(t){super(t),this._parent=this._element.closest('.list-group, .nav, [role="tablist"]'),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),N.on(this._element,Ss,(t=>this._keydown(t))))}static get NAME(){return"tab"}show(){const t=this._element;if(this._elemIsActive(t))return;const e=this._getActiveElem(),i=e?N.trigger(e,Cs,{relatedTarget:t}):null;N.trigger(t,xs,{relatedTarget:e}).defaultPrevented||i&&i.defaultPrevented||(this._deactivate(e,t),this._activate(t,e))}_activate(t,e){t&&(t.classList.add(Fs),this._activate(z.getElementFromSelector(t)),this._queueCallback((()=>{"tab"===t.getAttribute("role")?(t.removeAttribute("tabindex"),t.setAttribute("aria-selected",!0),this._toggleDropDown(t,!0),N.trigger(t,ks,{relatedTarget:e})):t.classList.add(Ws)}),t,t.classList.contains(Hs)))}_deactivate(t,e){t&&(t.classList.remove(Fs),t.blur(),this._deactivate(z.getElementFromSelector(t)),this._queueCallback((()=>{"tab"===t.getAttribute("role")?(t.setAttribute("aria-selected",!1),t.setAttribute("tabindex","-1"),this._toggleDropDown(t,!1),N.trigger(t,Os,{relatedTarget:e})):t.classList.remove(Ws)}),t,t.classList.contains(Hs)))}_keydown(t){if(![$s,Is,Ns,Ps,js,Ms].includes(t.key))return;t.stopPropagation(),t.preventDefault();const e=this._getChildren().filter((t=>!l(t)));let i;if([js,Ms].includes(t.key))i=e[t.key===js?0:e.length-1];else{const n=[Is,Ps].includes(t.key);i=b(e,t.target,n,!0)}i&&(i.focus({preventScroll:!0}),Ks.getOrCreateInstance(i).show())}_getChildren(){return z.find(qs,this._parent)}_getActiveElem(){return this._getChildren().find((t=>this._elemIsActive(t)))||null}_setInitialAttributes(t,e){this._setAttributeIfNotExists(t,"role","tablist");for(const t of e)this._setInitialAttributesOnChild(t)}_setInitialAttributesOnChild(t){t=this._getInnerElement(t);const e=this._elemIsActive(t),i=this._getOuterElement(t);t.setAttribute("aria-selected",e),i!==t&&this._setAttributeIfNotExists(i,"role","presentation"),e||t.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(t,"role","tab"),this._setInitialAttributesOnTargetPanel(t)}_setInitialAttributesOnTargetPanel(t){const e=z.getElementFromSelector(t);e&&(this._setAttributeIfNotExists(e,"role","tabpanel"),t.id&&this._setAttributeIfNotExists(e,"aria-labelledby",`${t.id}`))}_toggleDropDown(t,e){const i=this._getOuterElement(t);if(!i.classList.contains("dropdown"))return;const n=(t,n)=>{const s=z.findOne(t,i);s&&s.classList.toggle(n,e)};n(Bs,Fs),n(".dropdown-menu",Ws),i.setAttribute("aria-expanded",e)}_setAttributeIfNotExists(t,e,i){t.hasAttribute(e)||t.setAttribute(e,i)}_elemIsActive(t){return t.classList.contains(Fs)}_getInnerElement(t){return t.matches(qs)?t:z.findOne(qs,t)}_getOuterElement(t){return t.closest(".nav-item, .list-group-item")||t}static jQueryInterface(t){return this.each((function(){const e=Ks.getOrCreateInstance(this);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t]()}}))}}N.on(document,Ls,Rs,(function(t){["A","AREA"].includes(this.tagName)&&t.preventDefault(),l(this)||Ks.getOrCreateInstance(this).show()})),N.on(window,Ds,(()=>{for(const t of z.find(Vs))Ks.getOrCreateInstance(t)})),m(Ks);const Qs=".bs.toast",Xs=`mouseover${Qs}`,Ys=`mouseout${Qs}`,Us=`focusin${Qs}`,Gs=`focusout${Qs}`,Js=`hide${Qs}`,Zs=`hidden${Qs}`,to=`show${Qs}`,eo=`shown${Qs}`,io="hide",no="show",so="showing",oo={animation:"boolean",autohide:"boolean",delay:"number"},ro={animation:!0,autohide:!0,delay:5e3};class ao extends W{constructor(t,e){super(t,e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return ro}static get DefaultType(){return oo}static get NAME(){return"toast"}show(){N.trigger(this._element,to).defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add("fade"),this._element.classList.remove(io),d(this._element),this._element.classList.add(no,so),this._queueCallback((()=>{this._element.classList.remove(so),N.trigger(this._element,eo),this._maybeScheduleHide()}),this._element,this._config.animation))}hide(){this.isShown()&&(N.trigger(this._element,Js).defaultPrevented||(this._element.classList.add(so),this._queueCallback((()=>{this._element.classList.add(io),this._element.classList.remove(so,no),N.trigger(this._element,Zs)}),this._element,this._config.animation)))}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(no),super.dispose()}isShown(){return this._element.classList.contains(no)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout((()=>{this.hide()}),this._config.delay)))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":this._hasMouseInteraction=e;break;case"focusin":case"focusout":this._hasKeyboardInteraction=e}if(e)return void this._clearTimeout();const i=t.relatedTarget;this._element===i||this._element.contains(i)||this._maybeScheduleHide()}_setListeners(){N.on(this._element,Xs,(t=>this._onInteraction(t,!0))),N.on(this._element,Ys,(t=>this._onInteraction(t,!1))),N.on(this._element,Us,(t=>this._onInteraction(t,!0))),N.on(this._element,Gs,(t=>this._onInteraction(t,!1)))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each((function(){const e=ao.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}return R(ao),m(ao),{Alert:Q,Button:Y,Carousel:xt,Collapse:Bt,Dropdown:qi,Modal:On,Offcanvas:qn,Popover:us,ScrollSpy:Es,Tab:Ks,Toast:ao,Tooltip:cs}}));
//# sourceMappingURL=bootstrap.bundle.min.js.map/* MIT https://github.com/fabiospampinato/cash */
(function(){
'use strict';var e={"class":"className",contenteditable:"contentEditable","for":"htmlFor",readonly:"readOnly",maxlength:"maxLength",tabindex:"tabIndex",colspan:"colSpan",rowspan:"rowSpan",usemap:"useMap"};function aa(a,b){try{return a(b)}catch(c){return b}}
var k=document,m=window,ba=k.documentElement,n=k.createElement.bind(k),ca=n("div"),p=n("table"),da=n("tbody"),ea=n("tr"),q=Array.isArray,r=Array.prototype,fa=r.concat,t=r.filter,ha=r.indexOf,ia=r.map,ja=r.push,ka=r.slice,u=r.some,la=r.splice,ma=/^#(?:[\w-]|\\.|[^\x00-\xa0])*$/,na=/^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/,oa=/<.+>/,pa=/^\w+$/;function v(a,b){return a&&(w(b)||x(b))?na.test(a)?b.getElementsByClassName(a.slice(1)):pa.test(a)?b.getElementsByTagName(a):b.querySelectorAll(a):[]}
var B=function(){function a(a,c){if(a){if(a instanceof B)return a;var b=a;if(C(a)){if(b=(c instanceof B?c[0]:c)||k,b=ma.test(a)?b.getElementById(a.slice(1)):oa.test(a)?qa(a):v(a,b),!b)return}else if(D(a))return this.ready(a);if(b.nodeType||b===m)b=[b];this.length=b.length;a=0;for(c=this.length;a<c;a++)this[a]=b[a]}}a.prototype.init=function(b,c){return new a(b,c)};return a}(),E=B.prototype,F=E.init;F.fn=F.prototype=E;E.length=0;E.splice=la;"function"===typeof Symbol&&(E[Symbol.iterator]=r[Symbol.iterator]);
E.map=function(a){return F(fa.apply([],ia.call(this,function(b,c){return a.call(b,c,b)})))};E.slice=function(a,b){return F(ka.call(this,a,b))};var ra=/-([a-z])/g;function G(a){return a.replace(ra,function(a,c){return c.toUpperCase()})}F.guid=1;function sa(a,b){var c=a&&(a.matches||a.webkitMatchesSelector||a.msMatchesSelector);return!!c&&!!b&&c.call(a,b)}function H(a){return!!a&&a===a.window}function w(a){return!!a&&9===a.nodeType}function x(a){return!!a&&1===a.nodeType}
function D(a){return"function"===typeof a}function C(a){return"string"===typeof a}function ta(a){return!isNaN(parseFloat(a))&&isFinite(a)}function I(a){if("object"!==typeof a||null===a)return!1;a=Object.getPrototypeOf(a);return null===a||a===Object.prototype}F.isWindow=H;F.isFunction=D;F.isArray=q;F.isNumeric=ta;F.isPlainObject=I;E.get=function(a){if(void 0===a)return ka.call(this);a=Number(a);return this[0>a?a+this.length:a]};E.eq=function(a){return F(this.get(a))};E.first=function(){return this.eq(0)};
E.last=function(){return this.eq(-1)};function J(a,b,c){if(c)for(c=a.length;c--&&!1!==b.call(a[c],c,a[c]););else if(I(a)){var d=Object.keys(a);c=0;for(var h=d.length;c<h;c++){var f=d[c];if(!1===b.call(a[f],f,a[f]))break}}else for(c=0,h=a.length;c<h&&!1!==b.call(a[c],c,a[c]);c++);return a}F.each=J;E.each=function(a){return J(this,a)};E.prop=function(a,b){if(a){if(C(a))return a=e[a]||a,2>arguments.length?this[0]&&this[0][a]:this.each(function(c,h){h[a]=b});for(var c in a)this.prop(c,a[c]);return this}};
E.removeProp=function(a){return this.each(function(b,c){delete c[e[a]||a]})};function K(){for(var a=[],b=0;b<arguments.length;b++)a[b]=arguments[b];b="boolean"===typeof a[0]?a.shift():!1;var c=a.shift(),d=a.length;if(!c)return{};if(!d)return K(b,F,c);for(var h=0;h<d;h++){var f=a[h],g;for(g in f)b&&(q(f[g])||I(f[g]))?(c[g]&&c[g].constructor===f[g].constructor||(c[g]=new f[g].constructor),K(b,c[g],f[g])):c[g]=f[g]}return c}F.extend=K;E.extend=function(a){return K(E,a)};
function L(a){return C(a)?function(b,c){return sa(c,a)}:D(a)?a:a instanceof B?function(b,c){return a.is(c)}:a?function(b,c){return c===a}:function(){return!1}}E.filter=function(a){var b=L(a);return F(t.call(this,function(a,d){return b.call(a,d,a)}))};function M(a,b){return b?a.filter(b):a}var ua=/\S+/g;function N(a){return C(a)?a.match(ua)||[]:[]}E.hasClass=function(a){return!!a&&u.call(this,function(b){return x(b)&&b.classList.contains(a)})};
E.removeAttr=function(a){var b=N(a);return this.each(function(a,d){x(d)&&J(b,function(a,b){d.removeAttribute(b)})})};E.attr=function(a,b){if(a){if(C(a)){if(2>arguments.length){if(!this[0]||!x(this[0]))return;var c=this[0].getAttribute(a);return null===c?void 0:c}return void 0===b?this:null===b?this.removeAttr(a):this.each(function(c,h){x(h)&&h.setAttribute(a,b)})}for(c in a)this.attr(c,a[c]);return this}};
E.toggleClass=function(a,b){var c=N(a),d=void 0!==b;return this.each(function(a,f){x(f)&&J(c,function(a,c){d?b?f.classList.add(c):f.classList.remove(c):f.classList.toggle(c)})})};E.addClass=function(a){return this.toggleClass(a,!0)};E.removeClass=function(a){return arguments.length?this.toggleClass(a,!1):this.attr("class","")};
function O(a,b,c,d){for(var h=[],f=D(b),g=d&&L(d),y=0,z=a.length;y<z;y++)if(f){var l=b(a[y]);l.length&&ja.apply(h,l)}else for(l=a[y][b];!(null==l||d&&g(-1,l));)h.push(l),l=c?l[b]:null;return h}function P(a){return 1<a.length?t.call(a,function(a,c,d){return ha.call(d,a)===c}):a}F.unique=P;E.add=function(a,b){return F(P(this.get().concat(F(a,b).get())))};function Q(a,b,c){if(x(a)){var d=m.getComputedStyle(a,null);return c?d.getPropertyValue(b)||void 0:d[b]||a.style[b]}}
function R(a,b){return parseInt(Q(a,b),10)||0}var S=/^--/,T={},va=ca.style,wa=["webkit","moz","ms"];function xa(a,b){void 0===b&&(b=S.test(a));if(b)return a;if(!T[a]){b=G(a);var c=""+b[0].toUpperCase()+b.slice(1);b=(b+" "+wa.join(c+" ")+c).split(" ");J(b,function(b,c){if(c in va)return T[a]=c,!1})}return T[a]}
var ya={animationIterationCount:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0};function za(a,b,c){void 0===c&&(c=S.test(a));return c||ya[a]||!ta(b)?b:b+"px"}
E.css=function(a,b){if(C(a)){var c=S.test(a);a=xa(a,c);if(2>arguments.length)return this[0]&&Q(this[0],a,c);if(!a)return this;b=za(a,b,c);return this.each(function(d,f){x(f)&&(c?f.style.setProperty(a,b):f.style[a]=b)})}for(var d in a)this.css(d,a[d]);return this};var Aa=/^\s+|\s+$/;function Ba(a,b){a=a.dataset[b]||a.dataset[G(b)];return Aa.test(a)?a:aa(JSON.parse,a)}
E.data=function(a,b){if(!a){if(!this[0])return;var c={},d;for(d in this[0].dataset)c[d]=Ba(this[0],d);return c}if(C(a))return 2>arguments.length?this[0]&&Ba(this[0],a):void 0===b?this:this.each(function(c,d){c=b;c=aa(JSON.stringify,c);d.dataset[G(a)]=c});for(d in a)this.data(d,a[d]);return this};function Ca(a,b){var c=a.documentElement;return Math.max(a.body["scroll"+b],c["scroll"+b],a.body["offset"+b],c["offset"+b],c["client"+b])}
function Da(a,b){return R(a,"border"+(b?"Left":"Top")+"Width")+R(a,"padding"+(b?"Left":"Top"))+R(a,"padding"+(b?"Right":"Bottom"))+R(a,"border"+(b?"Right":"Bottom")+"Width")}
J([!0,!1],function(a,b){J(["Width","Height"],function(a,d){E[(b?"outer":"inner")+d]=function(c){if(this[0])return H(this[0])?b?this[0]["inner"+d]:this[0].document.documentElement["client"+d]:w(this[0])?Ca(this[0],d):this[0][(b?"offset":"client")+d]+(c&&b?R(this[0],"margin"+(a?"Top":"Left"))+R(this[0],"margin"+(a?"Bottom":"Right")):0)}})});
J(["Width","Height"],function(a,b){var c=b.toLowerCase();E[c]=function(d){if(!this[0])return void 0===d?void 0:this;if(!arguments.length)return H(this[0])?this[0].document.documentElement["client"+b]:w(this[0])?Ca(this[0],b):this[0].getBoundingClientRect()[c]-Da(this[0],!a);var h=parseInt(d,10);return this.each(function(b,d){x(d)&&(b=Q(d,"boxSizing"),d.style[c]=za(c,h+("border-box"===b?Da(d,!a):0)))})}});var U={};
E.toggle=function(a){return this.each(function(b,c){if(x(c))if(void 0===a?"none"===Q(c,"display"):a){if(c.style.display=c.___cd||"","none"===Q(c,"display")){b=c.style;c=c.tagName;if(U[c])c=U[c];else{var d=n(c);k.body.insertBefore(d,null);var h=Q(d,"display");k.body.removeChild(d);c=U[c]="none"!==h?h:"block"}b.display=c}}else c.___cd=Q(c,"display"),c.style.display="none"})};E.hide=function(){return this.toggle(!1)};E.show=function(){return this.toggle(!0)};
function Ea(a,b){return!b||!u.call(b,function(b){return 0>a.indexOf(b)})}var V={focus:"focusin",blur:"focusout"},W={mouseenter:"mouseover",mouseleave:"mouseout"},Fa=/^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;function Ga(a,b,c,d,h){var f=a.___ce=a.___ce||{};f[b]=f[b]||[];f[b].push([c,d,h]);a.addEventListener(b,h)}function X(a){a=a.split(".");return[a[0],a.slice(1).sort()]}
function Y(a,b,c,d,h){var f=a.___ce=a.___ce||{};if(b)f[b]&&(f[b]=f[b].filter(function(f){var g=f[0],z=f[1];f=f[2];if(h&&f.guid!==h.guid||!Ea(g,c)||d&&d!==z)return!0;a.removeEventListener(b,f)}));else for(b in f)Y(a,b,c,d,h)}
E.off=function(a,b,c){var d=this;if(void 0===a)this.each(function(a,b){(x(b)||w(b)||H(b))&&Y(b)});else if(C(a))D(b)&&(c=b,b=""),J(N(a),function(a,h){a=X(h);h=a[0];var f=a[1],g=W[h]||V[h]||h;d.each(function(a,d){(x(d)||w(d)||H(d))&&Y(d,g,f,b,c)})});else for(var h in a)this.off(h,a[h]);return this};
E.on=function(a,b,c,d,h){var f=this;if(!C(a)){for(var g in a)this.on(g,b,c,a[g],h);return this}C(b)||(void 0!==b&&null!==b&&(void 0!==c&&(d=c),c=b),b="");D(d)||(d=c,c=void 0);if(!d)return this;J(N(a),function(a,g){a=X(g);g=a[0];var l=a[1],z=W[g]||V[g]||g,y=g in W,Ka=g in V;z&&f.each(function(a,f){if(x(f)||w(f)||H(f))a=function La(a){if(a.target["___i"+a.type])return a.stopImmediatePropagation();if(!a.namespace||Ea(l,a.namespace.split(".")))if(b||!(Ka&&(a.target!==f||a.___ot===z)||y&&a.relatedTarget&&
f.contains(a.relatedTarget))){var g=f;if(b){for(var A=a.target;!sa(A,b);){if(A===f)return;A=A.parentNode;if(!A)return}g=A;a.___cd=!0}a.___cd&&Object.defineProperty(a,"currentTarget",{configurable:!0,get:function(){return g}});Object.defineProperty(a,"data",{configurable:!0,get:function(){return c}});A=d.call(g,a,a.___td);h&&Y(f,z,l,b,La);!1===A&&(a.preventDefault(),a.stopPropagation())}},a.guid=d.guid=d.guid||F.guid++,Ga(f,z,l,b,a)})});return this};E.one=function(a,b,c,d){return this.on(a,b,c,d,!0)};
E.ready=function(a){function b(){return setTimeout(a,0,F)}"loading"!==k.readyState?b():k.addEventListener("DOMContentLoaded",b);return this};E.trigger=function(a,b){if(C(a)){var c=X(a),d=c[0];c=c[1];var h=W[d]||V[d]||d;if(!h)return this;var f=Fa.test(h)?"MouseEvents":"HTMLEvents";a=k.createEvent(f);a.initEvent(h,!0,!0);a.namespace=c.join(".");a.___ot=d}a.___td=b;var g=a.___ot in V;return this.each(function(b,c){g&&D(c[a.___ot])&&(c["___i"+a.type]=!0,c[a.___ot](),c["___i"+a.type]=!1);c.dispatchEvent(a)})};
function Ha(a){return a.multiple&&a.options?O(t.call(a.options,function(a){return a.selected&&!a.disabled&&!a.parentNode.disabled}),"value"):a.value||""}var Ia=/%20/g,Ja=/\r?\n/g,Ma=/file|reset|submit|button|image/i,Na=/radio|checkbox/i;
E.serialize=function(){var a="";this.each(function(b,c){J(c.elements||[c],function(b,c){c.disabled||!c.name||"FIELDSET"===c.tagName||Ma.test(c.type)||Na.test(c.type)&&!c.checked||(b=Ha(c),void 0!==b&&(b=q(b)?b:[b],J(b,function(b,d){b=a;d="&"+encodeURIComponent(c.name)+"="+encodeURIComponent(d.replace(Ja,"\r\n")).replace(Ia,"+");a=b+d})))})});return a.slice(1)};
E.val=function(a){return arguments.length?this.each(function(b,c){if((b=c.multiple&&c.options)||Na.test(c.type)){var d=q(a)?ia.call(a,String):null===a?[]:[String(a)];b?J(c.options,function(a,b){b.selected=0<=d.indexOf(b.value)},!0):c.checked=0<=d.indexOf(c.value)}else c.value=void 0===a||null===a?"":a}):this[0]&&Ha(this[0])};E.clone=function(){return this.map(function(a,b){return b.cloneNode(!0)})};E.detach=function(a){M(this,a).each(function(a,c){c.parentNode&&c.parentNode.removeChild(c)});return this};
var Oa=/^\s*<(\w+)[^>]*>/,Pa=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,Qa={"*":ca,tr:da,td:ea,th:ea,thead:p,tbody:p,tfoot:p};function qa(a){if(!C(a))return[];if(Pa.test(a))return[n(RegExp.$1)];var b=Oa.test(a)&&RegExp.$1;b=Qa[b]||Qa["*"];b.innerHTML=a;return F(b.childNodes).detach().get()}F.parseHTML=qa;E.empty=function(){return this.each(function(a,b){for(;b.firstChild;)b.removeChild(b.firstChild)})};
E.html=function(a){return arguments.length?void 0===a?this:this.each(function(b,c){x(c)&&(c.innerHTML=a)}):this[0]&&this[0].innerHTML};E.remove=function(a){M(this,a).detach().off();return this};E.text=function(a){return void 0===a?this[0]?this[0].textContent:"":this.each(function(b,c){x(c)&&(c.textContent=a)})};E.unwrap=function(){this.parent().each(function(a,b){"BODY"!==b.tagName&&(a=F(b),a.replaceWith(a.children()))});return this};
E.offset=function(){var a=this[0];if(a)return a=a.getBoundingClientRect(),{top:a.top+m.pageYOffset,left:a.left+m.pageXOffset}};E.offsetParent=function(){return this.map(function(a,b){for(a=b.offsetParent;a&&"static"===Q(a,"position");)a=a.offsetParent;return a||ba})};
E.position=function(){var a=this[0];if(a){var b="fixed"===Q(a,"position"),c=b?a.getBoundingClientRect():this.offset();if(!b){var d=a.ownerDocument;for(b=a.offsetParent||d.documentElement;(b===d.body||b===d.documentElement)&&"static"===Q(b,"position");)b=b.parentNode;b!==a&&x(b)&&(d=F(b).offset(),c.top-=d.top+R(b,"borderTopWidth"),c.left-=d.left+R(b,"borderLeftWidth"))}return{top:c.top-R(a,"marginTop"),left:c.left-R(a,"marginLeft")}}};
E.children=function(a){return M(F(P(O(this,function(a){return a.children}))),a)};E.contents=function(){return F(P(O(this,function(a){return"IFRAME"===a.tagName?[a.contentDocument]:"TEMPLATE"===a.tagName?a.content.childNodes:a.childNodes})))};E.find=function(a){return F(P(O(this,function(b){return v(a,b)})))};var Ra=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Sa=/^$|^module$|\/(java|ecma)script/i,Ta=["type","src","nonce","noModule"];
function Ua(a,b){a=F(a);a.filter("script").add(a.find("script")).each(function(a,d){if(Sa.test(d.type)&&ba.contains(d)){var c=n("script");c.text=d.textContent.replace(Ra,"");J(Ta,function(a,b){d[b]&&(c[b]=d[b])});b.head.insertBefore(c,null);b.head.removeChild(c)}})}
function Z(a,b,c,d,h,f,g,y){J(a,function(a,f){J(F(f),function(a,f){J(F(b),function(b,g){var l=c?g:f;b=c?a:b;g=c?f:g;l=b?l.cloneNode(!0):l;b=!b;h?g.insertBefore(l,d?g.firstChild:null):g.parentNode.insertBefore(l,d?g:g.nextSibling);b&&Ua(l,g.ownerDocument)},y)},g)},f);return b}E.after=function(){return Z(arguments,this,!1,!1,!1,!0,!0)};E.append=function(){return Z(arguments,this,!1,!1,!0)};E.appendTo=function(a){return Z(arguments,this,!0,!1,!0)};E.before=function(){return Z(arguments,this,!1,!0)};
E.insertAfter=function(a){return Z(arguments,this,!0,!1,!1,!1,!1,!0)};E.insertBefore=function(a){return Z(arguments,this,!0,!0)};E.prepend=function(){return Z(arguments,this,!1,!0,!0,!0,!0)};E.prependTo=function(a){return Z(arguments,this,!0,!0,!0,!1,!1,!0)};E.replaceWith=function(a){return this.before(a).remove()};E.replaceAll=function(a){F(a).replaceWith(this);return this};E.wrapAll=function(a){a=F(a);for(var b=a[0];b.children.length;)b=b.firstElementChild;this.first().before(a);return this.appendTo(b)};
E.wrap=function(a){return this.each(function(b,c){var d=F(a)[0];F(c).wrapAll(b?d.cloneNode(!0):d)})};E.wrapInner=function(a){return this.each(function(b,c){b=F(c);c=b.contents();c.length?c.wrapAll(a):b.append(a)})};E.has=function(a){var b=C(a)?function(b,d){return v(a,d).length}:function(b,d){return d.contains(a)};return this.filter(b)};E.is=function(a){var b=L(a);return u.call(this,function(a,d){return b.call(a,d,a)})};E.next=function(a,b,c){return M(F(P(O(this,"nextElementSibling",b,c))),a)};
E.nextAll=function(a){return this.next(a,!0)};E.nextUntil=function(a,b){return this.next(b,!0,a)};E.not=function(a){var b=L(a);return this.filter(function(c,d){return(!C(a)||x(d))&&!b.call(d,c,d)})};E.parent=function(a){return M(F(P(O(this,"parentNode"))),a)};E.index=function(a){var b=a?F(a)[0]:this[0];a=a?this:F(b).parent().children();return ha.call(a,b)};E.closest=function(a){var b=this.filter(a);if(b.length)return b;var c=this.parent();return c.length?c.closest(a):b};
E.parents=function(a,b){return M(F(P(O(this,"parentElement",!0,b))),a)};E.parentsUntil=function(a,b){return this.parents(b,a)};E.prev=function(a,b,c){return M(F(P(O(this,"previousElementSibling",b,c))),a)};E.prevAll=function(a){return this.prev(a,!0)};E.prevUntil=function(a,b){return this.prev(b,!0,a)};E.siblings=function(a){return M(F(P(O(this,function(a){return F(a).parent().children().not(a)}))),a)};"undefined"!==typeof exports?module.exports=F:m.cash=m.$=F;
})();
/**
 * Push v1.0
 * =========
 * A compact, cross-browser solution for the JavaScript Notifications API
 *
 * Credits
 * -------
 * Tsvetan Tsvetkov (ttsvetko)
 * Alex Gibson (alexgibson)
 *
 * License
 * -------
 *
 * The MIT License (MIT)
 *
 * Copyright (c) 2015-2017 Tyler Nickerson
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
!function(i,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):i.Push=t()}(this,function(){"use strict";function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(i){return typeof i}:function(i){return i&&"function"==typeof Symbol&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i})(t)}function t(i,t){if(!(i instanceof t))throw new TypeError("Cannot call a class as a function")}function n(i,t){for(var n=0;n<t.length;n++){var e=t[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(i,e.key,e)}}function e(i,t,e){return t&&n(i.prototype,t),e&&n(i,e),i}function o(i,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");i.prototype=Object.create(t&&t.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(i,t):i.__proto__=t)}function r(i,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0===i)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}var s="PushError:",c={errors:{incompatible:"".concat(s," Push.js is incompatible with browser."),invalid_plugin:"".concat(s," plugin class missing from plugin manifest (invalid plugin). Please check the documentation."),invalid_title:"".concat(s," title of notification must be a string"),permission_denied:"".concat(s," permission request declined"),sw_notification_error:"".concat(s," could not show a ServiceWorker notification due to the following reason: "),sw_registration_error:"".concat(s," could not register the ServiceWorker due to the following reason: "),unknown_interface:"".concat(s," unable to create notification: unknown interface")}},a=function(){function i(n){t(this,i),this._win=n,this.GRANTED="granted",this.DEFAULT="default",this.DENIED="denied",this._permissions=[this.GRANTED,this.DEFAULT,this.DENIED]}return e(i,[{key:"request",value:function(i,t){return arguments.length>0?this._requestWithCallback.apply(this,arguments):this._requestAsPromise()}},{key:"_requestWithCallback",value:function(i,t){var n=this,e=this.get(),o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n._win.Notification.permission;void 0===e&&n._win.webkitNotifications&&(e=n._win.webkitNotifications.checkPermission()),e===n.GRANTED||0===e?i&&i():t&&t()};e!==this.DEFAULT?o(e):this._win.webkitNotifications&&this._win.webkitNotifications.checkPermission?this._win.webkitNotifications.requestPermission(o):this._win.Notification&&this._win.Notification.requestPermission?this._win.Notification.requestPermission().then(o).catch(function(){t&&t()}):i&&i()}},{key:"_requestAsPromise",value:function(){var i=this,t=this.get(),n=t!==this.DEFAULT,e=this._win.Notification&&this._win.Notification.requestPermission,o=this._win.webkitNotifications&&this._win.webkitNotifications.checkPermission;return new Promise(function(r,s){var c=function(t){return function(t){return t===i.GRANTED||0===t}(t)?r():s()};n?c(t):o?i._win.webkitNotifications.requestPermission(function(i){c(i)}):e?i._win.Notification.requestPermission().then(function(i){c(i)}).catch(s):r()})}},{key:"has",value:function(){return this.get()===this.GRANTED}},{key:"get",value:function(){return this._win.Notification&&this._win.Notification.permission?this._win.Notification.permission:this._win.webkitNotifications&&this._win.webkitNotifications.checkPermission?this._permissions[this._win.webkitNotifications.checkPermission()]:navigator.mozNotification?this.GRANTED:this._win.external&&this._win.external.msIsSiteMode?this._win.external.msIsSiteMode()?this.GRANTED:this.DEFAULT:this.GRANTED}}]),i}(),u=function(){function n(){t(this,n)}return e(n,null,[{key:"isUndefined",value:function(i){return void 0===i}},{key:"isNull",value:function(i){return null===obj}},{key:"isString",value:function(i){return"string"==typeof i}},{key:"isFunction",value:function(i){return i&&"[object Function]"==={}.toString.call(i)}},{key:"isObject",value:function(t){return"object"===i(t)}},{key:"objectMerge",value:function(i,t){for(var n in t)i.hasOwnProperty(n)&&this.isObject(i[n])&&this.isObject(t[n])?this.objectMerge(i[n],t[n]):i[n]=t[n]}}]),n}(),f=function i(n){t(this,i),this._win=n},l=function(i){function n(){return t(this,n),r(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return o(n,f),e(n,[{key:"isSupported",value:function(){return void 0!==this._win.Notification}},{key:"create",value:function(i,t){return new this._win.Notification(i,{icon:u.isString(t.icon)||u.isUndefined(t.icon)||u.isNull(t.icon)?t.icon:t.icon.x32,body:t.body,tag:t.tag,requireInteraction:t.requireInteraction})}},{key:"close",value:function(i){i.close()}}]),n}(),h=function(i){function n(){return t(this,n),r(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return o(n,f),e(n,[{key:"isSupported",value:function(){return void 0!==this._win.navigator&&void 0!==this._win.navigator.serviceWorker}},{key:"getFunctionBody",value:function(i){var t=i.toString().match(/function[^{]+{([\s\S]*)}$/);return void 0!==t&&null!==t&&t.length>1?t[1]:null}},{key:"create",value:function(i,t,n,e,o){var r=this;this._win.navigator.serviceWorker.register(e),this._win.navigator.serviceWorker.ready.then(function(e){var s={id:i,link:n.link,origin:document.location.href,onClick:u.isFunction(n.onClick)?r.getFunctionBody(n.onClick):"",onClose:u.isFunction(n.onClose)?r.getFunctionBody(n.onClose):""};void 0!==n.data&&null!==n.data&&(s=Object.assign(s,n.data)),e.showNotification(t,{icon:n.icon,body:n.body,vibrate:n.vibrate,tag:n.tag,data:s,requireInteraction:n.requireInteraction,silent:n.silent}).then(function(){e.getNotifications().then(function(i){e.active.postMessage(""),o(i)})}).catch(function(i){throw new Error(c.errors.sw_notification_error+i.message)})}).catch(function(i){throw new Error(c.errors.sw_registration_error+i.message)})}},{key:"close",value:function(){}}]),n}(),_=function(i){function n(){return t(this,n),r(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return o(n,f),e(n,[{key:"isSupported",value:function(){return void 0!==this._win.navigator.mozNotification}},{key:"create",value:function(i,t){var n=this._win.navigator.mozNotification.createNotification(i,t.body,t.icon);return n.show(),n}}]),n}(),v=function(i){function n(){return t(this,n),r(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return o(n,f),e(n,[{key:"isSupported",value:function(){return void 0!==this._win.external&&void 0!==this._win.external.msIsSiteMode}},{key:"create",value:function(i,t){return this._win.external.msSiteModeClearIconOverlay(),this._win.external.msSiteModeSetIconOverlay(u.isString(t.icon)||u.isUndefined(t.icon)?t.icon:t.icon.x16,i),this._win.external.msSiteModeActivate(),null}},{key:"close",value:function(){this._win.external.msSiteModeClearIconOverlay()}}]),n}(),d=function(i){function n(){return t(this,n),r(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return o(n,f),e(n,[{key:"isSupported",value:function(){return void 0!==this._win.webkitNotifications}},{key:"create",value:function(i,t){var n=this._win.webkitNotifications.createNotification(t.icon,i,t.body);return n.show(),n}},{key:"close",value:function(i){i.cancel()}}]),n}();return new(function(){function i(n){t(this,i),this._currentId=0,this._notifications={},this._win=n,this.Permission=new a(n),this._agents={desktop:new l(n),chrome:new h(n),firefox:new _(n),ms:new v(n),webkit:new d(n)},this._configuration={serviceWorker:"/serviceWorker.min.js",fallback:function(i){}}}return e(i,[{key:"_closeNotification",value:function(i){var t=!0,n=this._notifications[i];if(void 0!==n){if(t=this._removeNotification(i),this._agents.desktop.isSupported())this._agents.desktop.close(n);else if(this._agents.webkit.isSupported())this._agents.webkit.close(n);else{if(!this._agents.ms.isSupported())throw t=!1,new Error(c.errors.unknown_interface);this._agents.ms.close()}return t}return!1}},{key:"_addNotification",value:function(i){var t=this._currentId;return this._notifications[t]=i,this._currentId++,t}},{key:"_removeNotification",value:function(i){var t=!1;return this._notifications.hasOwnProperty(i)&&(delete this._notifications[i],t=!0),t}},{key:"_prepareNotification",value:function(i,t){var n,e=this;return n={get:function(){return e._notifications[i]},close:function(){e._closeNotification(i)}},t.timeout&&setTimeout(function(){n.close()},t.timeout),n}},{key:"_serviceWorkerCallback",value:function(i,t,n){var e=this,o=this._addNotification(i[i.length-1]);navigator&&navigator.serviceWorker&&(navigator.serviceWorker.addEventListener("message",function(i){var t=JSON.parse(i.data);"close"===t.action&&Number.isInteger(t.id)&&e._removeNotification(t.id)}),n(this._prepareNotification(o,t))),n(null)}},{key:"_createCallback",value:function(i,t,n){var e,o=this,r=null;if(t=t||{},e=function(i){o._removeNotification(i),u.isFunction(t.onClose)&&t.onClose.call(o,r)},this._agents.desktop.isSupported())try{r=this._agents.desktop.create(i,t)}catch(e){var s=this._currentId,c=this.config().serviceWorker,a=function(i){return o._serviceWorkerCallback(i,t,n)};this._agents.chrome.isSupported()&&this._agents.chrome.create(s,i,t,c,a)}else this._agents.webkit.isSupported()?r=this._agents.webkit.create(i,t):this._agents.firefox.isSupported()?this._agents.firefox.create(i,t):this._agents.ms.isSupported()?r=this._agents.ms.create(i,t):(t.title=i,this.config().fallback(t));if(null!==r){var f=this._addNotification(r),l=this._prepareNotification(f,t);u.isFunction(t.onShow)&&r.addEventListener("show",t.onShow),u.isFunction(t.onError)&&r.addEventListener("error",t.onError),u.isFunction(t.onClick)&&r.addEventListener("click",t.onClick),r.addEventListener("close",function(){e(f)}),r.addEventListener("cancel",function(){e(f)}),n(l)}n(null)}},{key:"create",value:function(i,t){var n,e=this;if(!u.isString(i))throw new Error(c.errors.invalid_title);return n=this.Permission.has()?function(n,o){try{e._createCallback(i,t,n)}catch(i){o(i)}}:function(n,o){e.Permission.request().then(function(){e._createCallback(i,t,n)}).catch(function(){o(c.errors.permission_denied)})},new Promise(n)}},{key:"count",value:function(){var i,t=0;for(i in this._notifications)this._notifications.hasOwnProperty(i)&&t++;return t}},{key:"close",value:function(i){var t;for(t in this._notifications)if(this._notifications.hasOwnProperty(t)&&this._notifications[t].tag===i)return this._closeNotification(t)}},{key:"clear",value:function(){var i,t=!0;for(i in this._notifications)this._notifications.hasOwnProperty(i)&&(t=t&&this._closeNotification(i));return t}},{key:"supported",value:function(){var i=!1;for(var t in this._agents)this._agents.hasOwnProperty(t)&&(i=i||this._agents[t].isSupported());return i}},{key:"config",value:function(i){return(void 0!==i||null!==i&&u.isObject(i))&&u.objectMerge(this._configuration,i),this._configuration}},{key:"extend",value:function(i){var t,n={}.hasOwnProperty;if(!n.call(i,"plugin"))throw new Error(c.errors.invalid_plugin);n.call(i,"config")&&u.isObject(i.config)&&null!==i.config&&this.config(i.config),t=new(0,i.plugin)(this.config());for(var e in t)n.call(t,e)&&u.isFunction(t[e])&&(this[e]=t[e])}}]),i}())("undefined"!=typeof window?window:global)});
//# sourceMappingURL=push.min.js.map
!function(){"use strict";var e=function(t){if(!(this instanceof e))return new e(t);if(this.version=1,this.support=!("undefined"==typeof File||"undefined"==typeof Blob||"undefined"==typeof FileList||!Blob.prototype.webkitSlice&&!Blob.prototype.mozSlice&&!Blob.prototype.slice),!this.support)return!1;var r=this;r.files=[],r.defaults={chunkSize:1048576,forceChunkSize:!1,simultaneousUploads:3,fileParameterName:"file",chunkNumberParameterName:"resumableChunkNumber",chunkSizeParameterName:"resumableChunkSize",currentChunkSizeParameterName:"resumableCurrentChunkSize",totalSizeParameterName:"resumableTotalSize",typeParameterName:"resumableType",identifierParameterName:"resumableIdentifier",fileNameParameterName:"resumableFilename",relativePathParameterName:"resumableRelativePath",totalChunksParameterName:"resumableTotalChunks",dragOverClass:"dragover",throttleProgressCallbacks:.5,query:{},headers:{},preprocess:null,preprocessFile:null,method:"multipart",uploadMethod:"POST",testMethod:"GET",prioritizeFirstAndLastChunk:!1,target:"/",testTarget:null,parameterNamespace:"",testChunks:!0,generateUniqueIdentifier:null,getTarget:null,maxChunkRetries:100,chunkRetryInterval:void 0,permanentErrors:[400,401,403,404,409,415,500,501],maxFiles:void 0,withCredentials:!1,xhrTimeout:0,clearInput:!0,chunkFormat:"blob",setChunkTypeFromFile:!1,maxFilesErrorCallback:function(e,t){var n=r.getOpt("maxFiles");alert("Please upload no more than "+n+" file"+(1===n?"":"s")+" at a time.")},minFileSize:1,minFileSizeErrorCallback:function(e,t){alert(e.fileName||e.name+" is too small, please upload files larger than "+n.formatSize(r.getOpt("minFileSize"))+".")},maxFileSize:void 0,maxFileSizeErrorCallback:function(e,t){alert(e.fileName||e.name+" is too large, please upload files less than "+n.formatSize(r.getOpt("maxFileSize"))+".")},fileType:[],fileTypeErrorCallback:function(e,t){alert(e.fileName||e.name+" has type not allowed, please upload files of type "+r.getOpt("fileType")+".")}},r.opts=t||{},r.getOpt=function(t){var r=this;if(t instanceof Array){var i={};return n.each(t,function(e){i[e]=r.getOpt(e)}),i}if(r instanceof p){if(void 0!==r.opts[t])return r.opts[t];r=r.fileObj}if(r instanceof c){if(void 0!==r.opts[t])return r.opts[t];r=r.resumableObj}if(r instanceof e)return void 0!==r.opts[t]?r.opts[t]:r.defaults[t]},r.indexOf=function(e,t){if(e.indexOf)return e.indexOf(t);for(var r=0;r<e.length;r++)if(e[r]===t)return r;return-1},r.events=[],r.on=function(e,t){r.events.push(e.toLowerCase(),t)},r.fire=function(){for(var e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);var n=e[0].toLowerCase();for(t=0;t<=r.events.length;t+=2)r.events[t]==n&&r.events[t+1].apply(r,e.slice(1)),"catchall"==r.events[t]&&r.events[t+1].apply(null,e);"fileerror"==n&&r.fire("error",e[2],e[1]),"fileprogress"==n&&r.fire("progress")};var n={stopEvent:function(e){e.stopPropagation(),e.preventDefault()},each:function(e,t){if(void 0!==e.length){for(var r=0;r<e.length;r++)if(!1===t(e[r]))return}else for(r in e)if(!1===t(r,e[r]))return},generateUniqueIdentifier:function(e,t){var n=r.getOpt("generateUniqueIdentifier");if("function"==typeof n)return n(e,t);var i=e.webkitRelativePath||e.relativePath||e.fileName||e.name;return e.size+"-"+i.replace(/[^0-9a-zA-Z_-]/gim,"")},contains:function(e,t){var r=!1;return n.each(e,function(e){return e!=t||(r=!0,!1)}),r},formatSize:function(e){return e<1024?e+" bytes":e<1048576?(e/1024).toFixed(0)+" KB":e<1073741824?(e/1024/1024).toFixed(1)+" MB":(e/1024/1024/1024).toFixed(1)+" GB"},getTarget:function(e,t){var n=r.getOpt("target");if("test"===e&&r.getOpt("testTarget")&&(n="/"===r.getOpt("testTarget")?r.getOpt("target"):r.getOpt("testTarget")),"function"==typeof n)return n(t);var i=n.indexOf("?")<0?"?":"&",a=t.join("&");return a&&(n=n+i+a),n}},i=function(e){e.currentTarget.classList.remove(r.getOpt("dragOverClass")),n.stopEvent(e),e.dataTransfer&&e.dataTransfer.items?u(e.dataTransfer.items,e):e.dataTransfer&&e.dataTransfer.files&&u(e.dataTransfer.files,e)},a=function(e){e.currentTarget.classList.remove(r.getOpt("dragOverClass"))},s=function(e){e.preventDefault();var t=e.dataTransfer;r.indexOf(t.types,"Files")>=0?(e.stopPropagation(),t.dropEffect="copy",t.effectAllowed="copy",e.currentTarget.classList.add(r.getOpt("dragOverClass"))):(t.dropEffect="none",t.effectAllowed="none")};function o(e,t,r,n){var i;return e.isFile?e.file(function(e){e.relativePath=t+e.name,r.push(e),n()}):(e.isDirectory?i=e:e instanceof File&&r.push(e),"function"==typeof e.webkitGetAsEntry&&(i=e.webkitGetAsEntry()),i&&i.isDirectory?function(e,t,r,n){var i=e.createReader(),a=[];!function e(){i.readEntries(function(i){if(i.length)return a=a.concat(i),e();l(a.map(function(e){return o.bind(null,e,t,r)}),n)})}()}(i,t+i.name+"/",r,n):("function"==typeof e.getAsFile&&(e=e.getAsFile())instanceof File&&(e.relativePath=t+e.name,r.push(e)),void n()))}function l(e,t){if(!e||0===e.length)return t();e[0](function(){l(e.slice(1),t)})}function u(e,t){if(e.length){r.fire("beforeAdd");var n=[];l(Array.prototype.map.call(e,function(e){var t=e;return"function"==typeof e.webkitGetAsEntry&&(t=e.webkitGetAsEntry()),o.bind(null,t,"",n)}),function(){n.length&&f(n,t)})}}var f=function(e,t){var i=0,a=r.getOpt(["maxFiles","minFileSize","maxFileSize","maxFilesErrorCallback","minFileSizeErrorCallback","maxFileSizeErrorCallback","fileType","fileTypeErrorCallback"]);if(void 0!==a.maxFiles&&a.maxFiles<e.length+r.files.length){if(1!==a.maxFiles||1!==r.files.length||1!==e.length)return a.maxFilesErrorCallback(e,i++),!1;r.removeFile(r.files[0])}var s=[],o=[],l=e.length,u=function(){if(!--l){if(!s.length&&!o.length)return;window.setTimeout(function(){r.fire("filesAdded",s,o)},0)}};n.each(e,function(e){var l=e.name,f=e.type;if(a.fileType.length>0){var p=!1;for(var d in a.fileType){a.fileType[d]=a.fileType[d].replace(/\s/g,"").toLowerCase();var m=(a.fileType[d].match(/^[^.][^/]+$/)?".":"")+a.fileType[d];if(l.substr(-1*m.length).toLowerCase()===m||-1!==m.indexOf("/")&&(-1!==m.indexOf("*")&&f.substr(0,m.indexOf("*"))===m.substr(0,m.indexOf("*"))||f===m)){p=!0;break}}if(!p)return a.fileTypeErrorCallback(e,i++),!0}if(void 0!==a.minFileSize&&e.size<a.minFileSize)return a.minFileSizeErrorCallback(e,i++),!0;if(void 0!==a.maxFileSize&&e.size>a.maxFileSize)return a.maxFileSizeErrorCallback(e,i++),!0;function h(n){r.getFromUniqueIdentifier(n)?o.push(e):function(){e.uniqueIdentifier=n;var i=new c(r,e,n);r.files.push(i),s.push(i),i.container=void 0!==t?t.srcElement:null,window.setTimeout(function(){r.fire("fileAdded",i,t)},0)}(),u()}var g=n.generateUniqueIdentifier(e,t);g&&"function"==typeof g.then?g.then(function(e){h(e)},function(){u()}):h(g)})};function c(e,t,r){var i=this;i.opts={},i.getOpt=e.getOpt,i._prevProgress=0,i.resumableObj=e,i.file=t,i.fileName=t.fileName||t.name,i.size=t.size,i.relativePath=t.relativePath||t.webkitRelativePath||i.fileName,i.uniqueIdentifier=r,i._pause=!1,i.container="",i.preprocessState=0;var a=void 0!==r,s=function(e,t){switch(e){case"progress":i.resumableObj.fire("fileProgress",i,t);break;case"error":i.abort(),a=!0,i.chunks=[],i.resumableObj.fire("fileError",i,t);break;case"success":if(a)return;i.resumableObj.fire("fileProgress",i,t),i.isComplete()&&i.resumableObj.fire("fileSuccess",i,t);break;case"retry":i.resumableObj.fire("fileRetry",i)}};return i.chunks=[],i.abort=function(){var e=0;n.each(i.chunks,function(t){"uploading"==t.status()&&(t.abort(),e++)}),e>0&&i.resumableObj.fire("fileProgress",i)},i.cancel=function(){var e=i.chunks;i.chunks=[],n.each(e,function(e){"uploading"==e.status()&&(e.abort(),i.resumableObj.uploadNextChunk())}),i.resumableObj.removeFile(i),i.resumableObj.fire("fileProgress",i)},i.retry=function(){i.bootstrap();var e=!1;i.resumableObj.on("chunkingComplete",function(){e||i.resumableObj.upload(),e=!0})},i.bootstrap=function(){i.abort(),a=!1,i.chunks=[],i._prevProgress=0;for(var e=i.getOpt("forceChunkSize")?Math.ceil:Math.floor,t=Math.max(e(i.file.size/i.getOpt("chunkSize")),1),r=0;r<t;r++)!function(e){i.chunks.push(new p(i.resumableObj,i,e,s)),i.resumableObj.fire("chunkingProgress",i,e/t)}(r);window.setTimeout(function(){i.resumableObj.fire("chunkingComplete",i)},0)},i.progress=function(){if(a)return 1;var e=0,t=!1;return n.each(i.chunks,function(r){"error"==r.status()&&(t=!0),e+=r.progress(!0)}),e=t?1:e>.99999?1:e,e=Math.max(i._prevProgress,e),i._prevProgress=e,e},i.isUploading=function(){var e=!1;return n.each(i.chunks,function(t){if("uploading"==t.status())return e=!0,!1}),e},i.isComplete=function(){var e=!1;return 1!==i.preprocessState&&(n.each(i.chunks,function(t){var r=t.status();if("pending"==r||"uploading"==r||1===t.preprocessState)return e=!0,!1}),!e)},i.pause=function(e){i._pause=void 0===e?!i._pause:e},i.isPaused=function(){return i._pause},i.preprocessFinished=function(){i.preprocessState=2,i.upload()},i.upload=function(){var e=!1;if(!1===i.isPaused()){var t=i.getOpt("preprocessFile");if("function"==typeof t)switch(i.preprocessState){case 0:return i.preprocessState=1,t(i),!0;case 1:return!0}n.each(i.chunks,function(t){if("pending"==t.status()&&1!==t.preprocessState)return t.send(),e=!0,!1})}return e},i.markChunksCompleted=function(e){if(i.chunks&&!(i.chunks.length<=e))for(var t=0;t<e;t++)i.chunks[t].markComplete=!0},i.resumableObj.fire("chunkingStart",i),i.bootstrap(),this}function p(e,t,r,i){var a=this;a.opts={},a.getOpt=e.getOpt,a.resumableObj=e,a.fileObj=t,a.fileObjSize=t.size,a.fileObjType=t.file.type,a.offset=r,a.callback=i,a.lastProgressCallback=new Date,a.tested=!1,a.retries=0,a.pendingRetry=!1,a.preprocessState=0,a.markComplete=!1;var s=a.getOpt("chunkSize");return a.loaded=0,a.startByte=a.offset*s,a.endByte=Math.min(a.fileObjSize,(a.offset+1)*s),a.fileObjSize-a.endByte<s&&!a.getOpt("forceChunkSize")&&(a.endByte=a.fileObjSize),a.xhr=null,a.test=function(){a.xhr=new XMLHttpRequest;var e=function(e){a.tested=!0;var t=a.status();"success"==t?(a.callback(t,a.message()),a.resumableObj.uploadNextChunk()):a.send()};a.xhr.addEventListener("load",e,!1),a.xhr.addEventListener("error",e,!1),a.xhr.addEventListener("timeout",e,!1);var t=[],r=a.getOpt("parameterNamespace"),i=a.getOpt("query");"function"==typeof i&&(i=i(a.fileObj,a)),n.each(i,function(e,n){t.push([encodeURIComponent(r+e),encodeURIComponent(n)].join("="))}),t=t.concat([["chunkNumberParameterName",a.offset+1],["chunkSizeParameterName",a.getOpt("chunkSize")],["currentChunkSizeParameterName",a.endByte-a.startByte],["totalSizeParameterName",a.fileObjSize],["typeParameterName",a.fileObjType],["identifierParameterName",a.fileObj.uniqueIdentifier],["fileNameParameterName",a.fileObj.fileName],["relativePathParameterName",a.fileObj.relativePath],["totalChunksParameterName",a.fileObj.chunks.length]].filter(function(e){return a.getOpt(e[0])}).map(function(e){return[r+a.getOpt(e[0]),encodeURIComponent(e[1])].join("=")})),a.xhr.open(a.getOpt("testMethod"),n.getTarget("test",t)),a.xhr.timeout=a.getOpt("xhrTimeout"),a.xhr.withCredentials=a.getOpt("withCredentials");var s=a.getOpt("headers");"function"==typeof s&&(s=s(a.fileObj,a)),n.each(s,function(e,t){a.xhr.setRequestHeader(e,t)}),a.xhr.send(null)},a.preprocessFinished=function(){a.preprocessState=2,a.send()},a.send=function(){var e=a.getOpt("preprocess");if("function"==typeof e)switch(a.preprocessState){case 0:return a.preprocessState=1,void e(a);case 1:return}if(!a.getOpt("testChunks")||a.tested){a.xhr=new XMLHttpRequest,a.xhr.upload.addEventListener("progress",function(e){new Date-a.lastProgressCallback>1e3*a.getOpt("throttleProgressCallbacks")&&(a.callback("progress"),a.lastProgressCallback=new Date),a.loaded=e.loaded||0},!1),a.loaded=0,a.pendingRetry=!1,a.callback("progress");var t=function(e){var t=a.status();if("success"==t||"error"==t)a.callback(t,a.message()),a.resumableObj.uploadNextChunk();else{a.callback("retry",a.message()),a.abort(),a.retries++;var r=a.getOpt("chunkRetryInterval");void 0!==r?(a.pendingRetry=!0,setTimeout(a.send,r)):a.send()}};a.xhr.addEventListener("load",t,!1),a.xhr.addEventListener("error",t,!1),a.xhr.addEventListener("timeout",t,!1);var r=[["chunkNumberParameterName",a.offset+1],["chunkSizeParameterName",a.getOpt("chunkSize")],["currentChunkSizeParameterName",a.endByte-a.startByte],["totalSizeParameterName",a.fileObjSize],["typeParameterName",a.fileObjType],["identifierParameterName",a.fileObj.uniqueIdentifier],["fileNameParameterName",a.fileObj.fileName],["relativePathParameterName",a.fileObj.relativePath],["totalChunksParameterName",a.fileObj.chunks.length]].filter(function(e){return a.getOpt(e[0])}).reduce(function(e,t){return e[a.getOpt(t[0])]=t[1],e},{}),i=a.getOpt("query");"function"==typeof i&&(i=i(a.fileObj,a)),n.each(i,function(e,t){r[e]=t});var s=a.fileObj.file.slice?"slice":a.fileObj.file.mozSlice?"mozSlice":a.fileObj.file.webkitSlice?"webkitSlice":"slice",o=a.fileObj.file[s](a.startByte,a.endByte,a.getOpt("setChunkTypeFromFile")?a.fileObj.file.type:""),l=null,u=[],f=a.getOpt("parameterNamespace");if("octet"===a.getOpt("method"))l=o,n.each(r,function(e,t){u.push([encodeURIComponent(f+e),encodeURIComponent(t)].join("="))});else if(l=new FormData,n.each(r,function(e,t){l.append(f+e,t),u.push([encodeURIComponent(f+e),encodeURIComponent(t)].join("="))}),"blob"==a.getOpt("chunkFormat"))l.append(f+a.getOpt("fileParameterName"),o,a.fileObj.fileName);else if("base64"==a.getOpt("chunkFormat")){var c=new FileReader;c.onload=function(e){l.append(f+a.getOpt("fileParameterName"),c.result),a.xhr.send(l)},c.readAsDataURL(o)}var p=n.getTarget("upload",u),d=a.getOpt("uploadMethod");a.xhr.open(d,p),"octet"===a.getOpt("method")&&a.xhr.setRequestHeader("Content-Type","application/octet-stream"),a.xhr.timeout=a.getOpt("xhrTimeout"),a.xhr.withCredentials=a.getOpt("withCredentials");var m=a.getOpt("headers");"function"==typeof m&&(m=m(a.fileObj,a)),n.each(m,function(e,t){a.xhr.setRequestHeader(e,t)}),"blob"==a.getOpt("chunkFormat")&&a.xhr.send(l)}else a.test()},a.abort=function(){a.xhr&&a.xhr.abort(),a.xhr=null},a.status=function(){return a.pendingRetry?"uploading":a.markComplete?"success":a.xhr?a.xhr.readyState<4?"uploading":200==a.xhr.status||201==a.xhr.status?"success":n.contains(a.getOpt("permanentErrors"),a.xhr.status)||a.retries>=a.getOpt("maxChunkRetries")?"error":(a.abort(),"pending"):"pending"},a.message=function(){return a.xhr?a.xhr.responseText:""},a.progress=function(e){void 0===e&&(e=!1);var t=e?(a.endByte-a.startByte)/a.fileObjSize:1;if(a.pendingRetry)return 0;switch(a.xhr&&a.xhr.status||a.markComplete||(t*=.95),a.status()){case"success":case"error":return 1*t;case"pending":return 0*t;default:return a.loaded/(a.endByte-a.startByte)*t}},this}return r.uploadNextChunk=function(){var e=!1;if(r.getOpt("prioritizeFirstAndLastChunk")&&(n.each(r.files,function(t){return t.chunks.length&&"pending"==t.chunks[0].status()&&0===t.chunks[0].preprocessState?(t.chunks[0].send(),e=!0,!1):t.chunks.length>1&&"pending"==t.chunks[t.chunks.length-1].status()&&0===t.chunks[t.chunks.length-1].preprocessState?(t.chunks[t.chunks.length-1].send(),e=!0,!1):void 0}),e))return!0;if(n.each(r.files,function(t){if(e=t.upload())return!1}),e)return!0;var t=!1;return n.each(r.files,function(e){if(!e.isComplete())return t=!0,!1}),t||r.fire("complete"),!1},r.assignBrowse=function(e,t){void 0===e.length&&(e=[e]),n.each(e,function(e){var n;"INPUT"===e.tagName&&"file"===e.type?n=e:((n=document.createElement("input")).setAttribute("type","file"),n.style.display="none",e.addEventListener("click",function(){n.style.opacity=0,n.style.display="block",n.focus(),n.click(),n.style.display="none"},!1),e.appendChild(n));var i=r.getOpt("maxFiles");void 0===i||1!=i?n.setAttribute("multiple","multiple"):n.removeAttribute("multiple"),t?n.setAttribute("webkitdirectory","webkitdirectory"):n.removeAttribute("webkitdirectory");var a=r.getOpt("fileType");void 0!==a&&a.length>=1?n.setAttribute("accept",a.map(function(e){return(e=e.replace(/\s/g,"").toLowerCase()).match(/^[^.][^/]+$/)&&(e="."+e),e}).join(",")):n.removeAttribute("accept"),n.addEventListener("change",function(e){f(e.target.files,e),r.getOpt("clearInput")&&(e.target.value="")},!1)})},r.assignDrop=function(e){void 0===e.length&&(e=[e]),n.each(e,function(e){e.addEventListener("dragover",s,!1),e.addEventListener("dragenter",s,!1),e.addEventListener("dragleave",a,!1),e.addEventListener("drop",i,!1)})},r.unAssignDrop=function(e){void 0===e.length&&(e=[e]),n.each(e,function(e){e.removeEventListener("dragover",s),e.removeEventListener("dragenter",s),e.removeEventListener("dragleave",a),e.removeEventListener("drop",i)})},r.isUploading=function(){var e=!1;return n.each(r.files,function(t){if(t.isUploading())return e=!0,!1}),e},r.upload=function(){if(!r.isUploading()){r.fire("uploadStart");for(var e=1;e<=r.getOpt("simultaneousUploads");e++)r.uploadNextChunk()}},r.pause=function(){n.each(r.files,function(e){e.abort()}),r.fire("pause")},r.cancel=function(){r.fire("beforeCancel");for(var e=r.files.length-1;e>=0;e--)r.files[e].cancel();r.fire("cancel")},r.progress=function(){var e=0,t=0;return n.each(r.files,function(r){e+=r.progress()*r.size,t+=r.size}),t>0?e/t:0},r.addFile=function(e,t){f([e],t)},r.addFiles=function(e,t){f(e,t)},r.removeFile=function(e){for(var t=r.files.length-1;t>=0;t--)r.files[t]===e&&r.files.splice(t,1)},r.getFromUniqueIdentifier=function(e){var t=!1;return n.each(r.files,function(r){r.uniqueIdentifier==e&&(t=r)}),t},r.getSize=function(){var e=0;return n.each(r.files,function(t){e+=t.size}),e},r.handleDropEvent=function(e){i(e)},r.handleChangeEvent=function(e){f(e.target.files,e),e.target.value=""},r.updateQuery=function(e){r.opts.query=e},this};"undefined"!=typeof module?(module.exports=e,module.exports.Resumable=e):"function"==typeof define&&define.amd?define(function(){return e}):window.Resumable=e}();
/*!
 * An experimental shim to partially emulate onBeforeUnload on iOS.
 * Part of https://github.com/codedance/jquery.AreYouSure/
 *
 * Copyright (c) 2012-2014, Chris Dance and PaperCut Software http://www.papercut.com/
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Author:  chris.dance@papercut.com
 * Date:    19th May 2014
 */
$(function() {
    if (!navigator.userAgent.toLowerCase().match(/iphone|ipad|ipod|opera/)) {
      return;
    }
    $('a').on('click', function(evt) {
      var href = $(evt.target).closest('a').attr('href');
      if (href !== undefined && !(href.match(/^#/) || href.trim() == '')) {
        var response = $(window).triggerHandler('beforeunload', response);
        if (response && response != "") {
          var msg = response + "\n\n"
            + "Press OK to leave this page or Cancel to stay.";
          if (!confirm(msg)) {
            return false;
          }
        }
        window.location.href = href;
        return false;
       }
    });
  });
/*!
 * jQuery Plugin: Are-You-Sure (Dirty Form Detection)
 * https://github.com/codedance/jquery.AreYouSure/
 *
 * Copyright (c) 2012-2014, Chris Dance and PaperCut Software http://www.papercut.com/
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Author:  chris.dance@papercut.com
 * Version: 1.9.0
 * Date:    13th August 2014
 */
$.fn.areYouSure = function(options) {

  var settings = $.extend(
    {
      'message' : 'You have unsaved changes!',
      'dirtyClass' : 'dirty',
      'change' : null,
      'silent' : false,
      'addRemoveFieldsMarksDirty' : false,
      'fieldEvents' : 'change keyup propertychange input',
      'fieldSelector': "input:not([type=submit]),input:not([type=button])"
    }, options);

  var getValue = function($field) {
    if ($field.hasClass('ays-ignore')
        || $field.hasClass('aysIgnore')
        || $field.attr('data-ays-ignore')
        || $field.attr('name') === undefined) {
      return null;
    }

    if ($field.is(':disabled')) {
      return 'ays-disabled';
    }

    var val;
    var type = $field.attr('type');
    if ($field.is('select')) {
      type = 'select';
    }

    switch (type) {
      case 'checkbox':
      case 'radio':
        val = $field.is(':checked');
        break;
      case 'select':
        val = '';
        $field.find('option').each(function(o) {
          var $option = $(this);
          if ($option.is(':selected')) {
            val += $option.val();
          }
        });
        break;
      default:
        val = $field.val();
    }

    return val;
  };

  var storeOrigValue = function($field) {
    $field.data('ays-orig', getValue($field));
  };

  var checkForm = function(evt) {

    var isFieldDirty = function($field) {
      var origValue = $field.data('ays-orig');
      if (undefined === origValue) {
        return false;
      }
      return (getValue($field) != origValue);
    };

    var $form = ($(this).is('form'))
                  ? $(this)
                  : $(this).parents('form');

    // Test on the target first as it's the most likely to be dirty
    if (isFieldDirty($(evt.target))) {
      setDirtyStatus($form, true);
      return;
    }

    $fields = $form.find(settings.fieldSelector);

    if (settings.addRemoveFieldsMarksDirty) {
      // Check if field count has changed
      var origCount = $form.data("ays-orig-field-count");
      if (origCount != $fields.length) {
        setDirtyStatus($form, true);
        return;
      }
    }

    // Brute force - check each field
    var isDirty = false;
    $fields.each(function() {
      var $field = $(this);
      if (isFieldDirty($field)) {
        isDirty = true;
        return false; // break
      }
    });

    setDirtyStatus($form, isDirty);
  };

  var initForm = function($form) {
    var fields = $form.find(settings.fieldSelector);
    $(fields).each(function() { storeOrigValue($(this)); });
    $(fields).off(settings.fieldEvents, checkForm);
    $(fields).on(settings.fieldEvents, checkForm);
    $form.data("ays-orig-field-count", $(fields).length);
    setDirtyStatus($form, false);
  };

  var setDirtyStatus = function($form, isDirty) {
    var changed = isDirty != $form.hasClass(settings.dirtyClass);
    $form.toggleClass(settings.dirtyClass, isDirty);

    // Fire change event if required
    if (changed) {
      if (settings.change) settings.change.call($form, $form);

      if (isDirty) $form.trigger('dirty.areYouSure', [$form]);
      if (!isDirty) $form.trigger('clean.areYouSure', [$form]);
      $form.trigger('change.areYouSure', [$form]);
    }
  };

  var rescan = function() {
    var $form = $(this);
    var fields = $form.find(settings.fieldSelector);
    $(fields).each(function() {
      var $field = $(this);
      if (!$field.data('ays-orig')) {
        storeOrigValue($field);
        $field.on(settings.fieldEvents, checkForm);
      }
    });
    // Check for changes while we're here
    $form.trigger('checkform.areYouSure');
  };

  var reinitialize = function() {
    initForm($(this));
  }

  if (!settings.silent && !window.aysUnloadSet) {
    window.aysUnloadSet = true;
    window.onbeforeunload = () => {
      $dirtyForms = $("form").filter('.' + settings.dirtyClass);
      if ($dirtyForms.length == 0) {
        return;
      }
      // Prevent multiple prompts - seen on Chrome and IE
      if (navigator.userAgent.toLowerCase().match(/msie|chrome/)) {
        if (window.aysHasPrompted) {
          return;
        }
        window.aysHasPrompted = true;
        window.setTimeout(function() {window.aysHasPrompted = false;}, 900);
      }
      return settings.message;
    };
  }

  return this.each(function(elem) {
    if (!$(this).is('form')) {
      return;
    }
    var $form = $(this);

    $form.on('submit', function() {
      $form.removeClass(settings.dirtyClass);
    });
    $form.on('reset', function() { setDirtyStatus($form, false); });
    // Add a custom events
    $form.on('rescan.areYouSure', rescan);
    $form.on('reinitialize.areYouSure', reinitialize);
    $form.on('checkform.areYouSure', checkForm);
    initForm($form);
  });
};
/*! Sortable 1.15.1 - MIT | git://github.com/SortableJS/Sortable.git */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).Sortable=e()}(this,function(){"use strict";function e(e,t){var n,o=Object.keys(e);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(e),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,n)),o}function N(o){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?e(Object(i),!0).forEach(function(t){var e,n;e=o,t=i[n=t],n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(i)):e(Object(i)).forEach(function(t){Object.defineProperty(o,t,Object.getOwnPropertyDescriptor(i,t))})}return o}function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n,o=arguments[e];for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t}).apply(this,arguments)}function i(t,e){if(null==t)return{};var n,o=function(t,e){if(null==t)return{};for(var n,o={},i=Object.keys(t),r=0;r<i.length;r++)n=i[r],0<=e.indexOf(n)||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols)for(var i=Object.getOwnPropertySymbols(t),r=0;r<i.length;r++)n=i[r],0<=e.indexOf(n)||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n]);return o}function r(t){return function(t){if(Array.isArray(t))return l(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Map"===(n="Object"===n&&t.constructor?t.constructor.name:n)||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function t(t){if("undefined"!=typeof window&&window.navigator)return!!navigator.userAgent.match(t)}var y=t(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),w=t(/Edge/i),s=t(/firefox/i),u=t(/safari/i)&&!t(/chrome/i)&&!t(/android/i),n=t(/iP(ad|od|hone)/i),c=t(/chrome/i)&&t(/android/i),d={capture:!1,passive:!1};function h(t,e,n){t.addEventListener(e,n,!y&&d)}function p(t,e,n){t.removeEventListener(e,n,!y&&d)}function f(t,e){if(e&&(">"===e[0]&&(e=e.substring(1)),t))try{if(t.matches)return t.matches(e);if(t.msMatchesSelector)return t.msMatchesSelector(e);if(t.webkitMatchesSelector)return t.webkitMatchesSelector(e)}catch(t){return}}function P(t,e,n,o){if(t){n=n||document;do{if(null!=e&&(">"!==e[0]||t.parentNode===n)&&f(t,e)||o&&t===n)return t}while(t!==n&&(t=(i=t).host&&i!==document&&i.host.nodeType?i.host:i.parentNode))}var i;return null}var g,m=/\s+/g;function k(t,e,n){var o;t&&e&&(t.classList?t.classList[n?"add":"remove"](e):(o=(" "+t.className+" ").replace(m," ").replace(" "+e+" "," "),t.className=(o+(n?" "+e:"")).replace(m," ")))}function R(t,e,n){var o=t&&t.style;if(o){if(void 0===n)return document.defaultView&&document.defaultView.getComputedStyle?n=document.defaultView.getComputedStyle(t,""):t.currentStyle&&(n=t.currentStyle),void 0===e?n:n[e];o[e=!(e in o||-1!==e.indexOf("webkit"))?"-webkit-"+e:e]=n+("string"==typeof n?"":"px")}}function v(t,e){var n="";if("string"==typeof t)n=t;else do{var o=R(t,"transform")}while(o&&"none"!==o&&(n=o+" "+n),!e&&(t=t.parentNode));var i=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return i&&new i(n)}function b(t,e,n){if(t){var o=t.getElementsByTagName(e),i=0,r=o.length;if(n)for(;i<r;i++)n(o[i],i);return o}return[]}function O(){var t=document.scrollingElement;return t||document.documentElement}function X(t,e,n,o,i){if(t.getBoundingClientRect||t===window){var r,a,l,s,c,u,d=t!==window&&t.parentNode&&t!==O()?(a=(r=t.getBoundingClientRect()).top,l=r.left,s=r.bottom,c=r.right,u=r.height,r.width):(l=a=0,s=window.innerHeight,c=window.innerWidth,u=window.innerHeight,window.innerWidth);if((e||n)&&t!==window&&(i=i||t.parentNode,!y))do{if(i&&i.getBoundingClientRect&&("none"!==R(i,"transform")||n&&"static"!==R(i,"position"))){var h=i.getBoundingClientRect();a-=h.top+parseInt(R(i,"border-top-width")),l-=h.left+parseInt(R(i,"border-left-width")),s=a+r.height,c=l+r.width;break}}while(i=i.parentNode);return o&&t!==window&&(o=(e=v(i||t))&&e.a,t=e&&e.d,e&&(s=(a/=t)+(u/=t),c=(l/=o)+(d/=o))),{top:a,left:l,bottom:s,right:c,width:d,height:u}}}function Y(t){var e=X(t),n=parseInt(R(t,"padding-left")),o=parseInt(R(t,"padding-top")),i=parseInt(R(t,"padding-right")),r=parseInt(R(t,"padding-bottom"));return e.top+=o+parseInt(R(t,"border-top-width")),e.left+=n+parseInt(R(t,"border-left-width")),e.width=t.clientWidth-n-i,e.height=t.clientHeight-o-r,e.bottom=e.top+e.height,e.right=e.left+e.width,e}function B(t,e,n){for(var o=A(t,!0),i=X(t)[e];o;){var r=X(o)[n];if(!("top"===n||"left"===n?r<=i:i<=r))return o;if(o===O())break;o=A(o,!1)}return!1}function F(t,e,n,o){for(var i=0,r=0,a=t.children;r<a.length;){if("none"!==a[r].style.display&&a[r]!==Ft.ghost&&(o||a[r]!==Ft.dragged)&&P(a[r],n.draggable,t,!1)){if(i===e)return a[r];i++}r++}return null}function j(t,e){for(var n=t.lastElementChild;n&&(n===Ft.ghost||"none"===R(n,"display")||e&&!f(n,e));)n=n.previousElementSibling;return n||null}function H(t,e){var n=0;if(!t||!t.parentNode)return-1;for(;t=t.previousElementSibling;)"TEMPLATE"===t.nodeName.toUpperCase()||t===Ft.clone||e&&!f(t,e)||n++;return n}function E(t){var e=0,n=0,o=O();if(t)do{var i=v(t),r=i.a,i=i.d}while(e+=t.scrollLeft*r,n+=t.scrollTop*i,t!==o&&(t=t.parentNode));return[e,n]}function A(t,e){if(!t||!t.getBoundingClientRect)return O();var n=t,o=!1;do{if(n.clientWidth<n.scrollWidth||n.clientHeight<n.scrollHeight){var i=R(n);if(n.clientWidth<n.scrollWidth&&("auto"==i.overflowX||"scroll"==i.overflowX)||n.clientHeight<n.scrollHeight&&("auto"==i.overflowY||"scroll"==i.overflowY)){if(!n.getBoundingClientRect||n===document.body)return O();if(o||e)return n;o=!0}}}while(n=n.parentNode);return O()}function D(t,e){return Math.round(t.top)===Math.round(e.top)&&Math.round(t.left)===Math.round(e.left)&&Math.round(t.height)===Math.round(e.height)&&Math.round(t.width)===Math.round(e.width)}function S(e,n){return function(){var t;g||(1===(t=arguments).length?e.call(this,t[0]):e.apply(this,t),g=setTimeout(function(){g=void 0},n))}}function L(t,e,n){t.scrollLeft+=e,t.scrollTop+=n}function _(t){var e=window.Polymer,n=window.jQuery||window.Zepto;return e&&e.dom?e.dom(t).cloneNode(!0):n?n(t).clone(!0)[0]:t.cloneNode(!0)}function C(t,e){R(t,"position","absolute"),R(t,"top",e.top),R(t,"left",e.left),R(t,"width",e.width),R(t,"height",e.height)}function T(t){R(t,"position",""),R(t,"top",""),R(t,"left",""),R(t,"width",""),R(t,"height","")}var W="Sortable"+(new Date).getTime();function x(){var e,o=[];return{captureAnimationState:function(){o=[],this.options.animation&&[].slice.call(this.el.children).forEach(function(t){var e,n;"none"!==R(t,"display")&&t!==Ft.ghost&&(o.push({target:t,rect:X(t)}),e=N({},o[o.length-1].rect),!t.thisAnimationDuration||(n=v(t,!0))&&(e.top-=n.f,e.left-=n.e),t.fromRect=e)})},addAnimationState:function(t){o.push(t)},removeAnimationState:function(t){o.splice(function(t,e){for(var n in t)if(t.hasOwnProperty(n))for(var o in e)if(e.hasOwnProperty(o)&&e[o]===t[n][o])return Number(n);return-1}(o,{target:t}),1)},animateAll:function(t){var c=this;if(!this.options.animation)return clearTimeout(e),void("function"==typeof t&&t());var u=!1,d=0;o.forEach(function(t){var e=0,n=t.target,o=n.fromRect,i=X(n),r=n.prevFromRect,a=n.prevToRect,l=t.rect,s=v(n,!0);s&&(i.top-=s.f,i.left-=s.e),n.toRect=i,n.thisAnimationDuration&&D(r,i)&&!D(o,i)&&(l.top-i.top)/(l.left-i.left)==(o.top-i.top)/(o.left-i.left)&&(t=l,s=r,r=a,a=c.options,e=Math.sqrt(Math.pow(s.top-t.top,2)+Math.pow(s.left-t.left,2))/Math.sqrt(Math.pow(s.top-r.top,2)+Math.pow(s.left-r.left,2))*a.animation),D(i,o)||(n.prevFromRect=o,n.prevToRect=i,e=e||c.options.animation,c.animate(n,l,i,e)),e&&(u=!0,d=Math.max(d,e),clearTimeout(n.animationResetTimer),n.animationResetTimer=setTimeout(function(){n.animationTime=0,n.prevFromRect=null,n.fromRect=null,n.prevToRect=null,n.thisAnimationDuration=null},e),n.thisAnimationDuration=e)}),clearTimeout(e),u?e=setTimeout(function(){"function"==typeof t&&t()},d):"function"==typeof t&&t(),o=[]},animate:function(t,e,n,o){var i,r;o&&(R(t,"transition",""),R(t,"transform",""),i=(r=v(this.el))&&r.a,r=r&&r.d,i=(e.left-n.left)/(i||1),r=(e.top-n.top)/(r||1),t.animatingX=!!i,t.animatingY=!!r,R(t,"transform","translate3d("+i+"px,"+r+"px,0)"),this.forRepaintDummy=t.offsetWidth,R(t,"transition","transform "+o+"ms"+(this.options.easing?" "+this.options.easing:"")),R(t,"transform","translate3d(0,0,0)"),"number"==typeof t.animated&&clearTimeout(t.animated),t.animated=setTimeout(function(){R(t,"transition",""),R(t,"transform",""),t.animated=!1,t.animatingX=!1,t.animatingY=!1},o))}}}var M=[],I={initializeByDefault:!0},K={mount:function(e){for(var t in I)!I.hasOwnProperty(t)||t in e||(e[t]=I[t]);M.forEach(function(t){if(t.pluginName===e.pluginName)throw"Sortable: Cannot mount plugin ".concat(e.pluginName," more than once")}),M.push(e)},pluginEvent:function(e,n,o){var t=this;this.eventCanceled=!1,o.cancel=function(){t.eventCanceled=!0};var i=e+"Global";M.forEach(function(t){n[t.pluginName]&&(n[t.pluginName][i]&&n[t.pluginName][i](N({sortable:n},o)),n.options[t.pluginName]&&n[t.pluginName][e]&&n[t.pluginName][e](N({sortable:n},o)))})},initializePlugins:function(n,o,i,t){for(var e in M.forEach(function(t){var e=t.pluginName;(n.options[e]||t.initializeByDefault)&&((t=new t(n,o,n.options)).sortable=n,t.options=n.options,n[e]=t,a(i,t.defaults))}),n.options){var r;n.options.hasOwnProperty(e)&&(void 0!==(r=this.modifyOption(n,e,n.options[e]))&&(n.options[e]=r))}},getEventProperties:function(e,n){var o={};return M.forEach(function(t){"function"==typeof t.eventProperties&&a(o,t.eventProperties.call(n[t.pluginName],e))}),o},modifyOption:function(e,n,o){var i;return M.forEach(function(t){e[t.pluginName]&&t.optionListeners&&"function"==typeof t.optionListeners[n]&&(i=t.optionListeners[n].call(e[t.pluginName],o))}),i}};function z(t){var e=t.sortable,n=t.rootEl,o=t.name,i=t.targetEl,r=t.cloneEl,a=t.toEl,l=t.fromEl,s=t.oldIndex,c=t.newIndex,u=t.oldDraggableIndex,d=t.newDraggableIndex,h=t.originalEvent,p=t.putSortable,f=t.extraEventProperties;if(e=e||n&&n[W]){var g,m=e.options,t="on"+o.charAt(0).toUpperCase()+o.substr(1);!window.CustomEvent||y||w?(g=document.createEvent("Event")).initEvent(o,!0,!0):g=new CustomEvent(o,{bubbles:!0,cancelable:!0}),g.to=a||n,g.from=l||n,g.item=i||n,g.clone=r,g.oldIndex=s,g.newIndex=c,g.oldDraggableIndex=u,g.newDraggableIndex=d,g.originalEvent=h,g.pullMode=p?p.lastPutMode:void 0;var v,b=N(N({},f),K.getEventProperties(o,e));for(v in b)g[v]=b[v];n&&n.dispatchEvent(g),m[t]&&m[t].call(e,g)}}function G(t,e){var n=(o=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{}).evt,o=i(o,U);K.pluginEvent.bind(Ft)(t,e,N({dragEl:V,parentEl:Z,ghostEl:$,rootEl:Q,nextEl:J,lastDownEl:tt,cloneEl:et,cloneHidden:nt,dragStarted:gt,putSortable:st,activeSortable:Ft.active,originalEvent:n,oldIndex:ot,oldDraggableIndex:rt,newIndex:it,newDraggableIndex:at,hideGhostForTarget:Rt,unhideGhostForTarget:Xt,cloneNowHidden:function(){nt=!0},cloneNowShown:function(){nt=!1},dispatchSortableEvent:function(t){q({sortable:e,name:t,originalEvent:n})}},o))}var U=["evt"];function q(t){z(N({putSortable:st,cloneEl:et,targetEl:V,rootEl:Q,oldIndex:ot,oldDraggableIndex:rt,newIndex:it,newDraggableIndex:at},t))}var V,Z,$,Q,J,tt,et,nt,ot,it,rt,at,lt,st,ct,ut,dt,ht,pt,ft,gt,mt,vt,bt,yt,wt=!1,Et=!1,Dt=[],St=!1,_t=!1,Ct=[],Tt=!1,xt=[],Ot="undefined"!=typeof document,At=n,Mt=w||y?"cssFloat":"float",It=Ot&&!c&&!n&&"draggable"in document.createElement("div"),Nt=function(){if(Ot){if(y)return!1;var t=document.createElement("x");return t.style.cssText="pointer-events:auto","auto"===t.style.pointerEvents}}(),Pt=function(t,e){var n=R(t),o=parseInt(n.width)-parseInt(n.paddingLeft)-parseInt(n.paddingRight)-parseInt(n.borderLeftWidth)-parseInt(n.borderRightWidth),i=F(t,0,e),r=F(t,1,e),a=i&&R(i),l=r&&R(r),s=a&&parseInt(a.marginLeft)+parseInt(a.marginRight)+X(i).width,t=l&&parseInt(l.marginLeft)+parseInt(l.marginRight)+X(r).width;if("flex"===n.display)return"column"===n.flexDirection||"column-reverse"===n.flexDirection?"vertical":"horizontal";if("grid"===n.display)return n.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(i&&a.float&&"none"!==a.float){e="left"===a.float?"left":"right";return!r||"both"!==l.clear&&l.clear!==e?"horizontal":"vertical"}return i&&("block"===a.display||"flex"===a.display||"table"===a.display||"grid"===a.display||o<=s&&"none"===n[Mt]||r&&"none"===n[Mt]&&o<s+t)?"vertical":"horizontal"},kt=function(t){function l(r,a){return function(t,e,n,o){var i=t.options.group.name&&e.options.group.name&&t.options.group.name===e.options.group.name;if(null==r&&(a||i))return!0;if(null==r||!1===r)return!1;if(a&&"clone"===r)return r;if("function"==typeof r)return l(r(t,e,n,o),a)(t,e,n,o);e=(a?t:e).options.group.name;return!0===r||"string"==typeof r&&r===e||r.join&&-1<r.indexOf(e)}}var e={},n=t.group;n&&"object"==o(n)||(n={name:n}),e.name=n.name,e.checkPull=l(n.pull,!0),e.checkPut=l(n.put),e.revertClone=n.revertClone,t.group=e},Rt=function(){!Nt&&$&&R($,"display","none")},Xt=function(){!Nt&&$&&R($,"display","")};Ot&&!c&&document.addEventListener("click",function(t){if(Et)return t.preventDefault(),t.stopPropagation&&t.stopPropagation(),t.stopImmediatePropagation&&t.stopImmediatePropagation(),Et=!1},!0);function Yt(t){if(V){t=t.touches?t.touches[0]:t;var e=(i=t.clientX,r=t.clientY,Dt.some(function(t){var e=t[W].options.emptyInsertThreshold;if(e&&!j(t)){var n=X(t),o=i>=n.left-e&&i<=n.right+e,e=r>=n.top-e&&r<=n.bottom+e;return o&&e?a=t:void 0}}),a);if(e){var n,o={};for(n in t)t.hasOwnProperty(n)&&(o[n]=t[n]);o.target=o.rootEl=e,o.preventDefault=void 0,o.stopPropagation=void 0,e[W]._onDragOver(o)}}var i,r,a}function Bt(t){V&&V.parentNode[W]._isOutsideThisEl(t.target)}function Ft(t,e){if(!t||!t.nodeType||1!==t.nodeType)throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));this.el=t,this.options=e=a({},e),t[W]=this;var n,o,i={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(t.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return Pt(t,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(t,e){t.setData("Text",e.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:!1!==Ft.supportPointer&&"PointerEvent"in window&&!u,emptyInsertThreshold:5};for(n in K.initializePlugins(this,t,i),i)n in e||(e[n]=i[n]);for(o in kt(e),this)"_"===o.charAt(0)&&"function"==typeof this[o]&&(this[o]=this[o].bind(this));this.nativeDraggable=!e.forceFallback&&It,this.nativeDraggable&&(this.options.touchStartThreshold=1),e.supportPointer?h(t,"pointerdown",this._onTapStart):(h(t,"mousedown",this._onTapStart),h(t,"touchstart",this._onTapStart)),this.nativeDraggable&&(h(t,"dragover",this),h(t,"dragenter",this)),Dt.push(this.el),e.store&&e.store.get&&this.sort(e.store.get(this)||[]),a(this,x())}function jt(t,e,n,o,i,r,a,l){var s,c,u=t[W],d=u.options.onMove;return!window.CustomEvent||y||w?(s=document.createEvent("Event")).initEvent("move",!0,!0):s=new CustomEvent("move",{bubbles:!0,cancelable:!0}),s.to=e,s.from=t,s.dragged=n,s.draggedRect=o,s.related=i||e,s.relatedRect=r||X(e),s.willInsertAfter=l,s.originalEvent=a,t.dispatchEvent(s),c=d?d.call(u,s,a):c}function Ht(t){t.draggable=!1}function Lt(){Tt=!1}function Wt(t){return setTimeout(t,0)}function Kt(t){return clearTimeout(t)}Ft.prototype={constructor:Ft,_isOutsideThisEl:function(t){this.el.contains(t)||t===this.el||(mt=null)},_getDirection:function(t,e){return"function"==typeof this.options.direction?this.options.direction.call(this,t,e,V):this.options.direction},_onTapStart:function(e){if(e.cancelable){var n=this,o=this.el,t=this.options,i=t.preventOnFilter,r=e.type,a=e.touches&&e.touches[0]||e.pointerType&&"touch"===e.pointerType&&e,l=(a||e).target,s=e.target.shadowRoot&&(e.path&&e.path[0]||e.composedPath&&e.composedPath()[0])||l,c=t.filter;if(!function(t){xt.length=0;var e=t.getElementsByTagName("input"),n=e.length;for(;n--;){var o=e[n];o.checked&&xt.push(o)}}(o),!V&&!(/mousedown|pointerdown/.test(r)&&0!==e.button||t.disabled)&&!s.isContentEditable&&(this.nativeDraggable||!u||!l||"SELECT"!==l.tagName.toUpperCase())&&!((l=P(l,t.draggable,o,!1))&&l.animated||tt===l)){if(ot=H(l),rt=H(l,t.draggable),"function"==typeof c){if(c.call(this,e,l,this))return q({sortable:n,rootEl:s,name:"filter",targetEl:l,toEl:o,fromEl:o}),G("filter",n,{evt:e}),void(i&&e.cancelable&&e.preventDefault())}else if(c=c&&c.split(",").some(function(t){if(t=P(s,t.trim(),o,!1))return q({sortable:n,rootEl:t,name:"filter",targetEl:l,fromEl:o,toEl:o}),G("filter",n,{evt:e}),!0}))return void(i&&e.cancelable&&e.preventDefault());t.handle&&!P(s,t.handle,o,!1)||this._prepareDragStart(e,a,l)}}},_prepareDragStart:function(t,e,n){var o,i=this,r=i.el,a=i.options,l=r.ownerDocument;n&&!V&&n.parentNode===r&&(o=X(n),Q=r,Z=(V=n).parentNode,J=V.nextSibling,tt=n,lt=a.group,ct={target:Ft.dragged=V,clientX:(e||t).clientX,clientY:(e||t).clientY},pt=ct.clientX-o.left,ft=ct.clientY-o.top,this._lastX=(e||t).clientX,this._lastY=(e||t).clientY,V.style["will-change"]="all",o=function(){G("delayEnded",i,{evt:t}),Ft.eventCanceled?i._onDrop():(i._disableDelayedDragEvents(),!s&&i.nativeDraggable&&(V.draggable=!0),i._triggerDragStart(t,e),q({sortable:i,name:"choose",originalEvent:t}),k(V,a.chosenClass,!0))},a.ignore.split(",").forEach(function(t){b(V,t.trim(),Ht)}),h(l,"dragover",Yt),h(l,"mousemove",Yt),h(l,"touchmove",Yt),h(l,"mouseup",i._onDrop),h(l,"touchend",i._onDrop),h(l,"touchcancel",i._onDrop),s&&this.nativeDraggable&&(this.options.touchStartThreshold=4,V.draggable=!0),G("delayStart",this,{evt:t}),!a.delay||a.delayOnTouchOnly&&!e||this.nativeDraggable&&(w||y)?o():Ft.eventCanceled?this._onDrop():(h(l,"mouseup",i._disableDelayedDrag),h(l,"touchend",i._disableDelayedDrag),h(l,"touchcancel",i._disableDelayedDrag),h(l,"mousemove",i._delayedDragTouchMoveHandler),h(l,"touchmove",i._delayedDragTouchMoveHandler),a.supportPointer&&h(l,"pointermove",i._delayedDragTouchMoveHandler),i._dragStartTimer=setTimeout(o,a.delay)))},_delayedDragTouchMoveHandler:function(t){t=t.touches?t.touches[0]:t;Math.max(Math.abs(t.clientX-this._lastX),Math.abs(t.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){V&&Ht(V),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var t=this.el.ownerDocument;p(t,"mouseup",this._disableDelayedDrag),p(t,"touchend",this._disableDelayedDrag),p(t,"touchcancel",this._disableDelayedDrag),p(t,"mousemove",this._delayedDragTouchMoveHandler),p(t,"touchmove",this._delayedDragTouchMoveHandler),p(t,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(t,e){e=e||"touch"==t.pointerType&&t,!this.nativeDraggable||e?this.options.supportPointer?h(document,"pointermove",this._onTouchMove):h(document,e?"touchmove":"mousemove",this._onTouchMove):(h(V,"dragend",this),h(Q,"dragstart",this._onDragStart));try{document.selection?Wt(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch(t){}},_dragStarted:function(t,e){var n;wt=!1,Q&&V?(G("dragStarted",this,{evt:e}),this.nativeDraggable&&h(document,"dragover",Bt),n=this.options,t||k(V,n.dragClass,!1),k(V,n.ghostClass,!0),Ft.active=this,t&&this._appendGhost(),q({sortable:this,name:"start",originalEvent:e})):this._nulling()},_emulateDragOver:function(){if(ut){this._lastX=ut.clientX,this._lastY=ut.clientY,Rt();for(var t=document.elementFromPoint(ut.clientX,ut.clientY),e=t;t&&t.shadowRoot&&(t=t.shadowRoot.elementFromPoint(ut.clientX,ut.clientY))!==e;)e=t;if(V.parentNode[W]._isOutsideThisEl(t),e)do{if(e[W])if(e[W]._onDragOver({clientX:ut.clientX,clientY:ut.clientY,target:t,rootEl:e})&&!this.options.dragoverBubble)break}while(e=(t=e).parentNode);Xt()}},_onTouchMove:function(t){if(ct){var e=this.options,n=e.fallbackTolerance,o=e.fallbackOffset,i=t.touches?t.touches[0]:t,r=$&&v($,!0),a=$&&r&&r.a,l=$&&r&&r.d,e=At&&yt&&E(yt),a=(i.clientX-ct.clientX+o.x)/(a||1)+(e?e[0]-Ct[0]:0)/(a||1),l=(i.clientY-ct.clientY+o.y)/(l||1)+(e?e[1]-Ct[1]:0)/(l||1);if(!Ft.active&&!wt){if(n&&Math.max(Math.abs(i.clientX-this._lastX),Math.abs(i.clientY-this._lastY))<n)return;this._onDragStart(t,!0)}$&&(r?(r.e+=a-(dt||0),r.f+=l-(ht||0)):r={a:1,b:0,c:0,d:1,e:a,f:l},r="matrix(".concat(r.a,",").concat(r.b,",").concat(r.c,",").concat(r.d,",").concat(r.e,",").concat(r.f,")"),R($,"webkitTransform",r),R($,"mozTransform",r),R($,"msTransform",r),R($,"transform",r),dt=a,ht=l,ut=i),t.cancelable&&t.preventDefault()}},_appendGhost:function(){if(!$){var t=this.options.fallbackOnBody?document.body:Q,e=X(V,!0,At,!0,t),n=this.options;if(At){for(yt=t;"static"===R(yt,"position")&&"none"===R(yt,"transform")&&yt!==document;)yt=yt.parentNode;yt!==document.body&&yt!==document.documentElement?(yt===document&&(yt=O()),e.top+=yt.scrollTop,e.left+=yt.scrollLeft):yt=O(),Ct=E(yt)}k($=V.cloneNode(!0),n.ghostClass,!1),k($,n.fallbackClass,!0),k($,n.dragClass,!0),R($,"transition",""),R($,"transform",""),R($,"box-sizing","border-box"),R($,"margin",0),R($,"top",e.top),R($,"left",e.left),R($,"width",e.width),R($,"height",e.height),R($,"opacity","0.8"),R($,"position",At?"absolute":"fixed"),R($,"zIndex","100000"),R($,"pointerEvents","none"),Ft.ghost=$,t.appendChild($),R($,"transform-origin",pt/parseInt($.style.width)*100+"% "+ft/parseInt($.style.height)*100+"%")}},_onDragStart:function(t,e){var n=this,o=t.dataTransfer,i=n.options;G("dragStart",this,{evt:t}),Ft.eventCanceled?this._onDrop():(G("setupClone",this),Ft.eventCanceled||((et=_(V)).removeAttribute("id"),et.draggable=!1,et.style["will-change"]="",this._hideClone(),k(et,this.options.chosenClass,!1),Ft.clone=et),n.cloneId=Wt(function(){G("clone",n),Ft.eventCanceled||(n.options.removeCloneOnHide||Q.insertBefore(et,V),n._hideClone(),q({sortable:n,name:"clone"}))}),e||k(V,i.dragClass,!0),e?(Et=!0,n._loopId=setInterval(n._emulateDragOver,50)):(p(document,"mouseup",n._onDrop),p(document,"touchend",n._onDrop),p(document,"touchcancel",n._onDrop),o&&(o.effectAllowed="move",i.setData&&i.setData.call(n,o,V)),h(document,"drop",n),R(V,"transform","translateZ(0)")),wt=!0,n._dragStartId=Wt(n._dragStarted.bind(n,e,t)),h(document,"selectstart",n),gt=!0,u&&R(document.body,"user-select","none"))},_onDragOver:function(n){var o,i,r,t,e,a=this.el,l=n.target,s=this.options,c=s.group,u=Ft.active,d=lt===c,h=s.sort,p=st||u,f=this,g=!1;if(!Tt){if(void 0!==n.preventDefault&&n.cancelable&&n.preventDefault(),l=P(l,s.draggable,a,!0),O("dragOver"),Ft.eventCanceled)return g;if(V.contains(n.target)||l.animated&&l.animatingX&&l.animatingY||f._ignoreWhileAnimating===l)return M(!1);if(Et=!1,u&&!s.disabled&&(d?h||(i=Z!==Q):st===this||(this.lastPutMode=lt.checkPull(this,u,V,n))&&c.checkPut(this,u,V,n))){if(r="vertical"===this._getDirection(n,l),o=X(V),O("dragOverValid"),Ft.eventCanceled)return g;if(i)return Z=Q,A(),this._hideClone(),O("revert"),Ft.eventCanceled||(J?Q.insertBefore(V,J):Q.appendChild(V)),M(!0);var m=j(a,s.draggable);if(m&&(S=n,c=r,x=X(j((D=this).el,D.options.draggable)),D=Y(D.el),!(c?S.clientX>D.right+10||S.clientY>x.bottom&&S.clientX>x.left:S.clientY>D.bottom+10||S.clientX>x.right&&S.clientY>x.top)||m.animated)){if(m&&(t=n,e=r,C=X(F((_=this).el,0,_.options,!0)),_=Y(_.el),e?t.clientX<_.left-10||t.clientY<C.top&&t.clientX<C.right:t.clientY<_.top-10||t.clientY<C.bottom&&t.clientX<C.left)){var v=F(a,0,s,!0);if(v===V)return M(!1);if(E=X(l=v),!1!==jt(Q,a,V,o,l,E,n,!1))return A(),a.insertBefore(V,v),Z=a,I(),M(!0)}else if(l.parentNode===a){var b,y,w,E=X(l),D=V.parentNode!==a,S=(S=V.animated&&V.toRect||o,x=l.animated&&l.toRect||E,_=(e=r)?S.left:S.top,t=e?S.right:S.bottom,C=e?S.width:S.height,v=e?x.left:x.top,S=e?x.right:x.bottom,x=e?x.width:x.height,!(_===v||t===S||_+C/2===v+x/2)),_=r?"top":"left",C=B(l,"top","top")||B(V,"top","top"),v=C?C.scrollTop:void 0;if(mt!==l&&(y=E[_],St=!1,_t=!S&&s.invertSwap||D),0!==(b=function(t,e,n,o,i,r,a,l){var s=o?t.clientY:t.clientX,c=o?n.height:n.width,t=o?n.top:n.left,o=o?n.bottom:n.right,n=!1;if(!a)if(l&&bt<c*i){if(St=!St&&(1===vt?t+c*r/2<s:s<o-c*r/2)?!0:St)n=!0;else if(1===vt?s<t+bt:o-bt<s)return-vt}else if(t+c*(1-i)/2<s&&s<o-c*(1-i)/2)return function(t){return H(V)<H(t)?1:-1}(e);if((n=n||a)&&(s<t+c*r/2||o-c*r/2<s))return t+c/2<s?1:-1;return 0}(n,l,E,r,S?1:s.swapThreshold,null==s.invertedSwapThreshold?s.swapThreshold:s.invertedSwapThreshold,_t,mt===l)))for(var T=H(V);(w=Z.children[T-=b])&&("none"===R(w,"display")||w===$););if(0===b||w===l)return M(!1);vt=b;var x=(mt=l).nextElementSibling,D=!1,S=jt(Q,a,V,o,l,E,n,D=1===b);if(!1!==S)return 1!==S&&-1!==S||(D=1===S),Tt=!0,setTimeout(Lt,30),A(),D&&!x?a.appendChild(V):l.parentNode.insertBefore(V,D?x:l),C&&L(C,0,v-C.scrollTop),Z=V.parentNode,void 0===y||_t||(bt=Math.abs(y-X(l)[_])),I(),M(!0)}}else{if(m===V)return M(!1);if((l=m&&a===n.target?m:l)&&(E=X(l)),!1!==jt(Q,a,V,o,l,E,n,!!l))return A(),m&&m.nextSibling?a.insertBefore(V,m.nextSibling):a.appendChild(V),Z=a,I(),M(!0)}if(a.contains(V))return M(!1)}return!1}function O(t,e){G(t,f,N({evt:n,isOwner:d,axis:r?"vertical":"horizontal",revert:i,dragRect:o,targetRect:E,canSort:h,fromSortable:p,target:l,completed:M,onMove:function(t,e){return jt(Q,a,V,o,t,X(t),n,e)},changed:I},e))}function A(){O("dragOverAnimationCapture"),f.captureAnimationState(),f!==p&&p.captureAnimationState()}function M(t){return O("dragOverCompleted",{insertion:t}),t&&(d?u._hideClone():u._showClone(f),f!==p&&(k(V,(st||u).options.ghostClass,!1),k(V,s.ghostClass,!0)),st!==f&&f!==Ft.active?st=f:f===Ft.active&&st&&(st=null),p===f&&(f._ignoreWhileAnimating=l),f.animateAll(function(){O("dragOverAnimationComplete"),f._ignoreWhileAnimating=null}),f!==p&&(p.animateAll(),p._ignoreWhileAnimating=null)),(l===V&&!V.animated||l===a&&!l.animated)&&(mt=null),s.dragoverBubble||n.rootEl||l===document||(V.parentNode[W]._isOutsideThisEl(n.target),t||Yt(n)),!s.dragoverBubble&&n.stopPropagation&&n.stopPropagation(),g=!0}function I(){it=H(V),at=H(V,s.draggable),q({sortable:f,name:"change",toEl:a,newIndex:it,newDraggableIndex:at,originalEvent:n})}},_ignoreWhileAnimating:null,_offMoveEvents:function(){p(document,"mousemove",this._onTouchMove),p(document,"touchmove",this._onTouchMove),p(document,"pointermove",this._onTouchMove),p(document,"dragover",Yt),p(document,"mousemove",Yt),p(document,"touchmove",Yt)},_offUpEvents:function(){var t=this.el.ownerDocument;p(t,"mouseup",this._onDrop),p(t,"touchend",this._onDrop),p(t,"pointerup",this._onDrop),p(t,"touchcancel",this._onDrop),p(document,"selectstart",this)},_onDrop:function(t){var e=this.el,n=this.options;it=H(V),at=H(V,n.draggable),G("drop",this,{evt:t}),Z=V&&V.parentNode,it=H(V),at=H(V,n.draggable),Ft.eventCanceled||(St=_t=wt=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),Kt(this.cloneId),Kt(this._dragStartId),this.nativeDraggable&&(p(document,"drop",this),p(e,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),u&&R(document.body,"user-select",""),R(V,"transform",""),t&&(gt&&(t.cancelable&&t.preventDefault(),n.dropBubble||t.stopPropagation()),$&&$.parentNode&&$.parentNode.removeChild($),(Q===Z||st&&"clone"!==st.lastPutMode)&&et&&et.parentNode&&et.parentNode.removeChild(et),V&&(this.nativeDraggable&&p(V,"dragend",this),Ht(V),V.style["will-change"]="",gt&&!wt&&k(V,(st||this).options.ghostClass,!1),k(V,this.options.chosenClass,!1),q({sortable:this,name:"unchoose",toEl:Z,newIndex:null,newDraggableIndex:null,originalEvent:t}),Q!==Z?(0<=it&&(q({rootEl:Z,name:"add",toEl:Z,fromEl:Q,originalEvent:t}),q({sortable:this,name:"remove",toEl:Z,originalEvent:t}),q({rootEl:Z,name:"sort",toEl:Z,fromEl:Q,originalEvent:t}),q({sortable:this,name:"sort",toEl:Z,originalEvent:t})),st&&st.save()):it!==ot&&0<=it&&(q({sortable:this,name:"update",toEl:Z,originalEvent:t}),q({sortable:this,name:"sort",toEl:Z,originalEvent:t})),Ft.active&&(null!=it&&-1!==it||(it=ot,at=rt),q({sortable:this,name:"end",toEl:Z,originalEvent:t}),this.save())))),this._nulling()},_nulling:function(){G("nulling",this),Q=V=Z=$=J=et=tt=nt=ct=ut=gt=it=at=ot=rt=mt=vt=st=lt=Ft.dragged=Ft.ghost=Ft.clone=Ft.active=null,xt.forEach(function(t){t.checked=!0}),xt.length=dt=ht=0},handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t);break;case"dragenter":case"dragover":V&&(this._onDragOver(t),function(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move");t.cancelable&&t.preventDefault()}(t));break;case"selectstart":t.preventDefault()}},toArray:function(){for(var t,e=[],n=this.el.children,o=0,i=n.length,r=this.options;o<i;o++)P(t=n[o],r.draggable,this.el,!1)&&e.push(t.getAttribute(r.dataIdAttr)||function(t){var e=t.tagName+t.className+t.src+t.href+t.textContent,n=e.length,o=0;for(;n--;)o+=e.charCodeAt(n);return o.toString(36)}(t));return e},sort:function(t,e){var n={},o=this.el;this.toArray().forEach(function(t,e){e=o.children[e];P(e,this.options.draggable,o,!1)&&(n[t]=e)},this),e&&this.captureAnimationState(),t.forEach(function(t){n[t]&&(o.removeChild(n[t]),o.appendChild(n[t]))}),e&&this.animateAll()},save:function(){var t=this.options.store;t&&t.set&&t.set(this)},closest:function(t,e){return P(t,e||this.options.draggable,this.el,!1)},option:function(t,e){var n=this.options;if(void 0===e)return n[t];var o=K.modifyOption(this,t,e);n[t]=void 0!==o?o:e,"group"===t&&kt(n)},destroy:function(){G("destroy",this);var t=this.el;t[W]=null,p(t,"mousedown",this._onTapStart),p(t,"touchstart",this._onTapStart),p(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(p(t,"dragover",this),p(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),function(t){t.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),Dt.splice(Dt.indexOf(this.el),1),this.el=t=null},_hideClone:function(){nt||(G("hideClone",this),Ft.eventCanceled||(R(et,"display","none"),this.options.removeCloneOnHide&&et.parentNode&&et.parentNode.removeChild(et),nt=!0))},_showClone:function(t){"clone"===t.lastPutMode?nt&&(G("showClone",this),Ft.eventCanceled||(V.parentNode!=Q||this.options.group.revertClone?J?Q.insertBefore(et,J):Q.appendChild(et):Q.insertBefore(et,V),this.options.group.revertClone&&this.animate(V,et),R(et,"display",""),nt=!1)):this._hideClone()}},Ot&&h(document,"touchmove",function(t){(Ft.active||wt)&&t.cancelable&&t.preventDefault()}),Ft.utils={on:h,off:p,css:R,find:b,is:function(t,e){return!!P(t,e,t,!1)},extend:function(t,e){if(t&&e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t},throttle:S,closest:P,toggleClass:k,clone:_,index:H,nextTick:Wt,cancelNextTick:Kt,detectDirection:Pt,getChild:F},Ft.get=function(t){return t[W]},Ft.mount=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];(e=e[0].constructor===Array?e[0]:e).forEach(function(t){if(!t.prototype||!t.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(t));t.utils&&(Ft.utils=N(N({},Ft.utils),t.utils)),K.mount(t)})},Ft.create=function(t,e){return new Ft(t,e)};var zt,Gt,Ut,qt,Vt,Zt,$t=[],Qt=!(Ft.version="1.15.1");function Jt(){$t.forEach(function(t){clearInterval(t.pid)}),$t=[]}function te(){clearInterval(Zt)}var ee,ne=S(function(n,t,e,o){if(t.scroll){var i,r=(n.touches?n.touches[0]:n).clientX,a=(n.touches?n.touches[0]:n).clientY,l=t.scrollSensitivity,s=t.scrollSpeed,c=O(),u=!1;Gt!==e&&(Gt=e,Jt(),zt=t.scroll,i=t.scrollFn,!0===zt&&(zt=A(e,!0)));var d=0,h=zt;do{var p=h,f=X(p),g=f.top,m=f.bottom,v=f.left,b=f.right,y=f.width,w=f.height,E=void 0,D=void 0,S=p.scrollWidth,_=p.scrollHeight,C=R(p),T=p.scrollLeft,f=p.scrollTop,D=p===c?(E=y<S&&("auto"===C.overflowX||"scroll"===C.overflowX||"visible"===C.overflowX),w<_&&("auto"===C.overflowY||"scroll"===C.overflowY||"visible"===C.overflowY)):(E=y<S&&("auto"===C.overflowX||"scroll"===C.overflowX),w<_&&("auto"===C.overflowY||"scroll"===C.overflowY)),T=E&&(Math.abs(b-r)<=l&&T+y<S)-(Math.abs(v-r)<=l&&!!T),f=D&&(Math.abs(m-a)<=l&&f+w<_)-(Math.abs(g-a)<=l&&!!f);if(!$t[d])for(var x=0;x<=d;x++)$t[x]||($t[x]={});$t[d].vx==T&&$t[d].vy==f&&$t[d].el===p||($t[d].el=p,$t[d].vx=T,$t[d].vy=f,clearInterval($t[d].pid),0==T&&0==f||(u=!0,$t[d].pid=setInterval(function(){o&&0===this.layer&&Ft.active._onTouchMove(Vt);var t=$t[this.layer].vy?$t[this.layer].vy*s:0,e=$t[this.layer].vx?$t[this.layer].vx*s:0;"function"==typeof i&&"continue"!==i.call(Ft.dragged.parentNode[W],e,t,n,Vt,$t[this.layer].el)||L($t[this.layer].el,e,t)}.bind({layer:d}),24))),d++}while(t.bubbleScroll&&h!==c&&(h=A(h,!1)));Qt=u}},30),c=function(t){var e=t.originalEvent,n=t.putSortable,o=t.dragEl,i=t.activeSortable,r=t.dispatchSortableEvent,a=t.hideGhostForTarget,t=t.unhideGhostForTarget;e&&(i=n||i,a(),e=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e,e=document.elementFromPoint(e.clientX,e.clientY),t(),i&&!i.el.contains(e)&&(r("spill"),this.onSpill({dragEl:o,putSortable:n})))};function oe(){}function ie(){}oe.prototype={startIndex:null,dragStart:function(t){t=t.oldDraggableIndex;this.startIndex=t},onSpill:function(t){var e=t.dragEl,n=t.putSortable;this.sortable.captureAnimationState(),n&&n.captureAnimationState();t=F(this.sortable.el,this.startIndex,this.options);t?this.sortable.el.insertBefore(e,t):this.sortable.el.appendChild(e),this.sortable.animateAll(),n&&n.animateAll()},drop:c},a(oe,{pluginName:"revertOnSpill"}),ie.prototype={onSpill:function(t){var e=t.dragEl,t=t.putSortable||this.sortable;t.captureAnimationState(),e.parentNode&&e.parentNode.removeChild(e),t.animateAll()},drop:c},a(ie,{pluginName:"removeOnSpill"});var re,ae,le,se,ce,ue=[],de=[],he=!1,pe=!1,fe=!1;function ge(n,o){de.forEach(function(t,e){e=o.children[t.sortableIndex+(n?Number(e):0)];e?o.insertBefore(t,e):o.appendChild(t)})}function me(){ue.forEach(function(t){t!==le&&t.parentNode&&t.parentNode.removeChild(t)})}return Ft.mount(new function(){function t(){for(var t in this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0},this)"_"===t.charAt(0)&&"function"==typeof this[t]&&(this[t]=this[t].bind(this))}return t.prototype={dragStarted:function(t){t=t.originalEvent;this.sortable.nativeDraggable?h(document,"dragover",this._handleAutoScroll):this.options.supportPointer?h(document,"pointermove",this._handleFallbackAutoScroll):t.touches?h(document,"touchmove",this._handleFallbackAutoScroll):h(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(t){t=t.originalEvent;this.options.dragOverBubble||t.rootEl||this._handleAutoScroll(t)},drop:function(){this.sortable.nativeDraggable?p(document,"dragover",this._handleAutoScroll):(p(document,"pointermove",this._handleFallbackAutoScroll),p(document,"touchmove",this._handleFallbackAutoScroll),p(document,"mousemove",this._handleFallbackAutoScroll)),te(),Jt(),clearTimeout(g),g=void 0},nulling:function(){Vt=Gt=zt=Qt=Zt=Ut=qt=null,$t.length=0},_handleFallbackAutoScroll:function(t){this._handleAutoScroll(t,!0)},_handleAutoScroll:function(e,n){var o,i=this,r=(e.touches?e.touches[0]:e).clientX,a=(e.touches?e.touches[0]:e).clientY,t=document.elementFromPoint(r,a);Vt=e,n||this.options.forceAutoScrollFallback||w||y||u?(ne(e,this.options,t,n),o=A(t,!0),!Qt||Zt&&r===Ut&&a===qt||(Zt&&te(),Zt=setInterval(function(){var t=A(document.elementFromPoint(r,a),!0);t!==o&&(o=t,Jt()),ne(e,i.options,t,n)},10),Ut=r,qt=a)):this.options.bubbleScroll&&A(t,!0)!==O()?ne(e,this.options,A(t,!1),!1):Jt()}},a(t,{pluginName:"scroll",initializeByDefault:!0})}),Ft.mount(ie,oe),Ft.mount(new function(){function t(){this.defaults={swapClass:"sortable-swap-highlight"}}return t.prototype={dragStart:function(t){t=t.dragEl;ee=t},dragOverValid:function(t){var e=t.completed,n=t.target,o=t.onMove,i=t.activeSortable,r=t.changed,a=t.cancel;i.options.swap&&(t=this.sortable.el,i=this.options,n&&n!==t&&(t=ee,ee=!1!==o(n)?(k(n,i.swapClass,!0),n):null,t&&t!==ee&&k(t,i.swapClass,!1)),r(),e(!0),a())},drop:function(t){var e,n,o=t.activeSortable,i=t.putSortable,r=t.dragEl,a=i||this.sortable,l=this.options;ee&&k(ee,l.swapClass,!1),ee&&(l.swap||i&&i.options.swap)&&r!==ee&&(a.captureAnimationState(),a!==o&&o.captureAnimationState(),n=ee,t=(e=r).parentNode,l=n.parentNode,t&&l&&!t.isEqualNode(n)&&!l.isEqualNode(e)&&(i=H(e),r=H(n),t.isEqualNode(l)&&i<r&&r++,t.insertBefore(n,t.children[i]),l.insertBefore(e,l.children[r])),a.animateAll(),a!==o&&o.animateAll())},nulling:function(){ee=null}},a(t,{pluginName:"swap",eventProperties:function(){return{swapItem:ee}}})}),Ft.mount(new function(){function t(o){for(var t in this)"_"===t.charAt(0)&&"function"==typeof this[t]&&(this[t]=this[t].bind(this));o.options.avoidImplicitDeselect||(o.options.supportPointer?h(document,"pointerup",this._deselectMultiDrag):(h(document,"mouseup",this._deselectMultiDrag),h(document,"touchend",this._deselectMultiDrag))),h(document,"keydown",this._checkKeyDown),h(document,"keyup",this._checkKeyUp),this.defaults={selectedClass:"sortable-selected",multiDragKey:null,avoidImplicitDeselect:!1,setData:function(t,e){var n="";ue.length&&ae===o?ue.forEach(function(t,e){n+=(e?", ":"")+t.textContent}):n=e.textContent,t.setData("Text",n)}}}return t.prototype={multiDragKeyDown:!1,isMultiDrag:!1,delayStartGlobal:function(t){t=t.dragEl;le=t},delayEnded:function(){this.isMultiDrag=~ue.indexOf(le)},setupClone:function(t){var e=t.sortable,t=t.cancel;if(this.isMultiDrag){for(var n=0;n<ue.length;n++)de.push(_(ue[n])),de[n].sortableIndex=ue[n].sortableIndex,de[n].draggable=!1,de[n].style["will-change"]="",k(de[n],this.options.selectedClass,!1),ue[n]===le&&k(de[n],this.options.chosenClass,!1);e._hideClone(),t()}},clone:function(t){var e=t.sortable,n=t.rootEl,o=t.dispatchSortableEvent,t=t.cancel;this.isMultiDrag&&(this.options.removeCloneOnHide||ue.length&&ae===e&&(ge(!0,n),o("clone"),t()))},showClone:function(t){var e=t.cloneNowShown,n=t.rootEl,t=t.cancel;this.isMultiDrag&&(ge(!1,n),de.forEach(function(t){R(t,"display","")}),e(),ce=!1,t())},hideClone:function(t){var e=this,n=(t.sortable,t.cloneNowHidden),t=t.cancel;this.isMultiDrag&&(de.forEach(function(t){R(t,"display","none"),e.options.removeCloneOnHide&&t.parentNode&&t.parentNode.removeChild(t)}),n(),ce=!0,t())},dragStartGlobal:function(t){t.sortable;!this.isMultiDrag&&ae&&ae.multiDrag._deselectMultiDrag(),ue.forEach(function(t){t.sortableIndex=H(t)}),ue=ue.sort(function(t,e){return t.sortableIndex-e.sortableIndex}),fe=!0},dragStarted:function(t){var e,n=this,t=t.sortable;this.isMultiDrag&&(this.options.sort&&(t.captureAnimationState(),this.options.animation&&(ue.forEach(function(t){t!==le&&R(t,"position","absolute")}),e=X(le,!1,!0,!0),ue.forEach(function(t){t!==le&&C(t,e)}),he=pe=!0)),t.animateAll(function(){he=pe=!1,n.options.animation&&ue.forEach(function(t){T(t)}),n.options.sort&&me()}))},dragOver:function(t){var e=t.target,n=t.completed,t=t.cancel;pe&&~ue.indexOf(e)&&(n(!1),t())},revert:function(t){var n,o,e=t.fromSortable,i=t.rootEl,r=t.sortable,a=t.dragRect;1<ue.length&&(ue.forEach(function(t){r.addAnimationState({target:t,rect:pe?X(t):a}),T(t),t.fromRect=a,e.removeAnimationState(t)}),pe=!1,n=!this.options.removeCloneOnHide,o=i,ue.forEach(function(t,e){e=o.children[t.sortableIndex+(n?Number(e):0)];e?o.insertBefore(t,e):o.appendChild(t)}))},dragOverCompleted:function(t){var e,n=t.sortable,o=t.isOwner,i=t.insertion,r=t.activeSortable,a=t.parentEl,l=t.putSortable,t=this.options;i&&(o&&r._hideClone(),he=!1,t.animation&&1<ue.length&&(pe||!o&&!r.options.sort&&!l)&&(e=X(le,!1,!0,!0),ue.forEach(function(t){t!==le&&(C(t,e),a.appendChild(t))}),pe=!0),o||(pe||me(),1<ue.length?(o=ce,r._showClone(n),r.options.animation&&!ce&&o&&de.forEach(function(t){r.addAnimationState({target:t,rect:se}),t.fromRect=se,t.thisAnimationDuration=null})):r._showClone(n)))},dragOverAnimationCapture:function(t){var e=t.dragRect,n=t.isOwner,t=t.activeSortable;ue.forEach(function(t){t.thisAnimationDuration=null}),t.options.animation&&!n&&t.multiDrag.isMultiDrag&&(se=a({},e),e=v(le,!0),se.top-=e.f,se.left-=e.e)},dragOverAnimationComplete:function(){pe&&(pe=!1,me())},drop:function(t){var e=t.originalEvent,n=t.rootEl,o=t.parentEl,i=t.sortable,r=t.dispatchSortableEvent,a=t.oldIndex,l=t.putSortable,s=l||this.sortable;if(e){var c,u,d,h=this.options,p=o.children;if(!fe)if(h.multiDragKey&&!this.multiDragKeyDown&&this._deselectMultiDrag(),k(le,h.selectedClass,!~ue.indexOf(le)),~ue.indexOf(le))ue.splice(ue.indexOf(le),1),re=null,z({sortable:i,rootEl:n,name:"deselect",targetEl:le,originalEvent:e});else{if(ue.push(le),z({sortable:i,rootEl:n,name:"select",targetEl:le,originalEvent:e}),e.shiftKey&&re&&i.el.contains(re)){var f=H(re),t=H(le);if(~f&&~t&&f!==t)for(var g,m=f<t?(g=f,t):(g=t,f+1);g<m;g++)~ue.indexOf(p[g])||(k(p[g],h.selectedClass,!0),ue.push(p[g]),z({sortable:i,rootEl:n,name:"select",targetEl:p[g],originalEvent:e}))}else re=le;ae=s}fe&&this.isMultiDrag&&(pe=!1,(o[W].options.sort||o!==n)&&1<ue.length&&(c=X(le),u=H(le,":not(."+this.options.selectedClass+")"),!he&&h.animation&&(le.thisAnimationDuration=null),s.captureAnimationState(),he||(h.animation&&(le.fromRect=c,ue.forEach(function(t){var e;t.thisAnimationDuration=null,t!==le&&(e=pe?X(t):c,t.fromRect=e,s.addAnimationState({target:t,rect:e}))})),me(),ue.forEach(function(t){p[u]?o.insertBefore(t,p[u]):o.appendChild(t),u++}),a===H(le)&&(d=!1,ue.forEach(function(t){t.sortableIndex!==H(t)&&(d=!0)}),d&&(r("update"),r("sort")))),ue.forEach(function(t){T(t)}),s.animateAll()),ae=s),(n===o||l&&"clone"!==l.lastPutMode)&&de.forEach(function(t){t.parentNode&&t.parentNode.removeChild(t)})}},nullingGlobal:function(){this.isMultiDrag=fe=!1,de.length=0},destroyGlobal:function(){this._deselectMultiDrag(),p(document,"pointerup",this._deselectMultiDrag),p(document,"mouseup",this._deselectMultiDrag),p(document,"touchend",this._deselectMultiDrag),p(document,"keydown",this._checkKeyDown),p(document,"keyup",this._checkKeyUp)},_deselectMultiDrag:function(t){if(!(void 0!==fe&&fe||ae!==this.sortable||t&&P(t.target,this.options.draggable,this.sortable.el,!1)||t&&0!==t.button))for(;ue.length;){var e=ue[0];k(e,this.options.selectedClass,!1),ue.shift(),z({sortable:this.sortable,rootEl:this.sortable.el,name:"deselect",targetEl:e,originalEvent:t})}},_checkKeyDown:function(t){t.key===this.options.multiDragKey&&(this.multiDragKeyDown=!0)},_checkKeyUp:function(t){t.key===this.options.multiDragKey&&(this.multiDragKeyDown=!1)}},a(t,{pluginName:"multiDrag",utils:{select:function(t){var e=t.parentNode[W];e&&e.options.multiDrag&&!~ue.indexOf(t)&&(ae&&ae!==e&&(ae.multiDrag._deselectMultiDrag(),ae=e),k(t,e.options.selectedClass,!0),ue.push(t))},deselect:function(t){var e=t.parentNode[W],n=ue.indexOf(t);e&&e.options.multiDrag&&~n&&(k(t,e.options.selectedClass,!1),ue.splice(n,1))}},eventProperties:function(){var n=this,o=[],i=[];return ue.forEach(function(t){var e;o.push({multiDragElement:t,index:t.sortableIndex}),e=pe&&t!==le?-1:pe?H(t,":not(."+n.options.selectedClass+")"):H(t),i.push({multiDragElement:t,index:e})}),{items:r(ue),clones:[].concat(de),oldIndicies:o,newIndicies:i}},optionListeners:{multiDragKey:function(t){return"ctrl"===(t=t.toLowerCase())?t="Control":1<t.length&&(t=t.charAt(0).toUpperCase()+t.substr(1)),t}}})}),Ft});
const unMountSubscribers = {};

let previousLocationSearch = window.location.search;

function trackLocationSearchChanges() {
    previousLocationSearch = window.location.search;
}

window.addEventListener('popstate', function(event) {
    if (event.state) {
        $('main').replaceWith(event.state.main);
    }
    const unMountCallback = renderPage(window.location.href);

    if (unMountCallback) {
        unMountSubscribers[window.location.search] = unMountCallback;
    }

    Hm_Folders.hl_selected_menu();

    unMountSubscribers[previousLocationSearch]?.();

    trackLocationSearchChanges();
});

window.addEventListener('load', function() {
    const unMountCallback = renderPage(window.location.href);
    history.replaceState({ main: $('main').prop('outerHTML') }, "");

    if (unMountCallback) {
        unMountSubscribers[window.location.search] = unMountCallback;
    }
});


$(document).on('click', 'a', function(event) {
    if ($(this).attr('href') !== "#" && $(this).attr('target') !== '_blank') {
        event.preventDefault();
        navigate($(this).attr('href'));
    }
});

async function navigate(url) {
    showRoutingToast();

    try {
        const response = await fetch(url, {
            method: 'GET',
        });

        if (!response.ok) {
            throw new Error("Request failed with status: " + response.status);
        }

        const html = await response.text();
        const main = html.match(/<main[^>]*>((.|[\n\r])*)<\/main>/i)[0];
        const title = html.match(/<title[^>]*>((.|[\n\r])*)<\/title>/i)[0];
        $('main').replaceWith(main);
        document.title = title.replace(/<[^>]*>/g, '');

        window.location.next = url;

        const unMountCallback = renderPage(url);

        history.pushState({ main }, "", url);
        
        if (unMountCallback) {
            unMountSubscribers[url] = unMountCallback;
        }
        Hm_Folders.hl_selected_menu();

        unMountSubscribers[previousLocationSearch]?.();
        
        trackLocationSearchChanges();
    } catch (error) {
        Hm_Notices.show([`ERR${error.message}`]);
    } finally {
        hideRoutingToast();
    }
}

function renderPage(href) {
    const searchParams = new URL(href, window.location.origin).searchParams;
    const page = searchParams.get('page');
    
    if (page) {
        const route = ROUTES.find(route => route.page === page);
        const routeParams = Object.fromEntries(searchParams.entries());
        if (route) {
            const unMountCallback = route.handler(routeParams);
            return unMountCallback;
        }
    }
}
/*
NOTE: Handlers are registered as strings instead of functions because some modules might not be enabled, making their pages' handler functions unaccessible.
*/
const modulesRoutes = [
    {
        page: 'hello_world',
        handler: 'applyHelloWorldPageHandlers'
    },
    {
        page: 'message_list',
        handler: 'applyImapMessageListPageHandlers'
    },
    {
        page: 'message',
        handler: 'applyImapMessageContentPageHandlers'
    },
    {
        page: 'compose',
        handler: 'applyComposePageHandlers'
    },
    {
        page: 'servers',
        handler: 'applyServersPageHandlers'
    },
    {
        page: 'settings',
        handler: 'applySettingsPageHandlers'
    },
    {
        page: 'search',
        handler: 'applySearchPageHandlers'
    },
    {
        page: 'home',
        handler: 'applyHomePageHandlers'
    },
    {
        page: 'info',
        handler: 'applyInfoPageHandlers'
    },
    {
        page: 'calendar',
        handler: 'applyCalendarPageHandlers'
    },
    {
        page: 'advanced_search',
        handler: 'applyAdvancedSearchPageHandlers'
    },
    {
        page: 'contacts',
        handler: 'applyContactsPageHandlers'
    },
    {
        page: 'history',
        handler: 'applyHistoryPageHandlers'
    },
    {
        page: 'folders',
        handler: 'applyFoldersPageHandlers'
    },
    {
        page: 'folders_subscription',
        handler: 'applyFoldersSubscriptionPageHandlers'
    },
    {
        page: 'pgp',
        handler: 'applyPgpPageHandlers'
    },
    {
        page: 'profiles',
        handler: 'applyProfilesPageHandler'
    },
    {
        page: 'block_list',
        handler: 'applyBlockListPageHandlers'
    },
    {
        page: 'sieve_filters',
        handler: 'applySieveFiltersPageHandler'
    }
]

/* 
Now let's validate and use handlers that are given.
*/
ROUTES = modulesRoutes.filter(route => typeof(window[route.handler]) === 'function').map(route => ({
    ...route,
    handler: window[route.handler]
}))
function showRoutingToast() {
    window.routingToast = showLoaderToast('Redirecting...');
}

function hideRoutingToast() {
    window.routingToast.hide();
}

function getListPathParam() {
    return new URLSearchParams(window.location.search).get('list_path')
}

function getMessageUidParam() {
    return new URLSearchParams(window.location.search).get('uid')
}

function getPageNameParam() {
    return new URLSearchParams(window.location.search).get('page')
}
/**
 * An abstraction object of the Message_List focused on state management without UI interaction.
 */
class Hm_MessagesStore {

    /**
     * @typedef {Object} RowObject
     * @property {String} 0 - The HTML string of the row
     * @property {String} 1 - The IMAP key
     */

    /** 
     * @typedef {Array} RowEntry
     * @property {String} 0 - The IMAP key
     * @property {RowObject} 1 - An object containing the row message and the IMAP key
     */

    constructor(path, page = 1, rows = {}, abortController = new AbortController()) {
        this.path = path;
        this.list = path + '_' + page;
        this.rows = rows;
        this.links = "";
        this.count = 0;
        this.flagAsReadOnOpen = true;
        this.abortController = abortController;
    }

    /**
     * Check if the store has data for the current instance
     * @returns {Boolean}
     */
    hasLocalData() {
        return this.#retrieveFromLocalStorage() !== false;
    }

    /**
     * 
     * @returns {Promise<this>}
     */
    async load(reload = false, hideLoadingState = false, doNotFetch = false) {
        const storedMessages = this.#retrieveFromLocalStorage();
        if (storedMessages && !reload) {
            this.rows = storedMessages.rows;
            this.links = storedMessages.links;
            this.count = storedMessages.count;
            this.flagAsReadOnOpen = storedMessages.flagAsReadOnOpen;
            return this;
        }

        if (doNotFetch) {
            return this;
        }

        const { formatted_message_list: updatedMessages, page_links: pageLinks, folder_status, do_not_flag_as_read_on_open } = await this.#fetch(hideLoadingState);

        this.count = folder_status && Object.values(folder_status)[0]?.messages;
        this.links = pageLinks;
        this.rows = updatedMessages;
        this.flagAsReadOnOpen = !do_not_flag_as_read_on_open;

        this.#saveToLocalStorage();

        return this;
    }

    /**
     * 
     * @param {String} uid the id of the message to be marked as read
     * @returns {Boolean} true if the message was marked as read, false otherwise
     */
    markRowAsRead(uid) {
        const rows = Object.entries(this.rows);
        const row = this.#getRowByUid(uid)?.value;
        
        if (row) {
            const htmlRow = $(row[1]['0']);
            const wasUnseen = htmlRow.find('.unseen').length > 0 || htmlRow.hasClass('unseen');

            htmlRow.removeClass('unseen');
            htmlRow.find('.unseen').removeClass('unseen');
            const objectRows = Object.fromEntries(rows);
            objectRows[row[0]]['0'] = htmlRow[0].outerHTML;
            
            this.rows = objectRows;
            this.#saveToLocalStorage();

            return wasUnseen;
        }
        return false;
    }

    /**
     * 
     * @param {*} uid 
     * @returns {RowObject|false} the next row entry if found, false otherwise
     */
    getNextRowForMessage(uid) {
        const rows = Object.entries(this.rows);
        const row = this.#getRowByUid(uid)?.index;
        
        if (row !== false) {
            const nextRow = rows[row + 1];
            if (nextRow) {
                return nextRow[1];
            }
        }
        return false;
    }

    /**
     * 
     * @param {*} uid 
     * @returns {RowObject|false} the previous row entry if found, false otherwise
     */
    getPreviousRowForMessage(uid) {
        const rows = Object.entries(this.rows);
        const row = this.#getRowByUid(uid)?.index;
        if (row) {
            const previousRow = rows[row - 1];
            if (previousRow) {
                return previousRow[1];
            }
        }
        return false;
    }

    #fetch(hideLoadingState = false) {
        return new Promise((resolve, reject) => {
            Hm_Ajax.request(
              this.#getRequestConfig(),
              (response) => {
                resolve(response);
              },
              [],
              hideLoadingState,
              undefined,
              reject,
              this.abortController?.signal
            );
        });
    }

    #getRequestConfig() {
        let hook;
        let serverId;
        let folder;
        const config = [];
        if (this.path.startsWith('imap')) {
            hook = "ajax_imap_folder_display";
            const detail = Hm_Utils.parse_folder_path(this.path, 'imap');
            serverId = detail.server_id;
            folder = detail.folder;
        } else {
            switch (this.path) {
                case 'unread':
                    hook = "ajax_imap_unread";
                    break;
                case 'flagged':
                    hook = "ajax_imap_flagged";
                    break;
                case 'combined_inbox':
                case 'email':
                    hook = "ajax_imap_combined_inbox";
                    break;
                default:
                    hook = "ajax_imap_folder_data";
                    break;
            }
        }
        
        if (hook) {
            config.push({ name: "hm_ajax_hook", value: hook });
        }
        if (serverId) {
            config.push({ name: "imap_server_id", value: serverId });
        }
        if (folder) {
            config.push({ name: "folder", value: folder });
        }
        return config;
    }

    #saveToLocalStorage() {
        Hm_Utils.save_to_local_storage(this.list, JSON.stringify({ rows: this.rows, links: this.links, count: this.count }));
        Hm_Utils.save_to_local_storage('flagAsReadOnOpen', this.flagAsReadOnOpen);
    }

    #retrieveFromLocalStorage() {
        const stored = Hm_Utils.get_from_local_storage(this.list);
        const flagAsReadOnOpen = Hm_Utils.get_from_local_storage('flagAsReadOnOpen');
        if (stored) {
            return {...JSON.parse(stored), flagAsReadOnOpen: flagAsReadOnOpen !== 'false'};
        }
        return false;
    }

    /**
     * @typedef {Object} RowOutput
     * @property {Number} index - The index of the row
     * @property {RowEntry} value - The row entry
     * 
     * @param {String} uid 
     * @returns {RowOutput|false} row - The row object if found, false otherwise
     */
    #getRowByUid(uid) {
        const rows = Object.entries(this.rows);
        const row = rows.find(([key, value]) => $(value['0']).attr('data-uid') == uid);
        
        if (row) {
            const index = rows.indexOf(row);
            return { index, value: row };
        }
        return false;
    }
}

[
    Hm_MessagesStore
].forEach((item) => {
    window[item.name] = item;
});
function applyServersPageHandlers() {
    $('.server_section').on("click", function() { return Hm_Utils.toggle_page_section($(this).data('target')); });
    $('.edit_server_connection').on('click', imap_smtp_edit_action);
    // NUX
    expand_server_settings();
    $('.nux_next_button').on("click", nux_service_select);
    $('#service_select').on("change", function() {
        if ($(this).val() == 'all-inkl') {
            add_extra_fields(this, 'all_inkl_login', 'Login', hm_trans('Your All-inkl Login'));
        } else {
            $('.nux_extra_fields_container').remove();
        }
    });

    // Optional modules
    if (window.feedServersPageHandler) feedServersPageHandler();
    if (window.githubServersPageHandler) githubServersPageHandler();
    if (window.nasaServersPageHandler) nasaServersPageHandler();
    if (window.smtpServersPageHandler) smtpServersPageHandler();
    if (window.imapServersPageHandler) imapServersPageHandler();
    if (window.wpServersPageHandler) wpServersPageHandler();
}

function applySettingsPageHandlers() {
    Hm_Utils.expand_core_settings();
    $('.settings_subtitle').on("click", function() { return Hm_Utils.toggle_page_section($(this).data('target')); });
    $('.reset_default_value_checkbox').on("click", reset_default_value_checkbox);
    $('.reset_default_value_select').on("click", reset_default_value_select);
    $('.reset_default_value_input').on("click", reset_default_value_input);
    $('.reset_default_timezone').on("click", reset_default_timezone);

    if (window.expand_feed_settings) expand_feed_settings();
    if (window.smtpSettingsPageHandler) smtpSettingsPageHandler();
}

function applySearchPageHandlers(routeParams) {
    Hm_Message_List.select_combined_view();
    sortHandlerForMessageListAndSearchPage();
    $('.search_reset').on("click", Hm_Utils.reset_search_form);

    if (window.inlineMessageMessageListAndSearchPageHandler) inlineMessageMessageListAndSearchPageHandler(routeParams);
    if (window.savedSearchesSearchPageHandler) savedSearchesSearchPageHandler();
}

function applyHomePageHandlers() {
    $('.pw_update').on("click", function() { update_password($(this).data('id')); });
}

function applyInfoPageHandlers() {
    const timer = setTimeout(() => {
        imap_status_update();
        if (window.feed_status_update) feed_status_update();
        if (window.github_repo_update) github_repo_update();
    }, 100);

    return () => {
        clearTimeout(timer);
    }
}function showLoaderToast(text = 'Loading...') {
    const uniqueId = Math.random().toString(36).substring(7);
    const toastHTML = `
    <div class="position-fixed bottom-0 start-0 p-3" style="z-index: 11">
        <div class="toast bg-primary text-white" id="${uniqueId}" role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="false">
        <div class="toast-body">
            <div class="d-flex align-items-center">
                <strong>${text}</strong>
                <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
            </div>
        </div>
        </div>
    </div>
    `

    document.body.insertAdjacentHTML('beforeend', toastHTML)

    const instance = bootstrap.Toast.getOrCreateInstance(document.getElementById(uniqueId));
    instance.show();    

    return instance;
}function sessionAvailableOnlyActionInfo(element) {
    new bootstrap.Popover(element, {
        title: 'Session-limited action', 
        content: 'Note that the action will persist only during the current session, unless the settings are saved.',
        trigger: 'hover',
    });
}function handleMessagesDragAndDrop() {
    const tableBody = document.querySelector('.message_table_body');
    if(tableBody && !hm_mobile()) {
        const allFoldersClassNames = [];
        let targetFolder;
        let movingElement;
        let movingNumber;
        Sortable.create(tableBody, {
            sort: false,
            group: 'messages',
            ghostClass: 'table-secondary',
            draggable: 'tr.email',
    
            onMove: (sortableEvent) => {
                movingElement = sortableEvent.dragged;
                targetFolder = sortableEvent.related?.className.split(' ')[0];
                return false;
            },
    
            onEnd: () => {
                // Remove the highlight class from the tr
                document.querySelectorAll('.message_table_body > tr.table-secondary').forEach((row) => {
                    row.classList.remove('table-secondary');
                });
                return false;
            }
        });
    
        const isValidFolderReference = (className='') => {
            return className.startsWith('imap_') && allFoldersClassNames.includes(className)
        }

        alterDragImage(tableBody);
    
        Sortable.utils.on(tableBody, 'dragend', () => {
            // If the target is not a folder, do nothing
            if (!isValidFolderReference(targetFolder ?? '')) {
                return;
            }
    
            const page = getPageNameParam();
            const selectedRows = [];
    
            if(movingNumber > 1) {
                document.querySelectorAll('.message_table_body > tr').forEach(row => {
                    if (row.querySelector('.checkbox_cell input[type=checkbox]:checked')) {
                        selectedRows.push(row);
                    }
                });
            }
    
            if (selectedRows.length == 0) {
                selectedRows.push(movingElement);
            }
    
            const movingIds = selectedRows.map(row => row.className.split(' ')[0]);
    
            Hm_Ajax.request(
                [{'name': 'hm_ajax_hook', 'value': 'ajax_imap_move_copy_action'},
                {'name': 'imap_move_ids', 'value': movingIds.join(',')},
                {'name': 'imap_move_to', 'value': targetFolder},
                {'name': 'imap_move_page', 'value': page},
                {'name': 'imap_move_action', 'value': 'move'}],
                (res) =>{
                    for (const index in res.move_count) {
                        $('.'+Hm_Utils.clean_selector(res.move_count[index])).remove();
                        select_imap_folder(getListPathParam());
                    }
                }
            );
    
            // Reset the target folder
            targetFolder = null;
        });


        const emailFoldersGroups = document.querySelectorAll('.email_folders .inner_list');
        const emailFoldersElements = document.querySelectorAll('.email_folders .inner_list > li');

        // Keep track of all folders class names
        allFoldersClassNames.push(...[...emailFoldersElements].map(folder => folder.className.split(' ')[0]));

        emailFoldersGroups.forEach((emailFolders) => {
            Sortable.create(emailFolders, {
                sort: false,
                group: {
                    put: 'messages'
                }
            });
        });

        emailFoldersElements.forEach((emailFolder) => {
            emailFolder.addEventListener('dragover', () => {
                emailFolder.classList.add('bg-secondary-subtle');
            });
            emailFolder.addEventListener('dragleave', () => {
                emailFolder.classList.remove('bg-secondary-subtle');
            });
            emailFolder.addEventListener('drop', () => {
                emailFolder.classList.remove('bg-secondary-subtle');
            });
        });
    }
}

function alterDragImage(tableBody) {
    Sortable.utils.on(tableBody, 'dragstart', (evt) => {
        let movingElements = [];
        // Is the target element checked
        const isChecked = evt.target.querySelector('.checkbox_cell input[type=checkbox]:checked');
        if (isChecked) {
            movingElements = document.querySelectorAll('.message_table_body > tr > .checkbox_cell input[type=checkbox]:checked');
            // Add a highlight class to the tr
            movingElements.forEach((checkbox) => {
                checkbox.parentElement.parentElement.classList.add('table-secondary');
            });
        } else {
            // If not, uncheck all other checked elements so that they don't get moved
            document.querySelectorAll('.message_table_body > tr > .checkbox_cell input[type=checkbox]:checked').forEach((checkbox) => {
                checkbox.checked = false;
            });
        }

        movingNumber = movingElements.length || 1;

        const element = document.createElement('div');
        element.textContent = `Move ${movingNumber} conversation${movingNumber > 1 ? 's' : ''}`;
        element.style.position = 'absolute';
        element.className = 'dragged_element';
        document.body.appendChild(element);

        document.addEventListener('drag', () => {
            element.style.display = 'none'
        });
        document.addEventListener('mouseover', () => {
            element.remove();
        });

        evt.dataTransfer.setDragImage(element, 0, 0);
    });
}

/**
 * NOTE: Tiki-Cypht integration dynamically removes everything from the begining of this file
 * up to swipe_event function definition as it uses jquery (over cash.js) and has bootstrap
 * framework already included. If you add code here that you wish to be included in Tiki-Cypht
 * integration, add it below swipe_event function definition.
 */

/* extend cash.js with some useful bits */
$.inArray = function(item, list) {
    for (var i in list) {
        if (list[i] === item) {
            return i;
        }
    }
    return -1;
};
$.isEmptyObject = function(obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            return false;
        }
    }
    return true;
};
$.fn.submit = function() { this[0].submit(); }
$.fn.focus = function() { this[0].focus(); };
$.fn.serializeArray = function() {
    var parts;
    var res = [];
    var args = this.serialize().split('&');
    for (var i in args) {
        parts = args[i].split('=');
        if (parts[0] && parts[1]) {
            res.push({'name': parts[0], 'value': parts[1]});
        }
    }
    return res.map(function(x) {return {name: x.name, value: decodeURIComponent(x.value.replace(/\+/g, " "))}});
};
$.fn.sort = function(sort_function) {
    var list = [];
    for (var i=0, len=this.length; i < len; i++) {
        list.push(this[i]);
    }
    return $(list.sort(sort_function));
};
$.fn.fadeOut = function(timeout = 600) {
    return this.css("opacity", 0)
    .css("transition", `opacity ${timeout}ms`)
};
$.fn.fadeOutAndRemove = function(timeout = 600) {
    this.fadeOut(timeout)
    var tm = setTimeout(() => {
        this.remove();
        clearTimeout(tm)
    }, timeout);
    return this;
};

$.fn.modal = function(action) {
    const modalElement = this[0];
    if (modalElement) {
        const modal = new bootstrap.Modal(modalElement);
        if (action === 'show') {
            modal.show();
        } else if (action === 'hide') {
            modal.hide();
        }
    }
};

/* swipe event handler */
var swipe_event = function(el, callback, direction) {
    var start_x, start_y, dist_x, dist_y, threshold = 150, restraint = 100,
        allowed_time = 500, start_time;

    el.addEventListener('touchstart', function(e) {
        var touchobj = e.changedTouches[0];
        start_x = touchobj.pageX;
        start_y = touchobj.pageY;
        start_time = new Date().getTime();
    }, false);

    el.addEventListener('touchend', function(e) {
        var touchobj = e.changedTouches[0];
        dist_x = touchobj.pageX - start_x;
        dist_y = touchobj.pageY - start_y;
        if ((new Date().getTime() - start_time) <= allowed_time) {
            if (Math.abs(dist_x) >= threshold && Math.abs(dist_y) <= restraint) {
                var dir = (dist_x < 0) ? 'left' : 'right';
                if (dir == direction) {
                    callback();
                }
            }
        }
    }, false);
};

// Constants. To be used anywhere in the app via the window object.
const globalVars = {
    EMAIL_REGEX: /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g,
}
Object.keys(globalVars).forEach(key => {
    window[key] = globalVars[key];
});


/* ajax multiplexer */
var Hm_Ajax = {
    batch_callbacks: {},
    callback_hooks: [],
    p_callbacks: [],
    aborted: false,
    err_condition: false,
    batch_callback: false,
    active_reqs: 0,
    icon_loading_id: false,

    get_ajax_hook_name: function(args) {
        var index;
        for (index in args) {
            if (args[index]['name'] == 'hm_ajax_hook') {
                return args[index]['value'];
            }
        }
        return;
    },

    request: function(args, callback, extra, no_icon, batch_callback, on_failure, signal) {
        var bcb = false;
        if (typeof batch_callback != 'undefined' && $.inArray(batch_callback, this.batch_callbacks) === -1) {
            bcb = batch_callback.toString();
            var detail = Hm_Ajax.batch_callbacks[bcb];
            if (typeof detail !== 'undefined') {
                Hm_Ajax.batch_callbacks[bcb] += 1;
            }
            else {
                Hm_Ajax.batch_callbacks[bcb] = 1;
            }
        }
        var name = Hm_Ajax.get_ajax_hook_name(args);
        var ajax = new Hm_Ajax_Request();
        if (!no_icon) {
            Hm_Ajax.show_loading_icon();
            $('body').addClass('wait');
        }
        Hm_Ajax.active_reqs++;
        return ajax.make_request(args, callback, extra, name, on_failure, batch_callback, signal);
    },

    show_loading_icon: function() {
        if (Hm_Ajax.icon_loading_id !== false) {
            return;
        }
        var hm_loading_pos = $('.loading_icon').width()/40;
        $('.loading_icon').show();
        function move_background_image() {
            hm_loading_pos = hm_loading_pos + 50;
            $('.loading_icon').css('background-position', hm_loading_pos+'px 0');
            Hm_Ajax.icon_loading_id = setTimeout(move_background_image, 100);
        }
        move_background_image();
    },

    stop_loading_icon : function(loading_id) {
        clearTimeout(loading_id);
        $('.loading_icon').hide();
        Hm_Ajax.icon_loading_id = false;
    },

    process_callback_hooks: function(name, res) {
        var hook;
        var func;
        for (var i in Hm_Ajax.callback_hooks) {
            hook = Hm_Ajax.callback_hooks[i];
            if (hook[0] == name || hook[0] == '*') {
                func = hook[1];
                func(res);
                if (hook[0] == '*') {
                    if ($.inArray(hook, Hm_Ajax.p_callbacks) === -1) {
                        Hm_Ajax.p_callbacks.push(hook);
                    }
                }
            }
        }
    },

    add_callback_hook: function(request_name, hook_function) {
        Hm_Ajax.callback_hooks.push([request_name, hook_function]);
    }
};

/* ajax request wrapper */
var Hm_Ajax_Request = function() { return {
    callback: false,
    name: false,
    batch_callback: false,
    index: 0,
    on_failure: false,
    start_time: 0,

    xhr_fetch: function(config) {
        var xhr = new XMLHttpRequest();
        var data = '';
        if (config.data) {
            data = this.format_xhr_data(config.data);
        }
        const url = window.location.next ?? window.location.href;
        xhr.open('POST', url)
        if (config.signal) {
            config.signal.addEventListener('abort', function() {
                xhr.abort();
            });
        }
        xhr.addEventListener('load', function() {
            config.callback.done(Hm_Utils.json_decode(xhr.response, true), xhr);
            config.callback.always(Hm_Utils.json_decode(xhr.response, true));
        });
        xhr.addEventListener('error', function() {
            Hm_Ajax.stop_loading_icon(Hm_Ajax.icon_loading_id);
            config.callback.fail(xhr);
            config.callback.always(Hm_Utils.json_decode(xhr.response, true));
        });
        xhr.addEventListener('abort', function() {
            Hm_Ajax.stop_loading_icon(Hm_Ajax.icon_loading_id);
            config.callback.always(Hm_Utils.json_decode(xhr.response, true));

        });
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.setRequestHeader('X-Requested-with', 'xmlhttprequest');
        xhr.send(data);
    },

    format_xhr_data: function(data) {
        var res = []
        for (var i in data) {
            res.push(encodeURIComponent(data[i]['name']) + '=' + encodeURIComponent(data[i]['value']));
        }
        return res.join('&');
    },

    make_request: function(args, callback, extra, request_name, on_failure, batch_callback, signal) {
        var name;
        var arg;
        this.batch_callback = batch_callback;
        this.name = request_name;
        this.callback = callback;
        if (on_failure) {
            this.on_failure = true;
        }
        if (extra) {
            for (name in extra) {
                args.push({'name': name, 'value': extra[name]});
            }
        }
        var key_found = false;
        for (arg in args) {
            if (args[arg].name == 'hm_page_key') {
                key_found = true;
                break;
            }
        }
        if (!key_found) {
            args.push({'name': 'hm_page_key', 'value': $('#hm_page_key').val()});
        }
        var dt = new Date();
        this.start_time = dt.getTime();
        this.xhr_fetch({url: '', data: args, callback: this, signal});
        return false;
    },

    done: function(res, xhr) {
        if (Hm_Ajax.aborted) {
            return;
        }
        else if (!res || typeof res == 'string' && (res == 'null' || res.indexOf('<') === 0 || res == '{}')) {
            this.fail(xhr);
            return;
        }
        else {
            $('.offline').hide();
            if (hm_encrypt_ajax_requests()) {
                res = Hm_Utils.json_decode(Hm_Crypt.decrypt(res.payload));
            }
            if ((res.state && res.state == 'not callable') || !res.router_login_state) {
                this.fail(xhr, true);
                return;
            }
            if (Hm_Ajax.err_condition) {
                Hm_Ajax.err_condition = false;
                Hm_Notices.hide(true);
            }
            if (res.router_user_msgs && !$.isEmptyObject(res.router_user_msgs)) {
                Hm_Notices.show(res.router_user_msgs);
            }
            if (res.folder_status) {
                for (const name in res.folder_status) {
                    if (name === getPageNameParam()) {
                        Hm_Folders.unread_counts[name] = res.folder_status[name]['unseen'];
                        Hm_Folders.update_unread_counts();
                        const messages = new Hm_MessagesStore(name, Hm_Utils.get_url_page_number());
                        messages.load().then(() => {
                            if (messages.count != res.folder_status[name].messages) {
                                messages.load(true).then(() => {
                                    display_imap_mailbox(messages.rows, messages.links);
                                })
                            }
                        });
                    }
                }
            }
            if (this.callback) {
                this.callback(res);
            }
            Hm_Ajax.process_callback_hooks(this.name, res);
        }
    },

    run_on_failure: function() {
        if (this.on_failure && this.callback) {
            this.callback(false);
        }
        return false;
    },

    fail: function(xhr, not_callable) {
        if (not_callable === true || (xhr.status && xhr.status == 500)) {
            Hm_Notices.show([err_msg('Server Error')]);
        }
        else {
            $('.offline').show();
        }
        Hm_Ajax.err_condition = true;
        this.run_on_failure();
    },

    always: function(res) {
        Hm_Ajax.active_reqs--;
        var batch_count = 1;
        if (this.batch_callback) {
            if (typeof Hm_Ajax.batch_callbacks[this.batch_callback.toString()] != 'undefined') {
                batch_count = --Hm_Ajax.batch_callbacks[this.batch_callback.toString()];
            }
        }
        Hm_Message_List.set_row_events();
        if (batch_count === 0) {
            Hm_Ajax.batch_callbacks[this.batch_callback.toString()] = 0;
            Hm_Ajax.aborted = false;
            Hm_Ajax.p_callbacks = [];
            this.batch_callback(res);
            this.batch_callback = false;
            Hm_Ajax.stop_loading_icon(Hm_Ajax.icon_loading_id);
            $('body').removeClass('wait');
        }
        if (Hm_Ajax.active_reqs == 0) {
            Hm_Ajax.stop_loading_icon(Hm_Ajax.icon_loading_id);
            $('body').removeClass('wait');
        }
        res = null;
    }
}};

/**
 * Show a modal dialog with a title, content and buttons.
 */
function Hm_Modal(options) {
    var defaults = {
        title: 'Cypht',
        size: '',
        btnSize: '',
        modalId: 'myModal',
    };

    this.opts = { ...defaults, ...options };

    this.init = function () {
        if (this.modal) {
            return;
        }

        const modal = `
            <div id="${this.opts.modalId}" class="modal fade modal-${this.opts.size}" data-bs-backdrop="static" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h2 class="modal-title">${this.opts.title}</h2>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div class="modal-body"></div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary${this.opts.btnSize? ' btn-' + this.opts.btnSize: ''}" data-bs-dismiss="modal">${hm_trans('Close')}</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        $('body').append(modal);

        this.modal = $(`#${this.opts.modalId}`);
        this.modalContent = this.modal.find('.modal-body');
        this.modalTitle = this.modal.find('.modal-title');
        this.modalFooter = this.modal.find('.modal-footer');

        this.bsModal = new bootstrap.Modal(document.getElementById(this.opts.modalId));
    };

    this.open = () => {
        this.bsModal.show();
    };

    this.hide = () => {
        this.bsModal.hide();
    };

    this.addFooterBtn = (label, classes, callback) => {
        const btn = document.createElement('button');
        btn.innerHTML = label;

        btn.classList.add('btn', ...classes.split(' '));
        if (this.opts.btnSize) {
            btn.classList.add(`btn-${this.opts.btnSize}`);
        }

        btn.addEventListener('click', callback);

        this.modalFooter.append(btn);
    };

    this.setContent = (content) => {
        this.modalContent.html(content);
    };

    this.setTitle = (title) => {
        this.modalTitle.html(title);
    };

    this.init();
}

/* user notification manager */
var Hm_Notices = {
    hide_id: false,

    show: function(msgs) {
        var message = '';
        var type = '';
        for (var i in msgs) {
            if (msgs[i].match(/^ERR/)) {
                message = msgs[i].substring(3);
                type = 'danger';
            }
            else {
                type = 'info';
                message = msgs[i];
            }

            Hm_Utils.add_sys_message(message, type);
        }
    },

    hide: function(now) {
        if (Hm_Notices.hide_id) {
            clearTimeout(Hm_Notices.hide_id);
        }
        if (now) {
            $('.sys_messages').addClass('d-none');
            Hm_Utils.clear_sys_messages();
        }
        else {
            Hm_Notices.hide_id = setTimeout(function() {
                $('.sys_messages').addClass('d-none');
                Hm_Utils.clear_sys_messages();
            }, 5000);
        }
    }
};

/* job scheduler */
var Hm_Timer = {
    jobs: [],
    interval: 1000,

    add_job: function(job, interval, defer, custom_defer) {
        if (custom_defer) {
            Hm_Timer.jobs.push([job, interval, custom_defer]);
        }
        else if (interval) {
            Hm_Timer.jobs.push([job, interval, interval]);
        }
        if (!defer) {
            try { job(); } catch(e) { console.log(e); }
        }
    },

    cancel: function(job) {
        for (var index in Hm_Timer.jobs) {
            if (Hm_Timer.jobs[index][0] == job) {
                Hm_Timer.jobs.splice(index, 1);
                return true;
            }
        }
        return false;
    },

    fire: function() {
        var job;
        var index;
        for (index in Hm_Timer.jobs) {
            job = Hm_Timer.jobs[index];
            job[2]--;
            if (job[2] === 0) {
                job[2] = job[1];
                Hm_Timer.jobs[index] = job;
                try { job[0](); } catch(e) { console.log(e); }
            }
        }
        setTimeout(Hm_Timer.fire, Hm_Timer.interval);
    }
};

/* message list */
function Message_List() {
    var self = this;
    this.sources = [];
    this.deleted = [];
    this.background = false;
    this.completed_count = 0;
    this.last_click = '';
    this.callbacks = [];
    this.sort_fld = 4;
    this.past_total = 0;
    this.just_inserted = [];

    this.page_caches = {
        'feeds': 'formatted_feed_data',
        'combined_inbox': 'formatted_combined_inbox',
        'email': 'formatted_all_mail',
        'unread': 'formatted_unread_data',
        'flagged': 'formatted_flagged_data',
        'junk': 'formatted_junk_data',
        'trash': 'formatted_trash_data',
        'sent': 'formatted_sent_data',
        'drafts': 'formatted_drafts_data',
        'tag': 'formatted_tag_data'
    };

    this.run_callbacks = function (completed) {
        var func;
        var index;
        if (completed) {
            for (index in this.callbacks) {
                func = this.callbacks[index];
                try { func(); } catch(e) { console.log(e); }
            }
        }
        fixLtrInRtl();
    };

    this.update = function(ids, msgs, type, cache) {
        var completed = false;
        this.completed_count++;
        if (this.completed_count == this.sources.length) {
            this.completed_count = 0;
            completed = true;
        }
        if ($('input[type=checkbox]', $('.message_table')).filter(function() {return this.checked; }).length > 0) {
            this.run_callbacks(completed);
            return 0;
        }
        if (msgs[0] === "") {
            this.run_callbacks(completed);
            return 0;
        }
        var msg_rows;
        if (!cache) {
            msg_rows = Hm_Utils.tbody();
        }
        else {
            msg_rows = cache;
        }
        if (!this.background && !$.isEmptyObject(msgs)) {
            $('.empty_list').remove();
        }
        var msg_ids = this.add_rows(msgs, msg_rows);
        var count = this.remove_rows(ids, msg_ids, type, msg_rows);
        this.run_callbacks(completed);
        if (!cache) {
            this.set_tab_index();
        }
        return count;
    };

    this.set_tab_index = function() {
        var msg_rows = Hm_Utils.rows();
        var count = 1;
        msg_rows.each(function() {
            $(this).attr('tabindex', count);
            count++;
        });
    };

    this.remove_rows = function(ids, msg_ids, type, msg_rows) {
        var count = $('tr', msg_rows).length;
        var parts;
        var re;
        var i;
        var id;
        for (i=0;i<ids.length;i++) {
            id = ids[i];
            if ((id+'').search('_') != -1) {
                parts = id.split('_', 2);
                re = new RegExp(parts[1]+'$');
                parts[1] = re;
            }
            else {
                parts = [id, false];
            }
            $('tr[class^='+type+'_'+parts[0]+'_]', msg_rows).filter(function() {
                var id = this.className;
                if (id.indexOf(' ') != -1) {
                    id = id.split(' ')[0];
                }
                if (!parts[1] || parts[1].exec(id)) {
                    if ($.inArray(id, msg_ids) == -1) {
                        count--;
                        $(this).remove();
                    }
                }
            });
        }
        return count;
    };

    this.sort = function(fld) {
        var listitems = Hm_Utils.rows();
        var aval;
        var bval;
        var sort_result = listitems.sort(function(a, b) {
            switch (Math.abs(fld)) {
                case 1:
                case 2:
                case 3:
                    aval = $($('td', a)[Math.abs(fld)]).text().replace(/^\s+/g, '');
                    bval = $($('td', b)[Math.abs(fld)]).text().replace(/^\s+/g, '');
                    break;
                case 4:
                default:
                    aval = $('input', $($('td', a)[Math.abs(fld)])).val();
                    bval = $('input', $($('td', b)[Math.abs(fld)])).val();
                    break;
            }
            if (fld == 4 || fld == -4 || !fld) {
                if (fld == -4) {
                    return aval - bval;
                }
                return bval - aval;
            }
            else {
                if (fld && fld < 0) {
                    return bval.toUpperCase().localeCompare(aval.toUpperCase());
                }
                return aval.toUpperCase().localeCompare(bval.toUpperCase());
            }
        });
        this.sort_fld = fld;
        Hm_Utils.tbody().html('');
        for (var i = 0, len=sort_result.length; i < len; i++) {
            Hm_Utils.tbody().append(sort_result[i]);
        }
        this.save_updated_list();
    };

    this.add_rows = function(msgs, msg_rows) {
        var msg_ids = [];
        var row;
        var id;
        var index;
        for (index in msgs) {
            row = msgs[index][0];
            id = msgs[index][1];
            if (this.deleted.indexOf(Hm_Utils.clean_selector(id)) != -1) {
                continue;
            }
            id = id.replace(/ /, '-');
            if (!$('.'+Hm_Utils.clean_selector(id), msg_rows).length) {
                this.insert_into_message_list(row, msg_rows);
                $('.'+Hm_Utils.clean_selector(id), msg_rows).show();
            }
            else {
                $('.'+Hm_Utils.clean_selector(id), msg_rows).replaceWith(row)
            }
            msg_ids.push(id);
        }
        return msg_ids;
    };

    this.insert_into_message_list = function(row, msg_rows) {
        var sort_fld = this.sort_fld;
        if (typeof sort_fld == 'undefined' || sort_fld == null) {
            sort_fld = 4;
        }
        var element = false;
        if (sort_fld == 4 || sort_fld == -4) {
            var timestr2;
            var timestr = $('.msg_timestamp', $(row)).val();
            $('tr', msg_rows).each(function() {
                timestr2 = $('.msg_timestamp', $(this)).val();
                if ((sort_fld == -4 && (timestr2*1) >= (timestr*1)) ||
                    (sort_fld == 4 && (timestr*1) >= (timestr2*1))) {
                    element = $(this);
                    return false;
                }
            });
        }
        else {
            var bval;
            var aval = $($('td', $(row))[Math.abs(sort_fld)]).text().replace(/^\s+/g, '');
            $('tr', msg_rows).each(function() {
                bval = $($('td', $(this))[Math.abs(sort_fld)]).text().replace(/^\s+/g, '');
                if ((sort_fld < 0 && aval.toUpperCase().localeCompare(bval.toUpperCase()) > 0) ||
                   (sort_fld > 0 && bval.toUpperCase().localeCompare(aval.toUpperCase()) > 0)) {
                    element = $(this);
                    return false;
                }
            });
        }
        // apply JS pagination only on aggregate folders; imap ones already have the messages sorted
        if (getListPathParam().substring(0, 5) != 'imap_' && element) {
            $(row, msg_rows).insertBefore(element);
        }
        else {
            msg_rows.append(row);
        }
        self.just_inserted.push($('.from', $(row)).text()+' - '+$('.subject', $(row)).text());
    };

    this.reset_checkboxes = function() {
        this.toggle_msg_controls();
        this.set_row_events();
    };

    this.toggle_msg_controls = function() {
        if ($('input[type=checkbox]', $('.message_table')).filter(function() {return this.checked; }).length > 0) {
            $('.msg_controls').addClass('d-flex');
            $('.msg_controls').removeClass('d-none');
            $('.mailbox_list_title').addClass('hide');
        }
        else {
            $('.msg_controls').removeClass('d-flex');
            $('.msg_controls').addClass('d-none');
            $('.mailbox_list_title').removeClass('hide');
        }
    };

    this.update_after_action = function(action_type, selected) {
        var remove = false;
        if (action_type == 'read' && getListPathParam() == 'unread') {
            remove = true;
        }
        if (action_type == 'unflag' && getListPathParam() == 'flagged') {
            remove = true;
        }
        else if (action_type == 'delete' || action_type == 'archive') {
            remove = true;
        }
        if (remove) {
            this.remove_after_action(action_type, selected);
        }
        else {
            if (action_type == 'read' || action_type == 'unread') {
                this.read_after_action(action_type, selected);
            }
            else if (action_type == 'flag' || action_type == 'unflag') {
                this.flag_after_action(action_type, selected);
            }
        }
        this.save_updated_list();
        this.reset_checkboxes();
    };

    this.save_updated_list = function() {
        if (this.page_caches.hasOwnProperty(getListPathParam())) {
            this.set_message_list_state(this.page_caches[getListPathParam()]);
            Hm_Utils.save_to_local_storage('sort_'+getListPathParam(), this.sort_fld);
        }
    };

    this.remove_after_action = function(action_type, selected) {
        var removed = 0;
        var class_name = false;
        var index;
        for (index in selected) {
            class_name = selected[index];
            $('.'+Hm_Utils.clean_selector(class_name)).remove();
            if (action_type == 'delete') {
                this.deleted.push(class_name);
            }
            removed++;
        }
        return removed;
    };

    this.read_after_action = function(action_type, selected) {
        var read = 0;
        var row;
        var index;
        var class_name = false;
        for (index in selected) {
            class_name = selected[index];
            row = $('.'+Hm_Utils.clean_selector(class_name));
            if (action_type == 'read') {
                $('.subject > div', row).removeClass('unseen');
                row.removeClass('unseen');
            }
            else {
                $('.subject > div', row).addClass('unseen');
                row.addClass('unseen');
            }
            read++;
        }
        return read;
    };

    this.flag_after_action = function(action_type, selected) {
        var flagged = 0;
        var class_name;
        var row;
        var index;
        for (index in selected) {
            class_name = selected[index];
            row = $('.'+Hm_Utils.clean_selector(class_name));
            if (action_type == 'flag') {
                $('.icon', row).html(hm_flag_image_src());
            }
            else {
                $('.icon', row).empty();
            }
            flagged++;
        }
        return flagged;
    };

    this.load_sources = function() {
        var index;
        var source;
        if (!self.background) {
            $('.src_count').text(self.sources.length);
            $('.total').text(Hm_Utils.rows().length);
        }
        for (index in self.sources) {
            source = self.sources[index];
        }
        return false;
    };

    this.select_combined_view = function() {
        if (self.page_caches.hasOwnProperty(getListPathParam())) {
            self.setup_combined_view(self.page_caches[getListPathParam()]);
        }
        else {
            if (getPageNameParam() == 'search') {
                self.setup_combined_view('formatted_search_data');
            }
            else {
                self.setup_combined_view(false);
            }
        }
        var sort_type = Hm_Utils.get_from_local_storage('sort_'+getListPathParam());
        if (sort_type != null) {
            this.sort_fld = sort_type;
            $('.combined_sort').val(sort_type);
        }
        $('.core_msg_control').on("click", function(e) {
            e.preventDefault();
            return self.message_action($(this).data('action')); });
        $('.toggle_link').on("click", function() { return self.toggle_rows(); });
        $('.refresh_link').on("click", function() { return self.load_sources(); });
    };

    this.add_sources = function(sources) {
        self.sources = sources;
    };

    this.setup_combined_view = function(cache_name) {
        self.add_sources(hm_data_sources());
        var data = Hm_Utils.get_from_local_storage(cache_name);
        var interval = Hm_Utils.get_from_global('combined_view_refresh_interval', 60);
        if (data && data.length) {
            Hm_Utils.tbody().html(data);
            if (cache_name == 'formatted_unread_data') {
                self.clear_read_messages();
            }
            self.set_row_events();
            $('.combined_sort').show();
        }
        if (getPageNameParam() == 'search' && hm_run_search() == "0") {
            Hm_Timer.add_job(self.load_sources, interval, true);
        }
        else {
            Hm_Timer.add_job(this.load_sources, interval);
        }
    };

    this.clear_read_messages = function() {
        var class_name;
        var list = Hm_Utils.get_from_local_storage('read_message_list');
        if (list && list.length) {
            list = Hm_Utils.json_decode(list);
            for (class_name in list) {
                $('.'+Hm_Utils.clean_selector(class_name)).remove();
            }
            Hm_Utils.save_to_local_storage('read_message_list', '');
        }
    };

    /* TODO: remove module specific refs */
    this.update_title = function(list_path = getListPathParam()) {
        var count = 0;
        var rows = Hm_Utils.rows();
        var tbody = Hm_Utils.tbody();
        if (list_path == 'unread') {
            count = rows.length;
            document.title = count+' '+hm_trans('Unread');
        }
        else if (list_path == 'flagged') {
            count = rows.length;
            document.title = count+' '+hm_trans('Flagged');
        }
        else if (list_path == 'combined_inbox') {
            count = $('tr .unseen', tbody).length;
            document.title = count+' '+hm_trans('Unread in Everything');
        }
        else if (list_path == 'email') {
            count = $('tr .unseen', tbody).length;
            document.title = count+' '+hm_trans('Unread in Email');
        }
        else if (list_path == 'feeds') {
            count = $('tr .unseen', tbody).length;
            document.title = count+' '+hm_trans('Unread in Feeds');
        }
    };

    this.message_action = function(action_type) {
        if (action_type == 'delete' && !hm_delete_prompt()) {
            return false;
        }
        var msg_list = $('.message_table');
        var selected = [];
        var current_list = self.filter_list();
        $('input[type=checkbox]', msg_list).each(function() {
            if (this.checked) {
                selected.push($(this).val());
            }
        });
        if (selected.length > 0) {
            var updated = false;
            Hm_Ajax.request(
                [{'name': 'hm_ajax_hook', 'value': 'ajax_message_action'},
                {'name': 'action_type', 'value': action_type},
                {'name': 'message_ids', 'value': selected}],
                function(res) {
                    if (!res) {
                        $('.message_table_body').replaceWith(current_list);
                        self.save_updated_list();
                        self.toggle_msg_controls();
                    }
                    else {
                        if (res.hasOwnProperty('move_count')) {
                            selected = Object.values(res.move_count);
                        }
                        self.update_after_action(action_type, selected);
                        updated = true;
                    }
                },
                [],
                false,
                false,
                true
            );
        }
        if (!updated) {
            self.update_after_action(action_type, selected);
        }
    };

    this.prev_next_links = function(msgUid) {
        let phref;
        let nhref;
        const target = $('.msg_headers tr').last();
        const messages = new Hm_MessagesStore(getListPathParam(), Hm_Utils.get_url_page_number());
        messages.load(false, true);
        const next = messages.getNextRowForMessage(msgUid);
        const prev = messages.getPreviousRowForMessage(msgUid);
        if (prev) {
            const prevSubject = $(prev['0']).find('.subject');
            phref = prevSubject.find('a').prop('href');
            const subject = new Option(prevSubject.text()).innerHTML;
            const plink = '<a class="plink" href="'+phref+'"><i class="prevnext bi bi-arrow-left-square-fill"></i> '+subject+'</a>';
            $('<tr class="prev"><th colspan="2">'+plink+'</th></tr>').insertBefore(target);
        }
        if (next) {
            const nextSubject = $(next['0']).find('.subject');
            nhref = nextSubject.find('a').prop('href');
            const subject = new Option(nextSubject.text()).innerHTML;
            const nlink = '<a class="nlink" href="'+nhref+'"><i class="prevnext bi bi-arrow-right-square-fill"></i> '+subject+'</a>';
            $('<tr class="next"><th colspan="2">'+nlink+'</th></tr>').insertBefore(target);
        }

        return [phref, nhref];
    };

    this.check_empty_list = function() {
        var count = Hm_Utils.rows().length;
        if (!count) {
            if (!$('.empty_list').length) {
                if (getPageNameParam() == 'search') {
                    $('.search_content').append('<div class="empty_list">'+hm_empty_folder()+'</div>');
                }
                else {
                    $('.message_list').append('<div class="empty_list">'+hm_empty_folder()+'</div>');
                }
                $(".page_links").css("display", "none");// Hide page links as message list is empty
            }
        }
        else {
            $('.empty_list').remove();
            $('.combined_sort').show();
        }
        return count === 0;
    };

    this.track_read_messages = function(class_name) {
        var read_messages = Hm_Utils.get_from_local_storage('read_message_list');
        if (read_messages && read_messages.length) {
            read_messages = Hm_Utils.json_decode(read_messages);
        }
        else {
            read_messages = {};
        }
        var added = false;
        if (!(class_name in read_messages)) {
            added = true;
        }
        read_messages[class_name] = 1;
        Hm_Utils.save_to_local_storage('read_message_list', Hm_Utils.json_encode(read_messages));
        return added;
    };

    this.adjust_unread_total = function(amount, replace) {
        var missing = $('.total_unread_count').text() === '' ? true : false;
        var current = $('.total_unread_count').text()*1;
        var new_total;
        if (replace && amount == current && amount != 0) {
            return;
        }
        if (!replace && amount == 0) {
            return;
        }
        if (replace) {
            new_total = amount;
        }
        else {
            new_total = current + amount;
        }
        if (new_total < 0) {
            new_total = 0;
        }
        if (new_total != current || missing) {
            $('.total_unread_count').html('&#160;'+new_total+'&#160;');
        }
        if (new_total > current && getPageNameParam() != 'message_list' && getListPathParam() != 'unread') {
            $('.menu_unread > a').css('font-weight', 'bold');
        }
        if (amount == -1 || new_total < current) {
            $('.menu_unread > a').css('font-weight', 'normal');
        }
        Hm_Folders.save_folder_list();
        self.past_total = current;
    };

    this.toggle_rows = function() {
        $('input[type=checkbox]', $('.message_table')).each(function () { this.checked = !this.checked; });
        self.toggle_msg_controls();
        return false;
    };

    this.filter_list = function() {
        var data = Hm_Utils.rows().clone().filter(function() {
            if (this.className == 'inline_msg') {
                return false;
            }
            return true;
        });
        var res = $('<tbody class="message_table_body"></tbody>');
        data.appendTo(res);
        return res;
    };

    this.set_message_list_state = function(list_type) {
        var data = this.filter_list();
        data.find('*[style]').attr('style', '');
        data.find('input[type=checkbox]').removeAttr('checked');
        Hm_Utils.save_to_local_storage(list_type, data.html());
        var empty = self.check_empty_list();
        if (!empty) {
            self.set_row_events();
        }
        $('.total').text(Hm_Utils.rows().length);
        self.update_title();
        if (list_type == 'formatted_unread_data') {
            self.adjust_unread_total(Hm_Utils.rows().length, true);
        }
    };

    this.select_range = function(a, b) {
        var start = false;
        var end = false;
        $('input[type=checkbox]', $('.message_table')).each(function() {
            if (end) {
                return false;
            }
            if (!start && ($(this).prop('id') == a || $(this).prop('id') == b)) {
                this.checked = 'checked';
                start = true;
                return true;
            }
            if (start && !end) {
                this.checked = 'checked';
            }
            if (start && ($(this).prop('id') == b || $(this).prop('id') == a)) {
                end = true;
                return true;
            }
        });
    };

    this.process_shift_click = function(el) {
        var id = el.prop('id');
        if (id == self.last_click) {
            return;
        }
        self.select_range(id, self.last_click);
    };

    this.set_row_events = function() {
        Hm_Utils.rows().off('click');
        Hm_Utils.rows().on('click', function(e) { self.process_row_click(e); });
    }

    this.process_row_click = function(e) {
        document.getSelection().removeAllRanges();
        var target = $(e.target);
        var class_name = target[0].className;
        var shift = e.shiftKey;
        var ctrl = e.ctrlKey;
        if (class_name == 'checkbox_label' || class_name == 'checkbox_cell') {
            ctrl = true
        }
        while (target[0].tagName != 'TR') { target = target.parent(); }
        var el = $('input[type=checkbox]', target);
        if (!shift && !ctrl) {
            navigate($('.subject a', target).prop('href'));
            return false;
        }
        else {
            self.select_on_row_click(shift, ctrl, el, target);
        }
        self.toggle_msg_controls();
        e.preventDefault();
        return false;
    }

    this.select_on_row_click = function(shift, ctrl, el, target) {
        if (shift) {
            if (self.last_click) {
                self.process_shift_click(el);
            }
            $('#'+el.prop('id')).prop('checked', 'checked');
            self.last_click = el.prop('id');
        }
        else if (ctrl) {
            if (el.prop('checked')) {
                $('#'+el.prop('id')).prop('checked', false);
            }
            else {
                $('#'+el.prop('id')).prop('checked', 'checked');
                self.last_click = el.prop('id');
            }
        }
    }

    this.set_all_mail_state = function() { self.set_message_list_state('formatted_all_mail'); };
    this.set_combined_inbox_state = function() { self.set_message_list_state('formatted_combined_inbox'); };
    this.set_flagged_state = function() { self.set_message_list_state('formatted_flagged_data'); };
    this.set_unread_state = function() { self.set_message_list_state('formatted_unread_data'); };
    this.set_search_state = function() { self.set_message_list_state('formatted_search_data'); };
    this.set_junk_state = function() { self.set_message_list_state('formatted_junk_data'); };
    this.set_trash_state = function() { self.set_message_list_state('formatted_trash_data'); };
    this.set_draft_state = function() { self.set_message_list_state('formatted_drafts_data'); };
    this.set_tag_state = function() { self.set_message_list_state('formatted_tag_data'); };
};

/* folder list */
var Hm_Folders = {
    expand_after_update: false,
    unread_counts: {},
    observer : false,

    save_folder_list: function() {
        Hm_Utils.save_to_local_storage('formatted_folder_list', $('.folder_list').html());
    },

    load_unread_counts: function() {
        var res = Hm_Utils.json_decode(Hm_Utils.get_from_local_storage('unread_counts'));
        if (!res) {
            Hm_Folders.unread_counts = {};
        }
        else {
            Hm_Folders.unread_counts = res;
        }
    },

    update_unread_counts: function(folder) {
        if (folder) {
            $('.unread_'+folder).html('&#160;'+Hm_Folders.unread_counts[folder]+'&#160;');
        }
        else {
            var name;
            for (name in Hm_Folders.unread_counts) {
                if (!Hm_Folders.unread_counts[name]) {
                    Hm_Folders.unread_counts[name] = 0;
                }
                if (getListPathParam() == name && getPageNameParam() == 'message_list') {
                    var title = document.title.replace(/^\[\d+\]/, '');
                    document.title = '['+Hm_Folders.unread_counts[name]+'] '+title;
                    /* HERE */
                }
                $('.unread_'+name).html('&#160;'+Hm_Folders.unread_counts[name]+'&#160;');
            }
        }
        Hm_Utils.save_to_local_storage('unread_counts', Hm_Utils.json_encode(Hm_Folders.unread_counts));
    },

    open_folder_list: function() {
        $('.folder_list').show();
        $('.folder_toggle').toggle();
        if (hm_mobile()) {
            $('main').hide();
        }
        else {
            $('main').css('display', 'table-cell');
        }
        Hm_Utils.save_to_local_storage('hide_folder_list', '');
        return false;
    },

    toggle_folder_list: function() {
        if ($('.folder_list').css('display') == 'none') {
            Hm_Folders.open_folder_list();
        }
        else {
            Hm_Folders.hide_folder_list();
        }
    },

    hide_folder_list: function(forget) {
        $('.folder_list').hide();
        $('.folder_toggle').show();
        if (!forget) {
            Hm_Utils.save_to_local_storage('formatted_folder_list', $('.folder_list').html());
            Hm_Utils.save_to_local_storage('hide_folder_list', '1');
            $('main').css('display', 'block');
        }
        return false;
    },

    reload_folders: function(force, expand_after_update) {
        if (document.cookie.indexOf('hm_reload_folders=1') > -1 || force) {
            Hm_Folders.expand_after_update = expand_after_update;
            var ui_state = Hm_Utils.preserve_local_settings();
            Hm_Folders.update_folder_list();
            sessionStorage.clear();
            Hm_Utils.restore_local_settings(ui_state);
            Hm_Utils.expand_core_settings();
            return true;
        }
        return false;
    },

    sort_list: function(class_name, exclude_name, last_name) {
        var folder = $('.'+class_name+' ul');
        var listitems;
        if (exclude_name) {
            listitems = $('li:not(.'+exclude_name+')', folder);
        }
        else {
            listitems = $('li', folder);
        }
        listitems = listitems.sort(function(a, b) {
            if (last_name && ($(a).attr('class') == last_name || $(b).attr('class') == last_name)) {
                return false;
            }
            if ($(b).text().toUpperCase() == 'ALL') {
                return true;
            }
           return $(a).text().toUpperCase().localeCompare($(b).text().toUpperCase());
        });
        $.each(listitems, function(_, itm) { folder.append(itm); });
    },

    update_folder_list_display: function(res) {
        $('.folder_list').html(res.formatted_folder_list);
        Hm_Folders.sort_list('email_folders', 'menu_email');
        Hm_Folders.sort_list('feeds_folders', 'menu_feeds', 'feeds_add_new');
        Hm_Folders.sort_list('main', 'menu_search', 'menu_logout');
        Hm_Utils.save_to_local_storage('formatted_folder_list', $('.folder_list').html());
        Hm_Folders.hl_selected_menu();
        Hm_Folders.folder_list_events();
        if (Hm_Folders.expand_after_update) {
            Hm_Utils.toggle_section(Hm_Folders.expand_after_update);
        }
        Hm_Folders.expand_after_update = false;
        Hm_Folders.listen_for_new_messages();
        hl_save_link();
    },

    update_folder_list: function() {
        Hm_Ajax.request(
            [{'name': 'hm_ajax_hook', 'value': 'ajax_hm_folders'}],
            Hm_Folders.update_folder_list_display,
            [],
            true
        );
        return false;
    },

    folder_list_events: function() {
        $('.imap_folder_link').on("click", function() { return expand_imap_folders($(this)); });
        $('.src_name').on("click", function() {
            var class_name = $(this).data('source');
            var icon_element = $(this).find('.bi');
            Hm_Utils.toggle_section(class_name);
            setTimeout(() => {
                var target_element = document.querySelector(class_name);
                var is_visible = Hm_Utils.is_element_visible(target_element);
                if (is_visible) {
                    icon_element.removeClass('bi-chevron-down').addClass('bi-chevron-up');
                } else {
                    icon_element.removeClass('bi-chevron-up').addClass('bi-chevron-down');
                }
            }, 0);
        });
        $('.update_message_list').on("click", function(e) {
            var text = e.target.innerHTML;
            e.target.innerHTML = '<div class="spinner-border spinner-border-sm text-dark role="status"><span class="visually-hidden">Loading...</span></div>';
            Hm_Folders.update_folder_list();
            Hm_Ajax.add_callback_hook('hm_reload_folders', function() {
                e.target.innerHTML = text;
            });
            return false;
        });
        $('.hide_folders').on("click", function() { return Hm_Folders.hide_folder_list(); });
        $('.logout_link').on("click", function(e) { return Hm_Utils.confirm_logout(); });
        if (hm_search_terms()) {
            $('.search_terms').val(hm_search_terms());
        }
        $('.search_terms').on('search', function() {
            Hm_Ajax.request([{'name': 'hm_ajax_hook', 'value': 'ajax_reset_search'}]);
        });
    },

    hl_selected_menu: function() {
        const page = getPageNameParam();
        const path = getListPathParam();
        
        $('.folder_list').find('*').removeClass('selected_menu');
        if (path) {
            if (page == 'message_list' || page == 'message') {
                $("[data-id='"+Hm_Utils.clean_selector(path)+"']").addClass('selected_menu');
                $('.menu_'+Hm_Utils.clean_selector(path)).addClass('selected_menu');
            }
            else {
                $('.menu_'+path).addClass('selected_menu');
            }
        }
        else {
            $('.menu_'+page).addClass('selected_menu');
        }
    },

    listen_for_new_messages: function() {
        var target = $('.total_unread_count').get(0);
        if (!Hm_Folders.observer) {
            Hm_Folders.observer = new MutationObserver(function(mutations) {
                $('body').trigger('new_message');
            });
        }
        else {
            Hm_Folders.observer.disconnect();
        }
        Hm_Folders.observer.observe(target, {attributes: true, childList: true, characterData: true});
    },

    load_from_local_storage: function() {
        var folder_list = Hm_Utils.get_from_local_storage('formatted_folder_list');
        if (folder_list) {
            $('.folder_list').html(folder_list);
            if (Hm_Utils.get_from_local_storage('hide_folder_list') == '1') {
                $('.folder_list').hide();
                $('.folder_toggle').show();
                $('main').css('display', 'block');
            }
            Hm_Folders.hl_selected_menu();
            Hm_Folders.folder_list_events();
            Hm_Folders.load_unread_counts();
            Hm_Folders.update_unread_counts();
            Hm_Folders.listen_for_new_messages();
            return true;
        }
        return false;
    },

    toggle_folders_event: function() {
        $('.folder_toggle').on("click", function() { return Hm_Folders.open_folder_list(); });
    }
};

/* misc */
var Hm_Utils = {
    get_url_page_number: function() {
        var index;
        var match_result;
        var page_number = 1;
        var params = location.search.substr(1).split('&');
        var param_len = params.length;

        for (index=0; index < param_len; index++) {
            match_result = params[index].match(/list_page=(\d+)/);
            if (match_result) {
                page_number = match_result[1];
                break;
            }
        }
        return page_number;
    },

    get_from_global: function(name, def) {
        if (globals[name]) {
            return globals[name];
        }
        return def;
    },

    preserve_local_settings: function() {
        var i;
        var result = {};
        var prefix = window.location.pathname.length;
        for (i in sessionStorage) {
            i = i.substr(prefix);
            if (i.match(/\..+(_setting|_section)/)) {
                result[i] = Hm_Utils.get_from_local_storage(i);
            }
        }
        return result;
    },

    restore_local_settings: function(settings) {
        var i;
        for (i in settings) {
            Hm_Utils.save_to_local_storage(i, settings[i]);
        }
    },

    reset_search_form: function() {
        Hm_Utils.save_to_local_storage('formatted_search_data', '');
        Hm_Ajax.request([{'name': 'hm_ajax_hook', 'value': 'ajax_reset_search'}],
            function(res) { window.location = '?page=search'; }, false, true);
        return false;
    },

    confirm_logout: function() {
        if (! $('#unsaved_changes').length || $('#unsaved_changes').val() == 0) {
            document.getElementById('logout_without_saving').click();
        }
        else {
            var confirmLogoutModal = new bootstrap.Modal(document.getElementById('confirmLogoutModal'), {keyboard: true})
            confirmLogoutModal.show();
            $('.confirm_logout').show();
        }
        return false;
    },

    get_path_type: function(path) {
        if (path.indexOf('_') != -1) {
            var path_parts = path.split('_');
            return path_parts[0];
        }
        return false;
    },

    parse_folder_path: function(path, path_type) {
        if (!path_type) {
            path_type = Hm_Utils.get_path_type(path);
        }
        if (path && path.indexOf(' ') != -1) {
            path = path.split(' ')[0];
        }
        var type = false;
        var server_id = false;
        var uid = false;
        var folder = '';
        var parts;

        if (path_type == 'imap') {
            parts = path.split('_', 4);
            if (parts.length == 2) {
                type = parts[0];
                server_id = parts[1];
            }
            else if (parts.length == 3) {
                type = parts[0];
                server_id = parts[1];
                folder = parts[2];
            }
            else if (parts.length == 4) {
                type = parts[0];
                server_id = parts[1];
                uid = parts[2];
                folder = parts[3];
            }
            if (type && server_id) {
                return {'type': type, 'server_id' : server_id, 'folder' : folder, 'uid': uid};
            }
        }
        else if (path_type == 'feeds') {
            parts = path.split('_', 3);
            if (parts.length > 1) {
                type = parts[0];
                server_id = parts[1];
            }
            if (parts.length == 3) {
                uid = parts[2];
            }
            if (type && server_id) {
                return {'type': type, 'server_id' : server_id, 'uid': uid};
            }
        }
        return false;
    },

    toggle_section: function(class_name, force_on, force_off) {
        if ($(class_name).length) {
            if (force_off) {
                $(class_name).css('display', 'block');
            }
            if (force_on) {
                $(class_name).css('display', 'none');
            }
            $(class_name).toggle();
            Hm_Utils.save_to_local_storage('formatted_folder_list', $('.folder_list').html());
        }
        return false;
    },

    toggle_page_section: function(class_name) {
        if ($(class_name).length) {
            $(class_name).toggle();
            Hm_Utils.save_to_local_storage(class_name, $(class_name).css('display'));
        }
        return false;
    },

    expand_core_settings: function() {
        var sections = Hm_Utils.get_core_settings();
        var key;
        var dsp;
        for (key in sections) {
            dsp = sections[key];
            if (!dsp) {
                dsp = 'none';
            }
            $(key).css('display', dsp);
            Hm_Utils.save_to_local_storage(key, dsp);
        }
    },

    get_core_settings: function() {
        var dsp;
        var results = {}
        var i;
        var hash = window.location.hash;
        var sections = ['.wp_notifications_setting', '.github_all_setting', '.tfa_setting', '.sent_setting', '.general_setting', '.unread_setting', '.flagged_setting', '.all_setting', '.email_setting', '.junk_setting', '.trash_setting', '.drafts_setting','.tag_setting'];
        for (i=0;i<sections.length;i++) {
            dsp = Hm_Utils.get_from_local_storage(sections[i]);
            if (hash) {
                if (hash.replace('#', '.') != sections[i]) {
                    dsp = 'none';
                }
                else {
                    dsp = 'table-row';
                }
            }
            results[sections[i]] = dsp;
        }
        return results;
    },

    get_from_local_storage: function(key) {
        var prefix = window.location.pathname;
        key = prefix+key;
        var res = false;
        if (hm_encrypt_local_storage()) {
             res = Hm_Crypt.decrypt(sessionStorage.getItem(key));
        }
        else {
            res = sessionStorage.getItem(key);
        }
        return res;
    },

    search_from_local_storage: function(pattern) {
        const results = [];
        const key_pattern = new RegExp(pattern);
        for (let i = 0; i < sessionStorage.length; i++) {
            const key = sessionStorage.key(i);
            if (key_pattern.test(key)) {
                const value = get_from_local_storage(key);
                results.push({ key: key, value: value });
            }
        }
        return results;
    },

    save_to_local_storage: function(key, val) {
        var prefix = window.location.pathname;
        key = prefix+key;
        if (hm_encrypt_local_storage()) {
            val = Hm_Crypt.encrypt(val);
        }
        if (Storage !== void(0)) {
            try { sessionStorage.setItem(key, val); } catch(e) {
                sessionStorage.clear();
                sessionStorage.setItem(key, val);
            }
            if (sessionStorage.getItem(key) === null) {
                sessionStorage.clear();
                sessionStorage.setItem(key, val);
            }
        }
        return false;
    },

    clean_selector: function(str) {
        return str.replace(/(:|\.|\[|\]|\/)/g, "\\$1");
    },

    toggle_long_headers: function() {
        $('.long_header').toggle();
        $('.all_headers').toggle();
        $('.small_headers').toggle();
        return false;
    },

    set_unsaved_changes: function(state) {
        $('#unsaved_changes').val(state);
    },

    /**
     * Shows pending messages added with the add_sys_message method
     */
    show_sys_messages: function() {
        $('.sys_messages').removeClass('d-none');
    },

    /**
     *
     * @param {*} msg : The alert message to display
     * @param {*} type : The type of message to display, depending on the type of boostrap5 alert (primary, secondary, success, danger, warning, info, light, dark )
     */
    add_sys_message: function(msg, type = 'info') {
        if (!msg) {
            return;
        }
        const icon = type == 'success' ? 'bi-check-circle' : 'bi-exclamation-circle';
        $('.sys_messages').append('<div class="alert alert-'+type+' alert-dismissible fade show" role="alert"><i class="bi '+icon+' me-2"></i><span class="' + type + '">'+msg+'</span><button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>');
        this.show_sys_messages();
    },

    clear_sys_messages: function () {
        $('.sys_messages').html('');
    },

    cancel_logout_event: function() {
        $('.cancel_logout').on("click", function() { $('.confirm_logout').hide(); return false; });
    },

    json_encode: function(val) {
        try {
            return JSON.stringify(val);
        }
        catch (e) {
            return false;
        }
    },

    json_decode: function(val, original) {
        try {
            return JSON.parse(val);
        }
        catch (e) {
            if (original === true) {
                return val;
            }
            return false;
        }
    },

    rows: function() {
        return $('.message_table_body > tr').not('.inline_msg');
    },

    tbody: function() {
        return $('.message_table_body');
    },

    html_entities: function(str) {
        return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    },

    test_connection: function() {
        $('.offline').hide();
        Hm_Ajax.request(
            [{'name': 'hm_ajax_hook', 'value': 'ajax_test'}],
            false, [], false, false, false);
    },

    is_element_visible: function (elem) {
        if (!elem) return false;
        var style = window.getComputedStyle(elem);
        return style.display !== 'none' && style.visibility !== 'hidden' && elem.offsetWidth > 0 && elem.offsetHeight > 0;
    },

    redirect: function (path) {
        if (! path) {
            path = window.location.href;
        }
        window.location.href = path;
    },

    is_valid_email: function (val) {
        return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val)
    },
};

var Hm_Crypt = {
    decrypt: function(ciphertext) {
        try {
            ciphertext = atob(ciphertext);
            if (!ciphertext || ciphertext.length < 200) {
                return false;
            }
            var secret = $('#hm_page_key').val();
            var payload = ciphertext.substr(192);
            var hmac_sig = ciphertext.substr(128, 64);
            var salt = ciphertext.substr(0, 128);
            var digest = forge.md.sha512.create();
            var hmac = forge.hmac.create();
            var key = forge.pkcs5.pbkdf2(secret, salt, 100, 32, digest);
            var hmac_key = forge.pkcs5.pbkdf2(secret, salt, 101, 32, digest);

            hmac.start(digest, hmac_key);
            hmac.update(payload);
            if (hmac.digest().data != hmac_sig) {
                return false;
            }
            var iv = forge.pkcs5.pbkdf2(secret, salt, 100, 16, digest);
            var decipher = forge.cipher.createDecipher('AES-CBC', key);
            decipher.start({iv: iv});
            decipher.update(forge.util.createBuffer(payload, 'raw'));
            decipher.finish();
            return forge.util.decodeUtf8(decipher.output.data);
        } catch(e) {
            return false;
        }
    },

    encrypt: function(plaintext) {
        try {
            var secret = $('#hm_page_key').val();
            var salt = forge.random.getBytesSync(128);
            var digest = forge.md.sha512.create();
            var key = forge.pkcs5.pbkdf2(secret, salt, 100, 32, digest);
            var hmac_key = forge.pkcs5.pbkdf2(secret, salt, 101, 32, digest);
            var iv = forge.pkcs5.pbkdf2(secret, salt, 100, 16, digest);
            var hmac = forge.hmac.create();
            var cipher = forge.cipher.createCipher('AES-CBC', key);
            cipher.start({iv: iv});
            cipher.update(forge.util.createBuffer(plaintext, 'utf8'));
            cipher.finish();
            hmac.start(digest, hmac_key);
            hmac.update(cipher.output.data);
            return btoa(salt+hmac.digest().data+cipher.output.data);
        } catch(e) {
            return false;
        }
    },
}

var update_password = function(id) {
    var pass = $('#update_pw_'+id).val();
    if (pass && pass.length) {
        Hm_Ajax.request(
            [{'name': 'hm_ajax_hook', 'value': 'ajax_update_server_pw'},
            {'name': 'password', 'value': pass},
            {'name': 'server_pw_id', 'value': id}],
            function(res) {
                if (res.connect_status) {
                    $('.div_'+id).remove();
                    if ($('.home_password_dialogs div').length == 1) {
                        $('.home_password_dialogs').remove();
                    }
                }
            }
        );
    }
}

var elog = function(val) {
    if (hm_debug()) {
        console.log(val);
    }
};

var hl_save_link = function() {
    if ($('.save_reminder').length) {
        $('.menu_save a').css('font-weight', 'bold');
    }
    else {
        $('.menu_save a').css('font-weight', 'normal');
    }
};

var reset_default_value_checkbox = function() {
    var checkbox = $(this).closest('.tooltip_restore').prev('input[type="checkbox"]');
    var default_value = checkbox.data('default-value');
    default_value = (default_value === 'true');
    checkbox.prop('checked', default_value);
    checkbox.prop('disabled', true);
};

var reset_default_timezone = function() {
    var hm_default_timezone = window.hm_default_timezone;
    $('#timezone').val(hm_default_timezone);
}
var reset_default_value_select = function() {
    var dropdown = $(this).closest('.tooltip_restore').prev('select');
    var default_value = dropdown.data('default-value');
    dropdown.val(default_value);
}

var reset_default_value_input = function() {
    var inputField = $(this).closest('.tooltip_restore').prev('input');
    var default_value = inputField.data('default-value');
    inputField.val(default_value);
}

var decrease_servers = function(section) {
    const element = document.querySelector(`.server_count .${section}_server_count`);
    const value = parseInt(element.textContent);
    if (value > 0) {
        element.innerHTML  = value - 1;
    }

    if (value === 1) {
        if ($(`.${section}_server`)) {
            $(`.${section}_server`).prev().fadeOutAndRemove();
        }
    }
};

var err_msg = function(msg) {
    return "ERR"+hm_trans(msg);
};

var hm_spinner = function(type = 'border', size = '') {
    return `<div class="d-flex justify-content-center spinner">
        <div class="spinner-${type} text-dark${size ? ` spinner-${type}-${size}` : ''}" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>`
};

var fillImapData = function(details) {
    $('#srv_setup_stepper_imap_address').val(details.server);
    $('#srv_setup_stepper_imap_port').val(details.port);
    $('#srv_setup_stepper_imap_server_id').val(details.id);
    $('#srv_setup_stepper_imap_hide_from_c_page').prop("checked", details.hide);
    if (details.sieve_config_host) {
        $('#srv_setup_stepper_imap_sieve_host').val(details.sieve_config_host);
        $("#srv_setup_stepper_enable_sieve").trigger("click", false);
        $('#srv_setup_stepper_imap_sieve_mode_tls')
                            .prop('checked', details.tls)
                            .trigger('change');
    }

    if(details.tls) {
        $("input[name='srv_setup_stepper_imap_tls'][value='true']").prop("checked", true);
    } else {
        $("input[name='srv_setup_stepper_imap_tls'][value='false']").prop("checked", true);
    }
};

var fillSmtpData = function(details) {
    $('#srv_setup_stepper_smtp_server_id').val(details.id);
    $('#srv_setup_stepper_smtp_address').val(details.server);
    $('#srv_setup_stepper_smtp_port').val(details.port);
};

var fillJmapData = function(details) {
    $('#srv_setup_stepper_imap_server_id').val(details.id);
    $('#srv_setup_stepper_only_jmap').trigger('click');
    $('#srv_setup_stepper_jmap_address').val(details.server);
    $('#srv_setup_stepper_imap_hide_from_c_page').prop("checked", details.hide);
};

var imap_smtp_edit_action = function(event) {
    resetQuickSetupForm();
    event.preventDefault();
    Hm_Notices.hide(true);
    var details = $(this).data('server-details');

    $('.imap-jmap-smtp-btn').trigger('click');
    $('#srv_setup_stepper_profile_name').trigger('focus');
    $('#srv_setup_stepper_profile_name').val(details.name);
    $('#srv_setup_stepper_email').val(details.user);
    $('#srv_setup_stepper_password').val('');
    $('#srv_setup_stepper_profile_reply_to').val('');
    $('#srv_setup_stepper_create_profile').trigger("click", true);

    if ($(this).data('type') == 'jmap') {
        fillJmapData(details);
    } else if ($(this).data('type') == 'imap') {
        fillImapData(details);
        var smtpDetails = $('[data-type="smtp"][data-id="'+details.name+'"]');
        if (smtpDetails.length) {
            fillSmtpData(smtpDetails.data('server-details'));
        } else {
            $('#srv_setup_stepper_is_sender').trigger("click", true);
        }
    } else {
        fillSmtpData(details);
        var imapDetails = $('[data-type="imap"][data-id="'+details.name+'"]');
        if (imapDetails.length) {
            fillImapData(imapDetails.data('server-details'));
        } else {
            $('#srv_setup_stepper_is_receiver').trigger("click", true);
        }
    }
};

var hasLeadingOrTrailingSpaces = function(str) {
    return str !== str.trim();
};

/* create a default message list object */
var Hm_Message_List = new Message_List();

function sortHandlerForMessageListAndSearchPage() {
    $('.combined_sort').on("change", function() { Hm_Message_List.sort($(this).val()); });
    $('.source_link').on("click", function() { $('.list_sources').toggle(); $('#list_controls_menu').hide(); return false; });
    if (getListPathParam() == 'unread' && $('.menu_unread > a').css('font-weight') == 'bold') {
        $('.menu_unread > a').css('font-weight', 'normal');
        Hm_Folders.save_folder_list();
    }
}

/* executes on onload, has access to other module code */
$(function() {
    /* Remove disabled attribute to send checkbox */
    $('.save_settings').on("click", function (e) {
        $('.general_setting input[type=checkbox]').each(function () {
            if (this.hasAttribute('disabled') && this.checked) {
                this.removeAttr('disabled');
            }
        });
    })
    $('.reset_factory_button').on('click', function() { return hm_delete_prompt(); });

    /* check for folder reload */
    var reloaded = Hm_Folders.reload_folders();

    /* setup a few page wide event handlers */
    Hm_Utils.cancel_logout_event();
    Hm_Folders.toggle_folders_event();

    /* fire up the job scheduler */
    Hm_Timer.fire();
    
    /* show any pending notices */
    Hm_Utils.show_sys_messages();

    /* load folder list */
    if (hm_is_logged() && (!reloaded && !Hm_Folders.load_from_local_storage())) {
        Hm_Folders.update_folder_list();
    }

    hl_save_link();
    if (hm_mailto()) {
        try { navigator.registerProtocolHandler("mailto", "?page=compose&compose_to=%s", "Cypht"); } catch(e) {}
    }

    if (hm_mobile()) {
        swipe_event(document.body, function() { Hm_Folders.open_folder_list(); }, 'right');
        swipe_event(document.body, function() { Hm_Folders.hide_folder_list(); }, 'left');
        $('.list_controls.on_mobile').show();
        $('.list_controls.no_mobile').hide();
    } else {
        $('.list_controls.on_mobile').hide();
    }
    $('.offline').on("click", function() { Hm_Utils.test_connection(); });

    if (hm_check_dirty_flag()) {
        $('form:not(.search_terms)').areYouSure();
    }

    $(document).on('paste', '.warn_on_paste', function (e) {
        const paste = (e.clipboardData || window.clipboardData).getData('text');
        if (hasLeadingOrTrailingSpaces(paste)) {
            Hm_Utils.add_sys_message(hm_trans('Pasted text has leading or trailing spaces'), 'danger');
        }
    });

    fixLtrInRtl()
});

/*
   check if language is rtl, it checks some elements based on the page and
   if those contain non-Arabic letters, the ltr class will be added and it
   will fix the direction and font.
*/
function fixLtrInRtl() {
    if (hm_language_direction() != "rtl") {
        return
    }

    function isTextEnglish(text) {
        if (text === "") {
            return false
        }
        var RTL = ['ا', 'ب', 'پ', 'ت', 'س', 'ج', 'چ', 'ح', 'خ', 'د', 'ذ', 'ر', 'ز', 'ژ', 'س', 'ش', 'ص', 'ض', 'ط', 'ظ', 'ع', 'غ', 'ف', 'ق', 'ک', 'گ', 'ل', 'م', 'ن', 'و', 'ه', 'ی'];
        for (var char of RTL) {
            if (text.indexOf(char) > -1) {
                return false;
            }
        }
        return true;
    };

    function getElements() {
        var pageName = getPageNameParam();
        if (pageName == "message") {
            return [...$(".msg_text_inner").find('*'), ...$(".header_subject").find("*")];
        }
        if (pageName == "message_list" || pageName == "?page=history") {
            return [...$('*')];
        }
        return []
    }

    setTimeout(function(){
        var elements = getElements()
        for (var index = 0; index < elements.length; index++) {
            if (isTextEnglish(elements[index].textContent)) {
                if ((elements[index].className).indexOf("ltr") > -1) {
                    continue
                }
                elements[index].className = elements[index].className + ' ltr';
            };
        }
    }, 0)
}

function listControlsMenu() {
    $('#list_controls_menu').toggleClass('show')
    $('.list_sources').hide();
}

var resetStepperButtons = function() {
    $('.step_config-actions button').removeAttr('disabled');
    $('#stepper-action-finish').text($('#stepper-action-finish').text().slice(0, -3));
};

function submitSmtpImapServer() {
    $('.step_config-actions button').attr('disabled', true);
    $('#stepper-action-finish').text($('#stepper-action-finish').text() + '...');

    var requestData = [
        { name: 'hm_ajax_hook', value: 'ajax_quick_servers_setup' },
        { name: 'srv_setup_stepper_profile_name', value: $('#srv_setup_stepper_profile_name').val() },
        { name: 'srv_setup_stepper_email', value: $('#srv_setup_stepper_email').val() },
        { name: 'srv_setup_stepper_password', value: $('#srv_setup_stepper_password').val() },
        { name: 'srv_setup_stepper_provider', value: $('#srv_setup_stepper_provider').val() },
        { name: 'srv_setup_stepper_is_sender', value: $('#srv_setup_stepper_is_sender').prop('checked') },
        { name: 'srv_setup_stepper_is_receiver', value: $('#srv_setup_stepper_is_receiver').prop('checked') },
        { name: 'srv_setup_stepper_smtp_address', value: $('#srv_setup_stepper_smtp_address').val() },
        { name: 'srv_setup_stepper_smtp_port', value: $('#srv_setup_stepper_smtp_port').val() },
        { name: 'srv_setup_stepper_smtp_tls', value: $('input[name="srv_setup_stepper_smtp_tls"]:checked').val() },
        { name: 'srv_setup_stepper_imap_address', value: $('#srv_setup_stepper_imap_address').val() },
        { name: 'srv_setup_stepper_imap_port', value: $('#srv_setup_stepper_imap_port').val() },
        { name: 'srv_setup_stepper_imap_tls', value: $('input[name="srv_setup_stepper_imap_tls"]:checked').val() },
        { name: 'srv_setup_stepper_enable_sieve', value: $('#srv_setup_stepper_enable_sieve').prop('checked') },
        { name: 'srv_setup_stepper_imap_sieve_mode_tls', value: $('#srv_setup_stepper_imap_sieve_mode_tls').prop('checked') },
        { name: 'srv_setup_stepper_create_profile', value: $('#srv_setup_stepper_create_profile').prop('checked') },
        { name: 'srv_setup_stepper_profile_is_default', value: $('#srv_setup_stepper_profile_is_default').prop('checked') },
        { name: 'srv_setup_stepper_profile_signature', value: $('#srv_setup_stepper_profile_signature').val() },
        { name: 'srv_setup_stepper_profile_reply_to', value: $('#srv_setup_stepper_profile_reply_to').val() },
        { name: 'srv_setup_stepper_imap_sieve_host', value: $('#srv_setup_stepper_imap_sieve_host').val() },
        { name: 'srv_setup_stepper_only_jmap', value: $('input[name="srv_setup_stepper_only_jmap"]:checked').val() },
        { name: 'srv_setup_stepper_imap_hide_from_c_page', value: $('input[name="srv_setup_stepper_imap_hide_from_c_page"]:checked').val() },
        { name: 'srv_setup_stepper_jmap_address', value: $('#srv_setup_stepper_jmap_address').val() },
        { name: 'srv_setup_stepper_imap_server_id', value: $('#srv_setup_stepper_imap_server_id').val() },
        { name: 'srv_setup_stepper_smtp_server_id', value: $('#srv_setup_stepper_smtp_server_id').val() }
    ];

    Hm_Ajax.request(requestData, function(res) {
        resetStepperButtons();
        if (res.just_saved_credentials) {
            if (res.imap_server_id) {
                Hm_Ajax.request(
                    [{'name': 'hm_ajax_hook', 'value': 'ajax_imap_accept_special_folders'},
                    {'name': 'imap_server_id', value: res.imap_server_id},
                    {'name': 'imap_service_name', value: res.imap_service_name}],
                    function () {
                        resetQuickSetupForm();
                        Hm_Utils.redirect();
                    }
                );
            } else {
                resetQuickSetupForm();
                Hm_Utils.redirect();
            }
        }
    }, null, null, undefined, function (res) {
        resetStepperButtons();
    });
}

function resetQuickSetupForm() {
    $('#srv_setup_stepper_stepper').find('form').trigger('reset');
    display_config_step(0);

    //Initialize the form
    $("#srv_setup_stepper_profile_reply_to").val('');
    $("#srv_setup_stepper_profile_signature").val('');
    $("#srv_setup_stepper_profile_name").val('');
    $("#srv_setup_stepper_email").val('');
    $("#srv_setup_stepper_password").val('');
    $("#srv_setup_stepper_jmap_address").val('');
    $("#srv_setup_stepper_profile_is_default").prop('checked', true);
    $("#srv_setup_stepper_create_profile").prop('checked', true);
    $("#srv_setup_stepper_imap_server_id").val('');
    $("#srv_setup_stepper_smtp_server_id").val('');
    $("#srv_setup_stepper_is_sender").prop('checked', true);
    $("#srv_setup_stepper_is_receiver").prop('checked', true);
    $("#srv_setup_stepper_enable_sieve").prop('checked', false);
    $("#srv_setup_stepper_imap_sieve_mode_tls").prop('checked', false);
    $("#srv_setup_stepper_only_jmap").prop('checked', false);
    $('#step_config-imap_bloc').show();
    $('#step_config-smtp_bloc').show();
    $('#srv_setup_stepper_profile_bloc').show();

    Hm_Utils.set_unsaved_changes(1);
    Hm_Folders.reload_folders(true);
}

function handleCreateProfileCheckboxChange(checkbox) {
    if(checkbox.checked) {
        $('#srv_setup_stepper_profile_bloc').show();
    }else{
        $('#srv_setup_stepper_profile_bloc').hide();
    }
}

function handleSieveStatusChange (checkbox) {
    if(checkbox.checked) {
        $('#srv_setup_stepper_imap_sieve_host_bloc').show();
    }else{
        $('#srv_setup_stepper_imap_sieve_host_bloc').hide();
    }
}
function handleSmtpImapCheckboxChange(checkbox) {
    if (checkbox.id === 'srv_setup_stepper_is_receiver') {
        if(checkbox.checked) {
            $('#step_config-imap_bloc').show();
            $('#step_config_combined_view').show();
            $('#srv_setup_stepper_jmap_select_box').show();
            $('#srv_setup_stepper_only_jmap').prop('checked', false);
        } else {
            $('#step_config-imap_bloc').hide();
            $('#step_config-jmap_bloc').hide();
            $('#step_config_combined_view').hide();
            $('#srv_setup_stepper_jmap_select_box').hide();
        }
    }

    if (checkbox.id === 'srv_setup_stepper_is_sender') {
        console.log("checkbox.checked", checkbox.checked)
        if(checkbox.checked) $('#step_config-smtp_bloc').show();
        else $('#step_config-smtp_bloc').hide();
    }

    if ($('#srv_setup_stepper_is_sender').prop('checked') && $('#srv_setup_stepper_is_receiver').prop('checked')) {
        $('#srv_setup_stepper_profile_bloc').show();
        $('#srv_setup_stepper_profile_checkbox_bloc').show();
        
    } else if(! $('#srv_setup_stepper_is_sender').prop('checked') || ! $('#srv_setup_stepper_is_receiver').prop('checked')) {
        $('#srv_setup_stepper_profile_bloc').hide();
        $('#srv_setup_stepper_profile_checkbox_bloc').hide();
    }
}

function handleJmapCheckboxChange(checkbox) {
    if (checkbox.checked) {
        $('#step_config-jmap_bloc').show();
        $('#step_config-imap_bloc').hide();
        if (! $('#srv_setup_stepper_enable_sieve').prop('checked')) {
            $('#srv_setup_stepper_imap_sieve_host_bloc').hide();
        }
    } else {
        $('#step_config-jmap_bloc').hide();
        $('#step_config-imap_bloc').show();
    }
}

function handleProviderChange(select) {
    let providerKey = select.value;
    if(providerKey) {
        getServiceDetails(providerKey);
    }else{
        $("#srv_setup_stepper_smtp_address").val('');
        $("#srv_setup_stepper_smtp_port").val(465);
        $("#srv_setup_stepper_imap_address").val('');
        $("#srv_setup_stepper_imap_port").val(993);
    }
}

function setDefaultReplyTo(val) {
    if (Hm_Utils.is_valid_email(val)) {
        $("#srv_setup_stepper_profile_reply_to").val(val);
    }
}
function display_config_step(stepNumber) {
    if(stepNumber === 2) {

        var isValid = true;

        [   {key: 'srv_setup_stepper_profile_name', value: $('#srv_setup_stepper_profile_name').val()},
            {key: 'srv_setup_stepper_email', value: $('#srv_setup_stepper_email').val()},
            {key: 'srv_setup_stepper_password', value: $('#srv_setup_stepper_password').val()}].forEach((item) => {
            if (!item.value) {
                if (item.key == 'srv_setup_stepper_password' && ($('#srv_setup_stepper_imap_server_id').val() || $('#srv_setup_stepper_smtp_server_id').val())) {
                    $(`#${item.key}-error`).text('');
                } else {
                    $(`#${item.key}-error`).text('Required');
                    isValid = false;
                }
                
            } else {
                $(`#${item.key}-error`).text('');
            }
        })

        if (!isValid) {
            return
        }

        let providerKey = getEmailProviderKey($('#srv_setup_stepper_email').val());
        getServiceDetails(providerKey);
        setDefaultReplyTo($('#srv_setup_stepper_email').val());
    }

    if(stepNumber === 3) {
        var requiredFields = [];
        var isValid = true;

        if(!$('#srv_setup_stepper_is_sender').is(':checked') && !$('#srv_setup_stepper_is_receiver').is(':checked')){
            $('#srv_setup_stepper_serve_type-error').text('Required');
            return;
        }

        if($('#srv_setup_stepper_is_sender').is(':checked') &&
            $('#srv_setup_stepper_is_receiver').is(':checked') &&
            $('#srv_setup_stepper_only_jmap').is(':checked')){
            requiredFields.push(
                {key: 'srv_setup_stepper_jmap_address', value: $('#srv_setup_stepper_jmap_address').val()},
            )
        }else {
            if($('#srv_setup_stepper_is_sender').is(':checked')){
                requiredFields.push(
                    {key: 'srv_setup_stepper_smtp_address', value: $('#srv_setup_stepper_smtp_address').val()},
                    {key: 'srv_setup_stepper_smtp_port', value: $('#srv_setup_stepper_smtp_port').val()},
                )
            }

            if($('#srv_setup_stepper_is_receiver').is(':checked')) {
                requiredFields.push(
                    {key: 'srv_setup_stepper_imap_address', value: $('#srv_setup_stepper_imap_address').val()},
                    {key: 'srv_setup_stepper_imap_port', value: $('#srv_setup_stepper_imap_port').val()},
                )
            }
        }

        if($('#srv_setup_stepper_enable_sieve').is(':checked')) {
            requiredFields.push(
                {key: 'srv_setup_stepper_imap_sieve_host', value: $('#srv_setup_stepper_imap_sieve_host').val()},
                {key: 'srv_setup_stepper_imap_sieve_mode_tls', value: $('#srv_setup_stepper_imap_sieve_mode_tls').val()},
            )
        }

        requiredFields.forEach((item) => {
            if(!item.value) {
                $(`#${item.key}-error`).text('Required');
                isValid = false;
            }
            else $(`#${item.key}-error`).text('');
        })


        if(!isValid) return

        submitSmtpImapServer();
        return
    }
    // Hide all step elements
    var steps = document.querySelectorAll('.step_config');
    for (var i = 0; i < steps.length; i++) {
        steps[i].style.display = 'none';
    }

    // Show the selected step
    var selectedStep = document.getElementById('step_config_' + stepNumber);

    if (selectedStep) {
        selectedStep.style.display = 'block';
        if(stepNumber === 0) $('.srv_setup_stepper_btn').show();
    }
}

function getServiceDetails(providerKey){
    if(providerKey) {
        $("#srv_setup_stepper_provider").val(providerKey);

        Hm_Ajax.request(
            [
                {'name': 'hm_ajax_hook', 'value': 'ajax_get_nux_service_details'},
                {'name': 'nux_service', 'value': providerKey},],
            function(res) {
                if(res.service_details){
                    let serverConfig = JSON.parse(res.service_details)

                    $("#srv_setup_stepper_smtp_address").val(serverConfig.smtp.server);
                    $("#srv_setup_stepper_smtp_port").val(serverConfig.smtp.port);

                    if(serverConfig.smtp.tls)$("input[name='srv_setup_stepper_smtp_tls'][value='true']").prop("checked", true);
                    else $("input[name='srv_setup_stepper_smtp_tls'][value='false']").prop("checked", true);

                    $("#srv_setup_stepper_imap_address").val(serverConfig.server);
                    $("#srv_setup_stepper_imap_port").val(serverConfig.port);

                    if(serverConfig.tls)$("input[name='srv_setup_stepper_imap_tls'][value='true']").prop("checked", true);
                    else $("input[name='srv_setup_stepper_imap_tls'][value='false']").prop("checked", true);

                    if (serverConfig.hasOwnProperty('sieve')) {
                        $('#srv_setup_stepper_enable_sieve')
                            .prop('checked', true)
                            .trigger('change');
                        $('#srv_setup_stepper_imap_sieve_mode_tls')
                            .prop('checked', serverConfig.sieve.tls)
                            .trigger('change');
                        $('#srv_setup_stepper_imap_sieve_host').val(serverConfig.sieve.host + ':' + serverConfig.sieve.port);
                    } else {
                        $('#srv_setup_stepper_enable_sieve')
                            .prop('checked', false)
                            .trigger('change');
                        $('#srv_setup_stepper_imap_sieve_mode_tls')
                            .prop('checked', false)
                            .trigger('change');
                        $('#srv_setup_stepper_imap_sieve_host').val('');
                    }
                }
            },
            [],
            false
        );
    }
}

function getEmailProviderKey(email) {
    const emailProviderMap = {
        "all-inkl": ["all-inkl.de", "all-inkl.com"],
        "aol": ["aol.com"],
        "fastmail": ["fastmail.com"],
        "gandi": ["gandi.net"],
        "gmail": ["gmail.com"],
        "gmx": ["gmx.com", "gmx.de"],
        "icloud": ["icloud.com"],
        "inbox": ["inbox.com"],
        "kolabnow": ["kolabnow.com"],
        "mailcom": ["mail.com"],
        "mailbox": ["mailbox.org"],
        "migadu": ["migadu.com"],
        "office365": ["office365.com"],
        "outlook": ["outlook.com", "outlook.fr"],
        "postale": ["postale.io"],
        "yahoo": ["yahoo.com", "yahoo.fr"],
        "yandex": ["yandex.com", "yandex.ru"],
        "zoho": ["zoho.com"]
    };

    const emailParts = email.split("@");

    if(emailParts.length !== 2) return "";

    const provider = emailParts[1].toLowerCase();

    for (const providerKey in emailProviderMap) {
        if (emailProviderMap[providerKey].some(p => p.includes(provider))) {
            return providerKey;
        }
    }

    return "";
}

/**
 * Allow external resources for the provided element.
 *
 * @param {HTMLElement} element - The element containing the allow button.
 * @param {string} messagePart - The message part associated with the resource.
 * * @param {Boolean} inline - true if the message is displayed in inline mode, false otherwise.
 * @returns {void}
 */
function handleAllowResource(element, messagePart, inline = false) {
    element.querySelector('a').addEventListener('click', function (e) {
        e.preventDefault();
        $('.msg_text_inner').remove();
        const externalSources = $(this).data('src').split(',');
        externalSources?.forEach((source) => Hm_Utils.save_to_local_storage(source, 1));
        if (inline) {
            return inline_imap_msg(window.inline_msg_details, window.inline_msg_uid);
        }
        return get_message_content(messagePart, false, false, false, false, false);
    });
}

/**
 * Create and insert in the DOM an element containing a message and a button to allow the resource.
 *
 * @param {HTMLElement} element - The element having the blocked resource.
 * @param {Boolean} inline - true if the message is displayed in inline mode, false otherwise.
 * @returns {void}
 */
function handleInvisibleResource(element, inline = false) {
    const dataSrc = element.dataset.src;

    const allowResource = document.createElement('div');
    allowResource.classList.add('alert', 'alert-warning', 'p-1');

    const source = dataSrc.substring(0, 40) + (dataSrc.length > 40 ? '...' : '');
    allowResource.innerHTML = `Source blocked: ${element.alt ? element.alt : source}
    <a href="#" data-src="${dataSrc}" class="btn btn-light btn-sm">
    Allow</a></div>
    `;

    document.querySelector('.external_notices').insertAdjacentElement('beforeend', allowResource);
    handleAllowResource(allowResource, element.dataset.messagePart, inline);
}

const handleExternalResources = (inline) => {
    const messageContainer = document.querySelector('.msg_text_inner');
    messageContainer.insertAdjacentHTML('afterbegin', '<div class="external_notices"></div>');

    const sender = document.querySelector('#contact_info').textContent.match(EMAIL_REGEX)[0] + '_external_resources_allowed';
    const elements = messageContainer.querySelectorAll('[data-src]');
    const blockedResources = [];
    elements.forEach(function (element) {

        const dataSrc = element.dataset.src;
        const senderAllowed = Hm_Utils.get_from_local_storage(sender);
        const allowed = Hm_Utils.get_from_local_storage(dataSrc);

        switch (Number(allowed) || Number(senderAllowed)) {
            case 1:
                element.src = dataSrc;
                break;
            default:
                if ((allowed || senderAllowed) === null) {
                    Hm_Utils.save_to_local_storage(dataSrc, 0);
                }
                handleInvisibleResource(element, inline);
                blockedResources.push(dataSrc);
                break;
        }
    });

    const noticesElement = document.createElement('div');
    noticesElement.classList.add('notices');

    if (blockedResources.length) {
        const allowAll = document.createElement('div');
        allowAll.classList.add('allow_image_link', 'all', 'fw-bold');
        allowAll.textContent = 'For security reasons, external resources have been blocked.';
        if (blockedResources.length > 1) {
            const allowAllLink = document.createElement('a');
            allowAllLink.classList.add('btn', 'btn-light', 'btn-sm');
            allowAllLink.href = '#';
            allowAllLink.dataset.src = blockedResources.join(',');
            allowAllLink.textContent = 'Allow all';
            allowAll.appendChild(allowAllLink);
            handleAllowResource(allowAll, elements[0].dataset.messagePart, inline);
        }
        noticesElement.appendChild(allowAll);

        const button = document.createElement('a');
        button.classList.add('always_allow_image', 'btn', 'btn-light', 'btn-sm');
        button.textContent = 'Always allow from this sender';
        noticesElement.appendChild(button);
        sessionAvailableOnlyActionInfo(button)

        button.addEventListener('click', function (e) {
            e.preventDefault();
            Hm_Utils.save_to_local_storage(sender, 1);
            $('.msg_text_inner').remove();
            if (inline) {
                inline_imap_msg(window.inline_msg_details, window.inline_msg_uid);
            } else {
                get_message_content(elements[0].dataset.messagePart, false, false, false, false, false)
            }
        });
    }

    document.querySelector('.external_notices').insertAdjacentElement('beforebegin', noticesElement);
};

const observeMessageTextMutationAndHandleExternalResources = (inline) => {
    const message = document.querySelector('.msg_text');    
    if (message) {
        new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
                if (mutation.addedNodes.length > 0) {
                    mutation.addedNodes.forEach(function (node) {
                        if (node.classList.contains('msg_text_inner')) {
                            handleExternalResources(inline);                    
                        }
                    });
                }
            });
        }).observe(message, {
            childList: true
        });
    }
};
function applyContactsPageHandlers() {
    $('.delete_contact').on("click", function() {
        delete_contact($(this).data('id'), $(this).data('source'), $(this).data('type'));
        return false;
    });
    $('.show_contact').on("click", function() {
        $('#'+$(this).data('id')).toggle();
        return false;
    });
    $('.reset_contact').on("click", function() {
        Hm_Utils.redirect('?page=contacts');
    });
    $('.server_title').on("click", function() {
        $(this).next().toggle();
    });
    $('#contact_phone').on("keyup", function() {
        let contact_phone = $('#contact_phone').val();
        const regex_number = new RegExp('^\\d+$');
        const allowed_characters = ['+','-','(',')'];
        for (let chain_counter = 0; chain_counter < contact_phone.length; chain_counter++) {
            if(!(regex_number.test(contact_phone[chain_counter])) && !(allowed_characters.indexOf(contact_phone[chain_counter]) > -1)){
                Hm_Notices.show([hm_trans("This phone number appears to contain invalid character (s).\nIf you are sure ignore this warning and continue!")]);
                $(this).off();
            }
        }

    });
    $('.source_link').on("click", function () {
        $('.list_actions').toggle(); $('#list_controls_menu').hide();
        return false;
    });
    contact_import_pagination();
}

var delete_contact = function(id, source, type) {
    if (!hm_delete_prompt()) {
        return false;
    }
    Hm_Ajax.request(
        [{'name': 'hm_ajax_hook', 'value': 'ajax_delete_contact'},
        {'name': 'contact_id', 'value': id},
        {'name': 'contact_type', 'value': type},
        {'name': 'contact_source', 'value': source}],
        function(res) {
            if (res.contact_deleted && res.contact_deleted === 1) {
                $('.contact_row_'+id).remove();
            }
        }
    );
};

var add_contact_from_message_view = function() {
    var contact = $('#add_contact').val();
    var source = $('#contact_source').val();

    if (contact) {
      Hm_Ajax.request(
        [
          { name: 'hm_ajax_hook', value: 'ajax_add_contact' },
          { name: 'contact_value', value: contact },
          { name: 'contact_source', value: source },
        ],
        function (res) {
          $('.add_contact_controls').toggle();
          window.location.reload();
        }
      );
    }
  };

var add_contact_from_popup = function(event) {
    event.stopPropagation()
    var source = 'local:local';
    var contact = $('#contact_info').text().replace('>','').replace('<','');


    if (contact) {
        var email = contact.match(EMAIL_REGEX)[0];
        var name = contact.replace(EMAIL_REGEX, "");

        var saveContactContent = `<div><table>
                                            <tr><td><strong>${hm_trans('Name')} :</strong></td><td>${name}</td></tr>
                                            <tr><td><strong>${hm_trans('Email')} :</strong></td><td>${email}</td></tr>
                                            <tr><td><strong>${hm_trans('Source')} :</strong></td><td>Local</td></tr>
                                </table></div>`

        Hm_Ajax.request(
            [{'name': 'hm_ajax_hook', 'value': 'ajax_add_contact'},
            {'name': 'contact_value', 'value': contact},
            {'name': 'contact_source', 'value': source}],
            function (res) {
                $("#contact_popup_body").html(saveContactContent);
                sessionStorage.removeItem(`${window.location.pathname}imap_4_${getListPathParam()}`);
                sessionStorage.removeItem(`${window.location.pathname}${getMessageUidParam()}_${getListPathParam()}`);
            }
        );
    }
};

var get_search_term = function(class_name) {
    var fld_val = $(class_name).val();
    var addresses = fld_val.split(' ');
    if (addresses.length > 1) {
        fld_val = addresses.pop();
    }
    return fld_val;
};

var autocomplete_contact = function(e, class_name, list_div) {
    var key_code = e.keyCode;
    if (key_code >= 37 && key_code <= 40) {
        return;
    }
    var first;
    var div = $('<div></div>');
    var fld_val = get_search_term(class_name);
    if (fld_val.length > 0) {
        Hm_Ajax.request(
            [{'name': 'hm_ajax_hook', 'value': 'ajax_autocomplete_contact'},
            {'name': 'contact_value', 'value': fld_val}],
            function(res) {
                var active = $(document.activeElement).attr('class');
                if (active == 'compose_to' || active == 'compose_bcc' || active == 'compose_cc') {
                    if (res.contact_suggestions) {
                        var i;
                        var count = 0;
                        $(list_div).html('');
                        for (i in res.contact_suggestions) {
                            var suggestion = JSON.parse(res.contact_suggestions[i].replace(/&quot;/g, '"'))

                            div.html(suggestion.contact);
                            if ($(class_name).val().match(div.text())) {
                                continue;
                            }
                            if (count == 0) {
                                first = 'first ';
                            }
                            else {
                                first = '';
                            }
                            count++;
                            $(list_div).append('<a tabindex="1" href="#" class="'+first+'contact_suggestion" data-id="'+suggestion.contact_id+'" data-type="'+suggestion.type+'" data-source="'+suggestion.source+'" unread_link">'+suggestion.contact+'</a>');
                        }
                        if (count > 0) {
                            $(list_div).show();
                            setup_autocomplete_events(class_name, list_div, fld_val);
                        }
                        else {
                            $(list_div).hide();
                        }
                    }
                }
            }, [], true
        );
    }
};

var autocomplete_keyboard_nav = function(event, list_div, class_name, fld_val) {
    var in_list = false;
    if (event.keyCode == 40) {
        if ($(event.target).prop('nodeName') == 'INPUT') {
            $('.first').addClass('selected_menu');
            $('.first').focus();
            in_list = true;
        }
        else {
            $(event.target).removeClass('selected_menu');
            $(event.target).next().addClass('selected_menu');
            $(event.target).next().focus();
            in_list = true;
        }
        return false;
    }
    else if (event.keyCode == 38) {
        if ($(event.target).prev().length) {
            $(event.target).removeClass('selected_menu');
            $(event.target).prev().addClass('selected_menu');
            $(event.target).prev().focus();
            in_list = true;
        }
        else {
            $(class_name).focus();
            $(event.target).removeClass('selected_menu');
        }
        return false;
    }
    else if (event.keyCode == 13) {
        $(class_name).focus();
        $(list_div).hide();
        add_autocomplete(event, class_name, list_div);
        return false;
    }
    else if (event.keyCode == 27) {
        $(list_div).html('');
        $(list_div).hide();
        $(class_name).focus();
        return false;
    }
    else if (event.keyCode == 9) {
        $(list_div).html('');
        $(list_div).hide();
        $(class_name).trigger('focusout');
        return true;
    }
    if (in_list) {
        return false;
    }
    return true;
};

var setup_autocomplete_events = function(class_name, list_div, fld_val) {
    $('.contact_suggestion').on("click", function(event) { return add_autocomplete(event, class_name, list_div); });
    $(class_name).on('keydown', function(event) { return autocomplete_keyboard_nav(event, list_div, class_name, fld_val); });
    $('.contact_suggestion').on('keydown', function(event) { return autocomplete_keyboard_nav(event, list_div, class_name, fld_val); });
    $(document).on("click", function() { $(list_div).hide(); });
};

var add_autocomplete = function(event, class_name, list_div, fld_val) {
    $(class_name).attr("data-id", $(event.target).data('id'));
    $(class_name).attr("data-type", $(event.target).data('type'));
    $(class_name).attr("data-source", $(event.target).data('source'));

    if (!fld_val) {
        fld_val = get_search_term(class_name);
    }
    var new_address = $(event.target).text()
    var existing = $(class_name).val();
    var re = new RegExp(fld_val+'$');
    existing = existing.replace(re, '');
    if (existing.length) {
        existing = existing.replace(/[\s,]+$/, '')+', ';
    }
    $(list_div).html('');
    $(list_div).hide();
    $(class_name).val(existing+new_address);
    $(class_name).focus();
    return false;
};

var showPage = function(selected_page, total_pages) {
    $('.import_body tr').hide();
    $('.page_' + selected_page).show();
    $('.page_link_selector').removeClass('active');
    $('.page_item_' + selected_page).addClass('active');
    $('.prev_page').toggleClass('disabled', selected_page === 1);
    $('.next_page').toggleClass('disabled', selected_page === total_pages);
};

var contact_import_pagination = function() {
    var selected_page = 1;
    var total_pages = $('#totalPages').val();
    showPage(selected_page, total_pages);

    $('.page_link_selector').on('click', function () {
        selected_page = $(this).data('page');
        showPage(selected_page, total_pages);
    });

    $('.prev_page').on('click', function () {
        if (selected_page > 1) {
            selected_page--;
            showPage(selected_page, total_pages);
        }
    });

    $('.next_page').on('click', function () {
        if (selected_page < total_pages) {
            selected_page++;
            showPage(selected_page, total_pages);
        }
    });
};

var check_cc_exist_in_contacts_list = function() {
    if (typeof list_emails !== "undefined") {
        var compose_cc = $(".compose_cc").val().trim();
        var list_cc = null;
        var list_cc_not_exist_in_my_contact = [];
        if (compose_cc.length > 0) {
            list_cc = compose_cc.split(",");
            var list_html = "<ol>";
            list_cc.forEach(cc => {
                cc = cc.trim().split(" ");
                if (! list_emails.includes(cc.slice(-1)[0])) {
                    list_cc_not_exist_in_my_contact.push(cc.slice(-1)[0])
                    list_html += `<li>${cc.slice(-1)[0]}</li>`;
                }
            });
            list_html += "</ol>";

            if (list_cc_not_exist_in_my_contact) {
                return list_html;
            }
        }
    }
    return "";
};


$(function() {
    $('.ldap_password_change').on("click", function() {
        $(this).prev().prop('disabled', false);
        $(this).prev().attr('placeholder', '');
    });
});


var feed_test_action = function(event) {
    event.preventDefault();
    Hm_Notices.hide(true);
    var form = $(this).parent();
    Hm_Ajax.request(
        form.serializeArray(),
        function() {},
        {'feed_connect': 1}
    );
};

var feed_delete_action = function(event) {
    if (!hm_delete_prompt()) {
        return false;
    }
    event.preventDefault();
    Hm_Notices.hide(true);
    var form = $(this).parent();
    Hm_Ajax.request(
        form.serializeArray(),
        function(res) {
            if (res.deleted_server_id) {
                Hm_Utils.set_unsaved_changes(1);
                Hm_Folders.reload_folders(true);
                form.parent().parent().remove();
                decrease_servers('feed');
            }
        },
        {'delete_feed': 1}
    );
};

var feeds_search_page_content = function(id) {
    if (hm_search_terms) {
        Hm_Ajax.request(
            [{'name': 'hm_ajax_hook', 'value': 'ajax_feed_combined'},
            {'name': 'feed_search', 'value': 1},
            {'name': 'feed_server_ids', 'value': id}],
            display_feeds_search_result,
            [],
            false,
            Hm_Message_List.set_search_state
        );
    }
    return false;
};

var display_feeds_search_result = function(res) {
    var ids = [res.feed_server_ids];
    Hm_Message_List.update(ids, res.formatted_message_list, 'feeds');
};

var feeds_combined_content_unread = function(id) {
    Hm_Ajax.request(
        [{'name': 'hm_ajax_hook', 'value': 'ajax_feed_combined'},
        {'name': 'feed_unread_only', 'value': 1},
        {'name': 'feed_server_ids', 'value': id}],
        display_feeds_combined_unread,
        [],
        false,
        Hm_Message_List.set_unread_state
    );
    return false;
};

var display_feeds_combined_unread = function(res) {
    var ids = [res.feed_server_ids];
    Hm_Message_List.update(ids, res.formatted_message_list, 'feeds');
};

var feeds_combined_content = function(id) {
    Hm_Ajax.request(
        [{'name': 'hm_ajax_hook', 'value': 'ajax_feed_combined'},
        {'name': 'feed_server_ids', 'value': id}],
        display_feeds_combined,
        [],
        false,
        set_combined_feeds_state
    );
    return false;
};

var set_combined_feeds_state = function() {
    var data = Hm_Message_List.filter_list();
    data.find('*[style]').attr('style', '');
    Hm_Utils.save_to_local_storage('formatted_feed_data', data.html());
    $('input[type=checkbox]').on("click", function() {
        Hm_Message_List.toggle_msg_controls();
    });
    Hm_Message_List.update_title();
};

var display_feeds_combined = function(res) {
    var ids = res.feed_server_ids.split(',');
    Hm_Message_List.update(ids, res.formatted_message_list, 'feeds');
    $('.total').text($('.message_table tbody tr').length);
};

var feeds_combined_inbox_content= function(id) {
    Hm_Ajax.request(
        [{'name': 'hm_ajax_hook', 'value': 'ajax_feed_combined'},
        {'name': 'feed_server_ids', 'value': id}],
        display_feeds_combined_inbox,
        [],
        false,
        Hm_Message_List.set_combined_inbox_state
    );
    return false;
};

var display_feeds_combined_inbox = function(res) {
    var ids = res.feed_server_ids.split(',');
    Hm_Message_List.update(ids, res.formatted_message_list, 'feeds');
};

var feed_item_view = function(uid, list_path, callback) {
    if (!uid) {
        uid = getMessageUidParam();
    }
    if (!list_path) {
        list_path = getListPathParam();
    }
    $('.msg_text_inner').html('');
    Hm_Ajax.request(
        [{'name': 'hm_ajax_hook', 'value': 'ajax_feed_item_content'},
        {'name': 'feed_list_path', 'value': list_path},
        {'name': 'feed_uid', 'value': uid}],
        display_feed_item_content,
        [],
        false,
        callback
    );
    return false;
};

var display_feed_item_content = function(res) {
    if (!res.feed_msg_headers) {
        return;
    }
    var msg_uid = getMessageUidParam();
    $('.msg_text').html('');
    $('.msg_text').append(res.feed_msg_headers);
    $('.msg_text').append(res.feed_msg_text);
    set_message_content();
    document.title = $('.header_subject th').text();
    var path = getListPathParam();
    if (hm_list_parent() == 'feeds') {
        Hm_Message_List.prev_next_links('formatted_feed_data', path+'_'+msg_uid);
    }
    else if (hm_list_parent() == 'combined_inbox') {
        Hm_Message_List.prev_next_links('formatted_combined_inbox', path+'_'+msg_uid);
    }
    else if (hm_list_parent() == 'unread') {
        Hm_Message_List.prev_next_links('formatted_unread_data', path+'_'+msg_uid);
    }
    else if (hm_list_parent() === 'search') {
        Hm_Message_List.prev_next_links('formatted_search_data', path+'_'+msg_uid);
    }
    else {
        Hm_Message_List.prev_next_links(path, path+'_'+msg_uid);
    }
    if (Hm_Message_List.track_read_messages(path+'_'+msg_uid)) {
        if (hm_list_parent() == 'unread') {
            Hm_Message_List.adjust_unread_total(-1);
        }
    }
    fixLtrInRtl();
};

var load_feed_list = function(id) {
    var cached = Hm_Utils.get_from_local_storage(getListPathParam());
    if (cached) {
        $('.message_table tbody').html(cached);
    }
    Hm_Ajax.request(
        [{'name': 'hm_ajax_hook', 'value': 'ajax_feed_combined'},
        {'name': 'feed_server_ids', 'value': id}],
        display_feed_list
    );
    return false;
};

var display_feed_list = function(res) {
    var ids = [res.feed_server_ids];
    Hm_Message_List.update(ids, res.formatted_message_list, 'feeds');
    var key = 'feeds_'+res.feed_server_ids;
    var data = Hm_Message_List.filter_list();
    data.find('*[style]').attr('style', '');
    $('.total').text($('.message_table tbody tr').length);
    Hm_Utils.save_to_local_storage(key, data.html());
};

var feed_status_update = function() {
    var id;
    var i;
    if ($('.feed_server_ids').length) {
        var ids = $('.feed_server_ids').val().split(',');
        if ( ids && ids !== '') {
            for (i=0;i<ids.length;i++) {
                id=ids[i];
                Hm_Ajax.request(
                    [{'name': 'hm_ajax_hook', 'value': 'ajax_feed_status'},
                    {'name': 'feed_server_ids', 'value': id}],
                    update_feed_status_display
                );
            }
        }
    }
    return false;
};

var update_feed_status_display = function(res) {
    var id = res.feed_status_server_id;
    $('.feeds_status_'+id).html(res.feed_status_display);
};

var expand_feed_settings = function() {
    var hash = window.location.hash;
    if (hash) {
        if (hash.replace('#', '.') == '.feeds_setting') {
            $('.feeds_setting').css('display', 'table-row');
        }
    }
    else {
        var dsp = Hm_Utils.get_from_local_storage('.feeds_setting');
        if (dsp == 'table-row' || dsp == 'none') {
            $('.feeds_setting').css('display', dsp);
        }
    }
};

function feedMessageContentPageHandler(routeParams) {
    if (routeParams.list_path.substr(0, 4) == 'feed') {
        feed_item_view();
    }
}

function feedServersPageHandler() {
    $('.feed_delete').on('click', feed_delete_action);
    $('.test_feed_connect').on('click', feed_test_action);
    var dsp = Hm_Utils.get_from_local_storage('.feed_section');
    if (dsp == 'block' || dsp == 'none') {
        $('.feed_section').css('display', dsp);
    }
}
function applyImapMessageListPageHandlers(routeParams) {
    const setupPageResult = setup_imap_folder_page(routeParams.list_path);

    sortHandlerForMessageListAndSearchPage();

    imap_setup_snooze();
    imap_setup_tags();
    handleMessagesDragAndDrop();

    Hm_Message_List.set_row_events();

    $('.core_msg_control').on("click", function(e) {
        e.preventDefault();
        Hm_Message_List.message_action($(this).data('action')); 
    });
    $('.toggle_link').on("click", function(e) {
        e.preventDefault();
        Hm_Message_List.toggle_rows();
    });

    if (window.githubMessageListPageHandler) githubMessageListPageHandler(routeParams);
    if (window.inlineMessageMessageListAndSearchPageHandler) inlineMessageMessageListAndSearchPageHandler(routeParams);
    if (window.wpMessageListPageHandler) wpMessageListPageHandler(routeParams);

    return async function() {
        const [refreshIntervalId, abortController] = await setupPageResult;
        abortController.abort();
        clearInterval(refreshIntervalId);
    }
}

function applyImapMessageContentPageHandlers(routeParams) {
    imap_setup_message_view_page(routeParams.uid, null, routeParams.list_path, handleExternalResources);
    imap_setup_snooze();
    imap_setup_tags();

    const messages = new Hm_MessagesStore(routeParams.list_path, routeParams.list_page);
    messages.load(false);
    const next = messages.getNextRowForMessage(routeParams.uid);
    const prev = messages.getPreviousRowForMessage(routeParams.uid);
    if (next) {
        const nextMessageUid = $(next['0']).data('uid');
        preFetchMessageContent(false, nextMessageUid, routeParams.list_path);
    }
    if (prev) {
        const prevMessageUid = $(prev['0']).data('uid');
        preFetchMessageContent(false, prevMessageUid, routeParams.list_path);
    }

    if (window.feedMessageContentPageHandler) feedMessageContentPageHandler(routeParams);
    if (window.githubMessageContentPageHandler) githubMessageContentPageHandler(routeParams);
    if (window.pgpMessageContentPageHandler) pgpMessageContentPageHandler();
    if (window.wpMessageContentPageHandler) wpMessageContentPageHandler(routeParams);
}function handleAttachementDownload() {
    $('.download_link a').on("click", async function(e) {
        e.preventDefault();
        const loaderInstance = showLoaderToast("Downloading attachment...");
        const href = $(this).data('src');
        try {
            await fetch(href).then(res => res.blob()).then(blob => {
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'attachment';
                a.click();
                URL.revokeObjectURL(url);
            });
        } catch (error) {
            Hm_Notices.show([`ERR${error.message}`]);
        } finally {
            loaderInstance.hide();
        }
    });
}function handleViewMessagePart() {
    $('.msg_part_link').on("click", function(e) {
        e.preventDefault();
        const messagePart = $(this).data('messagePart');
        get_message_content(messagePart, getMessageUidParam() ?? inline_msg_uid, getListPathParam());
    });
}

var imap_delete_action = function(event) {
    if (!hm_delete_prompt()) {
        return false;
    }
    event.preventDefault();
    Hm_Notices.hide(true);
    var form = $(this).closest('.imap_connect');
    Hm_Ajax.request(
        form.serializeArray(),
        function(res) {
            if (res.deleted_server_id) {
                const section = form.parent().hasClass('imap_server') ? 'imap': 'jmap';
                decrease_servers(section);
                Hm_Utils.set_unsaved_changes(1);
                Hm_Folders.reload_folders(true);
                form.parent().fadeOutAndRemove()
            }
        },
        {'imap_delete': 1}
    );
};

var imap_hide_action = function(form, server_id, hide) {
    Hm_Ajax.request(
        [{'name': 'hm_ajax_hook', 'value': 'ajax_imap_debug'},
        {'name': 'imap_server_id', 'value': server_id},
        {'name': 'hide_imap_server', 'value': hide}],
        function() {
            if (hide) {
                $('.unhide_imap_connection', form).show();
                $('.hide_imap_connection', form).hide();
            }
            else {
                $('.unhide_imap_connection', form).hide();
                $('.hide_imap_connection', form).show();
            }
            Hm_Folders.reload_folders(true);
        }
    );
};

var imap_hide = function(event) {
    event.preventDefault();
    Hm_Notices.hide(true);
    var form = $(this).closest('.imap_connect');
    var server_id = $('.imap_server_id', form).val();
    imap_hide_action(form, server_id, 1);
};

var imap_unhide = function(event) {
    event.preventDefault();
    Hm_Notices.hide(true);
    var form = $(this).closest('.imap_connect');
    var server_id = $('.imap_server_id', form).val();
    imap_hide_action(form, server_id, 0);
};

var imap_forget_action = function(event) {
    event.preventDefault();
    Hm_Notices.hide(true);
    var form = $(this).closest('.imap_connect');
    var btnContainer = $(this).parent();
    Hm_Ajax.request(
        form.serializeArray(),
        function(res) {
            if (res.just_forgot_credentials) {
                form.find('.credentials').prop('disabled', false);
                form.find('.credentials').val('');
                btnContainer.append('<input type="submit" value="Save" class="save_imap_connection btn btn-outline-secondary btn-sm me-2" />');
                $('.save_imap_connection').on('click', imap_save_action);
                $('.forget_imap_connection', form).hide();
                Hm_Utils.set_unsaved_changes(1);
                Hm_Folders.reload_folders(true);
            }
        },
        {'imap_forget': 1}
    );
};

var imap_save_action = function(event) {
    event.preventDefault();
    Hm_Notices.hide(true);
    var form = $(this).closest('.imap_connect');
    var btnContainer = $(this).parent();
    Hm_Ajax.request(
        form.serializeArray(),
        function(res) {
            if (res.just_saved_credentials) {
                form.find('.credentials').attr('disabled', true);
                form.find('.save_imap_connection').hide();
                form.find('.imap_password').val('');
                form.find('.imap_password').attr('placeholder', '[saved]');
                btnContainer.append('<input type="submit" value="Forget" class="forget_imap_connection btn btn-outline-warning btn-sm me-2" />');
                $('.forget_imap_connection').on('click', imap_forget_action);
                Hm_Utils.set_unsaved_changes(1);
                Hm_Folders.reload_folders(true);
            }
        },
        {'imap_save': 1}
    );
};

var imap_test_action = function(event) {
    $('.imap_folder_data').empty();
    event.preventDefault();
    Hm_Notices.hide(true);
    var form = $(this).closest('.imap_connect');
    Hm_Ajax.request(
        form.serializeArray(),
        false,
        {'imap_connect': 1}
    );
}

var imapServersPageHandler = function() {
    $('.imap_delete').on('click', imap_delete_action);
    $('.save_imap_connection').on('click', imap_save_action);
    $('.hide_imap_connection').on('click', imap_hide);
    $('.unhide_imap_connection').on('click', imap_unhide);
    $('.forget_imap_connection').on('click', imap_forget_action);
    $('.test_imap_connect').on('click', imap_test_action);

    var dsp = Hm_Utils.get_from_local_storage('.imap_section');
    if (dsp === 'block' || dsp === 'none') {
        $('.imap_section').css('display', dsp);
    }
    var jdsp = Hm_Utils.get_from_local_storage('.jmap_section');
    if (jdsp === 'block' || jdsp === 'none') {
        $('.jmap_section').css('display', jdsp);
    }
};

var set_message_content = function(path, msg_uid) {
    if (!path) {
        path = getListPathParam();
    }
    if (!msg_uid) {
        msg_uid = getMessageUidParam();
    }
    var key = msg_uid+'_'+path;
    Hm_Utils.save_to_local_storage(key, $('.msg_text').html());
};

var imap_delete_message = function(state, supplied_uid, supplied_detail) {
    if (!hm_delete_prompt()) {
        return false;
    }
    var uid = getMessageUidParam();
    var detail = Hm_Utils.parse_folder_path(getListPathParam(), 'imap');
    if (supplied_uid) {
        uid = supplied_uid;
    }
    if (supplied_detail) {
        detail = supplied_detail;
    }
    if (detail && uid) {
        Hm_Ajax.request(
            [{'name': 'hm_ajax_hook', 'value': 'ajax_imap_delete_message'},
            {'name': 'imap_msg_uid', 'value': uid},
            {'name': 'imap_server_id', 'value': detail.server_id},
            {'name': 'folder', 'value': detail.folder}],
            function(res) {
                if (!res.imap_delete_error) {
                    if (Hm_Utils.get_from_global('msg_uid', false)) {
                        return;
                    }
                    var msg_cache_key = 'imap_'+detail.server_id+'_'+getMessageUidParam()+'_'+detail.folder;
                    remove_from_cached_imap_pages(msg_cache_key);
                    var nlink = $('.nlink');
                    if (nlink.length && Hm_Utils.get_from_global('auto_advance_email_enabled')) {
                        Hm_Utils.redirect(nlink.attr('href'));
                    }
                    else {
                        if (!hm_list_parent()) {
                            Hm_Utils.redirect("?page=message_list&list_path="+getListPathParam());
                        }
                        else {
                            Hm_Utils.redirect("?page=message_list&list_path="+hm_list_parent());
                        }
                    }
                }
            }
        );
    }
    return false;
};

var imap_unread_message = function(supplied_uid, supplied_detail) {
    var uid = getMessageUidParam();
    var detail = Hm_Utils.parse_folder_path(getListPathParam(), 'imap');
    if (supplied_uid) {
        uid = supplied_uid;
    }
    if (supplied_detail) {
        detail = supplied_detail;
    }
    if (detail && uid) {
        var selected = detail.type+'_'+detail.server_id+'_'+uid+'_'+detail.folder;
        Hm_Ajax.request(
            [{'name': 'hm_ajax_hook', 'value': 'ajax_message_action'},
            {'name': 'action_type', 'value': 'unread'},
            {'name': 'message_ids', 'value': selected}],
            function(res) {
                    if (Hm_Utils.get_from_global('uid', false)) {
                        return;
                    }
                    var nlink = $('.nlink');
                    if (nlink.length && Hm_Utils.get_from_global('auto_advance_email_enabled')) {
                        Hm_Utils.redirect(nlink.attr('href'));
                    }
                    else {
                        if (!hm_list_parent()) {
                            Hm_Utils.redirect("?page=message_list&list_path="+getListPathParam());
                        }
                        else {
                            Hm_Utils.redirect("?page=message_list&list_path="+hm_list_parent());
                        }
                    }
            },
            [],
            false,
            function() {
                var cache = $('<tbody></tbody>').append($(Hm_Utils.get_from_local_storage('formatted_unread_data')));
                Hm_Message_List.adjust_unread_total($('tr', cache).length, true);
            }
        );
    }
    return false;
}

var imap_flag_message = function(state, supplied_uid, supplied_detail) {
    var uid = getMessageUidParam();
    var detail = Hm_Utils.parse_folder_path(getListPathParam(), 'imap');
    if (supplied_uid) {
        uid = supplied_uid;
    }
    if (supplied_detail) {
        detail = supplied_detail;
    }
    if (detail && uid) {
        Hm_Ajax.request(
            [{'name': 'hm_ajax_hook', 'value': 'ajax_imap_flag_message'},
            {'name': 'imap_msg_uid', 'value': uid},
            {'name': 'imap_flag_state', 'value': state},
            {'name': 'imap_server_id', 'value': detail.server_id},
            {'name': 'folder', 'value': detail.folder}],
            function() {
                if (state === 'flagged') {
                    $('#flag_msg').show();
                    $('#unflag_msg').hide();
                }
                else {
                    $('#flag_msg').hide();
                    $('#unflag_msg').show();
                }
                set_message_content();
                imap_message_view_finished(false, false, true);
            }
        );
    }
    return false;
};

var imap_status_update = function() {
    var id;
    var i;
    if ($('.imap_server_ids').length) {
        var ids = $('.imap_server_ids').val().split(',');
        if ( ids && ids !== '') {
            var process_result = function(res) {
                var id = res.imap_status_server_id;
                $('.imap_status_'+id).html(res.imap_status_display);
                $('.imap_detail_'+id).html(res.sieve_detail_display);
                $('.imap_capabilities_'+id).html(res.imap_extensions_display);
            };
            for (i=0;i<ids.length;i++) {
                id=ids[i];
                Hm_Ajax.request(
                    [{'name': 'hm_ajax_hook', 'value': 'ajax_imap_status'},
                    {'name': 'imap_server_ids', 'value': id}],
                    process_result
                );
            }
        }
    }
    return false;
};

var imap_message_list_content = function(id, folder, hook, batch_callback) {
    Hm_Ajax.request(
        [{'name': 'hm_ajax_hook', 'value': hook},
        {'name': 'folder', 'value': folder},
        {'name': 'imap_server_ids', 'value': id}],
        function(res) {
            var ids = res.imap_server_ids.split(',');
            if (folder) {
                var i;
                for (i=0;i<ids.length;i++) {
                    ids[i] = ids[i]+'_'+Hm_Utils.clean_selector(folder);
                }
            }
            if (res.auto_sent_folder) {
                add_auto_folder(res.auto_sent_folder);
            }

            Hm_Message_List.update(ids, res.formatted_message_list, 'imap');

            $('.page_links').html(res.page_links);
            cache_imap_page();
        },
        [],
        false,
        batch_callback
    );
    return false;
};

var add_auto_folder = function(folder) {
    $('.list_sources').append('<div class="list_src">imap '+folder+'</div>');
    var count = $('.src_count').text()*1;
    count++;
    $('.src_count').html(count);
};

var cache_folder_data = function() {
    if (['sent', 'drafts', 'junk', 'trash','tag'].includes(getListPathParam())) {
        Hm_Message_List.set_message_list_state('formatted_'+getListPathParam()+'_data');
    }
};

var imap_all_mail_content = function(id, folder) {
    return imap_message_list_content(id, folder, 'ajax_imap_combined_inbox', Hm_Message_List.set_all_mail_state);
};

var imap_search_page_content = function(id, folder) {
    if (hm_search_terms()) {
        return imap_message_list_content(id, folder, 'ajax_imap_search', Hm_Message_List.set_search_state);
    }
    return false;
};

var update_imap_combined_source = function(path, state, event) {
    clear_imap_page_combined_inbox();
    event.preventDefault();
    Hm_Ajax.request(
        [{'name': 'hm_ajax_hook', 'value': 'ajax_imap_update_combined_source'},
        {'name': 'list_path', 'value': path},
        {'name': 'combined_source_state', 'value': state}],
        function() {
            if (state === 1) {
                $('.add_source').hide();
                $('.remove_source').show();
            }
            else {
                $('.add_source').show();
                $('.remove_source').hide();
            }
        },
        [],
        true
    );
    return false;
};

var remove_imap_combined_source = function(event) {
    return update_imap_combined_source(getListPathParam(), 0, event);
};

var add_imap_combined_source = function(event) {
    return update_imap_combined_source(getListPathParam(), 1, event);
};

var imap_combined_unread_content = function(id, folder) {
    return imap_message_list_content(id, folder, 'ajax_imap_unread', Hm_Message_List.set_unread_state);
};

var imap_combined_flagged_content = function(id, folder) {
    return imap_message_list_content(id, folder, 'ajax_imap_flagged', Hm_Message_List.set_flagged_state);
};

var imap_combined_inbox_content = function(id, folder) {
    return imap_message_list_content(id, folder, 'ajax_imap_combined_inbox', Hm_Message_List.set_combined_inbox_state);
};

var imap_folder_content = function(id, folder) {
    return imap_message_list_content(id, folder, 'ajax_imap_folder_data', cache_folder_data);
};

var imap_tag_content = function(id, folder) {
    return imap_message_list_content(id, folder, 'ajax_imap_tag_data', cache_folder_data);
};

var cache_imap_page = function() {
    var key = 'imap_'+Hm_Utils.get_url_page_number()+'_'+getListPathParam();
    var data = Hm_Message_List.filter_list();
    data.find('input[type=checkbox]').removeAttr('checked');
    Hm_Utils.save_to_local_storage(key, data.html());
    Hm_Utils.save_to_local_storage(key+'_page_links', $('.page_links').html());
}

var clear_imap_page_combined_inbox = function() {
    var key = 'imap_1_combined_inbox';
    Hm_Utils.save_to_local_storage(key, '');
    Hm_Utils.save_to_local_storage(key+'_page_links', '');
}

var fetch_cached_imap_page = function() {
    var key = 'imap_'+Hm_Utils.get_url_page_number()+'_'+getListPathParam();
    var page = Hm_Utils.get_from_local_storage(key);
    var links = Hm_Utils.get_from_local_storage(key+'_page_links');
    return [ page, links ];
}

var remove_from_cached_imap_pages = function(msg_cache_key) {
    var keys = ['imap_'+Hm_Utils.get_url_page_number()+'_'+getListPathParam()];
    if (hm_list_parent()) {
        keys.push('imap_'+Hm_Utils.get_url_page_number()+'_'+hm_list_parent());
        if (['combined_inbox', 'unread', 'flagged', 'advanced_search', 'search', 'sent'].includes(hm_list_parent())) {
            keys.push('formatted_'+hm_list_parent());
        }
    }
    keys.forEach(function(key) {
        var data = Hm_Utils.get_from_local_storage(key);
        if (data) {
            var page_data = $('<div></div>').append(data);
            page_data.find('.'+msg_cache_key).remove();
            Hm_Utils.save_to_local_storage(key, page_data.html());
        }
    });
}

async function select_imap_folder(path, reload, processInTheBackground = false, abortController = null) {    
    const messages = new Hm_MessagesStore(path, Hm_Utils.get_url_page_number(), null, abortController);
    await messages.load(reload, processInTheBackground).then(() => {        
        display_imap_mailbox(messages.rows, messages.links, path);
    });
    return messages;
};

var setup_imap_folder_page = async function(listPath) {
    $('.remove_source').on("click", remove_imap_combined_source);
    $('.add_source').on("click", add_imap_combined_source);
    $('.refresh_link').on("click", function(e) {
        e.preventDefault();
        if ($('.imap_keyword').val()) {
            $('#imap_filter_form').trigger('submit');
        }
        else {
            select_imap_folder(listPath, true);
        }
    });
    $('.imap_filter').on("change", function() { $('#imap_filter_form').trigger('submit'); });
    $('.imap_sort').on("change", function() {
        $('#imap_filter_form').trigger('submit');
    });
    $('.imap_keyword').on('search', function() {
        $('#imap_filter_form').trigger('submit');
    });
    Hm_Ajax.add_callback_hook('ajax_message_action', function() { select_imap_folder(listPath, true); });

    const hadLocalData = new Hm_MessagesStore(listPath, Hm_Utils.get_url_page_number()).hasLocalData();
    await select_imap_folder(listPath);

    if (hadLocalData) {
        await select_imap_folder(listPath, true, true)
    }

    // Update browser title
    Hm_Message_List.update_title(listPath);

    // Refresh in the background each 30 seconds and abort any pending request when the page unmounts
    const backgroundAbortController = new AbortController();
    const interval = setInterval(async () => {
        select_imap_folder(listPath, true, true, backgroundAbortController);
    }, 30000);
    return [interval, backgroundAbortController];
};

$('#imap_filter_form').on('submit', async function(event) {
    event.preventDefault();
    const url = new URL(location.href);
    url.search = $(this).serialize();
    history.replaceState(null, '', url);
    try {
        const messages = new Hm_MessagesStore(getListPathParam(), Hm_Utils.get_url_page_number());
        await messages.load(true);
        display_imap_mailbox(messages.rows, messages.links);
    } catch (error) {
        // Show error message. TODO: No message utility yet, implement it later.
    }
});

var display_imap_mailbox = function(rows, links, path = getListPathParam()) {
    const detail = Hm_Utils.parse_folder_path(path, 'imap');
    const serverIds = [];
    if (detail) {
        serverIds.push(detail.server_id);
    }
    if (rows) {
        Hm_Message_List.update(serverIds, rows, 'imap');
        Hm_Message_List.check_empty_list();
        $('.page_links').html(links);
        $('input[type=checkbox]').on("click", function(e) {
            Hm_Message_List.toggle_msg_controls();
        });
    }
};

function preFetchMessageContent(msgPart, uid, path) {
    if (Hm_Utils.get_from_local_storage(getMessageStorageKey(uid))) {
        return;
    }
    const detail = Hm_Utils.parse_folder_path(path, 'imap');
    Hm_Ajax.request([
        {'name': 'hm_ajax_hook', 'value': 'ajax_imap_message_content'},
        {'name': 'imap_msg_uid', 'value': uid},
        {'name': 'imap_msg_part', 'value': msgPart},
        {'name': 'imap_server_id', 'value': detail.server_id},
        {'name': 'folder', 'value': detail.folder},
        {'name': 'imap_prefetch', 'value': true}
    ], (res) => {
        Hm_Utils.save_to_local_storage(getMessageStorageKey(uid), JSON.stringify(res));
    }, null, true)
}

function getMessageStorageKey(uid) {
    return uid + '_' + getListPathParam();
}

async function markPrefetchedMessagesAsRead(uid) {
    const listPath = getListPathParam();
    const detail = Hm_Utils.parse_folder_path(listPath, 'imap');
    const msgId = `${detail.type}_${detail.server_id}_${uid}_${detail.folder}`;

    const messages = new Hm_MessagesStore(listPath, Hm_Utils.get_url_page_number());
    await messages.load(false, true);
    if (!messages.flagAsReadOnOpen) {
        return;
    }
    
    if (messages.markRowAsRead(uid)) {
        const folderId = `${detail.type}_${detail.server_id}_${detail.folder}`;
        Hm_Folders.unread_counts[folderId] -= 1;
        Hm_Folders.update_unread_counts(folderId);

        Hm_Ajax.request([
            {'name': 'hm_ajax_hook', 'value': 'ajax_message_action'},
            {'name': 'action_type', 'value': 'read'},
            {'name': 'message_ids', 'value': [msgId]}
        ], null, null, true);
    }
}

var expand_imap_mailbox = function(res) {
    if (res.imap_expanded_folder_path) {
        $('.'+Hm_Utils.clean_selector(res.imap_expanded_folder_path), $('.email_folders')).append(res.imap_expanded_folder_formatted);
        $('.imap_folder_link', $('.email_folders')).off('click');
        $('.imap_folder_link', $('.email_folders')).on("click", function() { return expand_imap_folders($(this)); });
        Hm_Folders.update_unread_counts();
    }
};

var prefetch_imap_folders = function() {
    var id_el = $('#imap_prefetch_ids');
    if (!id_el.length) {
        return;
    }
    var ids = id_el.val().split(',');
    if (ids.length == 0 ) {
        return;
    }
    var id = ids.shift();
    if (id === '') {
        return;
    }

    Hm_Ajax.request(
        [{'name': 'hm_ajax_hook', 'value': 'ajax_imap_folder_expand'},
        {'name': 'imap_server_id', 'value': id},
        {'name': 'imap_prefetch', 'value': true},
        {'name': 'folder', 'value': ''}],
        function(res) { 
            $('#imap_prefetch_ids').val(ids.join(',')); 
            prefetch_imap_folders();
            if ($('.email_folders ul.folders li').length == 1) {
                expand_imap_mailbox(res);
            }
        },
        [],
        true
    );

};

var expand_imap_folders = function(element) {
    var path = element.data('target');
    var detail = Hm_Utils.parse_folder_path(path, 'imap');
    var list = $('.imap_'+detail.server_id+'_'+Hm_Utils.clean_selector(detail.folder), $('.email_folders'));
    if ($('li', list).length === 0) {
        $('.expand_link', list).html('<i class="bi bi-file-minus-fill">');
        if (detail) {
            element.addClass('disabled_link');
            Hm_Ajax.request(
                [{'name': 'hm_ajax_hook', 'value': 'ajax_imap_folder_expand'},
                {'name': 'imap_server_id', 'value': detail.server_id},
                {'name': 'folder', 'value': detail.folder}],
                function (res) {
                    element.removeClass('disabled_link');
                    expand_imap_mailbox(res);
                },
                [],
                false,
                Hm_Folders.save_folder_list,
                function() {
                    element.removeClass('disabled_link');
                }
            );
        }
    }
    else {
        $('.expand_link', list).html('<i class="bi bi-plus-circle-fill">');
        $('ul', list).remove();
        Hm_Folders.save_folder_list();
    }
    return false;
};

var get_message_content = function(msg_part, uid, list_path, detail, callback, noupdate) {
    if (!uid) {
        uid = $('.msg_uid').val();
    }
    if (!detail) {
        detail = Hm_Utils.parse_folder_path(list_path, 'imap');
    }
    if (detail && uid) {
        if (getPageNameParam() == 'message') {
            window.scrollTo(0,0);
        }
        const onSuccess = function(res) {
            if (!noupdate) {
                $('.msg_text').html('');
                $('.msg_text').append(res.msg_headers);
                $('.msg_text').append(res.msg_text);
                $('.msg_text').append(res.msg_parts);
                document.title = $('.header_subject th').text();
                imap_message_view_finished(uid, detail);
            }
            else {
                $('.reply_link, .reply_all_link, .forward_link').each(function() {
                    $(this).attr("href", $(this).data("href"));
                    $(this).removeClass('disabled_link');
                });
            }
            if (!res.show_pagination_links) {
                $('.prev, .next').hide();
            }
            globals.auto_advance_email_enabled = Boolean(res.auto_advance_email_enabled);
        };
        
        if (!msg_part) {
            const msgContent = get_local_message_content(uid, list_path);
            if (msgContent) {
                onSuccess(JSON.parse(msgContent));
                if (callback) {
                    callback(JSON.parse(msgContent))
                }
                return;
            }
        }

        Hm_Ajax.request(
            [{'name': 'hm_ajax_hook', 'value': 'ajax_imap_message_content'},
            {'name': 'imap_msg_uid', 'value': uid},
            {'name': 'imap_msg_part', 'value': msg_part},
            {'name': 'imap_server_id', 'value': detail.server_id},
            {'name': 'folder', 'value': detail.folder}],
            function(res) {
                onSuccess(res);
                if (!noupdate && !msg_part) {
                    Hm_Utils.save_to_local_storage(getMessageStorageKey(uid), JSON.stringify(res));
                }
            },
            [],
            false,
            callback
        );
    }
    return false;
};

var imap_mark_as_read = function(uid, detail) {
    if (!uid) {
        uid = $('.msg_uid').val();
    }
    if (!detail) {
        detail = Hm_Utils.parse_folder_path(getListPathParam(), 'imap');
    }
    if (detail && uid) {
        Hm_Ajax.request(
            [{'name': 'hm_ajax_hook', 'value': 'ajax_imap_mark_as_read'},
            {'name': 'imap_msg_uid', 'value': uid},
            {'name': 'imap_server_id', 'value': detail.server_id},
            {'name': 'folder', 'value': detail.folder}],
            function() {},
            false,
            true
        );
    }
    return false;
};

var block_unblock_sender = function(msg_uid, detail, scope, action, sender = '', reject_message = '') {
    Hm_Ajax.request(
        [
            {'name': 'hm_ajax_hook', 'value': 'ajax_sieve_block_unblock'},
            {'name': 'imap_msg_uid', 'value': msg_uid},
            {'name': 'imap_server_id', 'value': detail.server_id},
            {'name': 'folder', 'value': detail.folder},
            {'name': 'block_action', 'value': action},
            {'name': 'scope', 'value': scope},
            {'name': 'reject_message', 'value': reject_message}
        ],
        function(res) {
            if (/^(Sender|Domain) Blocked$/.test(res.router_user_msgs[0])) {
                var title = scope == 'domain'
                    ? 'UNBLOCK DOMAIN'
                    : 'UNBLOCK SENDER';
                $("#filter_block_txt").html(title);
                $("#filter_block_txt")
                    .parent()
                    .removeClass('dropdown-toggle')
                    .attr('id', 'unblock_sender')
                    .data('target', scope);
            }
            if (/^(Sender|Domain) Unblocked$/.test(res.router_user_msgs[0])) {
                $("#filter_block_txt").html('BLOCK SENDER');
                $("#filter_block_txt")
                    .parent()
                    .addClass('dropdown-toggle')
                    .removeAttr('id');
            }
        },
        true,
        true
    );
}

var imap_message_view_finished = function(msg_uid, detail, skip_links) {
    var class_name = false;
    if (!detail) {
        detail = Hm_Utils.parse_folder_path(getListPathParam(), 'imap');
    }
    if (!msg_uid) {
        msg_uid = getMessageUidParam();
    }
    if (detail && !skip_links) {
        Hm_Message_List.prev_next_links(msg_uid);
    }
    if (Hm_Message_List.track_read_messages(class_name)) {
        if (hm_list_parent() == 'unread') {
            Hm_Message_List.adjust_unread_total(-1);
        }
    }
    $('.all_headers').on("click", function() { return Hm_Utils.toggle_long_headers(); });
    $('.small_headers').on("click", function() { return Hm_Utils.toggle_long_headers(); });
    $('#flag_msg').on("click", function() { return imap_flag_message($(this).data('state')); });
    $('#unflag_msg').on("click", function() { return imap_flag_message($(this).data('state')); });
    $('#delete_message').on("click", function() { return imap_delete_message(); });
    $('#move_message').on("click", function(e) { return imap_move_copy(e, 'move', 'message');});
    $('#copy_message').on("click", function(e) { return imap_move_copy(e, 'copy', 'message');});
    $('#archive_message').on("click", function(e) { return imap_archive_message();});
    $('#unread_message').on("click", function() { return inline_imap_unread_message(msg_uid, detail);});
    $('#block_sender').on("click", function(e) {
        e.preventDefault();
        var scope = $('[name=scope]').val();
        var action = $('[name=block_action]').val();
        var sender = $('[name=scope]').data('sender');
        var reject_message = action == 'reject_with_message' ? $('#reject_message_textarea').val() : '';

        if (action == 'reject_with_message' && ! reject_message) {
            $('#reject_message_textarea').css('border', '1px solid brown');
            return;
        }

        $("#filter_block_txt").parent().next().toggle();
        $('#reject_message').remove();
        $('#block_sender_form')[0].reset();

        return block_unblock_sender(msg_uid, detail, scope, action, sender, reject_message);
    });
    $('#show_message_source').on("click", function(e) {
        e.preventDefault();
        const detail = Hm_Utils.parse_folder_path(getListPathParam(), 'imap');
        window.open(`?page=message_source&imap_msg_uid=${getMessageUidParam()}&imap_server_id=${detail.server_id}&imap_folder=${detail.folder}`);
    });
    $(document).on('click', '#unblock_sender', function(e) {
        e.preventDefault();
        var sender = '';
        if ($(this).data('target') == 'domain') {
            sender = $('[name=scope]').data('domain');
        } else {
            sender = $('[name=scope]').data('sender');
        }
        return block_unblock_sender(msg_uid, detail, $(this).data('target'), 'unblock', sender);
    });
    fixLtrInRtl();

    handleAttachementDownload();
    handleViewMessagePart();
};

var get_local_message_content = function(msg_uid, path) {
    if (!path) {
        path = getListPathParam();
    }
    if (!msg_uid) {
        msg_uid = getMessageUidParam();
    }

    return Hm_Utils.get_from_local_storage(getMessageStorageKey(msg_uid));
};

var imap_setup_message_view_page = function(uid, details, list_path, callback) {
    if (!uid) {
        uid = getMessageUidParam();
    }
    const callbackFn = (...args) => {        
        markPrefetchedMessagesAsRead(uid);
        observeMessageTextMutationAndHandleExternalResources();
        if (callback) {
            callback(...args);
        }
    };
    
    const msg_content = get_local_message_content(uid, list_path);
    if (!msg_content) {
        get_message_content(false, uid, list_path, details, callbackFn);
    }
    else {
        const msgResponse = JSON.parse(msg_content);
        $('.msg_text').append(msgResponse.msg_headers)
                        .append(msgResponse.msg_text)
                        .append(msgResponse.msg_parts);
        document.title = $('.header_subject th').text();
        $('.header_subject th').append('<i class="bi bi-x-lg close_inline_msg"></i>');
        $('.close_inline_msg').on("click", function() { msg_inline_close(); });

        $('.reply_link, .reply_all_link, .forward_link').each(function() {
            $(this).data("href", $(this).attr("href")).removeAttr("href");
            $(this).addClass('disabled_link');
        });
        imap_message_view_finished(uid, details);
        get_message_content(false, uid, list_path, details, callback, true);
    }
};

var display_reply_content = function(res) {
    $('.compose_to').prop('disabled', false);
    $('.smtp_send').prop('disabled', false);
    $('.compose_subject').prop('disabled', false);
    $('.compose_body').prop('disabled', false);
    $('.smtp_server_id').prop('disabled', false);
    $('.compose_body').text(res.reply_body);
    $('.compose_subject').val(res.reply_subject);
    $('.compose_to').val(res.reply_to);
    document.title = res.reply_subject;
};

var imap_background_unread_content_result = function(res) {
    if (!$.isEmptyObject(res.folder_status)) {
        var detail = Hm_Utils.parse_folder_path(Object.keys(res.folder_status)[0], 'imap');
        var ids = [detail.server_id+'_'+detail.folder];
        var cache = $('<tbody></tbody>').append($(Hm_Utils.get_from_local_storage('formatted_unread_data')));
        globals.Hm_Background_Unread.update(ids, res.formatted_message_list, 'imap', cache);
        Hm_Utils.save_to_local_storage('formatted_unread_data', cache.html());
    }
};

var check_select_for_imap = function() {
    $('body').off('change', 'input[type=checkbox]');
    $('body').on('change', 'input[type=checkbox]', function(e) { search_selected_for_imap(); });
};

var search_selected_for_imap = function() {
    var imap_selected = false;
    $('input[type=checkbox]').each(function() {
        if (this.checked && this.id.search('imap') != -1) {
            imap_selected = true;
            return false;
        }
    });
    if (imap_selected) {
        $('.imap_move').removeClass('disabled_input');
        $('.imap_move').off('click');
        $('.imap_move').on("click", function(e) {return imap_move_copy(e, $(this).data('action'), 'list');});
    }
    else {
        $('.imap_move').addClass('disabled_input');
        $('.imap_move').off('click');
        $('.imap_move').on("click", function() { return false; });
        $('.move_to_location').html('');
        $('.move_to_location').hide();
    }
};

var unselect_non_imap_messages = function() {
    var unselected = 0;
    $('input[type=checkbox]').each(function() {
        if (this.checked && this.id.search('imap') == -1) {
            this.checked = false;
            unselected++;
        }
    });
    if (unselected > 0) {
        Hm_Notices.show({0: 'ERR'+$('.move_to_string3').val()});
    }
};

var imap_move_copy = function(e, action, context) {
    var move_to;
    if (!e.target || e.target.classList.contains('imap_move')) {
        move_to = $('.msg_controls .move_to_location');
    }
    else {
        move_to = $('.msg_text .move_to_location');
    }
    unselect_non_imap_messages();
    var label;
    var folders = $('.email_folders').clone(false);
    folders.find('.manage_folders_li').remove();
    $('.menu_email', folders).remove();
    folders.removeClass('email_folders');
    folders.show();
    $('.imap_folder_link', folders).addClass('imap_move_folder_link').removeClass('imap_folder_link');
    if (action == 'move') {
        label = $('.move_to_string1').val();
    }
    else {
        label = $('.move_to_string2').val();
    }
    folders.prepend('<div class="move_to_title">'+label+'<a class="close_move_to close" href="#" aria-label="Close"><span aria-hidden="true">&times;</span></a></div>');
    move_to.html(folders.html());
    $('.imap_move_folder_link', move_to).on("click", function() { return expand_imap_move_to_folders($(this).data('target'), context); });
    $('a', move_to).not('.imap_move_folder_link').not('.close_move_to').off('click');
    $('a', move_to).not('.imap_move_folder_link').not('.close_move_to').on("click", function() { imap_perform_move_copy($(this).data('id'), context); return false; });
    $('.move_to_type').val(action);
    $('.close_move_to').on("click", function() {
        $('.move_to_location').html('');
        $('.move_to_location').hide();
        return false;
    });
    move_to.show();
    return false;
};

var imap_perform_move_copy = function(dest_id, context, action = null) {
    if (!action) {
        action = $('.move_to_type').val();
    }
    var ids = [];
    var page = getPageNameParam();
    $('.move_to_location').html('');
    $('.move_to_location').hide();

    if (context == 'message') {
        var inline_uuid = Hm_Utils.get_from_global('inline_move_uuid', false);
        if (inline_uuid) {
            ids.push(inline_uuid);
            globals['inline_move_uuid'] = false;
        }
        else if (page == 'message') {
            var uid = getMessageUidParam();
            var path = Hm_Utils.parse_folder_path(getListPathParam());
            ids.push('imap_'+path['server_id']+'_'+uid+'_'+path['folder']);
        }
    }
    else if (context == 'list') {
        $('input[type=checkbox]').each(function() {
            if (this.checked && this.id.search('imap') != -1) {
                ids.push(this.id);
            }
        });
    }
    if (ids.length > 0 && dest_id) {
        Hm_Ajax.request(
            [{'name': 'hm_ajax_hook', 'value': 'ajax_imap_move_copy_action'},
            {'name': 'imap_move_ids', 'value': ids.join(',')},
            {'name': 'imap_move_to', 'value': dest_id},
            {'name': 'imap_move_page', 'value': page},
            {'name': 'imap_move_action', 'value': action}],
            function(res) {
                var index;
                if (getPageNameParam() == 'message_list') {
                    Hm_Message_List.reset_checkboxes();
                    if (action == 'move' || action == 'screen_mail') {
                        for (index in res.move_count) {
                            $('.'+Hm_Utils.clean_selector(res.move_count[index])).remove();
                        }
                    }
                    if (getListPathParam().substr(0, 4) === 'imap') {
                        select_imap_folder(getListPathParam());
                    }
                    else {
                        Hm_Message_List.load_sources();
                    }
                }
                else {
                    if (action == 'move') {
                        var nlink = $('.nlink');
                        if (nlink.length && Hm_Utils.get_from_global('auto_advance_email_enabled')) {
                            Hm_Utils.redirect(nlink.attr('href'));
                        }
                        else {
                            if (getPageNameParam() == 'search') {
                                window.location.reload();
                            }
                            else if (getPageNameParam() == 'advanced_search'){
                                process_advanced_search();
                            } else {
                                Hm_Utils.redirect("?page=message_list&list_path="+hm_list_parent());
                            }
                        }
                    }
                }
            }
        );
    }
};

var expand_imap_move_to_mailbox = function(res, context) {
    if (res.imap_expanded_folder_path) {
        var move_to = $('.move_to_location');
        var folders = $(res.imap_expanded_folder_formatted);
        folders.find('.manage_folders_li').remove();
        $('.'+Hm_Utils.clean_selector(res.imap_expanded_folder_path), $('.move_to_location')).append(folders);
        $('.imap_folder_link', move_to).addClass('imap_move_folder_link').removeClass('imap_folder_link');
        $('.imap_move_folder_link', move_to).off('click');
        $('.imap_move_folder_link', move_to).on("click", function() { return expand_imap_move_to_folders($(this).data('target'), context); });
        $('a', move_to).not('.imap_move_folder_link').off('click');
        $('a', move_to).not('.imap_move_folder_link').on("click", function() { imap_perform_move_copy($(this).data('id'), context); return false; });
    }
};

var expand_imap_move_to_folders = function(path, context) {
    var detail = Hm_Utils.parse_folder_path(path, 'imap');
    var list = $('.imap_'+detail.server_id+'_'+Hm_Utils.clean_selector(detail.folder), $('.move_to_location'));
    if ($('li', list).length === 0) {
        $('.expand_link', list).html('<i class="bi bi-file-minus-fill"></i>');
        if (detail) {
            Hm_Ajax.request(
                [{'name': 'hm_ajax_hook', 'value': 'ajax_imap_folder_expand'},
                {'name': 'imap_server_id', 'value': detail.server_id},
                {'name': 'folder', 'value': detail.folder}],
                function (res) { expand_imap_move_to_mailbox(res, context); }
            );
        }
    }
    else {
        $('.expand_link', list).html('+');
        $('ul', list).remove();
    }
    return false;
};

var imap_background_unread_content = function(id, folder) {
    Hm_Ajax.request(
        [{'name': 'hm_ajax_hook', 'value': 'ajax_imap_unread'},
        {'name': 'folder', 'value': folder},
        {'name': 'imap_server_ids', 'value': id}],
        imap_background_unread_content_result,
        [],
        false,
        function() {
            var cache = $('<tbody></tbody>').append($(Hm_Utils.get_from_local_storage('formatted_unread_data')));
            Hm_Message_List.adjust_unread_total($('tr', cache).length, true);
        }
    );
    return false;
};

var get_imap_folder_status = function(id, folder) {
    Hm_Ajax.request(
        [{'name': 'hm_ajax_hook', 'value': 'ajax_imap_folder_status'},
        {'name': 'imap_server_id', 'value': id},
        {'name': 'folder', 'value': folder}],
        false,
        [],
        true,
        Hm_Folders.update_unread_counts
    );
}

var imap_folder_status = function() {
    var source;
    var sources = hm_data_sources();
    if (!sources || !sources.length) {
        sources = hm_data_sources_background();
    }
    for (var index in sources) {
        source = sources[index];
        if (source.type == 'imap') {
            get_imap_folder_status(source.id, source.folder);
        }
    }
};

var imap_setup_tags = function() {
    $(document).on('click', '.label-checkbox', function() {
        var folder_id = $(this).data('id');
        var ids = [];
        if (getPageNameParam() == 'message') {
            var list_path = getListPathParam().split('_');
            ids.push(list_path[1]+'_'+getMessageUidParam()+'_'+list_path[2]);
        } else {
            $('input[type=checkbox]').each(function() {
                if (this.checked && this.id.search('imap') != -1) {
                    var parts = this.id.split('_');
                    ids.push(parts[1]+'_'+parts[2]+'_'+parts[3]);
                }
            });
            if (ids.length == 0) {
                return;
            };
        }

        Hm_Ajax.request(
            [{'name': 'hm_ajax_hook', 'value': 'ajax_imap_tag'},
            {'name': 'tag_id', 'value': folder_id},
            {'name': 'imap_server_ids', 'value': ids}],
            function(res) {
                if (!res.router_user_msgs[0].startsWith('ERR')) {
                    Hm_Utils.search_from_local_storage("/^\d+_imap_.+/")?.forEach((source) => Hm_Utils.save_to_local_storage(source, 1));
                    Hm_Folders.reload_folders(true);
                    var path = hm_list_parent()? hm_list_parent(): getListPathParam();
                    window.location.replace('?page=message_list&list_path='+path);
                }
            }
        );
    });
}

var imap_setup_snooze = function() {
    $(document).on('click', '.snooze_date_picker', function(e) {
        document.querySelector('.snooze_input_date').showPicker();
    });
    $(document).on('click', '.snooze_helper', function(e) {
        e.preventDefault();
        $('.snooze_input').val($(this).attr('data-value')).trigger('change');
    });
    $(document).on('input', '.snooze_input_date', function(e) {
        var now = new Date();
        now.setMinutes(now.getMinutes() + 1);
        $(this).attr('min', now.toJSON().slice(0, 16));
        if (new Date($(this).val()).getTime() <= now.getTime()) {
            $('.snooze_date_picker').css('border', '1px solid red');
        } else {
            $('.snooze_date_picker').css({'border': 'unset', 'border-top': '1px solid #ddd'});
        }
    });
    $(document).on('change', '.snooze_input_date', function(e) {
        if ($(this).val() && new Date().getTime() < new Date($(this).val()).getTime()) {
            $('.snooze_input').val($(this).val()).trigger('change');
        }
    });
    $(document).on('change', '.snooze_input', function(e) {
        $('.snooze_dropdown').hide();
        var ids = [];
        if (getPageNameParam() == 'message') {
            var list_path = getListPathParam().split('_');
            ids.push(list_path[1]+'_'+getMessageUidParam()+'_'+list_path[2]);
        } else {
            $('input[type=checkbox]').each(function() {
                if (this.checked && this.id.search('imap') != -1) {
                    var parts = this.id.split('_');
                    ids.push(parts[1]+'_'+parts[2]+'_'+parts[3]);
                }
            });
            if (ids.length == 0) {
                return;
            };
        }
        Hm_Ajax.request(
            [{'name': 'hm_ajax_hook', 'value': 'ajax_imap_snooze'},
            {'name': 'imap_snooze_ids', 'value': ids},
            {'name': 'imap_snooze_until', 'value': $(this).val()}],
            function(res) {
                if (res.snoozed_messages > 0) {
                    Hm_Folders.reload_folders(true);
                    var path = hm_list_parent()? hm_list_parent(): getListPathParam();
                    window.location.replace('?page=message_list&list_path='+path);
                }
            }
        );
    });
}

var imap_unsnooze_messages = function() {
    Hm_Ajax.request(
        [{'name': 'hm_ajax_hook', 'value': 'ajax_imap_unsnooze'}],
        function() {},
    );
}

if (getListPathParam() == 'sent') {
    Hm_Message_List.page_caches.sent = 'formatted_sent_data';
}

$(function() {
    $(document).on('click', '#enable_sieve_filter', function () {
        $('.sieve_config').toggle();
    });

    $(document).on('keyup', '#new_imap_address', function () {
        if ($('#enable_sieve_filter').is(':checked') && $(this).val()) {
            $('#sieve_config_host').val($(this).val() + ':4190');
        } else {
            $('#sieve_config_host').val('');
        }
    });

    $(document).on('change', '#enable_sieve_filter', function () {
        $('#new_imap_address').trigger('keyup');
    });

    $(document).on('click', '.remove_attachment', function (e) {
        if (!hm_delete_prompt()) {
            e.preventDefault();
            return false;
        }
        return true;
    });

    $(document).on('click', '.checkbox_label', function(e) {
        setTimeout(search_selected_for_imap, 100);
    });

    if (hm_is_logged()) {
        imap_unsnooze_messages();
        setInterval(imap_unsnooze_messages, 60000);
    }

    if ($('.imap_move').length > 0) {
        check_select_for_imap();
        $('.toggle_link').on("click", function() { setTimeout(search_selected_for_imap, 100); });
        Hm_Ajax.add_callback_hook('ajax_imap_folder_display', check_select_for_imap);
        Hm_Message_List.callbacks.push(check_select_for_imap);
        $('.imap_move').on("click", function() { return false; });
    }

    if (getListPathParam() !== 'unread') {
        if (typeof hm_data_sources_background === 'function') {
            globals.Hm_Background_Unread = new Message_List();
            globals.Hm_Background_Unread.background = true;
            globals.Hm_Background_Unread.add_sources(hm_data_sources_background());
            var interval = Hm_Utils.get_from_global('imap_background_update_interval', 33);
            Hm_Timer.add_job(globals.Hm_Background_Unread.load_sources, interval, true);
        }
    }
    setTimeout(prefetch_imap_folders, 2);
});


var imap_archive_message = function(state, supplied_uid, supplied_detail) {
    var uid = getMessageUidParam();
    var detail = Hm_Utils.parse_folder_path(getListPathParam(), 'imap');
    if (supplied_uid) {
        uid = supplied_uid;
    }
    if (supplied_detail) {
        detail = supplied_detail;
    }
    if (detail && uid) {
        Hm_Ajax.request(
            [{'name': 'hm_ajax_hook', 'value': 'ajax_imap_archive_message'},
            {'name': 'imap_msg_uid', 'value': uid},
            {'name': 'imap_server_id', 'value': detail.server_id},
            {'name': 'folder', 'value': detail.folder}],
            function(res) {
                if (!res.imap_archive_error) {
                    if (Hm_Utils.get_from_global('msg_uid', false)) {
                        return;
                    }
                    var nlink = $('.nlink');
                    if (nlink.length && Hm_Utils.get_from_global('auto_advance_email_enabled')) {
                        Hm_Utils.redirect(nlink.attr('href'));
                    }
                    else {
                        if (!hm_list_parent()) {
                            Hm_Utils.redirect("?page=message_list&list_path="+getListPathParam());
                        }
                        else {
                            Hm_Utils.redirect("?page=message_list&list_path="+hm_list_parent());
                        }
                    }
                }
            }
        );
    }
    return false;
};

var imap_show_add_contact_popup = function() {
    var popup = document.getElementById("contact_popup");
    popup.classList.toggle("show");
};

var imap_hide_add_contact_popup = function(event) {
    event.stopPropagation()
    var popup = document.getElementById("contact_popup");
    popup.classList.toggle("show");
};

observeMessageTextMutationAndHandleExternalResources();

const handleDownloadMsgSource = function() {
    const messageSource = document.querySelector('pre.msg_source');
    const blob = new Blob([messageSource.textContent], { type: "message/rfc822" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    const subject = messageSource.textContent.match(/Subject: (.*)/)?.[1] || getMessageUidParam(); // Let's use the message UID if the subject is empty
    a.download = subject + '.eml';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
};

const handleCopyMsgSource = function(e) {
    e.preventDefault();
    const messageSource = document.querySelector('pre.msg_source');
    navigator.clipboard.writeText(messageSource.textContent);
    Hm_Notices.show(['Copied to clipboard']);
}

var imap_screen_email = function() {
    var list_msg_uid = [];
    
    $('input[type=checkbox]').each(function() {
        if (this.checked && this.id.search('imap') != -1) {
            list_msg_uid.push($(this).parent().parent().attr("data-uid"));
        }
    });
    if ($("#move_messages_in_screen_email").val() == 1) {
        imap_perform_move_copy("Screen email", "list", 'screen_mail');
    }
    list_msg_uid.forEach(function(msg_uid) {
        block_unblock_sender(msg_uid, Hm_Utils.parse_folder_path(getListPathParam()), 'sender', 'blocked');
    })
};

var add_email_in_contact_trusted = function(list_email) {
    if (list_email) {
      Hm_Ajax.request(
        [
          { name: 'hm_ajax_hook', value: 'ajax_add_contact' },
          { name: 'email_address', value: list_email.join(',') },
        ],
        function (res) {
          window.location.reload();
        }
      );
    }
  };

$('.screen-email-unlike').on("click", function() { imap_screen_email(); return false; });

$('.screen-email-like').on("click", function() {
    var list_email = [];
    $('input[type=checkbox]').each(function() {
        if (this.checked && this.id.search('imap') != -1) {
            let email = $('.'+ this.id +' .from').attr("data-title")
            if (email = email.trim()) {
                list_email.push(email);
            }
        }
    });
    add_email_in_contact_trusted(list_email); return false;
});

$(document).on('click', '[data-bs-dismiss="modal"]', function() {
    $('#shareFolderModal').modal('hide');
});

$(document).on('click', 'a.dropdown-item.share', function(e) {
    e.preventDefault();
    const listItem = e.target.closest('li');
    if(listItem) {
        listItem.getAttribute('data-id');
        const uid = listItem.getAttribute('data-id');
        const folder_uid = listItem.getAttribute('data-folder-uid');
        const folder = listItem.getAttribute('data-folder');
        $('#server_id').val(uid);
        $('#folder_uid').val(folder_uid);
        $('#folder').val(folder);
        const currentLabel = $('#shareFolderModalLabel').text();
        $('#shareFolderModalLabel').text(`${currentLabel} - ${folder} Folder`);

        $('#shareFolderModalLabel').val(`Share ${folder} Folder`);
        $('#shareFolderModal table tbody').empty();
        $('#loadingSpinner').show();
        Hm_Ajax.request(
            [
              { name: 'hm_ajax_hook', value: 'ajax_share_folders' },
              { name: 'imap_server_id', value: uid },
              { name: 'imap_folder_uid', value: folder_uid },
              { name: 'imap_folder', value: folder },
            ],
            function (res) {
                $('#loadingSpinner').hide();
                if (res.ajax_imap_folders_permissions) {
                    const permissions = res.ajax_imap_folders_permissions;
                    //then populate the modal with the data
                    populate_permissions_table(permissions);
                    $('#permissionTable').show();
                }
            }
        );
        $('#shareFolderModal').modal('show');
    }
});

var populate_permissions_table = function(permissions) {
    $('#shareFolderModal table tbody').empty();
    for (const [email, permissionList] of Object.entries(permissions)) {
        const translatedPermissions = permissionList.split(',').map(permission => {
            return hm_trans(permission.trim()); // Translate each permission
        });
        const permissionsString = translatedPermissions.join(', ');
        const row = `
            <tr>
                <td>${email}</td>
                <td>${permissionsString}</td>
                <td>
                    <button class="btn btn-sm btn-primary edit-permission" data-email="${email}" data-permissions="${permissionList}">Edit</button>
                </td>
            </tr>
        `;
        $('#shareFolderModal table tbody').append(row);
    }
}

$(document).on('click', '.edit-permission', function(e) {
    e.preventDefault();

    const email = $(this).data('email');
    const permissions = $(this).data('permissions');

    $('#email').val(email);
    $('#identifierUser').prop('checked', true);


    // Uncheck all permissions initially
    $('#accessRead').prop('checked', false);
    $('#accessWrite').prop('checked', false);
    $('#accessDelete').prop('checked', false);
    $('#accessOther').prop('checked', false);

    // Map the permissions string to checkboxes
    if (permissions.includes('Read')) $('#accessRead').prop('checked', true);
    if (permissions.includes('Write')) $('#accessWrite').prop('checked', true);
    if (permissions.includes('Delete')) $('#accessDelete').prop('checked', true);
    if (permissions.includes('Administer') || permissions.includes('Other')) $('#accessOther').prop('checked', true);

    // Show the form for editing
    $('#shareFolderModal').modal('show');
});

$(document).on('submit', '#shareForm', function(e) {
    e.preventDefault();
    const server_id = $('#server_id').val();
    const folder = $('#folder').val();

    let identifier = '';
    if ($('#identifierUser').is(':checked')) {
        identifier = $('#email').val();
    } else if ($('#identifierAll').is(':checked')) {
        identifier = 'all';
    } else if ($('#identifierGuests').is(':checked')) {
        identifier = 'guests';
    }

    let permissions = '';
    if ($('#accessRead').is(':checked')) permissions += 'r';
    if ($('#accessWrite').is(':checked')) permissions += 'w';
    if ($('#accessDelete').is(':checked')) permissions += 'd';
    if ($('#accessOther').is(':checked')) permissions += 'a';
    // If no permissions are selected, call DELETEACL elser call SETACL
    const action = permissions === '' ? 'remove' : 'add';
    Hm_Ajax.request(
        [
          { name: 'hm_ajax_hook', value: 'ajax_share_folders' },
          { name: 'imap_server_id', value: server_id },
          { name: 'identifier', value: identifier },
          { name: 'imap_folder', value: folder },
          { name: 'action', value: action },
          { name: 'permissions', value: permissions },
        ],
        function (res) {
            if(res.ajax_imap_folders_permissions) {
                console.log("ajax_imap_folders_permissions",res.ajax_imap_folders_permissions);
                const permissions = res.ajax_imap_folders_permissions;
                populate_permissions_table(permissions);
            }
        }
    );
});
// TODO: This function is too large for a route handler, decouple it into multiple functions with action scope focused.
function applyComposePageHandlers() {
    init_resumable_upload()

    var interval = Hm_Utils.get_from_global('compose_save_interval', 30);
    Hm_Timer.add_job(function() { save_compose_state(); }, interval, true);
    $('.draft_title').on("click", function() { $('.draft_list').toggle(); });
    $('.toggle_recipients').on("click", function() { return toggle_recip_flds(); });
    $('.smtp_reset').on("click", reset_smtp_form);
    $('.delete_draft').on("click", function() { smtp_delete_draft($(this).data('id')); });
    $('.smtp_save').on("click", function() { save_compose_state(false, true); });
    $('.smtp_send_archive').on("click", function() { send_archive(false, true); });

    const modal = new Hm_Modal({
        modalId: 'emptySubjectBodyModal',
        title: 'Warning',
        btnSize: 'sm'
    });

    $('.smtp_send_placeholder').on("click", function (e) {
        if (window.kindEditor) {
            kindEditor.sync();
        }

        if (window.mdEditor) {
            mdEditor.codemirror.save();
        }

        const body = $('.compose_body').val().trim();
        const subject = $('.compose_subject').val().trim();

        let modalContentHeadline = '';
        let dontWanValueInStorage = '';
        let showBtnSendAnywayDontWarnFuture = true;

        // If the subject is empty, we should warn the user
        if (!subject) {
            dontWanValueInStorage = 'dont_warn_empty_subject';
            modalContentHeadline = "Your subject is empty!";
        }

        // If the body is empty, we should warn the user
        if (!body) {
            dontWanValueInStorage = 'dont_warn_empty_body';
            modalContentHeadline = "Your body is empty!";
        }

        // if both the subject and the body are empty, we should warn the user
        if (!body && !subject) {
            dontWanValueInStorage = 'dont_warn_empty_subject_body';
            modalContentHeadline = "Your subject and body are empty!";
        }

        if (hm_module_is_supported('contacts')) {
            var checkInList = check_cc_exist_in_contacts_list();
            // if contact_cc not exist in contact list for user
            if (checkInList) {
                modalContentHeadline = "Adress mail not exist in your contact list";
                showBtnSendAnywayDontWarnFuture = false;
            }

        }

        // If the user has disabled the warning, we should send the message
        if (Boolean(Hm_Utils.get_from_local_storage(dontWanValueInStorage))) {
            handleSendAnyway();
        }
        // Otherwise, we should show the modal if we have a headline
        else if (modalContentHeadline) {
            modalContentHeadline = `<p>${hm_trans(modalContentHeadline)}</p>`;
            return showModal(modalContentHeadline);
        }
        // Subject and body are not empty, we can send the message
        else {
            handleSendAnyway();
        }

        /*
        ========================================
        Functions declarations
        ========================================
        */
        function showModal() {
            if (! modal.modalContent.html()) {
                modal.addFooterBtn(hm_trans('Send anyway'), 'btn-warning', handleSendAnyway);
                if (showBtnSendAnywayDontWarnFuture) {
                    modal.addFooterBtn(hm_trans("Send anyway and don't warn in the future"), 'btn-warning', handleSendAnywayAndDontWarnMe);
                }
            }
            modal.setContent(modalContentHeadline + checkInList + `<p>${hm_trans('Are you sure you want to send this message?')}</p>`);
            modal.open();
        }

        function waitForValueChange(selector, targetValue) {
            return new Promise((resolve) => {
                const checkValue = () => {
                    if ($(selector).val() !== targetValue) {
                        resolve();  
                    } else {
                        setTimeout(checkValue, 100); 
                    }
                };
                checkValue();  
            });
        }

        async function handleSendAnyway() {

            if ($('.compose_draft_id').val() == '0') {
            Hm_Notices.show([hm_trans('Please wait, sending message...')]);
            await waitForValueChange('.compose_draft_id', '0');
            }

            
        
            if (handleMissingAttachment()) {
                document.getElementsByClassName("smtp_send")[0].click();
            } else {
                e.preventDefault();
            }
        }

        function handleSendAnywayAndDontWarnMe() {
            Hm_Utils.save_to_local_storage(dontWanValueInStorage, true);
            handleSendAnyway();
        };

        function handleMissingAttachment() {
            var uploaded_files = $("input[name='uploaded_files[]']").map(function () { return $(this).val(); }).get();
            const compose_body_value = document.getElementById('compose_body').value;
            const force_send = document.getElementById('force_send')?.value;
            var reminder_value = $('.compose_form').data('reminder');
            if (reminder_value === 1 && force_send !== '1') {
                let all_translated_keywords = [];
                for (let lang in window.hm_translations) {
                    if (window.hm_translations.hasOwnProperty(lang)) {
                        // Get translated keywords for the current language
                        const translated_keywords = hm_trans('attachment,file,attach,attached,attaching,enclosed,CV,cover letter', lang).split(',');
                        // Concatenate translated keywords with the array
                        all_translated_keywords = all_translated_keywords.concat(translated_keywords);
                    }
                }
                const additional_keywords = ['.doc', '.pdf'];
                // Split the translated keywords into an array && Add additional keywords or file extensions
                const combined_keywords = all_translated_keywords.concat(additional_keywords);
                // Build the regex pattern
                const pattern = new RegExp('(' + combined_keywords.map(keyword => keyword.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')).join('|') + ')', 'i');
                // Check if the pattern is found in the message
                if (pattern.test(compose_body_value) && uploaded_files.length === 0) {

                    if (confirm(hm_trans('We couldn\'t find the attachment you referred to. Please confirm if you attached it or provide the details again.'))) {
                        force_send_message();
                    } else {
                        return false;
                    }
                }
            }
            return true;
        }
    });
    $('.compose_form').on('submit', function() {
        process_compose_form();
    });
    if ($('.compose_cc').val() || $('.compose_bcc').val()) {
        toggle_recip_flds();
    }
    if (window.location.href.search('&reply=1') !== -1 || window.location.href.search('&reply_all=1') !== -1) {
        replace_cursor_positon ($('textarea[name="compose_body"]'));
    }
    if (window.location.href.search('&forward=1') !== -1) {
        setTimeout(function() {
            save_compose_state();
        }, 100);
    }
    if ($('.sys_messages').text() != 'Message Sent') {
        get_smtp_profile($('.compose_server').val());
    }
    $('.compose_server').on('change', function() {
        get_smtp_profile($('.compose_server').val());
    });
    if($('.compose_attach_button').attr('disabled') == 'disabled'){
        check_attachment_dir_access();
    };

    $('.compose_container').attr('ondrop', 'move_recipient_to_section(event)').attr('ondragover', 'allow_drop(event)');
    $('.compose_to, .compose_cc, .compose_bcc').on('keypress', function(e) {
        if(e.which == 13) {
            e.preventDefault();
            text_to_bubbles(this);
        }
    });
    $('.compose_to, .compose_cc, .compose_bcc').on('blur', function(e) {
        e.preventDefault();
        text_to_bubbles(this);
    });
    $('.compose_subject, .compose_body, .compose_server, .smtp_send_placeholder, .smtp_send_archive').on('focus', function(e) {
        $('.compose_to, .compose_cc, .compose_bcc').each(function() {
            bubbles_to_text(this);
        });
    });
    $('.compose_to, .compose_cc, .compose_bcc').on('focus', function(e) {
        text_to_bubbles(this);
    });
    $('.compose_container').on('click', function() {
        $(this).find('input').focus();
    });
    $(document).on('click', '.bubble_close', function(e) {
        e.stopPropagation();
        $(".bubble_dropdown-content").remove();
        $(this).parent().remove();
    });

    var selectedOption = $('#compose_smtp_id option[selected]');
    var selectedEmail = selectedOption.data('email');
    var selectedVal = selectedOption.val();

    var recipientsInput = $('#compose_cc');
    var excludedEmail = null;

    const excludeEmail = function () {
        var newRecipients = recipientsInput.val().split(',').filter(function(email) {
            if (email.includes(selectedEmail)) {
                excludedEmail = email;
                return false;
            }
            return true;
        }).join(', ');
        recipientsInput.val(newRecipients);
    };

    if (recipientsInput.val().includes(selectedEmail)) {
        excludeEmail();
        $(document).on('change', '#compose_smtp_id', function() {
            if ($(this).val() !== selectedVal) {
                if (!recipientsInput.val().includes(selectedEmail)) {
                    recipientsInput.val(recipientsInput.val() + ', ' + excludedEmail);
                }
            } else {
                excludeEmail();
            }
        });
    }

    $('.compose_to').on('keyup', function(e) { autocomplete_contact(e, '.compose_to', '#to_contacts'); });
    $('.compose_cc').on('keyup', function(e) { autocomplete_contact(e, '.compose_cc', '#cc_contacts'); });
    $('.compose_bcc').on('keyup', function(e) { autocomplete_contact(e, '.compose_bcc', '#bcc_contacts'); });
    $('.compose_to').focus();

    if (window.pgpComposePageHandler) pgpComposePageHandler();
    if (window.profilesComposePageHandler) profilesComposePageHandler();
}

var get_smtp_profile = function(profile_value) {
    if (typeof profile_value === "undefined" || profile_value == "0" || profile_value == "") {
        Hm_Notices.show([err_msg('Please create a profile for saving sent messages option')]);
    }
    else {
        Hm_Ajax.request(
            [{'name': 'hm_ajax_hook', 'value': 'ajax_profiles_status'},
            {'name': 'profile_value', 'value': profile_value}],
            function(res) {
            }
        );
    }
};

var check_attachment_dir_access = function() {
    Hm_Notices.show([err_msg('Attachment storage unavailable, please contact your site administrator')]);
};

var smtp_test_action = function(event) {
    event.preventDefault();
    var form = $(this).closest('.smtp_connect');
    Hm_Notices.hide(true);
    Hm_Ajax.request(
        form.serializeArray(),
        false,
        {'smtp_connect': 1}
    );
};

var smtp_save_action = function(event) {
    event.preventDefault();
    var form = $(this).closest('.smtp_connect');
    var btnContainer = $(this).parent();
    Hm_Notices.hide(true);
    Hm_Ajax.request(
        form.serializeArray(),
        function(res) {
            if (res.just_saved_credentials) {
                form.find('.credentials').attr('disabled', true);
                form.find('.save_smtp_connection').hide();
                form.find('.smtp_password').val('');
                form.find('.smtp_password').attr('placeholder', '[saved]');
                btnContainer.append('<input type="submit" value="Forget" class="forget_smtp_connection btn btn-outline-secondary btn-sm me-2" />');
                $('.forget_smtp_connection').on('click', smtp_forget_action);
                Hm_Utils.set_unsaved_changes(1);
                Hm_Folders.reload_folders(true);
            }
        },
        {'smtp_save': 1}
    );
};

var smtp_forget_action = function(event) {
    event.preventDefault();
    var form = $(this).closest('.smtp_connect');
    var btnContainer = $(this).parent();
    Hm_Notices.hide(true);
    Hm_Ajax.request(
        form.serializeArray(),
        function(res) {
            if (res.just_forgot_credentials) {
                form.find('.credentials').prop('disabled', false);
                form.find('.credentials').val('');
                btnContainer.append('<input type="submit" value="Save" class="save_smtp_connection btn btn-outline-secondary btn-sm me-2" />');
                $('.save_smtp_connection').on('click', smtp_save_action);
                $('.forget_smtp_connection', form).remove();
                Hm_Utils.set_unsaved_changes(1);
                Hm_Folders.reload_folders(true);
            }
        },
        {'smtp_forget': 1}
    );
};

var smtp_delete_action = function(event) {
    if (!hm_delete_prompt()) {
        return false;
    }
    event.preventDefault();
    Hm_Notices.hide(true);
    var form = $(this).closest('.smtp_connect');
    Hm_Ajax.request(
        form.serializeArray(),
        function(res) {
            if (res.deleted_server_id) {
                form.parent().fadeOutAndRemove()
                Hm_Utils.set_unsaved_changes(1);
                Hm_Folders.reload_folders(true);
                decrease_servers('smtp');
            }
        },
        {'smtp_delete': 1}
    );
};

var smtp_delete_draft = function(id) {
    Hm_Ajax.request(
        [{'name': 'hm_ajax_hook', 'value': 'ajax_smtp_delete_draft'},
        {'name': 'draft_id', 'value': id}],
        function(res) {
            if (res.draft_id != -1) {
                $('.draft_'+id).remove();
                $('.draft_list').toggle();
            }
        }
    );
};

var send_archive = function() {
    $('.compose_post_archive').val(1);
    document.getElementsByClassName("smtp_send_placeholder")[0].click();
}

var save_compose_state = function(no_files, notice) {
    var no_icon = true;
    if (notice) {
        no_icon = false;
    }
    var uploaded_files = $("input[name='uploaded_files[]']").map(function(){return $(this).val();}).get();
    var body = $('.compose_body').val();
    var subject = $('.compose_subject').val();
    var to = $('.compose_to').val();
    var smtp = $('.compose_server').val();
    var cc = $('.compose_cc').val();
    var bcc = $('.compose_bcc').val();
    var inreplyto = $('.compose_in_reply_to').val();

    var draft_id = $('.compose_draft_id').val();
    if (globals.draft_state == body+subject+to+smtp+cc+bcc+uploaded_files) {
        return;
    }
    globals.draft_state = body+subject+to+smtp+cc+bcc+uploaded_files;

    if (!body && !subject && !to && !cc && !bcc) {
        return;
    }
    $('.compose_draft_id').val(0)
    Hm_Ajax.request(
        [{'name': 'hm_ajax_hook', 'value': 'ajax_smtp_save_draft'},
        {'name': 'draft_body', 'value': body},
        {'name': 'draft_id', 'value': draft_id},
        {'name': 'draft_smtp', 'value': smtp},
        {'name': 'draft_subject', 'value': subject},
        {'name': 'draft_cc', 'value': cc},
        {'name': 'draft_bcc', 'value': bcc},
        {'name': 'draft_notice', 'value': notice},
        {'name': 'draft_in_reply_to', 'value': inreplyto},
        {'name': 'delete_uploaded_files', 'value': no_files},
        {'name': 'draft_to', 'value': to},
        {'name': 'uploaded_files', 'value': uploaded_files}],
        function(res) {
            if (res.draft_id) {
                $('.compose_draft_id').val(res.draft_id);
            }
            if (res.draft_subject) {
                $('.draft_list .draft_'+draft_id+' a').text(res.draft_subject);
            }
        },
        [],
        no_icon
    );
};

var toggle_recip_flds = function() {
    var symbol = '<i class="bi bi-plus-square-fill fs-3"></i>';
    if ($('.toggle_recipients').html() == '<i class="bi bi-plus-square-fill fs-3"></i>') {
        symbol = '<i class="bi bi-dash-square fs-3"></i>';
    }
    $('.toggle_recipients').html(symbol);
    $('.recipient_fields').toggle();
    return false;
}

function smtpServersPageHandler() {
    $('.test_smtp_connect').on('click', smtp_test_action);
    $('.save_smtp_connection').on('click', smtp_save_action);
    $('.forget_smtp_connection').on('click', smtp_forget_action);
    $('.delete_smtp_connection').on('click', smtp_delete_action);
    var dsp = Hm_Utils.get_from_local_storage('.smtp_section');
    if (dsp === 'block' || dsp === 'none') {
        $('.smtp_section').css('display', dsp);
    }
}

var reset_smtp_form = function() {
    $('.compose_body').val('');
    $('.compose_subject').val('');
    $('.compose_to').val('');
    $('.compose_cc').val('');
    $('.compose_bcc').val('');
    $('.ke-content', $('iframe').contents()).html('');
    $('.uploaded_files').html('');
    save_compose_state(true);
};

var replace_cursor_positon = function (txtElement) {
    txtElement.val('\r\n\r\n\r\n'+txtElement.val());
    txtElement.prop('selectionEnd',0);
    txtElement.focus();
}

var init_resumable_upload = function () {
    var r = new Resumable({
        target:'?page=compose&hm_ajax_hook=ajax_upload_chunk&draft_smtp=' + $(".compose_server").val(),
        testTarget:'?page=compose&hm_ajax_hook=ajax_get_test_chunk&draft_smtp=' + $(".compose_server").val(),
        testMethod: 'POST',
        headers: {
            'X-Requested-with': 'xmlhttprequest'
        }
    });
    r.assignBrowse(document.getElementsByClassName('compose_attach_button'));
    r.on('fileAdded', function(file, event){
        $('.uploaded_files').append('<tr id="tr-'+file.uniqueIdentifier+'"><td>'
                +file.fileName+'</td><td>'+file.file.type+' ' + (Math.round((file.file.size/1024) * 100)/100) + 'KB '
                +'</td><td><a class="remove_attachment text-danger" id="remove-'+file.uniqueIdentifier+'" style="display:none" href="#">Remove</a><a  id="pause-'+file.uniqueIdentifier+'" class="pause_upload" href="#">Pause</a><a style="display:none" id="resume-'+file.uniqueIdentifier+'" class="resume_upload" href="#">Resume</a></td></tr><tr><td colspan="2">'
                +'<div class="meter" style="width:100%"><span id="progress-'
                +file.uniqueIdentifier+'" style="width:0%;"><span class="progress" id="progress-bar-'
                +file.uniqueIdentifier+'"></span></span></div></td></tr>');
        r.upload()
        $('.pause_upload').on('click', function (e) {
            e.preventDefault();
            r.pause();
        });
        $('.resume_upload').on('click', function(e) {
            e.preventDefault();
            $('.remove_attachment').css('display', 'none');
            $('.pause_upload').css('display', '');
            $('.resume_upload').css('display', 'none');
            r.upload();
        });
        $('.remove_attachment').on('click', function(e) {
            e.preventDefault();
            var fileUniqueId = $(this).attr('id').replace('remove-', '');
            file = r.getFromUniqueIdentifier(fileUniqueId);
            if (file) {
                r.removeFile(file);
            }
            $(this).parent().parent().next('tr').remove();
            $(this).parent().parent().remove();
        });
    });
    r.on('fileProgress', function(file) {
        var progress = Math.floor(file.progress() * 100);
        $('#progress-' + file.uniqueIdentifier).css('width', progress+'%');
    });
    r.on('fileSuccess', function(file) {
        $('.remove_attachment').css('display', '');
        $('.pause_upload').css('display', 'none');
        $('.resume_upload').css('display', 'none');
        $('#tr-'+file.uniqueIdentifier).append('<td style="display:none"><input name="uploaded_files[]" type="text" value="'+file.fileName+'" /></td>');
        $('#progress-bar-' + file.uniqueIdentifier).css('background-color', 'green');
        $('#progress-' + file.uniqueIdentifier).parent().css('opacity', '0');
    });
    r.on('fileError', function(file, message) {
        $('#progress-bar-' + file.uniqueIdentifier).css('background-color', 'red');
    });
    r.on('pause', function() {
        $('.remove_attachment').css('display', 'none');
        $('.pause_upload').css('display', 'none');
        $('.resume_upload').css('display', '');
    });
    $('.remove_attachment').on('click', function(e) {
        e.preventDefault();
        var fileUniqueId = $(this).attr('id').replace('remove-', '');
        $(this).parent().parent().next('tr').remove();
        $(this).parent().parent().remove();
        file = r.getFromUniqueIdentifier(fileUniqueId);
        r.removeFile(file);
    });
}

var move_recipient_to_section = function(e) {
    e.preventDefault();
    var id = e.dataTransfer.getData("text");
    var target = $(e.target);
    if (!target.hasClass('compose_container')) {
        target = target.closest('.compose_container');
    }
    target.find('.bubbles').append($('#'+id));
    var input = target.find('input');
    input.focus();
    resize_input(input[0]);
};

var allow_drop = function(e) {
    e.preventDefault();
};

var drag = function(e) {
    e.dataTransfer.setData('text', e.target.id);
};

var bubbles_to_text = function(input) {
    var value = '';
    $(input).prev().children().each(function() {
        if (value) {
            value = value + ', ';
        }
        value = value + $(this).attr('data-value');
        $(this).remove();
    });
    if (value) {
        if ($(input).val()) {
            value = value + ', ' + $(input).val();
        }
        $(input).val(value);
    }
    $(input).css('width', '95%');
};

var resize_input = function(input) {
    $(input).css('width', 'auto');
    var input_width = $(input).parent().outerWidth() - $(input).position().left;
    $(input).css('width', input_width);
};

var text_to_bubbles = function(input) {
    var contact_id = input.getAttribute("data-id");
    var contact_type = input.getAttribute("data-type");
    var contact_source = input.getAttribute("data-source");

    if ($(input).val()) {
        var recipients = $(input).val().split(/,|;/);
        var invalid_recipients = '';

        for (var i = 0; i < recipients.length; i++) {
            if (is_valid_recipient(recipients[i])) {
                const value = recipients[i].trim().replace(/</g, '&lt;').replace(/>/g, '&gt;');
                append_bubble(value, input, contact_id, contact_type, contact_source);
            } else {
                if (invalid_recipients) {
                    invalid_recipients = invalid_recipients + ', ';
                }
                invalid_recipients = invalid_recipients + recipients[i];
            }
        }
        $(input).val(invalid_recipients);
    }
    resize_input(input);
};

var bubble_index = 0;
var append_bubble = function(value, to, id, type, source) {
    var bubble = '<div id="bubble_'+bubble_index+'" class="bubble bubble_dropdown-toggle" onclick="toggle_bubble_dropdown(this)" draggable="true"  ondragstart="drag(event)" data-id="'+id+'"  data-type="'+type+'"  data-source="'+source+'" data-value="'+value+'">'+value+'<span class="bubble_close">&times;</span></div>';
    $(to).prev().append(bubble);
    bubble_index++;
};

var toggle_bubble_dropdown = function (element) {
    var dropdownContent = element.nextElementSibling;

    if (!dropdownContent) {
        var textValue = element.dataset.value;
        var contact_id = element.getAttribute('data-id');
        var contact_type = element.getAttribute('data-type');
        var contact_source = element.getAttribute('data-source');
        dropdownContent = document.createElement('div');
        dropdownContent.classList.add('bubble_dropdown-content');
        let html = '<ul><li><span data-value="' + textValue + '" onclick="copy_text_to_clipboard(this)"><i class="bi bi-copy"></i> Copy</span></li>';
        if (contact_id !== "null") {
            html += '<li><a href="?page=contacts&contact_id=' + contact_id + '&contact_source=' + contact_source + '&contact_type=' + contact_type + '"><i class="bi bi-pencil-fill"></i> Edit</a></li>';
        }
        html += '</ul>';
        dropdownContent.innerHTML = html;
        element.parentNode.appendChild(dropdownContent);
    }

    dropdownContent.classList.toggle('show');
}

var copy_text_to_clipboard = function(e) {
    navigator.clipboard.writeText(e.dataset.value);
    $(".bubble_dropdown-content").remove();
}

var is_valid_recipient = function(recipient) {
    var valid_regex = /^[\p{L}|\d' ]*(<)?[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*(>)?$/u;
    return recipient.match(valid_regex);
};

var process_compose_form = function(){
    var msg_uid = getMessageUidParam();
    var detail = Hm_Utils.parse_folder_path(getListPathParam(), 'imap');
    var class_name = 'imap_' + detail.server_id + '_' + msg_uid + '_' + detail.folder;
    var key = 'imap_' + Hm_Utils.get_url_page_number() + '_' + getListPathParam();
    var next_message = Hm_Message_List.prev_next_links(key, class_name)[1];

    if (next_message) {
        $('.compose_next_email_data').val(next_message);
    }

    var uploaded_files = $("input[name='uploaded_files[]']").map(function () { return $(this).val(); }).get();
    $('#send_uploaded_files').val(uploaded_files);
    Hm_Ajax.show_loading_icon();
    $('.smtp_send_placeholder').addClass('disabled_input');
    $('.smtp_send_archive').addClass('disabled_input');
    $('.smtp_send').on("click", function () { return false; });
}
var force_send_message = function() {
    // Check if the force_send input already exists
    var forceSendInput = document.getElementById('force_send');
    if (! forceSendInput) {
        // Create a hidden input element
        var hiddenInput = document.createElement('input');
        hiddenInput.type = 'hidden';
        hiddenInput.name = 'force_send';
        hiddenInput.value = '1';
        hiddenInput.id = 'force_send';
        hiddenInput.classList.add('force_send');
        // Append the hidden input to the form
        var form = document.querySelector('.compose_form');
        form.appendChild(hiddenInput);
    }
}

function smtpSettingsPageHandler() {
    $('#clear_chunks_button').on('click', function(e) {
        e.preventDefault();
        Hm_Ajax.request(
            [{'name': 'hm_ajax_hook', 'value': 'ajax_clear_attachment_chunks'}],
            function(res) {

            },
            []
        );
    });
}
$(function() {
    $('.delete_user_form').on('submit', function() {
        return hm_delete_prompt();
    });
});


var Hm_No_Op = {
    'interval': 300,
    'idle_time': 0,
    'reset': function() {
        Hm_No_Op.idle_time = 0;
        Hm_Timer.cancel(Hm_No_Op.update);
        Hm_Timer.add_job(Hm_No_Op.update, Hm_No_Op.interval, true);
    },
    'update': function() {
        Hm_No_Op.idle_time += Hm_No_Op.interval;
        Hm_Ajax.request(
            [{'name': 'hm_ajax_hook', 'value': 'ajax_no_op'},
            {'name': 'idle_time', 'value': Hm_No_Op.idle_time}],
            function() { },
            [],
            false
        );
        return false;
    }
};

$(function() {
    Hm_Timer.add_job(Hm_No_Op.update, Hm_No_Op.interval, true);
    $('*').on('click', function() { Hm_No_Op.reset(); });
});



$(function() {
    $('body').on('new_message', function() {
        var unread_page = false;
        if (getPageNameParam() == 'message_list' && getListPathParam() == 'unread') {
            unread_page = true;
        }
        if (!document.hidden && unread_page) {
            return;
        }
        var current = $('.total_unread_count').text()*1;
        var past = Hm_Message_List.past_total;
        if (current == past || current < past) {
            return;
        }
        var content;
        if (unread_page) {
            content = Hm_Message_List.just_inserted.reverse().join("\n\n");
        }
        else if (globals.Hm_Background_Unread) {
            content = globals.Hm_Background_Unread.just_inserted.reverse().join("\n\n");
        }
        if (!content) {
            return;
        }
        Push.create(hm_trans("New Message"), {
            body: content,
            timeout: 10000,
            icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAIBJREFUWIXtlkEOgCAMBEdfpj/Hl+FB8GBiWoqEg7sJt7YzTXoAlL9nAfJMgXUmXAJVYAeOCeyjsO9sQOI6ypEvFdZrRomY4FEiJtgqiIp45zY3fAWu9d0Devu6N4mCTYHw9TrBboFWES+4WcASaQWHBZ4iUXAGsv4DEpCABBTlBOkR5VdJRFCfAAAAAElFTkSuQmCC',
            onClick: function () { window.focus(); this.close(); }
        });
    });
});
function applyCalendarPageHandlers() {
    $('.event_delete').on("click", function() {
        if (hm_delete_prompt()) {
            $(this).parent().submit();
        }
    });
    $('.cal_title').on("click", function(e) {
        e.preventDefault();
        $('.event_details').hide();
        $('.event_details', $(this).parent()).show();
        $('.event_details').on("click", function() {
            $(this).hide();
        });
    });
}


var display_next_nux_step = function(res) {
    $('.nux_step_two').html(res.nux_service_step_two);
    $('.nux_step_one').hide();
    $('.nux_submit').on("click", nux_add_account);
    $('.reset_nux_form').on("click", function() {
        $('.nux_step_one').show();
        $('.nux_step_two').html('');
        document.getElementById('service_select').getElementsByTagName('option')[0].selected = 'selected';
        $('.nux_username').val('');
        $('.nux_extra_fields_container').remove();
        return false;
    });
};

var nux_add_account = function() {
    var nux_border = $('.nux_username').css('border');
    $('.nux_password').css('border', nux_border);
    var service = $('#nux_service').val();
    var name = $('.nux_name').val();
    var email = $('#nux_email').val();
    var pass = $('.nux_password').val();
    var extra_fields = [];
    $('input.nux_extra_fields').each(function () {
        extra_fields.push({ 'name': $(this).attr('id'), 'value': $(this).val() });
    });
    if (name.length && service.length && email.length && pass.length) {
        Hm_Ajax.request(
            [{'name': 'hm_ajax_hook', 'value': 'ajax_nux_add_service'},
            {'name': 'nux_service', 'value': service},
            {'name': 'nux_email', 'value': email},
            {'name': 'nux_name', 'value': name},
            {'name': 'nux_pass', 'value': pass}, ...extra_fields],
            display_final_nux_step,
            [],
            false
        );
    }
    else {
        if (!pass.length) {
            $('.nux_password').css('border', 'solid red 1px');
        }
    }
    return false;
};

var display_final_nux_step = function(res) {
    if (res.nux_account_added) {
        if (res.nux_server_id) {
            Hm_Ajax.request(
                [{'name': 'hm_ajax_hook', 'value': 'ajax_imap_accept_special_folders'},
                {'name': 'imap_server_id', value: res.nux_server_id},
                {'name': 'imap_service_name', value: res.nux_service_name}],
                function () {
                    Hm_Utils.redirect();
                }
            );
        } else {
            Hm_Utils.redirect();
        }
    }
};

var nux_service_select = function() {
    var nux_border = $('.nux_username').css('border');
    var el = document.getElementById('service_select');
    var service = el.options[el.selectedIndex].value;
    var email = $('.nux_username').val();
    var account = $('.nux_account_name').val();
    if (email.length && service.length) {
        Hm_Ajax.request(
            [{'name': 'hm_ajax_hook', 'value': 'ajax_nux_service_select'},
            {'name': 'nux_service', 'value': service},
            {'name': 'nux_account_name', 'value': account},
            {'name': 'nux_email', 'value': email}],
            display_next_nux_step,
            [],
            false
        );
    }
    else {
        if (!email.length) {
            $('.nux_username').css('border', 'solid 1px red');
        }
        else {
            $('.nux_username').css('border', nux_border);
        }
        if (!service.length) {
            $('#service_select').css('border', 'solid 1px red');
        }
        else {
            $('#service_select').css('border', nux_border);
        }
    }
};

var expand_server_settings = function() {
    var dsp;
    var i;
    var hash = window.location.hash;
    var sections = ['.feeds_section', '.quick_add_section', '.smtp_section', '.imap_section', '.server_config_section'];
    for (i=0;i<sections.length;i++) {
        dsp = Hm_Utils.get_from_local_storage(sections[i]);
        if (hash) {
            if (hash.replace('#', '.') != sections[i]) {
                dsp = 'none';
            }
            else {
                dsp = 'block';
            }
        }
        if (dsp === 'block' || dsp === 'none') {
            $(sections[i]).css('display', dsp);
            Hm_Utils.save_to_local_storage(sections[i], dsp);
        }
    }
};

var add_extra_fields = function(select, id, label, placeholder) {
    $(select).parent().after('<div class="form-floating mb-3 nux_extra_fields_container"><input type="text" id="nux_'+id+'" class="nux_extra_fields form-control" placeholder="'+placeholder+'"><label for="nux_'+id+'">'+label+'</label></div>');
};


$('.config_map_page').on("click", function() {
    var target = $(this).data('target');
    $('.'+target).toggle();
});
function applyProfilesPageHandler() {
    $('.add_profile').on("click", function() { $('.edit_profile').show(); });
}

var insert_sig = function(textarea, sig) {
    var tmpta = document.createElement('textarea');
    tmpta.innerHTML = sig;
    sig = tmpta.value;
    if (document.selection) {
        textarea.focus();
        var sel = document.selection.createRange();
        sel.text = sig;
    }
    else if (textarea.selectionStart || textarea.selectionStart == '0') {
        var startPos = textarea.selectionStart;
        var endPos = textarea.selectionEnd;
        textarea.value = textarea.value.substring(0, startPos) + sig + textarea.value.substring(endPos, textarea.value.length);
    }
    else {
        textarea.value += textarea;
    }
};

function profilesComposePageHandler() {
    $('.compose_sign').on("click", function() {
        var server_id = $('.compose_server').val();
        if (profile_signatures[server_id]) {
            var ta = $('.ke-content', $('iframe').contents());
            if (ta.length) {
                ta.html(ta.html() + profile_signatures[server_id].replace(/\n/g, '<br />'));
            }
            else {
                ta = $('#compose_body');
                insert_sig(ta[0], profile_signatures[server_id]);
            }
        } else {
            Hm_Notices.show(['ERR'+$('#sign_msg').val()]);
        }
    });
}
function applyFoldersPageHandlers() {
    $('#imap_server_folder').on("change", function() {
        $(this).parent().parent().submit();
    });
    $('.settings_subtitle').on("click", function() { return Hm_Utils.toggle_page_section($(this).data('target')); });
    
    bindFoldersEventHandlers();
}

function applyFoldersSubscriptionPageHandlers() {
    $('#imap_server_folder').on("change", function() {
        $(this).parent().parent().submit();
    });

    $('.subscribe_parent_folder').on("click", function() { return folder_page_folder_list('subscribe_parent_folder_select', 'subscribe_title', 'imap_parent_folder_link', '', 'subscribe_parent', true); });
    $('.subscribe_parent_folder').trigger('click');
    $($('.subscribe_parent_folder_select .imap_parent_folder_link')[0]).trigger('click');
    const selected_imap_server = $('#imap_server_folder').val();
    const email_folder_server = $(`.email_folders .imap_${selected_imap_server}_ .inner_list`);
    if (email_folder_server && $(email_folder_server[0]).children().length) {
        $($('.subscribe_parent_folder_select .imap_parent_folder_link')[0]).trigger('click');
    }

    bindFoldersEventHandlers();
}

var folder_page_folder_list = function(container, title, link_class, target, id_dest, subscription = false) {
    var id = $('#imap_server_folder').val();
    var folder_location = $('.'+container);
    $('li', folder_location).not('.'+title).remove();
    var folders = $('.folder_list .imap_'+id+'_').clone(false);
    folders.find('.manage_folders_li').remove();
    $('.imap_folder_link', folders).addClass(link_class).removeClass('imap_folder_link');
    folder_location.prepend(folders);
    folder_location.show();
    $('.'+link_class, folder_location).on("click", function() { return expand_folders_page_list($(this).data('target'), container, link_class, target, id_dest, subscription); });
    $('a', folder_location).not('.'+link_class).not('.close').off('click');
    $('a', folder_location).not('.'+link_class).not('.close').on("click", function() { set_folders_page_value($(this).data('id'), container, target, id_dest); return false; });
    $('.close', folder_location).on("click", function() {
        folders.remove();
        folder_location.hide();
        $('.'+target).html('');
        $('#'+id_dest).val('');
        return false;
    });
    return false;
};

var expand_folders_page_list = function(path, container, link_class, target, id_dest, lsub) {
    var detail = Hm_Utils.parse_folder_path(path, 'imap');
    var list = $('.imap_'+detail.server_id+'_'+Hm_Utils.clean_selector(detail.folder), $('.'+container));
    if ($('li', list).length === 0) {
        $('.expand_link', list).html('<i class="bi bi-file-minus-fill"></i>');
        if (detail) {
            Hm_Ajax.request(
                [{'name': 'hm_ajax_hook', 'value': 'ajax_imap_folder_expand'},
                {'name': 'imap_server_id', 'value': detail.server_id},
                {'name': 'folder', 'value': detail.folder},
                {'name': 'subscription_state', 'value': lsub}],
                function(res) {
                    if (res.imap_expanded_folder_path) {
                        var folder_location = $('.'+container);
                        var folders = $(res.imap_expanded_folder_formatted);
                        folders.find('.manage_folders_li').remove();
                        $('.'+Hm_Utils.clean_selector(res.imap_expanded_folder_path), folder_location).append(folders);
                        $('.imap_folder_link', folder_location).addClass(link_class).removeClass('imap_folder_link');
                        $('.'+link_class, folder_location).off('click');
                        $('.'+link_class, folder_location).on("click", function() { return expand_folders_page_list($(this).data('target'), container, link_class, target, id_dest, lsub); });
                        $('a', folder_location).not('.'+link_class).not('.close').off('click');
                        $('a', folder_location).not('.'+link_class).not('.close').on("click", function() { set_folders_page_value($(this).data('id'), container, target, id_dest); return false; });
                        if (lsub) {
                            $('.folder_subscription').on("change", function() { folder_subscribe(this.id, $('#'+this.id).is(':checked')); return false; });
                        }
                    }
                }
            );
        }
    }
    else {
        $('.expand_link', list).html('<i class="bi bi-plus-circle-fill"></i>');
        $('ul', list).remove();
    }
    return false;
};

var set_folders_page_value = function(id, container, target, id_dest) {
    var list = $('.'+container);
    var list_item = $('.'+Hm_Utils.clean_selector(id), list);
    var link = $('a', list_item).not('.expand_link').first().text();
    if (! link) {
        link = $('a', list_item).eq(1).text();
    }
    $('.'+target).html(link);
    $('#'+id_dest).val(id);
    list.hide();

};

var folder_page_delete = function() {
    var val = $('#delete_source').val();
    var id = $('#imap_server_folder').val();
    if (!id.length) {
        Hm_Notices.show({0: 'ERR'+$('#server_error').val()});
        return;
    }
    if (!val.length) {
        Hm_Notices.show({0: 'ERR'+$('#delete_folder_error').val()});
        return;
    }
    if (!confirm($('#delete_folder_confirm').val())) {
        return;
    }
    Hm_Ajax.request(
        [{'name': 'hm_ajax_hook', 'value': 'ajax_imap_folders_delete'},
        {'name': 'imap_server_id', value: id},
        {'name': 'folder', 'value': val}],
        function(res) {
            if (res.imap_folders_success) {
                $('#delete_source').val('');
                $('.selected_delete').html('');
                Hm_Folders.reload_folders(true);
            }
        }
    );
};

var folder_page_rename = function() {
    var val = $('#rename_value').val();
    var par = $('#rename_parent_source').val().trim();
    var folder = $('#rename_source').val().trim();
    var notices = {};
    var id = $('#imap_server_folder').val();
    if (!id.length) {
        Hm_Notices.show({0: 'ERR'+$('#server_error').val()});
        return;
    }
    if (!val.length) {
        notices[0] = 'ERR'+$('#rename_folder_error').val();
    }
    if (!folder.length) {
        notices[1] = 'ERR'+$('#folder_name_error').val();
    }
    if (!$.isEmptyObject(notices)) {
        Hm_Notices.show(notices);
        return;
    }
    Hm_Ajax.request(
        [{'name': 'hm_ajax_hook', 'value': 'ajax_imap_folders_rename'},
        {'name': 'imap_server_id', value: id},
        {'name': 'folder', 'value': folder},
        {'name': 'parent', 'value': par},
        {'name': 'new_folder', 'value': val}],
        function(res) {
            if (res.imap_folders_success) {
                $('#rename_value').val('');
                $('#rename_source').val('');
                $('#rename_parent_source').val('');
                $('.selected_rename').html('');
                $('.selected_rename_parent').html('');
                Hm_Folders.reload_folders(true);
            }
        }
    );
};


var folder_page_assign_trash = function() {
    var id = $('#imap_server_folder').val();
    var folder = $('#trash_source').val();
    if (id && folder) {
        assign_special_folder(id, folder, 'trash', function(res) {
            $('#trash_val').text(res.imap_special_name);
            $('.selected_trash').text('');
        });
    }
};

var folder_page_assign_sent = function() {
    var id = $('#imap_server_folder').val();
    var folder = $('#sent_source').val();
    if (id && folder) {
        assign_special_folder(id, folder, 'sent', function(res) {
            $('#sent_val').text(res.imap_special_name);
            $('.selected_sent').text('');
        });
    }
};

var folder_page_assign_archive = function() {
    var id = $('#imap_server_folder').val();
    var folder = $('#archive_source').val();
    if (id && folder) {
        assign_special_folder(id, folder, 'archive', function(res) {
            $('#archive_val').text(res.imap_special_name);
            $('.selected_archive').text('');
        });
    }
};

var folder_page_assign_draft = function() {
    var id = $('#imap_server_folder').val();
    var folder = $('#draft_source').val();
    if (id && folder) {
        assign_special_folder(id, folder, 'draft', function(res) {
            $('#draft_val').text(res.imap_special_name);
            $('.selected_draft').text('');
        });
    }
};

var folder_page_assign_junk = function() {
    var id = $('#imap_server_folder').val();
    var folder = $('#junk_source').val();
    if (id && folder) {
        assign_special_folder(id, folder, 'junk', function(res) {
            $('#junk_val').text(res.imap_special_name);
            $('.selected_junk').text('');
        });
    }
};

var clear_special_folder = function(type) {
    var id = $('#imap_server_folder').val();
    if (id) {
        Hm_Ajax.request(
            [{'name': 'hm_ajax_hook', 'value': 'ajax_imap_clear_special_folder'},
            {'name': 'imap_server_id', 'value': id},
            {'name': 'special_folder_type', 'value': type}],
            function(res) { $('#'+type+'_val').text($('#not_set_string').val()); }
        );
    }
};

var assign_special_folder = function(id, folder, type, callback) {
    Hm_Ajax.request(
        [{'name': 'hm_ajax_hook', 'value': 'ajax_imap_special_folder'},
        {'name': 'imap_server_id', 'value': id},
        {'name': 'special_folder_type', 'value': type},
        {'name': 'folder', 'value': folder}],
        callback
    );
};

var folder_subscribe = function(name, state) {
    Hm_Ajax.request(
        [{'name': 'hm_ajax_hook', 'value': 'ajax_imap_folder_subscription'},
        {'name': 'subscription_state', 'value': state},
        {'name': 'folder', 'value': name}],
        function(res) {
            var el = $('#'+name);
            if (!res.imap_folder_subscription) {
                el.prop('checked', !el.prop('checked'));
            } else {
                el.prev().toggleClass('folder-disabled');
                Hm_Folders.reload_folders(true);
            }
        }
    );
};

var folder_page_create = function() {
    var par = $('#create_parent').val();
    var folder = $('#create_value').val().trim();
    var id = $('#imap_server_folder').val();
    if (!id.length) {
        Hm_Notices.show({0: 'ERR'+$('#server_error').val()});
        return;
    }
    if (!folder.length) {
        Hm_Notices.show({0: 'ERR'+$('#folder_name_error').val()});
        return;
    }
    Hm_Ajax.request(
        [{'name': 'hm_ajax_hook', 'value': 'ajax_imap_folders_create'},
        {'name': 'imap_server_id', value: id},
        {'name': 'folder', 'value': folder},
        {'name': 'parent', 'value': par}],
        function(res) {
            if (res.imap_folders_success) {
                $('#create_value').val('');
                $('#create_parent').val('');
                $('.selected_parent').html('');
                Hm_Folders.reload_folders(true);
            }
        }
    );

};

function bindFoldersEventHandlers() {
    $('.select_parent_folder').on("click", function() { return folder_page_folder_list('parent_folder_select', 'parent_title', 'imap_parent_folder_link', 'selected_parent', 'create_parent'); });
    $('.select_rename_folder').on("click", function() { return folder_page_folder_list('rename_folder_select', 'rename_title', 'imap_rename_folder_link', 'selected_rename', 'rename_source'); });
    $('.select_delete_folder').on("click", function() { return folder_page_folder_list('delete_folder_select', 'delete_title', 'imap_delete_folder_link', 'selected_delete', 'delete_source'); });
    $('.select_trash_folder').on("click", function() { return folder_page_folder_list('trash_folder_select', 'trash_title', 'imap_trash_folder_link', 'selected_trash', 'trash_source'); });
    $('.select_sent_folder').on("click", function() { return folder_page_folder_list('sent_folder_select', 'sent_title', 'imap_sent_folder_link', 'selected_sent', 'sent_source'); });
    $('.select_archive_folder').on("click", function() { return folder_page_folder_list('archive_folder_select', 'archive_title', 'imap_archive_folder_link', 'selected_archive', 'archive_source'); });
    $('.select_draft_folder').on("click", function() { return folder_page_folder_list('draft_folder_select', 'draft_title', 'imap_draft_folder_link', 'selected_draft', 'draft_source'); });
    $('.select_junk_folder').on("click", function() { return folder_page_folder_list('junk_folder_select', 'junk_title', 'imap_junk_folder_link', 'selected_junk', 'junk_source'); });
    $('.select_rename_parent_folder').on("click", function() { return folder_page_folder_list('rename_parent_folder_select', 'rename_parent_title', 'imap_rename_parent_folder_link', 'selected_rename_parent', 'rename_parent_source'); });
    $('#create_folder').on("click", function() { folder_page_create(); return false; });
    $('#delete_folder').on("click", function() { folder_page_delete(); return false; });
    $('#rename_folder').on("click", function() { folder_page_rename(); return false; });

    $('#set_trash_folder').on("click", function() { folder_page_assign_trash(); return false; });
    $('#set_sent_folder').on("click", function() { folder_page_assign_sent(); return false; });
    $('#set_archive_folder').on("click", function() { folder_page_assign_archive(); return false; });
    $('#set_draft_folder').on("click", function() { folder_page_assign_draft(); return false; });
    $('#set_junk_folder').on("click", function() { folder_page_assign_junk(); return false; });

    $('#clear_trash_folder').on("click", function() { clear_special_folder('trash'); return false; });
    $('#clear_sent_folder').on("click", function() { clear_special_folder('sent'); return false; });
    $('#clear_archive_folder').on("click", function() { clear_special_folder('archive'); return false; });
    $('#clear_draft_folder').on("click", function() { clear_special_folder("draft"); return false; });
}
function applyBlockListPageHandlers() {
    blockListPageHandlers();
}

function applySieveFiltersPageHandler() {
    sieveFiltersPageHandler();
}/**
 * Possible Sieve fields
 * @type {{Message: [{name: string, options: string[], type: string, selected: boolean},{name: string, options: string[], type: string},{name: string, options: string[], type: string}], Header: [{name: string, options: string[], type: string},{name: string, options: string[], type: string},{name: string, options: string[], type: string},{name: string, options: string[], type: string}]}}
 */
var hm_sieve_condition_fields = function() {
    return {
        'Message': [
            {
                name: 'subject',
                description: 'Subject',
                type: 'string',
                selected: true,
                options: ['Contains', 'Matches', 'Regex']
            },
            {
                name: 'body',
                description: 'Body',
                type: 'string',
                options: ['Contains', 'Matches', 'Regex']
            },
            {
                name: 'size',
                description: 'Size (KB)',
                type: 'int',
                options: ['Over', 'Under']
            }
        ],
        'Header': [
            {
                name: 'to',
                description: 'To',
                type: 'string',
                extra_option: false,
                options: ['Contains', 'Matches', 'Regex']
            },
            {
                name: 'from',
                description: 'From',
                type: 'string',
                extra_option: false,
                options: ['Contains', 'Matches', 'Regex']
            },
            {
                name: 'cc',
                description: 'CC',
                type: 'string',
                extra_option: false,
                options: ['Contains', 'Matches', 'Regex']
            },
            {
                name: 'to_or_cc',
                description: 'To or CC',
                type: 'string',
                extra_option: false,
                options: ['Contains', 'Matches', 'Regex']
            },
            {
                name: 'bcc',
                description: 'BCC',
                type: 'string',
                extra_option: false,
                options: ['Contains', 'Matches', 'Regex']
            },
            {
                name: 'custom',
                description: 'Custom',
                type: 'string',
                extra_option: true,
                extra_option_description: 'Field Name',
                options: ['Contains', 'Matches', 'Regex']
            }
        ]
    };
};

/**
 * Possible Sieve actions
 * @type {[{name: string, description: string, placeholder: string, type: string, selected: boolean},{name: string, description: string, placeholder: string, type: string},{name: string, description: string, type: string},{name: string, description: string, type: string},{name: string, description: string, placeholder: string, type: string}]}
 */
var hm_sieve_possible_actions = function() {
    return [
        {
            name: 'keep',
            description: 'Deliver (Keep)',
            type: 'none',
            extra_field: false
        },
        {
            name: 'copy',
            description: 'Copy email to mailbox',
            placeholder: 'Mailbox Name (Folder)',
            type: 'mailbox',
            extra_field: false
        },
        {
            name: 'move',
            description: 'Move email to mailbox',
            placeholder: 'Mailbox Name (Folder)',
            type: 'mailbox',
            extra_field: false
        },
        {
            name: 'flag',
            description: 'Flag',
            placeholder: 'Example: SEEN',
            type: 'select',
            values: ['Seen', 'Answered', 'Flagged', 'Deleted', 'Draft', 'Recent'],
            extra_field: false
        },
        {
            name: 'addflag',
            description: 'Add Flag',
            placeholder: 'Example: SEEN',
            type: 'select',
            values: ['Seen', 'Answered', 'Flagged', 'Deleted', 'Draft', 'Recent'],
            extra_field: false
        },
        {
            name: 'removeflag',
            description: 'Remove Flag',
            placeholder: 'Example: SEEN',
            type: 'select',
            values: ['Seen', 'Answered', 'Flagged', 'Deleted', 'Draft', 'Recent'],
            extra_field: false
        },
        {
            name: 'redirect',
            description: 'Redirect',
            placeholder: 'mail@example.org',
            type: 'string',
            extra_field: false
        },
        {
            name: 'forward',
            description: 'Forward',
            placeholder: 'mail@example.org',
            type: 'string',
            extra_field: false
        },
        {
            name: 'reject',
            description: 'Reject',
            placeholder: 'Reject message',
            type: 'string',
            extra_field: false
        },
        {
            name: 'discard',
            description: 'Discard',
            type: 'none',
            extra_field: false
        },
        {
            name: 'autoreply',
            placeholder: 'Reply Message',
            description: 'Reply Message',
            type: 'text',
            extra_field: true,
            extra_field_type: 'string',
            extra_field_placeholder: 'Subject'
        }
    ];
};

function blockListPageHandlers() {
    $(document).on('change', '.select_default_behaviour', function(e) {
        if ($(this).val() != 'Reject') {
            $(this).closest('.filter_subblock')
                .find('.select_default_reject_message')
                .remove();
        } else {
            $('<input type="text" class="select_default_reject_message form-control" placeholder="'+hm_trans('Reject message')+'" />').insertAfter($(this));
        }
    });
    $(document).on('click', '.submit_default_behavior', function(e) {
        let parent = $(this).closest('.filter_subblock');
        let elem = parent.find('.select_default_behaviour');
        let submit = $(this);

        const payload = [
            {'name': 'hm_ajax_hook', 'value': 'ajax_sieve_block_change_behaviour'},
            {'name': 'selected_behaviour', 'value': elem.val()},
            {'name': 'imap_server_id', 'value': elem.attr('imap_account')}
        ];
        if (elem.val() == 'Reject') {
            const reject = parent.find('.select_default_reject_message');
            payload.push({'name': 'reject_message', 'value': reject.val()});
        }

        submit.attr('disabled', 1);
        Hm_Ajax.request(
            payload,
            function(res) {
                submit.removeAttr('disabled');
            }
        );
    });

    $(document).on('click', '.unblock_button', function(e) {
       e.preventDefault();
       if (!confirm(hm_trans('Do you want to unblock sender?'))) {
            return;
        }
       let sender = $(this).parent().parent().children().html();
       let elem = $(this);
        Hm_Ajax.request(
            [   {'name': 'hm_ajax_hook', 'value': 'ajax_sieve_unblock_sender'},
                {'name': 'imap_server_id', 'value': $(this).attr('mailbox_id')},
                {'name': 'sender', 'value': sender}
            ],
            function(res) {
                elem.parent().parent().remove();
                var num_filters = $("#filter_num_" + elem.attr('mailbox_id')).html();
                num_filters = parseInt(num_filters) - 1;
                $("#filter_num_" + elem.attr('mailbox_id')).html(num_filters);
            }
        );
    });

    $(document).on('click', '.edit_blocked_behavior', function(e) {
        e.preventDefault();
        let parent = $(this).closest('tr');
        let elem = parent.find('.block_action');
        let sender = $(this).closest('tr').children().first().html();
        let scope = sender.startsWith('*@') ? 'domain': 'sender';

        Hm_Ajax.request(
            [
                {'name': 'hm_ajax_hook', 'value': 'ajax_sieve_block_unblock'},
                {'name': 'imap_server_id', 'value': $(this).attr('mailbox_id')},
                {'name': 'block_action', 'value': elem.val()},
                {'name': 'scope', 'value': scope},
                {'name': 'sender', 'value': sender},
                {'name': 'reject_message', 'value': $('#reject_message_textarea').val() ?? ''},
                {'name': 'change_behavior', 'value': true}
            ],
            function(res) {
                if (/^(Sender|Domain) Behavior Changed$/.test(res.router_user_msgs[0])) {
                    window.location = window.location;
                }
            }
        );
    });

    $(document).on('click', '.toggle-behavior-dropdown', function(e) {
        e.preventDefault();
        var default_val = $(this).data('action');
        $('#block_sender_form').trigger('reset');
        $('#reject_message').remove();
        $('#block_action').val(default_val).trigger('change');
        $('#edit_blocked_behavior').attr('data-mailbox-id', $(this).attr('mailbox_id'));
        if (default_val == 'reject_with_message') {
            $('#reject_message_textarea').val($(this).data('reject-message'));
        }
    });

    $(document).on('click', '.block_domain_button', function(e) {
        e.preventDefault();
        let sender = $(this).parent().parent().children().html();
        let elem = $(this);
        Hm_Ajax.request(
            [   {'name': 'hm_ajax_hook', 'value': 'ajax_sieve_block_domain'},
                {'name': 'imap_server_id', 'value': $(this).attr('data-mailbox_id')},
                {'name': 'sender', 'value': sender}
            ],
            function(res) {
                window.location = window.location;
            }
        );
    });

    $(document).on('click', '.edit_email_behavior_submit', function(e) {
        e.preventDefault();
        let sender = $(this).parent().parent().children().html();
        let elem = $(this);
        Hm_Ajax.request(
            [   {'name': 'hm_ajax_hook', 'value': 'ajax_sieve_block_domain'},
                {'name': 'imap_server_id', 'value': $(this).attr('mailbox_id')},
                {'name': 'sender', 'value': sender}
            ],
            function(res) {
                window.location = window.location;
            }
        );
    });

    $('.sievefilters_accounts_title').on("click", function () {
        $(this).parent().find('.sievefilters_accounts').toggleClass('d-none');
    });
}

if (hm_page_name() === 'sieve_filters') {
    /**************************************************************************************
     *                             BOOTSTRAP SCRIPT MODAL
     **************************************************************************************/
    var edit_script_modal = new Hm_Modal({
        size: 'xl',
        modalId: 'myEditScript'
    });

    // set content
    edit_script_modal.setContent(document.querySelector('#edit_script_modal').innerHTML);
    $('#edit_script_modal').remove();

    // add a button
    edit_script_modal.addFooterBtn('Save', 'btn-primary', async function () {
        save_script(current_account);
    });


    /**************************************************************************************
     *                             BOOTSTRAP SIEVE FILTER MODAL
     **************************************************************************************/
    var edit_filter_modal = new Hm_Modal({
        size: 'xl',
        modalId: 'myEditFilterModal',
    });

    // set content
    edit_filter_modal.setContent(document.querySelector('#edit_filter_modal').innerHTML);
    $('#edit_filter_modal').remove();

    // add a button
    edit_filter_modal.addFooterBtn('Save', 'btn-primary ms-auto', async function () {
        let result = save_filter(current_account);
        if (result) {
            edit_filter_modal.hide();
        }
    });

    // add another button
    edit_filter_modal.addFooterBtn('Convert to code', 'btn-warning', async function () {
        let result = save_filter(current_account, true);
        if (result) {
            edit_filter_modal.hide();
        }
    });


    function ordinal_number(n)
    {
        let ord = 'th';

        if (n % 10 == 1 && n % 100 != 11) {
            ord = 'st';
        } else if (n % 10 == 2 && n % 100 != 12) {
            ord = 'nd';
        } else if (n % 10 == 3 && n % 100 != 13) {
            ord = 'rd';
        }

        return n + ord;
    }

    /**************************************************************************************
     *                                    FUNCTIONS
     **************************************************************************************/
    function save_filter(imap_account, gen_script = false) {
        let validation_failed = false
        let conditions_parsed = []
        let actions_parsed = []
        let conditions = $('select[name^=sieve_selected_conditions_field]').map(function(idx, elem) {
            return $(elem).val();
        }).get();

        let conditions_type = $('select[name^=sieve_selected_conditions_options]').map(function(idx, elem) {
            return $(elem).val();
        }).get();

        let conditions_value = $('input[name^=sieve_selected_option_value]').map(function(idx, elem) {
            return $(elem).val();
        }).get();

        let conditions_extra_value = $('input[name^=sieve_selected_extra_option_value]').map(function(idx, elem) {
            return $(elem).val();
        }).get();

        let idx = 0;
        if (conditions.length === 0) {
            Hm_Utils.add_sys_message(hm_trans('You must provide at least one condition'), 'danger');
            return false;
        }

        Hm_Utils.clear_sys_messages();
        conditions.forEach(function (elem, key) {
            if (conditions_value[idx] === "" && conditions_value[idx] !== 'none') {
                let order = ordinal_number(key + 1);
                let previous_messages = $('.sys_messages').html();
                previous_messages += previous_messages ? '<br>': '';
                Hm_Utils.add_sys_message('The ' + order + ' condition (' + elem + ') must be provided', 'danger');
                validation_failed = true;
            }
             conditions_parsed.push(
                 {
                     'condition': elem,
                     'type': conditions_type[idx],
                     'extra_option': conditions[idx].extra_option,
                     'extra_option_value': conditions_extra_value[idx],
                     'value': conditions_value[idx]
                 }
             )
            idx = idx + 1;
        });

        let actions_type = $('select[name^=sieve_selected_actions]').map(function(idx, elem) {
            return $(elem).val();
        }).get();
        let actions_value = $('[name^=sieve_selected_action_value]').map(function(idx, elem) {
            return $(elem).val();
        }).get();
        let actions_field_type = $('[name^=sieve_selected_action_value]').map(function(idx, elem) {
            return $(elem).attr('type');
        }).get();
        let actions_extra_value = $('input[name^=sieve_selected_extra_action_value]').map(function(idx, elem) {
            return $(elem).val();
        }).get();

        if (actions_type.length === 0) {
            Hm_Utils.add_sys_message(hm_trans('You must provide at least one action'), 'danger');
            return false;
        }

        idx = 0;
        actions_type.forEach(function (elem, key) {
            console.log(actions_field_type[idx])
            if (actions_value[idx] === "" && actions_field_type[idx] !== 'hidden') {
                let order = ordinal_number(key + 1);
                let previous_messages = $('.sys_messages').html();
                previous_messages += previous_messages ? '<br>': '';
                Hm_Utils.add_sys_message('The ' + order + ' action (' + elem + ') must be provided', 'danger');
                validation_failed = true;
            }
            actions_parsed.push(
                {
                    'action': elem,
                    'value': actions_value[idx],
                    'extra_option': actions_type[idx].extra_option,
                    'extra_option_value': actions_extra_value[idx],
                }
            )
            idx = idx + 1;
        });

        if ($('#stop_filtering').is(':checked')) {
            actions_parsed.push(
                {
                    'action': "stop",
                    'value': "",
                    'extra_option': "",
                    'extra_option_value': "",
                }
            )
        }
        if ($('.modal_sieve_filter_name').val() == "") {
            Hm_Utils.add_sys_message(hm_trans('Filter name is required'), 'danger');
            return false;
        }

        if (validation_failed) {
            return false;
        }

        Hm_Ajax.request(
            [   {'name': 'hm_ajax_hook', 'value': 'ajax_sieve_save_filter'},
                {'name': 'imap_account', 'value': imap_account},
                {'name': 'sieve_filter_name', 'value': $('.modal_sieve_filter_name').val()},
                {'name': 'sieve_filter_priority', 'value': $('.modal_sieve_filter_priority').val()},
                {'name': 'is_editing_filter', 'value': is_editing_filter},
                {'name': 'current_editing_filter_name', 'value': current_editing_filter_name},
                {'name': 'conditions_json', 'value': JSON.stringify(conditions_parsed)},
                {'name': 'actions_json', 'value': JSON.stringify(actions_parsed)},
                {'name': 'filter_test_type', 'value': $('.modal_sieve_filter_test').val()},
                {'name': 'gen_script', 'value': gen_script},
            ],
            function(res) {
                if (Object.keys(res.script_details).length === 0) {
                    window.location = window.location;
                } else {
                    edit_script_modal.open();
                    $('.modal_sieve_script_textarea').val(res.script_details.gen_script);
                    $('.modal_sieve_script_name').val(res.script_details.filter_name);
                    $('.modal_sieve_script_priority').val(res.script_details.filter_priority);
                }
            }
        );

        return true;
    }

    function save_script(imap_account) {
        if ($('.modal_sieve_script_name').val() === "") {
            Hm_Utils.add_sys_message(hm_trans('You must provide a name for your script'), 'danger');
            return false;
        }
        if ($('.modal_sieve_script_textarea').val() === "") {
            Hm_Utils.add_sys_message(hm_trans('Empty script'), 'danger');
            return false;
        }
        Hm_Ajax.request(
            [   {'name': 'hm_ajax_hook', 'value': 'ajax_sieve_save_script'},
                {'name': 'imap_account', 'value': imap_account},
                {'name': 'sieve_script_name', 'value': $('.modal_sieve_script_name').val()},
                {'name': 'sieve_script_priority', 'value': $('.modal_sieve_script_priority').val()},
                {'name': 'is_editing_script', 'value': is_editing_script},
                {'name': 'current_editing_script', 'value': current_editing_script_name},
                {'name': 'script', 'value': $('.modal_sieve_script_textarea').val()}],
            function(res) {
                window.location = window.location;
            }
        );
    }

    /**************************************************************************************
     *                                      MODAL EVENTS
     **************************************************************************************/
    $('.sievefilters_accounts_title').on("click", function () {
        $(this).parent().find('.sievefilters_accounts').toggleClass('d-none');
    });
    $('.add_filter').on('click', function () {
        edit_filter_modal.setTitle('Add Filter');
        $('.modal_sieve_filter_priority').val('');
        $('.modal_sieve_filter_test').val('ALLOF');
        $('#stop_filtering').prop('checked', false);
        current_account = $(this).attr('account');
        edit_filter_modal.open();

        // Reset the form fields when opening the modal
        $(".modal_sieve_filter_name").val('');
        $(".modal_sieve_script_priority").val('');
        $(".sieve_list_conditions_modal").empty();
        $(".filter_actions_modal_table").empty();
    });
    $('.add_script').on('click', function () {
        edit_script_modal.setTitle('Add Script');
        $('.modal_sieve_script_textarea').val('');
        $('.modal_sieve_script_name').val('');
        $('.modal_sieve_script_priority').val('');
        is_editing_script = false;
        current_editing_script_name = '';
        current_account = $(this).attr('account');
        edit_script_modal.open();
    });
    $('.edit_filter').on('click', function (e) {
        e.preventDefault();
        let script_name = $(this).parent().parent().children().next().html();
        edit_filter_modal.setTitle(script_name);
        edit_filter_modal.open();
    });

    /**
     * Delete action Button
     */
    $(document).on('click', '.delete_else_action_modal_button', function (e) {
        e.preventDefault();
        $(this).parent().parent().remove();
    });

    /**
     * Delete action Button
     */
    $(document).on('click', '.delete_action_modal_button', function (e) {
        e.preventDefault();
        $(this).parent().parent().remove();
    });

    /**
     * Delete Condition Button
     */
    $(document).on('click', '.delete_condition_modal_button', function (e) {
        e.preventDefault();
        $(this).parent().parent().remove();
    });

    function add_filter_condition() {
        let header_fields = '';
        let message_fields = '';

        hm_sieve_condition_fields().Message.forEach(function (value) {
            if (value.selected === true) {
                message_fields += '<option selected value="'+value.name+'">' + value.description + '</option>';
            } else {
                message_fields += '<option value="'+value.name+'">' + value.description + '</option>';
            }
        });
        hm_sieve_condition_fields().Header.forEach(function (value) {
            if (value.selected === true) {
                header_fields += '<option selected value="'+value.name+'">' + value.description + '</option>';
            } else {
                header_fields += '<option value="'+value.name+'">' + value.description + '</option>';
            }
        });
        let extra_options = '<td class="col-sm-3"><input type="hidden" class="condition_extra_value form-control form-control-sm" name="sieve_selected_extra_option_value[]" /></td>';
        $('.sieve_list_conditions_modal').append(
            '                            <tr>' +
            '                                <td class="col-sm-2">' +
            '                                    <select class="add_condition_sieve_filters form-control form-control-sm" name="sieve_selected_conditions_field[]">' +
            '                                        <optgroup label="Message">' +
            message_fields +
            '                                        </optgroup>' +
            '                                        <optgroup label="Header">' +
            header_fields +
            '                                        </optgroup>' +
            '                                    </select>' +
            '                                </td>' +
            extra_options +
            '                                <td class="col-sm-3">' +
            '                                    <select class="condition_options form-control form-control-sm" name="sieve_selected_conditions_options[]">' +
            '                                        <option value="Contains">' +
            '                                            Contains' +
            '                                        </option>' +
            '                                        <option value="!Contains">' +
            '                                            Not Contains' +
            '                                        </option>' +
            '                                        <option value="Matches">' +
            '                                            Matches' +
            '                                        </option>' +
            '                                        <option value="!Matches">' +
            '                                            Not Matches' +
            '                                        </option>' +
            '                                        <option value="Regex">' +
            '                                            Regex' +
            '                                        </option>' +
            '                                        <option value="!Regex">' +
            '                                            Not Regex' +
            '                                        </option>' +
            '                                    </select>' +
            '                                </td>' +
            '                                <td class="col-sm-3">' +
            '                                    <input type="text" name="sieve_selected_option_value[]" class="form-control form-control-sm" />' +
            '                                </td>' +
            '                                <td class="col-sm-1 text-end align-middle">' +
            '                                    <a href="#" class="delete_condition_modal_button btn btn-sm btn-secondary">Delete</a>' +
            '                                </td>' +
            '                            </tr>'
        );
    }

    /**
     * Add Condition Button
     */
    $(document).on('click', '.sieve_add_condition_modal_button', function () {
        add_filter_condition();
    });

    function add_filter_action(default_value = '') {
        let possible_actions_html = '';

        hm_sieve_possible_actions().forEach(function (value) {
            if (value.selected === true) {
                possible_actions_html += '<option selected value="'+value.name+'">' + value.description + '</option>';
                return;
            }
            possible_actions_html += '<option value="'+value.name+'">' + value.description + '</option>';
        });
        let extra_options = '<td class="col-sm-3"><input type="hidden" class="condition_extra_action_value form-control form-control-sm" name="sieve_selected_extra_action_value[]" /></td>';
        $('.filter_actions_modal_table').append(
            '<tr class="border" default_value="'+default_value+'">' +
            '   <td class="col-sm-3">' +
            '       <select class="sieve_actions_select form-control form-control-sm" name="sieve_selected_actions[]">' +
            '          ' + possible_actions_html +
            '       </select>' +
            '    </td>' +
            extra_options +
            '    <td class="col-sm-5">' +
            '    <input type="hidden" name="sieve_selected_action_value[]" value="">' +
            '    </input>' +
            '    <td class="col-sm-1 text-end align-middle">' +
            '           <a href="#" class="delete_action_modal_button btn btn-sm btn-secondary">Delete</a>' +
            '    </td>' +
            '</tr>'
        );
    }

    /**
     * Add Action Button
     */
    $(document).on('click', '.filter_modal_add_action_btn', function () {
        add_filter_action();
    });

    /**
     * Add Else Action Button
     */
    $(document).on('click', '.filter_modal_add_else_action_btn', function () {
        let possible_actions_html = '';

        hm_sieve_possible_actions().forEach(function (value) {
            if (value.selected === true) {
                possible_actions_html += '<option selected value="'+value.name+'">' + value.description + '</option>';
                return;
            }
            possible_actions_html += '<option value="'+value.name+'">' + value.description + '</option>';
        });

        $('.filter_else_actions_modal_table').append(
            '<tr class="border">' +
            '   <td class="col-sm-4">' +
            '       <select class="sieve_actions_select form-control form-control-sm">' +
            '          ' + possible_actions_html +
            '       </select>' +
            '    </td>' +
            '    <td>' +
            '    </td>' +
            '    <td class="col-sm-1 text-end align-middle">' +
            '           <a href="#" class="delete_else_action_modal_button">Delete</a>' +
            '    </td>' +
            '</tr>'
        );
    });


    /**
     * Action change
     */
    $(document).on('change', '.sieve_actions_select', function () {
        let tr_elem = $(this).parent().parent();
        console.log(tr_elem.attr('default_value'));
        let elem = $(this).parent().next().next();
        let elem_extra = $(this).parent().next().find('.condition_extra_action_value');
        let action_name = $(this).val();
        let selected_action;
        hm_sieve_possible_actions().forEach(function (action) {
           if (action_name === action.name) {
                selected_action = action;
           }
        });
        if (selected_action) {
            elem_extra.attr('type', 'hidden');
            if (selected_action.extra_field) {
                elem_extra.attr('type', 'text');
                elem_extra.attr('placeholder', selected_action.extra_field_placeholder)
            }
            if (selected_action.type === 'none') {
                elem.html('<input name="sieve_selected_action_value[]" class="form-control form-control-sm" type="hidden" value="" />');
            }
            if (selected_action.type === 'string') {
                elem.html('<input name="sieve_selected_action_value[]" class="form-control form-control-sm" placeholder="'+selected_action.placeholder+'" type="text" value="" />');
            }
            if (selected_action.type === 'int') {
                elem.html('<input name="sieve_selected_action_value[]" class="form-control form-control-sm" placeholder="'+selected_action.placeholder+'" type="number" />');
            }
            if (selected_action.type === 'number') {
                elem.html('<input name="sieve_selected_action_value[]" class="form-control form-control-sm" placeholder="'+selected_action.placeholder+'" type="number" />');
            }
            if (selected_action.type === 'text') {
                elem.html('<textarea name="sieve_selected_action_value[]" class="form-control form-control-sm" placeholder="'+selected_action.placeholder+'"></textarea>');
            }
            if (selected_action.type === 'select') {
                options = '';
                selected_action.values.forEach(function(val) {
                    if (tr_elem.attr('default_value') === val) {
                        options = options + '<option value="' + val + '" selected>'+ val +'</option>'
                    } else {
                        options = options + '<option value="' + val + '">'+ val +'</option>'
                    }
                });
                elem.html('<select name="sieve_selected_action_value[]" class="form-control form-control-sm">'+ options +'</select>');
            }
            if (selected_action.type === 'mailbox') {
                let mailboxes = null;
                tr_elem.children().eq(2).html(hm_spinner());
                Hm_Ajax.request(
                    [   {'name': 'hm_ajax_hook', 'value': 'ajax_sieve_get_mailboxes'},
                        {'name': 'imap_account', 'value': current_account} ],
                    function(res) {
                        mailboxes = JSON.parse(res.mailboxes);
                        options = '';
                        mailboxes.forEach(function(val) {
                            if (tr_elem.attr('default_value') === val) {
                                options = options + '<option value="' + val + '" selected>'+ val +'</option>'
                            } else {
                                options = options + '<option value="' + val + '">'+ val +'</option>'
                            }
                        });
                        elem.html('<select name="sieve_selected_action_value[]" class="form-control form-control-sm">'+ options +'</select>');
                        $("[name^=sieve_selected_action_value]").last().val(elem.parent().attr('default_value'));
                    }
                );
            }
        }
    })

    /**
     * Condition type change
     */
    $(document).on('change', '.add_condition_sieve_filters', function () {
        let condition_name = $(this).val();
        let elem = $(this).parent().next().next().find('.condition_options');
        let elem_extra = $(this).parent().next().find('.condition_extra_value');
        let elem_type = $(this).parent().next().next().next();
        let condition;
        let options_html = '';
        let input_type_html = '';
        hm_sieve_condition_fields().Message.forEach(function (cond) {
            if (condition_name === cond.name) {
                condition = cond;
            }
        });
        hm_sieve_condition_fields().Header.forEach(function (cond) {
            if (condition_name === cond.name) {
                condition = cond;
            }
        });
        if (condition) {
            if (condition.extra_option === true) {
                elem_extra.attr('type', 'text');
                elem_extra.attr('placeholder', condition.extra_option_description);
            } else {
                elem_extra.attr('type', 'hidden');
            }
            condition.options.forEach(function (option) {
                options_html += '<option value="'+option+'">'+option+'</option>';
                options_html += '<option value="!'+option+'">Not '+option+'</option>';
            });
            elem.html(options_html);

            if (condition.type === 'string') {
                elem_type.html('<input name="sieve_selected_option_value[]" type="text" class="form-control form-control-sm" />')
            }
            if (condition.type === 'int') {
                elem_type.html('<input name="sieve_selected_option_value[]" type="number" class="form-control form-control-sm" />')
            }
            if (condition.type === 'none') {
                elem_type.html('<input name="sieve_selected_option_value[]" type="hidden" value="none" />')
            }
        }
    });

    /**
     * Delete filter event
     */
    $(document).on('click', '.delete_filter', function (e) {
        e.preventDefault();
        if (!confirm('Do you want to delete filter?')) {
            return;
        }
        let obj = $(this);
        Hm_Ajax.request(
            [   {'name': 'hm_ajax_hook', 'value': 'ajax_sieve_delete_filter'},
                {'name': 'imap_account', 'value': $(this).attr('imap_account')},
                {'name': 'sieve_script_name', 'value': $(this).attr('script_name')}],
            function(res) {
                if (res.script_removed == '1') {
                    obj.parent().parent().remove();
                }
            }
        );
    });


    /**
     * Delete script event
     */
    $(document).on('click', '.delete_script', function (e) {
        e.preventDefault();
        if (!confirm('Do you want to delete script?')) {
            return;
        }
        let obj = $(this);
        Hm_Ajax.request(
            [   {'name': 'hm_ajax_hook', 'value': 'ajax_sieve_delete_script'},
                {'name': 'imap_account', 'value': $(this).attr('imap_account')},
                {'name': 'sieve_script_name', 'value': $(this).attr('script_name')}],
            function(res) {
                if (res.script_removed == '1') {
                    obj.parent().parent().remove();
                }
            }
        );
    });

    /**
     * Edit script event
     */
    $(document).on('click', '.edit_script', function (e) {
        e.preventDefault();
        let obj = $(this);
        edit_script_modal.setTitle('Edit Script');
        current_account = $(this).attr('account');
        is_editing_script = true;
        current_editing_script_name = $(this).attr('script_name');
        current_account = $(this).attr('imap_account');
        $('.modal_sieve_script_name').val($(this).attr('script_name_parsed'));
        $('.modal_sieve_script_priority').val($(this).attr('priority'));
        Hm_Ajax.request(
            [   {'name': 'hm_ajax_hook', 'value': 'ajax_sieve_edit_script'},
                {'name': 'imap_account', 'value': $(this).attr('imap_account')},
                {'name': 'sieve_script_name', 'value': $(this).attr('script_name')}],
            function(res) {
                $('.modal_sieve_script_textarea').html(res.script);
                edit_script_modal.open();
            }
        );
    });

    /**
     * Edit filter event
     */
    $(document).on('click', '.edit_filter', function (e) {
        e.preventDefault();
        let obj = $(this);
        current_account = $(this).attr('account');
        is_editing_filter = true;
        current_editing_filter_name = $(this).attr('script_name');
        current_account = $(this).attr('imap_account');
        // $('#stop_filtering').prop('checked', false);
        $('.modal_sieve_filter_name').val($(this).attr('script_name_parsed'));
        $('.modal_sieve_filter_priority').val($(this).attr('priority'));
        $('.sieve_list_conditions_modal').html('');
        $('.filter_actions_modal_table').html('');
        Hm_Ajax.request(
            [   {'name': 'hm_ajax_hook', 'value': 'ajax_sieve_edit_filter'},
                {'name': 'imap_account', 'value': $(this).attr('imap_account')},
                {'name': 'sieve_script_name', 'value': $(this).attr('script_name')}],
            function(res) {
                conditions = JSON.parse(JSON.parse(res.conditions));
                actions = JSON.parse(JSON.parse(res.actions));
                test_type = res.test_type;
                $(".modal_sieve_filter_test").val(test_type);
                conditions.forEach(function (condition) {
                    add_filter_condition();
                    $(".add_condition_sieve_filters").last().val(condition.condition);
                    $(".add_condition_sieve_filters").last().trigger('change');
                    $(".condition_options").last().val(condition.type);
                    $("[name^=sieve_selected_extra_option_value]").last().val(condition.extra_option_value);
                    if ($("[name^=sieve_selected_option_value]").last().is('input')) {
                        $("[name^=sieve_selected_option_value]").last().val(condition.value);
                    }
                });

                actions.forEach(function (action) {
                    if (action.action === "stop") {
                        $('#stop_filtering').prop('checked', true);
                    } else {
                        add_filter_action(action.value);
                        $(".sieve_actions_select").last().val(action.action);
                        $(".sieve_actions_select").last().trigger('change');
                        $("[name^=sieve_selected_extra_action_value]").last().val(action.extra_option_value);
                        if ($("[name^=sieve_selected_action_value]").last().is('input')) {
                            $("[name^=sieve_selected_action_value]").last().val(action.value);
                        } else if ($("[name^=sieve_selected_action_value]").last().is('textarea')) {
                            $("[name^=sieve_selected_action_value]").last().text(action.value);
                        }
                    }
                });
            }
        );
    });
}

function sieveFiltersPageHandler() {
    let is_editing_script = false;
    let current_editing_script_name = '';
    let is_editing_filter = false;
    let current_editing_filter_name = '';
    let current_account;
    /**************************************************************************************
         *                             BOOTSTRAP SCRIPT MODAL
         **************************************************************************************/
    var edit_script_modal = new Hm_Modal({
        size: 'xl',
        modalId: 'myEditScript'
    });

    // set content
    edit_script_modal.setContent(document.querySelector('#edit_script_modal').innerHTML);
    $('#edit_script_modal').remove();

    // add a button
    edit_script_modal.addFooterBtn('Save', 'btn-primary', async function () {
        save_script(current_account);
    });


    /**************************************************************************************
     *                             BOOTSTRAP SIEVE FILTER MODAL
     **************************************************************************************/
    var edit_filter_modal = new Hm_Modal({
        size: 'xl',
        modalId: 'myEditFilterModal',
    });

    // set content
    edit_filter_modal.setContent(document.querySelector('#edit_filter_modal').innerHTML);
    $('#edit_filter_modal').remove();

    // add a button
    edit_filter_modal.addFooterBtn('Save', 'btn-primary ms-auto', async function () {
        let result = save_filter(current_account);
        if (result) {
            edit_filter_modal.hide();
        }
    });

    // add another button
    edit_filter_modal.addFooterBtn('Convert to code', 'btn-warning', async function () {
        let result = save_filter(current_account, true);
        if (result) {
            edit_filter_modal.hide();
        }
    });


    function ordinal_number(n)
    {
        let ord = 'th';

        if (n % 10 == 1 && n % 100 != 11) {
            ord = 'st';
        } else if (n % 10 == 2 && n % 100 != 12) {
            ord = 'nd';
        } else if (n % 10 == 3 && n % 100 != 13) {
            ord = 'rd';
        }

        return n + ord;
    }

    /**************************************************************************************
     *                                    FUNCTIONS
     **************************************************************************************/
    function save_filter(imap_account, gen_script = false) {
        let validation_failed = false
        let conditions_parsed = []
        let actions_parsed = []
        let conditions = $('select[name^=sieve_selected_conditions_field]').map(function(idx, elem) {
            return $(elem).val();
        }).get();

        let conditions_type = $('select[name^=sieve_selected_conditions_options]').map(function(idx, elem) {
            return $(elem).val();
        }).get();

        let conditions_value = $('input[name^=sieve_selected_option_value]').map(function(idx, elem) {
            return $(elem).val();
        }).get();

        let conditions_extra_value = $('input[name^=sieve_selected_extra_option_value]').map(function(idx, elem) {
            return $(elem).val();
        }).get();

        let idx = 0;
        if (conditions.length === 0) {
            Hm_Utils.add_sys_message(hm_trans('You must provide at least one condition'), 'danger');
            return false;
        }

        Hm_Utils.clear_sys_messages();
        conditions.forEach(function (elem, key) {
            if (conditions_value[idx] === "" && conditions_value[idx] !== 'none') {
                let order = ordinal_number(key + 1);
                let previous_messages = $('.sys_messages').html();
                previous_messages += previous_messages ? '<br>': '';
                Hm_Utils.add_sys_message('The ' + order + ' condition (' + elem + ') must be provided', 'danger');
                validation_failed = true;
            }
             conditions_parsed.push(
                 {
                     'condition': elem,
                     'type': conditions_type[idx],
                     'extra_option': conditions[idx].extra_option,
                     'extra_option_value': conditions_extra_value[idx],
                     'value': conditions_value[idx]
                 }
             )
            idx = idx + 1;
        });

        let actions_type = $('select[name^=sieve_selected_actions]').map(function(idx, elem) {
            return $(elem).val();
        }).get();
        let actions_value = $('[name^=sieve_selected_action_value]').map(function(idx, elem) {
            return $(elem).val();
        }).get();
        let actions_field_type = $('[name^=sieve_selected_action_value]').map(function(idx, elem) {
            return $(elem).attr('type');
        }).get();
        let actions_extra_value = $('input[name^=sieve_selected_extra_action_value]').map(function(idx, elem) {
            return $(elem).val();
        }).get();

        if (actions_type.length === 0) {
            Hm_Utils.add_sys_message(hm_trans('You must provide at least one action'), 'danger');
            return false;
        }

        idx = 0;
        actions_type.forEach(function (elem, key) {
            console.log(actions_field_type[idx])
            if (actions_value[idx] === "" && actions_field_type[idx] !== 'hidden') {
                let order = ordinal_number(key + 1);
                let previous_messages = $('.sys_messages').html();
                previous_messages += previous_messages ? '<br>': '';
                Hm_Utils.add_sys_message('The ' + order + ' action (' + elem + ') must be provided', 'danger');
                validation_failed = true;
            }
            actions_parsed.push(
                {
                    'action': elem,
                    'value': actions_value[idx],
                    'extra_option': actions_type[idx].extra_option,
                    'extra_option_value': actions_extra_value[idx],
                }
            )
            idx = idx + 1;
        });

        if ($('#stop_filtering').is(':checked')) {
            actions_parsed.push(
                {
                    'action': "stop",
                    'value': "",
                    'extra_option': "",
                    'extra_option_value': "",
                }
            )
        }
        if ($('.modal_sieve_filter_name').val() == "") {
            Hm_Utils.add_sys_message(hm_trans('Filter name is required'), 'danger');
            return false;
        }

        if (validation_failed) {
            return false;
        }

        Hm_Ajax.request(
            [   {'name': 'hm_ajax_hook', 'value': 'ajax_sieve_save_filter'},
                {'name': 'imap_account', 'value': imap_account},
                {'name': 'sieve_filter_name', 'value': $('.modal_sieve_filter_name').val()},
                {'name': 'sieve_filter_priority', 'value': $('.modal_sieve_filter_priority').val()},
                {'name': 'is_editing_filter', 'value': is_editing_filter},
                {'name': 'current_editing_filter_name', 'value': current_editing_filter_name},
                {'name': 'conditions_json', 'value': JSON.stringify(conditions_parsed)},
                {'name': 'actions_json', 'value': JSON.stringify(actions_parsed)},
                {'name': 'filter_test_type', 'value': $('.modal_sieve_filter_test').val()},
                {'name': 'gen_script', 'value': gen_script},
            ],
            function(res) {
                if (Object.keys(res.script_details).length === 0) {
                    window.location = window.location;
                } else {
                    edit_script_modal.open();
                    $('.modal_sieve_script_textarea').val(res.script_details.gen_script);
                    $('.modal_sieve_script_name').val(res.script_details.filter_name);
                    $('.modal_sieve_script_priority').val(res.script_details.filter_priority);
                }
            }
        );

        return true;
    }

    function save_script(imap_account) {
        if ($('.modal_sieve_script_name').val() === "") {
            Hm_Utils.add_sys_message(hm_trans('You must provide a name for your script'), 'danger');
            return false;
        }
        if ($('.modal_sieve_script_textarea').val() === "") {
            Hm_Utils.add_sys_message(hm_trans('Empty script'), 'danger');
            return false;
        }
        Hm_Ajax.request(
            [   {'name': 'hm_ajax_hook', 'value': 'ajax_sieve_save_script'},
                {'name': 'imap_account', 'value': imap_account},
                {'name': 'sieve_script_name', 'value': $('.modal_sieve_script_name').val()},
                {'name': 'sieve_script_priority', 'value': $('.modal_sieve_script_priority').val()},
                {'name': 'is_editing_script', 'value': is_editing_script},
                {'name': 'current_editing_script', 'value': current_editing_script_name},
                {'name': 'script', 'value': $('.modal_sieve_script_textarea').val()}],
            function(res) {
                window.location = window.location;
            }
        );
    }

    /**************************************************************************************
     *                                      MODAL EVENTS
     **************************************************************************************/
    $('.sievefilters_accounts_title').on("click", function () {
        $(this).parent().find('.sievefilters_accounts').toggleClass('d-none');
    });
    $('.add_filter').on('click', function () {
        edit_filter_modal.setTitle('Add Filter');
        $('.modal_sieve_filter_priority').val('');
        $('.modal_sieve_filter_test').val('ALLOF');
        $('#stop_filtering').prop('checked', false);
        current_account = $(this).attr('account');
        edit_filter_modal.open();

        // Reset the form fields when opening the modal
        $(".modal_sieve_filter_name").val('');
        $(".modal_sieve_script_priority").val('');
        $(".sieve_list_conditions_modal").empty();
        $(".filter_actions_modal_table").empty();
    });
    $('.add_script').on('click', function () {
        edit_script_modal.setTitle('Add Script');
        $('.modal_sieve_script_textarea').val('');
        $('.modal_sieve_script_name').val('');
        $('.modal_sieve_script_priority').val('');
        is_editing_script = false;
        current_editing_script_name = '';
        current_account = $(this).attr('account');
        edit_script_modal.open();
    });
    $('.edit_filter').on('click', function (e) {
        e.preventDefault();
        let script_name = $(this).parent().parent().children().next().html();
        edit_filter_modal.setTitle(script_name);
        edit_filter_modal.open();
    });

    /**
     * Delete action Button
     */
    $(document).on('click', '.delete_else_action_modal_button', function (e) {
        e.preventDefault();
        $(this).parent().parent().remove();
    });

    /**
     * Delete action Button
     */
    $(document).on('click', '.delete_action_modal_button', function (e) {
        e.preventDefault();
        $(this).parent().parent().remove();
    });

    /**
     * Delete Condition Button
     */
    $(document).on('click', '.delete_condition_modal_button', function (e) {
        e.preventDefault();
        $(this).parent().parent().remove();
    });

    function add_filter_condition() {
        let header_fields = '';
        let message_fields = '';

        hm_sieve_condition_fields().Message.forEach(function (value) {
            if (value.selected === true) {
                message_fields += '<option selected value="'+value.name+'">' + value.description + '</option>';
            } else {
                message_fields += '<option value="'+value.name+'">' + value.description + '</option>';
            }
        });
        hm_sieve_condition_fields().Header.forEach(function (value) {
            if (value.selected === true) {
                header_fields += '<option selected value="'+value.name+'">' + value.description + '</option>';
            } else {
                header_fields += '<option value="'+value.name+'">' + value.description + '</option>';
            }
        });
        let extra_options = '<td class="col-sm-3"><input type="hidden" class="condition_extra_value form-control form-control-sm" name="sieve_selected_extra_option_value[]" /></td>';
        $('.sieve_list_conditions_modal').append(
            '                            <tr>' +
            '                                <td class="col-sm-2">' +
            '                                    <select class="add_condition_sieve_filters form-control form-control-sm" name="sieve_selected_conditions_field[]">' +
            '                                        <optgroup label="Message">' +
            message_fields +
            '                                        </optgroup>' +
            '                                        <optgroup label="Header">' +
            header_fields +
            '                                        </optgroup>' +
            '                                    </select>' +
            '                                </td>' +
            extra_options +
            '                                <td class="col-sm-3">' +
            '                                    <select class="condition_options form-control form-control-sm" name="sieve_selected_conditions_options[]">' +
            '                                        <option value="Contains">' +
            '                                            Contains' +
            '                                        </option>' +
            '                                        <option value="!Contains">' +
            '                                            Not Contains' +
            '                                        </option>' +
            '                                        <option value="Matches">' +
            '                                            Matches' +
            '                                        </option>' +
            '                                        <option value="!Matches">' +
            '                                            Not Matches' +
            '                                        </option>' +
            '                                        <option value="Regex">' +
            '                                            Regex' +
            '                                        </option>' +
            '                                        <option value="!Regex">' +
            '                                            Not Regex' +
            '                                        </option>' +
            '                                    </select>' +
            '                                </td>' +
            '                                <td class="col-sm-3">' +
            '                                    <input type="text" name="sieve_selected_option_value[]" class="form-control form-control-sm" />' +
            '                                </td>' +
            '                                <td class="col-sm-1 text-end align-middle">' +
            '                                    <a href="#" class="delete_condition_modal_button btn btn-sm btn-secondary">Delete</a>' +
            '                                </td>' +
            '                            </tr>'
        );
    }

    /**
     * Add Condition Button
     */
    $(document).on('click', '.sieve_add_condition_modal_button', function () {
        add_filter_condition();
    });

    function add_filter_action(default_value = '') {
        let possible_actions_html = '';

        hm_sieve_possible_actions().forEach(function (value) {
            if (value.selected === true) {
                possible_actions_html += '<option selected value="'+value.name+'">' + value.description + '</option>';
                return;
            }
            possible_actions_html += '<option value="'+value.name+'">' + value.description + '</option>';
        });
        let extra_options = '<td class="col-sm-3"><input type="hidden" class="condition_extra_action_value form-control form-control-sm" name="sieve_selected_extra_action_value[]" /></td>';
        $('.filter_actions_modal_table').append(
            '<tr class="border" default_value="'+default_value+'">' +
            '   <td class="col-sm-3">' +
            '       <select class="sieve_actions_select form-control form-control-sm" name="sieve_selected_actions[]">' +
            '          ' + possible_actions_html +
            '       </select>' +
            '    </td>' +
            extra_options +
            '    <td class="col-sm-5">' +
            '    <input type="hidden" name="sieve_selected_action_value[]" value="">' +
            '    </input>' +
            '    <td class="col-sm-1 text-end align-middle">' +
            '           <a href="#" class="delete_action_modal_button btn btn-sm btn-secondary">Delete</a>' +
            '    </td>' +
            '</tr>'
        );
    }

    /**
     * Add Action Button
     */
    $(document).on('click', '.filter_modal_add_action_btn', function () {
        add_filter_action();
    });

    /**
     * Add Else Action Button
     */
    $(document).on('click', '.filter_modal_add_else_action_btn', function () {
        let possible_actions_html = '';

        hm_sieve_possible_actions().forEach(function (value) {
            if (value.selected === true) {
                possible_actions_html += '<option selected value="'+value.name+'">' + value.description + '</option>';
                return;
            }
            possible_actions_html += '<option value="'+value.name+'">' + value.description + '</option>';
        });

        $('.filter_else_actions_modal_table').append(
            '<tr class="border">' +
            '   <td class="col-sm-4">' +
            '       <select class="sieve_actions_select form-control form-control-sm">' +
            '          ' + possible_actions_html +
            '       </select>' +
            '    </td>' +
            '    <td>' +
            '    </td>' +
            '    <td class="col-sm-1 text-end align-middle">' +
            '           <a href="#" class="delete_else_action_modal_button">Delete</a>' +
            '    </td>' +
            '</tr>'
        );
    });


    /**
     * Action change
     */
    $(document).on('change', '.sieve_actions_select', function () {
        let tr_elem = $(this).parent().parent();
        console.log(tr_elem.attr('default_value'));
        let elem = $(this).parent().next().next();
        let elem_extra = $(this).parent().next().find('.condition_extra_action_value');
        let action_name = $(this).val();
        let selected_action;
        hm_sieve_possible_actions().forEach(function (action) {
           if (action_name === action.name) {
                selected_action = action;
           }
        });
        if (selected_action) {
            elem_extra.attr('type', 'hidden');
            if (selected_action.extra_field) {
                elem_extra.attr('type', 'text');
                elem_extra.attr('placeholder', selected_action.extra_field_placeholder)
            }
            if (selected_action.type === 'none') {
                elem.html('<input name="sieve_selected_action_value[]" class="form-control form-control-sm" type="hidden" value="" />');
            }
            if (selected_action.type === 'string') {
                elem.html('<input name="sieve_selected_action_value[]" class="form-control form-control-sm" placeholder="'+selected_action.placeholder+'" type="text" value="" />');
            }
            if (selected_action.type === 'int') {
                elem.html('<input name="sieve_selected_action_value[]" class="form-control form-control-sm" placeholder="'+selected_action.placeholder+'" type="number" />');
            }
            if (selected_action.type === 'number') {
                elem.html('<input name="sieve_selected_action_value[]" class="form-control form-control-sm" placeholder="'+selected_action.placeholder+'" type="number" />');
            }
            if (selected_action.type === 'text') {
                elem.html('<textarea name="sieve_selected_action_value[]" class="form-control form-control-sm" placeholder="'+selected_action.placeholder+'"></textarea>');
            }
            if (selected_action.type === 'select') {
                options = '';
                selected_action.values.forEach(function(val) {
                    if (tr_elem.attr('default_value') === val) {
                        options = options + '<option value="' + val + '" selected>'+ val +'</option>'
                    } else {
                        options = options + '<option value="' + val + '">'+ val +'</option>'
                    }
                });
                elem.html('<select name="sieve_selected_action_value[]" class="form-control form-control-sm">'+ options +'</select>');
            }
            if (selected_action.type === 'mailbox') {
                let mailboxes = null;
                tr_elem.children().eq(2).html(hm_spinner());
                Hm_Ajax.request(
                    [   {'name': 'hm_ajax_hook', 'value': 'ajax_sieve_get_mailboxes'},
                        {'name': 'imap_account', 'value': current_account} ],
                    function(res) {
                        mailboxes = JSON.parse(res.mailboxes);
                        options = '';
                        mailboxes.forEach(function(val) {
                            if (tr_elem.attr('default_value') === val) {
                                options = options + '<option value="' + val + '" selected>'+ val +'</option>'
                            } else {
                                options = options + '<option value="' + val + '">'+ val +'</option>'
                            }
                        });
                        elem.html('<select name="sieve_selected_action_value[]" class="form-control form-control-sm">'+ options +'</select>');
                        $("[name^=sieve_selected_action_value]").last().val(elem.parent().attr('default_value'));
                    }
                );
            }
        }
    })

    /**
     * Condition type change
     */
    $(document).on('change', '.add_condition_sieve_filters', function () {
        let condition_name = $(this).val();
        let elem = $(this).parent().next().next().find('.condition_options');
        let elem_extra = $(this).parent().next().find('.condition_extra_value');
        let elem_type = $(this).parent().next().next().next();
        let condition;
        let options_html = '';
        let input_type_html = '';
        hm_sieve_condition_fields().Message.forEach(function (cond) {
            if (condition_name === cond.name) {
                condition = cond;
            }
        });
        hm_sieve_condition_fields().Header.forEach(function (cond) {
            if (condition_name === cond.name) {
                condition = cond;
            }
        });
        if (condition) {
            if (condition.extra_option === true) {
                elem_extra.attr('type', 'text');
                elem_extra.attr('placeholder', condition.extra_option_description);
            } else {
                elem_extra.attr('type', 'hidden');
            }
            condition.options.forEach(function (option) {
                options_html += '<option value="'+option+'">'+option+'</option>';
                options_html += '<option value="!'+option+'">Not '+option+'</option>';
            });
            elem.html(options_html);

            if (condition.type === 'string') {
                elem_type.html('<input name="sieve_selected_option_value[]" type="text" class="form-control form-control-sm" />')
            }
            if (condition.type === 'int') {
                elem_type.html('<input name="sieve_selected_option_value[]" type="number" class="form-control form-control-sm" />')
            }
            if (condition.type === 'none') {
                elem_type.html('<input name="sieve_selected_option_value[]" type="hidden" value="none" />')
            }
        }
    });

    /**
     * Delete filter event
     */
    $(document).on('click', '.delete_filter', function (e) {
        e.preventDefault();
        if (!confirm('Do you want to delete filter?')) {
            return;
        }
        let obj = $(this);
        Hm_Ajax.request(
            [   {'name': 'hm_ajax_hook', 'value': 'ajax_sieve_delete_filter'},
                {'name': 'imap_account', 'value': $(this).attr('imap_account')},
                {'name': 'sieve_script_name', 'value': $(this).attr('script_name')}],
            function(res) {
                if (res.script_removed == '1') {
                    obj.parent().parent().remove();
                }
            }
        );
    });

    /**
     * Toggle Filter
     */
    $('.toggle_filter').on('change', function () {
        const checkbox = $(this);
        Hm_Ajax.request(
            [   {'name': 'hm_ajax_hook', 'value': 'ajax_sieve_toggle_script_state'},
                {'name': 'imap_account', 'value': checkbox.attr('imap_account')},
                {'name': 'script_state', 'value': checkbox.prop('checked')},
                {'name': 'sieve_script_name', 'value': checkbox.attr('script_name')}],
            function(res) {
                if (res.success) {
                    checkbox.prop('checked', !checkbox.prop('checked'));
                }
            }
        );
    });

    /**
     * Delete script event
     */
    $(document).on('click', '.delete_script', function (e) {
        e.preventDefault();
        if (!confirm('Do you want to delete script?')) {
            return;
        }
        let obj = $(this);
        Hm_Ajax.request(
            [   {'name': 'hm_ajax_hook', 'value': 'ajax_sieve_delete_script'},
                {'name': 'imap_account', 'value': $(this).attr('imap_account')},
                {'name': 'sieve_script_name', 'value': $(this).attr('script_name')}],
            function(res) {
                if (res.script_removed == '1') {
                    obj.parent().parent().remove();
                }
            }
        );
    });

    /**
     * Edit script event
     */
    $(document).on('click', '.edit_script', function (e) {
        e.preventDefault();
        let obj = $(this);
        edit_script_modal.setTitle('Edit Script');
        current_account = $(this).attr('account');
        is_editing_script = true;
        current_editing_script_name = $(this).attr('script_name');
        current_account = $(this).attr('imap_account');
        $('.modal_sieve_script_name').val($(this).attr('script_name_parsed'));
        $('.modal_sieve_script_priority').val($(this).attr('priority'));
        Hm_Ajax.request(
            [   {'name': 'hm_ajax_hook', 'value': 'ajax_sieve_edit_script'},
                {'name': 'imap_account', 'value': $(this).attr('imap_account')},
                {'name': 'sieve_script_name', 'value': $(this).attr('script_name')}],
            function(res) {
                $('.modal_sieve_script_textarea').html(res.script);
                edit_script_modal.open();
            }
        );
    });

    /**
     * Edit filter event
     */
    $(document).on('click', '.edit_filter', function (e) {
        e.preventDefault();
        let obj = $(this);
        current_account = $(this).attr('account');
        is_editing_filter = true;
        current_editing_filter_name = $(this).attr('script_name');
        current_account = $(this).attr('imap_account');
        // $('#stop_filtering').prop('checked', false);
        $('.modal_sieve_filter_name').val($(this).attr('script_name_parsed'));
        $('.modal_sieve_filter_priority').val($(this).attr('priority'));
        $('.sieve_list_conditions_modal').html('');
        $('.filter_actions_modal_table').html('');
        Hm_Ajax.request(
            [   {'name': 'hm_ajax_hook', 'value': 'ajax_sieve_edit_filter'},
                {'name': 'imap_account', 'value': $(this).attr('imap_account')},
                {'name': 'sieve_script_name', 'value': $(this).attr('script_name')}],
            function(res) {
                conditions = JSON.parse(JSON.parse(res.conditions));
                actions = JSON.parse(JSON.parse(res.actions));
                test_type = res.test_type;
                $(".modal_sieve_filter_test").val(test_type);
                conditions.forEach(function (condition) {
                    add_filter_condition();
                    $(".add_condition_sieve_filters").last().val(condition.condition);
                    $(".add_condition_sieve_filters").last().trigger('change');
                    $(".condition_options").last().val(condition.type);
                    $("[name^=sieve_selected_extra_option_value]").last().val(condition.extra_option_value);
                    if ($("[name^=sieve_selected_option_value]").last().is('input')) {
                        $("[name^=sieve_selected_option_value]").last().val(condition.value);
                    }
                });

                actions.forEach(function (action) {
                    if (action.action === "stop") {
                        $('#stop_filtering').prop('checked', true);
                    } else {
                        add_filter_action(action.value);
                        $(".sieve_actions_select").last().val(action.action);
                        $(".sieve_actions_select").last().trigger('change');
                        $("[name^=sieve_selected_extra_action_value]").last().val(action.extra_option_value);
                        if ($("[name^=sieve_selected_action_value]").last().is('input')) {
                            $("[name^=sieve_selected_action_value]").last().val(action.value);
                        } else if ($("[name^=sieve_selected_action_value]").last().is('textarea')) {
                            $("[name^=sieve_selected_action_value]").last().text(action.value);
                        }
                    }
                });
            }
        );
    });
}

$(function () {
    $(document).on('change', '#block_action', function(e) {
        if ($(this).val() == 'reject_with_message') {
            $('<div id="reject_message"><label>'+hm_trans('Message')+'</label><textarea id="reject_message_textarea"></textarea></div>').insertAfter($(this));
        } else {
            $('#reject_message').remove();
        }
    });
});
