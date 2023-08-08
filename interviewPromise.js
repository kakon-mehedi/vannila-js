// take a number n
// print the number 1
// every number shuld print n second delay

// function printNumber(n) {
// 	for (let i = 0; i <= n; i++) {
// 		delay(i).then((res) => {
// 			console.log(i);
// 		});
// 	}
// }

// function delay(number) {
// 	return new Promise((resolve) => {
// 		setTimeout(() => {
// 			console.log(`waiting ${number} second...`);
// 			resolve(number);
// 		}, number * 1000);
// 	});
// }

// printNumber(5);

let count = 0;
function printNumberRecursion(number) {
	if (count <= number) {
		setTimeout(() => {
			console.log(count);
			count++;
			printNumberRecursion(number);
		}, 1000 * count);
	}
}

printNumberRecursion(5);
