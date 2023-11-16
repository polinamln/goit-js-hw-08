import { saveToLs, loadFromLs } from './helpers';
import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
};

const storage_key = "feedback-form-state";
let formData = loadFromLs(storage_key) || {};

refs.form.addEventListener('submit', formSubmit);
refs.form.addEventListener('input', throttle(formInput, 500));

function formInput(event) {
    formData[event.target.name] = event.target.value;
    saveToLs(storage_key, formData);
};

function formSubmit(event) {
    event.preventDefault();

    const email = refs.form.elements.email.value;
    const message = refs.form.elements.message.value;

    if (!email || !message) {
        alert('Заповніть форму.')
        return;
    }

    const obj = {
        email,
        message
    };

    console.log(obj);

    event.target.reset();
    localStorage.removeItem(storage_key); 
};

function onLoad() {
    const email = formData.email;
    const message = formData.message;

    refs.form.elements.email.value = email || '';
    refs.form.elements.message.value = message || '';
};

onLoad();



