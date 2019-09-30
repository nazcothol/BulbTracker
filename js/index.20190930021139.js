(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=960){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=960){$('.js').attr('src', 'images/mobileheadfield-960.png');
$('.js2').attr('src', (dpi>1) ? 'images/bulbtracker-logo-534.jpg' : 'images/bulbtracker-logo-267.jpg');
$('.js3').attr('src', (dpi>1) ? 'images/lightandchair-1920.jpeg' : 'images/lightandchair-960.jpeg');
$('.js4').attr('src', 'images/little-knowledge-icon-86.png');
$('.js5').attr('src', (dpi>1) ? 'images/little-tracking-icon-186.png' : 'images/little-tracking-icon-93.png');
$('.js6').attr('src', (dpi>1) ? 'images/little-globe-icon-168.png' : 'images/little-globe-icon-84.png');
$('.js7').attr('src', 'images/little-information-icon-84.png');}else{$('.js').attr('src', 'images/mobileheadfield-320.png');
$('.js2').attr('src', (dpi>1) ? 'images/bulbtracker-logo-176.jpg' : 'images/bulbtracker-logo-88.jpg');
$('.js3').attr('src', (dpi>1) ? 'images/lightandchair-640.jpeg' : 'images/lightandchair-320.jpeg');
$('.js4').attr('src', (dpi>1) ? 'images/little-knowledge-icon-58.png' : 'images/little-knowledge-icon-29.png');
$('.js5').attr('src', (dpi>1) ? 'images/little-tracking-icon-62.png' : 'images/little-tracking-icon-31.png');
$('.js6').attr('src', (dpi>1) ? 'images/little-globe-icon-56.png' : 'images/little-globe-icon-28.png');
$('.js7').attr('src', (dpi>1) ? 'images/little-information-icon-56.png' : 'images/little-information-icon-28.png');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(i,e){$(e).click(function(){var t=e.hash.length>1?$('[name="'+e.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();

});