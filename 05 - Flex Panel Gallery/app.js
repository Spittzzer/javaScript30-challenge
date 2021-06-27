const panels = Array.from(document.querySelectorAll(".panel"));

panels.forEach((el) => el.addEventListener("click", handleClick));

function handleClick() {
  if (this.classList.contains("open")) {
    closePanel(this);

    return;
  }

  openPanel(this);
}

function openPanel(panel) {
  panels.filter((el) => el !== panel).forEach(closePanel);

  panel.classList.add("open");
  panel.classList.add("open-active");
}

function closePanel(panel) {
  panel.classList.remove("open");
  panel.classList.remove("open-active");
}
