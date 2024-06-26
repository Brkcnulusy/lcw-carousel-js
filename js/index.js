import { renderSlider } from "./ui.js";
import { get } from "./request.js";

const carousel = (function () {
  // Variables
  const BASE_URL = "http://localhost:3000/products";
  const slider = document.querySelector(".js-slider");
  const nextButton = document.querySelector(".js-next");
  const prevButton = document.querySelector(".js-prev");
  const windowWidth = window.screen.width;
  let startIndex = 0;
  const sliderOptions = {
    visibleItemCount: '',
    totalItemCount: 10,
    slideWidth: 288,
  };

  // EventListeners
  const eventListeners = function () {
    prevButton.addEventListener("click", _prevItem);
    nextButton.addEventListener("click", _nextItem);
    document.addEventListener("click", function (e) {
      const elementTarget = e.target;
      _toggleFavButton(elementTarget);
    });
  };
  // FunC

  function _getItemsPerPage() {
    if (windowWidth >= 1890) {
      return 6;
    } else if (windowWidth >= 1620) {
      return 5;
    } else if (windowWidth >= 1350) {
      return 4;
    } else if (windowWidth >= 1050) {
      return 3;
    } else if (windowWidth >= 670) {
      return 2;
    } else if (windowWidth >= 500) {
      return 1;
    } else {
      return 0;
    }
  }

  //   const updateSlider = function () {
  //     // for (let i = 0; i < sliderOptions.totalItemCount; i++) {
  //     //   const slide = slider.children[i];
  //     //   if (i >= startIndex && i < startIndex + sliderOptions.visibleItemCount) {
  //     //     slide.style.opacity = 1; // Slaydı görünür yap
  //     //   } else {
  //     //     slide.style.opacity = 0; // Slaydı görünmez yap
  //     //   }
  //     // }
  //     slider.style.transform = `translateX(-${startIndex * sliderOptions.slideWidth}px)`;
  //   };

  const _prevItem = function () {
    if (startIndex > 0) {
      startIndex--;
      slider.style.transform = `translateX(-${ startIndex * sliderOptions.slideWidth }px)`;
    }
  };

  const _nextItem = function () {
    if (startIndex < sliderOptions.totalItemCount - sliderOptions.visibleItemCount) {
      startIndex++;
      slider.style.transform = `translateX(-${startIndex * sliderOptions.slideWidth }px)`;
    }
  };

  const _toggleFavButton = function (target) {
    const control = target.closest(".js-fav");
    if (!control) return;
    const itemId = target.closest(".slider-item").getAttribute("data-id");

    // Favori butonunun resminin src'sini kontrol ederek dolu mu boş mu olduğunu belirleyin
    if (target.src.includes("empty-heart")) {
      target.src = "./assets/images/full-heart.svg"; // Boş kalp resmi
      localStorage.setItem(itemId, "true");
    } else {
      target.src = "./assets/images/empty-heart.svg"; // Dolu kalp resmi
      localStorage.removeItem(itemId);
    }
  };

  const _updateFavButtonStatus = function () {
    const slides = slider.querySelectorAll(".slider-item");
    slides.forEach((slide) => {
      const itemId = slide.getAttribute("data-id");
      const favButton = slide.querySelector(".js-fav");
      
      if (localStorage.getItem(itemId) === "true") {
        favButton.src = "./assets/images/full-heart.svg"; // Dolu kalp resmi
      } else {
        favButton.src = "./assets/images/empty-heart.svg"; // Boş kalp resmi
      }
    });
  };

  const _getProduct = async function () {
    const datas = await get(BASE_URL);
    renderSlider(datas, slider);
    _updateFavButtonStatus();

  };
  return {
    init: function () {
      _getProduct();
      eventListeners();
      sliderOptions.visibleItemCount = _getItemsPerPage();
    },
  };
})();

document.addEventListener("DOMContentLoaded", function () {
  carousel.init();
});
