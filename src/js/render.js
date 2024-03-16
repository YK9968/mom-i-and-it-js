'use strict';

export function renderReviewsList(array, element) {
  const markUp = array
    .map(({ _id, author, avatar_url, review }) => {
      return `
      <li class="reviews-item swiper-slide" id="${_id}">
        <img class="reviews-item-img" src="${avatar_url}" alt="${author}" width="48" height="48" />
        <h3 class="reviews-item-title">${author}</h3>
        <p class="reviews-item-discription">
          ${review}
        </p>
      </li>
    `;
    })
    .join('');

  element.insertAdjacentHTML('beforeend', markUp);
}
