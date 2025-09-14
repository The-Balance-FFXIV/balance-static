var btn = document.querySelector("button.mobile-menu-button");
var menu = document.querySelector(".mobile-menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
