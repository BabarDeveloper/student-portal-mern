# Student Portal (MERN)

A simple student portal built with the MERN stack for learning purposes. Students can register, log in, view their profile, update their details, and delete their account.

## Tech Stack

- **Backend:** Node.js, Express.js, MongoDB (Mongoose), bcrypt, jsonwebtoken, cors
- **Frontend:** React 18, Vite, React Router v6, Axios, Tailwind CSS

## Project Structure

```
student-portal-mern/
├── backend/        # Express API + MongoDB
│   ├── index.js
│   ├── db/         # DB connection
│   ├── model/      # Mongoose models
│   ├── controllers/
│   └── routes/
└── frontend/       # React (Vite) client
    └── src/
        ├── components/
        ├── context/
        └── App.jsx
```

## Backend

- Server runs on `http://127.0.0.1:5000`
- Connects to MongoDB via `db/dbConnect.js`
- Routes mounted under `/student`

### API Endpoints

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/student/:token` | Get student details (by JWT) |
| POST | `/student/signup` | Register a new student |
| POST | `/student/login` | Login student, returns JWT |
| PUT | `/student/update` | Update student profile |
| POST | `/student/delete` | Delete student account |

### Student Model Fields

`fName`, `lName`, `email`, `mobile`, `sID`, `password` (hashed), `age`, `gender`

## Frontend Routes

| Path | Page |
|------|------|
| `/` | Home |
| `/studentLogin` | Student Login |
| `/studentSignup` | Student Signup |
| `/studentHome` | Student Home |
| `/studentProfile` | Student Profile |
| `/studentProfileUpdate` | Update Profile |

Auth state is managed via `AuthContext` (token stored in `localStorage`).

## Getting Started

### Prerequisites

- Node.js
- MongoDB running locally (or update connection string in `backend/db/dbConnect.js`)

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on Vite's default port (usually `http://localhost:5173`).

## Notes

- JWT secret is hardcoded as `"Vicky"` (change for production).
- No tests configured.
EOF