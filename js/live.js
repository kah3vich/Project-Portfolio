/* Включение всей анимации на странице с определенными параметрами */
var wow = new WOW({
mobile: false, // отключать анимацию на мобильных устройствах ( зависит от размера экрана )
});
wow.init(); // инициализация анимации 

/* Кастомная прокрутка на странице */
$(function() {  
$("body").niceScroll({
    scrollspeed: 9, // скорость прокрутки скролла 
    mousescrollstep: 9, // скорость прокрутки колесиком мыши 
    cursorcolor: "transparent", // цвет скролла 
    cursorborder: "1px solid transparent", // обводка скролла 
});
});

/* При загрузки страницы переводить наверх */ 
$("html,body").animate({scrollTop:0},500);


/* Меню */
let t1 = new TimelineMax({ paused: true });

t1.to(".section__main-menu", 0.4, {
    right: "0%",
});

t1.staggerFrom(".link", 0.4, { opacity: 0 }, 0.1, "-=0.2");

t1.reverse();
$(document).on("click", ".menu-open", function () {
    t1.reversed(!t1.reversed());
});
$(document).on("click", ".menu-close, .link", function () {
    t1.reversed(!t1.reversed());
});

/* Анимация круга в логотипе */
const circleType = new CircleType(document.getElementById("logos"));

/* Анимация круга в центре страницы */
const circle = new CircleType(
document.getElementById("circle")
);

$(window).scroll(function() {
    var offset = $(window).scrollTop();
    offset = offset * 0.4;

    $(".section__main-title-container__circle").css({
        "-moz-transform": "rotate(" + offset + "deg)",
        "-webkit-transform": "rotate(" + offset + "deg)",
        "-o-transform": "rotate(" + offset + "deg)",
        "-ms-transform": "rotate(" + offset + "deg)",
        transform: "rotate(" + offset + "deg)"
    });
});

/* Анимация шапки ( + она появляется всегда, а не при скролле на указанный блок ) */
TweenMax.from(".section__main-logo", 1.2, {
    y: 20,
    opacity: 0,
    ease: Expo.easeInOut,
    delay: 0
});
