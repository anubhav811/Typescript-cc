"use strict";
class Shape {
    constructor(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    get x() {
        return this._x;
    }
    set x(value) {
        this._x = value;
    }
    get y() {
        return this._y;
    }
    set y(value) {
        this._y = value;
    }
    getInfo() {
        return `x = ${this._x} , y = ${this._y}`;
    }
}
class Circle extends Shape {
    getArea() {
        return Math.PI * Math.pow(this._radius, 2);
    }
    constructor(x, y, _radius) {
        super(x, y);
        this._radius = _radius;
    }
    get radius() {
        return this._radius;
    }
    set radius(value) {
        this._radius = value;
    }
    getInfo() {
        return super.getInfo() + ` , radius=${this._radius}`;
    }
}
class Rectangle extends Shape {
    getArea() {
        return this._width * this._length;
    }
    constructor(x, y, _length, _width) {
        super(x, y);
        this._length = _length;
        this._width = _width;
    }
    set width(value) {
        this._width = value;
    }
    set length(value) {
        this._length = value;
    }
    get width() {
        return this._width;
    }
    get length() {
        return this._length;
    }
    getInfo() {
        return super.getInfo() + `, length=${this._length} , width=${this._width}`;
    }
}
const myCircle = new Circle(5, 10, 20);
console.log(myCircle.getInfo());
const myRectangle = new Rectangle(0, 0, 10, 20);
console.log(myRectangle.getInfo());
const shapes = [];
shapes.push(myCircle, myRectangle);
for (let shape of shapes) {
    console.log(shape.getArea());
}
class CricketCoach {
    getDailyWorkout() {
        return "Score 100 centuries";
    }
}
class TennisCoach {
    getDailyWorkout() {
        return "Practise backhand shots";
    }
}
const cc = new CricketCoach();
console.log(cc.getDailyWorkout());
const tc = new TennisCoach();
console.log(tc.getDailyWorkout());
