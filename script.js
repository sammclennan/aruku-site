const elements = {
  header: {
    el: document.getElementById("header"),
    headerNav: document.getElementById("header-nav"),
    navDropdownBtn: document.getElementById("nav-dropdown-btn"),
  }
}

function adjustForNavbar() {
  document.body.style.paddingTop = elements.header.el.offsetHeight + "px";
}

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
  adjustForNavbar();
});

window.addEventListener("resize", adjustForNavbar);

elements.header.navDropdownBtn.addEventListener("click", () => {
  elements.header.headerNav.classList.toggle("show");
});