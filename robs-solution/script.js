// Helper/cheater function to set CSS order based on a date string.
document.querySelectorAll("article").forEach((a) => {
	a.style.order = a.dataset.date;
})