//supCount = the number of times that a row of numbers have been pushed to the top row
//when supCount > 1 (i.e rows have been pushed before), the supRow will be evaluated, the answer printed
//and logged in the answer variable

var supCount = 0;
var answer, supRow = "supRow";

const dpArea = "display--area";

function $(value) {
    return document.getElementById(value);
}
/*
let appendToScreen = (item) => {
    $(dpArea).innerHTML += item;
}*/
function appendToScreen(item) {
    $(dpArea).innerHTML += item;
}

//control logic for number keys (0-9)
function main(digit) { 
    setTimeout(() => {
        if ($(dpArea).innerHTML.length < 9){
            appendToScreen(digit);
        } else {
            console.log("Exceeded" + $(dpArea).innerHTML.length);
        }
    }, 0);
    
    if ($(dpArea).innerHTML === "0"){
        $(dpArea).innerHTML = "";
    }
}
// function push "pushes" contents of dpArea to supRow
function push() {
    subRow = $(dpArea).innerHTML;
    $(supRow).innerHTML = subRow;
    supCount += 1;
}
// control logic for special characters/operands (-,+,/,*)
function specChars(operand) {
    if ($(dpArea).innerHTML == 0){
        $(dpArea.innerHTML = "");
    }
    while (supCount < 2) {
        push();    
        $(supRow).innerHTML += operand;
        temp = $(dpArea).innerHTML;
        //setTimeout(() => { $(dpArea).innerHTML = temp + operand; }, 10);
    }
}
//solves the content of supRow by evaluating it (eval())
function solve() {
    //var temp = $(supRow).innerHTML += $(dpArea).innerHTML;
    var temp = $(supRow).innerHTML += $(dpArea).innerHTML;
    $("hidden").value = temp;
    setTimeout(() => { answer = eval(($("hidden").value)); }, 30);
    
    setTimeout(() => { 
        if (answer != undefined) {
            console.log(answer);
            $(dpArea).innerHTML = answer;
        }
    }, 10);
    
}

function reset() {
    $("hidden").value = 0;
    $(dpArea).innerHTML = 0;
    $(supRow).innerHTML = "";
}

function refresh() {
    window.location.reload();
}