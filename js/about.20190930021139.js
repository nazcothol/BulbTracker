(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=960){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}
function em1(){var c="tdpuuAqbhfboetpvoe/dpn";var addr="mailto:";for(var i=0;i<c.length;i++)addr+=String.fromCharCode(c.charCodeAt(i)-1);window.location.href=addr;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=960){$('.js15').attr('src', 'images/mobileheadfield-960.png');
$('.js16').attr('src', (dpi>1) ? 'images/bulbtracker-logo-534.jpg' : 'images/bulbtracker-logo-267.jpg');
$('.js17').attr('src', 'images/bulb-mobile-hero-960.jpg');
$('.js18').attr('src', 'images/little-knowledge-icon-86.png');
$('.js19').attr('src', (dpi>1) ? 'images/little-tracking-icon-186.png' : 'images/little-tracking-icon-93.png');
$('.js20').attr('src', (dpi>1) ? 'images/little-globe-icon-168.png' : 'images/little-globe-icon-84.png');
$('.js21').attr('src', 'images/little-fb-icon-72.png');
$('.js22').attr('src', 'images/little-insta-icon-72.png');
$('.js23').attr('src', 'images/little-home-icon-132.png');
$('.js24').attr('src', 'images/little-li-icon-72.png');
$('.js25').attr('src', 'images/little-twit-icon-72.png');
$('.js26').attr('src', 'images/little-mail-icon-72.png');}else{$('.js15').attr('src', 'images/mobileheadfield-320.png');
$('.js16').attr('src', (dpi>1) ? 'images/bulbtracker-logo-176.jpg' : 'images/bulbtracker-logo-88.jpg');
$('.js17').attr('src', 'images/bulb-mobile-hero-320.jpg');
$('.js18').attr('src', (dpi>1) ? 'images/little-knowledge-icon-58.png' : 'images/little-knowledge-icon-29.png');
$('.js19').attr('src', (dpi>1) ? 'images/little-tracking-icon-62.png' : 'images/little-tracking-icon-31.png');
$('.js20').attr('src', (dpi>1) ? 'images/little-globe-icon-56.png' : 'images/little-globe-icon-28.png');
$('.js21').attr('src', 'images/little-fb-icon-24.png');
$('.js22').attr('src', 'images/little-insta-icon-24.png');
$('.js23').attr('src', (dpi>1) ? 'images/little-home-icon-88.png' : 'images/little-home-icon-44.png');
$('.js24').attr('src', 'images/little-li-icon-24.png');
$('.js25').attr('src', 'images/little-twit-icon-24.png');
$('.js26').attr('src', 'images/little-mail-icon-24.png');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(i,e){$(e).click(function(){var t=e.hash.length>1?$('[name="'+e.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();

});