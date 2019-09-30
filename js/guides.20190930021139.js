(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=960){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=960){$('.js51').attr('src', 'images/mobileheadfield-960.png');
$('.js52').attr('src', (dpi>1) ? 'images/bulbtracker-logo-534.jpg' : 'images/bulbtracker-logo-267.jpg');
$('.js53').attr('src', (dpi>1) ? 'images/little-home-icon-180.png' : 'images/little-home-icon-90.png');
$('.js54').attr('src', (dpi>1) ? 'images/little-tracking-icon-186.png' : 'images/little-tracking-icon-93.png');
$('.js55').attr('src', (dpi>1) ? 'images/little-globe-icon-168.png' : 'images/little-globe-icon-84.png');
$('.js56').attr('src', (dpi>1) ? 'images/placeholder-1668.png' : 'images/placeholder-834.png');}else{$('.js51').attr('src', 'images/mobileheadfield-320.png');
$('.js52').attr('src', (dpi>1) ? 'images/bulbtracker-logo-176.jpg' : 'images/bulbtracker-logo-88.jpg');
$('.js53').attr('src', (dpi>1) ? 'images/little-home-icon-60.png' : 'images/little-home-icon-30.png');
$('.js54').attr('src', (dpi>1) ? 'images/little-tracking-icon-62.png' : 'images/little-tracking-icon-31.png');
$('.js55').attr('src', (dpi>1) ? 'images/little-globe-icon-56.png' : 'images/little-globe-icon-28.png');
$('.js56').attr('src', (dpi>1) ? 'images/placeholder-556.png' : 'images/placeholder-278.png');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(i,e){$(e).click(function(){var t=e.hash.length>1?$('[name="'+e.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();

});