# Link to the project : [🐉](https://kah3vich.github.io/Project-Portfolio/)

# Testing :
- #### Opera - ✅
- #### Chrome - ✅
- #### Yandex - ❌
- #### Mozilla - ❌
- #### IE - ❌

# The main part of the project :

## 1. Scroll on the page 
#### For its work you will need :
- ##### Library [Jquery 3.5.1](https://jquery.com/download/)
- ##### Library [NiceScroll 3.5.1.jq](https://github.com/inuyaksa/jquery.nicescroll)

#### Code :
HTML :
```
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.nicescroll/3.7.6/jquery.nicescroll.min.js"></script>
```
JS :
```
$(function() {  
  $("body").niceScroll({ // indicate where the scroll will work
    scrollspeed: 9, // scroll speed
    mousescrollstep: 9, // scroll speed with the mouse wheel
    cursorcolor: "transparent", // scroll color
    cursorborder: "1px solid transparent", // scroll outline
  });
});
```
##### Note: in the documentation for the library [NiceScroll.jq 3.5.1](https://github.com/inuyaksa/jquery.nicescroll) there are many other parameters that you may need, I showed only the parameters I need.

## 2. Icons
![icons](readme/icons.png)
### For its work you will need :
- ##### Library with icons [Font Awesome](https://fontawesome.com)
#### Code :
- ##### Go to them [site](https://fontawesome.com) and look for the desired icon by name, and connect
HTML :
```
<i class="fa fa-github" aria-hidden="true"></i>
```

## 3. Animation on the page
![icons](readme/wow.gif)
#### The project used 2 libraries for animation: wow and gsap
### WOW :
- ##### libraries [WOW 1.0.1.js](https://wowjs.uk)
- ##### libraries [WOW 3.1.0.css ](https://animate.style)
#### Code :
- ##### We connect
HTML :
```
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
<script src="https://cdn.rawgit.com/matthieua/WOW/1.0.1/dist/wow.min.js"></script>
```
- ##### Go to their [site](https://animate.style) and select the animation you need
- ##### Connect animation and set animation delay (data-wow-delay = "0.8s")
HTML : be sure to put the key class before the name of the animation - wow
```
<div class="block wow fadeInUp" data-wow-delay="0.8s">
```
- ##### In js, you need to run the animation
JS :
```
var wow = new WOW({ // settings for animation
  mobile: false, // disable animation on mobile devices (depends on screen size)
});
wow.init(); // animation initialization
```
##### Note: [githab](https://github.com/graingert/wow) has a complete list of all settings for animation
### GSAP :
- ##### libraries [Jquery 3.5.1](https://jquery.com/download/)
- ##### libraries [GSAP 3.5.1](https://greensock.com/get-started/)
#### Code :
- ##### We connect
HTML :
```
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js"></script>
```
- ##### Go to their [site](https://greensock.com/get-started/#easing) and select the animation you want
- ##### Connecting animation and setting its parameters
JS :
```
TweenMax.from(".block", 1.2, {
  y: 20,
  opacity: 0,
  ease: Expo.easeInOut,
  delay: 0
});
```
##### Note: their [website](https://greensock.com/get-started/#callbacks) has a complete list of all settings for animation

## 4. Circles from text
![logo](readme/logo.gif)
### For its work you will need:
- ##### libraries [Jquery 3.5.1](https://jquery.com/download/)
- ##### libraries [CircleType](https://github.com/peterhry/CircleType)
#### Code :
- ##### We connect
HTML :
```
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="https://rawgit.com/peterhry/CircleType/master/dist/circletype.min.js"></script>
```
- ##### Initializing to a specific block
JS :
```
const circleType = new CircleType(document.getElementById("block"));
```
- ##### Markup
HTML :
```
<h2 class="block" id="block"> test • test • test • test • test • </h2>
```
##### Note : 
- in [github](https://github.com/peterhry/CircleType) there is more information about the parameters
- to create a circle that will work when scrolling, the following JS Code is used:
```
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
```

## 5. Heading
![icons](readme/title.gif)
#### Code :
- ##### Pure html and css Code
HTML :
```
<h1 class="section__main-title-wrapper-text" data-text="KAH3VICH">KAH3VICH</h1>
```
CSS :
```
.section__main-title-wrapper-text {
  position: relative;
  color: crimson;
}
.section__main-title-wrapper-text::before,
.section__main-title-wrapper-text::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.section__main-title-wrapper-text::before {
  left: 4px;
  text-shadow: -31px 0 rgb(0, 174, 255);
  background: black;
}
.section__main-title-wrapper-text::after {
  left: -3px;
  text-shadow: -3px 0 blue;
  background: black;
}
.section__main-title-wrapper-text::before {
  clip: rect(54px, 250px, 56px, 40px);
}
@keyframes noise-anim {
  0% {
    clip-path: inset(40% 0 61% 0);
  }
  20% {
    clip-path: inset(92% 0 1% 0);
  }
  40% {
    clip-path: inset(43% 0 1% 0);
  }
  60% {
    clip-path: inset(25% 0 58% 0);
  }
  80% {
    clip-path: inset(54% 0 7% 0);
  }
  100% {
    clip-path: inset(58% 0 43% 0);
  }
}
.section__main-title-wrapper-text::before {
  animation: noise-anim 2s infinite linear alternate-reverse;
}
.section__main-title-wrapper-text::after {    
  animation: noise-anim 2s infinite linear alternate-reverse;
}
```

## 6. Menu
### For its work you will need:
- ##### libraries [Jquery 3.5.1](https://jquery.com/download/)
- ##### libraries [GSAP 3.5.1](https://greensock.com/get-started/)
#### Code :
- ##### We connect
```
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js"></script>
```

- ##### Markup :
HTML :
```
<div class="menu-open">
    <i class="fa fa-bars" aria-hidden="true"></i>
</div>

<div class="section__main-menu">

    <div class="menu-close">
        <i class="fa fa-times" aria-hidden="true"></i>
    </div>

    <div class="menu-links">
        <div class="link menu-link-1">
            <a href="#home">Home</a>
        </div>
        <div class="link menu-link-2">
            <a href="#live">About me</a>
        </div>
        <div class="link menu-link-3">
            <a href="#skills">Skills</a>
        </div>
        <div class="link menu-link-4">
            <a href="#work">Work</a>
        </div>
        <div class="link menu-link-5">
            <a href="#contact">Contact</a>
        </div>
    </div>
</div>
```
CSS :
```
.menu-open {
  position: absolute;
  margin: 30px 30px 0 0;
  right: 0;
  cursor: pointer;
}
.menu-close {
  position: absolute;
  margin: 17px 20px 0 0;
  right: 0;
  cursor: pointer;
}
.section__main-menu {
  position: fixed;
  width: 50%;
  height: 100vh;
  right: -50%;
  z-index: 2;
  background: #000;
  border-left: 2px solid #fff;
}
.menu-links {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
.menu-links .link {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
  margin: 4px 0;
  padding: 30px 0 16px 0;
}
.menu-links .link a {
  font-size: 32px;
  text-decoration: none;
  text-transform: uppercase;
  color: white;
}
.menu-link-1:hover,
.menu-link-2:hover,
.menu-link-3:hover,
.menu-link-4:hover,
.menu-link-5:hover {
  text-decoration: line-through;
}
```
JS :
```
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
```

## 7. Dropdown sign
![alert](readme/alert.png)
### For its work you will need:
- ##### libraries [Sweetalert2](https://sweetalert2.github.io)
#### Code :
- ##### We connect
HTML :
```
<script src="https://cdn.jsdelivr.net/npm/promise-polyfill@8/dist/polyfill.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/10.13.0/sweetalert2.min.css"/>
```
JS :
```
swal("Thank you", "Your letter has been sent!", "success");
```
#### Note : on their [site](https://sweetalert2.github.io) and [github](https://github.com/sweetalert2/sweetalert2), there are additional settings

## 8. Slider
![slider](readme/slider.png)
### For its work you will need:
- ##### libraries [Swiper](https://swiperjs.com/get-started/)
#### Code :
- ##### We connect
HTML :
```
<link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css">
<script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
```
- ##### HTML markup
HTML : 
```
<div class="swiper-container">
    <div class="swiper-wrapper">
        <!-- Slides -->
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
    </div>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
</div>
```

CSS : 
```
.swiper-container {
    width: 600px;
    height: 300px;
}
```

- ##### Setting :
JS :
```
var swiper = new Swiper('.swiper-container', { // declare the slider
  pagination: { // slad counter "1/6"
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: { // indicate navigation through arrows 
    nextEl: '.swiper-button-next', // arrow - next slide
    prevEl: '.swiper-button-prev', // arrow - previous slide
  },
  speed: 700, // slides scroll speed
  breakpoints: { // slider adaptation
    1700: { // after screen size> 1700 the specified parameters will work
        slidesPerView: 3, // number of slides to be shown
        spaceBetween: 30, // padding between slides
    },
    1200: {
        slidesPerView: 2, // number of slides to be shown
        spaceBetween: 15, // padding between slides
    },
    992: {
        slidesPerView: 1, // number of slides to be shown
        spaceBetween: 5, // padding between slides
    }
  },
});
```
#### Note : their [site](https://swiperjs.com/get-started/) has complete documentation for the entire slider system

## 9. Circle of progress
![progress](readme/progress.png)
### For its work you will need:

- ##### libraries [Jquery 3.5.1](https://github.com/rendro/easy-pie-chart)
- ##### libraries [Easy-Pie-Chart](https://github.com/rendro/easy-pie-chart)
#### Code :
- ##### We connect
HTML :
```
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/easy-pie-chart/2.1.6/jquery.easypiechart.min.js"></script>
```
JS :
```
$(function() {
  $('.section__skills-block-item').easyPieChart({ 
      size: 180, // размер 
      barColor: 'white', // цвет линии
      scaleColor: false, // дополнительные пункты вокруг круга 
      lineWidth: 10, // ширина стенок круга 
      trackColor: 'black', // задний фон внутри круга 
      lineCap: 'circle', // тип полоски внутри
      animate: 3000, // скорость анимации 
  });
});
```
- ##### Markup
HTML :
```
div class="block">
    <div class="item" data-percent="65">65%</div>
    <h2>Html</h2>
</div>
```

CSS :
```
.block {
    width: 25%;
    float: left;
}
.block h2 {
    text-align: center;
    color: #fff;
    text-transform: uppercase;
}
.block .item {
    position: relative;
    width: 180px;
    height: 180px;
    margin: 0 auto 19px;
    text-align: center;
    font-size: 40px;
    line-height: 180px;
    color: #fff;
}
.block canvas {
    position: absolute;
    top: 0;
    left: 0;
}
```
#### Note : on their [github](https://github.com/rendro/easy-pie-chart), there are additional settings


# useful links

### These services were used when working on the project

| Name | Description | Link |
| ------ | ------ | ------ |
| Giphy | Used to create gif | [🐰](https://giphy.com) |
| Squoosh | Used to compress photos | [🦝](https://squoosh.app) |
| Pixelplus | Various emoticons | [🦄](https://pixelplus.ru/samostoyatelno/stati/vnutrennie-faktory/tablica-simvolov-unicode.html) |
| Font Awesome | Various icons | [🦜](https://fontawesome.com)