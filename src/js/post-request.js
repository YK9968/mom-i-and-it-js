
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import axios from 'axios';

// ============================== Selectors ==========================

const form = document.querySelector('.worktogether-form');
const inputEmail = document.querySelector('.worktogether-form-email');
const success = document.querySelector('.true');
const invalid = document.querySelector('.false');
const inputText = document.querySelector('.worktogether-form-comments');
const formButton = document.querySelector('.worktogether-form-button');

// ============================ Success check Email ========================

let textEmail;


inputEmail.addEventListener('input', checkSuccessEmail); 

function checkSuccessEmail(event) {
    textEmail = event.currentTarget.value.trim();
    console.log(textEmail);

    function validateEmail(email) {
        const example = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return example.test(email);
        
    }

    if(validateEmail(textEmail)) {
        invalid.classList.add('hidden');
        success.classList.remove('hidden');
    } else {
        invalid.classList.remove('hidden');
        success.classList.add('hidden');
    }
    
    if (textEmail.length === 0) {
        invalid.classList.add('hidden');
        }
    
}

// ======================== Success check Text ============================

let textComments;

inputText.addEventListener('input', checkSuccessComments);

function checkSuccessComments(event){
    textComments = event.currentTarget.value.trim();

    if(!textComments.length) {
        iziToast.error({
                    
            titleSize: '16px',
            message: `Please, enter your comment!!!`,
            messageColor: '#fff',
            messageSize: '16px',
            position: 'topRight',
            backgroundColor: 'red',
            close: false,
            icon: false,
    })
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
