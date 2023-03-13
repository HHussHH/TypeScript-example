export class Vehicle {
  //   private createdAt: Date;

  constructor(private createdAt: Date) {}
  public drive(speed: number): void {
    console.log("Let us go with speed", speed.toFixed());
    this.log(speed);
  }
  public stop() {
    console.log("Stopped");
  }
  private log(speed: number) {
    console.log("Vehcile has changed speed to", speed, this.createdAt);
  }
}

export class Car extends Vehicle {
  //   color: string;
  //   maxSpeed: number;

  constructor(public readonly color: string, public maxSpeed: number) {
    super(new Date());
    // this.color = color;
    // this.maxSpeed = maxSpeed;
  }
}

const car1 = new Car("red", 200);

// car1.color = "blue";
