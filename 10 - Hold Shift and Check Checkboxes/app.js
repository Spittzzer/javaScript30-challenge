const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function checkFunc(e) {
  let middle = false;

  if (e.shiftKey && this.checked) {
    checkboxes.forEach((checkbox) => {
      console.log(checkbox);

      if (checkbox === this || checkbox === lastChecked) {
        middle = !middle;
      }

      if (middle) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
  console.log(this);
}

checkboxes.forEach((checkbox) => checkbox.addEventListener("click", checkFunc));
