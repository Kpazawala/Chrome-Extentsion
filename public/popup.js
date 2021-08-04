
let bgpage = chrome.extension.getBackgroundPage();
let image_source = bgpage.image_source;

let galleryArray;

function setup() {
  console.log("hello");
  console.log(image_source);

  createCanvas(100, 100);

  galleryArray = [];

  for(var i = 0; i < image_source.length; i++){
    let img_index = new GalleryImage(image_source[i]);
    galleryArray.push(img_index);
    galleryArray[i].displayImage();
  }

  //b = createButton("1", 50, 50)

}

function draw(){
}

class GalleryImage {
  constructor(image){
    this.image = image;
    this.x = 0;
    this.y = 0;
    this.imageWidth = 30;
    this.imageHeight = 35;
  }

  displayImage() {
    createImg(this.image, this.x, this.y, this.imageWidth, this.imageHeight);
  }
}
