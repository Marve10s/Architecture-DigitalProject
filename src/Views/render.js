export default function render(parentElement, markup) {
  clear(parentElement);
  parentElement.insertAdjacentHTML("afterbegin", markup);
}

function clear(parentElement) {
  parentElement.innerHTML = "";
}
