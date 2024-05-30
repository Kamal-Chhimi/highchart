const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letterB = new Image();
letterB.src = 'path_to_cropped_B_image.png'; // Replace with the path to your cropped B image

let bX = 100;
let bY = canvas.height - 100;
let isJumping = false;
let jumpHeight = 150;
let gravity = 5;
let velocity = 20;

const pathY = canvas.height - 50;
const pathWidth = 20;

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !isJumping) {
        isJumping = true;
    }
});

function update() {
    if (isJumping) {
        bY -= velocity;
        velocity -= gravity;
        if (velocity < -20) {
            isJumping = false;
            velocity = 20;
        }
    } else {
        if (bY < canvas.height - 100) {
            bY += gravity;
        }
    }
}

function drawPath() {
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    for (let i = 0; i < canvas.width / pathWidth; i++) {
        ctx.beginPath();
        ctx.moveTo(i * pathWidth, pathY);
        ctx.lineTo(i * pathWidth + pathWidth, pathY);
        ctx.stroke();
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawPath();

    ctx.drawImage(letterB, bX, bY, 50, 50);

    requestAnimationFrame(draw);
}

function gameLoop() {
    update();
    draw();
}

letterB.onload = () => {
    gameLoop();
};
