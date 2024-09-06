const box = document.querySelector('.box')
const count = 625;
const colors = [
    '#ff3b3b', '#ffd700', '#00ffff', '#1e90ff', '#32cd32', '#ff1493', '#ff4500', '#9400d3', '#ff69b4',
    '#ff6347', '#4682b4', '#7fffd4', '#8a2be2', '#ff8c00', '#ff00ff', '#00fa9a', '#40e0d0', '#98fb98',
    '#6a5acd', '#ffdead', '#8b0000', '#7cfc00', '#00ced1', '#f08080', '#ba55d3', '#ee82ee', '#ffa07a',
    '#ffb6c1', '#7b68ee', '#48d1cc', '#d2691e', '#dc143c', '#ff4500', '#228b22', '#00ff7f', '#4682b4',
    '#adff2f', '#ff7f50', '#daa520', '#8b4513', '#ff69b4', '#b0e0e6', '#cd5c5c', '#4b0082', '#c71585'
];

for (let i = 0; i < count; i++) {
    let square = document.createElement('div')
    square.classList.add('square')
    box.append(square)
    square.addEventListener('mouseenter', () => changeColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))
}

function changeColor(element) {
    element.style.background = colors[getRandomColor()];
    element.style.boxShadow = `0 0 15px 5px ${element.style.background}`;
}

function removeColor(element) {
    element.style.background = '';
    element.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
}

function getRandomColor() {
    return Math.floor(Math.random() * colors.length);
}
