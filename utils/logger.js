// Import the path library for working with file paths
const path = require('path');

// Import winston for logging
const { createLogger, transports, config, format } = require('winston');

// Import typedefs for custom types
const { typedefs } = require('../typedefs');

// Helper function to get the filename of the calling module 📁
const getLabel = (callingModule) => {
	const parts = callingModule.filename.split(path.sep);
	return path.join(parts[parts.length - 2], parts.pop());
};

// Helper function to format the metadata for logging 🛠️
const logMetaReplacer = (key, value) => {
	if (key === 'error') {
		return value.name + ': ' + value.message;
	}
	return value;
};

// Format the log message with timestamp, label, level, message, and metadata 📝
const logFormat = format.printf(
	({ level, message, label, timestamp, ...meta }) => {
		if (meta.error) {
			for (const key in meta.error) {
				if (typeof key !== 'symbol' && key !== 'message' && key !== 'name') {
					delete meta.error[key];
				}
			}
		}
		return `${timestamp} [${label}] ${level}: ${message}${formatMeta(meta)}`;
	}
);

// Create a logger function to use in different modules 📜
const logger = (callingModule) => {
	return createLogger({
		levels: config.npm.levels,
		format: format.combine(
			format.label({ label: getLabel(callingModule) }),
			format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
			logFormat
		),
		transports: [
			// Log to the console
			new transports.Console(),
			// Log to a file for general messages
			new transports.File({ filename: __dirname + '/../logs/common.log' }),
			// Log to a file for error messages
			new transports.File({
				filename: __dirname + '/../logs/error.log',
				level: 'error',
			}),
		],
	});
};

// Export the logger function to be used in other files
module.exports = logger;
