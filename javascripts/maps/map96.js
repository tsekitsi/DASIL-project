var base1996 = new ol.layer.Image({
  opacity: 0.875,
  source: new ol.source.ImageStatic({
    url: 'images/base_layers/1996.jpg',
    projection: map.getView().getProjection(),
    imageExtent: ol.extent.applyTransform([-92.71768, 41.74621, -92.72255, 41.75196],
      ol.proj.getTransform("EPSG:4326", "EPSG:3857"))
  })
});

function fill_markers_of_1996() {

}