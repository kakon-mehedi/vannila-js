function generalLevelFn() {
	console.log(this); // window
}

function nestedLevelThisFn() {
	nested1();
	nested2();
}

function nested1() {
	console.log(this); // window
}

function nested2() {
	console.log(this); // window
}

const userDetails = {
	name: 'Kakon',
	age: 20,
	consoleRegularFn: function () {
		console.dir(this); // userDetailsObject
	},

	consoleArrowFn: () => {
		console.log(this); // window
	},
};

const thisArrowFn = () => {
	console.log(this);
};

generalLevelFn();
nestedLevelThisFn();
userDetails.consoleRegularFn();
userDetails.consoleArrowFn();
thisArrowFn();

/* Learning
    
    This inside
    
    Normal Function                   = window
    Normal Functions inside an object = current Object 
    Inside an object                  = current Object

    Arrow Function                    = window
    Arrow Function inside object      =  window

*/
