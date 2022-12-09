let gpsDisplayHandle = document.getElementById("gpsDisplay")
let gpsDistanceDisplayHandle = document.getElementById("gpsDistanceDisplay")
let pointArrayDisplayHandle = document.getElementById("pointArrayDisplay")
let fowardAlphaDegrees_handle = document.getElementById("fowardAlphaDegrees")
let pointsRangeHandle = document.getElementById("pointsRange")
pointsRangeHandle.oninput = function (){
    pointsRange = pointsRangeHandle.value
    //console.log(pointsRange)
}
let angleBufferHandle = document.getElementById("angleBuffer")
angleBufferHandle.oninput = function (){
    angleBuffer = angleBufferHandle.value
    //console.log(angleBuffer)
}
let intervalTimeHandle = document.getElementById("intervalTime")
intervalTimeHandle.oninput = function (){
    intervalTime = intervalTimeHandle.value
    //console.log(angleBuffer)
}
let numberOfUpdatesUntilRenderHandle = document.getElementById("numberOfUpdatesUntilRender")
numberOfUpdatesUntilRenderHandle.oninput = function (){
    numberOfUpdatesUntilRender = numberOfUpdatesUntilRenderHandle.value
    //console.log(angleBuffer)
}


let reset_button_handle = document.getElementById("reset_button");
let getClosestLocHandle = document.getElementById("getClosestLoc")
let saveLocHandle = document.getElementById("saveLoc")
let startButtonHandle = document.getElementById("startButton")
let stopButtonHandle = document.getElementById("stopButton"); //startButtonHandle.style.background='#f30427';
let renderCurrentLocHandle = document.getElementById("renderCurrentLoc")
