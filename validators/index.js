// Import the validationResult function from express-validator, which helps us validate incoming requests.
const { validationResult } = require('express-validator');

// Import the typedefs module, which contains type definitions for our application.
const typedefs = require('../typedefs');

// Import the getNestedValuesString function from the jsonTransformer module, which helps us extract nested values from objects.
const { getNestedValuesString } = require('../utils/jsonTransformer');

/**
 * Refer: https://stackoverflow.com/questions/58848625/access-messages-in-express-validator
 *
 * @param {typedefs.Req} req
 * @param {typedefs.Res} res
 * @param {typedefs.Next} next
 */
// Define a middleware function called validate, which checks for validation errors in the request.
const validate = (req, res, next) => {
	// Get the validation errors from the request using the validationResult function.
	const errors = validationResult(req);

	// If there are no errors, call the next middleware function in the chain.
	if (errors.isEmpty()) {
		return next();
	}

	// Initialize an empty array to store the extracted error messages.
	const extractedErrors = [];

	// Loop through each error in the errors array.
	errors.array().forEach((err) => {
		// If the error is of type 'alternative', it means there are nested errors.
		if (err.type === 'alternative') {
			// Loop through each nested error and extract the error message.
			err.nestedErrors.forEach((nestedErr) => {
				extractedErrors.push({
					// Use the path of the nested error as the key and the error message as the value.
					[nestedErr.path]: nestedErr.msg,
				});
			});
		}
		// If the error is of type 'field', it means there is a single error message.
		else if (err.type === 'field') {
			extractedErrors.push({
				// Use the path of the error as the key and the error message as the value.
				[err.path]: err.msg,
			});
		}
	});

	// Return a 400 error response with the extracted error messages.
	return res.status(400).send({
		// Use the getNestedValuesString function to extract the nested error messages as a string.
		message: getNestedValuesString(extractedErrors),
		// Include the extracted error messages in the response.
		errors: extractedErrors,
	});
};

// Export the validate middleware function.
module.exports = {
	validate,
};
