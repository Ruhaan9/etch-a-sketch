mainContainer = document.querySelector('#container');

for (let i = 0; i < 2000; i++) {
    let grid = document.createElement('div');
    grid.style.backgroundColor = 'blue';
    grid.style.padding = '10px';
    mainContainer.appendChild(grid);
}