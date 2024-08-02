// Get the game container and ship elements
const gameContainer = document.getElementById("game-container");
const ship = document.getElementById("ship");

// Set the ship's initial position
let shipX = gameContainer.offsetWidth / 2;
let shipY = gameContainer.offsetHeight - 20;

// Set the invader's initial position and speed
let invaderX = 0;
let invaderY = 0;
let invaderSpeed = 2;

// Set the bullet's initial position and speed
let bulletX = 0;
let bulletY = 0;
let bulletSpeed = 5;

// Create an array to hold the invaders
const invaders = [];

// Create an array to hold the bullets
const bullets = [];

// Function to create an invader
function createInvader() {
	const invader = document.createElement("div");
	invader.className = "invader";
	invader.style.left = `${invaderX}px`;
	invader.style.top = `${invaderY}px`;
	gameContainer.appendChild(invader);
	invaders.push(invader);
}

// Function to create a bullet
function createBullet() {
	const bullet = document.createElement("div");
	bullet.className = "bullet";
	bullet.style.left = `${bulletX}px`;
	bullet.style.top = `${bulletY}px`;
	gameContainer.appendChild(bullet);
	bullets.push(bullet);
}

// Function to move the ship
function moveShip(event) {
	if (event.key === "ArrowLeft") {
		shipX -= 10;
	} else if (event.key === "ArrowRight") {
		shipX += 10;
	}
	ship.style.left = `${shipX}px`;
}

// Function to move the invaders
function moveInvaders() {
	invaderX += invaderSpeed;
	if (invaderX > gameContainer.offsetWidth - 20 || invaderX < 0) {
		invaderSpeed = -invaderSpeed;
		invaderY += 20;
	}
	for (let i = 0; i < invaders.length; i++) {
		invaders[i].style.left = `${invaderX}px`;
		invaders[i].style.top = `${invaderY}px`;
	}
}

// Function to move the bullets
function moveBullets() {
	for (let i = 0; i < bullets.length; i++) {
		bulletY -= bulletSpeed;
		bullets[i].style.top = `${bulletY}px`;
		if (bulletY < 0) {
			bullets.splice(i, 1);
			gameContainer.removeChild(bullets[i]);
		}
	}
}

// Function to check for collisions
function checkCollisions() {
	for (let i = 0; i < invaders.length; i++) {
		if (
			shipX + 20 > invaders[i].offsetLeft &&
			shipX < invaders[i].offsetLeft + 20 &&
			shipY + 20 > invaders[i].offsetTop &&
			shipY < invaders[i].offsetTop + 20
		) {
			alert("Game Over");
			return;
		}
	}
	for (let i = 0; i < bullets.length; i++) {
		for (let j = 0; j < invaders.length; j++) {
			if (
				bulletX + 5 > invaders[j].offsetLeft &&
				bulletX < invaders[j].offsetLeft + 20 &&
				bulletY + 10 > invaders[j].offsetTop &&
				b
