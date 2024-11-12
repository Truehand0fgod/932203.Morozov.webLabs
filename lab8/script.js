document.addEventListener("DOMContentLoaded", function () {
  const createBtn = document.getElementById("createBtn");
  const saveBtn = document.getElementById("saveBtn");
  const incontainer = document.getElementById("inputContainer");
  const outcontainer = document.getElementById("outputContainer");

  function createInputField() {
    console.log("Button clicked, creating input fields.");
    const myObject = {
      inputL: null,
      inputR: null,

      up: null,
      down: null,
      del: null,

      initialize: function () {
        this.inputL = document.createElement("input");
        this.inputR = document.createElement("input");

        this.up = document.createElement("button");
        this.down = document.createElement("button");
        this.del = document.createElement("button");

        this.inputL.style.height = "20px";
        this.inputR.style.height = "20px";

        this.up.style.width = "20px";
        this.down.style.width = "20px";

        this.up.textContent = "\u2191";
        this.down.textContent = "\u2193";
        this.del.textContent = "X";

        const div = document.createElement("div");
        div.style.display = "flex";
        div.style.alignItems = "center";
        div.appendChild(this.inputL);
        div.appendChild(this.inputR);
        div.appendChild(this.up);
        div.appendChild(this.down);
        div.appendChild(this.del);

        this.up.addEventListener("click", () => {
          if (div.previousElementSibling) {
            incontainer.insertBefore(div, div.previousElementSibling);
          }
        });

        this.down.addEventListener("click", () => {
          if (div.nextElementSibling) {
            incontainer.insertBefore(div.nextElementSibling, div);
          }
        });

        this.del.addEventListener("click", () => {
          incontainer.removeChild(div);
        });

        incontainer.appendChild(div);
      },
    };
    myObject.initialize();
  }

  function saveInputFields() {
    const savedData = [];
    const divs = incontainer.children;

    for (let div of divs) {
      const inputs = div.getElementsByTagName("input");
      const inputLValue = inputs[0].value;
      const inputRValue = inputs[1].value;
      if (inputs.length === 2) {
        if (inputLValue == "" && inputRValue == "") {
          savedData.push(`"nodata": "nodata"`);
        } else if (inputLValue == "") {
          savedData.push(`"nodata": "${inputRValue}"`);
        } else if (inputRValue == "") {
          savedData.push(`"${inputLValue}": "nodata"`);
        } else {
          savedData.push(`"${inputLValue}": "${inputRValue}"`);
        }
      }
    }

    console.log(savedData); // Вывести сохраненные данные в консоль
    const formattedOutput = `{ ${savedData.join(", ")} }`;

    outputContainer.textContent = formattedOutput;
  }

  saveBtn.addEventListener("click", saveInputFields);
  createBtn.addEventListener("click", createInputField);
});
