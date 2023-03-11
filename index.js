const colors = [
'#000000',
'#808080',
'#C0C0C0',
'#FFFFFF',
'#FF00FF',
'#800080',
'#FF0000',
'#800000',
'#FFFF00',
'#808000',
'#00FF00',
'#008000',
'#00FFFF',
'#008080',
'#0000FF',
'#000080',
];

const refs ={
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
  bodyStyle:document.querySelector('body')
};

const randomColor = () => colors[Math.floor(Math.random() * colors.length)]  // выбирает случайны цвет

refs.startBtn.addEventListener('click', changeColor)
refs.stopBtn.addEventListener('click', stopChangeColor)

let intervalId = null;

function changeColor() {
  if (intervalId) {          // проверяет, если нажали СТАРТ, повторно нажать нельзя
    return
  }
  refs.startBtn.setAttribute("disabled", "true"); 
  intervalId = setInterval(function () {                  // интервал
  refs.bodyStyle.style.backgroundColor = randomColor();   // меням цвет 
  }, 1000);
};

function stopChangeColor() {
  if (intervalId) {           // проверяет, если нажали СТОП, повторно нажать нельзя
    refs.startBtn.removeAttribute("disabled")  //Удал все
    clearInterval(intervalId)
    intervalId = null   
  };
};