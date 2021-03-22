// Constructor for Rectangle
function Rectangle(options) {
  // some defaults
  this.length = options.length || 4;
  this.width = options.width || 4;
  this.area = this.length * this.width;
}

// Constructor for Circle
function Circle(options) {
  this.radius = options.length || 4;
  this.area =(Math.PI * this.radius * this.radius).toFixed(2);
}

//Constructor for Sqaure
 function Square(options) {
  // some defaults
  this.side = options.length;
  this.area = this.side * this.side;
}
 
// Constructor for Ellipse
function Ellipse(options) {
  this.majorAxis = options.length || 4;
  this.minorAxis = options.width || 4;
  this.area = (Math.PI * this.majorAxis * this.minorAxis).toFixed(2);
}

// Define a Shape factory
function ShapeFactory() {}

// Define the prototypes and utilities for this factory

// Our default shapeClass is Rectangle
ShapeFactory.prototype.shapeClass = Rectangle;

ShapeFactory.prototype.createShape = function (options) {
  switch (options.shapeType) {
    case "rectangle":
      this.shapeClass = Rectangle;
      break;
    case "circle":
      this.shapeClass = Circle;
      break;
    case "square":
      this.shapeClass = Square;
      break;
    case "ellipse":
      this.shapeClass = Ellipse;
      break;
  }

  return new this.shapeClass(options);
};

function goto_Step2() {
  // var mydata = JSON.parse(data);
  this.checkedValue = document.querySelector(
    'input[name="shape"]:checked'
  ).value;
  document.getElementById("title").innerHTML = "Step 2 : Insert your values";
  document.getElementById("header").innerHTML =
    "You have selected a " +
    this.checkedValue +
    ", please input the required value";
  document.getElementById("selector").style.display = "none";
  document.getElementById("step1").style.display = "none";
  document.getElementById("step2").style.display = "block";
  document.getElementById(this.checkedValue.toLowerCase()).style.display =
    "block";
}

function goto_Step3() {
  document.getElementById(this.checkedValue.toLowerCase()).style.display =
    "none";
  document.getElementById("title").innerHTML = "Step 3 : Your results";
  document.getElementById("header").innerHTML =
    "You have calculated the area of  " +
    this.checkedValue +
    ". Below is your result";
  document.getElementById("step2").style.display = "none";
  document.getElementById("step3").style.display = "block";
  //let value1 = document.querySelector('[name="shapeValue"]').value;
  var id = this.checkedValue.toLowerCase() + "length";
  var id1 = this.checkedValue.toLowerCase() + "width";
  let value1 = document.getElementById(id).value;
  let value2 = "";
  if (
    this.checkedValue.toLowerCase() === "rectangle" ||
    this.checkedValue.toLowerCase() === "ellipse"
  ) {
    value2 = document.getElementById(id1).value;
  }

  // Create an instance of our factory
  var shape = new ShapeFactory();
  this.areaofShape = shape.createShape({
    shapeType: this.checkedValue.toLowerCase(),
    length: value1,
    width: value2 ? value2 : 0,
  });
  document.getElementById("area").style.display = "block";
  document.getElementById("area").innerHTML =
    "The Area is " + this.areaofShape.area;
}

function goto_Step1() {
  document.getElementById("title").innerHTML = "Step 1 : Select your shape";
  document.getElementById("area").style.display = "none";
  document.getElementById("header").innerHTML =
    "Please select the shape that would like to calculate the area of and press the button Go to step 2";
  document.getElementById("step3").style.display = "none";
  document.getElementById("selector").style.display = "block";
  document.getElementById("step1").style.display = "block";
}

