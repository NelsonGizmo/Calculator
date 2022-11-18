const displayInputEl = document.getElementById("display");


function displayChar(clickVal) {
    displayInputEl.value += clickVal;
    return clickVal;
}

function clearScreen() {
    displayInputEl.value = "";
}

function result () {
    displayInputEl.value = eval(displayInputEl.value);
}