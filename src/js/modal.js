export const modalPositive = document.querySelector('.okey');
export const modalNegative = document.querySelector('.error');
const openModalBtnFirst = document.querySelector('.worktogether-form-button');
const closeModalBtns = document.querySelectorAll('[data-modal-close]');
const modalBackdrops = document.querySelectorAll('.backdrop');
const openModalBtnSecond = document.querySelector('.worktogether-form-button');

export function openModal(modal) {
  modal.classList.remove('is-hidden');
}

function closeModal(modal) {
  modal.classList.add('is-hidden');
}

// openModalBtnFirst.addEventListener('click', () => {
//   openModal(modalPositive);
// });

// openModalBtnSecond.addEventListener('click', () => {
//   openModal(modalNegative);
// });

closeModalBtns.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('[data-modal]');
    closeModal(modal);
  });
});

modalBackdrops.forEach(backdrop => {
  backdrop.addEventListener('click', event => {
    if (event.target === backdrop) {
      const modal = backdrop.querySelector('[data-modal]');
      closeModal(modal);
    }
  });
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    modalBackdrops.forEach(backdrop => {
      const modal = backdrop.querySelector('[data-modal]');
      closeModal(modal);
    });
  }
});
