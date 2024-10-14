const colors = ["red", "orange", "green", "blue", "purple"];
const shapes = ["square", "triangle", "circle"];
const nShapes = document.getElementById("nShapes");
const btnSquare = document.getElementById("sqr");
const btnTriangle = document.getElementById("trgl");
const btnCircle = document.getElementById("crcl");
let shapeCount;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createShapes(shapeType, shapeCount) {
  for (let i = 0; i < shapeCount; i++) {
    const color = colors[getRandomInt(0, colors.length - 1)];
    const size = getRandomInt(30, 100);

    const shape = document.createElement("div");
    shape.className = `shape ${shapeType}`;

    if (shapeType != shapes[1]) {
      shape.style.backgroundColor = color;
      shape.style.width = `${size}px`;
      shape.style.height = `${size}px`;
    } else {
      shape.style.borderLeft = `${size}px solid transparent`;
      shape.style.borderRight = `${size}px solid transparent`;
      shape.style.borderBottom = `${2 * size}px solid ${color}`;
    }
    shape.style.left = `${getRandomInt(
      0,
      window.innerWidth - size
    )}px`;
    shape.style.top = `${getRandomInt(
      0,
      window.innerHeight - size
    )}px`;

    shape.addEventListener("click", () => {
      if (shapeType != shapes[1]) {
        shape.classList.toggle("selected");
      } else {
        shape.style.borderBottom = `${2 * size}px solid yellow`;
      }
    });

    shape.addEventListener("dblclick", () => {
      shape.remove();
    });

    document.body.appendChild(shape);
  }
}

function btnPressedSquare() {
  shapeCount = nShapes.value;
  createShapes(shapes[0], shapeCount);
}

function btnPressedTriangle() {
  shapeCount = nShapes.value;
  createShapes(shapes[1], shapeCount);
}

function btnPressedCircle() {
  shapeCount = nShapes.value;
  createShapes(shapes[2], shapeCount);
}

btnSquare.addEventListener("click", btnPressedSquare);
btnTriangle.addEventListener("click", btnPressedTriangle);
btnCircle.addEventListener("click", btnPressedCircle);
