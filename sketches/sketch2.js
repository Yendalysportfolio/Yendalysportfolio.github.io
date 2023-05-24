function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(230);
  line(100, 0, 100, 300);
  line(200, 0, 200, 300);
  line(300, 0, 300, 300);
  
  if (mouseX > 0 && mouseX <= 100) {
    fill(0, 0, 255);
    textSize(50);
    text('😎 HEY!',20,160)
  }
  
  else if (mouseX > 100 && mouseX <= 200) {
    fill(255, 0, 0);
    textSize(50);
    text('👀 OHH!',130,160)
  }
  
  else if (mouseX > 200 && mouseX <= 300) {
    fill(0, 255, 0);
    textSize(50);
    text('😏HMM!',220,160)
  }
  
  
  else if (mouseX > 300 && mouseX <= 400) {
    fill(0,100,0);
    textSize(50);
    text('😳',330,160)
  }
  
}










