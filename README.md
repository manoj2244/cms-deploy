# CMS Blog Admin Panel

A simple CMS blogging admin panel built with React (Tailwind CSS), Express, and MongoDB.

---

## Features

- Admin login (without JWT)
- Dashboard to view all posts with Edit/Delete options
- Create and Edit posts with form validation
- Protected routes (client-side)
- RESTful API with Express & MongoDB (Mongoose)
- Clean and responsive UI with Tailwind CSS

---

## Tech Stack

- Frontend: React, React Router DOM, Tailwind CSS, Axios, Yarn  
- Backend: Node.js, Express, MongoDB (Mongoose)  
- No JWT token authentication (simple session/localStorage-based)

---

# Usage
Navigate to http://localhost:5173/admin-login to access the login page.

After login, you will be redirected to the dashboard.

Use the sidebar to navigate between Dashboard, Create Post, and Logout.

On the dashboard, you can edit or delete posts.

When editing, the form is pre-filled with post data. After successful edit, you’ll be redirected back to the dashboard with a success message.

# Notes / Assumptions
Authentication is simple and does NOT use JWT or any token-based system.

MongoDB connection string is not included in the repo for security reasons.

To test with your own database, update .env with your connection URI.

The UI is built with Tailwind CSS, so ensure your dev environment supports PostCSS and Tailwind.

Error handling is basic for demonstration purposes.

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/manoj2244/CMS-Blog.git
cd CMS-Blog


##Server Setup
cd server
yarn install

##env
MONGODB_URI=your_mongodb_connection_string_here
PORT=5000
Note: The MongoDB connection string should point to your own MongoDB Atlas or local instance.

##Setup Client

cd client
yarn install
yarn dev

The frontend will run on http://localhost:5173 by default.

##Admin Login Credentials
Username: admin

Password: admin123

