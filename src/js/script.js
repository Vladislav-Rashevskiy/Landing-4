document.addEventListener("DOMContentLoaded",() => {
    const menu = document.querySelector(".header-navbar__menu");
    const burgerButton = document.querySelector(".header-navbar__btn");

    burgerButton.addEventListener("click",() => {
       if(menu.classList.contains("active")){
           menu.classList.remove("active")
           burgerButton.classList.remove("active")
       }else{
        menu.classList.add("active")
        burgerButton.classList.add("active")
       }
    })
});

