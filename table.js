
let cells = document.getElementsByClassName('cell')
let clickers = document.getElementById('clicker')


for (let i = 0; i < cells.length; i++) {
    cells[i].textContent = i.toString()
    cells[i].addEventListener('click', clicked);
}

function clicked() {
    clickers.innerText = event.srcElement.firstChild.data;
}


clickers.onmouseover = function (e){
    clickers.innerText = '';
}

const data = obj = {
    a0: {aa: [3, 9], bb: 2, cc: {aaa: 4, bbb: -5}},
    a1: {aa: [0, 8], bb: -7, cc: {aaa: 8, bbb: 7}},
    a2: {aa: [9, -4], bb: 1, cc: {aaa: -1, bbb: 8}},
    a3: {aa: [8, -1], bb: 7, cc: {aaa: 3, bbb: 0}},
    a4: {aa: [-4, -2], bb: -2, cc: {aaa: 8, bbb: 9}}
}

function getNumbersFromString(numberString){
    return numberString.match(/-?\d+/g).map(Number);
}
let maxNumber = document.getElementById('max')
let minNumber = document.getElementById('min')
let numbers = []
for(let item in data) {
    numbers = numbers.concat(getNumbersFromString(JSON.stringify(data[item])));
    maxNumber.innerText = Math.max( ...numbers ).toString();
    minNumber.innerText = Math.min( ...numbers ).toString();
}
