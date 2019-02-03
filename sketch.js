let canvas;
let NUM = 60;
let inc = 0;

function preload() {

}

function setup() {

  canvas = createCanvas(500, 500, WEBGL);
  canvas.id('sketch-container');


}


function draw() {
  background(20);
  stroke(240, 0, 0);
  strokeWeight(2);
  fill(255, 0, 0);
  // noFill();
  noStroke();

  let dx = mouseX - width / 2;
  let dy = mouseY - height / 2;
  let v = createVector(dx, dy, 0);
  v.div(100);

  specularMaterial(223,122,0);
  ambientLight(255, 57, 0);
  // pointLight(250, 250, 250, dx, dy, 0);
  directionalLight(255, 255, 250, v);

  let angle = TWO_PI / NUM;

  // translate(200, 200);
  rotateX(inc/2);
  rotateY(inc/  2 * 0.2);
  for (let i = 0; i < NUM; i++) {
    push();
    rotate(i * angle + inc);
    translate(100, 100, 0);
    sphere(300/NUM);
    // torus(10, 4);
    pop();
  }
  inc += 0.01;


}
