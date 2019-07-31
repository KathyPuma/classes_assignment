// # Class Exercises
//
// (1 - 6 are the same as on the previous lab, but creating classes using ES6 syntax instead of constructor functions)
//
// ## Question 1
//
// a. Write a class called `Person` that has 3 properties: a first name, a last name and a middle name. Create 2 instances of a `Person`. Print one of their first names.



class Person{
  constructor(firstName, middleName, lastName){
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
  }

}

let jamie = new Person('Jamie', 'B', 'Smith')
let amy = new Person('Amy','D', 'Johnson')
console.log(amy.firstName)
console.log(jamie.firstName)



// b. Write a method in `Person` called `fullName` that will return a formatted string of an instance's full name. Call this method on both the instances you created in part a.



class Person{
  constructor(firstName, middleName, lastName){
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
  }
  fullName(){
    return(`${this.firstName} ${this.middleName} ${this.lastName}`)
  }
}

let jamie = new Person('Jamie', 'B', 'Smith')
let amy = new Person('Amy','D', 'Johnson')


console.log(amy.fullName())
console.log(jamie.fullName())



// ## Question 2
//
// a. Create a class called `Book` that has properties `title`, `author` and `rating`. Create some instances of `Book`.

// b. Add a method to `Book` called `isGood` that returns `true` if its rating is greater than or equal to 7

class Book{
  constructor(title, author, rating){
    this.title = title;
    this.author = author;
    this.rating = rating;
  }
  isGood(){
    if(this.rating >= 7){
      return true;
    }else{
      return false;
    }
  }
}

let book1 = new Book('The Tattooist of Auschwitz', ' Heather Morris', 8)
let book2 = new Book('Where the Crawdads Sing', 'Delia Owens', 5)

console.log(book1.isGood())
console.log(book2.isGood())


// ## Question 3
//
// a. Create a `Dog` class with four properties: `name (string), breed (string), mood (string), and hungry (boolean)`.
//
// b. Add a method called `playFetch`. It should set the dog's `hungry` property to `true`, set its mood property to `playful`, and log "Ruff!"
//
// c. Add a method called `feed`. If the dog is hungry, it should set `hungry` to `false` and print "Woof!" If the dog is not hungry, it should log "The dog doesn't look hungry"
//
// d. Add a method called `toString` that returns a description of the dog:



class Dog{
  constructor(name, breed, mood, hungry){
    this.name = name;
    this.breed = breed;
    this.mood = mood;
    this.hungry = hungry;
  }
  playFetch(){
    this.hungry = true;
    this.mood = 'playful';
    console.log("Ruff!");
  }
  feed(){
    if(this.hungry === true){
      this.hungry = false;
      console.log("woof!")
    }else{
      console.log("The dog doesnt look hungry")
    }

  }
  toString(){
    console.log(`Name:${this.name}, Breed:${this.breed}, Mood:${this.mood}, Hungry:${this.hungry}`)
  }

}


let dog1 = new Dog('Tom', 'German Shepherd', 'playful' , true)
dog1.playFetch()
console.log(dog1)
let dog2 = new Dog('Tom', 'German Shepherd', 'playful' , false)
dog2.feed()
let dog3 = new Dog('Tom', 'German Shepherd', 'playful' , false)
dog3.toString()




// ## Question 4
//
// There are three common scales that are used to measure temperature: Celsius, Fahrenheit, and Kelvin:
//
// C = (F - 32) / 1.8
// F = 1.8 * C + 32
// K = C + 273
//
// a. Make an object called `freezingPoint` that has three properties: `celsius`, `fahrenheit`, and `kelvin`. Give them all values equal to the freezing point of water.



let freezingPoint = {
  celsius:0,
  fahrenheit:32,
  kelvin:273.15
}


// b. Make a class called `Celsius` that has one property: `celsius`, and two methods `getFahrenheitTemp`, and `getKelvinTemp`.
//
// ```js
// let outsideTempt = new Celsius(10.0)
// outsideTempt.celsius //returns 10.0
// outsideTempt.getKelvinTemp() //returns 283.0
// outsideTempt.getFahrenheitTemp() //returns 50.0
// ```
// c. Give `Celsius` a method called `isBelowFreezing` that returns a `Bool` (true if the temperature is below freezing).


//
class Celsius{
  constructor(celsius){
    this.celsius = celsius;
  }
  getFahrenheitTemp(){
    return 1.8 * this.celsius + freezingPoint.fahrenheit
  }
  getKelvinTemp(){
    return this.celsius + freezingPoint.kelvin
  }
  isBelowFreezing(){
    if(this.celsius <= freezingPoint.celsius){
      return true
    }else{
      return false
    }
  }
}



let outsideTempt = new Celsius(10.0)
console.log(outsideTempt.celsius)
console.log(outsideTempt.getKelvinTemp())
console.log(outsideTempt.getFahrenheitTemp())
console.log(outsideTempt.isBelowFreezing())



// ## Question 5
//
// a. Create a class called `Movie` that has properties for `name`, `year`, `genre`, `cast`, and `description`. Create an instance of your `Movie`
// b. Create an method inside `Movie` called `blurb` that returns a formatted string describing the movie.


//
class Movie{
  constructor(name, year, genre, cast, description){
    this.name = name;
    this.year = year;
    this.genre = genre;
    this.cast = cast;
    this.description = description;
  }
  blurb(){
    return `${this.name} came out in ${this.year}. It was an ${this.genre} film starring ${this.cast} ${this.description}`
  }
}

let movie = new Movie('Borat','2006', 'odd', 'Sacha Baron Cohen', 'as a man named Borat who was visiting America from Kazakhstan.')
console.log(movie.blurb())



// Ex: "Borat came out in 2006. It was an odd film starring Sacha Baron Cohen as a man named Borat who was visiting America from Kazakhstan."
//
//
// ## Question 6
//
// Write a constructor Vector that represents a vector in two-dimensional space.
// It takes two number arguments: `x` and `y` parameters, which it should be saved to properties of the same name.
//
// Give the Vector prototype two methods, `plus` and `minus`, that take another vector as an argument and
// returns a new vector that has the sum or difference of the two vectors’ (the one in `this` and the parameter) x and y values.
//
// Add a method `getLength` to the prototype that computes the length of the vector ;
// that is, the distance of the point (x, y) from the origin (0, 0).(a^2 + b^2 = c^2)
//
// [Vectors at mathisfun.com](https://www.mathsisfun.com/algebra/vectors.html)
//
// ```js
// var v1 = new Vector(1, 2)
// var v2 = new Vector(2, 3)
// console.log(v1.plus(v2));
// // => Vector {x: 3, y: 5}
// console.log(v1.minus(v2));
// // => Vector {x: -1, y: -1}
//
// var v3 = new Vector(3, 4)
// console.log(v3.getLength());
// // => 5
// ```



class Vector{
  constructor(x, y){
    this.x = x;
    this.y = y;
  }
  plus(vector){
    console.log (vector.x + this.x, vector. y+ this.y )
  }
  minus(vector){
    console.log (this.x - vector.x , this.y - vector.y )
  }
  getLength(){
    return Math.hypot(this.x , this.y)
  }
}

let v1 = new Vector(1, 2)
let v2 = new Vector(2, 3)
console.log(v1.plus(v2));
console.log(v1.minus(v2));

var v3 = new Vector(3, 4)
console.log(v3.getLength());




// ## Question 7
//
// a. Make a class called `Car` with properties `make` and `model`.  Create an instance of a `Car`
//
// b. Make a class called `Bike` with properties `gears` and `hasBell`.  Create an instance of `Bike`
//
// c. Give each class a static method called `numberOfWheels` that returns the number of wheels (2 for bikes, 4 for cars).
// Why does it make sense for this to be a static method instead of an instance method?


class Car{
  constuctor(make, model){
    this.make = make;
    this.model = model;

  }
static numberOfWheels(){
  return '4 Wheels'
}

}

let car = new Car('Jeep', 'Wrangler')

console.log(Car.numberOfWheels())


class Bike{
  constructor(gears, hasBell){
  this.gears = gears;
  this.hasBell = hasBell;
}
static numberOfWheels(){
  return '2 Wheels'
}
}
let bike = new Bike('helmet', true)
console.log(Bike.numberOfWheels())


// It makes sense to use the static method because it will have a constant value. Regardless of which car model you have, they will all have 4 wheels.
// ## Question 8
//
// a. Make a class called `Vehicle` with properties `color` and `name`.  Give it a method called `makeSound` which logs "WHHOOSSSH" to the console
class Vehicle{
  constructor(color, name){
    this.color = color;
    this.name = name;
  }
  makeSound(){
    console.log("WHHOOSSH")
  }
}


// b. Modify your `Car` and `Bike` classes from Question 7 to extend the `Vehicle` class.

// c. Create a new `Bike` instance that has a `color` of "green" and `name` "Bikey McBikeface"
//
// d. Create a new `Car` instance that has a `color` of "red" and `name` "Carry McCarface"






class Vehicle{
  constructor (color, name){
    this.color = color;
    this,name = name;
  }
}







class Car{
  constuctor(make, model){
    this.make = make;
    this.model = model;

  }
static numberOfWheels(){
  return '4 Wheels'
}

}

let car = new Car('Jeep', 'Wrangler')

console.log(Car.numberOfWheels())


class Bike{
  constructor(gears, hasBell){
  this.gears = gears;
  this.hasBell = hasBell;
}
static numberOfWheels(){
  return '2 Wheels'
}
}
let bike = new Bike('helmet', true)
console.log(Bike.numberOfWheels())




let bike = new Vehicle ('green', 'Bikey McBikeface')
let car = new Vehicle (' red', 'Carry McCarface')
