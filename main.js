let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}

let slides = document.querySelectorAll('.home .slides-container .slide');
let index = 0;

function next() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev() {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

function getAcc() {
    window.solana.connect
    window.solana.request({ method: "connect" })
}


var swiper = new Swiper('.roadmap-slider', {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

var lastScrollTop = 0;
navs = document.getElementById("navvs");
window.addEventListener("scroll", function () {
    var scrollTop = window.pageYOffset || document
        .documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        navs.style.top = "-90px";
    } else {
        navs.style.top = "0";
    }
    lastScrollTop = scrollTop;
})