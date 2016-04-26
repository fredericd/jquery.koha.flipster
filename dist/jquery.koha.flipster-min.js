!function(t,e,n){"use strict";function i(t,e){var n=null;return function(){var i=this,r=arguments;null===n&&(n=setTimeout(function(){t.apply(i,r),n=null},e))}}var r=function(){var t={};return function(e){if(t[e]!==n)return t[e];var i=document.createElement("div"),r=i.style,a=e.charAt(0).toUpperCase()+e.slice(1),o=["webkit","moz","ms","o"],s=(e+" "+o.join(a+" ")+a).split(" ");for(var l in s)if(s[l]in r)return t[e]==s[l];return t[e]===!1}}(),a="http://www.w3.org/2000/svg",o=function(){var t;return function(){if(t!==n)return t;var e=document.createElement("div");return e.innerHTML="<svg/>",t=e.firstChild&&e.firstChild.namespaceURI===a}}(),s=t(e),l=r("transform"),c={itemContainer:"ul",itemSelector:"li",start:"center",fadeIn:400,loop:!1,autoplay:!1,pauseOnHover:!0,style:"coverflow",spacing:-.6,click:!0,keyboard:!0,scrollwheel:!0,touch:!0,nav:!1,buttons:!1,buttonPrev:"Previous",buttonNext:"Next",onItemSwitch:!1},u={main:"flipster",active:"flipster--active",container:"flipster__container",nav:"flipster__nav",navChild:"flipster__nav__child",navItem:"flipster__nav__item",navLink:"flipster__nav__link",navCurrent:"flipster__nav__item--current",navCategory:"flipster__nav__item--category",navCategoryLink:"flipster__nav__link--category",button:"flipster__button",buttonPrev:"flipster__button--prev",buttonNext:"flipster__button--next",item:"flipster__item",itemCurrent:"flipster__item--current",itemPast:"flipster__item--past",itemFuture:"flipster__item--future",itemContent:"flipster__item__content"},f=new RegExp("\\b("+u.itemCurrent+"|"+u.itemPast+"|"+u.itemFuture+")(.*?)(\\s|$)","g"),p=new RegExp("\\s\\s+","g");t.fn.flipster=function(e){var r="string"==typeof e;if(r){var v=Array.prototype.slice.call(arguments,1);return this.each(function(){var n=t(this).data("methods");return n[e]?n[e].apply(this,v):this})}var h=t.extend({},c,e);return this.each(function(){function e(t){var e="next"===t?h.buttonNext:h.buttonPrev;return"custom"!==h.buttons&&o?'<svg viewBox="0 0 13 20" xmlns="'+a+'" aria-labelledby="title"><title>'+e+'</title><polyline points="10,3 3,10 10,17"'+("next"===t?' transform="rotate(180 6.5,10)"':"")+"/></svg>":e}function r(n){return n=n||"next",t('<button class="'+u.button+" "+("next"===n?u.buttonNext:u.buttonPrev)+'" role="button" />').html(e(n)).on("click",function(t){x(n),t.preventDefault()})}function c(){h.buttons&&F.length>1&&(O.find("."+u.button).remove(),O.append(r("prev"),r("next")))}function v(){var e={};!h.nav||F.length<=1||(Y&&Y.remove(),Y=t('<ul class="'+u.nav+'" role="navigation" />'),H=t(""),F.each(function(n){var i=t(this),r=i.data("flip-category"),a=i.data("flip-title")||i.attr("title")||n,o=t('<a href="#" class="'+u.navLink+'">'+a+"</a>").data("index",n);if(H=H.add(o),r){if(!e[r]){var s=t('<li class="'+u.navItem+" "+u.navCategory+'">'),l=t('<a href="#" class="'+u.navLink+" "+u.navCategoryLink+'" data-flip-category="'+r+'">'+r+"</a>").data("category",r).data("index",n);e[r]=t('<ul class="'+u.navChild+'" />'),H=H.add(l),s.append(l,e[r]).appendTo(Y)}e[r].append(o)}else Y.append(o);o.wrap('<li class="'+u.navItem+'">')}),Y.on("click","a",function(e){var n=t(this).data("index");n>=0&&(x(n),e.preventDefault())}),"after"===h.nav?O.append(Y):O.prepend(Y),z=Y.find("."+u.navItem))}function d(){if(h.nav){var e=M.data("flip-category");z.removeClass(u.navCurrent),H.filter(function(){return t(this).data("index")===A||e&&t(this).data("category")===e}).parent().addClass(u.navCurrent)}}function m(){O.css("transition","none"),N.css("transition","none"),F.css("transition","none")}function g(){O.css("transition",""),N.css("transition",""),F.css("transition","")}function _(){var e,n=0;return F.each(function(){e=t(this).height(),e>n&&(n=e)}),n}function b(e){return e&&m(),S=N.width(),N.height(_()),S?(X&&(clearInterval(X),X=!1),void F.each(function(n){var i,r,a=t(this);a.attr("class",function(t,e){return e&&e.replace(f,"").replace(p," ")}),i=a.outerWidth(),0!==h.spacing&&a.css("margin-right",i*h.spacing+"px"),r=a.position().left,R[n]=-1*(r+i/2-S/2),n===F.length-1&&(y(),e&&setTimeout(g,1))})):void(X=X||setInterval(function(){b(e)},500))}function y(){var e,i,r,a=F.length;F.each(function(n){e=t(this),i=" ",n===A?(i+=u.itemCurrent,r=a+1):A>n?(i+=u.itemPast+" "+u.itemPast+"-"+(A-n),r=n):(i+=u.itemFuture+" "+u.itemFuture+"-"+(n-A),r=a-n),e.css("z-index",r).attr("class",function(t,e){return e&&e.replace(f,"").replace(p," ")+i})}),A>=0&&(S&&R[A]!==n||b(!0),l?N.css("transform","translateX("+R[A]+"px)"):N.css({left:R[A]+"px"})),d()}function x(t){var e=A;if(!(F.length<=1))return"prev"===t?A>0?A--:h.loop&&(A=F.length-1):"next"===t?A<F.length-1?A++:h.loop&&(A=0):"number"==typeof t?A=t:t!==n&&(A=F.index(t)),M=F.eq(A),A!==e&&h.onItemSwitch&&h.onItemSwitch.call(O,F[A],F[e]),y(),O}function w(t){return h.autoplay=t||h.autoplay,clearInterval(Q),Q=setInterval(function(){var t=A;x("next"),t!==A||h.loop||clearInterval(Q)},h.autoplay),O}function C(){return clearInterval(Q),Q=0,O}function k(t){return C(),h.autoplay&&t&&(Q=-1),O}function I(){b(!0),O.hide().css("visibility","").addClass(u.active).fadeIn(h.fadeIn)}function E(){return N=O.find(h.itemContainer).addClass(u.container),F=N.find(h.itemSelector),F.length<=1?void 0:(F.addClass(u.item).each(function(){var e=t(this);e.children("."+u.itemContent).length||e.wrapInner('<div class="'+u.itemContent+'" />')}),h.click&&F.on("click.flipster touchend.flipster",function(e){U||(t(this).hasClass(u.itemCurrent)||e.preventDefault(),x(this))}),c(),v(),A>=0&&x(A),O)}function P(t){h.keyboard&&(t[0].tabIndex=0,t.on("keydown.flipster",i(function(t){var e=t.which;37!==e&&39!==e||(x(37===e?"prev":"next"),t.preventDefault())},250,!0)))}function T(t){if(h.scrollwheel){var e,n,r=!1,a=0,o=0,l=0;t.on("mousewheel.flipster wheel.flipster",function(){r=!0}).on("mousewheel.flipster wheel.flipster",i(function(t){clearTimeout(o),o=setTimeout(function(){a=0,l=0},300),t=t.originalEvent,l+=t.wheelDelta||-1*(t.deltaY+t.deltaX),Math.abs(l)<25||(a++,e=l>0?"prev":"next",n!==e&&(a=0),n=e,(6>a||a%3===0)&&x(e),l=0)},50)),s.on("mousewheel.flipster wheel.flipster",function(t){r&&(t.preventDefault(),r=!1)})}}function j(t){if(h.touch){var e,n,r,a,o=!1,s=i(x,300);t.on({"touchstart.flipster":function(t){t=t.originalEvent,U=t.touches?t.touches[0].clientX:t.clientX,o=t.touches?t.touches[0].clientY:t.clientY},"touchmove.flipster":i(function(t){U!==!1&&(t=t.originalEvent,e=t.touches?t.touches[0].clientX:t.clientX,n=t.touches?t.touches[0].clientY:t.clientY,r=n-o,a=e-U,Math.abs(r)<100&&Math.abs(a)>=30&&(s(0>a?"next":"prev"),U=e,t.preventDefault()))},100),"touchend.flipster touchcancel.flipster ":function(){U=!1}})}}function D(){var t;if(O.css("visibility","hidden"),E(),F.length<=1)return void O.css("visibility","");t=h.style?"flipster--"+h.style.split(" ").join(" flipster--"):!1,O.addClass([u.main,l?"flipster--transform":" flipster--no-transform",t,h.click?"flipster--click":""].join(" ")),h.start&&(A="center"===h.start?Math.floor(F.length/2):h.start),x(A);var e=O.find("img");if(e.length){var n=0;e.on("load",function(){n++,n>=e.length&&I()}),setTimeout(I,750)}else I();s.on("resize.flipster",i(b,400)),h.autoplay&&w(),h.pauseOnHover&&N.on("mouseenter.flipster",function(){Q?k(!0):C()}).on("mouseleave.flipster",function(){-1===Q&&w()}),P(O),T(N),j(N)}var L,N,S,X,F,M,Y,z,H,O=t(this),R=[],A=0,Q=!1,U=!1;L={jump:x,next:function(){return x("next")},prev:function(){return x("prev")},play:w,stop:C,pause:k,index:E},O.data("methods",L),O.hasClass(u.active)||D()})}}(jQuery,window),function(t,e,n){"use strict";t.extend({kohaFlipster:function(e){t("<link>",{rel:"stylesheet",type:"text/css",href:e.css}).appendTo("head"),e.flipsters.forEach(function(e){t.getJSON(e.bibs).done(function(n){var i=["<div>\n<ul>\n",n.map(function(t){return'<li>\n<a href="/cgi-bin/koha/opac-detail.pl?biblionumber='+t[0]+'"><img src="'+t[2]+'" title="'+t[1]+'"/>\n</a>\n</li>\n'}),"</ul>\n</div>"].join("\n");e.flipster.fadeIn=0,t(e.selector).html(i).flipster(e.flipster)}).fail(function(t){console.log("Error loading "+e.bibs),console.log(t)})})}})}(jQuery,window);