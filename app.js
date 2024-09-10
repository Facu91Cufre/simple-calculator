const input = document.getElementById("input");
const buttons = document.querySelectorAll(".buttons button");
const specialChars = ["+", "-", "*", "/", "%", "=", "."];
let output = "";

const calculate = (btnValue) => {
  if (btnValue === "=" && output !== "") {
    output = eval(output);
  } else if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "DEL") {
    output = output.slice(0, -1);
  } else {
    if (output === "" && specialChars.includes(btnValue)) return;
    output += btnValue;
  }

  input.value = output;
};
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    calculate(e.target.dataset.value);
  });
});
