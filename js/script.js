"use strict";

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
// const modal = document.querySelector(".modal");
const modalWrapper = document.querySelector(".modal-wrapper");
const modalButtonClose = document.querySelector(".modal__button-close");

if (toggleButton) {
    toggleButton.addEventListener("click", function(e) {
        toggleMenu();
    });
}


if (login) {
    login.addEventListener("click", function(e) {
        toggleLoginForm();
    })
}

if (modalButtonClose) {
    modalButtonClose.addEventListener("click", function(e) {
        if (modalWrapper.classList.contains("modal-wrapper--opened")) {
            e.preventDefault();
            toggleLoginForm();
        }
    })
}

function toggleMenu() {
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

    });
    headerButtonWrapper.classList.toggle("header__button-wrapper--closed");
}

function toggleLoginForm() {
    modalWrapper.classList.toggle("modal-wrapper--opened");
    document.body.classList.toggle("body--lock");
    if (!toggleButton.classList.contains("header__btn-toggle--closed")) {
        toggleMenu();
    }
}

//Swiper

new Swiper(".reviews__slider",{
    // arrows
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"
    },
    grabCursor:true,
    keyboard:{
        enable:true,
        onlyViewport:true,        
    },
    // spaceBetween:80,
    loop:true,
    slidesPerView:1,
    
    // pagination:{
    //     el:".swiper-pagination",
    //     clickable:true,
    //     // dynamicBullets:true,
    //     renderBullet:function(index,className){
    //         return '<span class="' + className + '">' + (index+1)+'</span>';
    //     }
    // }
});
