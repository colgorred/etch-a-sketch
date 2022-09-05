const container = document.querySelector(".container");
const slider = document.querySelector(".slider");
let size = slider.value;
const color = document.querySelector(".color");
const resetBtn = document.querySelector(".reset");
let draw = false;

function buildGrid(size) {
  container.style.setProperty("--size", size);
  for (let i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    div.classList.add("pixel");
    div.addEventListener("mouseover", function () {
      if (!draw) return;
      div.style.backgroundColor = color.value;
    });
    div.addEventListener("mousedown", function () {
      div.style.backgroundColor = color.value;
    });
    container.appendChild(div);
  }
}
window.addEventListener("mousedown", function () {
  draw = true;
});
window.addEventListener("mouseup", function () {
  draw = false;
});

function reset() {
  container.innerHTML = "";
  buildGrid(size);
}

resetBtn.addEventListener("click", reset);
slider.addEventListener("click", function () {
  size = slider.value;
  container.innerHTML = "";
  reset();
});

buildGrid(size);
