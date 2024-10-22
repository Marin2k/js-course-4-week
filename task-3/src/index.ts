window.onload = function () {
  const canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  function drawLines(): void {
    const centerX = canvas.width / 50; 
    const centerY = canvas.height / 2; 

    const numLines = 2000; 

    for (let i = 0; i < numLines; i++) {
      context.beginPath();
      context.moveTo(centerX, centerY);

      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;

      context.lineTo(x, y);
      context.strokeStyle = `rgba(0, 0, 255, ${Math.random()})`; 
      context.lineWidth = 0.5; 
      context.stroke();
    }
  }

  drawLines();
};
