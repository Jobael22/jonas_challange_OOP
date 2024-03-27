// 'use strict';

// const Person = function(firstName, birthYear){

//     // Instance properties

//     this.firstName = firstName;
//     this.birthYear = birthYear;

// };

// const jonas = new Person('Jonas',1991);
// console.log(jonas);

// // 1. New {} is created
// // 2. function is called, this = {}
// // 3. {} linked to prototype
// // 4. function automatically return {}

// const matilda = new Person('Matilda',2017);
// const jack = new Person('Jack',1995);

// console.log(matilda, jack);

// console.log (jonas instanceof Person);

// // prototypes

// Person.prototype.calcAge = function(){
//     console.log(2024-this.birthYear)
// }
// jonas.calcAge();
// matilda.calcAge();
// jack.calcAge();

// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);

// //.prototypeOfLinkedObjects

// Person.prototype.species = 'Homo Sapiens';
// console.log(jonas.species, matilda.species);

// console.log(jonas.hasOwnProperty('firstName'));
// console.log(jonas.hasOwnProperty('species'));

// console.log(jonas.__proto__);
// console.log(jonas.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

// const arr = [3,4,5,6,7,7,7,8,8,8];
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function(){
//     return [...new Set(this)];
// };

// console.log(arr.unique());



// Challenge = 1 

'use strict';

const Car = function (make, speed){
    this.make = make;
    this.speed = speed;
};

Car.prototype.accelerate = function(){
    this.speed += 10;
    console.log(`${this.make} going at ${this.speed} km/h`);
}

Car.prototype.break = function(){
    this.speed -= 5;
    console.log(`${this.make} going at ${this.speed} km/h`);
}

const bmw = new Car ('BMW', 120);
const mercedes = new Car ('Mercedes', 95);

bmw.accelerate();
bmw.break();
bmw.break();
mercedes.break();
bmw.break();
mercedes.accelerate();
bmw.accelerate();
