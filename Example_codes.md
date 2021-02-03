1. 클릭 이벤트 참고 - 1(Javascript code)
```javascript
// const title = document.getElementById('title');
const title = document.querySelector('#title');

const BASE_COLOR = 'rgb(52, 73, 94)';
const OTHER_COLOR = '#7f8c8d';

function handleClick() {
  const currentColor = title.style.color;
  if (currentColor == BASE_COLOR) {
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
}

function handleOffline() {
  console.log('Offline!');
}

function handleOnline() {
  console.log('Online!');
}

function init() {
  title.style.color = BASE_COLOR;
  title.addEventListener('click', handleClick);   // mouse click
  title.addEventListener('mouseenter', handleClick);  // just mouse in
}
init();

window.addEventListener('resize', function() { console.log('resized'); });
window.addEventListener('offline', handleOffline);
window.addEventListener('online', handleOnline);
```

2. 클릭 이벤트 참고 - 2(CSS & Javascript)
```css
h1 {
  color: rgb(52, 73, 94);
}

.clicked {
  color: #7f8c8d;
}
```
```javascript
const title = document.querySelector('#title');
const CLICKED_CLASS = 'clicked';

function handleClick() {
  /* 1.
  const currentClass = title.className;
  if (currentClass !== CLICKED_CLASS) {
    title.className = CLICKED_CLASS;
  } else {
    title.className = "";
  }
  */
  /* 2.
  const hasClass = title.classList.contains(CLICKED_CLASS);
  if (!hasClass) {
    title.classList.add(CLICKED_CLASS);
  } else {
    title.classList.remove(CLICKED_CLASS);
  }
  */
  // 3. (toggle은 클래스가 거기 있는지 체크해서 없으면 add 있으면 remove를 해줌)
  title.classList.toggle(CLICKED_CLASS);
}

function init() {
  title.addEventListener('click', handleClick);
}
init();
```
