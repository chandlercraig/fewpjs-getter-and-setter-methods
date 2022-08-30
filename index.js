// Add your Circle class here
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  set diameter(diameter) {
    let newRadius = diameter / 2;
    this.radius = newRadius;
  }

  set circumference(circumference) {
    let newRadius = circumference / (Math.PI * 2);
    this.radius = newRadius;
  }

  set area(area) {
    let newRadius = Math.sqrt(area / Math.PI);
    this.radius = newRadius;
  }

  get diameter() {
    return this.radius * 2;
  }

  get circumference() {
    return this.diameter * Math.PI;
  }

  get area() {
    return this.radius ** 2 * Math.PI;
  }
}
