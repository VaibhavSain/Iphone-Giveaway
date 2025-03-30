const sec = document.querySelector("#sec");
const mint = document.querySelector("#min");
const hour = document.querySelector("#hrs");
const day = document.querySelector("#day");

let days = 10;
let second = 39;
let mins = 36;
let hours = 8;

setInterval(() => {
    min();
    max();
},1000);

function max() {
    if(days == 0) {
        days = 31;
    }
    else if(second == 0) {
        second  = 60;
    }
    else if(mins == 0) {
        mins = 60;
    }
    else if(hours == 0) {
        hours = 24;
    }
}

function min() {
    second--;
    sec.textContent = `${second}`;
    if(second == 0) {
        second = 60;
        --mins;
        mint.textContent = `${mins}`;
        if(mins == 0) {
        --hours;
        hour.textContent = `${'0' + hours}`;
        if(hours == 0) {
            --days;
            day.textContent = `${'0'+ days}`;
        }
        }
    }
}