let bg_menu = document.querySelector(".fa-solid");
let show_menu = document.querySelector(".nav_burger");

bg_menu.addEventListener("click", () => {
  show_menu.classList.toggle("hidden");
});
