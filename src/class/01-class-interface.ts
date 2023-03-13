interface ICar {
  go(speed: number): void;
  maxSpeed?: number;
}

export class Car implements ICar {
  go(speed: number) {
    console.log("leeets go with speed", speed.toFixed());
  }
  stop() {
    console.log("stop");
  }
  maxSpeed = 132;
}

const car = new Car();
car.maxSpeed = 200;
