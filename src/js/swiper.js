import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const projectSliderElement = document.querySelector('.project-swiper');
const projectSliderProps = {
  speed: 900,
  allowTouchMove: false,
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
  speed: 900,
  allowTouchMove: false,

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

const aboutMeElement = document.querySelector('.about-swiper');
const aboutSliderList = document.querySelector('.about-swiper-list');
const aboutSliderButton = document.querySelector('.about-swiper-btn');
function handleAboutSliderButton() {
  const aboutSliderItem = document.querySelectorAll('.about-swiper-item');
  const sliderCollection = [];
  for (const item of aboutSliderItem) {
    sliderCollection.push(item.textContent.trim());
  }
  sliderCollection[6] = sliderCollection[0];
  const aboutSliderListLastEl = aboutSliderList.lastElementChild;
  aboutSliderListLastEl.textContent = sliderCollection[6];
}
const aboutMeProps = {
  watchOverflow: false,
  oneWayMovement: true,
  rewind: true,
  speed: 900,
  allowTouchMove: false,

  loop: true,
  slidesPerView: 2,
  navigation: {
    nextEl: '.about-swiper-btn',
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 6,
    },
  },
};
const aboutMeSlider = new Swiper(aboutMeElement, aboutMeProps);
aboutSliderButton.addEventListener('click', handleAboutSliderButton);
