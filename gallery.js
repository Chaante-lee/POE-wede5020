// Initialize the map and set the view to a given location and zoom

const map = L.map('map').setView([-25.7479, 28.2293], 13); // Example: Pretoria, South Africa



// Add OpenStreetMap tiles

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',

}).addTo(map);



// SPCA locations countrywide

const locations = [

    { name: "sandton SPCA", coords: [-26.09417, 28.08774] },

    { name: "Durban SPCA", coords: [-29.80373294091274, 30.994008983321326] },

    { name: "Cape of Good Hope SPCA", coords: [-34.04076736660267, 18.49899346813675] },

];



// Add markers dynamically

locations.forEach(location => {

    L.marker(location.coords)

        .addTo(map)

        .bindPopup(`<b>${location.name}</b>`)

        .openPopup();

});



// add a circle to highlight a region

L.circle([-25.7479, 28.2293], {

    color: 'blue',

    fillColor: '#30f',

    fillOpacity: 0.2,

    radius: 500, // in meters

}).addTo(map);
