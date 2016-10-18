var bing_maps = new ol.layer.Tile({
    source: new ol.source.BingMaps({
        key: 'Akzb2BhgVChMb_aQbmzk9jCqH34jum2D8rCSd4SoJdllzqD-r2tBpx2VLun1wOKZ',
        imagerySet: 'AerialWithLabels'
    })
});

var arrowChar = document.createElement('span');
arrowChar.className = 'ui-icon-arrowthick-1-n';
var my_controls = [new ol.control.Attribution(), new ol.control.Zoom(), new ol.control.FullScreen({label:fullScreenChar}), new ol.control.Rotate({autoHide:false, label:arrowChar}), myToggleImg, myResetView, OpacSlider, YearSlider];

// Elements that make up the popup:
var container = document.getElementById('popup');
var content = document.getElementById('popup-content');
var closer = document.getElementById('popup-closer');

// Create an overlay to anchor the popup to the map:
var popup = new ol.Overlay(/** @type {olx.OverlayOptions} */ ({
    element: container,
    autoPan: true,
    autoPanAnimation: {
        duration: 250
    }
}));

var map = new ol.Map({
    target: 'map',
    layers: [bing_maps],
    overlays: [popup],
    controls: my_controls,
    view: new ol.View({
        rotation: -1.57079632679,
        center: ol.proj.transform([-92.72015, 41.7491], 'EPSG:4326', 'EPSG:3857'),
        minZoom: 23,
        maxZoom: 33.5,
        zoomFactor: 1.5,
        zoom: 29
    }),
    interactions: ol.interaction.defaults({
    shiftDragZoom: false
  }).extend([new ol.interaction.DragRotate()])
});

function reset_and_refill(year) {
	var opacity_now = baseLayer.getOpacity();
	var visible_now = baseLayer.getVisible();
    // remove baseLayer:
    map.removeLayer(baseLayer);
    // remove all overlays:
    map.getOverlays().getArray().slice(0).forEach(function(overlay) {
        map.removeOverlay(overlay);
    }); // https://groups.google.com/forum/#!topic/ol3-dev/R3pxYsM86Uk
    // add the new baseLayer:
    baseLayer = eval("base"+year); //add (>/n)
    map.addLayer(baseLayer); //as "baselayer"
	baseLayer.setOpacity(opacity_now);
	baseLayer.setVisible(visible_now);
    // make the overlay available again:
    map.addOverlay(popup);
    popup.setPosition(undefined); //hide previous open
    // add the new overlays:
    eval("fill_markers_of_"+year+"();");
    //fill_markers_of_1934();
}