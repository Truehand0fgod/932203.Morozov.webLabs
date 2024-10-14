const imgL = document.getElementById("imgL");
const imgR = document.getElementById("imgR");
blockL = document.getElementById("blockL");
blockR = document.getElementById("blockR");

const btnL = document.getElementById("btnL");
const btnM = document.getElementById("btnM");
const btnR = document.getElementById("btnR");

function btnPressedL() {
  imgL.style.display = "block";
  imgR.style.display = "none";
  blockL.style.width = "95%";
  blockR.style.width = "5%";
}

function btnPressedM() {
  imgL.style.display = "block";
  imgR.style.display = "block";
  blockL.style.width = "50%";
  blockR.style.width = "50%";
}

function btnPressedR() {
  imgL.style.display = "none";
  imgR.style.display = "block";
  blockL.style.width = "5%";
  blockR.style.width = "95%";
}

btnL.addEventListener("click", btnPressedL);
btnM.addEventListener("click", btnPressedM);
btnR.addEventListener("click", btnPressedR);
