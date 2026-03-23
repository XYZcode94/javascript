const boundary = document.querySelector('.boundary');

const blockSize = 50;

const snake = [
    { x: 2, y: 3 },
    { x: 2, y: 4 },
    { x: 2, y: 5 }
];

const blocks = {};

const cols = Math.floor(boundary.clientWidth / blockSize);
const rows = Math.floor(boundary.clientHeight / blockSize);

for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
        const box = document.createElement('div');
        box.classList.add('box');
        boundary.appendChild(box);

        box.textContent = `${x},${y}`;

        blocks[`${x}-${y}`] = box;
    }
}


snake.forEach(segment => {
    const key = `${segment.x}-${segment.y}`;
    blocks[key].classList.add('snake');
});