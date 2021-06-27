const hero = document.querySelector(".hero");
const text = document.querySelector("h1");

function moveShadow(event) {
  let positionX = text.clientWidth + 300;
  let positionY = text.clientHeight + 300;

  let screenX = positionX - event.clientX;
  let screenY = positionY - event.clientY;

  text.style.textShadow = `
    ${screenX}px ${screenY}px 0 rgba(0,255,255,0.7),
    ${-screenX}px ${screenY}px 0 rgba(255,0,255,0.7),
    ${screenY}px ${-screenX}px 0 rgba(0,0,255,0.7),
    ${-screenY}px ${screenX}px 0 rgba(0,255,0,0.7)`;
}

hero.addEventListener("mousemove", moveShadow);
