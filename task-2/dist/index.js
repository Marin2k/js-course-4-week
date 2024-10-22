"use strict";
window.onload = function () {
    const canvas = document.getElementById("myCanvas");
    const context = canvas.getContext("2d");
    canvas.width = 800;
    canvas.height = 800;
    function drawRandomRectangles() {
        for (let i = 0; i < 200; i++) {
            const width = Math.random() * 100; 
            const height = Math.random() * 100; 
            const x = Math.random() * canvas.width; 
            const y = Math.random() * canvas.height; 
            context.fillStyle = getRandomColor(); 
            context.fillRect(x, y, width, height); 
            context.strokeStyle = '#000'; 
            context.lineWidth = 2; 
            context.strokeRect(x, y, width, height);
        }
    }
    function getRandomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r},${g},${b})`;
    }
    drawRandomRectangles(); 
};
