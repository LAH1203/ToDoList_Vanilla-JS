const calendarContainer = document.querySelector('.js-calendar');
const calendarTitle = calendarContainer.querySelector('h2');

function getTodayDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    
    calendarTitle.innerText = `${year}.${month < 10 ? `0${month}` : month}.${day < 10 ? `0${day}` : day}`;
    
}

function init() {
    getTodayDate();
    // 실시간 반영
    setInterval(getTodayDate, 1000);
}

init();
