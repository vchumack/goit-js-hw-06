// Напиши скрипт который:
// 1. Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.

// мне нужно вытащить из html li.item
// посчитать их количеcво
// вывести это в консоль

const liItemEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${liItemEl.length}`);
// console.log(liItemEl);

// 2. Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и
// количество элементов в категории(всех вложенных в него < li >).

// нужно найти и вывести в консоли заголовки в li.item
// а потом посчитать и вывести кол-во вложенных лишек


liItemEl.forEach((item) => {
   console.log('Category: ', item.querySelector('h2').textContent);
   console.log('Elements: ', item.querySelectorAll('li').length);
});
