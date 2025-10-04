const btn1 = document.getElementById("btn");

function calculate1(){
    const amountInput = document.getElementById("amount").value;
    const percentInput = document.getElementById("percent").value;
    const result1 = (amountInput / 100) * percentInput;
    const realResult = amountInput * percentInput;

    document.getElementById("result").innerText = (realResult);
} 

    btn1.addEventListener("click", calculate1);