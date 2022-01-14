import data from './clean_data/point_poly_analysis.json';
import L from 'leaflet';


function makeMap() {


  console.log(data);

  const element = document.createElement('div');
  element.id = 'map';
  document.body.appendChild(element);

  const options = {
    center: [40, -95],
    zoom: 4,
  };


  const map = L.map('map', options);

  L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png', {
    maxZoom: 20,
    attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
  }).addTo(map);

  function getColor(d) {
    return d > 2 ? '#E31A1C' :
      d > 5 ? '#FC4E2A' :
        d > 15 ? '#FD8D3C' :
          d > 30 ? '#FEB24C' :
            d > 50 ? '#FED976' :
              '#FFEDA0';
  }

  function style(feature) {

    return {
      fillColor: getColor(feature.properties.NUMPOINTS),
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
    };
  }
  L.geoJson(data).addTo(map)
}

export default makeMap;

