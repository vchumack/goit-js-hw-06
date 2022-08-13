const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


// Напиши скрипт для создания галереи изображений по массиву данных.
// В HTML есть список ul.gallery.
// Используй массив объектов images для создания элементов <img> вложенных в <li>. Для создания разметки используй шаблонные строки и метод insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки. Добавь минимальное оформление галереи флексбоксами или гридами через CSS классы.

// нашли и вытащили нашу ul
const gallaryListEl = document.querySelector(".gallery");


// варик просто с мепом
const elements = images.map(image => {

  // создали жлементы в памяти шаблонными строками
  const gallaryItemEl = `<li width = 400>
  <img src=${image.url} alt=${image.alt} width = 400 height = 300>
  </li>`;

  return gallaryItemEl;

})
console.log(elements);


  // добавили элементы в ul
gallaryListEl.insertAdjacentHTML('beforeend', elements.join(''));

gallaryListEl.style.display = 'flex';


// console.log(gallaryListEl);







// варик с функцией ------------------------------------
// const makeImage = images => {
//   return images.map(image => {
//     // пока что создали элементы в памяти, но на стр он еще не появился
//     const gallaryItemEl = document.createElement("li");
//     const gallaryImageEl = document.createElement("img");

//     // добавили атрибуты
//     gallaryImageEl.src = image.url;
//     gallaryImageEl.alt = image.alt;
//     gallaryImageEl.width = 400;
//     gallaryImageEl.height = 300;

//     // вкладываем img в li
//     // gallaryItemEl.insertAdjacentElement('beforeend', gallaryImageEl);


    
//     // вкладываем img в li
//     gallaryItemEl.appendChild(gallaryImageEl);
//     // вкладываем li в ul
//     gallaryListEl.append(gallaryItemEl);
  
//   })
// }

// // вызвали нашу функцию
// const elements = makeImage(images);
// console.log(gallaryListEl);
 
// олдскульный варик -----------------------------------------------------------
// for (let image of images) {
//   // пока что создали элементы в памяти, но на стр он еще не появился
//   const gallaryItemEl = document.createElement("li");
//   const gallaryImageEl = document.createElement("img");
//   // добавили атрибуты
//   gallaryImageEl.src = image.url;
//   gallaryImageEl.alt = image.alt;
//   gallaryImageEl.width = 320;

//   // вкладываем img в li
//   gallaryItemEl.appendChild(gallaryImageEl);
//    // вкладываем li в ul
//   gallaryListEl.append(gallaryItemEl);

// }