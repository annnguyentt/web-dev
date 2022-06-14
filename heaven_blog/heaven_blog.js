// sidebar Toggle trigger
const sidebarToggle = document.querySelector(".float-sidebar-toggle");
const wrapper = document.querySelector(".wrapper");
const overlay = wrapper.getElementsByClassName("overlay")[0];
const closingButton = document.querySelector(".close-button");

sidebarToggle.addEventListener("click", function () {
  wrapper.classList.add("on");
});

overlay.addEventListener("click", function (event) {
  wrapper.classList.remove("on");
});
closingButton.addEventListener("click", function (event) {
  wrapper.classList.remove("on");
});

// menubar toggle
const menuBar = document.querySelector(".menu-bar");
const menubarToggle = document.querySelector(".menu-toggle");
const menubarOption = document.querySelector(".menu-bar-option");
const expandedNav = menubarOption
  .querySelector("#menubar-display")
  .querySelector(".in-menu-expanded-nav");
const collapseToggle = expandedNav.querySelector(".collapse-toggle");

menubarToggle.addEventListener("click", function () {
  if (!menubarOption.classList.contains("on")) {
    menubarOption.classList.add("on");
  } else {
    menubarOption.classList.remove("on");
  }
});
document.addEventListener("click", function (event) {
  if (
    !menuBar.contains(event.target) &&
    !expandedNav.contains(event.target) &&
    !menubarOption.contains(event.target)
  ) {
    menubarOption.classList.remove("on");
  }
});

expandedNav.addEventListener("click", function (event) {
  if (expandedNav.classList.contains("on") && event.target == collapseToggle) {
    expandedNav.classList.remove("on");
  } else {
    expandedNav.classList.add("on");
  }
});

// back to top button
const backToTop = document.querySelector(".back-to-top");
const scrollLimit = 600;
document.addEventListener("scroll", function () {
  if (window.scrollY > scrollLimit) {
    backToTop.classList.remove("hidden");
  } else {
    backToTop.classList.add("hidden");
  }
});

