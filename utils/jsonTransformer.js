/**
 * Joins all the values of a JSON object, including nested keys, into a single string 🌐
 *
 * @param {any} obj - The JSON object from which to extract values.
 * @param {string} [delimiter=','] - The delimiter to use between values in the final string.
 * @returns {string} - A string with all the values joined by the delimiter.
 */
const getNestedValuesString = (obj, delimiter = ',') => {
	// Initialize an empty array to collect values
	let values = [];

	// Loop through each key-value pair in the object
	for (const key in obj) {
		// Check if the value is a primitive type (not an object)
		if (typeof obj[key] !== 'object') {
			// Add the value to the array
			values.push(obj[key]);
		} else {
			// If the value is an object, recursively get nested values
			values = values.concat(getNestedValuesString(obj[key], delimiter));
		}
	}

	// Join the values array into a single string using the provided delimiter
	return values.join(delimiter);
};

// Export the function for use in other files
module.exports = {
	getNestedValuesString,
};
