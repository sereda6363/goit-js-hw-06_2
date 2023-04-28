const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");

ingredients.forEach((element, i) => {
  const listEl = document.createElement("li");
  listEl.classList.add("item");
  listEl.textContent = element;
  ingredientsEl.appendChild(listEl);
});

console.log(ingredientsEl);

// Второй вариант решения задачи через for...of.
// Их есть куча вариантов решения.

// for (const ingredient of ingredients) {
//   const listEl = document.createElement("li");
//   listEl.classList.add("item");
//   listEl.textContent = ingredient;
//   ingredientsEl.appendChild(listEl);
// }

// console.log(ingredientsEl);
