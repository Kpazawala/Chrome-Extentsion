
let bgpage = chrome.extension.getBackgroundPage();
let image_source = bgpage.image_source;

let galleryArray;

function setup() {
  console.log("hello");
  console.log(image_source);

  createCanvas(350, 400);

  galleryArray = [];

  for(var i = 0; i < image_source.length; i++){
    let img = createImg(image_source[i])
    img.hide();

    let img_index = new GalleryImage(img);
    galleryArray.push(img_index);

  }
  //document.getElementById('output').innerHTML = galleryArray[5];


  //b = createButton("1", 50, 50)

}

function draw(){
  for(var i = 0; i < galleryArray.length; i++) {
    galleryArray[i].displayImage();
  }
  let div1 = createDiv();
  div.id(1);

  // var rows = round(galleryArray.length/2);
  // var columns = 2;
  //
  // for (let columnPlace = 0; columnPlace < columns; columnPlace++){
  //   if (rows%2 == 0){
  //     console.log('works');
  //   	for (let picturePlace = (rows * columnPlace); picturePlace < rows * (columnPlace + 1); picturePlace++){
  //       galleryArray[i].x = columnPlace * 50; //galleryArray[picturePlace].imageWidth;
  //       galleryArray[i].y = columnPlace * 50; //galleryArray[picturePlace].imageHeight;
  //       console.log("bye" + picturePlace);
  //       console.log(galleryArray[picturePlace].x);
  //     }
  //   }
  //   if (rows%2 == 1){
  //     console.log('works');
  //   	for (let picturePlace = (rows * columnPlace); picturePlace < rows * (columnPlace + 1) - 1  ; picturePlace++){
  //       console.log("yo" + picturePlace);
  //       galleryArray[picturePlace].x = columnPlace * 50; //galleryArray[picturePlace].imageWidth;
  //       galleryArray[picturePlace].y = columnPlace * 50; //galleryArray[picturePlace].imageHeight;
  //     }
  //   }
  }
}

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
