// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

// вытащили ссылки на инпут и спан
const inputSizeControl = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');

// повесили событие input
inputSizeControl.addEventListener('input', onInputChange);

// написали функцию, где логика и обработка собственно
function onInputChange(event) {
   console.log(event.target.value);
   // которая юудет менять в стилях спана фонтсайз в зависимости от значения инпута. если не добавть 'px', работать не будет
   spanText.style.fontSize = event.target.value + 'px';

}