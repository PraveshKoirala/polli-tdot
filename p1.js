function drawP1(){
  background("#F5F5F5");
  fill("rgba(255,204,0,0.5)");
  
  rect(0, 351, 390, 509);
  noStroke();
  image(polli, 128, 233, 154, 160);
  drawText("Polli’s Palette Coloring Game: Buzzing with Interactive Fun", 24, 50, 420, 296, 65, col='#1E376D', alignt='center', alignh='center', font=acumin);
  
  // drawText("Meet Polli, the bee from Tennessee", 16, 50, 439, 296,65, col='#1E376D', alignt='center', alignh='center', font=acumin);
  
  image(logo, 153, 681, 102, 103);
  
  // drawText("Created by Lose Design", 10, 27, 800, 347, 69, col='#1E376D', alignt='center', alignh='center', font=acumin);
}
