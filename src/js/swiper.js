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

//*ABOUT*//

const aboutMeElement = document.querySelector('.about-swiper');
const aboutMeProps = {
  modules: [Navigation, Keyboard],
  slidesPerView: 2,
  watchOverflow: true,
  speed: 300,
  navigation: {
    nextEl: '.about-swiper-button-next',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 4,
      slidesPerGroup: 1,
    },
    1440: {
      slidesPerView: 6,
      slidesPerGroup: 1,
    },
  },
};

const aboutMeSlider = new Swiper(aboutMeElement, aboutMeProps);

const swiperBtn = document.querySelector('.about-swiper-btn');

swiperBtn.addEventListener('click', () => {
  const activeSlide = document.querySelector('.about-swiper-slide.active');
  const nextSlide = activeSlide.nextElementSibling;

  if (nextSlide) {
    activeSlide.classList.remove('active');
    nextSlide.classList.add('active');
  } else {
    const firstSlide = document.querySelector('.swiper-slide');
    activeSlide.classList.remove('active');
    firstSlide.classList.add('active');
  }
});
