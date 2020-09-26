// build the grid
for (let i = 0; i < 256; i++) {
    console.log(i)
    let square = document.createElement('div');
    square.className = "square";
    document.getElementsByClassName('grid')[0].appendChild(square);
}