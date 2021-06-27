const sliderImages = document.querySelectorAll(".slide-in");

document.addEventListener("scroll", function () {
  Array.from(sliderImages).forEach((element) => {
    if (
      scrollY + 200 > element.offsetTop &&
      scrollY - 200 < element.offsetTop
    ) {
      element.classList.add("active");
    }
  });
});
