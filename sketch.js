var bgI,fl,flI,flyI,flDI,pipeI,pipe
var invG,pipeGroup

function preload(){
  bgI=loadImage("images/bg.jpg")
  flI=loadImage("images/flappy.png")
  flyI=loadImage("images/fl.png")
  flDI=loadImage("images/flD.png")
  pipeI=loadImage("images/pipe.png")
 

}

function setup() {
  
  createCanvas(390,500);
  
  
  
  
  fl=createSprite(200, 300, 50, 50);
  fl.addImage(flI)
  fl.scale=0.2


  invG=createSprite(200, 500, 600,180); 



  

pipeGroup=createGroup();

  //fl.setCollider("rectangle",0,0,80,100)
  
  if(frameCount%20===0){
    pipe=createSprite(random(100,100))
    pipe.addImage(pipeI)
    //pipe.scale=0.5
    pipe.velocityX=-10 
    // pipe.lifetime=120
    pipeGroup.add(pipe)

    // pipe.depth = invG.depth;
    // invG.depth = invG.depth + 1;
    
  }
  
  
  
}

function draw() {
  background(bgI); 
  fl.collide(invG);
  spawnPipes()

  
  if(keyWentDown(32)){
    fl.velocityY=-10
    fl.addImage(flyI)
    
    
     } 
     else{
       fl.addImage(flI)
       fl.scale=0.1   
       fl.velocityY = fl.velocityY + 0.8 
     }

     if(fl.isTouching(invG)){
      fl.addImage(flDI)
    }
    else{
      fl.addImage(flI)
    }
    pipeGroup.add(pipe);

  drawSprites();
}
function spawnPipes(){
  if (frameCount % 60 === 0) {
  pipe = createSprite(600,90,40,10);
  pipe.y = Math.round(random(200,250));
  pipe.addImage(pipeI);
  // cloud.scale = 0.5;
  pipe.velocityX = -3;
  }
}