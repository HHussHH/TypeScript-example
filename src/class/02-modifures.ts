export class Vehicle {
  public drive(speed: number): void {
    console.log("Let us go with speed", speed.toFixed());
    this.log(speed);
  }
  public stop() {
    console.log("Stopped");
  }
  private log(speed: number) {
    console.log("Vehcile has changed speed to", speed);
  }
}

class Car extends Vehicle {
  public changedSpeed(speed: number) {
    this.drive(speed);
  }
}

const car1 = new Car();

car1.drive(555);
car1.stop();
// car1.log(2);
