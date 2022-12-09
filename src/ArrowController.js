updateArrow()

function updateArrow(){
    let arrow = document.querySelector(".wrapper > div");
    let rotateValue = (globalCurrentCorrectedAlpha+90)
    /*if(rotateValue>360){ rotateValue -= 360 }*/
    arrow.style.cssText = 'transform: rotate(' + rotateValue +'deg)'
    //console.log(rotateValue)
    arrow.style.backgroundColor = '#f13c20';
}