document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".header-navbar__menu");
  const burgerButton = document.querySelector(".header-navbar__btn");
  const tabsButtons = document.querySelectorAll(".services-tabs__btn");
  const tabsItems = document.querySelectorAll(".services-tabs__items");

  tabsButtons.forEach((element) => {
    element.addEventListener("click", () => {
      let currentBtn = element;
      let tabId = currentBtn.getAttribute("data-tabs");
      let currentId = document.querySelector(tabId);

      tabsButtons.forEach((element) => {
        element.classList.remove("active");
      });
      tabsItems.forEach((element) => {
        element.classList.remove("active");
      });
      currentBtn.classList.add("active");
      currentId.classList.add("active");
    });
  });

  burgerButton.addEventListener("click", () => {
    if (menu.classList.contains("active")) {
      menu.classList.remove("active");
      burgerButton.classList.remove("active");
    } else {
      menu.classList.add("active");
      burgerButton.classList.add("active");
    }
  });
});
$('.slider').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  prevArrow: "<button class='prev'><</button>",
  nextArrow: "<button class='next'>></button>",
  dots:true,
});
