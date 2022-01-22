const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var world,engine;

var alien1,alienIMG;
var piso,plataforma1,plataforma2,plataforma3, plataforma4,IMG,IMG2;
var obstaculo,obstaculo2;
var score,i=0;
var piezas;
var Nivel1;
var gameState = Nivel1;

var pieza1,pieza2,pieza3,pieza4,pieza5,pieza6;

function preload(){
  //cargar animaciones
  alienIMG = loadAnimation("sprite_0.png","sprite_1.png");

  IMG = loadImage("tierra.jpg");
  IMG2 = loadImage("tierra2.jpg");
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;

  alien1 = createSprite(400,50, 50, 50);
  alien1.debug = true;
  alien1.setCollider("rectangle",0,0,alien1.width-5,alien1.height+45);
  alien1.addAnimation("1",alienIMG);

  piso = new BaseClass(width/2,height-2,width,30);

  plataforma1 = new BaseClass(width/2,height-500,width-200,20);
  
  plataforma2 = new BaseClass(width/2,height-300,width,20);

  plataforma3 = new BaseClass(width/2-100,height-140,width-100,20);

  plataforma4 = new BaseClass(width-1320,height-500,100,20);

  obstaculo = new BaseClass(width/2+470,height-500,20,370);
  obstaculo2 = new BaseClass(width/2-350,height-335,50,50);

  pieza1 = new BaseClass(width/2-350,height-450, 20, 20);
  //pieza1.visible = false;

  pieza2 = new BaseClass(300,height-20, 20, 20);
  //pieza2.visible = false;

  pieza3 = new BaseClass(350,height-20, 20, 20);

  pieza4 = new BaseClass(400,height-20, 20, 20);

  pieza5 = new BaseClass(450,height-20, 20, 20);

  pieza6 = new BaseClass(450,height-20, 20, 20);


  score=0;
}

function draw(){
  background(IMG2);

  Engine.update(engine);

  //nivel 1
  if(gameState===Nivel1){
    nivel1();
    console.log(1);
  }
  else{
    console.log(2);
  }

  alien1.velocity.x = 0;

  /*alien1.velocity.y += 0.8;

  //funcionamiento de el alien
  if(keyDown(UP_ARROW)){
    alien1.setVelocity(0,-10);
    //console.log(1);
  }

  if(keyDown(DOWN_ARROW)){
    alien1.setVelocity(0,10);
    //console.log(1);
  }

  if(keyDown(LEFT_ARROW)){
    alien1.setVelocity(-5,0);
    //console.log(1);
  }

  if(keyDown(RIGHT_ARROW)){
    alien1.setVelocity(5,0);
    //console.log(1);
  }*/

  
  //nivel 2
  //nivel 3
  //nivel 4
  //nivel 5


  drawSprites();
  //console.log(1);
}

function nivel1(){

  piso.display();
  obstaculo2.display();
  obstaculo.display();

  plataforma1.display();
  plataforma2.display();
  plataforma3.display();
  plataforma4.display();

  pieza1.display();
  pieza2.display();
  pieza3.display();
  pieza4.display();
  pieza5.display();
  pieza6.display();

  Matter.Body.setStatic(plataforma1.body,true);

  if(alien1.position.x<width-1320+100&&plataforma4.position.y<400){
    plataforma4.velocity.y = 1;
    console.log("hola");
  }


    for(a=1;a<7;a++){
      piezas="pieza"+a;
      //console.log(piezas);
      /*if(piezas&&alien1.collide(piezas)){
        score++;
        //piezas.remove();
        i++;
      }
      i=0;*/
    }
  
  /*if(Tocando(alien1,pieza1)){
    score++;
  }
  else{
    score=score;
  }*/

  //fill("blue");
  textSize(30);
  text("piezas: "+score,200,30);

}