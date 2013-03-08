/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-printshiv-mq-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-a_download-audio_audiodata_api-audio_webaudio_api-battery_api-battery_level-blob_constructor-canvas_todataurl_type-contenteditable-contextmenu-cookies-cors-css_backgroundrepeat-css_backgroundsizecover-css_boxsizing-css_calc-css_cubicbezierrange-css_displayrunin-css_displaytable-css_filters-css_hyphens-css_lastchild-css_mask-css_mediaqueries-css_overflow_scrolling-css_pointerevents-css_remunit-dataview_api-dom_classlist-dom_createElement_attrs-dom_dataset-dom_microdata-elem_datalist-elem_details-elem_output-elem_progress_meter-elem_ruby-elem_time-elem_track-emoji-es5_strictmode-event_deviceorientation_motion-exif_orientation-file_api-forms_fileinput-file_filesystem-forms_placeholder-forms_speechinput-forms_validation-fullscreen_api-gamepad-getusermedia-ie8compat-img_apng-img_webp-json-lists_reversed-mathml-network_connection-network_eventsource-network_xhr2-notification-performance-quota_management_api-requestanimationframe-script_async-script_defer-style_scoped-svg_filters-unicode-url_data_uri-userdata-vibration-web_intents-webgl_extensions-websockets_binary-window_framed-workers_blobworkers-workers_dataworkers-workers_sharedworkers-load
 */
window.Modernizr=function(e,t,n){function r(e){g.cssText=e}function i(e,t){return r(E.join(e+";")+(t||""))}function s(e,t){return typeof e===t}function o(e,t){return!!~(""+e).indexOf(t)}function u(e,t){for(var r in e){var i=e[r];if(!o(i,"-")&&g[i]!==n)return t=="pfx"?i:!0}return!1}function a(e,t,r){for(var i in e){var o=t[e[i]];if(o!==n)return r===!1?e[i]:s(o,"function")?o.bind(r||t):o}return!1}function f(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),i=(e+" "+x.join(r+" ")+r).split(" ");return s(t,"string")||s(t,"undefined")?u(i,t):(i=(e+" "+T.join(r+" ")+r).split(" "),a(i,t,n))}function l(){h.input=function(n){for(var r=0,i=n.length;r<i;r++)L[n[r]]=n[r]in y;return L.list&&(L.list=!!t.createElement("datalist")&&!!e.HTMLDataListElement),L}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),h.inputtypes=function(e){for(var r=0,i,s,o,u=e.length;r<u;r++)y.setAttribute("type",s=e[r]),i=y.type!=="text",i&&(y.value=b,y.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(s)&&y.style.WebkitAppearance!==n?(d.appendChild(y),o=t.defaultView,i=o.getComputedStyle&&o.getComputedStyle(y,null).WebkitAppearance!=="textfield"&&y.offsetHeight!==0,d.removeChild(y)):/^(search|tel)$/.test(s)||(/^(url|email)$/.test(s)?i=y.checkValidity&&y.checkValidity()===!1:i=y.value!=b)),k[e[r]]=!!i;return k}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var c="2.6.2",h={},p=!0,d=t.documentElement,v="modernizr",m=t.createElement(v),g=m.style,y=t.createElement("input"),b=":)",w={}.toString,E=" -webkit- -moz- -o- -ms- ".split(" "),S="Webkit Moz O ms",x=S.split(" "),T=S.toLowerCase().split(" "),N={svg:"http://www.w3.org/2000/svg"},C={},k={},L={},A=[],O=A.slice,M,_=function(e,n,r,i){var s,o,u,a,f=t.createElement("div"),l=t.body,c=l||t.createElement("body");if(parseInt(r,10))while(r--)u=t.createElement("div"),u.id=i?i[r]:v+(r+1),f.appendChild(u);return s=["&#173;",'<style id="s',v,'">',e,"</style>"].join(""),f.id=v,(l?f:c).innerHTML+=s,c.appendChild(f),l||(c.style.background="",c.style.overflow="hidden",a=d.style.overflow,d.style.overflow="hidden",d.appendChild(c)),o=n(f,e),l?f.parentNode.removeChild(f):(c.parentNode.removeChild(c),d.style.overflow=a),!!o},D=function(t){var n=e.matchMedia||e.msMatchMedia;if(n)return n(t).matches;var r;return _("@media "+t+" { #"+v+" { position: absolute; } }",function(t){r=(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle)["position"]=="absolute"}),r},P=function(){function e(e,i){i=i||t.createElement(r[e]||"div"),e="on"+e;var o=e in i;return o||(i.setAttribute||(i=t.createElement("div")),i.setAttribute&&i.removeAttribute&&(i.setAttribute(e,""),o=s(i[e],"function"),s(i[e],"undefined")||(i[e]=n),i.removeAttribute(e))),i=null,o}var r={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return e}(),H={}.hasOwnProperty,B;!s(H,"undefined")&&!s(H.call,"undefined")?B=function(e,t){return H.call(e,t)}:B=function(e,t){return t in e&&s(e.constructor.prototype[t],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if(typeof t!="function")throw new TypeError;var n=O.call(arguments,1),r=function(){if(this instanceof r){var i=function(){};i.prototype=t.prototype;var s=new i,o=t.apply(s,n.concat(O.call(arguments)));return Object(o)===o?o:s}return t.apply(e,n.concat(O.call(arguments)))};return r}),C.flexbox=function(){return f("flexWrap")},C.canvas=function(){var e=t.createElement("canvas");return!!e.getContext&&!!e.getContext("2d")},C.canvastext=function(){return!!h.canvas&&!!s(t.createElement("canvas").getContext("2d").fillText,"function")},C.webgl=function(){return!!e.WebGLRenderingContext},C.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:_(["@media (",E.join("touch-enabled),("),v,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=e.offsetTop===9}),n},C.geolocation=function(){return"geolocation"in navigator},C.postmessage=function(){return!!e.postMessage},C.websqldatabase=function(){return!!e.openDatabase},C.indexedDB=function(){return!!f("indexedDB",e)},C.hashchange=function(){return P("hashchange",e)&&(t.documentMode===n||t.documentMode>7)},C.history=function(){return!!e.history&&!!history.pushState},C.draganddrop=function(){var e=t.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e},C.websockets=function(){return"WebSocket"in e||"MozWebSocket"in e},C.rgba=function(){return r("background-color:rgba(150,255,150,.5)"),o(g.backgroundColor,"rgba")},C.hsla=function(){return r("background-color:hsla(120,40%,100%,.5)"),o(g.backgroundColor,"rgba")||o(g.backgroundColor,"hsla")},C.multiplebgs=function(){return r("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(g.background)},C.backgroundsize=function(){return f("backgroundSize")},C.borderimage=function(){return f("borderImage")},C.borderradius=function(){return f("borderRadius")},C.boxshadow=function(){return f("boxShadow")},C.textshadow=function(){return t.createElement("div").style.textShadow===""},C.opacity=function(){return i("opacity:.55"),/^0.55$/.test(g.opacity)},C.cssanimations=function(){return f("animationName")},C.csscolumns=function(){return f("columnCount")},C.cssgradients=function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";return r((e+"-webkit- ".split(" ").join(t+e)+E.join(n+e)).slice(0,-e.length)),o(g.backgroundImage,"gradient")},C.cssreflections=function(){return f("boxReflect")},C.csstransforms=function(){return!!f("transform")},C.csstransforms3d=function(){var e=!!f("perspective");return e&&"webkitPerspective"in d.style&&_("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t,n){e=t.offsetLeft===9&&t.offsetHeight===3}),e},C.csstransitions=function(){return f("transition")},C.fontface=function(){var e;return _('@font-face {font-family:"font";src:url("https://")}',function(n,r){var i=t.getElementById("smodernizr"),s=i.sheet||i.styleSheet,o=s?s.cssRules&&s.cssRules[0]?s.cssRules[0].cssText:s.cssText||"":"";e=/src/i.test(o)&&o.indexOf(r.split(" ")[0])===0}),e},C.generatedcontent=function(){var e;return _(["#",v,"{font:0/0 a}#",v,':after{content:"',b,'";visibility:hidden;font:3px/1 a}'].join(""),function(t){e=t.offsetHeight>=3}),e},C.video=function(){var e=t.createElement("video"),n=!1;try{if(n=!!e.canPlayType)n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(r){}return n},C.audio=function(){var e=t.createElement("audio"),n=!1;try{if(n=!!e.canPlayType)n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(r){}return n},C.localstorage=function(){try{return localStorage.setItem(v,v),localStorage.removeItem(v),!0}catch(e){return!1}},C.sessionstorage=function(){try{return sessionStorage.setItem(v,v),sessionStorage.removeItem(v),!0}catch(e){return!1}},C.webworkers=function(){return!!e.Worker},C.applicationcache=function(){return!!e.applicationCache},C.svg=function(){return!!t.createElementNS&&!!t.createElementNS(N.svg,"svg").createSVGRect},C.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==N.svg},C.smil=function(){return!!t.createElementNS&&/SVGAnimate/.test(w.call(t.createElementNS(N.svg,"animate")))},C.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(w.call(t.createElementNS(N.svg,"clipPath")))};for(var j in C)B(C,j)&&(M=j.toLowerCase(),h[M]=C[j](),A.push((h[M]?"":"no-")+M));return h.input||l(),h.addTest=function(e,t){if(typeof e=="object")for(var r in e)B(e,r)&&h.addTest(r,e[r]);else{e=e.toLowerCase();if(h[e]!==n)return h;t=typeof t=="function"?t():t,typeof p!="undefined"&&p&&(d.className+=" "+(t?"":"no-")+e),h[e]=t}return h},r(""),m=y=null,h._version=c,h._prefixes=E,h._domPrefixes=T,h._cssomPrefixes=x,h.mq=D,h.hasEvent=P,h.testProp=function(e){return u([e])},h.testAllProps=f,h.testStyles=_,h.prefixed=function(e,t,n){return t?f(e,t,n):f(e,"pfx")},d.className=d.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(p?" js "+A.join(" "):""),h}(this,this.document),function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=S.elements;return typeof e=="string"?e.split(" "):e}function i(e){var t=w[e[y]];return t||(t={},b++,e[y]=b,w[b]=t),t}function s(e,n,r){n||(n=t);if(E)return n.createElement(e);r||(r=i(n));var s;return r.cache[e]?s=r.cache[e].cloneNode():m.test(e)?s=(r.cache[e]=r.createElem(e)).cloneNode():s=r.createElem(e),s.canHaveChildren&&!v.test(e)?r.frag.appendChild(s):s}function o(e,n){e||(e=t);if(E)return e.createDocumentFragment();n=n||i(e);var s=n.frag.cloneNode(),o=0,u=r(),a=u.length;for(;o<a;o++)s.createElement(u[o]);return s}function u(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return S.shivMethods?s(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/\w+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(S,t.frag)}function a(e){e||(e=t);var r=i(e);return S.shivCSS&&!g&&!r.hasCSS&&(r.hasCSS=!!n(e,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),E||u(e,r),e}function f(e){var t,n=e.getElementsByTagName("*"),i=n.length,s=RegExp("^(?:"+r().join("|")+")$","i"),o=[];while(i--)t=n[i],s.test(t.nodeName)&&o.push(t.applyElement(l(t)));return o}function l(e){var t,n=e.attributes,r=n.length,i=e.ownerDocument.createElement(T+":"+e.nodeName);while(r--)t=n[r],t.specified&&i.setAttribute(t.nodeName,t.nodeValue);return i.style.cssText=e.style.cssText,i}function c(e){var t,n=e.split("{"),i=n.length,s=RegExp("(^|[\\s,>+~])("+r().join("|")+")(?=[[\\s,>+~#.:]|$)","gi"),o="$1"+T+"\\:$2";while(i--)t=n[i]=n[i].split("}"),t[t.length-1]=t[t.length-1].replace(s,o),n[i]=t.join("}");return n.join("{")}function h(e){var t=e.length;while(t--)e[t].removeNode()}function p(e){function t(){clearTimeout(o._removeSheetTimer),r&&r.removeNode(!0),r=null}var r,s,o=i(e),u=e.namespaces,a=e.parentWindow;return!N||e.printShived?e:(typeof u[T]=="undefined"&&u.add(T),a.attachEvent("onbeforeprint",function(){t();var i,o,u,a=e.styleSheets,l=[],h=a.length,p=Array(h);while(h--)p[h]=a[h];while(u=p.pop())if(!u.disabled&&x.test(u.media)){try{i=u.imports,o=i.length}catch(d){o=0}for(h=0;h<o;h++)p.push(i[h]);try{l.push(u.cssText)}catch(d){}}l=c(l.reverse().join("")),s=f(e),r=n(e,l)}),a.attachEvent("onafterprint",function(){h(s),clearTimeout(o._removeSheetTimer),o._removeSheetTimer=setTimeout(t,500)}),e.printShived=!0,e)}var d=e.html5||{},v=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,m=/^<|^(?:a|b|button|code|div|fieldset|form|h1|h2|h3|h4|h5|h6|i|iframe|img|input|label|li|link|ol|option|p|param|q|script|select|span|strong|style|table|tbody|td|textarea|tfoot|th|thead|tr|ul)$/i,g,y="_html5shiv",b=0,w={},E;(function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",g="hidden"in e,E=e.childNodes.length==1||function(){t.createElement("a");var e=t.createDocumentFragment();return typeof e.cloneNode=="undefined"||typeof e.createDocumentFragment=="undefined"||typeof e.createElement=="undefined"}()}catch(n){g=!0,E=!0}})();var S={elements:d.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:d.shivCSS!==!1,supportsUnknownElements:E,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:a,createElement:s,createDocumentFragment:o};e.html5=S,a(t);var x=/^$|\b(?:all|print)\b/,T="html5shiv",N=!E&&function(){var n=t.documentElement;return typeof t.namespaces!="undefined"&&typeof t.parentWindow!="undefined"&&typeof n.applyElement!="undefined"&&typeof n.removeNode!="undefined"&&typeof e.attachEvent!="undefined"}();S.type+=" print",S.shivPrint=p,p(t)}(this,document),function(e,t,n){function r(e){return"[object Function]"==d.call(e)}function i(e){return"string"==typeof e}function s(){}function o(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function u(){var e=v.shift();m=1,e?e.t?h(function(){("c"==e.t?k.injectCss:k.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),u()):m=0}function a(e,n,r,i,s,a,f){function l(t){if(!d&&o(c.readyState)&&(w.r=d=1,!m&&u(),c.onload=c.onreadystatechange=null,t)){"img"!=e&&h(function(){b.removeChild(c)},50);for(var r in T[n])T[n].hasOwnProperty(r)&&T[n][r].onload()}}var f=f||k.errorTimeout,c=t.createElement(e),d=0,g=0,w={t:r,s:n,e:s,a:a,x:f};1===T[n]&&(g=1,T[n]=[]),"object"==e?c.data=n:(c.src=n,c.type=e),c.width=c.height="0",c.onerror=c.onload=c.onreadystatechange=function(){l.call(this,g)},v.splice(i,0,w),"img"!=e&&(g||2===T[n]?(b.insertBefore(c,y?null:p),h(l,f)):T[n].push(c))}function f(e,t,n,r,s){return m=0,t=t||"j",i(e)?a("c"==t?E:w,e,t,this.i++,n,r,s):(v.splice(this.i++,0,e),1==v.length&&u()),this}function l(){var e=k;return e.loader={load:f,i:0},e}var c=t.documentElement,h=e.setTimeout,p=t.getElementsByTagName("script")[0],d={}.toString,v=[],m=0,g="MozAppearance"in c.style,y=g&&!!t.createRange().compareNode,b=y?c:p.parentNode,c=e.opera&&"[object Opera]"==d.call(e.opera),c=!!t.attachEvent&&!c,w=g?"object":c?"script":"img",E=c?"script":w,S=Array.isArray||function(e){return"[object Array]"==d.call(e)},x=[],T={},N={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}},C,k;k=function(e){function t(e){var e=e.split("!"),t=x.length,n=e.pop(),r=e.length,n={url:n,origUrl:n,prefixes:e},i,s,o;for(s=0;s<r;s++)o=e[s].split("="),(i=N[o.shift()])&&(n=i(n,o));for(s=0;s<t;s++)n=x[s](n);return n}function o(e,i,s,o,u){var a=t(e),f=a.autoCallback;a.url.split(".").pop().split("?").shift(),a.bypass||(i&&(i=r(i)?i:i[e]||i[o]||i[e.split("/").pop().split("?")[0]]),a.instead?a.instead(e,i,s,o,u):(T[a.url]?a.noexec=!0:T[a.url]=1,s.load(a.url,a.forceCSS||!a.forceJS&&"css"==a.url.split(".").pop().split("?").shift()?"c":n,a.noexec,a.attrs,a.timeout),(r(i)||r(f))&&s.load(function(){l(),i&&i(a.origUrl,u,o),f&&f(a.origUrl,u,o),T[a.url]=2})))}function u(e,t){function n(e,n){if(e){if(i(e))n||(f=function(){var e=[].slice.call(arguments);l.apply(this,e),c()}),o(e,f,t,0,u);else if(Object(e)===e)for(p in h=function(){var t=0,n;for(n in e)e.hasOwnProperty(n)&&t++;return t}(),e)e.hasOwnProperty(p)&&(!n&&!--h&&(r(f)?f=function(){var e=[].slice.call(arguments);l.apply(this,e),c()}:f[p]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),c()}}(l[p])),o(e[p],f,t,p,u))}else!n&&c()}var u=!!e.test,a=e.load||e.both,f=e.callback||s,l=f,c=e.complete||s,h,p;n(u?e.yep:e.nope,!!a),a&&n(a)}var a,f,c=this.yepnope.loader;if(i(e))o(e,0,c,0);else if(S(e))for(a=0;a<e.length;a++)f=e[a],i(f)?o(f,0,c,0):S(f)?k(f):Object(f)===f&&u(f,c);else Object(e)===e&&u(e,c)},k.addPrefix=function(e,t){N[e]=t},k.addFilter=function(e){x.push(e)},k.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",C=function(){t.removeEventListener("DOMContentLoaded",C,0),t.readyState="complete"},0)),e.yepnope=l(),e.yepnope.executeStack=u,e.yepnope.injectJs=function(e,n,r,i,a,f){var l=t.createElement("script"),c,d,i=i||k.errorTimeout;l.src=e;for(d in r)l.setAttribute(d,r[d]);n=f?u:n||s,l.onreadystatechange=l.onload=function(){!c&&o(l.readyState)&&(c=1,n(),l.onload=l.onreadystatechange=null)},h(function(){c||(c=1,n(1))},i),a?l.onload():p.parentNode.insertBefore(l,p)},e.yepnope.injectCss=function(e,n,r,i,o,a){var i=t.createElement("link"),f,n=a?u:n||s;i.href=e,i.rel="stylesheet",i.type="text/css";for(f in r)i.setAttribute(f,r[f]);o||(p.parentNode.insertBefore(i,p),h(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},Modernizr.addTest("adownload","download"in document.createElement("a")),Modernizr.addTest("audiodata",!!window.Audio),Modernizr.addTest("webaudio",!!window.webkitAudioContext||!!window.AudioContext),Modernizr.addTest("battery",!!Modernizr.prefixed("battery",navigator)),Modernizr.addTest("lowbattery",function(){var e=.2,t=Modernizr.prefixed("battery",navigator);return!!(t&&!t.charging&&t.level<=e)}),Modernizr.addTest("blobconstructor",function(){try{return!!(new Blob)}catch(e){return!1}}),function(){if(!Modernizr.canvas)return!1;var e=new Image,t=document.createElement("canvas"),n=t.getContext("2d");e.onload=function(){n.drawImage(e,0,0),Modernizr.addTest("todataurljpeg",function(){return t.toDataURL("image/jpeg").indexOf("data:image/jpeg")===0}),Modernizr.addTest("todataurlwebp",function(){return t.toDataURL("image/webp").indexOf("data:image/webp")===0})},e.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="}(),Modernizr.addTest("cookies",function(){if(navigator.cookieEnabled)return!0;document.cookie="cookietest=1";var e=document.cookie.indexOf("cookietest=")!=-1;return document.cookie="cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT",e}),Modernizr.addTest("contenteditable","contentEditable"in document.documentElement),Modernizr.addTest("contextmenu","contextMenu"in document.documentElement&&"HTMLMenuItemElement"in window),function(){function e(e){return window.getComputedStyle?getComputedStyle(e,null).getPropertyValue("background"):e.currentStyle.background}Modernizr.testStyles(" #modernizr { background-repeat: round; } ",function(t,n){Modernizr.addTest("bgrepeatround",e(t)=="round")}),Modernizr.testStyles(" #modernizr { background-repeat: space; } ",function(t,n){Modernizr.addTest("bgrepeatspace",e(t)=="space")})}(),Modernizr.addTest("cors",!!(window.XMLHttpRequest&&"withCredentials"in new XMLHttpRequest)),Modernizr.testStyles("#modernizr{background-size:cover}",function(e){var t=window.getComputedStyle?window.getComputedStyle(e,null):e.currentStyle;Modernizr.addTest("bgsizecover",t.backgroundSize=="cover")}),Modernizr.addTest("boxsizing",function(){return Modernizr.testAllProps("boxSizing")&&(document.documentMode===undefined||document.documentMode>7)}),Modernizr.addTest("csscalc",function(){var e="width:",t="calc(10px);",n=document.createElement("div");return n.style.cssText=e+Modernizr._prefixes.join(t+e),!!n.style.length}),Modernizr.addTest("cubicbezierrange",function(){var e=document.createElement("div");return e.style.cssText=Modernizr._prefixes.join("transition-timing-function:cubic-bezier(1,0,0,1.1); "),!!e.style.length}),Modernizr.addTest("display-table",function(){var e=window.document,t=e.documentElement,n=e.createElement("div"),r=e.createElement("div"),i=e.createElement("div"),s;return n.style.cssText="display: table",r.style.cssText=i.style.cssText="display: table-cell; padding: 10px",n.appendChild(r),n.appendChild(i),t.insertBefore(n,t.firstChild),s=r.offsetLeft<i.offsetLeft,t.removeChild(n),s}),Modernizr.testStyles(" #modernizr { display: run-in; } ",function(e,t){var n=window.getComputedStyle?getComputedStyle(e,null).getPropertyValue("display"):e.currentStyle.display;Modernizr.addTest("display-runin",n=="run-in")}),Modernizr.addTest("cssfilters",function(){var e=document.createElement("div");return e.style.cssText=Modernizr._prefixes.join("filter:blur(2px); "),!!e.style.length&&(document.documentMode===undefined||document.documentMode>9)}),function(){function e(){try{var e=document.createElement("div"),t=document.createElement("span"),n=e.style,r=0,i=0,s=!1,o=document.body.firstElementChild||document.body.firstChild;return e.appendChild(t),t.innerHTML="Bacon ipsum dolor sit amet jerky velit in culpa hamburger et. Laborum dolor proident, enim dolore duis commodo et strip steak. Salami anim et, veniam consectetur dolore qui tenderloin jowl velit sirloin. Et ad culpa, fatback cillum jowl ball tip ham hock nulla short ribs pariatur aute. Pig pancetta ham bresaola, ut boudin nostrud commodo flank esse cow tongue culpa. Pork belly bresaola enim pig, ea consectetur nisi. Fugiat officia turkey, ea cow jowl pariatur ullamco proident do laborum velit sausage. Magna biltong sint tri-tip commodo sed bacon, esse proident aliquip. Ullamco ham sint fugiat, velit in enim sed mollit nulla cow ut adipisicing nostrud consectetur. Proident dolore beef ribs, laborum nostrud meatball ea laboris rump cupidatat labore culpa. Shankle minim beef, velit sint cupidatat fugiat tenderloin pig et ball tip. Ut cow fatback salami, bacon ball tip et in shank strip steak bresaola. In ut pork belly sed mollit tri-tip magna culpa veniam, short ribs qui in andouille ham consequat. Dolore bacon t-bone, velit short ribs enim strip steak nulla. Voluptate labore ut, biltong swine irure jerky. Cupidatat excepteur aliquip salami dolore. Ball tip strip steak in pork dolor. Ad in esse biltong. Dolore tenderloin exercitation ad pork loin t-bone, dolore in chicken ball tip qui pig. Ut culpa tongue, sint ribeye dolore ex shank voluptate hamburger. Jowl et tempor, boudin pork chop labore ham hock drumstick consectetur tri-tip elit swine meatball chicken ground round. Proident shankle mollit dolore. Shoulder ut duis t-bone quis reprehenderit. Meatloaf dolore minim strip steak, laboris ea aute bacon beef ribs elit shank in veniam drumstick qui. Ex laboris meatball cow tongue pork belly. Ea ball tip reprehenderit pig, sed fatback boudin dolore flank aliquip laboris eu quis. Beef ribs duis beef, cow corned beef adipisicing commodo nisi deserunt exercitation. Cillum dolor t-bone spare ribs, ham hock est sirloin. Brisket irure meatloaf in, boudin pork belly sirloin ball tip. Sirloin sint irure nisi nostrud aliqua. Nostrud nulla aute, enim officia culpa ham hock. Aliqua reprehenderit dolore sunt nostrud sausage, ea boudin pork loin ut t-bone ham tempor. Tri-tip et pancetta drumstick laborum. Ham hock magna do nostrud in proident. Ex ground round fatback, venison non ribeye in.",document.body.insertBefore(e,o),n.cssText="position:absolute;top:0;left:0;width:5em;text-align:justify;text-justification:newspaper;",r=t.offsetHeight,i=t.offsetWidth,n.cssText="position:absolute;top:0;left:0;width:5em;text-align:justify;text-justification:newspaper;"+Modernizr._prefixes.join("hyphens:auto; "),s=t.offsetHeight!=r||t.offsetWidth!=i,document.body.removeChild(e),e.removeChild(t),s}catch(u){return!1}}function t(e,t){try{var n=document.createElement("div"),r=document.createElement("span"),i=n.style,s=0,o=!1,u=!1,a=!1,f=document.body.firstElementChild||document.body.firstChild;return i.cssText="position:absolute;top:0;left:0;overflow:visible;width:1.25em;",n.appendChild(r),document.body.insertBefore(n,f),r.innerHTML="mm",s=r.offsetHeight,r.innerHTML="m"+e+"m",u=r.offsetHeight>s,t?(r.innerHTML="m<br />m",s=r.offsetWidth,r.innerHTML="m"+e+"m",a=r.offsetWidth>s):a=!0,u===!0&&a===!0&&(o=!0),document.body.removeChild(n),n.removeChild(r),o}catch(l){return!1}}function n(e){try{var t=document.createElement("input"),n=document.createElement("div"),r="lebowski",i=!1,s,o=document.body.firstElementChild||document.body.firstChild;n.innerHTML=r+e+r,document.body.insertBefore(n,o),document.body.insertBefore(t,n),t.setSelectionRange?(t.focus(),t.setSelectionRange(0,0)):t.createTextRange&&(s=t.createTextRange(),s.collapse(!0),s.moveEnd("character",0),s.moveStart("character",0),s.select());if(window.find)i=window.find(r+r);else try{s=window.self.document.body.createTextRange(),i=s.findText(r+r)}catch(u){i=!1}return document.body.removeChild(n),document.body.removeChild(t),i}catch(u){return!1}}if(!document.body){window.console&&console.warn("document.body doesn't exist. Modernizr hyphens test needs it.");return}Modernizr.addTest("csshyphens",function(){if(!Modernizr.testAllProps("hyphens"))return!1;try{return e()}catch(t){return!1}}),Modernizr.addTest("softhyphens",function(){try{return t("&#173;",!0)&&t("&#8203;",!1)}catch(e){return!1}}),Modernizr.addTest("softhyphensfind",function(){try{return n("&#173;")&&n("&#8203;")}catch(e){return!1}})}(),Modernizr.addTest("lastchild",function(){return Modernizr.testStyles("#modernizr div {width:100px} #modernizr :last-child{width:200px;display:block}",function(e){return e.lastChild.offsetWidth>e.firstChild.offsetWidth},2)}),Modernizr.addTest("cssmask",Modernizr.testAllProps("mask-repeat")),Modernizr.addTest("mediaqueries",Modernizr.mq("only all")),Modernizr.addTest("overflowscrolling",function(){return Modernizr.testAllProps("overflowScrolling")}),Modernizr.addTest("pointerevents",function(){var e=document.createElement("x"),t=document.documentElement,n=window.getComputedStyle,r;return"pointerEvents"in e.style?(e.style.pointerEvents="auto",e.style.pointerEvents="x",t.appendChild(e),r=n&&n(e,"").pointerEvents==="auto",t.removeChild(e),!!r):!1}),Modernizr.addTest("cssremunit",function(){var e=document.createElement("div");try{e.style.fontSize="3rem"}catch(t){}return/rem/.test(e.style.fontSize)}),Modernizr.addTest("classlist","classList"in document.documentElement),Modernizr.addTest("dataview",typeof DataView!="undefined"&&"getFloat64"in DataView.prototype),Modernizr.addTest("dataset",function(){var e=document.createElement("div");return e.setAttribute("data-a-b","c"),!!e.dataset&&e.dataset.aB==="c"}),Modernizr.addTest("createelement-attrs",function(){try{return document.createElement("<input name='test' />").getAttribute("name")=="test"}catch(e){return!1}}),Modernizr.addTest("microdata",!!document.getItems),Modernizr.addTest("datalistelem",Modernizr.input.list),Modernizr.addTest("outputelem","value"in document.createElement("output")),Modernizr.addTest("details",function(){var e=document,t=e.createElement("details"),n,r,i;return"open"in t?(r=e.body||function(){var t=e.documentElement;return n=!0,t.insertBefore(e.createElement("body"),t.firstElementChild||t.firstChild)}(),t.innerHTML="<summary>a</summary>b",t.style.display="block",r.appendChild(t),i=t.offsetHeight,t.open=!0,i=i!=t.offsetHeight,r.removeChild(t),n&&r.parentNode.removeChild(r),i):!1}),Modernizr.addTest("ruby",function(){function e(e,t){var n;return window.getComputedStyle?n=document.defaultView.getComputedStyle(e,null).getPropertyValue(t):e.currentStyle&&(n=e.currentStyle[t]),n}function t(){s.removeChild(n),n=null,r=null,i=null}var n=document.createElement("ruby"),r=document.createElement("rt"),i=document.createElement("rp"),s=document.documentElement,o="display",u="fontSize";return n.appendChild(i),n.appendChild(r),s.appendChild(n),e(i,o)=="none"||e(n,o)=="ruby"&&e(r,o)=="ruby-text"||e(i,u)=="6pt"&&e(r,u)=="6pt"?(t(),!0):(t(),!1)}),Modernizr.addTest("progressbar",function(){return document.createElement("progress").max!==undefined}),Modernizr.addTest("meter",function(){return document.createElement("meter").max!==undefined}),Modernizr.addTest("time","valueAsDate"in document.createElement("time")),Modernizr.addTest({texttrackapi:typeof document.createElement("video").addTextTrack=="function",track:"kind"in document.createElement("track")}),Modernizr.addTest("emoji",function(){if(!Modernizr.canvastext)return!1;var e=document.createElement("canvas"),t=e.getContext("2d");return t.textBaseline="top",t.font="32px Arial",t.fillText("",0,0),t.getImageData(16,16,1,1).data[0]!==0}),Modernizr.addTest("strictmode",function(){return function(){return"use strict",!this}()}),Modernizr.addTest("devicemotion","DeviceMotionEvent"in window),Modernizr.addTest("deviceorientation","DeviceOrientationEvent"in window),function(){var e=new Image;e.onerror=function(){Modernizr.addTest("exif-orientation",function(){return!1})},e.onload=function(){Modernizr.addTest("exif-orientation",function(){return e.width!==2})},e.src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QAiRXhpZgAASUkqAAgAAAABABIBAwABAAAABgASAAAAAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAABAAIDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+/iiiigD/2Q=="}(),Modernizr.addTest("filereader",function(){return!!(window.File&&window.FileList&&window.FileReader)}),Modernizr.addTest("fileinput",function(){var e=document.createElement("input");return e.type="file",!e.disabled}),Modernizr.addTest("filesystem",!!Modernizr.prefixed("requestFileSystem",window)),Modernizr.addTest("placeholder",function(){return"placeholder"in(Modernizr.input||document.createElement("input"))&&"placeholder"in(Modernizr.textarea||document.createElement("textarea"))}),Modernizr.addTest("speechinput",function(){var e=document.createElement("input");return"speech"in e||"onwebkitspeechchange"in e}),function(e,t){t.formvalidationapi=!1,t.formvalidationmessage=!1,t.addTest("formvalidation",function(){var n=e.createElement("form");if("checkValidity"in n){var r=e.body,i=e.documentElement,s=!1,o=!1,u;return t.formvalidationapi=!0,n.onsubmit=function(e){window.opera||e.preventDefault(),e.stopPropagation()},n.innerHTML='<input name="modTest" required><button></button>',n.style.position="absolute",n.style.top="-99999em",r||(s=!0,r=e.createElement("body"),r.style.background="",i.appendChild(r)),r.appendChild(n),u=n.getElementsByTagName("input")[0],u.oninvalid=function(e){o=!0,e.preventDefault(),e.stopPropagation()},t.formvalidationmessage=!!u.validationMessage,n.getElementsByTagName("button")[0].click(),r.removeChild(n),s&&i.removeChild(r),o}return!1})}(document,window.Modernizr),Modernizr.addTest("fullscreen",function(){for(var e=0;e<Modernizr._domPrefixes.length;e++)if(document[Modernizr._domPrefixes[e].toLowerCase()+"CancelFullScreen"])return!0;return!!document.cancelFullScreen||!1}),Modernizr.addTest("gamepads",!!Modernizr.prefixed("getGamepads",navigator)),Modernizr.addTest("getusermedia",!!Modernizr.prefixed("getUserMedia",navigator)),Modernizr.addTest("ie8compat",function(){return!window.
addEventListener&&document.documentMode&&document.documentMode===7}),function(){var e=new Image;e.onerror=function(){Modernizr.addTest("webp",!1)},e.onload=function(){Modernizr.addTest("webp",function(){return e.width==1})},e.src="data:image/webp;base64,UklGRiwAAABXRUJQVlA4ICAAAAAUAgCdASoBAAEAL/3+/3+CAB/AAAFzrNsAAP5QAAAAAA=="}(),function(){if(!Modernizr.canvas)return!1;var e=new Image,t=document.createElement("canvas"),n=t.getContext("2d");e.onload=function(){Modernizr.addTest("apng",function(){return typeof t.getContext=="undefined"?!1:(n.drawImage(e,0,0),n.getImageData(0,0,1,1).data[3]===0)})},e.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACGFjVEwAAAABAAAAAcMq2TYAAAANSURBVAiZY2BgYPgPAAEEAQB9ssjfAAAAGmZjVEwAAAAAAAAAAQAAAAEAAAAAAAAAAAD6A+gBAbNU+2sAAAARZmRBVAAAAAEImWNgYGBgAAAABQAB6MzFdgAAAABJRU5ErkJggg=="}(),Modernizr.addTest("json",!!window.JSON&&!!JSON.parse),Modernizr.addTest("olreversed","reversed"in document.createElement("ol")),Modernizr.addTest("mathml",function(){var e=!1;if(document.createElementNS){var t="http://www.w3.org/1998/Math/MathML",n=document.createElement("div");n.style.position="absolute";var r=n.appendChild(document.createElementNS(t,"math")).appendChild(document.createElementNS(t,"mfrac"));r.appendChild(document.createElementNS(t,"mi")).appendChild(document.createTextNode("xx")),r.appendChild(document.createElementNS(t,"mi")).appendChild(document.createTextNode("yy")),document.body.appendChild(n),e=n.offsetHeight>n.offsetWidth}return e}),Modernizr.addTest("xhr2","FormData"in window),Modernizr.addTest("lowbandwidth",function(){var e=navigator.connection||{type:0};return e.type==3||e.type==4||/^[23]g$/.test(e.type)}),Modernizr.addTest("eventsource",!!window.EventSource),Modernizr.addTest("notification",!!Modernizr.prefixed("Notifications",window)),Modernizr.addTest("performance",!!Modernizr.prefixed("performance",window)),Modernizr.addTest("quotamanagement",function(){var e=Modernizr.prefixed("StorageInfo",window);return!!(e&&"TEMPORARY"in e&&"PERSISTENT"in e)}),Modernizr.addTest("raf",!!Modernizr.prefixed("requestAnimationFrame",window)),Modernizr.addTest("scriptasync","async"in document.createElement("script")),Modernizr.addTest("scriptdefer","defer"in document.createElement("script")),Modernizr.addTest("stylescoped","scoped"in document.createElement("style")),Modernizr.addTest("svgfilters",function(){var e=!1;try{e=typeof SVGFEColorMatrixElement!==undefined&&SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE==2}catch(t){}return e}),Modernizr.addTest("unicode",function(){var e,t=document.createElement("span"),n=document.createElement("span");return Modernizr.testStyles("#modernizr{font-family:Arial,sans;font-size:300em;}",function(r){t.innerHTML="&#5987",n.innerHTML="&#9734",r.appendChild(t),r.appendChild(n),e="offsetWidth"in t&&t.offsetWidth!==n.offsetWidth}),e}),function(){var e=new Image;e.onerror=function(){Modernizr.addTest("datauri",function(){return!1})},e.onload=function(){Modernizr.addTest("datauri",function(){return e.width==1&&e.height==1})},e.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="}(),Modernizr.addTest("userdata",function(){return!!document.createElement("div").addBehavior}),Modernizr.addTest("vibrate",!!Modernizr.prefixed("vibrate",navigator)),Modernizr.addTest("webintents",function(){return!!Modernizr.prefixed("startActivity",navigator)}),function(){if(!Modernizr.webgl)return;var e,t,n;try{e=document.createElement("canvas"),t=e.getContext("webgl")||e.getContext("experimental-webgl"),n=t.getSupportedExtensions()}catch(r){return}t===undefined?Modernizr.webgl=new Boolean(!1):Modernizr.webgl=new Boolean(!0);for(var i=-1,s=n.length;++i<s;)Modernizr.webgl[n[i]]=!0;window.TEST&&TEST.audvid&&TEST.audvid.push("webgl"),e=undefined}(),Modernizr.addTest("websocketsbinary",!!window.WebSocket&&!!(new WebSocket("ws://.")).binaryType),Modernizr.addTest("framed",function(){return window.location!=top.location}),function(){try{var e=window.MozBlobBuilder||window.WebKitBlobBuilder||window.MSBlobBuilder||window.OBlobBuilder||window.BlobBuilder,t=window.MozURL||window.webkitURL||window.MSURL||window.OURL||window.URL,n="Modernizr",r=new e;r.append("this.onmessage=function(e){postMessage(e.data)}");var i=t.createObjectURL(r.getBlob()),s=new Worker(i);r=null,s.onmessage=function(e){s.terminate(),t.revokeObjectURL(i),Modernizr.addTest("blobworkers",n===e.data),s=null},s.onerror=function(){Modernizr.addTest("blobworkers",!1),s=null},setTimeout(function(){Modernizr.addTest("blobworkers",!1)},200),s.postMessage(n)}catch(o){Modernizr.addTest("blobworkers",!1)}}(),function(){try{var e="Modernizr",t=new Worker("data:text/javascript;base64,dGhpcy5vbm1lc3NhZ2U9ZnVuY3Rpb24oZSl7cG9zdE1lc3NhZ2UoZS5kYXRhKX0=");t.onmessage=function(n){t.terminate(),Modernizr.addTest("dataworkers",e===n.data),t=null},t.onerror=function(){Modernizr.addTest("dataworkers",!1),t=null},setTimeout(function(){Modernizr.addTest("dataworkers",!1)},200),t.postMessage(e)}catch(n){Modernizr.addTest("dataworkers",!1)}}(),Modernizr.addTest("sharedworkers",function(){return!!window.SharedWorker});