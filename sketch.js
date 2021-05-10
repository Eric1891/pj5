
function setup() {
  createCanvas(720, 800, WEBGL);
  
}

function draw() { 
  background(220,120,230); 
  
 
  let locX = mouseX - height /2;
  let locY = mouseY - width /2;

  ambientLight(60);
  directionalLight(255, 30, 30, 1, 1, 2); //change the directinalLight color
  pointLight(3, 4, 255, locX, locY, 2); //change the pointLight color

  push();
  translate(-width / 5, 3, 5);//change the translate
  rotateZ(frameCount * mouseX);//change the rotateZ
  rotateX(frameCount * mouseX);//change  the rotateX 
  specularMaterial(120); //change the specularMaterial color
  box(150, 150, 150); //change box size
  pop();
  
  push();//add new sphare translate
  translate(-width / 10, 8, 4);
  rotateZ(frameCount * mouseY);
  rotateX(frameCount * mouseX);
  ambientMaterial(185);
  sphere(60, 120);
  
  push();// add new circle translate
  translate(width / 6, height / 6, 1);
  rotateZ(frameCount * 0.001);
  rotateX(frameCount * 0.001);
  rotateY(frameCount * 0.001);
  specularMaterial(250);
  torus(100, 40, 64, 64);
  pop();
  rect(100,200,200,100);
}


   

