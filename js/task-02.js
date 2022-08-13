const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

const ulListEl = document.querySelector('#ingredients');
console.log(ulListEl)


for (let ingredient of ingredients) {
  // создаем элемент в памяти, но на стр он еще не появился
  const ItemEl = document.createElement('li');
  // добавляем текстовый контент нашим лишкам
  ItemEl.textContent = ingredient;
  // добавляем им класс item
  ItemEl.classList.add('item')
  // вкладываем li в ul
  ulListEl.append(ItemEl);
}










