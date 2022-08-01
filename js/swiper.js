// create slider when width less than 769px variables
const advantagesSlider = document.querySelector(".advantages__slider");
const advantagesList = document.querySelector(".advantages__list");
const advantagesItems = document.querySelectorAll(".advantages__item");
const advantagesPaginationWrapper = document.querySelector(".swiper-pagination-wrapper--advatages");
let screenWidthStatus = 1; // This variable accept two values - 0 or 1. When 0 - screen with <= 768px; when 1 - screen width > 768px. This variable was created to reduce number of rebuilding html structure. Be default width > 768px.

//Swiper for reviews

new Swiper(".reviews__slider",{
    // arrows
    navigation:{
        nextEl:".reviews__button--forward",
        prevEl:".reviews__button--back"
    },
    grabCursor:true,    
    spaceBetween:20,
    loop:true,
    slidesPerView:1,     
    pagination:{
        el:".swiper-pagination--reviews",
        clickable:true,   
    }
});

//Swiper for advantages

// breakpoint where swiper will be destroyed   
const breakpoint = window.matchMedia("(min-width:769px)");

// keep track of swiper instances to destroy later
let advantagesSwiper;

//listen for window resize event
window.addEventListener('resize', function(event){          
    breakpointChecker();
});
  
// kickstart of swiper for advantages
breakpointChecker();

function breakpointChecker() {
    let breakpointStatus;
    breakpoint.matches?breakpointStatus=1:breakpointStatus=0;    
    if(breakpointStatus===screenWidthStatus) {
        return 2;
    }else{
        screenWidthStatus = breakpointStatus;
        switch(breakpointStatus){
            case 0:
                toggleSwiperHtml();
                enableSwiper();
                return 0;                
            case 1:      
                toggleSwiperHtml();
                if ( advantagesSwiper !== undefined ) advantagesSwiper.destroy( true, true );
                return 1;                
        }
    };
};
    
function enableSwiper() {
    advantagesSwiper = new Swiper(".advantages__slider",{    
    grabCursor:true,   
    spaceBetween:20,
    loop:true,
    slidesPerView:1,   
    pagination:{
        el:".advatages__pagination",
        clickable:true,   
    }
    });  
};

function toggleSwiperHtml(){
    advantagesSlider.classList.toggle("swiper");
    advantagesList.classList.toggle("advantages__list--without-swiper");
    advantagesList.classList.toggle("swiper-wrapper");      
    advantagesItems.forEach(item => item.classList.toggle("advantages__item--without-swiper"));
    advantagesItems.forEach(item => item.classList.toggle("swiper-slide"));
    advantagesPaginationWrapper.classList.toggle("swiper-pagination-wrapper--advatages-without-swiper");
};
