const person = {
	name: 'Kakon Mehedi',
	alive: true,
	getName: function () {
		return this.name;
	},
};

/**
 * All you have to do is, define __proto__ as an object key
 */
const student = {
	rollNumber: 1,
	__proto__: person,
};

console.log(student.getName());

const musician = {
	plays: true,
};

/**
 * Now musician inherited all of the properties from person object
 */
musician.__proto__ = person;
console.log(musician.getName());

const student2 = {
	name: 'Mehedi',
	__proto__: student,
};

console.log(student2.getName());
console.log(student2.name);

//How js takes everything as an Object

const arr = new Array();
const obj = new Object();
const fn = new Function();
const str = new String();
const number = new Number();

console.log(Array.prototype);
console.log(Object.prototype);
console.log(Function.prototype);
console.log(String.prototype);
console.log(Number.prototype);

// Overwriting prototype and make some custom functions to make your own library

// Arrays object prototype overwriting

Array.prototype.show = function () {
	console.log(this);
};

// Number object prototype overwriting

Number.prototype.sumWithFive = function () {
	console.log(this + 5);
};

const num1 = new Number(1);
num1.sumWithFive();

// Alternative of class via proto

function MyProto(name) {
	console.log(this); // MyProto function. Thin MyProto as a class
	this.name = name;
}

const myName = new MyProto('Kakon Mehedi');

console.log(myName);
