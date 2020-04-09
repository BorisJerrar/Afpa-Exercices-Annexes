let canvas = document.querySelector("canvas");
let canvasTransfo = canvas.getContext("2d");
let image = document.createElement("img")
image.src = "http://scd.rfi.fr/sites/filesrfi/imagecache/rfi_16x9_1024_578/sites/images.rfi.fr/files/aef_image/2018-11-30t153804z_1078111843_rc16130e3990_rtrmadp_3_g20-argentina-family-photo_0.jpg"

image.onload = () => {
    canvasTransfo.drawImage(image, 0, 0, 1024, 578)
    canvasTransfo.beginPath();
    canvasTransfo.rect(480, 140, 100, 100);
    canvasTransfo.fillStyle = "#000";
    canvasTransfo.fill();
    canvasTransfo.beginPath();
    canvasTransfo.arc(120, 225, 50, 0, 2 * Math.PI);
    canvasTransfo.lineWidth = 4
    canvasTransfo.strokeStyle = "#666666"
    canvasTransfo.stroke();
}