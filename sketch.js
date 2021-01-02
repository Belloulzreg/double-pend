const g = 0.05;
let r1 = 200,
    r2 = 200,
    x1,
    y1,
    x2,
    y2,
    m1 = 40,
    m2 = 40,
    a1 = -3.14/2,
    a2 = 3.14/2,
    a1_v = 0,
    a2_v = 0,
    // a1_a = 0,
    // a2_a = 0, 
    num1,
    num2, 
    num3, 
    num4,
    num10,
    num20, 
    num30, 
    num40,
    den1,
    den2, 
    trail1 = [],
    trail2 =[];



function setup(){
createCanvas(windowWidth, windowHeight)
}
function draw(){
  num1 = -g * (2* m1 + m2 )* sin(a1);
  num2 = - m2 * g * sin(a1-2*a2);
  num3 = -2 * sin(a1-a2)*m2;
  num4 = a2_v*a2_v*r2*+a1_v * a1_v* r1 * cos(a1-a2);
  den1 = r1 * (2*m1+m2-m2*cos(2*a1-2*a2));
  let a1_a = (num1 + num2 + num3*num4)/den1;
  num10 = 2 * sin(a1-a2);
  num20 = ((a1_v*a1_v*r1)* (m1+m2));
  num30 = g * (m1 + m2 )*cos(a1);
  num40 = a2_v*a2_v*r2*m2*cos(a1-a2);
  den2= r2*(2*m1+m2-m2*cos(2*a1-2*a2));
  let a2_a = num10*(num20+num30+num40)/den2;
  background(53);
  stroke(0);
  strokeWeight(2);
  translate(300, 300);
  x1 = r1 * sin(a1);
  y1 = r1 * cos(a1);
  x2 = x1 + r2*sin(a2);
  y2 = y1 + r2*cos(a2);
  let v1 = createVector(x1, y1);
  let v2 = createVector(x2, y2);
  trail1.push(v1);
  trail2.push(v2);
    if(trail1.length > 200){
      trail1.splice(0, 1)
    }
    if(trail2.length > 200){
      trail2.splice(0, 1)
    }
  beginShape();
  noFill();
  
  for(let i= 0; i < trail1.length; i++){
    stroke(map(i, 0, trail2.length, 0, 255), map(i, 0, trail2.length, 0, 255), map(i, 0, trail2.length, 0, 255));
    curveVertex(trail1[i].x, trail1[i].y);

  }
  endShape();
  beginShape();
  noFill();
  
  for(let i= 0; i < trail2.length; i++){
    stroke(255, map(i, 0, trail2.length, 0, 255), map(i, 0, trail2.length, 0, 255));
    curveVertex(trail2[i].x, trail2[i].y);

  }
  endShape();
  stroke(0);
  line(0, 0, x1, y1);
  fill(0);
  ellipse(x1, y1, m1, m1);
  line(x1, y1, x2, y2);
  fill(0);
  ellipse(x2, y2, m2, m2);
  
  a1_v += a1_a;
  a2_v += a2_a;
  a1   += a1_v;
  a2   += a2_v;
  
  
}
