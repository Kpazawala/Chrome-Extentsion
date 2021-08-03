
<<<<<<< HEAD
let gui;
let bgpage = chrome.extension.getBackgroundPage();
let image_source = bgpage.image_source;

class GalleryImage {
  constructor(x,y,picture,imageWidth,imageHeight){
    this.picture = picture;
    this.x = x;
    this.y = y;
    this.imageWidth = imageWidth;
    this.imageHeight = imageHeight;
  }
  displayImage(){
    image(this.picture, x, y, this.imageWidth, this.imageHeight);
  }
}

function setup() {
  console.log("hello");
  console.log(image_source);


  gui = createGui();
  b = createButton("1", 50, 50)
  let global galleryArray = [];
}

function draw(){
  for (var i = 0; i < image_source.length; i++) {

  console.log(image_source);
  print("hello")
  }
  drawGui();

  if
}

function GalleryDisplay() {
  for(let image in galleryArray){
    image.displayImage();
  }
=======

let bgpage = chrome.extension.getBackgroundPage();
let image_source = bgpage.image_source;

function setup() {
  console.log("hello");
  console.log(image_source);
}

function draw(){
>>>>>>> 534d25eb3fd7e0cfc4416d1b1974f261bb166215
}
