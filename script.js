mainContainer = document.querySelector('#container');

for (let i = 0; i < 2000; i++) {
    let grid = document.createElement('div');
    grid.style.padding = '10px';
    grid.style.border = '1px solid black';
    mainContainer.appendChild(grid);
};

let grid = mainContainer.querySelectorAll('*');


    grid.forEach(function(node) {
    node.addEventListener('mouseenter', function() {
      node.style.backgroundColor = 'black';
    });
  });
  