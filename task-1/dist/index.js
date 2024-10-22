"use strict";
window.onload = function () {
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    canvas.width = 800;
    canvas.height = 800;
    function drawRandomLines() {
        for (var i = 0; i < 10000; i++) {
            context.beginPath();
            context.moveTo(Math.random() * canvas.width, 
            Math.random() * canvas.height);
            context.lineTo(Math.random() * canvas.width, 
            Math.random() * canvas.height);
            context.strokeStyle = getRandomColor(); 
            context.stroke();
        }
    }
    function getRandomColor() {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        var a = Math.random(); 
        return "rgba(".concat(r, ",").concat(g, ",").concat(b, ",").concat(a, ")");
    }
    drawRandomLines(); 
};
