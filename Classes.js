//How to declare classes in Javascript
class Rectangle{
    constructor(height,widht){
        this.height = height,
        this.widht = widht
    }
    calcArea(){
        return this.height*this.widht;
    }
    getArea(){
        return this.calcArea();
    }
}

let square = new Rectangle(5,5);
console.log(square.getArea());