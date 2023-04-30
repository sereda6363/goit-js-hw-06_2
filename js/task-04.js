const refs = {
  decrementBtn: document.querySelector('button[data-action="decrement"]'),
  valueEl: document.querySelector("#value"),
  incrementBtn: document.querySelector('button[data-action="increment"]'),
};

let counterValue = 0;

// refs.decrementBtn.addEventListener("click", () => {
//   counterValue -= 1;
//   refs.valueEl.textContent = counterValue;
//   console.log("Клик по кнопке decrementBtn");
// });

// refs.incrementBtn.addEventListener("click", () => {
//   counterValue += 1;
//   refs.valueEl.textContent = counterValue;
//   console.log("Клик по кнопке incrementBtn");
// });

// переделали в более красивый код

refs.decrementBtn.addEventListener("click", decrementEventBtnTarget);

function decrementEventBtnTarget() {
  counterValue -= 1;
  refs.valueEl.textContent = counterValue;
}

refs.incrementBtn.addEventListener("click", incrementEventBtnTarget);

function incrementEventBtnTarget() {
  counterValue += 1;
  refs.valueEl.textContent = counterValue;
}
