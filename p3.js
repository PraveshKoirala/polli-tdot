let p3Image;
let selectedColor = 0;
let drawOnce = 0;
let actions = [];

function isBlack(c){
  // console.log("The colors are ", red(c) + green(c) + blue(c) );
  if (red(c) + green(c) + blue(c) <= 100){
    return true;
  }
}

function colorEqual(c1, c2){
  if (abs (red(c1) - red(c2)) < 10 &&
      abs (blue(c1) - blue(c2)) < 10 &&
      abs (green(c1) - green(c2)) < 10
     )
    return true;
  return false;
}

function colorFill(cx, cy, c, o){
  let seen = {};
  let unseen = [];
  unseen.push([cx, cy]);
  let i = 0;
  while(unseen.length > 0){
    // console.log(unseen.length);
    let e = unseen.pop(0);
    let x = e[0]
    let y = e[1]
    
    // outside the boundary
    if (x < p3_c1.x || x > p3_c1.x+p3_c1.w 
        || y < p3_c1.y || y> p3_c1.y+p3_c1.h){
      
      i += 1;
      continue;
    }

    let thisPixel = getPixel(x, y);
    if (isBlack(thisPixel)){
      i += 1;
      // console.log("Met boundary, skipping")
      continue;
    }
    if (!colorEqual(thisPixel, o)){
      // console.log("Different color region encountered. Skipping...")
      // console.log(thisPixel.toString());
      // console.log(o.toString());
      i += 1;
      continue;
    }
      
    // set this color
    setPixel(x, y, c)
    seen[e]=1;

    // generate candidate points
    let c1 = [x+1, y];
    let c2 = [x-1, y];
    let c3 = [x, y+1];
    let c4 = [x, y-1];

    if (!(c1 in seen)){
      unseen.push(c1);
    }
    if (!(c2 in seen)){
      unseen.push(c2);
    }
    if (!(c3 in seen)){
      unseen.push(c3);
    }
    if (!(c4 in seen)){
      unseen.push(c4);
    }
    i += 1;
  }
}

function startFill(){
  loadPixels();
  cx = floor(mouseX);
  cy = floor(mouseY);
    
  thisPixel = getPixel(cx, cy)
  // Don't fill if region is black or the same color
  if (isBlack(thisPixel)){
    return;
  }
  
  // Don't fill if this region already filled.
  c = color(p3_colors[selectedColor].c);
  if (colorEqual(c, thisPixel)){
    // console.log("Same color, not filling").
    return;
  }
  console.log("Starting Fill.")
  // startFill
  actions.push([cx, cy, thisPixel, c]);
  colorFill(cx, cy, c, thisPixel);
  updatePixels();
}

function undo_fn(){
  if (actions.length == 0) return;
  a = actions.pop(0);
  colorFill(a[0], a[1], a[2], a[3]);
  updatePixels();
}


function drawP3(){
  noStroke();
  
  if (!drawOnce){
  background("#FFFFFF");
    
   
   image(p3Image, 0,141,396,441);
    drawOnce = 1;
  }
  image(back, 22, 56, 36, 36); 
  image(resets, 170, 51, 44, 44);  
  image(undo, 330, 56, 36, 36);
  
  drawText("Back", 16, 0, 110, 78, 46, col='#1E376D', alignt='center', alignh='center', font=acumin);
  
  drawText("Reset", 16, 0, 110, 385, 46, col='#1E376D', alignt='center', alignh='center', font=acumin);
  
  drawText("Undo", 16, 1, 110, 700, 46, col='#1E376D', alignt='center', alignh='center', font=acumin);
  
  fill("#FFFFFF");
  rect(0, 442+141, 500, 500);
  image(polli, 143,691,132,130) ;
  
  ellipseMode(CORNER);
  stroke("#000000")
  for (i=0; i<p3_colors.length; i++){
    if (selectedColor == i)
      strokeWeight(5);
    else
      strokeWeight(1);
    fill(p3_colors[i].c);
    drawEllipse(p3_colors[i]);
  }
}
