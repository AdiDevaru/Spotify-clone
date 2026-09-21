# Spotify Full-Stack

A full-stack Spotify-inspired music streaming application built with the MERN stack. The project includes a user-facing web application, an admin dashboard, and a Node.js/Express backend.

## Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- Multer
- Cloudinary

## Project Structure

```text
spotify-full-stack/
│
├── spotify-frontend/       # User-facing React application
├── spotify-admin/          # Admin dashboard
├── spotify-backend/        # Express.js REST API
│
├── .gitignore
└── README.md
```

## Prerequisites

Make sure the following are installed before running the project:

- [Node.js](https://nodejs.org/)
- npm
- MongoDB Atlas account
- Cloudinary account

## Environment Variables

The backend requires environment variables for MongoDB and Cloudinary.

Create a `.env` file inside:

```text
spotify-backend/.env
```

Add the following:

```env
MONGODB_URI=your_mongodb_connection_string

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

## Cloudinary Setup

Cloudinary is used for storing uploaded files and media.

1. Create an account at [Cloudinary](https://cloudinary.com/).
2. Log in and open your Cloudinary Dashboard.
3. Find your:
   - Cloud Name
   - API Key
   - API Secret

4. Add these values to `spotify-backend/.env`.

## MongoDB Setup

MongoDB Atlas is used as the database for the application.

1. Create a project and an M0 free-tier database in MongoDB Atlas.
2. Create a database username and password.
3. Add your IP address to the network access list.
4. Click Connect and copy the MongoDB connection string.
5. Add the connection string to spotify-backend/.env and replace the password placeholder with your database password.

## Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/AdiDevaru/Spotify-clone.git
cd spotify-full-stack
```

### 2. Setup Backend

Open a terminal inside the backend directory:

```bash
cd spotify-backend
npm install
```

Create your `.env` file and configure MongoDB and Cloudinary as described above.

Start the backend:

```bash
npm run server
```

### 3. Setup Frontend

Open a new terminal:

```bash
cd spotify-frontend
npm install
```

Start the development server:

```bash
npm run dev
```

Vite will provide a local URL in the terminal. Open that URL in your browser.

### 4. Setup Admin Dashboard

Open another terminal:

```bash
cd spotify-admin
npm install
```

Start the admin development server:

```bash
npm run dev
```

Vite will provide a local URL in the terminal. Open that URL in your browser.

## Running the Project

Run the applications in this order:

```text
1. Backend
   spotify-backend
   npm run server

2. Frontend
   spotify-frontend
   npm run dev

3. Admin Panel
   spotify-admin
   npm run dev
```

Each application runs as an independent Node.js project.

## Features

### User Application

- Browse and discover music
- Play songs and albums
- Music player
- Playlist management
- Responsive interface

### Admin Dashboard

- Manage songs
- Manage albums
- Upload music and images
- Manage application content

### Backend Features

- RESTful APIs
- MongoDB database integration
- Cloudinary media storage
- File uploads
- User and music data management

## License

This project is intended for learning and portfolio purposes.

## Author

**Adithya Devaru**
Computer Science Engineer

[GitHub](https://github.com/AdiDevaru) ·
[LinkedIn](https://www.linkedin.com/in/Adithya-Devaru/)
