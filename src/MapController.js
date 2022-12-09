/*intervalId = window.setInterval(function (){
    renderMap(...allPoints)
}, intervalTime);*/


renderMap(null)

function createPoint(lat, lon){
    /*let lat = Point.lat;
    let lon = Point.lon;*/

    let fromProjection = new OpenLayers.Projection("EPSG:4326");   // Transform from WGS 1984
    let toProjection = new OpenLayers.Projection("EPSG:900913"); // to Spherical Mercator Projection

    return new OpenLayers.LonLat(lon, lat).transform( fromProjection, toProjection );
}

renderCurrentLocHandle.addEventListener('click', function(){
    renderMap(...allPoints)
});

function renderMap(...Point){

    if(allPoints[currentPoint]!==undefined){
        for(let i=0; i<allPoints.length; i++){
            allPoints[i].blue = false
        }
        allPoints[currentPoint].blue=true
    }
    else if(currentPoint===-1){
        for(let i=0; i<allPoints.length; i++){
            allPoints[i].blue = false
        }
        allPoints[allPoints.length-1].blue=true
    }

    let oldZoom = map.zoom  // the higher, the more zoomed in
    if(firstRun){
        oldZoom=7
        firstRun=false
    }
    map.destroy()
    map = new OpenLayers.Map("Map");

    let mapnik = new OpenLayers.Layer.OSM();
    let tempMarker

    map.addLayer(mapnik);
    let markers = new OpenLayers.Layer.Markers( "Markers" );
    map.addLayer(markers);
    /*map.removeLayer(map.getLayer("Markers" ))*/

    let size, offset, icon

    if(globalCurrenLocation!==null){
        size = new OpenLayers.Size(21,25);
        offset = new OpenLayers.Pixel(-(size.w/2), -size.h);
        icon = new OpenLayers.Icon('./img/marker-gold.png', size, offset);
        tempMarker = new OpenLayers.Marker(createPoint(globalCurrenLocation.lat, globalCurrenLocation.lon),icon)
        markers.addMarker(tempMarker);
    }



    if(Point[0]==null){
        //console.log("No points provided")
        if(globalCurrenLocation!==null) {
            map.setCenter(createPoint(globalCurrenLocation.lat, globalCurrenLocation.lon), oldZoom);
        }
        else{
            //console.log(oldZoom)
            map.setCenter(createPoint(39.522375, -8.177175), oldZoom); // somewere in the center of portugal
        }
    }
    else{
        //console.log("Points provided")
        for(let i=0; i<Point.length; i++){

            if(Point[i].blue){
                let size = new OpenLayers.Size(21,25);
                let offset = new OpenLayers.Pixel(-(size.w/2), -size.h);
                let icon = new OpenLayers.Icon('./img/marker-blue.png', size, offset);
                tempMarker = new OpenLayers.Marker(createPoint(Point[i].lat, Point[i].lon),icon)
                markers.addMarker(tempMarker);
            }
            else{
                tempMarker = new OpenLayers.Marker(createPoint(Point[i].lat, Point[i].lon))
                markers.addMarker(tempMarker);
            }

        }
        map.setCenter(createPoint(Point[Point.length-1].lat,Point[Point.length-1].lon),oldZoom)
        map.addLayer(markers);
    }
}


