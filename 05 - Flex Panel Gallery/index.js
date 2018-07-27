function toggleActive(e) {
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}

function toggleOpen() {
  this.classList.toggle("open");
}

let panels = document.querySelectorAll(".panel");
panels.forEach(panel => {
  panel.addEventListener("click", toggleOpen);
  panel.addEventListener("transitionend", toggleActive);
});
