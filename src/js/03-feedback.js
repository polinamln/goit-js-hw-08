import { saveToLs, loadFromLs } from './helpers';
var throttle = require('lodash.throttle');

const refs = {
    form: document.querySelector('.feedback-form'),
};

refs.form.addEventListener('input', formInput);
refs.form.addEventListener('submit', formSubmit);

refs.form.addEventListener('input', throttle(formInput, 500));

function formInput(event) {
    const key = event.target.name;
    const value = event.target.value;

    saveToLs(key, value);
};

function formSubmit(event) {
    event.preventDefault();

    const email = refs.form.elements.email.value;
    const message = refs.form.elements.message.value;

    if (!email || !message) {
        alert('Заповніть форму.')
    }

    const obj = {
        email,
        message
    };

    console.log(obj);
    
    event.target.reset();
    localStorage.removeItem('email');
    localStorage.removeItem('message');
};

function onLoad() {
    const email = loadFromLs('email');
    const message = loadFromLs('message');

    refs.form.elements.email.value = email;
    refs.form.elements.message.value = message;
};

onLoad();



