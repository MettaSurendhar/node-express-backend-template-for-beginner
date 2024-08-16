const fs = require('fs'); // Import the file system module to handle file operations
const archiver = require('archiver'); // Import the archiver module to create ZIP files

/**
 * Create a ZIP archive of a directory
 *
 * @param {String} sourceDir - Path to the directory you want to compress (e.g., '/some/folder/to/compress')
 * @param {String} outPath - Path where the ZIP file will be saved (e.g., '/path/to/created.zip')
 * @returns {Promise} - A promise that resolves when the ZIP file is created
 */
function zipDirectory(sourceDir, outPath) {
	// Create an instance of archiver to create a ZIP file with the highest compression level (9)
	const archive = archiver('zip', { zlib: { level: 9 } });

	// Create a write stream to the output file
	const stream = fs.createWriteStream(outPath);

	// Return a promise that resolves when the archiving process is complete
	return new Promise((resolve, reject) => {
		// Add the directory to the archive. The 'false' argument means not to include the directory itself, just its contents.
		archive
			.directory(sourceDir, false)

			// Handle any errors that occur during the archiving process
			.on('error', (err) => reject(err))

			// Pipe the archive data to the write stream
			.pipe(stream);

		// Resolve the promise when the write stream is closed (ZIP file is created)
		stream.on('close', () => resolve());

		// Finalize the archive (complete the ZIP creation process)
		archive.finalize();
	});
}

// Export the zipDirectory function to be used in other files
module.exports = {
	zipDirectory,
};
