    var backgroundImage;
    var espaco;
    var nave;
    var naveImage;
    var meteoro;
    var meteoroGroup;
    var estado = "jogando";
    function preload(){
    backgroundImage = loadImage("Fundo-espaço.jpg");
    naveImage = loadImage("nave.png");
    meteoroImage = loadImage("meteoro.png");
    }

    function setup() {
        createCanvas(600,600);
        espaco = createSprite(200,200,600,600);   
        espaco.addImage("ImagemDeFundo",backgroundImage);
        espaco.scale = 2;
        nave = createSprite(300,400,600,600);
        nave.addImage("ImagemDaNave",naveImage);
        nave.scale = 0.3;
        edges = createEdgeSprites(); 
        nave.setCollider("circle",0,0,10);
        meteoroGroup = new Group();
    }
 
function draw() {
background("black");
espaco.velocityY = 5;
drawSprites(); 
if(espaco.y> 300){ 
   espaco.y = 200;  
}
if (estado == "jogando"){  
    gerarMeteoros();
if (keyDown("left")){
nave.velocityX = -3
}
if (keyDown("right")){
nave.velocityX = 3
}
if (keyDown("up")){
    nave.velocityY = -3
}
if (keyDown("down")){
    nave.velocityY = 3 
}     
   
} 

if (meteoroGroup.collide(nave)){
    nave.velocityY = 0;
    nave.velocityY = 0;
   estado = "fim";
}
//== compara se o primeiro e igual o segundo
if (estado == "fim"){
fill ("red");
text("GAMER OVER",300,300);
}
nave.collide(edges);
}
function gerarMeteoros(){   
    if(frameCount % 100 == 0){
        var meteoro = createSprite(200,-100,600,600);
        var numRandom = Math.round(random(4,7));
        meteoro.x = numRandom * 100;
        console.log(numRandom)
        meteoro.addImage("ImagemDoMeteoro",meteoroImage);
        meteoro.velocityY = 10;
        meteoro.scale = 1/numRandom; 
        meteoroGroup.add(meteoro);
    }
    
}