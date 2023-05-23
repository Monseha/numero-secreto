const minorValue = 0;
const majorValue = 100;
const secretNum = setNum();

function setNum() {
    return parseInt(Math.random() * majorValue + 1)
}

console.log(secretNum);

const minorElemValue = document.getElementById('menor-valor');
minorElemValue.innerHTML = minorValue;

const majorElemValue = document.getElementById('maior-valor');
majorElemValue.innerHTML = majorValue;
