# Simple Todo App

A clean and simple to-do website built with Node.js, Express, and vanilla JavaScript.

## Features

- ✅ Add, edit, and delete todos
- ✅ Mark todos as complete/incomplete
- ✅ Filter todos (All, Active, Completed)
- ✅ Clear all completed todos
- ✅ Beautiful responsive UI
- ✅ RESTful API backend

## Installation

1. Navigate to the todo-app directory:
```bash
cd todo-app
```

2. Install dependencies:
```bash
npm install
```

## Running the App

Start the server:
```bash
npm start
```

Or for development with auto-reload:
```bash
npm run dev
```

The app will be available at `http://localhost:3000`

## API Endpoints

- `GET /api/todos` - Get all todos
- `POST /api/todos` - Create a new todo
- `PUT /api/todos/:id` - Update a todo
- `DELETE /api/todos/:id` - Delete a todo

## Project Structure

```
todo-app/
├── app.js              # Express server
├── package.json        # Dependencies
├── public/
│   ├── index.html      # Main HTML file
│   ├── style.css       # Styling
│   └── script.js       # Frontend JavaScript
└── README.md           # This file
```

## Technologies Used

- **Backend**: Node.js, Express, Body Parser
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Storage**: In-memory (can be extended with a database)
