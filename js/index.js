var map = L.map('map').setView([12.9165, 79.1325], 13);
// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);

//google map layer

googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});

googleStreets.addTo(map);

//satellite layer
googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});

googleSat.addTo(map);

var hotspotMarker;

hotspotMarker = new L.GeoJSON.AJAX('data/vellorePoints.geojson',{pointToLayer:returnHotspotMarkers}).addTo(map);

var hotspotIcon = L.icon({
    iconUrl: 'assets/icons/hospital.png',
    iconSize: [60, 60],
    iconAnchor: [27, 60],
    popupAnchor: [-3, -76],
  });

function returnHotspotMarkers(json,latlng){
    var jsonInfo = json.properties;
    if (jsonInfo.type == 'hospital') {
        var col = 'blue';
        
     }
     else{
        return null;
     }
    //  return L.circleMarker(latlng, { radius: 10, color: col }).bindTooltip("<h4>" + jsonInfo.Name + "</h4>" + "<h4>" + jsonInfo.type + "</h4>");
   // return L.circleMarker(latlng, { radius: 10, color: col }).on('click',function(e){
   //    openInfoPanel(jsonInfo.Name,'assets/garden.jpg',jsonInfo.description,'link');
   // });

//    return L.marker(latlng, {icon: hotspotIcon}).addTo(map).on('click',function(e){
//          openInfoPanel(jsonInfo.Name,'assets/garden.jpg',jsonInfo.description,'link');
//       });

return L.marker(latlng, {icon: hotspotIcon}).addTo(map).bindTooltip("<h4>" + jsonInfo.Name + "</h4>" + "<h4>" + jsonInfo.type + "</h4>");
  }