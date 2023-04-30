const refs = {
  input: document.getElementById("name-input"),
  spanEl: document.querySelector("#name-output"),
};

refs.input.childNodes;
console.log(
  "🚀 ~ file: task-05.js:7 ~ refs.input.childNodes:",
  refs.input.childNodes
);
refs.input.children;
console.log(
  "🚀 ~ file: task-05.js:9 ~ refs.input.children:",
  refs.input.children
);

// функция в развёрнутом варианте ----------------------------

refs.input.addEventListener("input", onInputChange);

function onInputChange(event) {
  refs.spanEl.textContent = event.currentTarget.value.trim() || "Anonymous";
}

// теперь запишим её короткую версию --------------------------

// refs.input.addEventListener("input", (event) => {
//   refs.spanEl.textContent = event.currentTarget.value.trim() || "Anonymous";
// });

// теперь запишим ещё одну версию (пока безрезультатно)  -----------------------

// refs.input.addEventListener("input", onInputChange);

// function onInputChange(event) {
//   //   if (refs.input.textContent === " ") {
//   //     refs.spanEl.textContent === "Xyi na ne";
//   //   }
//   //   refs.spanEl.textContent = event.currentTarget.value.trim();

//   refs.input.textContent === " "
//     ? refs.spanEl.textContent === "Xyi na ne"
//     : (refs.spanEl.textContent = event.currentTarget.value);
// }

// для треннировки ставил фокус специально --------------

// refs.input.addEventListener("focus", focusInputOn);

// refs.input.addEventListener("blur", focusInputOff);

// function focusInputOn() {
//   console.log("Получили фокус на инпуте");
// }

// function focusInputOff() {
//   console.log("Потеряли фокус на инпуте");
// }

// дополнительная задачка по уроку Алексея - 1 час 15 минута

const colors = [
  {
    label: "red",
    color: "#FF0000",
  },
  {
    label: "green",
    color: "#00FF00",
  },
  {
    label: "blue",
    color: "#0000FF",
  },
  {
    label: "yellow",
    color: "#FFFF00",
  },
];

const colorEl = document.getElementById("btnsContainer");
const fragment = document.createDocumentFragment();

colors.forEach(({ label, color }) => {
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = label;
  button.style.backgroundColor = color;
  fragment.appendChild(button);
});

colorEl.appendChild(fragment);
