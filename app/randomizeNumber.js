const minValue = 1;
const maxValue = 1000;
const randomNumber = randomizeNumber();

function randomizeNumber() {
    return parseInt(Math.random() * maxValue + 1);
}

const minElement = document.querySelector("#menor-valor");
const maxElement = document.querySelector("#maior-valor");

minElement.innerHTML = minValue;
maxElement.innerHTML = maxValue;
