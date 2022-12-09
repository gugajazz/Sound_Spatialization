startButtonHandle.addEventListener("click", function (){
    // startButtonHandle.style.background='#25c91f';
    intervalId = window.setInterval(direct, intervalTime);
});

stopButtonHandle.addEventListener("click", function (){
    // startButtonHandle.style.background='#f30427';
    clearInterval(intervalId)
});

function direct(){
    if(allPoints[currentPoint+1]===undefined) { return }

    checkActivePoint()

    if(globalCurrentCorrectedAlpha>angleBuffer && globalCurrentCorrectedAlpha<=180){
        playBeep(1)
        //console.log("Move right " + globalCurrentCorrectedAlpha)
    }
    else if(globalCurrentCorrectedAlpha<(360-angleBuffer) && globalCurrentCorrectedAlpha>180){
        playBeep(-1)
        //console.log("Move left " + globalCurrentCorrectedAlpha)
    }
    else{
        //console.log("Go straight " + globalCurrentCorrectedAlpha)
    }
}

function checkActivePoint(){
    if(determineIfInPointsRange(currentPoint+1)){
        currentPoint++

        if(currentPoint+1===allPoints.length){ // did a loop
            currentPoint=-1
        }

        //console.log("Current point is now: "+currentPoint)
        if(currentPoint===-1){
            changeHeadingAtPoint(allPoints[allPoints.length-1].heading)
        }
        else{
            changeHeadingAtPoint(allPoints[currentPoint].heading)
        }
        renderMap(...allPoints)
    }
}