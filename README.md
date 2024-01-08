# Food Safety and Analytics Platform
## Introduction
This project is a Food Safety Compliance and Analytics Platform designed to manage food safety data, ensure compliance with regulations, and provide analytics insights. It's built using React.js for the frontend and Node.js with Express.js for the backend, with PostgreSQL as the database.

## Prerequisites
Before you begin, ensure you have the following installed:

**Node.js** \
**PostgreSQL**

## Installation
### Setting Up PostgreSQL
1. Install PostgreSQL if it's not already installed on your system. \
2. Start the PostgreSQL service. \
3. Create a new database for the application. You can name the database as per your preference. For example:
```
CREATE DATABASE yourDatabaseName;
```
4. Add the **.env** file in the root directory with your database credentials:
```
DB_USER=yourPostgresUsername
DB_HOST=localhost
DB_DATABASE=yourDatabaseName
DB_PASSWORD=yourPostgresPassword
DB_PORT=5432
```
### Setting Up the Backend
1. From the root of your project, navigate to the **server** directory:
```
cd server
```
2. Install the required packages:
```
npm install
```
3. Run the database setup script:
```
node scripts/setupDatabase.js
```
### Setting Up the Frontend
1. From the root of your project, navigate to the **client** directory:
```
cd client
```
2. Add the .env file in the client directory contains the correct backend URL:
```
REACT_APP_API_URL=http://localhost:5000
```
3. Install the required packages:
```
npm install
```
## Running the Application
To run both the backend and frontend concurrently from the root directory:

1. Ensure you are in the root directory of the project.
2. Run the following command:
```
npm start
```
This command will start both the backend server and the frontend application.
## Usage
After starting the application, navigate to **http://localhost:3000** in your web browser to access the Food Quality Compliance and Analytics Platform.

## Additional Information
The frontend application will automatically open in your default browser once it starts.
Make sure the PostgreSQL service is running before you start the application.
