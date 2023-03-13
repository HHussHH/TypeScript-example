export class Circle {
  protected static pi: number = 3.14;

  static calculateArea(radius: number) {
    return this.pi * radius * radius;
  }

  constructor(public radius: number) {}

  get area() {
    return Circle.pi * this.radius;
  }
}

const c1 = new Circle(20);
c1.area;
c1.radius;

// Circle.pi;
Circle.calculateArea(24);

class Ellipse extends Circle {
  constructor(public radius: number) {
    super(radius);
    Circle.pi;
  }
}
