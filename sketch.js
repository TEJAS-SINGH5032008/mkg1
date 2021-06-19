var ground
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score = 0
var gameState = "play"

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas(600,600) 
  monkey = createSprite(90,500,10,10)
  monkey.addAnimation("monkey running",monkey_running)
  monkey.scale = 0.2
  ground = createSprite(300,550,600,10)
  foodGroup = new Group()
  obstacleGroup = new Group()
  

  
}


function draw() {
background("lightblue")
   if(monkey.isTouching(obstacleGroup)){
    monkey.velocityX = 0
    
    
  }
  text("my Score"+score,50,50)
  if(gameState==="play"){
    if(keyDown("space")){
      monkey.velocityY = -3 
    }
    monkey.velocityY = monkey.velocityY+0.1
   spawnBananas()
    spawnRocks()
     if(monkey.isTouching(obstacleGroup)){
        gameState = "end"
        
      }
if(monkey.isTouching(foodGroup)){
  score = score+1
  foodGroup .destroyEach()
}
  }
  
 if(gameState==="end"){
    obstacleGroup.destroyEach()
    foodGroup.destroyEach()
  } 
  monkey.collide(ground)
 
  drawSprites();
  
}


function spawnBananas() {
  //write code here to spawn the clouds
 if (frameCount % 60 === 0) {
    var banana = createSprite(600,320,40,10);
    banana.y = Math.round(random(320,500));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //adjust the depth
    
    //add each cloud to the group
    foodGroup.add(banana);
  }
}
function spawnRocks() {
  //write code here to spawn the clouds
 if (frameCount % 300 === 0) {
    var  rock = createSprite(600,510,40,10);
   
     rock.addImage(obstacleImage);
     rock.scale = 0.2;
     rock.velocityX = -3;
    
     //assign lifetime to the variable
     rock.lifetime = 200;
    
    //adjust the depth
    
    //add each cloud to the group
    obstacleGroup.add(rock);
  }
}





