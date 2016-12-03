var opc_elt = document.createElement('div');
opc_elt.id = 'slider_opac';
var OpacSlider = new ol.control.Control({
	element: opc_elt,
	target: 'map'
});

$(function() {
    $( "#slider_opac" ).slider({
        orientation: "vertical",
        range: "min",
        min: 0,
        max: 100,
        value: 87,
        slide: function(e, ui) {
            baseLayer.setOpacity(ui.value / 100);
        }
    });
});