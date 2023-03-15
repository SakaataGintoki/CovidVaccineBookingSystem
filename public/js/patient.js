mapboxgl.accessToken = 'pk.eyJ1IjoiYmliaGF2MTIiLCJhIjoiY2wwb3N1ZWJ3MTdyMTNqdGs3eHZ1OGF5cyJ9.yocNBZHxbxIY69reedT3ng';
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [87.2718, 26.6646, ], // starting position
    zoom: 13 // starting zoom

});
map.addControl(new mapboxgl.NavigationControl());
map.addControl(
    new MapboxDirections({
        accessToken: mapboxgl.accessToken
    }),
    'top-left'
);


// Add geolocate control to the map.
map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
        // When active the map will receive updates to the device's location as it changes.
        trackUserLocation: true,
        // Draw an arrow next to the location dot to indicate which direction the device is heading.
        showUserHeading: true
    })

);
const geojson = {
    'type': 'FeatureCollection',
    'features': [{
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [87.2718, 26.6646]
        },
        'properties': {
            'title': 'Himal Tamang',
            'description': 'Halgada Itahari-1, Sunsari'
        }
    }, {
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [87.2555, 26.6716]
        },
        'properties': {
            'title': 'Ramesh Ale',
            'description': 'Janta Busty, Itahari-5, Sunsari'
        }
    }, {
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [87.2643, 26.6439]
        },
        'properties': {
            'title': 'Nikhil Uprety',
            'description': 'Gaisar,Itahari-3 Sunsari .'
        }
    }, {
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [87.2457, 26.6774]
        },
        'properties': {
            'title': 'Bishika Karki',

            'description': '   Labipur Itahari-6,Sunsari.'

        }
    }, {
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [87.2471, 26.6769]
        },
        'properties': {
            'title': 'Roista Magar',

            'description': 'Balgram Itahari-2 Sunsari.'

        }
    }, {
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [87.2718, 26.6646]
        },
        'properties': {
            'title': 'Rajesh Hamal',

            'description': 'Fulbari Tole, Itahari-9 Sunsari.'

        }
    }, {
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [87.2840, 26.6668]
        },
        'properties': {
            'title': 'Ram Chaudhary',

            'description': 'Bhetghat Chowk Ithari-12 Sunsari.'

        }
    }, ]
};


// add markers to map
for (const feature of geojson.features) {
    // create a HTML element for each feature
    const el = document.createElement('div');
    el.className = 'marker';

    // make a marker for each feature and add it to the map
    new mapboxgl.Marker(el)
        .setLngLat(feature.geometry.coordinates)
        .setPopup(
            new mapboxgl.Popup({
                offset: 25
            }) // add popups
            .setHTML(
                `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
            )
        )
        .addTo(map);
}
// const isDragRotateEnabled = map.dragRotate.isEnabled();
// Slow down zoom of mouse wheel
map.scrollZoom.setWheelZoomRate(1 / 600);