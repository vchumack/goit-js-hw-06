// Напиши скрипт управления формой логина.
// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль 
// и очисти значения полей формы методом reset.

// вытащили ссылку на форму
const form = document.querySelector('.login-form');

// обработали сабмит, отправку формы
form.addEventListener('submit', onFormSubmit);

// написали функцию, где логика и обработка собственно
function onFormSubmit(event) {
   // предотвратили перезагрузку от браузера по умолчанию
   event.preventDefault();
   console.log('это сабмит формы')

   // ...... как собрать элементы значения этой формы вручную

   // на event.target лежит ссылка на элемент нашей формы
   // elements.email.value - доступ к тому, что пользователь вписал в поле email, ну и пароль на то, что ввели в пароле
   console.dir(event.target.elements.email.value);
   console.dir(event.target.elements.password.value);

   // взяли эти значения и сохранили их в переменные, затем  в объект
   const formElements = event.target.elements;
   const email = formElements.email.value;
   const password = formElements.password.value;

   // проверка на заполнение формы
   if (email === '' && password === '') {
      alert('Все поля должны быть заполнены');
   } else {

   const formData = {
      email,
      password,
   };

   console.log(formData);
   }


   // ........ а теперь тоже самое, но через класс FormData
   // при вызове мы передает аргументом саму ссылку на саму форму, дом узел
   // под капотом FormData собирает все значения всех полей, которые в ней есть, плюс у нее есть форич(не массивный, просто одноименно назвали), с помощью которого 
   // const formData = new FormData(event.target);
   // formData.forEach((value, name) => {
   //    console.log('onFormSubmit -> name: ', name);
   //    console.log('onFormSubmit -> value: ', value);
   // }) 

   form.reset();
}