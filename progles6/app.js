class App{
    runApplication(){
        let myCanvas = document.getElementById("canvasID");
        let g = myCanvas.getContext("2d");

        myCanvas.addEventListener('mousemove', (evt)=>{
            let mousePos = this.getMousePos(myCanvas, evt);
            console.log(mousePos.x);
        })
        
        g.fillStyle = "green";
        g.rect(mousePos.x, 1, 100, 30, 30);
        g.stroke();
        g.fill();
    }

    getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
        };
      }
}

let app = new App();
app.runApplication();