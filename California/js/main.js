// =================burger==========================

(function () {
    document.addEventListener('click', burgerInit);

    function burgerInit(e) {
        const burgerIcon = e.target.closest('.burger-icon');
        const burgerNavLink = e.target.closest('.nav__list');
        if (burgerIcon) {
            document.body.classList.toggle('body--opened-menu');
            return;
        }
        if (document.documentElement.clientWidth > 800) {
            return
        }
        if (burgerNavLink) {
            document.body.classList.remove('body--opened-menu');
        }
    }
})();

// ================slider===================================

document.addEventListener('DOMContentLoaded', function () {
    const swiperWrapper = document.querySelector('.slider');
    if (swiperWrapper) {
        new Swiper(swiperWrapper, {
            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: true,
            initialSlide: 0,

            pagination: {
                el: '.slider__pagination',
                clickable: true,
            },

            navigation: {
                nextEl: '.slider__next',
                prevEl: '.slider__prev',
            },

        });
    } else {
        console.error('Element with class "slider__wrapper" not found.');
    }
});
