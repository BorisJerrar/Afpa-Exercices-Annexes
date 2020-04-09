let canvas = document.querySelector(".red");
let canvasTransfo = canvas.getContext("2d");
canvasTransfo.beginPath();
canvasTransfo.rect(20, 20, 2200, 2200);
canvasTransfo.fillStyle = "#b352f3";
canvasTransfo.strokeStyle = "#fff"
canvasTransfo.lineWidth = 10
canvasTransfo.stroke()

canvasTransfo.fill();