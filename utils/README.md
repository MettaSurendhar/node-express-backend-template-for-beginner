# Utilities 🛠️

## What are Utilities? 🤔

Utilities are helper functions and modules that perform common tasks across your application. They help with various operations that are not directly related to API routes but are essential for the overall functionality of your app.

### Purpose 🎯

The `utils` folder contains reusable code for:

- **File Handling:** Archiving files and directories.
- **Date Operations:** Formatting dates and timestamps.
- **Form Handling:** Building and manipulating form data.
- **JSON Operations:** Transforming and working with JSON data.
- **Logging:** Recording messages and errors.
- **Mailing:** Sending emails.
- **QR Codes:** Generating QR codes.
- **Encryption:** Securing data with encryption.
- **Token Management:** Handling JSON Web Tokens (JWTs).

### Structure 🗂️

The folder contains the following files:

- **`archiver.js`**: For archiving files and directories.
- **`dateFormatter.js`**: For formatting dates and timestamps.
- **`formData.js`**: For building and manipulating form data.
- **`jsonTransformer.js`**: For transforming JSON data.
- **`logger.js`**: For logging messages and errors.
- **`mailer.js`**: For sending emails.
- **`qrGenerator.js`**: For generating QR codes.
- **`quickEncrypt.js`**: For encrypting and decrypting data.
- **`sendAttachment.js`**: For sending attachments like CSV files.
- **`token.js`**: For generating and verifying JWTs.

### Modules and Functions 📚

**Archiver**:

- `zipDirectory`: Compresses a directory into a ZIP file.

**Date Formatter**:

- `dateForFilename`: Creates a date string in the format YYYY-MM-DD-HH-MM-SS for filenames.

**Form Data**:

- `buildFormData`: Creates a FormData object from a JavaScript object.
- `jsonToFormData`: Converts a JSON object to a FormData object.

**JSON Transformer**:

- `getNestedValuesString`: Extracts nested values from a JSON object as a string.

**Logger**:

- `logger`: Provides logging functionality for messages and errors.

**Mailer**:

- `inboundMailer`: Sends an email with a template and attachments.

**QR Generator**:

- `qrPNGFile`: Generates a QR code as a PNG file.
- `qrSignedPNGFile`: Generates a signed QR code as a PNG file.

**Quick Encrypt**:

- `generate`: Creates a public-private key pair.
- `encrypt`: Encrypts a string using a public key.
- `decrypt`: Decrypts a string using a private key.

**Send Attachment**:

- `sendCSV`: Sends a CSV file as an email attachment.

**Token**:

- `getJWT`: Generates a JSON Web Token (JWT) from data.
- `verifyJWT`: Checks if a JWT is valid.
- `getSignedJWT`: Generates a signed JWT from data.
- `verifySignedJWT`: Verifies a signed JWT.

### Usage 📖

To use any utility function or module, you need to:

1. **Import the Module:** Include it in your JavaScript file.
2. **Call the Function:** Use the available functions as needed.

Example:

```javascript
const { zipDirectory } = require('./utils/archiver');
zipDirectory('path/to/directory', 'path/to/archive.zip');
```
