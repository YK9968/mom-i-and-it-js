import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getReviews } from './api';
import { renderReviewsList } from './render';

import getSlider from './swiper';

const reviewsList = document.querySelector('.reviews-list');
const errorNotification = document.querySelector('.reviews-error');
const reviewsSwiperBtn = document.querySelector('.reviews-btn-wrapper');
const reviewsSwiper = document.querySelector('.reviews-swiper');
const sliderProps = {
  navigation: {
    nextEl: '.btn-next',
    prevEl: '.btn-prev',
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

buildReviews();
getSlider(reviewsSwiper, sliderProps);

async function buildReviews() {
  try {
    const data = await getReviews();
    renderReviewsList(data, reviewsList);
    reviewsSwiperBtn.classList.remove('hidden');
  } catch (error) {
    reviewsList.classList.add('hidden');
    reviewsSwiper.classList.add('hidden');
    reviewsSwiperBtn.classList.add('hidden');
    errorNotification.classList.remove('hidden');

    iziToast.show({
      message: 'Sorry, something went wrong. The reviews are not available',
      messageColor: '#fafafb',
      messageSize: '16px',

      position: 'topRight',
      backgroundColor: '#ef4040',
    });
  }
}
