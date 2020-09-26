const RAINBOW = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// build the grid
const grid = document.querySelector('.grid')
for (let i = 0; i < 256; i++) {
    console.log(i)
    let square = document.createElement('div');
    square.className = "square";
    grid.appendChild(square);
}

// listen for mouseover
const squares = document.querySelectorAll('.square')
for (const square of squares) {
    square.addEventListener("mouseover", function() {
        square.style.background = RAINBOW[Math.floor(Math.random() * Math.floor(6))];
    });
}