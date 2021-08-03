console.log('background running');

chrome.runtime.onMessage.addListener(receiver);

window.image_source = 'hello';

function receiver(request, sender, sendResponse) {
  console.log(request);
  // image_source = request.sources;
  image_source = request.sources;
}
