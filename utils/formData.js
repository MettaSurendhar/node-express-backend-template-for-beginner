/**
 * Recursively builds a FormData object from a JSON object 🌳
 *
 * @param {FormData} formData - The FormData object to build. This is the container where data will be added.
 * @param {object} data - The JSON object to convert. This is the source data that we want to put into FormData.
 * @param {string} [parentKey] - The parent key for nested objects. Helps in creating nested FormData keys.
 */
function buildFormData(formData, data, parentKey) {
	// Check if the data is an object (but not a Date)
	if (data && typeof data === 'object' && !(data instanceof Date)) {
		// Loop through each key-value pair in the object
		Object.keys(data).forEach((key) => {
			// Recursively call buildFormData for nested objects
			// Construct the key in the FormData object with brackets for nesting
			buildFormData(
				formData,
				data[key],
				parentKey ? `${parentKey}[${key}]` : key
			);
		});
	} else {
		// If data is not an object, add it to the FormData object
		const value = data == null ? '' : data; // Convert null values to an empty string
		formData.append(parentKey, value); // Add the value to FormData with the current key
	}
}

/**
 * Converts a JSON object to a FormData object 📄
 *
 * @param {object} data - The JSON object to convert.
 * @returns {FormData} - The converted FormData object.
 */
function jsonToFormData(data) {
	// Create a new FormData object
	const formData = new FormData();

	// Populate the FormData object using buildFormData
	buildFormData(formData, data);

	// Return the populated FormData object
	return formData;
}

// Export the functions so they can be used in other files
module.exports = {
	jsonToFormData,
	buildFormData,
};
