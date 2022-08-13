// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

// вытащили ссылки на инпут
const inputValidation = document.querySelector('#validation-input');

// повесили событие blur
inputValidation.addEventListener('blur', onInputBlur);

// написали функцию для блюра
function onInputBlur(event) {
   console.log('инпут в блюре');

   console.log(event.target.value.length);
   console.log(inputValidation.dataset.length);

   // *перед заходом в условия сразу чистим классы
   inputValidation.classList.remove("valid", "invalid");

     if (event.target.value.length === Number(inputValidation.dataset.length)) {
      // добавляем класс valid, если длина значения в инпуте будет равно указанному в data-length
      inputValidation.classList.add("valid");
      
   } else {
      // иначе добавляем класс invalid
      inputValidation.classList.add("invalid");
      
   }

   // варик с удалением классов в условиях
   // if (event.target.value.length === Number(inputValidation.dataset.length)) {
   //    // border инпута становится зелёным
   //    inputValidation.classList.add("valid");
   //    inputValidation.classList.remove("invalid");
   // } else {
   //    // неправильное - красным
   //    inputValidation.classList.add("invalid");
   //    inputValidation.classList.remove("valid");
   // }

}

// *когда один раз сразу добавляешь 6 символов, работает. Когда убираешь и снова ставишь 6 символов, класс не меняется, поэтому нужно удалять те классы которые ранее уже добавились