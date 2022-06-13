const _initTime = Date.now();

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + "s";
};
const wrapperLast = document.querySelector("section:last-child");
const wrapperSquare = document.querySelector(".displayedsquare-wrapper");

const clickOnSquare = (e) => {
  console.log(e.target.classList[1]);
  console.log(getElapsedTime());
  const li = document.createElement("li");
  li.innerHTML = `${e.target.classList[1]} ${getElapsedTime()}`;
  wrapperLast.appendChild(li);
  createSquare(e);
};

const createSquare = (e) => {
  const square = document.createElement("div");
  square.classList.add("displayedsquare");
  square.classList.add(e.target.classList[1]);
  wrapperSquare.appendChild(square);
};

const actionSquares = document.querySelectorAll(".actionsquare");
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener("click", clickOnSquare);
}

document.body.addEventListener("keydown", (e) => {
  if (e.keyCode === 32) {
    document.body.style.backgroundColor = `rgb(${Math.floor(
      Math.random() * 256
    )},
    ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;

    const li = document.createElement("li");
    li.innerHTML = `[${getElapsedTime()}]: Changed the background color`;
    wrapperLast.appendChild(li);
  }

  if (e.keyCode === 76) {
    while (wrapperLast.children.length > 1) {
      wrapperLast.removeChild(wrapperLast.lastChild);
    }
  }

  if (e.keyCode === 83) {
    while (wrapperSquare.children.length > 0) {
      wrapperSquare.removeChild(wrapperSquare.lastChild);
    }
  }
});

wrapperSquare.addEventListener("click", (e) => {
  if (e.target.classList.contains("green") === true) {
    alert("Green");
  } else if (e.target.classList.contains("violet") === true) {
    alert("Violet");
  } else if (e.target.classList.contains("orange") === true) {
    alert("Orange");
  }
});
