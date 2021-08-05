
let bgpage = chrome.extension.getBackgroundPage();
let image_source = bgpage.image_source;

let galleryArray;

<<<<<<< HEAD
class GalleryImage {
  constructor(image){
    this.image = image;
    this.x = 0; //random(width);
    this.y = 0; //random(height);
    this.imageWidth = 50;
    this.imageHeight = 50;
  }

  displayImage() {
    image(this.image, this.x, this.y, this.imageWidth, this.imageHeight);
  }
}
=======
let width = 400;
let height = 700;
>>>>>>> 0cffba9c5047fcbc1f3da14dd4ccb1374febb323

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
<<<<<<< HEAD
  sorting();
  //document.getElementById('output').innerHTML = galleryArray[5];
=======
>>>>>>> 0cffba9c5047fcbc1f3da14dd4ccb1374febb323

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
<<<<<<< HEAD
  let div1 = createDiv();
  div1.id(1);


}

function sorting(){
  var rows = round(galleryArray.length/2);
  var columns = 2;
=======
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
>>>>>>> 0cffba9c5047fcbc1f3da14dd4ccb1374febb323

  for (let columnPlace = 0; columnPlace < columns; columnPlace++){
    if (galleryArray.length%2 == 0){
      console.log('works');
      for (let picturePlace = (rows * columnPlace); picturePlace < rows * (columnPlace + 1); picturePlace++){
        galleryArray[picturePlace].x = columnPlace * 50; //galleryArray[picturePlace].imageWidth;
        galleryArray[picturePlace].y = columnPlace * 50; //galleryArray[picturePlace].imageHeight;
        console.log("bye" + picturePlace);
        console.log(galleryArray[picturePlace].x);
      }
    }
    if (galleryArray.length%2 == 1){
      console.log('works');
      for (let picturePlace = (rows * columnPlace); picturePlace < (rows * (columnPlace + 1)) - 1  ; picturePlace++){
        console.log("yo" + picturePlace);
        galleryArray[picturePlace].x = columnPlace * 50; //galleryArray[picturePlace].imageWidth;
        galleryArray[picturePlace].y = columnPlace * 50; //galleryArray[picturePlace].imageHeight;
        text(`$(picturePlace)`, picturePlace * 3, picturePlace * 4)
      }
    }
  }
}
