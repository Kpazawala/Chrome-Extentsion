console.log("Chrome extension go?");

//var paragraphs = document.getElementsByTagName('img');
var img = document.getElementsByTagName('img');

var message = {
    sources: []
};

for (var i = 0; i < img.length; i++) {
  //elt.style['background-color'] = 'pink';
  //paragraphs[i].innerHTML = 'kitten';

  console.log(img[i].src)
  console.log("working");

  message.sources.push(img[i].src);

}

chrome.runtime.sendMessage(message);
