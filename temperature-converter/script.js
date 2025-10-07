const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");
const kelvin = document.getElementById("kelvin");

function celTo() {

    let output = (parseFloat(celsius.value) * 1.8 +32);
    fahrenheit.value = parseFloat(output.toFixed(2));

    let output1 = (parseFloat(celsius.value) + 273.32);
    kelvin.value = parseFloat(output1.toFixed(2));
}

function fahTo() {

    let output = ((parseFloat(fahrenheit.value)-32)*5/9);
    celsius.value = parseFloat(output.toFixed(2));

    let output1 = (parseFloat(fahrenheit.value) / 1.8 + 32);
    kelvin.value = parseFloat(output1.toFixed(2));
}

function kelTo() {

    let output = (parseFloat(kelvin.value) - 273.32);
    celsius.value = parseFloat(output.toFixed(2));

    let output1 = (parseFloat((kelvin.value) - 273.32) * 1.8 + 32);
    fahrenheit.value = parseFloat(output1.toFixed(2));
}
