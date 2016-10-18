var base1954 = new ol.layer.Image({
  opacity: 0.875,
  source: new ol.source.ImageStatic({
    url: 'images/base_layers/cropped_1954.jpg',
    projection: map.getView().getProjection(),
    imageExtent: ol.extent.applyTransform([-92.71768, 41.74621, -92.72255, 41.756],
      ol.proj.getTransform("EPSG:4326", "EPSG:3857"))
  })
});

function fill_markers_of_1954() {

}