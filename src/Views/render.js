export default function render(parentElement, markup, linkEl) {
  fadeOut(parentElement, () => {
    clear(parentElement);
    // checkActiveLink(linkEl);
    parentElement.insertAdjacentHTML("afterbegin", markup);
    fadeIn(parentElement);
  });
}

// function checkActiveLink(linkEl) {
//   linkEl.classList.contains("active-link")
//     ? linkEl.classList.remove("active-link")
//     : linkEl.classList.add("active-link");
// }

function fadeOut(parentElement, callback) {
  parentElement.style.transition = "opacity 0.5s ease";
  parentElement.style.opacity = "0";
  setTimeout(callback, 500);
}

function fadeIn(parentElement) {
  parentElement.style.transition = "opacity 0.5s ease";
  parentElement.style.opacity = "1";
}

function clear(parentElement) {
  parentElement.innerHTML = "";
}
