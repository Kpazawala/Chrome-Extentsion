let bgpage = chrome.extension.getBackgroundPage();
let image_source = bgpage.image_source;

let galleryArray;

let width = 400;
let height = 700;

function setup() {
  console.log("hello");
  console.log(image_source);

  createCanvas(windowWidth, windowHeight);
  resizeCanvas(width, height)

  galleryArray = [];

  for(var i = 0; i < image_source.length; i++){
    let img = createImg(image_source[i])
    img.hide();

    let img_index = new GalleryImage(img);
    galleryArray.push(img_index);
  }

  let storeX = 0;
  let storeY = 0;
  for(let i = 0; i < galleryArray.length; i++){
    galleryArray[i].x = storeX;
    galleryArray[i].y = storeY;

    storeX += galleryArray[i].imageWidth;
    if(storeX > width){
      storeX = 0;
      storeY += galleryArray[i].imageHeight;
    }
  }
}

function draw(){
  for(var i = 0; i < galleryArray.length; i++) {
    galleryArray[i].displayImage();
  }
  //createDiv(galleryArray[1]);
}

class GalleryImage {
  constructor(image){
    this.image = image;
    this.x = 0; //random(width);
    this.y = 0; //random(height);
    this.imageWidth = 100;
    this.imageHeight = 100;
  }

  displayImage() {
    image(this.image, this.x, this.y, this.imageWidth, this.imageHeight);
  }
}
