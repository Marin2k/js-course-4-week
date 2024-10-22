window.onload = function () {
    const canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
    const context = canvas.getContext("2d");
  
    canvas.width = 800;
    canvas.height = 800;
  
    function drawRandomLines(): void {
      for (let i = 0; i < 10000; i++) {
        context!.beginPath();
        context!.moveTo(
          Math.random() * canvas.width,  
          Math.random() * canvas.height
        );
        context!.lineTo(
          Math.random() * canvas.width,  
          Math.random() * canvas.height
        );
  
        context!.strokeStyle = getRandomColor(); 
        context!.stroke();
      }
    }
  
    function getRandomColor(): string {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      const a = Math.random(); 
      return `rgba(${r},${g},${b},${a})`;
    }
  
    drawRandomLines();  
  };
  