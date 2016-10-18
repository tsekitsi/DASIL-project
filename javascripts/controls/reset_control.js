/** Reset view: **/
var reset_button = document.createElement('button');
reset_button.className = "ui-icon ui-icon-arrowrefresh-1-w";
reset_button.title="Reset to original view";
var handleResetView = function() {
    map.setView(new ol.View({
        rotation: -1.57079632679,
        center: ol.proj.transform([-92.72015, 41.7491], 'EPSG:4326', 'EPSG:3857'),
        minZoom: 23,
        maxZoom: 33.5,
        zoomFactor: 1.5,
        zoom: 29
    }));
};
reset_button.addEventListener('click', handleResetView, false);
var reset_button_elt = document.createElement('div');
reset_button_elt.className = 'resetter-button ol-unselectable ol-control';
reset_button_elt.appendChild(reset_button);
var myResetView = new ol.control.Control({
	element: reset_button_elt,
	target: 'map'
});