const mapContainer = document.getElementById('map');

if (mapContainer) {
    const accessToken = window.__MAPBOX_ACCESS_TOKEN__;

    if (!window.mapboxgl) {
        console.warn('[map] mapbox-gl is not loaded.');
    } else if (!accessToken) {
        console.warn(
            '[map] Mapbox access token is not configured. Set NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN to enable the map.'
        );
    } else {
        window.mapboxgl.accessToken = accessToken;
        const map = new window.mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/light-v11',
            center: [-0.108968, 51.492933],
            zoom: 14,
            cooperativeGestures: true,
        });

        const geojson = {
            type: 'FeatureCollection',
            features: [
                {
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [-0.108968, 51.492933],
                    },
                },
            ],
        };

        for (const feature of geojson.features) {
            // create a HTML element for each feature
            const el = document.createElement('div');
            el.className = 'marker';

            // make a marker for each feature and add to the map
            new window.mapboxgl.Marker(el)
                .setLngLat(feature.geometry.coordinates)
                .addTo(map);
        }
    }
}