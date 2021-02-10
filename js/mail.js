/* Включение всей анимации на странице с определенными параметрами */
var wow = new WOW({
mobile: false, // отключать анимацию на мобильных устройствах ( зависит от размера экрана )
});
wow.init(); // инициализация анимации 

/* Кастомная прокрутка на странице */
$(function() {  
$("body").niceScroll({
    scrollspeed: 8, // скорость прокрутки скролла 
    mousescrollstep: 8, // скорость прокрутки колесиком мыши 
    cursorcolor: "transparent", // цвет скролла 
    cursorborder: "1px solid transparent", // обводка скролла 
});
});

/* При загрузки страницы переводить наверх */ 
$("html,body").animate({scrollTop:0},500);

/* Анимация круга в логотипе */
const circleType = new CircleType(document.getElementById("logos"));

/* Анимация шапки ( + она появляется всегда, а не при скролле на указанный блок ) */
TweenMax.from(".section__main-logo", 1.2, {
    y: 20,
    opacity: 0,
    ease: Expo.easeInOut,
    delay: 0
});
TweenMax.from(".hr", 1.8, {
    y: 20,
    opacity: 0,
    ease: Expo.easeInOut,
    delay: 0
});
TweenMax.from(".section__main-button-container", 1.8, {
    y: 20,
    opacity: 0,
    ease: Expo.easeInOut,
    delay: 0
});
TweenMax.from(".section__main-text", 1.8, {
    y: 20,
    opacity: 0,
    ease: Expo.easeInOut,
    delay: 0
});

/* Анимация в центре страницы */
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


