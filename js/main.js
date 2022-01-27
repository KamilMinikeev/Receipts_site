//headerFixed
let headerPage = document.querySelector('.bottom-header');
let headerPage2 = document.querySelector('.top-header');
let sectionTop = document.querySelector('.section-top');
let sectionTopHeight = sectionTop.clientHeight;
let scrollPos = window.pageYOffset;
checkScroll(scrollPos, sectionTopHeight); //если обновить в середине страницы , шапка может исчезнуть ,поэтому запускаем эту функцию сразу
window.addEventListener("scroll", headerFixed);
window.addEventListener("resize", headerFixed);
function headerFixed() {
    let sectionTopHeight = sectionTop.clientHeight;
    let scrollPos = window.pageYOffset;
    checkScroll(scrollPos, sectionTopHeight);
}
function checkScroll(scrollPos, sectionTopHeight) {
    if (scrollPos > sectionTopHeight) {
        headerPage.classList.add("fixed");
        headerPage2.classList.add("fixed");
    }
    else {
        headerPage.classList.remove("fixed");
        headerPage2.classList.remove("fixed");
    }
}

//menu

let menu = document.querySelector(".bottom-header");
let menu2 = document.querySelector(".top-header");
let hamburger = document.querySelector(".top-header__hamburger");
let btnClose = document.querySelector(".btn-close");
hamburger.addEventListener("click", function () {
    menu.classList.add("is-active");
    menu2.classList.add("is-active");
})
btnClose.addEventListener("click", function () {
    menu.classList.remove("is-active");
    menu2.classList.remove("is-active");
})

$(function () {
    $('.documents-slider').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt=""></button>',
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 690,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 536,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: false,
                }
            },
        ]
    });

    $('.questions-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
    });

})