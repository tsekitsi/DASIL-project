/** Toggle-base_layer: **/
var tgl = document.createElement('button');
tgl.className = "ui-icon-image";
tgl.title="Toggle Base Layer";
var handleToggleBaseLayer = function() {
    if (baseLayer.getVisible()) {
		baseLayer.setVisible(false);
		tgl.className = "ui-icon-minus";
	}
    else {
		baseLayer.setVisible(true);
		tgl.className = "ui-icon ui-icon-image";
	}
};
tgl.addEventListener('click', handleToggleBaseLayer, false); //add the functionality
var tgl_elt = document.createElement('div');
tgl_elt.className = 'toggle-baseLayer ol-unselectable ol-control';
tgl_elt.appendChild(tgl); //add style to fit ol
var myToggleImg = new ol.control.Control({
	element: tgl_elt,
	target: 'map'
}); //create the control in ol-recognizable, control-format