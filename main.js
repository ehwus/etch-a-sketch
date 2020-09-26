// CONSTANTS
const RAINBOW = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const GRID = document.querySelector('.grid')
const reset = document.getElementById("reset");

// FUNCTIONS
// build the grid
function buildGrid(size) {
    for (let i = 0; i < size ** 2; i++) {
        let square = document.createElement('div');
        square.className = "square";
        GRID.appendChild(square);
    }
    enableGrid()
}
// listen for mouseover
function enableGrid() {
    const squares = document.querySelectorAll('.square')
    for (const square of squares) {
        square.addEventListener("mouseover", function () {
            square.style.background = RAINBOW[Math.floor(Math.random() * Math.floor(6))];
        });
    }
}
// reset the grid
function resetGrid() {
    GRID.innerHTML = "";
    buildGrid(16);
}

// MAIN
buildGrid(16)
// listen for reset
reset.addEventListener("click", function() {
    resetGrid();
});