const body = document.getElementsByTagName("body");
const ulList = document.getElementsByTagName("ul")[0];
const nodes = Array.from(ulList.childNodes);
let liList = nodes.filter((x) => x.nodeType === 1);

for (let i = 0; i <= liList.length - 1; i++) {
  if (liList[i].textContent === "Fast and Furious") {
    let temp = liList[i].textContent;
    liList[i].textContent = liList[0].textContent;
    liList[0].textContent = temp;

    liList[0].className = "important";
  }
  liList[i].addEventListener("click", sendAlert);

  for (let j = i + 1; j <= liList.length - 1; j++) {
    if (liList[i].textContent === liList[j].textContent) {
      ulList.removeChild(liList[j]);
    }
  }
}

function sendAlert(e) {
  alert(
    e.target.textContent !== "Fast and Furious"
      ? e.target.textContent
      : "The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family."
  );
}
