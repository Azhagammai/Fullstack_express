
# Fullstack App Setup Guide

## Folder Structure

```
FULLSTACK_WITH_FRONTEND_BACKEND/
│
├── backend/
│   ├── controllers/
│   │   └── userController.js
│   ├── models/
│   │   └── userModel.js
│   ├── routes/
│   │   └── userRoutes.js
│   ├── config/
│   │   └── db.js
│   ├── server.js
│   ├── package.json
│   └── .env
│
└── my-app/
    ├── src/
    │   ├── components/
    │   │   └── Register.js
    │   ├── services/
    │   │   └── userService.js
    │   ├── App.js
    │   └── index.js
    ├── public/
    │   └── index.html
    └── package.json
```

---

## Backend Setup (`backend` folder)

1. **Install dependencies:**
   ```
   cd backend
   npm install
   npm init -y -->package.json,package.lock
   npm install express mongoose cors
   npm install  bcryptjs
   mongod
   
   ```

2. **Configure MongoDB connection:**
   - In `.env`, set:
     ```
     MONGO_URI=mongodb://localhost:27017/fullstack-app
     PORT=5000
     ```
   - In `config/db.js`, the app connects to MongoDB using this URI.

3. **User Model:**
   - `models/userModel.js` defines the user schema (name, email, password).

4. **User Controller:**
   - `controllers/userController.js` handles registration logic (hashes password, checks for duplicates, saves user).

5. **User Routes:**
   - `routes/userRoutes.js` exposes `/api/users/register` POST endpoint.

6. **Server Setup:**
   - `server.js` initializes Express, connects to MongoDB, enables CORS, and sets up user routes.

7. **Start the backend server:**
   ```
   npm start
   ```
   or
   ```
   node server.js
   ```

---

## Frontend Setup (`my-app` folder)

1. **Install dependencies:**
   ```
   cd my-app
   npm install
   npm install axios
   ```

2. **User Service:**
   - `src/services/userService.js` uses Axios to send registration data to the backend.

3. **Register Component:**
   - `src/components/Register.js` provides a form for user registration and calls the user service.

4. **App Component:**
   - `src/App.js` renders the Register component.

5. **Entry Point:**
   - `src/index.js` renders the App component into the root div in `public/index.html`.

6. **HTML Template:**
   - `public/index.html` contains the root div for React.

7. **Start the frontend server:**
   ```
   npm start
   ```

---

## How Everything Connects

- **Frontend (`my-app`)** runs on `http://localhost:3000`.
- **Backend (`backend`)** runs on `http://localhost:5000`.
- The frontend registration form sends a POST request to `http://localhost:5000/api/users/register`.
- The backend receives the request, validates and saves the user to MongoDB (`fullstack-app` database).
- CORS is enabled so the frontend can communicate with the backend.
- MongoDB must be running locally for data to be saved.

---

## Troubleshooting

- Make sure both servers are running.
- MongoDB must be running (`mongod`).
- Check browser console and backend terminal for errors.
- Use MongoDB Compass or CLI to view saved users.

---

## File Paths

- Backend entry: `backend/server.js`
- Frontend entry: `my-app/src/index.js`
- Registration form: `my-app/src/components/Register.js`
- API service: `my-app/src/services/userService.js`
- MongoDB config: `backend/config/db.js`
- User model: `backend/models/userModel.js`
- User controller: `backend/controllers/userController.js`
- User routes: `backend/routes/userRoutes.js`
- Environment variables: `backend/.env`
- HTML template: `my-app/public/index.html`

---

**Now you have a working fullstack app with React frontend, Express backend, and MongoDB
