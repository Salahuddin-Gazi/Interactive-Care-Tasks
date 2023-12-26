document.body.addEventListener("click", ({ target }) => {
  if (target.closest("#nav-icon")) {
    var nav_button = target.closest("#nav-icon");
    var nav_mobile_container = document.querySelector(".nav-mobile-container");
    if (nav_button.classList.contains("open")) {
      nav_button.classList.remove("open");
      if (nav_mobile_container?.classList.contains("open")) {
        nav_mobile_container.classList.remove("open");
      }
    } else {
      nav_button.classList.add("open");
      if (!nav_mobile_container?.classList.contains("open")) {
        nav_mobile_container.classList.add("open");
      }
    }
  }
});
