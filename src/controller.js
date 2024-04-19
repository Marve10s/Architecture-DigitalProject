import aboutView from "./Views/aboutView";
import mainView from "./Views/mainView";
import render from "./Views/render";

const main = document.getElementById("main");
const mainLink = document.getElementById("main-link");
const galleryLink = document.getElementById("gallery-link");

mainLink.addEventListener("click", function () {
  const markup = mainView.generateMarkup();
  render(main, markup);
});

galleryLink.addEventListener("click", function () {
  const markup = aboutView.generateMarkup();
  render(main, markup);
});
