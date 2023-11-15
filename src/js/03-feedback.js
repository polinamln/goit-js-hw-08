import { saveToLs, loadFromLs } from './helpers';
var throttle = require('lodash.throttle');

const refs = {
    form: document.querySelector('.feedback-form'),
};

refs.form.addEventListener('input', formInput);
refs.form.addEventListener('submit', formSubmit);

refs.form.addEventListener('input', throttle(formInput, 500));

function formInput(event) {
    const key = 'feedback-form-state';
    const valueEmail = event.target.elements.email.value;
    valueMessage = event.target.elements.message.value;

    saveToLs(key, [valueEmail, valueMessage]);
};

function formSubmit(event) {
    event.preventDefault();

    const email = refs.form.elements.email.value;
    const message = refs.form.elements.message.value;

    if (!email || !message) {
        alert('Заповніть формую')
    }

    const obj = {
        email,
        message
    };

    console.log(obj);
    
    event.target.reset();
    localStorage.removeItem('feedback-form-state');
};

function onLoad() {
    const email = loadFromLs('feedback-form-state');

    refs.form.elements.email.value = email;
    refs.form.elements.message.value = message;
};

onLoad();



