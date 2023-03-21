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

    private addListeners = () => {
        document.addEventListener("DOMContentLoaded", () => {
            console.log("LOADED");
            this.root = document.body;
            this.canvas = this.getCanvas();
        });
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
    }
}