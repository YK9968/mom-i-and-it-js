
import axios from 'axios';

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
console.log(inputEmail);
let textEmail;

function validateEmail(email) {
        const example = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return example.test(email);
        
}

inputEmail.addEventListener('input', checkSuccessEmail); 

function checkSuccessEmail(event) {
    textEmail = event.currentTarget.value.trim();
    // console.log(textEmail);

    if(validateEmail(textEmail)) {
        invalidEmail.classList.add('hidden');
        successEmail.classList.remove('hidden');
    } else {
        invalidEmail.classList.remove('hidden');
        successEmail.classList.add('hidden');
    }
    
    if (textEmail.length === 0) {
        invalidEmail.classList.add('hidden');
    }
    
}

// ======================== Success check Text ============================

let textComments;

inputText.addEventListener('input', checkSuccessComments);

function checkSuccessComments(event){
    textComments = event.currentTarget.value.trim();

    if(textComments.length > 5) {
        invalidComment.classList.add('hidden');
        successComment.classList.remove('hidden');
    } else {
        invalidComment.classList.remove('hidden');
        successComment.classList.add('hidden');
    }

    if (textComments.length === 0) {
        invalidComment.classList.add('hidden');
    }
}

// ============================== Post request ==========================

axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api';

async function postRequests(email, comment) {
    await axios.post('/requests', {
        email,
        comment
    })
    .catch((error) => {
        console.log(error);
    })
    
}

// ============================ Disabled button =========================

formButton.addEventListener('click', disabledForm);

function disabledForm() {

    // if( !successEmail.classList.contains('hidden')) {
    //     formButton.classList.remove('disabled-button');
    // }

}



// ============================ Submit Form ===============================

form.addEventListener('submit', onButtonSubmitForm);

function onButtonSubmitForm(event) {
    event.preventDefault();

    postRequests(textEmail, textComments);

    try {
        
        
    console.log("all is ok");

    }
    catch(error) {
        console.log(error);
    }
    
}
