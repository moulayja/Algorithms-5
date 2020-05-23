// Convert Key, Values in an Object to Array

function objectToArray(obj) {
	return Object.keys(obj).map(key => [key, obj[key]])
}