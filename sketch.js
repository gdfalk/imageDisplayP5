var a;
var b;
let imgHappy;
let imgSad;
let imgAngry;
let imgShuffle;
var state = 0;
var doublestate=0;
var doublenstate=0;
var nstate = 0
var hstate = 1;
var sstate = 2;
var astate = 3;
var crybool = false;

//var grow=true;
//var angle;
//var moove;

function setup()
{
  createCanvas(1000,800);

  
}

function draw()
{
 background(255, 148, 244);
 ellipseMode(CENTER);
 image(imgHappy,0,0,imgHappy.width/3,imgHappy.height/3); //square w happy in it goes from coordinates 0,0 to 160,160
 image(imgSad,0,200,imgHappy.width/3,imgHappy.height/3); //square w sad in it goes from 0,200, to 160,360
 image(imgAngry,0,400,imgHappy.width/3,imgHappy.height/3); //square w angry in it goes from 0,400 to 160,560
 //print(imgHappy.width/3); // Width of emojis is 160
 //print(imgHappy.height/3); // Height of emojis is 160

if(mouseX>=0 && mouseX<=160 && mouseY>=0 && mouseY<=160)
	{
		state=hstate;
		
	}else if(mouseX>=0 && mouseX<=160 && mouseY>=200 && mouseY<=360)
	{
		state=sstate;
		
	}else if(mouseX>=0 && mouseX<=160 && mouseY>=400 && mouseY<=560)
	{
		state=astate;
		
	}else
	{
		state=nstate;
	}


  print(state);


if(state==hstate)
{
  drawHappy();

}else if(state==sstate)
{
	drawSad();
}else if(state==astate)
{
	drawAngry();
}else
{
	drawNeutral();
}



}
  
 function preload()
 {
 	imgHappy=loadImage('https://cdn.shopify.com/s/files/1/1061/1924/products/Happy_Emoji_Icon_5c9b7b25-b215-4457-922d-fef519a08b06_large.png?v=1571606090');
 	imgSad=loadImage('https://cdn.shopify.com/s/files/1/1061/1924/products/5_grande.png?v=1571606116');
	imgAngry=loadImage('https://cdn140.picsart.com/292428198017211.png?type=webp&to=min&r=1024'); 
 }

function drawHappy()
 {

 //base for every face

 //draw ears
	fill(255, 232, 237);
  stroke(255, 232, 237);
  ellipse(290,400,150,300);
  ellipse(710,400,150,300);
  
  //draw neck
  rect(400,700,200,400);
  
  //draw head
  fill(255, 240, 243);
  stroke(255, 240, 243);
  ellipse(500,400,500,700);

  //draw hair
  fill(59, 0, 13);
  stroke(59, 0, 13);
  ellipse(500,200,300,200);
  ellipse(400,220,300,200);
  ellipse(600,213,300,200);
  ellipse(400,100,200,135);
  ellipse(537,124,123,173);
  ellipse(615,132,111,162);
  ellipse(500,90,100,100);

  //nose
  fill(255, 232, 237);
  stroke(255, 232, 237);
  triangle(500,440,450,525,550,525);
  ellipse(475,510,50,40);
  ellipse(525,510,50,40);

  //draw shirt
  fill(0, 125, 10);
  stroke(0, 125, 10);
  arc(500,870,600,200,PI,2*PI,CHORD);
  //----------------------------------------\\
  
  //Happy right eye
  fill(255);
  stroke(0);
  strokeWeight(4);
  ellipse(400,370,135,120);
  
  //Winking happy left eye
  strokeWeight(12);
  line(550,380,650,370);
  line(660,360,680,350);
  line(660,370,680,370);
  line(660,380,680,400);
  strokeWeight(1);
	//iris
  fill(115, 255, 225);
  stroke(115, 255, 225);
  ellipse(400,370,65,65);
  
  //pupil
  fill(0);
  stroke(0);
  ellipse(400,370,30,30);
  
  //white in eye
  fill(255);
  stroke(255);
  rect(406,354,13,13);

  //eyebrows
  noFill();
  stroke(20, 0, 4);
  strokeWeight(12);
  arc(400,320,160,100,PI,2*PI,OPEN);
  arc(600,320,160,100,PI,2*PI,OPEN);
  strokeWeight(1);


  //tongue
  fill(255, 207, 255);
  stroke(0);
  arc(570,600,130,180,0,PI+QUARTER_PI);
  line(580,675,565,600)

  //smile
  fill(255, 240, 243);
  stroke(0);
  strokeWeight(8);
  arc(500,550,300,200,0,PI,OPEN);
  strokeWeight(1);


 }

function drawSad()
 {
 	//base for every face

 //draw ears
	fill(255, 232, 237);
  stroke(255, 232, 237);
  ellipse(290,400,150,300);
  ellipse(710,400,150,300);
  
  //draw neck
  rect(400,700,200,400);
  
  //draw head
  fill(255, 240, 243);
  stroke(255, 240, 243);
  ellipse(500,400,500,700);

  //draw hair
  fill(59, 0, 13);
  stroke(59, 0, 13);
  ellipse(500,200,300,200);
  ellipse(400,220,300,200);
  ellipse(600,213,300,200);
  ellipse(400,100,200,135);
  ellipse(537,124,123,173);
  ellipse(615,132,111,162);
  ellipse(500,90,100,100);

  //nose
  fill(255, 232, 237);
  stroke(255, 232, 237);
  triangle(500,440,450,525,550,525);
  ellipse(475,510,50,40);
  ellipse(525,510,50,40);

  //draw shirt
  fill(0, 125, 10);
  stroke(0, 125, 10);
  arc(500,870,600,200,PI,2*PI,CHORD);
  //----------------------------------------\\

  //crying
  var crylen=20;
  fill(51, 204, 255);
  stroke(51, 204, 255);
  if(crybool)
  {
    for(var i=0;i<=20;i++)
    {
      rect(370,380,30,crylen);
      ellipse(385,400+crylen,30,20);
      crylen=crylen+5;


    }
  }



  //sad eyes
  fill(255, 240, 243);
  stroke(0);
  strokeWeight(8);
  arc(400,370,130,70,0,PI,OPEN);
  arc(600,370,130,70,0,PI,OPEN);
  

  //sad mouth
  arc(500,600,200,100,PI,2*PI,OPEN);

  strokeWeight(1);


 }

function drawAngry()
 {
 	//ears
 	fill(255, 232, 237);
  stroke(255, 232, 237);
  ellipse(290,400,150,300);
  ellipse(710,400,150,300);
  //neck
  rect(400,700,200,400);
  //head
  fill(255, 240, 243);
  stroke(255, 240, 243);
  ellipse(500,400,500,700);
  //eyes
  fill(255);
  stroke(0);
  arc(400,330,125,150,0,PI,OPEN);
  arc(600,330,125,150,0,PI,OPEN);
  //iris
  fill(115, 255, 225);
  stroke(115, 255, 225);
  ellipse(400,365,55,55);
  ellipse(600,365,55,55);
  //pupil
  fill(0);
  stroke(0);
  ellipse(400,365,25,25);
  ellipse(600,365,25,25);
  //whites in eyes
  fill(255);
  stroke(255);
  rect(405,353,10,10);
  rect(605,353,10,10);
  //nose
  fill(255, 232, 237);
  stroke(255, 232, 237);
  triangle(500,440,450,525,550,525);
  ellipse(475,510,50,40);
  ellipse(525,510,50,40);
  //mouth
  fill(255);
  stroke(0);
  arc(500,600,200,100,PI,2*PI,CHORD);
  //hair
  fill(59, 0, 13);
  stroke(59, 0, 13);
  ellipse(500,200,300,200);
  ellipse(400,220,300,200);
  ellipse(600,213,300,200);
  ellipse(400,100,200,135);
  ellipse(537,124,123,173);
  ellipse(615,132,111,162);
  ellipse(500,90,100,100);
  //eyebrows
  stroke(20, 0, 4);
  rect(325,320,150,20);
  rect(525,320,150,20);
  //shirt
  fill(0, 125, 10);
  stroke(0, 125, 10);
  arc(500,870,600,200,PI,2*PI,CHORD);
 }

function drawNeutral()
 {
 	//base for every face

 //draw ears
	fill(255, 232, 237);
  stroke(255, 232, 237);
  ellipse(290,400,150,300);
  ellipse(710,400,150,300);
  
  //draw neck
  rect(400,700,200,400);
  
  //draw head
  fill(255, 240, 243);
  stroke(255, 240, 243);
  ellipse(500,400,500,700);

  //draw hair
  fill(59, 0, 13);
  stroke(59, 0, 13);
  ellipse(500,200,300,200);
  ellipse(400,220,300,200);
  ellipse(600,213,300,200);
  ellipse(400,100,200,135);
  ellipse(537,124,123,173);
  ellipse(615,132,111,162);
  ellipse(500,90,100,100);

  //nose
  fill(255, 232, 237);
  stroke(255, 232, 237);
  triangle(500,440,450,525,550,525);
  ellipse(475,510,50,40);
  ellipse(525,510,50,40);

  //draw shirt
  fill(0, 125, 10);
  stroke(0, 125, 10);
  arc(500,870,600,200,PI,2*PI,CHORD);
  //----------------------------------------\\
 }

 function keyPressed()
 {
  crybool=true;
 }

 function keyReleased()
 {
  crybool=false;
 }





