yearsArray = [1914, 1934, 1954]

$(function() {
    $( "#year_slider" ).slider({
        range: "min",
        value: 0,
        min: 0,
        max: yearsArray.length-1,
        slide: function(event, ui) {
            reset_and_refill(yearsArray[ui.value]);
        }
    })
});

var yr_now_text = document.createElement('div');
$(document).ready(function() {
    var value = $("#year_slider").slider("option","value");
    yr_now_text.innerHTML = "<div class='year_display'>"+yearsArray[value]+"</div>";
    $("#year_slider").find(".ui-slider-handle").append(yr_now_text);
});
// ^Sets initial values
// _Takes care of the rest
$(function() {
    $( "#year_slider" ).slider({
        slide: function(e, ui) {
            reset_and_refill(yearsArray[ui.value]);
            yr_now_text.innerHTML = "<div class='year_display'>"+yearsArray[ui.value]+"</div>";
            $("#year_slider").find(".ui-slider-handle").append(yr_now_text);
        }
    });
});

var yrs_elt = document.createElement('div');
yrs_elt.id = 'year_slider';
var YearSlider = new ol.control.Control({
	element: yrs_elt,
	target: 'map'
});