import axios from 'axios';

import { modalPositive, modalNegative } from './modal';

// ============================== Selectors ==========================

const form = document.querySelector('.worktogether-form');
const inputEmail = document.querySelector('.worktogether-form-email');
const successEmail = document.querySelector('.true[data-action="email"]');
const invalidEmail = document.querySelector('.false[data-action="email"]');
const successComment = document.querySelector('.true[data-action="comment"]');
const invalidComment = document.querySelector('.false[data-action="comment"]');
const inputText = document.querySelector('.worktogether-form-comments');
const formButton = document.querySelector('.worktogether-form-button');

// ============================ Success check Email ========================

let successfulEm = false;
let textEmail;

function validateEmail(email) {
  const example = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  return example.test(email);
}

inputEmail.addEventListener('input', checkSuccessEmail);

function checkSuccessEmail(event) {
  textEmail = event.currentTarget.value.trim();

  if (validateEmail(textEmail)) {
    successfulEm = true;
    if (successfulEm && successfulCom) {
      formButton.classList.remove('disabled-button');
    }
    invalidEmail.classList.add('hidden');
    successEmail.classList.remove('hidden');
  } else {
    successfulEm = false;
    invalidEmail.classList.remove('hidden');
    successEmail.classList.add('hidden');
    formButton.classList.add('disabled-button');
  }

  if (textEmail.length === 0) {
    invalidEmail.classList.add('hidden');
  }
}

// ======================== Success check Text ============================

let textComments;
let successfulCom = false;

inputText.addEventListener('input', checkSuccessComments);

function checkSuccessComments(event) {
  textComments = event.currentTarget.value.trim();

  if (textComments.length > 5) {
    successfulCom = true;
    if (successfulEm && successfulCom) {
      formButton.classList.remove('disabled-button');
    }
    invalidComment.classList.add('hidden');
    successComment.classList.remove('hidden');
  } else {
    successfulCom = false;
    invalidComment.classList.remove('hidden');
    successComment.classList.add('hidden');
    formButton.classList.add('disabled-button');
  }

  if (textComments.length === 0) {
    invalidComment.classList.add('hidden');
  }
}

// =================== Submit Form and Post-request ====================

form.addEventListener('submit', onButtonSubmitForm);

axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api';

async function onButtonSubmitForm(evt) {
  evt.preventDefault();

  const email = inputEmail.value.trim();
  const comment = inputText.value.trim();

  try {
    await axios.post('/requests', {
      email,
      comment,
    });
    modalPositive.classList.remove('is-hidden');
    successEmail.classList.add('hidden');
    successComment.classList.add('hidden');
  } catch (error) {
    modalNegative.classList.remove('is-hidden');
    successEmail.classList.add('hidden');
    successComment.classList.add('hidden');
  }

  formButton.classList.add('disabled-button');
  successfulCom = false;
  form.reset();
}
