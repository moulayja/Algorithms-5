// Given the parameters day, month and year, return whether that date is a valid date.

function isValidDate(d, m, y) {
	const date = new Date(y, m - 1, d);
	return date.getFullYear() === y && date.getMonth() + 1 === m && date.getDate() === d;
}