// Import the fs module for file system operations 🗂️
const fs = require('fs');

// Import the jwt module for working with JSON Web Tokens (JWT) 🔑
const jwt = require('jsonwebtoken');

// Read the private and public keys from files specified by environment variables
const privateKey = fs.readFileSync(process.env.PRIVKEY);
const publicKey = fs.readFileSync(process.env.PUBKEY);

/**
 * Generate a JSON Web Token (JWT) using a secret key
 * @param {string|any} data - Data to be included in the token
 * @returns {jwt.JwtPayload} - The generated JWT
 */
const getJWT = (data) => {
	// Create a JWT using the secret key
	return jwt.sign({ id: data }, process.env.JWTSECRET, { algorithm: 'HS256' });
};

/**
 * Generate a signed JWT using the private key
 * @param {string|any} data - Data to be included in the token
 * @returns {jwt.JwtPayload} - The signed JWT
 */
const getSignedJWT = (data) => {
	// Create a signed JWT using the private key
	return jwt.sign({ id: data }, privateKey, {
		algorithm: 'RS256', // Asymmetric signing algorithm
	});
};

/**
 * Verify a JWT using the secret key
 * @param {jwt.JwtPayload} data - The JWT to verify
 * @returns {string|any} - The decoded token data
 */
const verifyJWT = (data) => {
	// Verify the JWT using the secret key
	return jwt.verify(data, process.env.JWTSECRET, { algorithms: ['HS256'] });
};

/**
 * Verify a signed JWT using the public key
 * @param {jwt.JwtPayload} signedString - The signed JWT to verify
 * @returns {string|any} - The decoded token data
 */
const verifySignedJWT = (signedString) => {
	// Verify the signed JWT using the public key
	return jwt.verify(signedString, publicKey, {
		algorithms: ['RS256'],
	});
};

// Export the functions for use in other files
module.exports = {
	getJWT,
	verifyJWT,
	getSignedJWT,
	verifySignedJWT,
};
