// Import the crypto module for cryptographic functions 🔒
const crypto = require('crypto');

// Define acceptable key sizes for encryption (in bits) 🔐
const acceptableBitSizes = [1024, 2048];

/**
 * Generates a public and private key pair with a specified size
 * @param {number} sizeInBits - Size of the key (1024 or 2048 bits)
 * @returns {object} - Object with public and private keys
 */
exports.generate = (sizeInBits) => {
	// Check if the provided key size is valid
	if (!acceptableBitSizes.includes(sizeInBits)) {
		throw Error(
			'Invalid key size. Only 1024 or 2048 bits are accepted. Example: `let keys = QuickEncrypt.generate(2048);`'
		);
	}
	// Generate the key pair
	return crypto.generateKeyPairSync('rsa', { modulusLength: sizeInBits });
};

/**
 * Encrypts a string using a public key
 * @param {string} payloadString - The string to encrypt
 * @param {string} publicKey - The public key for encryption
 * @returns {string} - Encrypted string in hexadecimal format
 */
exports.encrypt = (payloadString, publicKey) => {
	if (typeof payloadString !== 'string' || typeof publicKey !== 'string') {
		throw Error(
			"Payload and Public Key must be strings. Example: `let encryptedText = QuickEncrypt.encrypt('Some secret text', 'public RSA key');`"
		);
	}
	// Encrypt the string using the public key
	return crypto
		.publicEncrypt(publicKey, Buffer.from(payloadString, 'utf8'))
		.toString('hex');
};

/**
 * Decrypts an encrypted string using a private key
 * @param {string} encryptedString - The encrypted string to decrypt
 * @param {string} privateKey - The private key for decryption
 * @returns {string} - The decrypted string
 */
exports.decrypt = (encryptedString, privateKey) => {
	if (typeof encryptedString !== 'string' || typeof privateKey !== 'string') {
		throw Error(
			"Encrypted string and Private Key must be strings. Example: `let decryptedText = QuickEncrypt.decrypt('encrypted text', 'private RSA key');`"
		);
	}
	// Decrypt the string using the private key
	return crypto
		.privateDecrypt({ key: privateKey }, Buffer.from(encryptedString, 'hex'))
		.toString();
};
