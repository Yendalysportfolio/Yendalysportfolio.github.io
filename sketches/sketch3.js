

function setup() {              //Run the setup Function
  bgImg = loadImage("Unknown.jpeg"); //Adds the forest background
  createCanvas(windowWidth, windowHeight); //Creat a canvas equal to Window size
  background(255);     //Set the backgorund to gray
  
}
    
function draw() {               //Run the Draw Function
  image(bgImg, 0, 0, width, height )  //The Ground
  noStroke(); //No stroke
  fill('green');   //Adds the green to the bottom
  rect(0,400,windowWidth,100); //The shape of the Window and size
  


  //The House
  fill('red'); //The shape of the house color red
  stroke('black');  //The outline of the house
  rect(40,200,220,200); //A rect to the top of the house other folor
  
   fill('red');     //The second folor
  stroke('black');  //Outline of the second folor
  rect(40,100,120,200);    //rect on the second folor
  

  //Windows
  fill('purple '); //The color of the windows
  strokeWeight(10);  // How think the outline of the windows are
  stroke('blue'); //The color of the outline and roof.
  
  rect(100,250,50,50);   //The outline of the house
  rect(180,250,50,50);   //The outline of the house
  rect(30,250,250,50);   //The outline of the house
   rect(300,200,100,20)  //The outline of the house
  fill('purple ');     //Outline of the second folor Window 
  strokeWeight(10);    //The outline of the house size
  stroke('blue');       //The outline of the house color
  
  rect(200,250,40,50);    //rect on the second folor
  rect(70,100,50,50);     //rect on the second folor
  rect(30,250,50,50);     //rect on the second folor
  //Triangle
  fill('pink');      //The roof color
  triangle(170,200, 200,100,270,200);   //The roof shape

  fill('pink');     //The roof color
  triangle(40,90, 200,130,70,60);   //The roof shape

  //rectangle
  fill('black');     //The door and color
  rect(140,350,30,50) //The shape of the door
}