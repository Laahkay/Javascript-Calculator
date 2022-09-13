let calcDisplay = document.getElementById('calc-display')
let resultDisplay = document.getElementById('result-display')

function display(number) {
    calcDisplay.innerText += number;
}

function allClear() {
    calcDisplay.innerHTML = "";
    resultDisplay.innerHTML = "";
}

function del() {
    calcDisplay.innerText = calcDisplay.innerText.slice(0,-1);
}

function calculate() {
    resultDisplay.innerText = eval(calcDisplay.innerText);
}