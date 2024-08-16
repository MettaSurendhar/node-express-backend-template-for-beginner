module.exports = {
	//TODO: Configuration settings for the development environment

	development: {
		// Retrieve the database username from environment variables
		// Environment variables are used to keep sensitive information like credentials safe
		username: process.env.DB_USERNAME,

		// Retrieve the database password from environment variables
		password: process.env.DB_PASSWORD,

		// Specify the host address for the database connection
		// '127.0.0.1' is a standard address for localhost, meaning your own computer
		host: '127.0.0.1',

		// Retrieve the name of the database from environment variables
		database: process.env.DB_NAME,

		// Specify the type of database we are using
		// 'postgres' refers to PostgreSQL, a popular relational database system
		dialect: 'postgres',
	},

	//TODO: Configuration settings for the staging environment

	staging: {
		// Use an environment variable to get the database connection URL
		// This URL includes all the necessary information to connect to the database
		use_env_variable: 'DB_URL',

		// Specify the type of database we are using
		dialect: 'postgres',

		// Dialect options allow us to set additional settings for the database connection
		dialectOptions: {
			// Enable SSL encryption to secure the data transmitted between the application and the database
			// SSL (Secure Sockets Layer) helps protect sensitive information
			ssl: true,
		},
	},

	//TODO: Configuration settings for the production environment

	production: {
		// Use an environment variable to get the database connection URL
		use_env_variable: 'DB_URL',

		// Specify the type of database we are using
		dialect: 'postgres',

		// Dialect options allow us to set additional settings for the database connection
		dialectOptions: {
			// Enable SSL encryption to ensure that data transmitted between the application and the database is secure
			ssl: true,
		},
	},
};
