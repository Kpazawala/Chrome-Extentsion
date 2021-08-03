
let gui;
let bgpage = chrome.extension.getBackgroundPage();
let image_source = bgpage.image_source;

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
}

function GalleryDisplay() {
  for(let image in galleryArray){
    image.displayImage();
}
