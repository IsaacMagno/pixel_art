const pixelBoard = 'pixel-board';

function clear() {
  const squares = document.getElementById(pixelBoard);
  const childs = squares.children;

  if (childs.length > 0) {
    for (let i = 0; i < childs.length * 100; i += 1) {
      childs[0].remove();
    }
  }
}

function boardCreate(gradeLength = 25) {
  for (let i = 0; i < gradeLength; i += 1) {
    const createPixel = document.createElement('td');
    createPixel.classList.add('pixel');
    createPixel.id = `pixel-${i}`;
    document.getElementById(pixelBoard).appendChild(createPixel);
  }
}

function createBoard() {
  clear();
  let pixelCount = 25;
  const gradeLength = document.getElementById('grade-length');

  if (gradeLength.value > 50) {
    pixelCount = 50;
    alert('Tamanho máximo da grade = 50');
    clear();
  } else if (gradeLength.value > 0) {
    pixelCount = gradeLength.value;
    clear();
  }

  boardCreate(pixelCount);
}

window.onload = () => {
  const select = document.querySelector('.color');
  select.className = 'color selected';
  createBoard();
};

function colorPallete() {
  const allPallete = document.querySelectorAll('.color');
  for (let c = 0; c < allPallete.length; c += 1) {
    allPallete[c].className = 'color';
  }
}

function selectColor(event) {
  const corId = event.target.id;
  const color = document.getElementById(corId);
  colorPallete();
  color.className = 'color selected';
}

console.log(selectColor);

function colorPaint(event) {
  const linha = event.target.id;
  console.log(linha);
  return linha;
}

const pixelPannel = document.getElementById(pixelBoard);
pixelPannel.addEventListener('click', (event) => {
  const linha = colorPaint(event);
  const cor = document.querySelector('.selected').style.backgroundColor;
  document.getElementById(linha).style.backgroundColor = cor;
});

const buttonClear = document.getElementById('clear-board');
buttonClear.addEventListener('click', () => {
  clear();
});
