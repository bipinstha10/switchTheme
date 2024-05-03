function changeTheme() {
  document.querySelector("body").classList.toggle("light-mode");
  document.querySelector("body").classList.toggle("dark-mode");
  document.querySelector("div").classList.toggle("icon-container-light-mode");
  document.querySelector("div").classList.toggle("icon-container-dark-mode");
  document.querySelector("i").classList.toggle("bxs-sun");
  document.querySelector("i").classList.toggle("bxs-moon");
}
