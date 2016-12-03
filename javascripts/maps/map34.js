var base1934 = new ol.layer.Image({
  opacity: 0.875,
  source: new ol.source.ImageStatic({
    url: 'images/base_layers/1934.jpg',
    projection: map.getView().getProjection(),
    imageExtent: ol.extent.applyTransform([-92.71768, 41.74621, -92.72255, 41.75196],
      ol.proj.getTransform("EPSG:4326", "EPSG:3857"))
  })
});

var marker34_1 = {
    position: ol.proj.transform([-92.721785, 41.74766], 'EPSG:4326', 'EPSG:3857'),
    icon: $('<img src="images/markers/life.svg">').css({cursor: 'pointer'})
};
var markOverlay34_1 = new ol.Overlay({
    position: marker34_1.position,
    positioning: 'bottom-center',
    element: marker34_1.icon
});
marker34_1.icon.click(function(evt) {
    var coordinate = marker34_1.position;
    content.innerHTML = '<p><b>Herrik Chapel</b></p>' +
        "<img src='images/buildings/1934/chapel.png' height='100%' width='100%'>" +
        "<p>Further comments...</p>";
    popup.setPosition(coordinate);
});

var marker34_2 = {
    position: ol.proj.transform([-92.72006, 41.74751], 'EPSG:4326', 'EPSG:3857'),
    icon: $('<img src="images/markers/sport.svg">').css({cursor: 'pointer'})
};
var markOverlay34_2 = new ol.Overlay({
  position: marker34_2.position,
  positioning: 'bottom-center',
  element: marker34_2.icon
})
marker34_2.icon.click(function(evt) {
    var coordinate = marker34_2.position;
    content.innerHTML = '<p><b>Women\'s Gym</b></p>' +
        "<img src='https://digital.grinnell.edu/islandora/object/grinnell%3A13843/datastream/OBJ/view' height='100%' width='100%'>" +
        "<p>Further comments...</p>";
    popup.setPosition(coordinate);
});

function fill_markers_of_1934() {
    map.addOverlay(markOverlay34_1);
    map.addOverlay(markOverlay34_2);
}