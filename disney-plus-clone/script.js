const menu = document.getElementById("menu");

document.addEventListener("scroll", () => {
  const $logo = menu.querySelector(".logo");
  const $button = menu.querySelector(".buttons button.assine");
  console.log(scrollY);

  if (scrollY > 500) {
    $logo.style.opacity = "1";
    $button.style.opacity = "1";
    menu.style.backgroundColor = "#050714";
  } else {
    $logo.style.opacity = "0";
    $button.style.opacity = "0";
    menu.style.backgroundColor = "transparent";
  }
});
