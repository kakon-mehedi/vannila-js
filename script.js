const stars = document.querySelectorAll('.star');
const selectedRating = document.getElementById('selectedRating');

let currentRating = 0;

for (let star of stars) {
	star.addEventListener('click', () => {
		const rating = parseInt(star.dataset.value);
		if (rating === currentRating) {
			currentRating = 0;
		} else {
			currentRating = rating;

			for (let i = 0; i < rating; i++) {
				stars[i].classList.add('active');
			}
		}
		updateRating();
	});

	star.addEventListener('mouseover', () => {
		for (let star of stars) {
			star.classList.remove('active');
		}

		const rating = parseInt(star.dataset.value);

		if (rating > 1) {
			for (let i = 0; i < rating - 1; i++) {
				stars[i].classList.add('active');
			}
		}
	});
}

function updateRating() {
	selectedRating.textContent =
		currentRating === 0
			? 'No rating selected'
			: `You rated: ${currentRating} star${currentRating > 1 ? 's' : ''}.`;
}
