document.addEventListener('DOMContentLoaded', function () {

    // SIDEBAR
    const sidebar = document.querySelector('.sidebar');
    const mainMenuOpen = document.getElementById('mainMenuOpen');
    const burgerClose = document.querySelector('.sidebar-header .icon');

    const overlay = document.createElement('div');
    overlay.classList.add('sidebar-overlay');
    document.body.appendChild(overlay);

    function openSidebar() {
        sidebar.classList.add('sidebar--open');
        overlay.classList.add('sidebar-overlay--open');
        document.body.style.overflow = 'hidden';
    }
    function closeSidebar() {
        sidebar.classList.remove('sidebar--open');
        overlay.classList.remove('sidebar-overlay--open');
        document.body.style.overflow = '';
    }

    if (mainMenuOpen) mainMenuOpen.addEventListener('click', openSidebar);
    if (burgerClose) burgerClose.addEventListener('click', closeSidebar);
    overlay.addEventListener('click', closeSidebar);
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeSidebar();
    });

    const tabs = document.querySelectorAll('.taps__item');
    tabs.forEach(function(tab) {
        tab.addEventListener('click', function() {
            tabs.forEach(function(t) { t.classList.remove('tabs__item--active'); });
            tab.classList.add('tabs__item--active');
        });
    });

    

    // SWIPER BRANDS
    var swiper = new Swiper(".mySwiper-brands", {
        slidesPerView: 0.9,
        spaceBetween: 16,
        pagination: { 
            el: ".mySwiper-brands .swiper-pagination", 
            clickable: true },
        breakpoints: {
            320: {
            slidesPerView: 1,
            spaceBetween: 12,
            },
            768: { 
                slidesPerView: 3, 
                spaceBetween: 10, 
                grid: { rows: 2, fill: "row" } 
            },
            1120: { 
                slidesPerView: 4, 
                spaceBetween: 15, 
                grid: { rows: 2, fill: "row" } 
            },
        },
    });

    var showBrands = document.getElementById("showBrands");
    var hideBrands = document.getElementById("hideBrands");
    var brandsHidden = document.getElementById("brandsHidden");

    if (showBrands) showBrands.addEventListener('click', function() {
        brandsHidden.classList.add('show');
        showBrands.style.display = 'none';
        hideBrands.style.display = 'inline-flex';
    });
    if (hideBrands) hideBrands.addEventListener('click', function() {
        brandsHidden.classList.remove('show');
        hideBrands.style.display = 'none';
        showBrands.style.display = 'inline-flex';
    });

    // SWIPER DEVICES
    var swiperDevices = new Swiper('.mySwiper-devices', {
        pagination: { 
            el: '.mySwiper-devices .swiper-pagination', 
            clickable: true },
        breakpoints: {
            320: { 
                slidesPerView: 1, 
                spaceBetween: 12,
            },
            768: { 
                slidesPerView: 3, 
                spaceBetween: 10,
                grid: { rows: 1, fill: "row" } 
            },
            1120: { 
                slidesPerView: 4, 
                spaceBetween: 15,
                grid: { rows: 2, fill: "row" } 
            },
        },
    });

    var showDevices = document.getElementById("showDevices");
    var hideDevices = document.getElementById("hideDevices");
    var devicesHidden = document.getElementById("devicesHidden");

    if (showDevices) showDevices.addEventListener('click', function() {
        devicesHidden.classList.add('show');
        showDevices.style.display = 'none';
        hideDevices.style.display = 'inline-flex';
    });
    if (hideDevices) hideDevices.addEventListener('click', function() {
        devicesHidden.classList.remove('show');
        hideDevices.style.display = 'none';
        showDevices.style.display = 'inline-flex';
    });

    // SWIPER SERVICE PRICES
    var swiperServicePrices = new Swiper('.mySwiper-serviceprices', {
        slidesPerView: 0.9,
        spaceBetween: 16,
        pagination: { 
            el: '.mySwiper-serviceprices .swiper-pagination', 
            clickable: true 
        },
        breakpoints: {
            768: { 
                slidesPerView: 3, 
                spaceBetween: 10 
            },
            1120: { 
                slidesPerView: 4, 
                spaceBetween: 15 
            },
        },
    });

    var showServicePrices = document.getElementById('showServicePrices');
    var hideServicePrices = document.getElementById('hideServicePrices');
    var servicePricesHidden = document.getElementById('ServicePricesHidden');

    if (showServicePrices) showServicePrices.addEventListener('click', function() {
        servicePricesHidden.classList.add('show');
        showServicePrices.style.display = 'none';
        hideServicePrices.style.display = 'inline-flex';
    });
    if (hideServicePrices) hideServicePrices.addEventListener('click', function() {
        servicePricesHidden.classList.remove('show');
        hideServicePrices.style.display = 'none';
        showServicePrices.style.display = 'inline-flex';
    });

});
