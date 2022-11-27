const profileName = document.querySelector(".t-24");
console.log(`Profile Name:- ${profileName.innerText}`);

const locations = document.querySelector(
  "[class='text-body-small inline t-black--light break-words']"
);
console.log(`Location:- ${locations.innerText}`);

document.getElementById("top-card-text-details-contact-info").click();

setTimeout(() => {
  let profileLink = document.querySelector(
    "[class='pv-contact-info__contact-link link-without-visited-state t-14']"
  );
  console.log(`Profile Link:- ${profileLink.innerText}`);
}, 3000);
