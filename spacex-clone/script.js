const first_sec = document.querySelector(".sec-1");
const menuMob = document.querySelector(".menu-mob");
const menuDesk = document.querySelector(".menu-desktop");
const icon = document.getElementById("icon");
const close_icon = document.getElementById("iconClose");

first_sec.addEventListener("click", (e) => {
  const check_icon = e.target.id == "icon";

  if (check_icon) {
    const check = menuMob.classList[1] == undefined;

    if (check) {
      menuMob.classList.add("show");
      icon.classList.add("rotate");
    } else {
      menuMob.classList.remove("show");
      icon.classList.remove("rotate");
    }
  }
});

first_sec.addEventListener("click", (e) => {
  const check_icon = e.target.id == "icon";
  const check_icon2 = e.target.id == "iconClose";

  if (check_icon || check_icon2) {
    const check = menuDesk.classList[1] == undefined;

    if (check) {
      menuDesk.classList.add("show");
      close_icon.classList.add("visible");
      icon.classList.add("rotate");
    } else {
      menuDesk.classList.remove("show");
      icon.classList.remove("rotate");
      close_icon.classList.remove("visible");
    }
  }
});

let previous_value;

document.addEventListener("scroll", () => {
  let value = window.pageYOffset;
  if (previous_value > value) {
    document.querySelector("header").classList.remove("downing");
    document.querySelector("header").classList.add("uping");
  } else if (previous_value < value) {
    document.querySelector("header").classList.add("downing");
    document.querySelector("header").classList.remove("uping");
  }
  previous_value = value;

  if (previous_value <= 600) {
    document.querySelector("header").classList.remove("uping");
  }
});
