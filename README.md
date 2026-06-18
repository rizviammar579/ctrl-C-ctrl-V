# <ctrl-C/ctrl-V>

A full-stack password manager built using React, Express.js, MongoDB, and Tailwind CSS.

## Features

* Add passwords
* View saved passwords
* Edit existing passwords
* Delete passwords
* Copy website, username, and password with one click
* Show/Hide password while entering
* Responsive design

## Tech Stack

### Frontend

* React
* Tailwind CSS
* Fetch API

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

## What I Learned

This project was my first experience building a complete full-stack application.

Before this project, I had built frontend-only applications. This was my first time seeing frontend communicate with the backend and watching changes happening inside database.

The workflow looked like this:

1. User enters website, username, and password in the React form.
2. React sends the data to the Express server using Fetch API.
3. Express receives the request and validates the data.
4. Mongoose stores the data in MongoDB.
5. React fetches the updated data and displays it in the table.

Seeing data travel from the browser to the server and then into the database helped me understand how real-world web applications work.

I also learned:

* REST APIs and CRUD operations
* GET, POST, PUT, and DELETE requests
* Client-server architecture
* Database integration using Mongoose
* State management in React
* Form handling
* Responsive UI design
* Debugging frontend and backend communication

## Installation

1. Clone the repository

```bash
git clone https://github.com/rizviammar579/ctrl-C-ctrl-V
```

2. Install dependencies

```bash
npm install
```

3. Connect MongoDB

* Install MongoDB Community Server and MongoDB Compass.
* Create a connection in MongoDB Compass.
* Copy your MongoDB connection string.
* Open backend/Server.js.
* Replace the existing connection string with your own MongoDB connection string.

* Example:

```bash 
mongoose.connect("your-mongodb-connection-string")
```

4. Start the backend server

```bash
npm run server
```

5. Start the frontend

```bash
npm run dev
```



## Author

Ammar Rizvi
