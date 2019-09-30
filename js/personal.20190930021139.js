(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=960){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=960){$('.js63').attr('src', 'images/mobileheadfield-960.png');
$('.js64').attr('src', (dpi>1) ? 'images/bulbtracker-logo-534.jpg' : 'images/bulbtracker-logo-267.jpg');
$('.js65').attr('src', 'images/little-knowledge-icon-86.png');
$('.js66').attr('src', (dpi>1) ? 'images/little-home-icon-180.png' : 'images/little-home-icon-90.png');
$('.js67').attr('src', (dpi>1) ? 'images/little-globe-icon-168.png' : 'images/little-globe-icon-84.png');
$('.js68').attr('src', (dpi>1) ? 'images/placeholder-1602.png' : 'images/placeholder-801.png');}else{$('.js63').attr('src', 'images/mobileheadfield-320.png');
$('.js64').attr('src', (dpi>1) ? 'images/bulbtracker-logo-176.jpg' : 'images/bulbtracker-logo-88.jpg');
$('.js65').attr('src', (dpi>1) ? 'images/little-knowledge-icon-58.png' : 'images/little-knowledge-icon-29.png');
$('.js66').attr('src', (dpi>1) ? 'images/little-home-icon-60.png' : 'images/little-home-icon-30.png');
$('.js67').attr('src', (dpi>1) ? 'images/little-globe-icon-56.png' : 'images/little-globe-icon-28.png');
$('.js68').attr('src', (dpi>1) ? 'images/placeholder-486.png' : 'images/placeholder-243.png');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(i,e){$(e).click(function(){var t=e.hash.length>1?$('[name="'+e.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();

});