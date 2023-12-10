let inputDisplay=document.getElementById("result");
let inputDisplayValue=inputDisplay.value;
console.log(inputDisplayValue)

    let btn=document.querySelectorAll(".btn");
    // console.log(btn);
    btn.forEach(bt => {
        bt.addEventListener("click", (e)=>{
           inputDisplay.value +=(e.target.innerHTML)
        })
    });
    
