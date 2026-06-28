document.addEventListener("DOMContentLoaded", function () {
  // SIDEBAR
  const sidebar = document.querySelector(".sidebar");
  const mainMenuOpen = document.getElementById("mainMenuOpen");
  const burgerClose = document.querySelector(".sidebar-header .icon");

  const overlay = document.createElement("div");
  overlay.classList.add("sidebar-overlay");
  document.body.appendChild(overlay);

  function openSidebar() {
    sidebar.classList.add("sidebar--open");
    overlay.classList.add("sidebar-overlay--open");
    document.body.style.overflow = "hidden";
  }
  function closeSidebar() {
    sidebar.classList.remove("sidebar--open");
    overlay.classList.remove("sidebar-overlay--open");
    document.body.style.overflow = "";
  }

  if (mainMenuOpen) mainMenuOpen.addEventListener("click", openSidebar);
  if (burgerClose) burgerClose.addEventListener("click", closeSidebar);
  overlay.addEventListener("click", closeSidebar);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeSidebar();
  });

  const tabs = document.querySelectorAll(".tabs__item");
  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      tabs.forEach(function (t) {
        t.classList.remove("tabs__item--active");
      });
      tab.classList.add("tabs__item--active");
    });
  });

  // SWIPER BRANDS
  var swiper = new Swiper(".mySwiper-brands", {
    slidesPerView: 1,
    spaceBetween: 10,
    allowTouchMove: true,
    pagination: {
      el: ".mySwiper-brands .swiper-pagination",
      clickable: true,
    },
  });


  var showBrands = document.getElementById("showBrands");
  var hideBrands = document.getElementById("hideBrands");
  var swiperBrandsEl = document.querySelector(".mySwiper-brands");
  if (showBrands)
    showBrands.addEventListener("click", function () {
      swiperBrandsEl.classList.add("show-all");
      showBrands.style.display = "none";
      hideBrands.style.display = "inline-flex";
      applyLimits();
    });
  if (hideBrands)
    hideBrands.addEventListener("click", function () {
      swiperBrandsEl.classList.remove("show-all");
      hideBrands.style.display = "none";
      showBrands.style.display = "inline-flex";
      applyLimits();
    });

  // SWIPER DEVICES
  var swiperDevices = new Swiper(".mySwiper-devices", {
    slidesPerView: 1.2,
    spaceBetween: 12,
    allowTouchMove: true,
    pagination: {
      el: ".mySwiper-devices .swiper-pagination",
      clickable: true,
    },
  });

  var showDevices = document.getElementById("showDevices");
  var hideDevices = document.getElementById("hideDevices");
  var swiperDevicesEl = document.querySelector(".mySwiper-devices");
  if (showDevices)
    showDevices.addEventListener("click", function () {
      swiperDevicesEl.classList.add("show-all");
      showDevices.style.display = "none";
      hideDevices.style.display = "inline-flex";
      applyLimits();
    });
  if (hideDevices)
    hideDevices.addEventListener("click", function () {
      swiperDevicesEl.classList.remove("show-all");
      hideDevices.style.display = "none";
      showDevices.style.display = "inline-flex";
      applyLimits();
    });

  // SWIPER SERVICE PRICES
  var swiperServicePrices = new Swiper(".mySwiper-serviceprices", {
    slidesPerView: 1.2,
    spaceBetween: 12,
    allowTouchMove: true,
    pagination: {
      el: ".mySwiper-serviceprices .swiper-pagination",
      clickable: true,
    },
  });

  var showServicePrices = document.getElementById("showServicePrices");
  var hideServicePrices = document.getElementById("hideServicePrices");
  var swiperServiceEl = document.querySelector(".mySwiper-serviceprices");

  if (showServicePrices)
    showServicePrices.addEventListener("click", function () {
      swiperServiceEl.classList.add("show-all");
      showServicePrices.style.display = "none";
      hideServicePrices.style.display = "inline-flex";
      applyLimits();
    });

  if (hideServicePrices)
    hideServicePrices.addEventListener("click", function () {
      swiperServiceEl.classList.remove("show-all");
      hideServicePrices.style.display = "none";
      showServicePrices.style.display = "inline-flex";
      applyLimits();
    });

  function applyLimits() {
    var w = window.innerWidth;

    var brandSlides = document.querySelectorAll(
      ".mySwiper-brands .swiper-slide",
    );
    var brandExpanded = document
      .querySelector(".mySwiper-brands")
      .classList.contains("show-all");
    var deviceSlides = document.querySelectorAll(
      ".mySwiper-devices .swiper-slide",
    );
    var deviceExpanded = document
      .querySelector(".mySwiper-devices")
      .classList.contains("show-all");
    var priceSlides = document.querySelectorAll(
      ".mySwiper-serviceprices .swiper-slide",
    );
    var priceExpanded = document
      .querySelector(".mySwiper-serviceprices")
      .classList.contains("show-all");

    brandSlides.forEach(function (slide, i) {
      if (w >= 768 && w < 1120) {
        slide.style.display = i >= 6 && !brandExpanded ? "none" : "";
      } else if (w >= 1120) {
        slide.style.display = i >= 8 && !brandExpanded ? "none" : "";
      } else {
        slide.style.display = "";
      }
    });

    deviceSlides.forEach(function (slide, i) {
      if (w >= 768 && w < 1120) {
        slide.style.display = i >= 3 && !deviceExpanded ? "none" : "";
      } else if (w >= 1120) {
        slide.style.display = i >= 4 && !deviceExpanded ? "none" : "";
      } else {
        slide.style.display = "";
      }
    });

    priceSlides.forEach(function (slide, i) {
      if (w >= 768 && w < 1120) {
        slide.style.display = i >= 3 && !priceExpanded ? "none" : "";
      } else {
        slide.style.display = "";
      }
    });
  }

  applyLimits();
  window.addEventListener("resize", applyLimits);
});
