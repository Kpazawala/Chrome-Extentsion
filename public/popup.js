console.log("hello");

function setup() {
  console.log("hello");

  let bgpage = chrome.extension.getBackgroundPage();
  let image_source = bgpage.image_source;

}

function draw(){
  for (var i = 0; i < image_source.length; i++) {

  console.log(image_source);

  }
}
