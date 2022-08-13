// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.
// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.
// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.


// вытащили ссылки на инпут и кнопки
const refs = {
  inputRef: document.querySelector('#controls > input'),
  buttonCreateRef: document.querySelector('button[data-create]'),
  buttonDestroyRef: document.querySelector('button[data-destroy]'),
  divBoxRef: document.querySelector('#boxes'),
}
console.log(refs.inputRef);
console.log(refs.buttonCreateRef);
console.log(refs.buttonDestroyRef);


// повесили стандартное событие для инпутов и на клики
refs.inputRef.addEventListener('input', onInputChange);
refs.buttonCreateRef.addEventListener('click', () => createBoxes(inputValue));
refs.buttonDestroyRef.addEventListener('click', destroyBoxes);


// число, которое введут в инпут
let inputValue = 0
// функция вытаскивает значения из инпута, переводит в число и засовывает в переменную
function onInputChange(event) {
  // здесь хранится количество цифр, которые ввел пользователь
  inputValue = Number(event.target.value);
  console.log(inputValue);
  

}


// основная функция, которая создает разметку
function createBoxes(amount) {
  // создали массив, где будет разметка с дивами
  const arrDiv = [];
  let total = 30;

  for (let i = 0; i < amount; i++) {
    // создаем дивы в памяти, но на стр он еще не появился
    let divEl = `<div style="background-color:${getRandomHexColor()}; width:${total}px; height:${total}px"></div>`;
    arrDiv.push(divEl);
    total += 10;
    
  }
  // возврат вставки разметки в дом-дерево, join из массива в строку
  return refs.divBoxRef.innerHTML = arrDiv.join('');

}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


// очистка
function destroyBoxes() {
  refs.divBoxRef.innerHTML = '';
}