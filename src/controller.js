import aboutView from "./Views/aboutView";
import render from "./Views/render";

const main = document.getElementById("main");
const gallery = document.getElementById("gallery-link");

gallery.addEventListener("click", function () {
  const markup = aboutView.generateMarkup();
  render(main, markup);
});
