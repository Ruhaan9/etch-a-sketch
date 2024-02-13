let gridNodes;
let mainContainer = document.querySelector('#container');
let clearBtn = document.querySelector('#clear');

gridCreator(16);

function gridCreator(size) {
  let elementSize = (700 / size) + 'px';

  for (let i = 0; i < size * size; i++) {
    let grid = document.createElement('div');
    grid.style.width = elementSize;
    grid.style.height = elementSize;
    grid.style.backgroundColor = "white";
    grid.style.border = '1px solid black';
    grid.style.boxSizing = "border-box";
    mainContainer.appendChild(grid);
  };

  gridNodes = mainContainer.querySelectorAll('div');

  gridNodes.forEach(function (node) {
    node.addEventListener('mouseenter', function () {
      if (mode == 'default') {
        node.style.backgroundColor = 'black';
      } else if (mode == 'rainbow') {
        let randomColor = getRandomColor();
        node.style.backgroundColor = randomColor;
      } else if (mode == 'eraser') {
        node.style.backgroundColor = 'white';
      } 
    });
  });

  clearBtn.addEventListener('click', () => {
    gridNodes.forEach(function (node) {
      node.style.backgroundColor = 'white';
    });
  });
}

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

let sizeBtn = document.querySelector('#gridPrompt');
let rainbowBtn = document.querySelector('#rainbow');
let opacityBtn = document.querySelector('#eraser');
let buttonx = document.querySelector('#x');

let mode = 'default';

buttonx.addEventListener('click', () => {
  mode = 'default';
});

rainbowBtn.addEventListener('click', () => {
  mode = 'rainbow';
});

opacityBtn.addEventListener('click', () => {
  mode = 'eraser';
});

sizeBtn.addEventListener('click', () => {
  let size = '';
  while (size == '' || size < 0 || size > 100) {
    size = prompt("Enter the Grid Size between 1 and 100", "16");
  };
  size = parseInt(size);
  mainContainer.innerHTML = '';
  gridCreator(size);
});
