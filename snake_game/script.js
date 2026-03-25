// ===== DOM =====
const boundary = document.querySelector('.boundary');
const scoreEl = document.getElementById("score");
const highscoreEl = document.getElementById("highscore");
const timeEl = document.getElementById("time");
const modal = document.querySelector(".modal");
const startText = document.querySelector(".modal h3");
const btn = document.querySelector(".btn");

// ===== STATE =====
let snake, food, direction, nextDirection;
let score = 0, highscore = 0, time = 0;
let intervalId = null, timerId = null;
let rows, cols;
let blocks = {};
let speed = 200;
let isRunning = false;

// ===== LOAD HIGHSCORE =====
highscore = localStorage.getItem("highscore") || 0;
highscoreEl.textContent = highscore;


//============setupgrid=============//

function setupgrid() {
    const blocksize = Math.max(20, Math.min(boundary.clientWidth / 20, 40));

    cols = Math.floor(boundary.clientWidth / blocksize);
    rows = Math.floor(boundary.clientHeight / blocksize);

    boundary.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    boundary.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
};


//===========creategrid==========//


function creategrid() {
    boundary.innerHTML = "";
    blocks = {};
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const div = document.createElement('div');
            div.classList.add('box');
            boundary.appendChild(div);
            blocks[`${i}-${j}`] = div;

        }
    }
}

//==========init=======//

function init() {
    snake = [{ x: Math.floor(rows / 2), y: Math.floor(cols / 2) }];
    direction = "right";
    nextDirection = "right";
    score = 0;
    time = 0;
    speed = 200;

    spawnfood();
    updateUI();
    render();

};

function spawnfood() {
    do {
        food = {
            x: Math.floor(Math.random() * rows),
            y: Math.floor(Math.random() * cols),
        };
    } while (snake.some(s => s.x === food.x && s.y === food.y));
};

function update() {
    direction = nextDirection;

    const head = { ...snake[0] };

    if (direction === "left") head.y--;
    if (direction === "right") head.y++;
    if (direction === "up") head.x--;
    if (direction === "down") head.x++;

    // Wall collision
    if (head.x < 0 || head.x >= rows || head.y < 0 || head.y >= cols) {
        return gameOver()
    }

    //self collision
    if (snake.some(s => s.x === head.x && s.y === head.y)) {
        return gameOver();
    }

    //eat food
    if (head.x === food.x && head.y === food.y) {
        snake.unshift(head);
        score += 10;
        spawnfood();

        if (speed > 80) {
            speed -= 5;
            clearInterval(intervalId);
            intervalId = setInterval(loop, speed);
        }

    } else {
        snake.unshift(head);
        snake.pop();
    }


};


//=============render===========//

function render() {
    Object.values(blocks).forEach(b => b.classList.remove("fill", "foodspawn"));

    snake.forEach(s => {
        blocks[`${s.x}-${s.y}`]?.classList.add("fill");
    });

    blocks[`${food.x}-${food.y}`]?.classList.add("foodspawn");
};

// ===== LOOP =====//
function loop() {
    update();
    render();
    scoreEl.textContent = score;
}

//===========starttimer================//

function startTimer() {
    return setInterval(() => {
        time++;
        timeEl.textContent = time.toString().padStart(2, "0");
    }, 1000);
};

// ===== UI =====
function updateUI() {
    score = 0;
    time = 0;
    scoreEl.textContent = "0";
    timeEl.textContent = "00";
}

//===========startgame============//

function startGame(){
    if (isRunning) return; 
    isRunning = true;

    clearInterval(intervalId);
    clearInterval(timerId);

    nextDirection = "right"; 

    setupgrid();
    creategrid();
    init();

    modal.style.display = "none";
    btn.style.display = "none";
    startText.style.display = "block";    

    intervalId = setInterval(loop, speed);
    timerId = startTimer();
};

//===========gameover==========//

function gameOver() {
    clearInterval(intervalId);
    clearInterval(timerId);
    isRunning = false;

    if (score > highscore) {
        highscore = score;
        localStorage.setItem("highscore", highscore);
        highscoreEl.textContent = highscore;
    }

    modal.style.display = "flex";
    startText.style.display = "none";
    btn.style.display = "block";

}


//============input=============//


document.addEventListener("keydown", e => {
    if (e.code === "Space" && !e.repeat) {
        startGame();
    }

    if (e.key === "ArrowLeft" && direction !== "right") nextDirection = "left";
    if (e.key === "ArrowRight" && direction !== "left") nextDirection = "right";
    if (e.key === "ArrowUp" && direction !== "down") nextDirection = "up";
    if (e.key === "ArrowDown" && direction !== "up") nextDirection = "down";
});

//============btn startgame ==========//

btn.addEventListener("click", startGame);


//=========== resize =========//


window.addEventListener("resize", () => {
    setupgrid();
    creategrid();
    render();
});
