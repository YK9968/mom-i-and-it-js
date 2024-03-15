const modal = document.querySelector('[data-modal]');
const openModalBtn = document.querySelector('.worktogether-form-button');
const closeModalBtn = document.querySelectorAll('[data-modal-close]');

function openModal() {
  modal.classList.remove('is-hidden');
}

function closeModal() {
  modal.classList.add('is-hidden');
}
openModalBtn.addEventListener('click', openModal);

openModalBtn.addEventListener('click', openModal);

closeModalBtn.forEach(button => {
  button.addEventListener('click', closeModal);
});

modal.addEventListener('click', event => {
  if (event.target === modal) {
    closeModal();
  }
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !modal.classList.contains('is-hidden')) {
    closeModal();
  }
});
