var fullScreenChar = document.createElement('span');
fullScreenChar.className = 'ui-icon-arrowthick-2-ne-sw';
var myFullScreen = new ol.control.FullScreen({
    label: fullScreenChar
});