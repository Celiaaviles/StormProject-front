# Storm Project

This project is a World Storms Blog, a web application that allows you to explore and share photographs of storms from around the world. It employs modern technologies on both the backend and frontend to provide a smooth and engaging user experience.

## Features

- User registration and login
- Create, edit, update, and delete personal storm posts
- Browse and search storm posts from other users

#### Backend

- **Node.js**: The backend is developed in Node.js, ensuring fast performance and scalability.
- **Express**: We use the Express framework to create a robust and efficient RESTful API.
- **MongoDB**: The database is built on MongoDB, a NoSQL database that allows flexible data storage and management.
- **Authentication**: Users can securely register and log in. We use JSON Web Tokens (JWT) for authentication.
- **CRUD**: We implement CRUD (Create, Read, Update, Delete) operations to manage storm photographs. Users can create, edit, and delete their own posts.

#### Frontend

- **ReactJS**: The user interface is built with ReactJS, an open-source JavaScript framework developed by Facebook.
- **Redux**: We use Redux to efficiently manage the application's state and maintain a smooth user experience.
- **Responsive Design**: The application is fully responsive and adapts to different screen sizes for an optimal user experience.
- **Image Upload**: Users can upload storm images along with a title, location, and description.
- **Editing and Deletion**: Users can edit and delete their own posts.

## Configuration

To run the application on your local environment, follow these steps:

#### Backend

1. Clone this repository.
2. Navigate to the `backend` folder.
3. Run `npm install` to install dependencies.
4. Create a `.env` file in the `backend` folder with the following structure:
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   Replace `your_mongodb_uri` with your MongoDB database URI and `your_jwt_secret` with a secret key for JWT token generation.
5. Run `npm start` to start the backend server.

#### Frontend

1. Navigate to the `frontend` folder.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the React development server.

## Usage

Once you have configured the backend and frontend, you can access the application in your browser. Users can register, login, and start sharing their storm images. They can also view, edit, and delete their own posts.

## Contributions

We welcome contributions! If you'd like to improve this application, please open an issue or send a pull request.

## Author

This project was developed by Celia Avilés.
