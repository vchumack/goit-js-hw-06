// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

// вытащили ссылки на кнопки и value
const buttonDecRef = document.querySelector('button[data-action="decrement"]');
const buttonIncRef = document.querySelector('button[data-action="increment"]');
const spanRef = document.querySelector('#value');


console.log(buttonDecRef);

// поставили счетчик
let counterValue = 0;

// повесили слушателя событий на кнопки
buttonDecRef.addEventListener('click', onDecrementButtonClick);
buttonIncRef.addEventListener('click', onIncrementButtonClick);


// написали функции для подсчета значений
function onDecrementButtonClick() {
   counterValue -= 1;
   // при клике значения спана должно меняться на актуальное по счетчику
   spanRef.textContent = counterValue;
}

function onIncrementButtonClick() {
   counterValue += 1;
   // при клике значения спана должно меняться на актуальное по счетчику
   spanRef.textContent = counterValue;
}







