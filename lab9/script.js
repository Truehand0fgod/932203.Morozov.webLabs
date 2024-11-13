document.addEventListener("DOMContentLoaded", main);

function main() {
  const input = document.getElementById("inputfield");
  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      handleButtonClick(input, button.id);
    });
  });
}

function handleButtonClick(input, buttonId) {
  switch (buttonId) {
    case "zero":
      input.value += 0;
      break;
    case "one":
      input.value += 1;
      break;
    case "two":
      input.value += 2;
      break;
    case "three":
      input.value += 3;
      break;
    case "four":
      input.value += 4;
      break;
    case "five":
      input.value += 5;
      break;
    case "six":
      input.value += 6;
      break;
    case "seven":
      input.value += 7;
      break;
    case "eight":
      input.value += 8;
      break;
    case "nine":
      input.value += 9;
      break;
    case "division":
      input.value += "/";
      break;
    case "clear":
      input.value = "";
      break;
    case "mul":
      input.value += "*";
      break;
    case "bspace":
      input.value = input.value.slice(0, -1);
      break;
    case "minus":
      input.value += "-";
      break;
    case "eq":
      try {
        input.value = eval(input.value);
      } catch (error) {
        input.value = "Error";
      }
      break;
    case "point":
      input.value += ".";
      break;
    case "plus":
      input.value += "+";
      break;
    default:
      break;
  }
}
