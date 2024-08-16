// Import nodemailer for sending emails
const mailer = require('nodemailer');

// Import the custom logger for logging email activities
const logger = require('./logger')(module);

// Create a transporter for sending emails via Gmail
const transport = mailer.createTransport({
	host: 'smtp.gmail.com',
	port: 465,
	secure: true, // Use SSL/TLS
	service: 'gmail',
	auth: {
		user: process.env.AUTOMAILER_ID, // Email address
		pass: process.env.AUTOMAILER_APP_PASSWD, // Email password
	},
});

/**
 * Sends an email from a web user to an organization email 📨
 *
 * @param {string} mailTarget - Target email address (must be within the organization)
 * @param {string} mailSubject - Subject of the email
 * @param {{name: string, email: string, message: string}} userData - User details: name, email, and message
 */
const inboundMailer = (mailTarget, mailSubject, userData) => {
	// Check if the target email address is valid for the organization
	if (!mailTarget.endsWith('cegtechforum.in')) {
		throw new Error('Invalid target mail domain.'); // Throw an error if not valid
	}

	// Construct the email message
	const message = {
		to: mailTarget,
		subject: mailSubject,
		html: `<p>Name: ${userData.name}</p><p>Email: ${userData.email}</p><br/><p>Message:<br/>${userData.message}</p>`,
	};

	// Send the email using the transporter
	transport.sendMail(message, (err, info) => {
		if (err) {
			// Log an error if the email fails to send
			logger.error('Failure: QUERY mail NOT sent', { err, userData });
		} else {
			// Log success if the email is sent
			logger.info('Success: QUERY mail sent', { info });
		}
	});
};

// Export the inboundMailer function for use in other files
module.exports = {
	inboundMailer,
};
