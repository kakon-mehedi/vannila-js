const arr = [1, 2, 3, 4];
const result = arr.reduce(printSumCallbackFn);

/**
 *
 * @param {*} previousValue - previous value of the array
 * @param {*} currentValue - current value of the array
 * @param {*} currentIndex - current index of the element
 * @param {current inputed array} arr
 * @returns - this will return the sum of previous value and the current value.
 * You can return anything may be you make an array and return the array
 * May be you want to return a string with some concat value
 * You can basically return anything
 */
function printSumCallbackFn(previousValue, currentValue, currentIndex, arr) {
	console.log('Prev value => ' + previousValue);
	console.log('Current value => ' + currentValue);
	console.log('Current Index => ' + currentIndex);
	console.log('Iputed array => ' + arr);

	return previousValue + currentValue;
}

console.log(result);
