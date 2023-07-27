const stars = document.querySelectorAll('.star');
const selectedRating = document.getElementById('selectedRating');

let currentRating = 0;

stars.forEach((star) => {
	star.addEventListener('click', () => {
		const rating = parseInt(star.dataset.value);
		if (rating === currentRating) {
			// If the clicked star is the same as the current rating, reset the rating to 0.
			currentRating = 0;
		} else {
			currentRating = rating;
		}
		updateRating();
	});
});

function updateRating() {
	selectedRating.textContent =
		currentRating === 0
			? 'No rating selected'
			: `You rated: ${currentRating} star${currentRating > 1 ? 's' : ''}.`;
}
