var supCount = 0;
var answer, supRow = "supRow";
const dpArea = "display--area";

function $(value) {
    return document.getElementById(value);
}

function main(digit) {
    if ($(dpArea).innerHTML == 0){
        $(dpArea).innerHTML = "";
    }
    setTimeout(() => {
        $(dpArea).innerHTML += digit;
        $(supRow).innerHTML += digit;
    }, 2);
}

function specChars(char) {
    if ($(dpArea).innerHTML == 0){
        $(dpArea.innerHTML = "");
    }
    if (char == "%") {
        temp = ($(dpArea).innerHTML/100);
        $(dpArea).innerHTML = temp;
        $(supRow).innerHTML = temp;
        return undefined;
    }
    $(dpArea).innerHTML += char;
    $(supRow).innerHTML += char;
    //temp = $(dpArea).innerHTML;
    //setTimeout(() => { $(dpArea).innerHTML = temp + operand; }, 10);
}

function solve() {
    //var temp = $(supRow).innerHTML += $(dpArea).innerHTML;
    //var temp = $(supRow).innerHTML += $(dpArea).innerHTML;
    setTimeout(() => { answer = eval(($(supRow).innerHTML)); }, 10);
    
    setTimeout(() => { 
        if (answer != undefined) {
            console.log(answer);
            $(dpArea).innerHTML = answer;
            $(supRow).innerHTML = answer;
        }
    }, 20);
    
}

function refresh() {
    window.location.reload();
}

function reset() {
    $(dpArea).innerHTML = 0;
    $(supRow).innerHTML = "";
}