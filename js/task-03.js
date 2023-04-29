const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// первый метод решения задачи через MAP -------------------------

// const galeryEl = document.querySelector(".gallery");

// const test = images.map(({ url, alt }) => {
//   const listEl = document.createElement("li");

//   const imgEl = document.createElement("img");
//   imgEl.src = url;
//   imgEl.alt = alt;
//   imgEl.width = 640;

//   listEl.appendChild(imgEl);

//   return listEl;
// });

// galeryEl.append(...test);

// console.log("🚀 galery", galeryEl);

// оформим всё через функцию (6 модуль 1 видео на 1 час 40минут) ----------

// const galeryListEl = document.querySelector(".gallery");

// const funktionGalery = (images) => {
//   return images.map(({ url, alt }) => {
//     const listEl = document.createElement("li");
//     const imgEl = document.createElement("img");
//     imgEl.src = url;
//     imgEl.alt = alt;
//     imgEl.width = 640;

//     listEl.appendChild(imgEl);

//     return listEl;
//   });
// };

// const gunktionGo = funktionGalery(images);

// galeryListEl.append(...gunktionGo);

// console.log("🚀 ~ file: task-03.js:56 ~ gunktionGo:", galeryListEl);

// второй метод решения задачи через insertAdjacentHTML -------------

const listGaleryEl = document.querySelector(".gallery");

const testImageEl = ({ url, alt }) => {
  return `
    <li>
      <img src = ${url} alt = ${alt} width = 320>
    </li>
  `;
};

const showImageEl = images.map(testImageEl).join("");

listGaleryEl.insertAdjacentHTML("beforeend", showImageEl);
