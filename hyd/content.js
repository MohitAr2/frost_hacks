document.addEventListener('click', function(event) {
    if (event.target.tagName === 'IMG') {
      const imageUrl = event.target.src;
      chrome.runtime.sendMessage({ action: 'displayImage', imageUrl: imageUrl });
    }
  });
  