var swiper = new Swiper(".mySwiper-brands", {
    slidesPerView: 1,
    spaceBetween: 12,
    pagination: {
        el: ".mySwiper-brands .swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1.1,
            spaceBetween: 12,
            grid: { rows: 1, fill: "row" },
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
            grid: { rows: 2, fill: "row" },
        },

        1120: {
            slidesPerView: 4,
            spaceBetween: 20,
            grid: { rows: 2, fill: "row" },
        },
    },
});

var showBrands = document.getElementById("showBrands");
var hideBrands = document.getElementById("hideBrands");

showBrands.addEventListener("click", function() {
    if (window.innerWidth >= 1120) {
        swiper.params.grid.rows = 3;
    } else {
        swiper.params.grid.rows = 4;
    }
    swiper.update();
    showBrands.style.display = "none";
    hideBrands.style.display = "inline-flex";
});

hideBrands.addEventListener("click", function() {
    swiper.params.grid.rows = 2;
    swiper.update();
    hideBrands.style.display = "none";
    showBrands.style.display = "inline-flex";
});




var swiperDevices = new Swiper('.mySwiper-devices', {
    pagination: {
        el: '.mySwiper-devices .swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 15,
            grid: { rows: 1, fill: 'row' },
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 10,
            grid: { rows: 1, fill: 'row' },
        },
        1120: {
            slidesPerView: 4,
            spaceBetween: 15,
            grid: { rows: 1, fill: 'row' },
        },
    },
});