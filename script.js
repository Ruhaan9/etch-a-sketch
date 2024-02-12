mainContainer = document.querySelector('#container');

let sizeBtn = document.querySelector('#gridPrompt');
let gridSize = 16;

sizeBtn.addEventListener('click', () => {
    
    let size = '';
    while ( size == '' || size < 0 || size > 100)  {
    size = prompt("Enter the Grid Size between 1 and 100", "16");
    };
})


let elementSize = ((700/gridSize)/2) + 'px';

for (let i = 0; i < gridSize*gridSize; i++) {
    let grid = document.createElement('div');
    grid.style.padding = '20px';
    grid.style.border = '1px solid black';
    mainContainer.appendChild(grid);
};

    let grid = mainContainer.querySelectorAll('*');


    grid.forEach(function(node) {
    node.addEventListener('mouseenter', function() {
      node.style.backgroundColor = 'black';
    });
  });

  
  