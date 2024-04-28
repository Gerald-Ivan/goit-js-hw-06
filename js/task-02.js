const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let list = document.getElementById("ingredients");

for (let ingredient of ingredients){
  let li = document.createElement('li')
  li.innerText = ingredient;
  list.appendChild(li);
}