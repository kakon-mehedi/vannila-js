const paymentSuccess = true;

function enroll(callback) {
	console.log('Entroll process starts ');

	const promise1 = new Promise((res, rej) => {
		setTimeout(() => {
			if (paymentSuccess) {
				console.log('Payment success');
				res();
			} else {
				rej();
				console.log('Payment failed');
			}
		}, 3000);
	});

	return promise1;
}

function progress() {
	console.log('Course progress running...');
	return Promise.resolve(80);
}

function generateCertificate(marks) {
	console.log('Generating certificate...');
	const promise2 = new Promise((resolve, reject) => {
		setTimeout(() => {
			if (marks > 79) {
				resolve('A+');
			} else {
				reject('Failed');
			}
		}, 2000);
	});

	return promise2;
}

function printCertificate(name, gpa) {
	console.log(
		'CONGRATULATIONS ' + name + ' you are graduated. Your gpa is ' + gpa
	);
}

async function courseInfo() {
	try {
		await enroll();
		const obtainedMarks = await progress();
		const gpa = await generateCertificate(obtainedMarks);
		await printCertificate('kakon', gpa);
	} catch (err) {
		console.log(err);
	}
}

courseInfo();
