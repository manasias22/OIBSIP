// take a reference of id and tag using DOM

let screen = document.getElementById("screen");
buttons = document.querySelectorAll("button");
let screenValue = "";

// when click some changes are there       X => *

for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    console.log("Burron text is ", buttonText);
    if (buttonText == "X") {
      buttonText = "*";
      screenValue += buttonText;
      screen.value = screenValue;
    } else if (buttonText == "C") {
      screenValue = "";
      screen.value = screenValue;
    } else if (buttonText == "=") {
      screen.value = eval(screenValue);
      // eval is function that provided by tha JS for calculating
    } else {
      screenValue += buttonText;
      screen.value = screenValue;
    }
  });
}
