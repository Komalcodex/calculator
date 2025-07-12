let string = "";
let buttons = document.querySelectorAll(".button");
let input = document.querySelector(".input");

buttons.forEach(button => {
  button.addEventListener("click", (e) => {
    let value = e.target.innerText;

    if (value === "=") {
      try {
        string = eval(string);
        input.value = string;
      } catch {
        input.value = "Error";
        string = "";
      }
    } else if (value === "c") {
      string = "";
      input.value = "";
    } else {
      string += value;
      input.value = string;
    }
  });
});
