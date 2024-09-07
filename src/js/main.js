const $BODY = document.querySelector(".body");
const $HAMBURGER = document.querySelector(".header__hamburger");
const $MENU = document.querySelector(".header__menu");
const $TAB_BUTTONS = document.querySelectorAll(".tab-button");
const $TAB_FIRST_BUTTON = document.querySelector(".tab-button");
const $TAB_ITEMS = document.querySelectorAll(".tab-item");

const toggleHamburger = () => {
    $HAMBURGER.classList.toggle("header__hamburger--active");
    $MENU.classList.toggle("header__menu--active");
    $BODY.classList.toggle("body--lock");
};

$HAMBURGER.addEventListener("click", toggleHamburger);

const swiper = new Swiper(".segway-list__container", {
    direction: "horizontal",
    loop: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    slidesPerView: 4,

    breakpoints: {
        1022: {
            slidesPerView: 7,
            enabled: false,
            grid: {
                rows: 2,
            },
        },
    },
});

const orderSwiper = new Swiper(".order-segway__swiper", {
    direction: "horizontal",
    loop: true,
    slidesPerView: 1,

    pagination: {
        el: ".swiper-pagination",
    },
    // autoHeight: true,
});

$TAB_BUTTONS.forEach((button) => {
    button.addEventListener("click", function () {
        const BUTTON_ID = this.getAttribute("data-id");
        const $MUTCH_ITEM = document.querySelector(BUTTON_ID);
        if (!this.classList.contains("tab-button--active")) {
            $TAB_BUTTONS.forEach((item) => {
                item.classList.remove("tab-button--active");
            });

            $TAB_ITEMS.forEach((item) => {
                item.classList.remove("tab-item--active");
            });

            $MUTCH_ITEM.classList.add("tab-item--active");
            this.classList.add("tab-button--active");
        }
    });
});

$TAB_FIRST_BUTTON.click();



