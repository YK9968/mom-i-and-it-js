export const modalPositive = document.querySelector('.okey');
export const modalNegative = document.querySelector('.error');
const closeBtnPositive = document.querySelector('.modal-close-btn.positive');
const closeBtnNegative = document.querySelector('.modal-close-btn.negative');

export function onPositiveModal() {
  closeBtnPositive.addEventListener('click', closePosModal);
  document.addEventListener('keydown', closePosModEsc);
  modalPositive.addEventListener('click', closePosModBack);
}
export function onNegativeModal() {
  closeBtnNegative.addEventListener('click', closeNegModal);
  document.addEventListener('keydown', closeNegModEsc);
  modalNegative.addEventListener('click', closeNegModBack);
}
export function delPosListener() {
  closeBtnPositive.removeEventListener('click', closePosModal);
  document.removeEventListener('keydown', closePosModEsc);
  modalPositive.removeEventListener('click', closePosModBack);
}
export function delNegListener() {
  closeBtnNegative.removeEventListener('click', closeNegModal);
  document.removeEventListener('keydown', closeNegModEsc);
  modalNegative.removeEventListener('click', closeNegModBack);
}

export function showElement(element) {
  element.classList.remove('is-hidden');
}
export function hiddenElement(element) {
  element.classList.add('is-hidden');
}
export function hideElement(element) {
  element.classList.add('hidden');
}
export function disableBtn(element) {
  element.classList.add('disabled-button');
}
function closePosModal() {
  hiddenElement(modalPositive);
  delPosListener();
}
function closePosModEsc(e) {
  if (e.keyCode === 27) {
    hiddenElement(modalPositive);
  }
  delPosListener();
}
function closePosModBack(e) {
  if (e.target !== modalPositive) {
    return;
  }
  hiddenElement(modalPositive);
  delPosListener();
}

function closeNegModal() {
  hiddenElement(modalNegative);
  delNegListener();
}
function closeNegModEsc(e) {
  if (e.keyCode === 27) {
    hiddenElement(modalNegative);
    delNegListener();
  }
}
function closeNegModBack(e) {
  if (e.target !== modalNegative) {
    return;
  }
  hiddenElement(modalNegative);
  delNegListener();
}
