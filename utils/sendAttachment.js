// Import the typedefs module for type definitions 📄
const typedefs = require('../typedefs');

// Import the fast-csv module for working with CSV data 📊
const fastCSV = require('fast-csv');

// Import the stream module for handling streams in Node.js 🧵
const stream = require('stream');

/**
 * Sends data formatted as a CSV file in the response
 *
 * @param {typedefs.Res} res - Express response object
 * @param {string} filename - Filename for the attachment (preferably with a timestamp)
 * @param {any[]} data - Data from database queries (excluding metadata)
 */
const sendCSV = async (res, filename, data) => {
	// Convert data to a CSV buffer with headers
	const csvData = await fastCSV.writeToBuffer(data, { headers: true });

	// Create a PassThrough stream to send data to the response
	const fileStream = new stream.PassThrough();
	fileStream.end(csvData);

	// Set up the response to send the file
	res.attachment(filename + '.csv'); // Set the filename
	res.type('text/csv'); // Set the content type to CSV

	// Send the CSV data to the client
	fileStream.pipe(res);

	return;
};

// Export the sendCSV function for use in other files
module.exports = {
	sendCSV,
};
