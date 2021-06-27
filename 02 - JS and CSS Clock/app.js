const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function calcDegrees(time, max) {
  return (time / max) * 360 + 90;
}

setInterval(() => {
  const now = new Date();
  const secondHandDegrees = calcDegrees(now.getSeconds(), 60);
  const minuteHandDegrees = calcDegrees(now.getMinutes(), 60);
  const hourHandDegrees = calcDegrees(now.getHours(), 12);
  secondHand.style.transform = `rotate(${secondHandDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minuteHandDegrees}deg)`;
  hourHand.style.transform = `rotate(${hourHandDegrees}deg)`;
}, 1000);
