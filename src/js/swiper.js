import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const projectSliderElement = document.querySelector('.project-swiper');
const projectSliderProps = {
  navigation: {
    nextEl: '.project-btn-next',
    prevEl: '.project-btn-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
};
const projectSlider = new Swiper(projectSliderElement, projectSliderProps);

const reviewsSliderElement = document.querySelector('.reviews-swiper');
const reviewsSliderProps = {
  navigation: {
    nextEl: '.reviews-btn-next',
    prevEl: '.reviews-btn-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    // when window width is >= 1440px
    1280: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
  },
};

const reviewsSlider = new Swiper(reviewsSliderElement, reviewsSliderProps);
