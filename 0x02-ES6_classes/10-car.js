export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  set motor(value) {
    this._motor = value;
  }

  get color() {
    return this._color;
  }

  set brand(value) {
    this._brand = value;
  }

  set color(value) {
    this._color = value;
  }

  cloneCar() {
    return new this.constructor();
  }
}
