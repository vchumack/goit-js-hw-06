// .......... Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".

// вытащили ссылки на инпут и спан
// const inputName = document.querySelector('#name-input');
// const spanName = document.querySelector('#name-output');

// вытащили ссылки на инпут и спан
// аналог через объект, собрали в одном месте, как словарик
const refs = {
   inputName: document.querySelector('#name-input'),
   spanName: document.querySelector('#name-output'),

}

// повесили стандартное событие для инпутов
refs.inputName.addEventListener('input', onInputChange);

function onInputChange(event) {
   console.log(event.target.value);
   // если введенные значения пустое, то впиши анонима, иначе впиши введенное
   event.target.value === '' ?
      refs.spanName.textContent = 'Anonymous' :
      refs.spanName.textContent = event.target.value;
}






// ......... события focus и blur
// refs.inputName.addEventListener('focus', onInputFocus);
// refs.inputName.addEventListener('blur', onInputBlur);

// function onInputFocus() {
//    console.log('инпут в фокусе')
// }

// function onInputBlur() {
//    console.log('инпут в блюре')
// }