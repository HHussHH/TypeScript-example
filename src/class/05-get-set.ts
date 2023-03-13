export class Rectangle {
  constructor(public width: number, public height: number) {}

  get area(): number {
    return this.height * this.width;
  }
}

const rect1 = new Rectangle(20, 12);
rect1.area;

export class Car {
  constructor(public color: string, private maxSpeed: number) {}

  get speed(): number {
    return this.maxSpeed;
  }

  set speed(speed: number) {
    if (speed > 0) this.maxSpeed = speed;
  }
}

const c1 = new Car("Green", 15000);
c1.speed = 0;
c1.speed;
