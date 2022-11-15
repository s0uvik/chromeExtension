const button = document.querySelector(".btn");

button.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const _title = tabs[0].title;
    document.querySelector(".title-container").innerText = _title ;
  });
});
