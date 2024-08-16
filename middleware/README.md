# Middleware 🛠️

## What is Middleware? 🤔

Middleware functions are special functions that sit between the client’s request and the server’s response. They perform important tasks such as checking if a user is authorized, validating data, or logging information.

### Purpose 🎯

This folder contains middleware functions that help handle specific tasks, such as:

- **Authentication:** Verifying that a user is who they claim to be.
- **Validation:** Checking that incoming data is correct and secure.

### Structure 🗂️

The folder contains the following middleware files:

- **`admin.js`**: This file checks if a user has admin privileges by verifying their credentials against environment variables 🔑
- **`captcha.js`**: This file ensures that Google ReCAPTCHA v2 has been completed to prevent bot attacks 🤖

### How Middleware Works 🔄

Each middleware file exports a function that can be used to:

1. **Validate Requests:** Make sure the request meets certain criteria before processing it.
2. **Authenticate Users:** Check if a user has the right permissions to access certain resources.
3. **Log Information:** Record details about the request for debugging or monitoring.

Explore these middleware functions to see how they can be used to make your application more secure and reliable! 🔍
