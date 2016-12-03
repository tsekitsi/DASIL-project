var base1914 = new ol.layer.Image({
  opacity: 0.875,
  source: new ol.source.ImageStatic({
    url: 'images/base_layers/1914.jpg',
    projection: map.getView().getProjection(),
    imageExtent: ol.extent.applyTransform([-92.72278, 41.74532, -92.719, 41.74922],
      ol.proj.getTransform("EPSG:4326", "EPSG:3857"))
  })
});

var baseLayer = base1914;
map.addLayer(baseLayer);

var marker14_1 = {
    position: ol.proj.transform([-92.72199, 41.74691], 'EPSG:4326', 'EPSG:3857'),
    icon: $('<img src="images/markers/admin.svg">').css({cursor: 'pointer'})
};
    
var markOverlay14_1 = new ol.Overlay({
    position: marker14_1.position,
    positioning: 'bottom-center',
    element: marker14_1.icon
});

marker14_1.icon.click(function(evt) {
    var coordinate = marker14_1.position;
    content.innerHTML = '<p><b>Goodnow Hall</b></p>' +
        "<img src='https://digital.grinnell.edu/islandora/object/grinnell%3A14536/datastream/OBJ/view' height='100%' width='100%'>" +
        "<p>More info soon..!</p>";
    popup.setPosition(coordinate);
});

function fill_markers_of_1914() {
    map.addOverlay(markOverlay14_1);
}

fill_markers_of_1914(); //initialize