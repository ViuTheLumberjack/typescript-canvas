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
    }
}