
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
    slidesPerView: 2.5,
    spaceBetween: 20,
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
    },
});

