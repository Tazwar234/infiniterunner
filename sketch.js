var player, playerImg, player_jmp;
var ground , groundImg, invisibleGround;
function preload(){
groundImg = loadImage('ground.png')
playerImg = loadImage('player.png')
player_jmp = loadAnimation('playerjump1.png', 'playerjump2.png', 'playerjump3.png','playerjump4.png', 'playerjump5.png', 'playerjump6.png')
}

function setup() {
createCanvas(windowWidth, windowHeight)
 ground = createSprite(800, windowHeight/2 + 300, 10000, 500)
 invisibleGround = createSprite(0, windowHeight/2 + 70, 1000, 1)
 //invisibleGround.visible = false;
 invisibleGround.debug = true;
 ground.addImage('ground',groundImg)
 ground.scale = 2.8
 player = createSprite(200, windowHeight/2 + 220 , 30, 30);
 player.addAnimation('player', playerImg)
 player.addAnimation('jumping', player_jmp)
 player.scale = 1.25
}

function draw() {
    background('lightblue')
    
    if (keyDown('UP_ARROW') || keyDown('space') && player.y >= windowHeight/2 + 220){
        player.velocityY  = -15;
              
    }
    if (player.y < windowHeight/2 + 220){
        player.changeAnimation('jumping', player_jmp)
    }
    if (player.y >= windowHeight/2 + 220){
        player.changeAnimation('player', playerImg)
    }
    ground.velocityX = -10
    if (ground.x < 200){
        ground.x = ground.width/2;
    }
    console.log(player.y)
    player.velocityY = player.velocityY + 0.8
    player.collide(invisibleGround)
    
    
     
    
 drawSprites(); 
}