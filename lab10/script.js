const zanaves = document.querySelector(".curtain");
const lamp = document.querySelector(".lamp");
const hang = document.querySelector(".hang");
const content = document.querySelector(".content");
const rabbit = document.querySelector(".rabbit");
const pigeon = document.querySelector(".bird");

let isMouseDown = false;

zanaves.addEventListener("mouseenter", handleMouseEnter);
zanaves.addEventListener("mouseleave", handleMouseLeave);

function handleMouseEnter() {
  if (!isMouseDown) {
    zanaves.style.transform = "translateY(-5%)";
    zanaves.style.transition = "transform 0.2s ease-in-out";
  }
}

function handleMouseLeave() {
  if (!isMouseDown) {
    zanaves.style.transform = "translateY(0%)";
    zanaves.style.transition = "transform 0.2s ease-in-out";
  }
}

zanaves.addEventListener("mousedown", () => {
  isMouseDown = true;
  zanaves.style.transform = "translateY(-100%)";
  zanaves.style.transition = "transform 1s ease-in-out";
  zanaves.removeEventListener("mouseenter", handleMouseEnter);
  zanaves.removeEventListener("mouseleave", handleMouseLeave);
});

lamp.addEventListener("mousedown", () => {
  hang.style.transform = `translateY(5px)`;
});

lamp.addEventListener("mouseup", () => {
  hang.style.transform = `translateY(0px)`;
});

lamp.addEventListener("click", () => {
  content.classList.toggle("hidden");
  content.classList.toggle("visible");
});

function changeAnimals() {
  rabbit.classList.toggle("putInHat");
  rabbit.classList.toggle("pullOutOfHat");
  pigeon.classList.toggle("putInHat");
  pigeon.classList.toggle("pullOutOfHat");
}

rabbit.addEventListener("click", changeAnimals);

pigeon.addEventListener("click", changeAnimals);
