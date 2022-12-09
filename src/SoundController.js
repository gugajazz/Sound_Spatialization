// instigate our audio context ~~~~~~~~~~~~~~~ 1

// for cross browser way
const AudioContext = window.AudioContext;
let audioCtx;
let listener;

let globalPlaying = false;
let globalPanning = 0
let stereoPanner

function init() {

    if(!audioCtx){
        audioCtx = new AudioContext();
        listener = audioCtx.listener;

        // Let's set the position of our listener based on where our boombox is.
        const posX = window.innerWidth/2;
        const posY = window.innerHeight/2;
        const posZ = 300;


        listener.positionX.value = posX;
        listener.positionY.value = posY;
        listener.positionZ.value = posZ-5;


        listener.forwardX.value = 0;
        listener.forwardY.value = 0;
        listener.forwardZ.value = -1;
        listener.upX.value = 0;
        listener.upY.value = 1;
        listener.upZ.value = 0;


        const pannerModel = 'HRTF';

        const innerCone = 40;
        const outerCone = 50;
        const outerGain = 0.4;

        const distanceModel = 'linear';

        const maxDistance = 20000;

        const refDistance = 1;

        const rollOff = 10;

        const positionX = posX;
        const positionY = posY;
        const positionZ = posZ;

        const orientationX = 0.0;
        const orientationY = 0.0;
        const orientationZ = -1.0;

        // let's use the class method for creating our panner node and pass in all those parameters we've set.

        const panner = new PannerNode(audioCtx, {
            panningModel: pannerModel,
            distanceModel: distanceModel,
            positionX: positionX,
            positionY: positionY,
            positionZ: positionZ,
            orientationX: orientationX,
            orientationY: orientationY,
            orientationZ: orientationZ,
            refDistance: refDistance,
            maxDistance: maxDistance,
            rolloffFactor: rollOff,
            coneInnerAngle: innerCone,
            coneOuterAngle: outerCone,
            coneOuterGain: outerGain
        })



        const track = audioCtx.createMediaElementSource(audioElement);


        // if track ends - an event is fired once the track ends via the audio api. We can listen for this and set the correct params on the html element
        audioElement.addEventListener('ended', () => {
            //audioElement.play(); // plays it on a loop
            //playButton.dataset.playing = 'false';
            globalPlaying = false;
            /*playButton.setAttribute( "aria-checked", "false" );*/
        }, false);

        // volume ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        const gainNode = audioCtx.createGain();
        gainNode.gain.value = 2

        /*const volumeControl = document.querySelector('[data-action="volume"]');
        volumeControl.addEventListener('input', function() {
            gainNode.gain.value = this.value;
        }, false);*/

        const pannerOptions = {pan: 0};
        stereoPanner = new StereoPannerNode(audioCtx, pannerOptions);
        /*const pannerControl = document.querySelector('[data-action="panner"]');
        pannerControl.addEventListener('input', function() {
            globalPanning = this.value;
            //console.log(globalPanning)
        }, false);*/

        track.connect(gainNode).connect(stereoPanner).connect(panner).connect(audioCtx.destination);

        /*let randPan = Math.random()
        randPan *= Math.round(Math.random()) ? 1 : -1;
        stereoPanner.pan.value = randPan
        console.log("randPan: " + randPan + "\n")*/
    }

    stereoPanner.pan.value = globalPanning
    //console.log("stereoPanner.pan.value" + stereoPanner.pan.value)
}


// BOOMBOX FUNCTIONALITY HERE ~~~~~~~~~~~~~~~~~~~~~~~~~~~ 2
const audioElement = document.querySelector('audio');

const playButton = document.querySelector('.tape-controls-play');

// play pause audio
/*playButton.addEventListener('click', playBeep, false);*/

function playBeep(pan) {
    globalPanning=pan
    init();


    // check if context is in suspended state (autoplay policy)
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }

    if (globalPlaying === false) {
        audioElement.play();
        globalPlaying = true;
        // if track is playing pause it
    }
}

