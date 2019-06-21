const handleResult = (result) => {
  let resultName = 'dijkstraResult';
  let previousResult = localStorage.getItem(resultName);
  if (!previousResult) {
    localStorage.setItem(resultName, result);
  } else {
    localStorage.setItem(resultName, `${localStorage.getItem(resultName)}, ${result}`);
  }
}

let observer = new MutationObserver((mutations, me) => {
  let result = document.getElementById('title').innerText;
  if (result.indexOf('took') !== -1) {
    handleResult(result);
    me.disconnect(); // stop observing
    location.reload();
  }
});

// start observing
observer.observe(document, {
  childList: true,
  subtree: true
});
