let inputDisplay = document.getElementById("result");
let inputDisplayValue = inputDisplay.value;
let cancell = document.getElementById("cancell");
let equal=document.getElementById("equal")
let clear=document.getElementById("AC")
console.log(cancell);

let btn = document.querySelectorAll(".btn");
// console.log(btn);
btn.forEach((bt) => {
  bt.addEventListener("click", (e) => {
    inputDisplay.value += e.target.innerHTML;
  });
});

// console.log(cancell)
cancell.addEventListener("click", () => {
  inputDisplay.value = inputDisplay.value.slice(0, -1);
});

equal.addEventListener("click", ()=>inputDisplay.value=eval(inputDisplay.value));

clear.addEventListener("click", () => inputDisplay.value="")