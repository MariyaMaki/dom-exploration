/* Exercice 2 DOM Selectors*/
const title = document.querySelectorAll("*.important");

title.forEach(function (element) {
  element.setAttribute("title", "This is an important item");
});

const img = document.querySelectorAll("img");
for (const element of img) {
  if (!element.classList.contains("important")) element.style.display = "none";
}

const paragraphes = document.querySelectorAll("p");
randomColor = () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};
for (let i = 0; i < paragraphes.length; i++) {
  if (paragraphes[i].classList.contains("important")) {
    paragraphes[i].style.color = "red";
  } else {
    paragraphes[i].style.color = randomColor();
  }
}
