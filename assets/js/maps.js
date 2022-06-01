function initMap() {
    //Map initialised and put into the "map" div element
    var map = new google.maps.Map(document.getElementById("map"), {
        //default settings required: zoom and location to centre on
        zoom: 3,
        center: {
            lat: 46.619261,
            lng: -33.134766
        }
    });

    //Alphabet is used to cycle through for creating labels
    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        { lat: 40.785091, lng: -73.968285 },
        { lat: 41.084045, lng: -73.874245 },
        { lat: 40.754932, lng: -73.984016 }                        
    ];

    //This uses the javascript .map function to create a marker for each location in the locations array
    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            //The modulo here creates numbers 0 - 25 (effective 1 - 26)
            label: labels[i % labels.length]
        });
    });

    // var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
    // The above version of making a marker cluster was taken from the video and the old documentation
    
    // The below version of making a marker cluster was taken from the new video (required a CDN for module clusters)
    const markerCluster = new markerClusterer.MarkerClusterer({ map, markers });

}