const typedefs = require('../typedefs'); // Import type definitions for request, response, and next functions
const logger = require('../utils/logger')(module); // Import a custom logger to keep track of events

// Get admin credentials from environment variables
// This keeps sensitive information like passwords secure
const creds = JSON.parse(process.env.ADMIN_CREDS);

/**
 * Middleware to check admin access 🔐
 * @param {typedefs.Req} req - The request object from the client
 * @param {typedefs.Res} res - The response object to send back to the client
 * @param {typedefs.Next} next - The function to call the next middleware
 */
const adminQueryCreds = async (req, res, next) => {
	try {
		// Extract admin credentials from the query parameters of the request
		const { user, access } = req.query;

		// Check if the provided credentials match the stored admin credentials
		if (creds[user] === access) {
			logger.info('Admin access granted for user: ' + user); // Log successful access
			next(); // Continue to the next middleware or route handler
		} else {
			// If credentials don't match, log the attempt and respond with a 401 Unauthorized status
			const unauthIP = req.headers['x-real-ip'] || req.ip; // Get the IP address of the requester
			logger.warn('Unauthorized access attempt from IP: ' + unauthIP); // Log the warning
			return res
				.status(401)
				.send('Unauthorized access. IP address: ' + unauthIP); // Send a 401 response
		}
	} catch (error) {
		// Handle any errors that occur during the process
		logger.error('Error in adminQueryCreds middleware', { error });
		return res.status(500).send('Server Error. Please try again later.'); // Send a 500 response
	}
};

// Export the middleware function so it can be used in other parts of the application
module.exports = {
	adminQueryCreds,
};
