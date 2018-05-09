var canvas = document.getElementById('art');
var ctx = canvas.getContext('2d');
var division = 9;
var separation = ctx.canvas.width / division;

// Définition des limites
var maxCircle = 60;
var maxSquare = 20;
var maxLine = 10;

var minCircle = 30;
var minSquare = 10;
var minLine = 3;

// Réception des checkboxs.
var circles = document.getElementById('circles');
var squares = document.getElementById('squares');
var lines = document.getElementById('lines');

ctx.lineWidth = 3;

function drawLittleCircle(x, y) {
  var largeX = x * separation + separation / 2;
  var largeY = y * separation + separation / 2;
  var largeRadius = separation / 8;

  ctx.fillStyle = 'rgb(0, 255, 0)';
  ctx.strokeStyle = 'rgb(0, 255, 0)';
  ctx.beginPath();
  ctx.arc(largeX, largeY, largeRadius, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
}

function drawMediumCircle(x, y) {
  var largeX = x * separation + separation / 2;
  var largeY = y * separation + separation / 2;
  var largeRadius = separation / 4;

  ctx.fillStyle = 'rgb(255, 255, 255)';
  ctx.strokeStyle = 'rgb(255, 255, 255)';
  ctx.beginPath();
  ctx.arc(largeX, largeY, largeRadius, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
}

function drawLargeCircle(x, y) {
  var largeX = x * separation + separation / 2;
  var largeY = y * separation + separation / 2;
  var largeRadius = separation / 2;

  ctx.fillStyle = 'rgb(51, 153, 255)';
  ctx.strokeStyle = 'rgb(51, 153, 255)';
  ctx.beginPath();
  ctx.arc(largeX, largeY, largeRadius, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
}

function drawCircleRandomly() {
  var randomX = Math.floor(Math.random() * Math.floor(division));
  var randomY = Math.floor(Math.random() * Math.floor(division));

  var randomSize = Math.floor(Math.random() * Math.floor(3));
  if (randomSize == 0) {
    drawLittleCircle(randomX, randomY);
  } else if (randomSize == 1) {
    drawMediumCircle(randomX, randomY);
  } else {
    drawLargeCircle(randomX, randomY);
  }
}

function drawLittleSquare(x, y, angle) {
  var largeX = x * separation + separation / 4;
  var largeY = y * separation + separation / 4;

  ctx.fillStyle = 'rgb(0, 255, 0)';
  ctx.strokeStyle = 'rgb(0, 255, 0)';
  ctx.beginPath();
  ctx.translate(largeX, largeY);
  ctx.rotate(angle * 45 * Math.PI / 180);
  ctx.rect(0, 0, separation / 4, separation / 4);
  ctx.fill();
  ctx.stroke();
  ctx.resetTransform();
}

function drawMediumSquare(x, y, angle) {
  var largeX = x * separation + separation / 2;
  var largeY = y * separation + separation / 2;

  ctx.fillStyle = 'rgb(255, 255, 255)';
  ctx.strokeStyle = 'rgb(255, 255, 255)';
  ctx.beginPath();
  ctx.translate(largeX, largeY);
  ctx.rotate(angle * 45 * Math.PI / 180);
  ctx.rect(0, 0, separation / 2, separation / 2);
  ctx.fill();
  ctx.stroke();
  ctx.resetTransform();
}

function drawLargeSquare(x, y, angle) {
  var largeX = x * separation + separation;
  var largeY = y * separation;

  ctx.fillStyle = 'rgb(51, 153, 255)';
  ctx.strokeStyle = 'rgb(51, 153, 255)';
  ctx.beginPath();
  ctx.translate(largeX, largeY);
  ctx.rotate(angle * 45 * Math.PI / 180);
  ctx.rect(0, 0, separation, separation);
  ctx.fill();
  ctx.stroke();
  ctx.resetTransform();
}

function drawSquareRandomly() {
  var randomX = Math.floor(Math.random() * Math.floor(division));
  var randomY = Math.floor(Math.random() * Math.floor(division));
  var randomAngle = Math.floor(Math.random() * Math.floor(2));

  var randomSize = Math.floor(Math.random() * Math.floor(3));

  if (randomSize == 0) {
    drawLargeSquare(randomX, randomY, randomAngle + 1);
  } else if (randomSize == 1) {
    drawMediumSquare(randomX, randomY, randomAngle + 1);
  } else {
    drawLittleSquare(randomX, randomY, randomAngle + 1);
  }
}

function drawLineRandomly() {
  var randomColor = Math.floor(Math.random() * Math.floor(3));

  if (randomColor == 0) {
    ctx.strokeStyle = 'rgb(51, 153, 255)';
  } else if (randomColor == 1) {
    ctx.strokeStyle = 'rgb(255, 255, 255)';
  } else {
    ctx.strokeStyle = 'rgb(0, 255, 0)';
  }

  var randomOrigin = Math.floor(Math.random() * Math.floor(2));

  ctx.beginPath();
  if (randomOrigin == 0) {
    var randomX = Math.floor(Math.random() * Math.floor(canvas.width));
    var finalRandomX = Math.floor(Math.random() * Math.floor(canvas.width));

    ctx.moveTo(randomX, 0);
    ctx.lineTo(finalRandomX, canvas.height);
  } else {
    var randomY = Math.floor(Math.random() * Math.floor(canvas.height));
    var finalRandomY = Math.floor(Math.random() * Math.floor(canvas.height));

    ctx.moveTo(0, randomY);
    ctx.lineTo(canvas.width, finalRandomY);
  }
  ctx.stroke();
}

function drawCircles() {
  circlesNumber = Math.floor(Math.random() * Math.floor(maxCircle - minCircle)) + minCircle;
  if (circles.checked == true) {
    for (var i = 0; i < circlesNumber; i++) {
      drawCircleRandomly();
    }
  }
}

function drawSquares() {
  squaresNumber = Math.floor(Math.random() * Math.floor(maxSquare - minSquare)) + minSquare;
  if (squares.checked == true) {
    for (var i = 0; i < squaresNumber; i++) {
      drawSquareRandomly();
    }
  }
}

function drawLines() {
  linesNumber = Math.floor(Math.random() * Math.floor(maxLine - minLine)) + minLine;
  if (lines.checked == true) {
    for (var i = 0; i < linesNumber; i++) {
      drawLineRandomly();
    }
  }
}

function randomize() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (circles.checked == true) {
    drawCircles();
  } if (lines.checked == true) {
    drawLines();
  } if (squares.checked == true) {
    drawSquares();
  }
}
