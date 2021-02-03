const clockContainer = document.querySelector('.js-clock');
const clockTitle = clockContainer.querySelector('h1');

function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    
    if (hours < 12) {
        clockTitle.innerText = `AM ${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    } else if (hours == 12) {
        clockTitle.innerText = `PM ${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    } else {
        clockTitle.innerText = `PM ${(hours-12) < 10 ? `0${hours-12}` : hours-12}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    }
    
}

function init() {
    getTime();
    // 실시간 반영
    setInterval(getTime, 1000);
}

init();