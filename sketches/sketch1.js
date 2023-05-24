function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

//Draw headshape
fill("pink");
ellipse(200,200,300,400)
  
  //eye and eye color
fill("black")
circle(150, 170, 40);
circle(250,170,40);

  //smile
noFill();
strokeWeight(3);
arc(200, 230, 80, 50,0, PI);
  
line(130,120,270,120)
line(150,110,240,110) 
  
  fill('black')
triangle(195,350,144,329,146,368)
triangle(195,350,260,325,260,360)
  
  //
  textSize(20)
  strokeWeight(1)
  fill(0,0,0)
  text('mouseX:'+mouseX,0,20)
  text('mouseY:'+mouseY,0,40)
  
  
  
  
  
}