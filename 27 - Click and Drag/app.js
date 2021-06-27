const slider = document.querySelector(".items");
let pressed = false;

slider.addEventListener("mousedown", (e) => {
  pressed = true;
  slider.classList.add("active");
});

slider.addEventListener("mouseup", (e) => {
  pressed = false;
  slider.classList.remove("active");
});

slider.addEventListener("mousemove", (e) => {
  if (!pressed) return;
  slider.scrollLeft -= e.movementX;
});
