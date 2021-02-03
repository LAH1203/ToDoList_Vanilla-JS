const form = document.querySelector('.js-form');
const input = form.querySelector('input');
const greeting = document.querySelector('.js-greetings');
const initNameButton = document. querySelector('.js-initNameButton');

const USER_LS = 'currentUser';
const SHOWING_CN = 'showing';

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    initNameButton.classList.add(SHOWING_CN);
    greeting.innerText = `Hello, ${text}!`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser !== null)
        paintGreeting(currentUser);
    else
        askForName();
}

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function removeName() {
    localStorage.removeItem(USER_LS);
}

function handleNameSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName() {
    form.classList.add(SHOWING_CN);
    initNameButton.classList.remove(SHOWING_CN);
    form.addEventListener('submit', handleNameSubmit);
}

function initName() {
    removeName();
    form.classList.add(SHOWING_CN);
    greeting.classList.remove(SHOWING_CN);
    initNameButton.classList.remove(SHOWING_CN);
    loadName();
}

function init() {
    loadName();
}

init();