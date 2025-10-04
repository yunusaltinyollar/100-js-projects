const btn1 = document.getElementById("btn");

function calculate1(){
    const amountInput = document.getElementById("amount").value;
    const percentInput = document.getElementById("percent").value;
    const result1 = (amountInput / 100) * percentInput + Number(amountInput);

    document.getElementById("result").innerText = (result1);
} 

    btn1.addEventListener("click", calculate1);