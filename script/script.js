// add class navbarDark on navbar scroll
const header = document.querySelector(".navbar");
console.log(header);
window.onscroll = function () {
  const top = window.scrollY;
  if (top >= 100) {
    header.classList.add("navbarDark");
    header.classList.remove("darkOverlay");
  } else {
    header.classList.remove("navbarDark");
    header.classList.add("darkOverlay");
  }
};

window.onload = function () {
  const top = window.scrollY;
  if (top >= 100) {
    header.classList.add("navbarDark");
    header.classList.remove("darkOverlay");
  } else {
    header.classList.remove("navbarDark");
    header.classList.add("darkOverlay");
  }
};
// collapse navbar after click on small devices
const navLinks = document.querySelectorAll(".nav-item");
const menuToggle = document.getElementById("navbarSupportedContent");

navLinks.forEach((l) => {
  l.addEventListener("click", () => {
    new bootstrap.Collapse(menuToggle).toggle();
  });
});

const speed = 200; //milliseconds
// hello in three different language
const keywords = ["Hi", "Hola", "नमस्ते", "Ciao"];
const element = document.getElementById("greeting");

const sleep = (time) => new Promise((r) => setTimeout(r, time));

const typingEffect = async (keywords) => {
  for (const keyword of keywords) {
    element.innerHTML = "";
    for (const key of keyword) {
      element.innerHTML += key;
      await sleep(speed);
    }
    if (keyword === keywords[keywords.length - 1]) {
      element.innerHTML += ".";
      await sleep(1000);
    } else {
      await sleep(700);
      for (const key of keyword) {
        element.innerHTML = element.innerHTML.slice(0, -1);
        await sleep(speed);
      }
      await sleep(700);
    }
  }
  await sleep(1500);
  typingEffect(keywords);
};

typingEffect(keywords);
