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
// $("html,body").animate({scrollTop:0},500);

/* Анимация шапки ( + она появляется всегда, а не при скролле на указанный блок ) */
TweenMax.from(".section__main-logo", 1.2, {
  y: 20,
  opacity: 0,
  ease: Expo.easeInOut,
  delay: 0
});

/* Слайдер в блоке - работы */
var swiper = new Swiper('.swiper-container', { // объявляем слайдер 
  pagination: { // счетчик сладов "1/6"
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: { // указываем навигацию через стрелочки 
    nextEl: '.swiper-button-next', // стрелочка - следующий слайд 
    prevEl: '.swiper-button-prev', // стрелочка - предыдущий слайд
  },
  speed: 700, // скорость прокрутки слайдов 
  breakpoints: { // адаптация слайдера 
    1700: { // после размера экрана >1700 сработают указанный параметры 
        slidesPerView: 3, // количество слайдов, которых будет показываться 
        spaceBetween: 30, // отступ между слайдами 
    },
    1200: {
        slidesPerView: 2, // количество слайдов, которых будет показываться 
        spaceBetween: 15, // отступ между слайдами 
    },
    992: {
        slidesPerView: 1, // количество слайдов, которых будет показываться 
        spaceBetween: 5, // отступ между слайдами 
    }
  },
});

/* Анимированный процесс в блоке - способности */
$(function() {
  $('.section__skills-block-item').easyPieChart({ // обращение к 
      size: 180, // размер 
      barColor: 'white', // цвет линии
      scaleColor: false, // дополнительные пункты вокруг круга 
      lineWidth: 10, // ширина стенок круга 
      trackColor: 'black', // задний фон внутри круга 
      lineCap: 'circle', // тип полоски внутри
      animate: 3000, // скорость анимации 
  });
});

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




