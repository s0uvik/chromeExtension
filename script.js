/////////////////////////////////////

const profileArray = [
  "https://www.linkedin.com/in/sagnik-jana-91a73a151/",
  "https://www.linkedin.com/in/s0uvik/",
];

document
  .querySelector("[data-btn-container]")
  .addEventListener("click", (e) => {
    if (e.target.classList[1] === "Profile-opener") {
      profileArray.forEach((elm) => {
        chrome.tabs.create({
          url: elm,
        });
      });
    } else if (e.target.classList[1] === "get-title") {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const _title = tabs[0].title;
        document.querySelector(".title-container").innerText = _title;
      });
    } else {
      alert("please click any button");
    }
  });

