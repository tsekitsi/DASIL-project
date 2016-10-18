/* http://openlayers.org/en/latest/examples/popup.html */

// Add a click handler to hide the popup.
// @return {boolean} Don't follow the href.
closer.onclick = function() {
    popup.setPosition(undefined);
    closer.blur();
    return false;
};

/*
map.on('singleclick', function(evt) {
    var coordinate = evt.coordinate;
    console.log(coordinate);
    content.innerHTML = '<p>Helloooo</p>';
    popup.setPosition(coordinate);
});
*/