var enmy, bacteria, fru1, knife, kn, fruits, enemy, r, score; 
var fruitGroup;
var enemyGroup;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var score;

function preload(){
  enmy = loadImage("alien2.png");
  kn = loadImage("sword.png");
  fruit1 = loadImage("fruit1.png");
  fruit2 = loadImage("fruit2.png");
  fruit3 = loadImage("fruit3.png");
  fruit4 = loadImage("fruit4.png");
  gameO = loadImage("gameover.png");
  knsound = loadSound("knifeSwooshSound.mp3");
  ensound = loadSound("gameover.mp3");
}

function setup(){
 createCanvas(500, 400);
 knife = createSprite(200, 200, 20, 20);
 knife.addImage(kn);
 knife.scale = 0.75 
    
 score = 0;
  
 fruitsGroup = new Group();
 enemyGroup = new Group();
}

function draw(){
 background("lightblue");
  
    if (gameState === PLAY){
  if (World.frameCount % 80 === 0){
    fru1 = createSprite(600, 500, 20, 20);
    fru1.scale = 0.2
    r = Math.round(random(1,4));
  if(r == 1){
    fru1.addImage(fruit1);
  }else if(r == 2){
    fru1.addImage(fruit2);
  }else if (r == 3){
    fru1.addImage(fruit3);
  }else if (r == 4){
    fru1.addImage(fruit4);
  }
    fru1.y = Math.round(random(50, 340));
    fru1.velocityX = -7;
    fru1.lifetime = 100;
    fruitsGroup.add(fru1);
  } 
    knife.y = World.mouseY
    knife.x = World.mouseX 
    
    if (knife.isTouching(fruitsGroup)){
      score = score+2
      knsound.play();
      fruitsGroup.destroyEach();
    }
   if (knife.isTouching(enemyGroup)){
    gameState = END;
    ensound.play(); 
  }   
      ene();
      } 

  knife.y = World.mouseY
  knife.x = World.mouseX
    
if (gameState === END){
  knife.addImage(gameO);
  knife.scale = 1.5
  knife.x = 200;
  knife.y = 200; 
  fruitsGroup.destroyEach();
  enemyGroup.destroyEach();
 }
  
  drawSprites();
  
 textSize(20)
 text("Score: "+ score, 400,40);
}
function ene (){
  if (World.frameCount % 200 === 0){
    enemy = createSprite(600, 500, 20, 20);
    enemy.addImage(enmy);
    enemy.y = Math.round(random(100, 300));
    enemy.velocityX = -7;
    enemy.lifetime = 100;
    enemy.scale = 1
    enemyGroup.add(enemy)  
    }
}
