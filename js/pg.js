!function(a,b){function j(a){return null!=a&&a.nodeType==a.DOCUMENT_NODE}function k(a){return a.replace(/^\s+|\s+$/g,"")}var c={version:"1.00",author:"jzy",_$:function(a){return document.getElementById(a)},getEle:function(a,b){var e,f,g,h,i,c=[],d=0;if(b||(b=document),this.trim(a),b instanceof Array)for(d=0;d<b.length;d++)c=c.concat(this.getEle(a,b[d]));else if(/,/.test(a)){for(e=a.split(/[, ]+/),f||(f=[]),d=0;d<e.length;d++)f=f.concat(this.getEle(e[d],b));c=f}else if(/[ >]/.test(a)){for(g=[],h=[],e=a.split(/[ >]+/),h=[b],d=0;d<e.length;d++)for(g=h,h=[],i=0;i<g.length;i++)h=h.concat(this.getEle(e[d],g[i]));c=h}else switch(a.charAt(0)){case"#":return this._$(a.substring(1));case".":return this.getEByClassName(b,a.substring(1));default:for(f=[],d=0;d<b.getElementsByTagName(a).length;d++)f.push(b.getElementsByTagName(a)[d]);return f}return c},DC:function(a){return document.createElement(a)},GT:function(a,b){return a.getElementsByTagName(b)},getStyle:function(b,c){return b.currentStyle?b.currentStyle[c]:a.getComputedStyle?a.getComputedStyle(b,!1)[c]:void 0},setStyle:function(a,b){if(2==arguments.length)for(var c=""in b)this.setStyle(a,c,b[c]);else switch(arguments[1].toLowerCase()){case"opacity":a.style.filter="alpha(opacity:"+arguments[2]+")",a.style.opacity=arguments[2]/100;break;default:a.style[arguments[1]]="number"==typeof arguments[2]?arguments[2]+"px":arguments[2]}},setStyle3:function(a,b,c){a.style["Webkit"+b.charAt(0).toUpperCase()+b.substring(1)]=c,a.style["Moz"+b.charAt(0).toUpperCase()+b.substring(1)]=c,a.style["ms"+b.charAt(0).toUpperCase()+b.substring(1)]=c,a.style["O"+b.charAt(0).toUpperCase()+b.substring(1)]=c,a.style[b]=c},getClass:function(a){return a.className.replace(/\s+/," ").split(" ")},hasClass:function(a,b){var d,c=this.getClass(a);for(d=0;d<c.length;d++)if(c[d]===b)return!0;return!1},addClass:function(a,b){return this.hasClass(a,b)?!1:(a.className+=(a.className?" ":"")+b,!0)},removeClass:function(a,b){var e,c=this.getClass(a),d=c.length;for(e=d-1;e>=0;e--)c[e]===b&&delete c[e];return a.className=c.join(" "),d==c.length?!1:!0},attr:function(a,c,d){return d==b?a.getAttribute(c):(""==d?a.removeAttribute(c):a.setAttribute(c,d),void 0)},getCByClassName:function(a,b){var d,c=[];for(a=this.getChildNodes(a),d=0;d<a.length;d++)this.hasClass(a[d],b)&&c.push(a[d]);return c.length?c:!1},getEByClassName:function(a,b,c){var d=[],e=null==c?this.GT(a,"*"):this.GT(a,c);for(i=0;i<e.length;i++)this.hasClass(e[i],b)&&d.push(e[i]);return d.length?d:!1},getChildNodes:function(a){var c,b=[];if(a=a.childNodes,null==a)return!1;for(c=0;c<a.length;c++)this.isElement(a[c])&&b.push(a[c]);return b.length?b:!1},getSiblings:function(a){var d,b=[],c=this.getChildNodes(a.parentNode);for(d=0;d<c.length;d++)c[d]!==a&&b.push(c[d]);return b.length?b:!1},getNextSibling:function(a){return a=a.nextSibling,null==a?!1:this.isElement(a)?a:this.getNextSibling(a)},getPrevSibling:function(a){return a=a.previousSibling,null==a?!1:this.isElement(a)?a:this.getPrevSibling(a)},getFirstChild:function(a){return a=a.firstChild,null==a?!1:this.isElement(a)?a:this.getNextSibling(a)},getLastChild:function(a){var a=a.lastChild;return null==a?!1:this.isElement(a)?a:this.getPrevSibling(a)},insertAfter:function(a,b){var c=b.parentNode;this.getLastChild(c)==b?c.appendChild(a):c.insertBefore(a,this.getNextSibling(b))},replace:function(a,b){b.parentNode.replaceChild(a,b)},getEvent:function(b){return b||a.event},getEventTarget:function(b){return a.event?a.event.srcElement:b.target},preventDefault:function(b){b.preventDefault?b.preventDefault():a.event.returnValue=!1},stopPropagation:function(b){a.event?a.event.cancelBubble=!0:b.stopPropagation()},addEvent:function(a,c,d){if(a.attachEvent)a.attachEvent("on"+c,function(){d.call(a,arguments)});else switch(c){case"mouseenter":a.addEventListener("mouseover",this.withinElement(d),!1);break;case"mouseleave":a.addEventListener("mouseout",this.withinElement(d),!1);break;default:"mousewheel"==c&&document.mozHidden!==b&&(c="DOMMouseScroll"),a.addEventListener(c,d,!1)}},delEvent:function(a,b,c){a.detachEvent?a.detachEvent("on"+b,c):a.removeEventListener(b,c,!1)},withinElement:function(a){return function(b){for(var c=b.relatedTarget;c&&c!=this;)try{c=c.parentNode}catch(b){break}c!=this&&a.call(this,b)}},contains:function(a,b){try{return a.contains?a!=b&&a.contains(b):!!(16&a.compareDocumentPosition(b))}catch(c){}},loadJs:function(a,b,c){var d=this.DC("script");b&&(this.B.ie?d.onreadystatechange=function(){("loaded"==d.readyState||"complete"==d.readyState)&&b()}:d.onload=b),c&&this.attr(d,"charset",c),this.attr(d,"type","text/javascript"),this.attr(d,"src",a),this.attr(d,"language","javascript"),this.GT(document,"head")[0].appendChild(d)},loadCss:function(a,b,c){var d=c?c:this.DC("link");b&&(d.onload=b),c||(this.attr(d,"type","text/css"),this.attr(d,"rel","stylesheet"),this.GT(document,"head")[0].appendChild(d)),this.attr(d,"href",a)},getPosition:function(a){for(var b=0,c=0;null!=a&&a!=document.body;)b+=a.offsetLeft,c+=a.offsetTop,a=a.offsetParent;return[b,c]},width:function(a){return a.offsetWidth},height:function(a){return a.offsetHeight},scrollX:function(){var a=document.documentElement;return self.pageXOffset||a&&a.scrollLeft||document.body.scrollLeft},scrollY:function(){var a=document.documentElement;return self.pageYOffset||a&&a.scrollTop||document.body.scrollTop},pageWidth:function(){return document.body.scrollWidth||document.documentElement.scrollWidth},pageHeight:function(){return document.body.scrollHeight||document.documentElement.scrollHeight},windowWidth:function(){var a=document.documentElement;return self.innerWidth||a&&a.clientWidth||document.body.clientWidth},windowHeight:function(){var a=document.documentElement;return self.innerHeight||a&&a.clientHeight||document.body.clientHeight},scrollTo:function(b,c){return a.scrollTo(b,c)},trim:function(a){return a.replace(/^\s+|\s+$/g,"")},map:function(a,b){for(var c=0;c<a.length;c++)b.call(a[c],c)},random:function(a,c){return a==b&&(a=0),c==b&&(c=9),Math.floor(Math.random()*(c-a+1)+a)},toPercent:function(a){return(Math.round(1e4*a)/100).toFixed(2)+"%"},toggle:function(a){function e(a){var d=0;c.addEvent(a,"click",function(){b[d++%b.length].call(a)})}var d,b=[],c=this;for(d=1;d<arguments.length;d++)b[d-1]=arguments[d];e(a)},css:function(a,b,c){if(2==arguments.length){var d=this.getStyle(a,b);switch(b){case"opacity":return 100*parseFloat(d);default:return parseInt(d)}}else if(3==arguments.length)switch(b){case"width":case"height":case"paddingLeft":case"paddingTop":case"paddingRight":case"paddingBottom":case"left":case"right":case"bottom":case"top":case"marginLeft":case"marginTop":case"marginRight":case"marginBottom":a.style[b]="string"==typeof c?c:c+"px";break;case"opacity":a.style.opacity=c/100,a.style.filter="alpha(opacity:"+c+")";break;default:a.style[b]=c}},StartMove:function(a,b,c,d,e){var h,g=null;switch(a.timer&&clearInterval(a.timer),c){case 1:g=this.DoMoveBuffer;break;case 2:g=this.DoMoveFlex;break;case 3:g=this.DoMoveNormal;break;case 4:g=this.DoMoveNormal}a.timer=setInterval(function(){g(a,b,c,d,e),a.lastMove=(new Date).getTime()},20),a.lastMove||(a.lastMove=0),h=(new Date).getTime(),h-a.lastMove>20&&(g(a,b,c,d,e),a.lastMove=h)},MOVE_TYPE:{BUFFER:1,FLEX:2,NORMAL:3,FAST:4},DoMoveBuffer:function(a,b,d,e,f){var g=!0,h="",i=0;a.oSpeed||(a.oSpeed={});for(h in b)a.oSpeed[h]||(a.oSpeed[h]=0),i=c.css(a,h),i!=b[h]&&(g=!1,a.oSpeed[h]=(b[h]-i)/8,a.oSpeed[h]=a.oSpeed[h]>0?Math.ceil(a.oSpeed[h]):Math.floor(a.oSpeed[h]),c.css(a,h,parseInt(i+a.oSpeed[h])));f&&f.call(a),g&&(clearInterval(a.timer),a.timer=null,e&&e.call(a))},DoMoveFlex:function(a,b,d,e,f){var g=!0,h="",j=0;a.oSpeed||(a.oSpeed={});for(h in b)a.oSpeed[h]||(a.oSpeed[h]=0),j=c.css(a,h),(Math.abs(b[h]-j)>1||Math.abs(a.oSpeed[h])>1)&&(g=!1,a.oSpeed[h]+=(b[h]-j)/8,a.oSpeed[h]*=.75,c.css(a,h,parseInt(j+a.oSpeed[h])));if(f&&f.call(a),g){clearInterval(a.timer),a.timer=null;for(h in b)c.css(a,h,b[h]);e&&e.call(a)}},DoMoveNormal:function(a,b,d,e,f){var k,g=!0,h="",i=0,j=20;a.oSpeed||(a.oSpeed={});for(h in b)a.oSpeed[h]||(k=c.css(a,h),a.oSpeed[h]=(b[h]-k)/j,a.oSpeed[h]=Math.abs(a.oSpeed[h])>1?a.oSpeed[h]:1),d==c.MOVE_TYPE.FAST&&(a.oSpeed[h]*=1.2),i=c.css(a,h),Math.abs(b[h]-i)>Math.abs(a.oSpeed[h])&&(g=!1,c.css(a,h,parseInt(i+a.oSpeed[h])));if(f&&f.call(a),g){clearInterval(a.timer),a.timer=null,a.oSpeed={};for(h in b)c.css(a,h,b[h]);e&&e.call(a)}},E:function(b){return b=a.event||b,{clone:!0,stop:function(){b&&b.stopPropagation?b.stopPropagation():b.cancelBubble=!0},prevent:function(){b&&b.preventDefault?b.preventDefault():b.returnValue=!1},target:b.target||b.srcElement,x:b.clientX||b.pageX,y:b.clientY||b.pageY,button:b.button,key:b.keyCode,shift:b.shiftKey,alt:b.altKey,ctrl:b.ctrlKey,type:b.type,wheel:b.wheelDelta/120||-b.detail/3}},setCookie:function(a,b,c){if(c!==!1){var d=new Date;d.setDate(d.getDate()+c),document.cookie=a+"="+b+";expires="+d+";path=/"}else document.cookie=a+"="+b},getCookie:function(a){var d,b=document.cookie.split("; "),c=0;for(c=0;c<b.length;c++)if(d=b[c].split("="),d[0]==a)return d[1];return""},removeCookie:function(a){this.setCookie(a,"a",-1)},isObject:function(a){return"object"==typeof a},isElement:function(a){return a&&1==a.nodeType},isUndefined:function(a){return"undefined"==typeof a},isFunction:function(a){return"Function"==this.getType(a)},isNumber:function(a){return"Number"==this.getType(a)},isString:function(a){return"String"==this.getType(a)},isArray:function(a){return"Array"==this.getType(a)},getType:function(a){return Object.prototype.toString.call(a).slice(8,-1)},isIE:-1!=navigator.appVersion.indexOf("MSIE")?!0:!1,isIE6:!!a.ActiveXObject&&!a.XMLHttpRequest,isIE7:-1!=navigator.appVersion.indexOf("MSIE 7.0")?!0:!1},e=[],f=e.slice,g=/^[\w-]*$/,h={};h.init=function(b){var c;return b?("string"==typeof b&&(b=k(b),c=h.qsa(a.document,b)),h.Z(c,b)):h.Z()},h.Z=function(a){return a=a||[]},h.qsa=function(a,b){var c,d="#"==b[0],e=!d&&"."==b[0],h=d||e?b.slice(1):b,i=g.test(h);return j(a)&&i&&d?(c=a.getElementById(h))?[c]:[]:1!==a.nodeType&&9!==a.nodeType?[]:f.call(i&&!d?e?a.getElementsByClassName(h):a.getElementsByTagName(b):a.querySelectorAll(b))},$$=function(a){return h.init(a)},a.PG===b&&(a.PG=c),a.$$===b&&(a.$$=$$)}(window);