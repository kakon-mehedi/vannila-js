const paymentSuccess = true;
obtainedMarks = 70;

function enroll(callback) {
	console.log('Entroll process starts ');
	setTimeout(() => {
		if (paymentSuccess) {
			callback();
		} else {
			console.log('Payment failed');
		}
	}, 3000);
}

function progress(callback) {
	console.log('Course progress running...');
	setTimeout(() => {
		if (obtainedMarks > 33) {
			const cgpa = 2.27;
			callback(cgpa);
		}
	}, 3000);
}

function getCertificate(callback) {
	setTimeout(() => {
		callback('Kakon mehedi', 3.16);
	}, 2000);
}

function printCertificate(name, cgpa) {
	console.log(
		'CONGRATULATIONS ' + name + 'You are graduated. Your cgpa is ' + cgpa
	);
}

enroll(function () {
	progress(function () {
		getCertificate(printCertificate);
	});
});
