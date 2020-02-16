var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["e859f5b9-a060-49fe-9ae4-1092babf4572","76580cb3-7b35-44a5-b96b-096774c7db54","bc16240f-9d46-4aa0-b5db-ca2bffba4dd9"],"propsByKey":{"e859f5b9-a060-49fe-9ae4-1092babf4572":{"name":"carromboard.jpg_1","sourceUrl":"assets/v3/animations/yIf_x_9frzaEtQjxqsMDtizek00nrIXYOTkEdZAgTm4/e859f5b9-a060-49fe-9ae4-1092babf4572.png","frameSize":{"x":300,"y":300},"frameCount":1,"looping":true,"frameDelay":4,"version":"vdLTfQeuowQ59q1sOzoGOGVd7n4Te1Z2","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":300},"rootRelativePath":"assets/v3/animations/yIf_x_9frzaEtQjxqsMDtizek00nrIXYOTkEdZAgTm4/e859f5b9-a060-49fe-9ae4-1092babf4572.png"},"76580cb3-7b35-44a5-b96b-096774c7db54":{"name":"striker 2.jpg_1","sourceUrl":null,"frameSize":{"x":225,"y":225},"frameCount":1,"looping":true,"frameDelay":12,"version":"Unm2N6xc3eZhCUSA7l8Nrl0dXCa_294x","loadedFromSource":true,"saved":true,"sourceSize":{"x":225,"y":225},"rootRelativePath":"assets/76580cb3-7b35-44a5-b96b-096774c7db54.png"},"bc16240f-9d46-4aa0-b5db-ca2bffba4dd9":{"name":"coin","sourceUrl":"assets/v3/animations/yIf_x_9frzaEtQjxqsMDtizek00nrIXYOTkEdZAgTm4/bc16240f-9d46-4aa0-b5db-ca2bffba4dd9.png","frameSize":{"x":138,"y":142},"frameCount":1,"looping":true,"frameDelay":4,"version":"mHcSr38MSqNz1LGRXjkn.vJNwlF5Cz_F","loadedFromSource":true,"saved":true,"sourceSize":{"x":138,"y":142},"rootRelativePath":"assets/v3/animations/yIf_x_9frzaEtQjxqsMDtizek00nrIXYOTkEdZAgTm4/bc16240f-9d46-4aa0-b5db-ca2bffba4dd9.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var carromBoard = createSprite(200,200,200,200);
carromBoard.setAnimation("carromboard.jpg_1");
carromBoard.scale = 1.1;

var line1 = createSprite(35,200,5,250);
line1.shapeColor = "black";

var line2 = createSprite(200,37,250,5);
line2.shapeColor = "black";

var line3 = createSprite(363,200,5,250);
line3.shapeColor = "black";

var line4 = createSprite(200,363,250,5);
line4.shapeColor = "black";

var player = createSprite(200,200,20,20);
player.setAnimation("striker 2.jpg_1");
player.scale = 0.2;

var coin1 = createSprite(195,145,10,10);
coin1.setAnimation("coin");
coin1.scale = 0.1;

var coin2 = createSprite(135,200,10,10);
coin2.setAnimation("coin");
coin2.scale = 0.1;

var coin3 = createSprite(195,265,10,10);
coin3.setAnimation("coin");
coin3.scale = 0.1;

var coin4 = createSprite(260,200,10,10);
coin4.setAnimation("coin");
coin4.scale = 0.1;

function draw() {
  background("white");
  
  if (keyDown("UP_ARROW")) {
    player.velocityX = 0;
    player.velocityY = -5;
  }
    
  if (keyDown(DOWN_ARROW)) {
    player.velocityX = 0;
    player.velocityY = 5;
  }
    
  if (keyDown("LEFT_ARROW")) {
    player.velocityX = -5;
    player.velocityY = 0;
  }
  
  if (keyDown("RIGHT_ARROW")) {
    player.velocityX = 5;
    player.velocityY = 0;
  }
    
  coin1.bounceOff(line1);
  coin1.bounceOff(line2);
  coin1.bounceOff(line3);
  coin1.bounceOff(line4);
  
  coin2.bounceOff(line1);
  coin2.bounceOff(line2);
  coin2.bounceOff(line3);
  coin2.bounceOff(line4);
  
  coin3.bounceOff(line1);
  coin3.bounceOff(line2);
  coin3.bounceOff(line3);
  coin3.bounceOff(line4);
  
  coin4.bounceOff(line1);
  coin4.bounceOff(line2);
  coin4.bounceOff(line3);
  coin4.bounceOff(line4);
    
  player.bounceOff(line1);
  player.bounceOff(line2);
  player.bounceOff(line3);
  player.bounceOff(line4);
  
  if (player.bounce(coin1)) {
    
    if (keyDown("UP_ARROW")) {
      coin1.velocityX = 0;
      coin1.velocityY = -1;
    }
    
    if (keyDown("DOWN_ARROW")) {
      coin1.velocityX = 0;
      coin1.velocityY = 1;
    }
    
    if (keyDown("LEFT_ARROW")) {
      coin1.velocityX = -1;
      coin1.velocityY = 0;
    }
    
    if (keyDown("RIGHT_ARROW")) {
      coin1.velocityX = 1;
      coin1.velocityY = 0;
    }
    }
    
  if (player.bounce(coin2)) {
    
    if (keyDown("UP_ARROW")) {
      coin2.velocityX = 0;
      coin2.velocityY = -1;
    }
    
    if (keyDown("DOWN_ARROW")) {
      coin2.velocityX = 0;
      coin2.velocityY = 1;
    }
    
    if (keyDown("LEFT_ARROW")) {
      coin2.velocityX = -1;
      coin2.velocityY = 0;
    }
    
    if (keyDown("RIGHT_ARROW")) {
      coin2.velocityX = 1;
      coin2.velocityY = 0;
    }
    }
    
  if (player.bounce(coin3)) {
    
    if (keyDown("UP_ARROW")) {
      coin3.velocityX = 0;
      coin3.velocityY = -1;
    }
    
    if (keyDown("DOWN_ARROW")) {
      coin3.velocityX = 0;
      coin3.velocityY = 1;
    }
    
    if (keyDown("LEFT_ARROW")) {
      coin3.velocityX = -1;
      coin3.velocityY = 0;
    }
    
    if (keyDown("RIGHT_ARROW")) {
      coin3.velocityX = 1;
      coin3.velocityY = 0;
    }
    }
    
  if (player.bounce(coin4)) {
    
    if (keyDown("UP_ARROW")) {
      coin4.velocityX = 0;
      coin4.velocityY = -1;
    }
    
    if (keyDown("DOWN_ARROW")) {
      coin4.velocityX = 0;
      coin4.velocityY = 1;
    }
    
    if (keyDown("LEFT_ARROW")) {
      coin4.velocityX = -1;
      coin4.velocityY = 0;
    }
    
    if (keyDown("RIGHT_ARROW")) {
      coin4.velocityX = 1;
      coin4.velocityY = 0;
    }
    }
  if ((coin1.x < 0 && coin1.y > 400 || coin1.x > 400 && coin1.y < 0 || coin1.x < 0 && coin1.y < 0 || coin1.x > 400 && coin1.y > 400) && (coin2.x < 0 && coin2.y > 400 || coin2.x > 400 && coin2.y < 0 || coin2.x < 0 && coin2.y < 0 || coin2.x > 400 && coin2.y > 400) && (coin3.x < 0 && coin3.y > 400 || coin3.x > 400 && coin3.y < 0 || coin3.x < 0 && coin3.y < 0 || coin3.x > 400 && coin3.y > 400) && (coin4.x < 0 && coin4.y > 400 || coin4.x > 400 && coin4.y < 0 || coin4.x < 0 && coin4.y < 0 || coin4.x > 400 && coin4.y > 400)){
    text("YOU WIN!!! Reset to play again!",120,20);
    }
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
