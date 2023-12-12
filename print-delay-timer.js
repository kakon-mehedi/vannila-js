function delayPrint(index) {
	return new Promise((resolve) => {
		setTimeout(() => {
			console.log(index);
			resolve();
		}, index * 1000);
	});
}

async function printNumbersWithDelay() {
	for (let i = 1; i <= 5; i++) {
		await delayPrint(i);
	}
}

printNumbersWithDelay();
