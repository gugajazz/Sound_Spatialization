// gps
class Point{
    constructor(latitude, longitude, heading=null, blue=false) {
        this.lat = latitude
        this.lon = longitude
        this.heading = heading
        this.blue = blue
    }
}
let globalCurrenLocation = null // todo make everyting use this
let options = {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: Infinity
};
let allPoints = []
let currentPoint = 0
let pointsRange = 5 // in meters

// orientation
let globalCurrentCorrectedAlpha=0 // 0 is the alpha we were aiming at when reset() was last ran (aka when we start the run / mapping the run)
let globalCurrentAlpha=0 // 0 set when page loads and could point anywere
let fowardAlphaDegrees=0 // globalCurrentAlpha angle used to determine globalCurrentCorrectedAlpha. set when reset is pressed
let alphaToFollow = 0 // angle you need to follow to get to the next point. based of globalCurrentCorrectedAlpha
let angleBuffer = 10

// map ( duh )
let map = new OpenLayers.Map("Map");
let firstRun = true
let numberOfUpdatesUntilRender = 20
let numberOfUpdates = numberOfUpdatesUntilRender

// communication
let intervalId // handle for the timed loop
let intervalTime = 2000 // time in ms between sound cues


function showDivSettings() {
    // document.getElementById('welcomeDiv').style.display = "block";
    let x = document.getElementById('settingsDiv');
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function showDivHelp() {
    let x = document.getElementById('helpDiv');
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
 

