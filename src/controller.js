import mainView from "./Views/mainView";
import projectsView from "./Views/projectsView";
import contactUsView from "./Views/contactUsView";
import render from "./Views/render";
import galleryView from "./Views/galleryView";

const main = document.getElementById("main");
const mainLinks = [...document.querySelectorAll(".main-link_href")];
const galleryLink = [...document.querySelectorAll(".gallery-link_href")];
const projectLink = [...document.querySelectorAll(".project-link_href")];
const contactLink = [...document.querySelectorAll(".contact-link_href")];

function viewGenerator(view) {
  return function () {
    const markup = view.generateMarkup();
    render(main, markup);
  };
}

mainLinks.forEach((link) => {
  link.addEventListener("click", viewGenerator(mainView));
});

galleryLink.forEach((link) => {
  link.addEventListener("click", viewGenerator(galleryView));
});

projectLink.forEach((link) => {
  link.addEventListener("click", viewGenerator(projectsView));
});

contactLink.forEach((link) => {
  link.addEventListener("click", viewGenerator(contactUsView));
});
