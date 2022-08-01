// Initialize and add the map
var mapInfo;

function initMap() {
  // The location of Uluru
  const Kigali = { lat: -1.9529593223221073, lng: 30.066367514391228 };
  // The map, centered at Uluru
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: Kigali,
    disableDefaultUI: true,
  });
  mapInfo = map;
  // The marker, positioned at Uluru
 // const marker = new google.maps.Marker({
//    position: Kigali,
 //   map: map,
//  });
}

window.initMap = initMap;

