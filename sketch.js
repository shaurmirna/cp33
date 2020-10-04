var Engine = Matter.Engine,
  World = Matter.World,
   Events = Matter.Events,
   Bodies = Matter.Bodies;
 
var particles ;
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var score =0;
var turn =0;
var gameState =start;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
 // line = new Grounds(width/2,480,width,5);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  //line.display();
  ground.display();
  noStroke();
        textSize(35)
        fill("white")
        text("Score : " + score, 10, 30)
        text("Turn : " + turn , 300, 30)
        textSize(30)
        text("500" , 15, 540)
        text("500" ,95, 540)
        text("500" ,175, 540)
        text("500" , 255, 540)
        text("100" , 335, 540)
        text("100" , 415, 540)
        text("100" ,495, 540)
        text("200" , 575, 540)
        text("200" , 655, 540)
        text("200" , 735, 540)

  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  
//for score 500
if (particles!=null){
  particles.display();

  if(particles.body.position.y>760){

 if(particles.body.position.x<335){
  score= score + 500;
  particles=null;
  
 }

  }

  if (turn>=10){
    gameState="end"
    textSize(45)
    text("GAME OVER " , 200,350);
   // World.remove(particles);
  }
}

// for score 100

if (particles!=null){
  particles.display();

  if(particles.body.position.y>760){

 if(particles.body.position.x<336<574){
  score= score+ 100;
  particles=null;
  
 }

  }
  if (turn>=10){
    gameState="end"
    textSize(45)
    text("GAME OVER " , 200,350);
   
  }
}
 // for score 200 
if (particles!=null){
  particles.display();

  if(particles.body.position.y>762){

 if(particles.body.position.x<575){
  score= score + 200;
  particles=null;
  
 }

  }
  if (turn>=10){
    gameState="end"
    textSize(45)
    text("GAME OVER " , 200,350);
   
  }
}




   for (var k = 0; k < divisions.length; k++)
{
  divisions[k].display(); 
}

}


function mousePressed()
{
if (gameState!=="end")
{
 
  turn++;
  particles= new Particle(mouseX,10,10,10);
 
}
}