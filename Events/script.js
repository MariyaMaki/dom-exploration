const _initTime = Date.now();

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + "s";
};

const clickOnSquare = (e) => {
  console.log(e.target.classList[1]);
  console.log(getElapsedTime());
  const wrapper = document.querySelector("section:last-child");
  const li = document.createElement("li");
  li.innerHTML = `${e.target.classList[1]} ${getElapsedTime()}`;
  wrapper.appendChild(li);
  createSquare(e);
};

const createSquare = (e) => {
  const wrapper = document.querySelector(".displayedsquare-wrapper");
  const square = document.createElement("div");
  square.classList.add("displayedsquare");
  square.classList.add(e.target.classList[1]);
  wrapper.appendChild(square);
};

const actionSquares = document.querySelectorAll(".actionsquare");
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener("click", clickOnSquare);
}
