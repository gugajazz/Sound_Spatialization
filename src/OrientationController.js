window.addEventListener("deviceorientation", updateCorrectedAlpha);
function updateCorrectedAlpha(event){
    globalCurrentCorrectedAlpha=event.alpha-fowardAlphaDegrees
    globalCurrentAlpha = event.alpha
    if(globalCurrentCorrectedAlpha<0){
        globalCurrentCorrectedAlpha=360+globalCurrentCorrectedAlpha
    }
    //console.log("GCCA: " + globalCurrentCorrectedAlpha + " GCA: " + globalCurrentAlpha)
    updateArrow()
}



reset_button_handle.addEventListener("click", reset);
function reset(){
    //console.log(event.alpha)
    fowardAlphaDegrees=globalCurrentAlpha
    fowardAlphaDegrees_handle.value=globalCurrentAlpha
}

function changeHeadingAtPoint(newFowardAlpha){
    //console.log(event.alpha)

    /*fowardAlphaDegrees+=newFowardAlpha
    if(fowardAlphaDegrees>360){
        fowardAlphaDegrees-=360
    }
    fowardAlphaDegrees_handle.value=fowardAlphaDegrees*/
    fowardAlphaDegrees=newFowardAlpha
    fowardAlphaDegrees_handle.value=fowardAlphaDegrees
}







