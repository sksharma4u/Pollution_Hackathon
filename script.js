mapboxgl.accessToken = 'pk.eyJ1Ijoic2FjaGluMjYxMiIsImEiOiJjbDUyNW5xc3MwY2FlM2xuem1pZjV3ZmJhIn0.WKixJ8mmeu3Yqywp4ipsow';
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/sachin2612/cl52ijwk6002w14nit8ky7ss1', // style URL

});


const nav = new mapboxgl.NavigationControl();
map.addControl(nav);

var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken
})
map.addControl(directions, 'top-left');