var canvas = document.getElementById("code-canvas");
var ctx = canvas.getContext("2d");

function getRandomChar() {
	var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	return chars[Math.floor(Math.random() * chars.length)];
}

function createCodeRain() {
	var codeRain = {
		x: Math.random() * canvas.width,
		y: 0,
		char: getRandomChar(),
		speed: Math.random() * 3 + 1
	};

	return codeRain;
}

var codeRains = [];

function animate() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	for (var i = 0; i < codeRains.length; i++) {
		var codeRain = codeRains[i];

		ctx.fillStyle = "#00ffff";
		ctx.font = "20px Arial";
		ctx.fillText(codeRain.char, codeRain.x, codeRain.y);

		codeRain.y += codeRain.speed;

		if (codeRain.y > canvas.height) {
			codeRains.splice(i, 1);
			i--;
		}
	}

	if (Math.random() < 0.1) {
		var newCodeRain = createCodeRain();
		codeRains.push(newCodeRain);
	}

	requestAnimationFrame(animate);
}

function resizeCanvas() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}

window.addEventListener("resize", resizeCanvas);

resizeCanvas();
animate();
