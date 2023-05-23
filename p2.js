let settingPressed = false;

function imgPressed(img_id){
  page = 3;
  if (img_id == 1){
    p3Image = img1;
  } else {
    p3Image = img2;
  }
}

function drawP2(){
  noStroke();
  background("#FFFFFF");
  drawText("LIBRARY", 32, 79, 86, 233, 76, col='#1E376D', alignt='center', alignh='center', font=acumin);
  
  drawText("CLICK ON THE IMAGE TO START COLORING", 16, 62, 130, 284, 89, col='#1E376D', alignt='center', alignh='center', font=acumin);
  
  
  // create a new graphics
  let g1 = createGraphics(240, 240);
  g1.circle(120, 120, 240);
  g1.canvas.getContext("2d").clip();
  g1.image(img1, 0, 0, 240, 240);
  image(g1, 75, 213, 240, 240);
  
  g1.image(img2, 0, 0, 240, 240);
  image(g1, 75, 513, 240, 240);
  
  
  
  image(settings, 335, 36, 33, 33);
  ellipseMode(CORNER);
  noFill();
  stroke('#FFCC00');
  strokeWeight(3);
  drawEllipse(p2_c1);
  drawEllipse(p2_c2);
  
  noStroke();
  
  if (settingPressed){
    
    fill("rgba(0, 0, 0, 0.5)");
    rect(0, 0, 108, 910);
    fill("#95A4BD")
    rect(108, 0, 330, 910);
    
    drawText("SETTINGS", 30, 120, 98, 201, 40, col='#FFCC00', alignt='center', alignh='left', font=acumin);
   
    drawText("About", 20, 120, 130, 211, 30, col='#FFCC00', alignt='center', alignh='left', font=acumin);
    
    drawText("Help", 20, 120, 150, 120, 30, col='#FFCC00', alignt='center', alignh='left', font=acumin);
    
    drawText("Learn", 20, 120, 170, 211, 30, col='#FFCC00', alignt='center', alignh='left', font=acumin);
    
  }
}
