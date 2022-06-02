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
for (const element of paragraphes) {
  if (element.classList.contains("important")) {
    element.style.color = "red";
  } else {
    element.style.color = randomColor();
  }
}

for (const element of paragraphes) {
  console.log(`${element.innerText}`);

  if (element.classList.contains("important")) {
    console.log(`, class:${element.className}`);
  }
}
