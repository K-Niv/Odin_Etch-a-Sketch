let cont = document.getElementById('container');

add_squares(16);

let grid_btn = document.querySelector('#grid');
let erase_btn = document.querySelector('#erase');

grid_btn.addEventListener('click', function() {
    let size = prompt("Enter the grid size (Between 10 and 100) :- ");

    while (isNaN(size) || size < 10 || size > 100) {
        size = prompt("Please enter a valid number (Between 10 and 100) :- ");
    }

    add_squares(size);
});

erase_btn.addEventListener('click', function() {
    erase_colors();
});

function add_squares(size) {
    cont.innerHTML = '';

    let containerWidth = cont.clientWidth; 
    let containerHeight = cont.clientHeight;

    
    let squareSize = Math.floor(Math.min(containerWidth, containerHeight) / size);

    for (let i = 0; i < size; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        cont.appendChild(row);

        for (let j = 0; j < size; j++) {
            let square = document.createElement('div');
            square.classList.add('square');
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;

            square.addEventListener('mouseover', function() {
                square.style.backgroundColor = getRandomHexColor();
            });

            row.appendChild(square);
        }
    }
}

function erase_colors() {
    let squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.style.backgroundColor = '';
    });
}

function getRandomHexColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
