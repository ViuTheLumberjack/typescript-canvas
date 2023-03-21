export type DrawingOption = Readonly<{
    color: string;
    lineWidth: number;
}>;

export class Drawing{
    options: DrawingOption = {
        color: "black",
        lineWidth: 2
    };
    root: HTMLElement | null = null; 
    canvas: HTMLCanvasElement | null = null;
    context: CanvasRenderingContext2D | null = null; 
    seletedColor: string = this.options.color;
    lineWidth: number = this.options.lineWidth;
    drawingFromX: number | null = null;
    drawingFromY: number | null = null;
    drawingToX: number | null = null;
    drawingToY: number | null = null;
    mouseDown: boolean = false;

    constructor(){
        console.log("Drawing constructor");
        this.addListeners();
    }

    private _addListeners = () => {
        document.addEventListener("DOMContentLoaded", () => {
            console.log("LOADED");
            this.root = document.body;
            this.canvas = this.getCanvas();
            this.context = this.getContext();

            const $this = this;

            [].forEach.call(document.querySelectorAll(".bottone"), function (el: HTMLElement) {
                el.addEventListener("click", function (e: MouseEvent) {
                    let id = this.id;
                    let color = id.match(/[A-Z][a-z]+/g);

                    if(id == "bottoneCancella"){
                        $this.clarCanvas();
                    } else {
                        $this.changeColor(color[0]);
                    }
                });
            });
        });
    };

    changeColor(color: string) {
        this.seletedColor = color;
    }

    clarCanvas() {
        const fineastraCOnferma = confirm("Sei sicuro di voler cancellare tutto?");

        if(fineastraCOnferma){
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
    }

    public get addListeners() {
        return this._addListeners;
    }
    
    public set addListeners(value) {
        this._addListeners = value;
    }

    private getCanvas(): HTMLCanvasElement | null {
        if(this.canvas != null){
            return this.canvas;
        }

        let controlsHeight: number = document.getElementById("controls").offsetHeight;
        this.canvas = document.createElement("canvas");
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight - controlsHeight - 20;
        this.root.prepend(this.canvas);

        this.canvas.addEventListener("mousemove", (e: MouseEvent) => {
            this.computeDrawCoordinates(e);
        });

        this.canvas.addEventListener("mouseup", (e: MouseEvent) => {
            this.computeDrawCoordinates(e);
        });

        this.canvas.addEventListener("mousedown", (e: MouseEvent) => {
            this.computeDrawCoordinates(e);
        });

        this.canvas.addEventListener("mouseout", (e: MouseEvent) => {
            this.computeDrawCoordinates(e);
        });

        return this.canvas;
    }
    
    private computeDrawCoordinates(e: MouseEvent): void {
        switch(e.type){
            case "mousemove":
                if(this.mouseDown){
                    this.drawingToX = e.clientX - this.canvas.offsetLeft;
                    this.drawingToY = e.clientY - this.canvas.offsetTop;
                    this.draw();
                    this.drawingFromX = this.drawingToX;
                    this.drawingFromY = this.drawingToY;
                }
                break;
            case "mousedown":
                this.mouseDown = true;
                this.drawingFromX = e.clientX - this.canvas.offsetLeft;
                this.drawingFromY = e.clientY - this.canvas.offsetTop;
                break;
            case "mouseup":
                this.mouseDown = false;
                break;
            case "mouseout":
                this.mouseDown = false;
                break;

        }
    }
    
    private draw(): void {
        this.context.beginPath();
        this.context.strokeStyle = this.seletedColor;
        this.context.lineWidth = this.lineWidth;
        this.context.moveTo(this.drawingFromX, this.drawingFromY);
        this.context.lineTo(this.drawingToX, this.drawingToY);
        this.context.stroke();
        this.context.closePath();
    }

    private getContext(): CanvasRenderingContext2D {
        if(this.context){
            return this.context;
        }

        this.context = this.getCanvas().getContext("2d");

        return this.context;
    }
}