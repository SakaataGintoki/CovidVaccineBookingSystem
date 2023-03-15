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
            'coordinates': [87.6859, 26.6586]
        },
        'properties': {
            'title': 'Damak Multiple Campus',
            'description': 'Damak,Jhapa, Mechi  Nepal'
        }
    }, {
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [87.9704, 26.6401]
        },
        'properties': {
            'title': 'Mohanmaya Secondary School',
            'description': 'Birtamode, Jhapa, Mechi Nepal.'
        }
    }, {
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [87.2822, 26.8140]
        },
        'properties': {
            'title': 'Mahendra Multiple Campus',
            'description': 'Dharan,Sunsari, Koshi Nepal.'
        }
    }, {
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [87.2555, 26.6716]
        },
        'properties': {
            'title': 'Janta Multiple Campus',

            'description': 'Itahari,Sunsari, Koshi Nepal.'

        }
    }, {
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [87.1680, 26.6288]
        },
        'properties': {
            'title': 'Government of School Principal',

            'description': 'Innaruwa,Sunsari, Koshi Nepal.'

        }
    }, {
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [87.2847, 26.4625]
        },
        'properties': {
            'title': 'Adarsha Higher Secondary School',

            'description': 'Biratnagar,Morang, Koshi Nepal.'

        }
    }, {
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [87.0517, 27.1637]
        },
        'properties': {
            'title': 'Bhojpur Multiple Campus',

            'description': 'Bhojpur,Bhojpur, Koshi Nepal.'

        }
    }, {
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [87.3336, 27.0142]
        },
        'properties': {
            'title': 'Chaturbhuj Primary School',

            'description': 'Dhankuta,Dhankuta, Koshi Nepal.'

        }
    }, {
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [87.3019, 26.6554]
        },
        'properties': {
            'title': 'Itahari International College',

            'description': 'Sundar Haraicha,Morang, Koshi Nepal.'

        }
    }, {
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [87.60602, 27.36116]
        },
        'properties': {
            'title': 'Sinwa Higher Secondary School',

            'description': 'Taplejung,Taplejung, Mechi Nepal.'

        }
    }, {
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [86.6981, 26.7888]
        },
        'properties': {
            'title': 'Triyuga Higher Secondary School',

            'description': 'Gaighat,Udayapur, Sagarmatha Nepal.'

        }
    }, {
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [88.0707, 26.8945]
        },
        'properties': {
            'title': 'Fikkal Secondary School',

            'description': 'Fikkal,Illam, Mechi Nepal.'

        }
    }, {
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [88.1020, 26.6682]
        },
        'properties': {
            'title': 'Dhulabari Secondary School',

            'description': 'Dhulabari,Jhapa, Mechi Nepal.'

        }
    }, {
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [87.6200, 26.6651]
        },
        'properties': {
            'title': 'Urlabari Multiple Campus',

            'description': 'Urlabari,Morang, Koshi Nepal.'

        }
    }, {
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [88.0964, 26.5405]
        },
        'properties': {
            'title': 'Bhadrapur Secondary School',

            'description': ' Bhadrapur,Jhapa, Mechi Nepal.'

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