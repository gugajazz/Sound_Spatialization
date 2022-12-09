saveLocHandle.onclick = function (){
    let options = {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: Infinity
    };

    function success(pos) {
        let crd = pos.coords;

        gpsDisplayHandle.value = gpsDisplayHandle.value + "\n" + 'Your current position is:' +
            '\nLatitude : ' + crd.latitude +
            '\nLongitude: ' + crd.longitude +
            '\nMore or less' + crd.accuracy + 'meters.'


        /*allPoints.push(new Point(crd.latitude, crd.longitude, globalCurrentCorrectedAlpha))*/
        allPoints.push(new Point(crd.latitude, crd.longitude, globalCurrentAlpha))
        pointArrayDisplayHandle.value = ""
        for(let p of allPoints){
            pointArrayDisplayHandle.value += "[" + p.lat + " " + p.lon + " " + p.heading + "],\n"
        }

        // Update the map
        renderMap(...allPoints)
    }

    function error(err) {
        gpsDisplayHandle.value =  gpsDisplayHandle.value + `\nERROR(${err.code}): ${err.message}`
    }

    navigator.geolocation.getCurrentPosition(success,error,options)
}

/*getClosestLocHandle.onclick = getClosestPoint;*/
function getClosestPoint (){
    if(allPoints[0]===undefined || allPoints===null || allPoints==={}) { console.log("empty"); return }


    let options = {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: Infinity
    };

    let maxDistance=9999999;
    let minIndex

    function successClosest(pos){
        let crd = pos.coords;
        for(let i=0; i<allPoints.length; i++){
            if((haversineDistance(new Point(crd.latitude,crd.longitude), new Point(allPoints[i].lat,allPoints[i].lon))) < maxDistance){
                maxDistance=haversineDistance(new Point(crd.latitude,crd.longitude), new Point(allPoints[i].lat,allPoints[i].lon));
                minIndex=i

                console.log("minindex " + minIndex + "\n")
                //console.log("haversineDistance " + haversineDistance(new Point(crd.latitude,crd.longitude), new Point(allPoints[i].lat,allPoints[i].lon)))


            }
            else {
                //console.log("else")
            }
        }

        // reset all to red
        for(let i=0; i<allPoints.length; i++){
            allPoints[i].blue = false
        }
        allPoints[minIndex].blue=true
        renderMap(...allPoints)


    }

    function error(){
        //console.log("Error getting location")
        return null
    }
    navigator.geolocation.getCurrentPosition(successClosest,error,options)
}



function determineIfInPointsRange(pointIndex) {
    if (allPoints[pointIndex] === undefined) {
        //console.log("empty");
        return
    }

    if ((haversineDistance(
        new Point(globalCurrenLocation.lat, globalCurrenLocation.lon),
        new Point(allPoints[pointIndex].lat, allPoints[pointIndex].lon))) <= pointsRange
    ) {
        //console.log("Were inside the point's range \n")
        return true
    } else {
        //console.log("Not inside the point's range \n")
        return false
    }
}

// Converts from degrees to radians.
function toRadians(degrees) {
    return degrees * Math.PI / 180;
}

// Converts from radians to degrees.
function toDegrees(radians) {
    return radians * 180 / Math.PI;
}


function haversineDistance(coords1, coords2) {
    function toRad(x) {
        return x * Math.PI / 180;
    }

    let lon1 = coords1.lon
    let lat1 = coords1.lat;

    let lon2 = coords2.lon;
    let lat2 = coords2.lat;

    //console.log(lon1+' ' +lat1+' ' +lon2+' ' +lat2)

    let R = 6371; // km

    let x1 = lat2 - lat1;
    let dLat = toRad(x1);
    let x2 = lon2 - lon1;
    let dLon = toRad(x2)
    let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let d = R * c;

    return d*1000 // distance in meters
}

if('geolocation' in navigator) {
    function error() {
        console.log("Error watchPosition")
        return null
    }

    navigator.geolocation.watchPosition(watchPosition, error, options)

    function watchPosition(position){
        globalCurrenLocation = new Point(position.coords.latitude, position.coords.longitude)

        //console.log("latitude: " + position.coords.latitude + "longitude: " + position.coords.longitude);
        gpsDisplayHandle.value = "lat: " + position.coords.latitude + " long: " + position.coords.longitude

        if(numberOfUpdates===0){
            renderMap(...allPoints)
            numberOfUpdates=numberOfUpdatesUntilRender
        }
        else {
            numberOfUpdates--
        }
        //console.log(numberOfUpdates)

        if(allPoints[currentPoint+1]!=null){
            gpsDistanceDisplayHandle.value =
                haversineDistance(new Point(position.coords.latitude,position.coords.longitude),
                    new Point(allPoints[currentPoint+1].lat, allPoints[currentPoint+1].lon)) // porta da resi
        }
        else {
            gpsDistanceDisplayHandle.value = "No next point to track"
        }
    }
} else {
    console.log("GPS not available\n");
}