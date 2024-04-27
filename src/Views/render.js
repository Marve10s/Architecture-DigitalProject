export default function render(parentElement, markup) {
  fadeOut(parentElement, () => {
    clear(parentElement);
    parentElement.insertAdjacentHTML("afterbegin", markup);
    fadeIn(parentElement);
  });
}

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
