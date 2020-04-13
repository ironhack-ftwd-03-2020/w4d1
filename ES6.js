// ES 6

// let's talk about scope - the area where a variable can be accessed

// var gets hoisted - moved to the top and assigned a value of undefined
// console.log(message);
// var message = 'hello';

// var can be available in the function (if declared inside a function) or the global scope

// example : 

// var message = "Hello from the global scope!";

// function sayHelloFromLocalScope() {
//     var greeting = "Hello from functional/local scope!";
//     return greeting;
// }
// if (true) {
//     var greeting = "Hello from if scope!";
// }

// console.log(message); // <== Hello from the global scope!
// console.log(greeting); // <== ReferenceError: greeting is not defined

// this only applies to functions it doesn't apply to if statements or loops

// var can be redeclared
// var name = 'jim';
// var name = 'mary';
// console.log(name);

// let is block scoped - block is everything within { }
// let can't be redeclared

// this throws an error
// let name = 'jim';
// let name = 'mary';
// console.log(name);

// let name = "Ironhacker";
// // let name = "Hacker"; -> throws an error

// if (true) {
//     let name = "Ted";
//     console.log(`Name inside if statement: ${name}`);
// }

// console.log(`Name outside if statement: ${name}`);

// Destructuring
/*
let person = {
    name: "Ironhacker",
    age: 25,
    favoriteMusic: "Metal"
};

let name = person.name;
let age = person.age;
let favoriteMusic = person.favoriteMusic;
console.log(name, age, favoriteMusic);
*/

// let person = {
//     name: "Ironhacker",
//     age: 25,
//     favoriteMusic: "Metal"
// };

// syntactic sugar around the extraction of the variables from above
// const { name, age, favoriteMusic } = person;
// console.log(name, age, favoriteMusic);

/*
const person = {
    name: "Ironhacker",
    age: 25,
    favoriteMusic: "Metal",
    address: {
        street: "Super Cool St",
        number: 123,
        city: "Miami"
    }
};
const { name, age, address } = person;
console.log(name, age, address.city);
*/



// const { street } = person.address;
// console.log(street);

// Array Destructuring

// const numbers = ["one", "two", "three", "four", "five"];

// const [firstElement] = numbers;

// console.log(firstElement);


// const [, , thirdElement] = numbers
// console.log(thirdElement);

// if you use more variables than items in the array, there won't be an error but 
// the variables will be undefined

// const [a, b] = [1];
// console.log(b);  // => undefined

const [a, b = 2, c, d = 1] = [3, 4];
// console.log(a, b, c, d);


// spread operator

// returns the contents without the data structure

const reptiles = ["snake", "lizard", "alligator"];
const mammals = ["puppy", "kitten", "bunny"];
const animals = [...mammals, ...reptiles];
// console.log(animals);

// variable number of arguments
function sum(...nums) {
    // nums is an array with all the arguments
    console.log(nums);
    return nums.reduce(function (sum, val) {
        return sum + val;
    });
}

// console.log(sum(2, 3, 2, 4, 5));


// arrow functions

function calcSum(a, b) {
    return a + b;
}

// as an arrow function
// const calcSum = (a, b) => a + b

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const evens = numbers.filter(function (singleNumber) {
    return singleNumber % 2 === 0;
});


// const evens = numbers.filter(singleNumber => singleNumber % 2 === 0);

// console.log(evens);

// we can use default parameters in arrow functions
// const increment = (number, increment = 1) => {
//     console.log('increment: ', increment);
//     return number + increment;
// }

// console.log(increment(2, 5))


// this and arrow functions


// 'this' in line 178 has not the right context (that of the person class) for 
// the growUp function to work 
// class Person {
//     constructor() {
//         this.age = 0;
//     }
//     growUp() {
//         setInterval(function () {
//             console.log(this); => this here refers to the window object
//             this.age++; => so this is not working
//             console.log(this.age);
//         }, 1000)
//     }
// }

// option 1 : reassign this to another variable
// class Person {
//     constructor() {
//         this.age = 0;
//     }
//     growUp() {
//         console.log('this in growUp:', this);
//         let that = this;
//         setInterval(function () {
//             console.log('this inside setIntervall', this);
//             that.age++;
//             console.log(that.age);
//         }, 1000)
//     }
// }


// option 2 : bind this
// class Person {
//     constructor() {
//         this.age = 0;
//     }
//     growUp() {
//         function cb() {
//             this.age++;
//             console.log(this.age);
//         }
//         cb = cb.bind(this)
//         cb.bind(this);

//         setInterval(cb, 1000);
//     }
// }


class Person {
    constructor() {
        this.age = 0;
    }
    growUp() {
        setInterval(() => {
            console.log(this);
            this.age++;
            console.log(this.age);
        }, 1000)
    }
}

const person = new Person();
// person.growUp();



// Promises - a JavaScript object representing the eventual completion or failure
// of an async operation

// create a Promise - reject in case of error, resolve in case of success 
function createRandomNumber(min, max) {
    return new Promise((resolve, reject) => {
        if (arguments.length !== 2) {
            reject(new Error('Invalid arguments'));
        }
        setTimeout(() => {
            resolve(Math.floor(Math.random() * (max - min + 1) + min));
        }, 3000)
    })
}


// use a Promise
createRandomNumber(1, 3).then(res => {
    console.log('operation successful: ', res);
}).catch(err => {
    console.log('the following error ocurred: ', err);
});


// that s the problem that promises solve - if we log num in line 274 the result from line
// 269 is not available yet. We have to find a way to wait for the result to be available
// function createRandomNumber(min, max) {
//     if (arguments.length !== 2) {
//         return new Error('Invalid number of arguments');
//     }
//     setTimeout(() => {
//         return Math.floor(Math.random() * (max - min + 1) + min);
//     }, 3000)
// }

// const num = createRandomNumber(1, 5);

// console.log(num);
























