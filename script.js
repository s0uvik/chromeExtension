const button = document.querySelector(".btn");

const profileArray = [
  "https://www.linkedin.com/in/sagnik-jana-91a73a151/",
  "https://www.linkedin.com/in/s0uvik/",
];

button.addEventListener("click", function () {
  profileArray.forEach((elm) => {
    chrome.tabs.create({
      url: elm,
    });
  });
});
