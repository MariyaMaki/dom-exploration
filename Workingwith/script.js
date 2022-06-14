const firstName = document.getElementById("display-firstname");
const age = document.getElementById("age");
const adultSection = document.getElementById("a-hard-truth");
const password = document.getElementById("pwd");
const passwordConfirm = document.getElementById("pwd-confirm");
const darkSelector = document.querySelector("body");

document.addEventListener("keyup", updateHtml);
document.addEventListener("change", switchDisplayMode);

function updateHtml(e) {
  if (e.target.id === "firstname") {
    if ((e.keyCode >= 65 && e.keyCode <= 90) || e.keyCode == 32)
      firstName.textContent += e.key;
    if (e.keyCode == 8)
      firstName.textContent = firstName.textContent.slice(0, -1);
  }

  if (e.target.id === "age" && age.value >= 18) {
    adultSection.style.visibility = "visible";
  } else if (e.target.id === "age" && age.value < 18) {
    adultSection.style.visibility = "hidden";
  }

  if (password.value.length < 6) {
    password.style.backgroundColor = "red";
  } else {
    password.style.backgroundColor = "white";
  }

  if (e.target.id === "pwd" || e.target.id === "pwd-confirm") {
    if (
      password.value !== passwordConfirm.value &&
      passwordConfirm.value !== ""
    ) {
      passwordConfirm.style.backgroundColor = "red";
    } else {
      passwordConfirm.style.backgroundColor = "white";
    }
  }
}

function switchDisplayMode(e) {
  if (e.target.name === "toggle-darkmode" && e.target.value === "dark") {
    darkSelector.style.backgroundColor = "black";
    darkSelector.style.color = "white";
  } else {
    darkSelector.style.backgroundColor = "white";
    darkSelector.style.color = "black";
  }
}
