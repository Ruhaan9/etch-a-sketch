
function gridCreator(size) {
 
  let elementSize = ((700/size)) + 'px';

  for (let i = 0; i < size*size; i++) {
    let grid = document.createElement('div');
    grid.style.width = elementSize;
    grid.style.height = elementSize;
    grid.style.backgroundColor = "white";
    grid.style.border = '1px solid black';
    grid.style.boxSizing = "border-box";
    mainContainer.appendChild(grid);
  }; 
  
};

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const mainContainer = document.querySelector('#container');
gridCreator(16);
let grid = mainContainer.querySelectorAll('*');

let sizeBtn = document.querySelector('#gridPrompt');
let rainbowBtn = document.querySelector('#rainbow');
let opacityBtn = document.querySelector('#opacity');


let mode = 'default';

rainbowBtn.addEventListener('click', () => {
  mode = 'rainbow';
});

opacityBtn.addEventListener('click', () => {
  mode = 'opacity';
});



sizeBtn.addEventListener('click', () => {
    let size = '';
    while ( size == '' || size < 0 || size > 100)  {
    size = prompt("Enter the Grid Size between 1 and 100", "16");
    };
    grid.forEach(function(node) {
      mainContainer.removeChild(node);
    });
    size = parseInt(size);
    gridCreator(size);
    grid = null;
    grid = mainContainer.querySelectorAll('*');
  
});


  
    
    grid.forEach(function(node) {
    node.addEventListener('mouseenter', function() {
      if (mode == 'default') {

        node.style.backgroundColor = 'black';

      } else if (mode == 'rainbow') {

        let randomColor = getRandomColor();
        node.style.backgroundColor = randomColor;

      } else if (mode == 'opacity') {

      };
    });
  });

  
  