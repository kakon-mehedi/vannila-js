const arr = [1, 2, 3, 4];
//const result = arr.reduce(printSumCallbackFn);

/**
 *
 * @param {*} previousValue - previous value of the array, this is the previous return value of the callback function
 * @param {*} currentValue - current value of the array, always the current value of the array
 * @param {*} currentIndex - current index of the element, current value index
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

const numberList = [1, 2, 3, 4];
const sumList = [];

const resultSum = numberList.reduce(sumOfElements);

/**
 * This function will modify sumList Array and put numberList sum of the consecutive array element.
 * @param {p} prev - This is the previous value of the array, this is the previous value which is returned by the callback Fn
 * @param {*} current - current number
 * @param {*} currentIndex - index of the current number
 * @param {*} currentArr - current array
 */
function sumOfElements(prev, current, currentIndex, currentArr) {
	const newValue = currentArr[currentIndex - 1] + current;
	sumList.push(newValue);
}

console.log(sumList); // 3.5.7
