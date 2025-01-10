let display = '';

function inputValue(value) {
  const displayElement = document.querySelector('input');
  display += value;
  displayElement.value = display;
}

function calculate() {
  try {
    const displayElement = document.querySelector('input');
    display = eval(display).toString();
    displayElement.value = display;
  } catch (error) {
    alert('Invalid expression!');
  }
}

function clearResult() {
  display = '';
  document.querySelector('input').value = '';
}

function deleteLast() {
  const displayElement = document.querySelector('input');
  display = display.slice(0, -1);
  displayElement.value = display;
}

const body = document.querySelector('body');
const button = document.querySelectorAll('button');

const color = [
  'red',
  'black',
  'blue',
  'pink',
  'yellow',
  'green',
  'violet',
  'whitesmoke'
];

button.forEach((button) =>
  button.addEventListener('click', () => {
    const colorIndex = parseInt(Math.random() * color.length);
    body.style.backgroundColor = color[colorIndex];
  })
);
