
function mouseInside(x, y, w, h){
  if (mouseX >= x && mouseX <= x+w && 
     mouseY>=y && mouseY <= y+h){
    return true;
  }
  return false;
}

function mouseInsideRect(r){
  return mouseInside(r.x, r.y, r.w, r.h);
}

function mouseClicked() {
  if (page == 2){
    if (mouseInside(335, 36, 33, 33)){
      settingPressed = true;
    }
    else if (mouseX <= 108) {
      settingPressed = false;
    }
    
    if (settingPressed && mouseInsideRect(p2_learn)){
        window.open("https://www.tn.gov/tdot/environmental-home/environmental-highway-beautification-office/beautification-pollinator-habitat-program.html", "_blank");
    }
     if (settingPressed && mouseInsideRect(p2_help)){
        window.open("https://lose.design/contact-us/", "_blank");  
   
    }
    
     if (settingPressed && mouseInsideRect(p2_about)){
        window.open("https://lose.design/about-us/", "_blank");  
   
    }
    if (!settingPressed){
      if (mouseInsideRect(p2_c1)){
        imgPressed(1);
      }
      else if (mouseInsideRect(p2_c2)){
        imgPressed(2);
      }  
    }
    
  }
  // prevent default
  else if (page == 3){
    for (i=0; i<p3_colors.length; i++){
      if (mouseInsideRect(p3_colors[i])){
        selectedColor = i;
      }
      else if (mouseInsideRect(p3_c1)){
        startFill();
      }
    }
     if (mouseInsideRect(p3_back)){
        page = 2;
        drawOnce = 0;
     }
     if (mouseInsideRect(p3_resets)){
        page = 3;
        drawOnce = 0;
     }
    if (mouseInsideRect(p3_undo)){
       undo_fn();
    }
    
  }
  return false;
}

function drawText(t, size, sx, sy, bx, by, col=0,
                  alignt='center', alignh='center', font=''){
  fill (col);
  textSize(size);
  textAlign(alignh);
  textFont(font);
  text(t, sx, sy, bx, by);
  
}

function drawEllipse(e){
  ellipse(e.x, e.y, e.w, e.h);
}


function getPixel (x, y) {
  var colour = [];
  d = pixelDensity();
  for (var i = 0; i < 1; ++i) {
    for (var j = 0; j < 1; ++j) {
      let idx = 4 * ((y * d + j) * width * d + (x * d + i));
      colour[0] = pixels[idx];
      colour[1] = pixels[idx+1];
      colour[2] = pixels[idx+2];
      colour[3] = pixels[idx+3];
    }
  }
  return color(colour[0], colour[1], colour[2]);
}

function setPixel (x, y, colour) {
  d = pixelDensity();
  for (var i = 0; i < d; ++i) {
    for (var j = 0; j < d; ++j) {
      let idx = 4 * ((y * d + j) * width * d + (x * d + i));
      pixels[idx]   = red(colour);
      pixels[idx+1] = green(colour);
      pixels[idx+2] = blue(colour);
      // pixels[idx+3] = colour[3];
    }
  }
}
