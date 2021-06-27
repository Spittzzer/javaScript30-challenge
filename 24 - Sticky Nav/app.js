const nav = document.querySelector("#main");
const topOff = nav.offsetTop;
const logo = document.querySelector(".logo");

function fixNavBar() {
  if (window.scrollY >= topOff) {
    document.body.classList.add("fixed-nav");
    document.body.style.paddingTop = nav.offsetHeight + "px";
    logo.style.maxWidth = "200px";
  } else {
    document.body.classList.remove("fixed-nav");
    document.body.style.paddingTop = 0;
    logo.style.maxWidth = "0px";
  }
}

window.addEventListener("scroll", fixNavBar);
