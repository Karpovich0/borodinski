// open menu variables
const body = document.querySelector(".body");
const header = document.querySelector(".header");
const headerNav = document.querySelector(".header__nav");
const middleLine = document.querySelector(".header__btn-toggle-middle-line");
const toggleButton = document.querySelector(".header__btn-toggle");
const logoWrapper = document.querySelector(".logo-wrapper--closed");
const headerList = document.querySelector(".header__list");
const headerItems = document.querySelectorAll(".header__item");
const headerItemCurrent = document.querySelector(".header__item--current");
const headerButtonWrapper = document.querySelector(".header__button-wrapper");
// open login form variables
const login = document.querySelector(".header__button");
const modal = document.querySelector(".modal");

if (toggleButton) {
    toggleButton.addEventListener("click", function(e) {
        toggleButton.classList.toggle("header__btn-toggle--closed");
        header.classList.toggle("header--closed");
        headerNav.classList.toggle("header__nav--closed");
        middleLine.classList.toggle("header__btn-toggle-middle-line--closed");
        logoWrapper.classList.toggle("logo-wrapper--closed");
        headerList.classList.toggle("header__list--closed");
        body.classList.toggle("body--open-menu");
        headerItems.forEach(function(item) {
            if (!item.classList.contains("header__item--current")) {
                item.classList.toggle("header__item--closed");
            } else {
                headerItemCurrent.classList.toggle("header__item--current-closed");
            }

        })
        headerButtonWrapper.classList.toggle("header__button-wrapper--closed");

    })
}

if (login) {
    login.addEventListener("click", function(e) {
        modal.classList.toggle("modal--open");
        if (!toggleButton.classList.contains("header__btn-toggle--closed")) {

        }
    })
}

function openMenu() {}