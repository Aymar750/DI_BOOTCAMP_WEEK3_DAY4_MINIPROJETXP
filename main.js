//Assign automatically a background color to button that also generate
function assignRandomColor(button) {
    let randomColor = (Math.floor(Math.random()*0xFFFFFF)).toString(16);
    button.style.backgroundColor = "#" + randomColor ;
}
const buttons = [];
const container = document.querySelector('#color-picker');
for (let i = 0; i < 36; i++) {
    const button = document.createElement('button');
    assignRandomColor(button);
    buttons.push(button);
}

buttons.forEach(button => {
    button.classList.add('color')
    container.appendChild(button);
});

const grid = document.getElementById('grid');
const colors = document.querySelectorAll('.color');

// create the grid of blank squares
for (let i = 0; i < 1512; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    grid.appendChild(square);
}

// add event listeners to the color buttons
colors.forEach(color => {
    color.addEventListener('click', () => {
        currentColor = color.style.backgroundColor;
    });
});

let isDrawing = false;
let currentColor = '';

// add event listeners to the squares
const squares = document.querySelectorAll('.square');
squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        isDrawing = true;
        square.style.backgroundColor = currentColor;
    });
    square.addEventListener('mouseup', () => {
        isDrawing = false;
    });
    square.addEventListener('mouseover', () => {
        if (isDrawing) {
        square.style.backgroundColor = currentColor;
        }
    });
});

//to clear the grid after click on clear button
const clear = document.getElementById('clear');

clear.addEventListener('click',()=>{
    squares.forEach(square => {
        square.style.backgroundColor = '';
    })
})

