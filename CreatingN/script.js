function randbgcolor() {
  h = Math.floor(Math.random() * 360);
  s = Math.floor(Math.random() * 100);
  l = Math.floor(Math.random() * 100);
  return `hsl(${h}, ${s}%, ${l}%)`;
}

let blackOrWhiteTxt = (bgColor) => {
  let hsl = bgColor.split("(")[1].split(")")[0].split(",");
  let h = parseInt(hsl[0]);
  let s = parseInt(hsl[1]);
  let l = parseInt(hsl[2]);
  if (l < 50) {
    return "white";
  } else {
    return "black";
  }
};

let article = document.querySelector("article");

let nbrLearner = 22;
let learner = [
  "Antoine",
  "Mehdi",
  "Melih",
  "Olivier",
  "Tanguy",
  "Dylan",
  "Arthur",
  "Steve",
  "Nicolas",
  "Duc",
  "Kevin",
  "Henri",
  "Latifa",
  "Marlène",
  "Louis",
  "Lydia",
  "Quentin",
  "Anaïs",
  "Semih",
  "Dorian",
  "Miguel",
  "Sébastien",
];
for (i = 0; i < nbrLearner; i++) {
  let newSection = document.createElement("section");
  let newArticle = document.createElement("article");
  let newP = document.createElement("p");
  let newText = document.createTextNode(learner[i]);
  let newColor = randbgcolor();
  let textColor = blackOrWhiteTxt(newColor);
  newSection.style.backgroundColor = newColor;
  newP.style.color = textColor;
  newP.appendChild(newText);
  newArticle.appendChild(newP);
  newSection.appendChild(newArticle);
  article.appendChild(newSection);
}
