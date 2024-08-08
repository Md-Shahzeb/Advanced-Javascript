/*create two subclasses Circle and Rectangle that override the draw method. We'll also demonstrate polymorphism by 
creating instances of these subclasses and calling their draw methods.*/

class Shape {
    draw() {
        console.log('Drawing a shape');
    }
}

class Circle extends Shape {
    draw() {
        console.log('Drawing a circle');
    }
}

class Rectangle extends Shape {
    draw() {
        console.log('Drawing a rectangle');
    }
}

function drawShapes(shapes) {
    shapes.forEach(shape => {
        shape.draw();
    });
}

const circle = new Circle();
const rectangle = new Rectangle();

drawShapes([circle, rectangle]);
