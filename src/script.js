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
var brandsHidden = document.getElementById("brandsHidden");

showBrands.addEventListener('click', function () {
    brandsHidden.classList.add('show');
    showBrands.style.display = 'none';
    hideBrands.style.display = 'inline-flex';
});

hideBrands.addEventListener('click', function () {
    brandsHidden.classList.remove('show');
    hideBrands.style.display = 'none';
    showBrands.style.display = 'inline-flex';
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

var showDevices = document.getElementById("showDevices");
var hideDevices = document.getElementById("hideDevices");
var devicesHidden = document.getElementById("devicesHidden");

showDevices.addEventListener('click', function () {
    devicesHidden.classList.add('show');
    showDevices.style.display = 'none';
    hideDevices.style.display = 'inline-flex';
});

hideDevices.addEventListener('click', function () {
    devicesHidden.classList.remove('show');
    hideDevices.style.display = 'none';
    showDevices.style.display = 'inline-flex';
});


var swiperServicePrices = new Swiper('.mySwiper-serviceprices', {
    slidesPerView: 1.1,
    spaceBetween: 12,
    pagination: {
        el: '.mySwiper-serviceprices .swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 12,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        1120: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
    },
});
var showServicePrices = document.getElementById('showServicePrices');
var hideServicePrices = document.getElementById('hideServicePrices');
var servicePricesHidden = document.getElementById('ServicePricesHidden');

showServicePrices.addEventListener('click', function () {
    servicePricesHidden.classList.add('show');
    showServicePrices.style.display = 'none';
    hideServicePrices.style.display = 'inline-flex';
});

hideServicePrices.addEventListener('click', function () {
    servicePricesHidden.classList.remove('show');
    hideServicePrices.style.display = 'none';
    showServicePrices.style.display = 'inline-flex';
});