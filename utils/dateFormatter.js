/**
 * Generate a timestamp string for filenames
 *
 * @returns {string} - A string with the current date and time in the format YYYY.MM.DD-HH:MM:SS
 */
const dateForFilename = () => {
	// Create a new Date object to get the current date and time
	const dt = new Date();

	// Construct a string with the current date and time
	// Format: YYYY.MM.DD-HH:MM:SS
	return `${dt.getFullYear()}-${
		dt.getMonth() + 1
	}-${dt.getDate()}-${dt.getHours()}-${dt.getMinutes()}-${dt.getSeconds()}`;
};

// Export the dateForFilename function to be used in other files
module.exports = {
	dateForFilename,
};
