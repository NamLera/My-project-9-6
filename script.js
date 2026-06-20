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
        allowTouchMove: true,
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
        on: {
        breakpoint: function(swiper) {
            if (window.innerWidth >= 768) {
                swiper.allowTouchMove = false;
            } else {
                swiper.allowTouchMove = true;
            }
        }
    }
    });

    var showBrands = document.getElementById("showBrands");
    var hideBrands = document.getElementById("hideBrands");
    var swiperBrandsEl = document.querySelector('.mySwiper-brands');
    if (showBrands) showBrands.addEventListener('click', function() {
        swiperBrandsEl.classList.add('show-all');
        showBrands.style.display = 'none';
        hideBrands.style.display = 'inline-flex';
    });
    if (hideBrands) hideBrands.addEventListener('click', function() {
        swiperBrandsEl.classList.remove('show-all');
        hideBrands.style.display = 'none';
        showBrands.style.display = 'inline-flex';
    });

    // SWIPER DEVICES
    var swiperDevices = new Swiper('.mySwiper-devices', {
        allowTouchMove: true,
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
                allowTouchMove: false,
                grid: { rows: 1, fill: "row" } 
            },
            1120: { 
                slidesPerView: 4, 
                spaceBetween: 15,
                allowTouchMove: false,
                grid: { rows: 2, fill: "row" } 
            },
        },
    });

    var showDevices = document.getElementById("showDevices");
    var hideDevices = document.getElementById("hideDevices");
    var swiperDevicesEl = document.querySelector('.mySwiper-devices');
    if (showDevices) showDevices.addEventListener('click', function() {
        swiperDevicesEl.classList.add('show-all');
        showDevices.style.display = 'none';
        hideDevices.style.display = 'inline-flex';
    });
    if (hideDevices) hideDevices.addEventListener('click', function() {
        swiperDevicesEl.classList.remove('show-all');
        hideDevices.style.display = 'none';
        showDevices.style.display = 'inline-flex';
    });

    // SWIPER SERVICE PRICES
    var swiperServicePrices = new Swiper('.mySwiper-serviceprices', {
    slidesPerView: 1,
    spaceBetween: 12,
    pagination: { 
        el: '.mySwiper-serviceprices .swiper-pagination', 
        clickable: true 
    },
    breakpoints: {
        768: { 
            slidesPerView: 3, 
            spaceBetween: 10,
        },
        1120: { 
            slidesPerView: 4, 
            spaceBetween: 15,
        },
    },
    on: {
        breakpoint: function(swiper) {
            if (window.innerWidth >= 768) {
                swiper.allowTouchMove = false;
            } else {
                swiper.allowTouchMove = true;
            }
        }
    }
});

    var showServicePrices = document.getElementById('showServicePrices');
    var hideServicePrices = document.getElementById('hideServicePrices');
    var swiperServiceEl = document.querySelector('.mySwiper-serviceprices');
    
    if (showServicePrices) showServicePrices.addEventListener('click', function() {
        swiperServiceEl.classList.add('show-all');
        showServicePrices.style.display = 'none';
        hideServicePrices.style.display = 'inline-flex';
    });
    
    if (hideServicePrices) hideServicePrices.addEventListener('click', function() {
        swiperServiceEl.classList.remove('show-all');
        hideServicePrices.style.display = 'none';
        showServicePrices.style.display = 'inline-flex';
    });


});
