let font;  //載入字型文字
let points = [];  //轉成點狀文字
function preload(){
    var font = loadFont("fonts/Itim-Regular.ttf")
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#446df6")
  points = font.textToPoints("TKU", width/2-300, height/2+100, 100, {
    sampleFactor:0.1
  }); //轉成文字圖檔，放在(0, 200)位置，圖形大小為200，sampleFactor為點數距離大小
     for (let i=0; i<points.length; i++) { 
    noStroke()
    fill("#d0cfcf")
    ellipse(points[i].x,points[i].y,15)
 } 
}

function draw() {
  background("#446df6");
  noFill()
  stroke("#08a4bd")
  strokeWeight(3)

  var rect_width = 50+mouseX/10
  var bc_w = 50+mouseX/10
  var sc_w = 50+mouseX/10

  // ellipse(25,25,50)
  // rect(0,0,50)
  // ellipse(50,50,25)
  // ellipse(75,25,50)
  // rect(50,0,50)
  // ellipse(100,50,25)
  // ellipse(125,25,50)
  // rect(100,0,50)
  // ellipse(150,50,25)
  // ellipse(25,75,50)
  // rect(0,50,50)
  // ellipse(50,100,25)
push()
  for(let j=0;j<height;j=j+1){
    for(let i=0;i<width;i=i+1){
      ellipse(25+bc_w*i,25+50*j,bc_w)
      rect(0+rect_width*i,0+50*j,rect_width)
      ellipse(sc_w*(i+1),50+50*j,25)
    }
    pop()
  }
  push()
  for (let i=0; i<points.length; i++) { 
    ellipse(points[i].x,points[i].y,15)
 } 
 pop()

}