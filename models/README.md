# Database Models 📊

## What are Database Models? 🤔

Database models define the structure and relationships of your database tables using an Object-Relational Mapping (ORM) library. In this project, we use Sequelize, a popular ORM for Node.js.

### Purpose 🎯

This folder contains Sequelize models that:

- **Define Tables:** Specify the structure of each table in your database.
- **Set Relationships:** Describe how different tables are related (e.g., one-to-many, many-to-many).

### Structure 🗂️

The folder contains the following file:

- **`index.js`**: The main file that sets up and initializes all models. It loads model definitions, sets up relationships, and exports the models so they can be used elsewhere in your application.

### Content Overview 📚

The `index.js` file:

- **Imports Modules:** Includes necessary libraries and utilities, such as Sequelize and a custom logger.
- **Loads Configuration:** Gets the database settings for the current environment (development, staging, production).
- **Creates Sequelize Instance:** Connects to the database using configuration details.
- **Initializes Models:** Loads all model definitions from the current folder, excluding non-JS files and itself.
- **Sets Up Associations:** Defines relationships between models.
- **Exports Models:** Makes the Sequelize instance and models available for use in other parts of your application.

Explore these models to understand how your database is structured and how different parts of your application interact with it! 🔍
