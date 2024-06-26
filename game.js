const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const img = new Image();
img.src = './my-react-app/public/logo-billing.png'; // Ensure this path is correct

const b = {
    x: 100,
    y: 200,
    width: 100,
    height: 100,
    dy: 0,
    jumpPower: -20,
    gravity: 0.2
};

let roadX = 0;

function drawRoad() {
    ctx.fillStyle = '#555';
    ctx.fillRect(roadX, 350, canvas.width, 50);
    ctx.fillRect(roadX + canvas.width, 350, canvas.width, 50);
    roadX -= 5;
    if (roadX <= -canvas.width) {
        roadX = 0;
    }
}

function drawB() {
    // Draw a rectangle to help debug the image cropping area
    ctx.strokeStyle = 'red';
    ctx.strokeRect(b.x, b.y, b.width, b.height);

    // Adjust the cropping area based on the position of the B in the image
    const cropX = 50; // Change this value to the correct x-coordinate of B in the image
    const cropY = 0; // Change this value to the correct y-coordinate of B in the image
    const cropWidth = 100; // Change this value to the width of B in the image
    const cropHeight = 100; // Change this value to the height of B in the image

    ctx.drawImage(img, cropX, cropY, cropWidth, cropHeight, b.x, b.y, b.width, b.height);
}

function updateB() {
    b.dy += b.gravity;
    b.y += b.dy;
    if (b.y + b.height > 350) {
        b.y = 350 - b.height;
        b.dy = 0;
    }
}

function jump() {
    if (b.y + b.height === 350) {
        b.dy = b.jumpPower;
    }
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawRoad();
    drawB();
    updateB();
    requestAnimationFrame(gameLoop);
}

document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        jump();
    }
});

img.onload = function () {
    console.log('Image loaded successfully');
    gameLoop();
};

img.onerror = function () {
    console.error('Error loading image. Please check the image path.');
};
