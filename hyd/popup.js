chrome.tabs.executeScript({ file: 'content.js' });

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'displayImage') {
    const imageUrl = request.imageUrl;
    displayImageOnStickman(imageUrl);
  }
});

function displayImageOnStickman(imageUrl) {
  const stickmanContainer = document.getElementById('stickman-container');
  stickmanContainer.innerHTML = `<img src="${imageUrl}" alt="Clothes on Stickman">`;
}
