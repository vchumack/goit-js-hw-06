// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.
// Для генерации случайного цвета используй функцию getRandomHexColor


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// вытащили ссылку на кнопку, body, спан 
const buttonRef = document.querySelector('.change-color');
const body = document.body;
const spanRef = document.querySelector('.color');

// обработали кнопку на событие клик
buttonRef.addEventListener('click', onMouseEnter);

// написали функцию обработки 
function onMouseEnter(event) {
  const changeColor = event.target;
  console.log(changeColor);

  // записали в переменную функцию по рандомному цвету
  const getcolor = getRandomHexColor();

  // прописали инлайн-стили на бекграунд и спану значение контента
  body.style.backgroundColor = getcolor;
  spanRef.textContent = getcolor;


  

  // changeColor.classList.add('')
}