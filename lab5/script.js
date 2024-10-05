const modal1 = document.getElementById("modal1");
const modal2 = document.getElementById("modal2");
const modal3 = document.getElementById("modal3");

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");

const closeModal1 = document.getElementById("closeModal1");
const closeModal2 = document.getElementById("closeModal2");
const closeModal3 = document.getElementById("closeModal3");

function openModal1() {
  modal1.style.display = "block";
}

function openModal2() {
  modal2.style.display = "block";
}

function openModal3() {
  modal3.style.display = "block";
}

btn1.addEventListener("click", openModal1);
btn2.addEventListener("click", openModal2);
btn3.addEventListener("click", openModal3);

function closeModal() {
  modal1.style.display = "none";
  modal2.style.display = "none";
  modal3.style.display = "none";
}

closeModal1.addEventListener("click", closeModal);
closeModal2.addEventListener("click", closeModal);
closeModal3.addEventListener("click", closeModal);

window.onclick = function (event) {
  if (
    event.target == modal1 ||
    event.target == modal2 ||
    event.target == modal3
  ) {
    closeModal();
  }
};
