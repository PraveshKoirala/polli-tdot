let polli;
let jumble;
let acumin;
let img1, img2;
let resets, back, settings, undo;

let page = 3;
let startTime;

// This fixed it, preferably this would be hidden away though
document.addEventListener('touchstart', {});
/* prevents the mobile browser from processing some default
 * touch events, like swiping left for "back" or scrolling
 * the page.
 */
function touchStarted(){
  return false;
}

function touchMoved(){
  return false;
}

function preload() {
  polli = loadImage('assets/polli.png');
  acumin = loadFont('assets/acumin.ttf');
  logo = loadImage('assets/polli-logo.png');
  back = loadImage('assets/back.png');
  resets = loadImage('assets/reset.png');
  img1 = loadImage('assets/img1.jpg');
  img2 = loadImage('assets/img2.jpeg');
  undo = loadImage('assets/undo.png');
  settings=loadImage('assets/settings.png');
  startTime = second();
  p3Image = img1;
}

function setup() {
  // pixelDensity(1);
  createCanvas(390, 844);
}


function draw() {
  if (page == 1) {
    drawP1();
    let timeElapsed = second() - startTime;
    
    if (timeElapsed < 0 ){
      timeElapsed = timeElapsed + 60;
    }
    
    if (timeElapsed >= 5){
      page = 2;
    }
  }
  else if (page == 2){
    drawP2();
  }
  else if (page == 3){
    drawP3();
  }
}

