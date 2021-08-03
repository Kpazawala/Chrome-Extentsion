

let bgpage = chrome.extension.getBackgroundPage();
let image_source = bgpage.image_source;

function setup() {
  console.log("hello");
  console.log(image_source);
}

function draw(){
}
