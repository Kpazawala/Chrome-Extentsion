console.log("hello");


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

  let bgpage = chrome.extension.getBackgroundPage();
  let image_source = bgpage.image_source;

}

function draw(){
  for (var i = 0; i < image_source.length; i++) {

  console.log(image_source);
  print("hello")
  }
}
