// const decrease = document.getElementById("decrease");
// const add = document.getElementById("add");

const countspan= document.getElementById("value");
const add = document.querySelector('[data-action="increment"]');
const dec = document.querySelector('[data-action="decrement"]');

let count = 0;

add.onclick = function () {
    count++;
    countspan.textContent = count;
}

dec.onclick = function () {
    count--;
    countspan.textContent = count;
}
// const decrease = document.getElementById("decrease");
// const reset = document.getElementById("reset");
// const add = document.getElementById("add");
// const countlabel = document.getElementById("count");

// let count = 0;

// add.onclick = function () {
//     count++;
//     countlabel.textContent = count;
//     console.log(count);
// }

// decrease.onclick = function () {
//     count--;
//     countlabel.textContent = count;
//     console.log(count);
// }
// reset.onclick = function () {
//     count = 0;
//     countlabel.textContent = count;
//     console.log(count);
// }