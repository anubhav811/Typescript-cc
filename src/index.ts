class Shape{
    constructor(private _x:number,private _y:number){}
    public get x():number{
        return this._x
    }

    public set x(value:number) {
        this._x  = value;
    }

    public get y():number{
        return this._y
    }
    
    public set y(value:number) {
        this._y  = value;
    }

    public getInfo():string{
        return `x=${this._x} , y=${this._y}`;
    }
}

class Circle extends Shape{
   
    constructor(x:number,y:number, private _radius : number){
        super(x,y);
    }

    public get radius():number{
        return this._radius;
    }   
    public set radius(value:number){
        this._radius= value;
    }   

    public getInfo(): string {
        return super.getInfo() + ` , radius=${this._radius}`;
    }
}

class Rectangle extends Shape{

    constructor(x:number,y:number,private _length :number,private _width : number){
        super(x,y);
    }
    public set width(value : number) {
        this._width = value;
    }

    public set length(value : number) {
        this._length = value;
    }
    public get width() : number {
        return this._width ;
    }
    public get length() : number {
        return this._length;
    }
    
    public getInfo(): string {
        return super.getInfo() + `, length=${this._length} , width=${this._width}`;
    }
}

const myShape = new Shape(10,15);
console.log(myShape.getInfo());
const myCircle = new Circle(5,10,20);
console.log(myCircle.getInfo());
const myRectangle = new Rectangle(0,0,10,20);
console.log(myRectangle.getInfo())

const shapes : Shape[] = [];
shapes.push(myShape,myCircle,myRectangle);
console.log(shapes)

