
let mySwiper = new Swiper('#slide01', {
    loop: true,
    slidesPerView: 6,
    spaceBetween: 25,
    navigation: {
        nextEl: '.swiper-button-next',
    },
});


let mySwiper2 = new Swiper('#slide02', {
    loop: true,
    slidesPerView: 1.25,
    spaceBetween: 30,
    navigation: {
        prevEl: '.swiper-button-prev02',
        nextEl: '.swiper-button-next02',
    },
    breakpoints: {
        768: {
            slidesPerView: 1,
        }
    },
    breakpoints: {
        1240: {
            slidesPerView: 4,
        }
    }
});

