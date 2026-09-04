# Client Management System

A full-stack client management application built to manage clients, plans, and related business data.

The project is developed as a modern web application using React on the frontend, Node.js with Express on the backend, and PostgreSQL as the database.

## 🚀 Tech Stack

### Frontend

* React
* TypeScript
* Vite
* React Router
* SCSS
* Context API
* i18n support

### Backend

* Node.js
* Express.js
* REST API architecture
* Service / Controller structure

### Database

* PostgreSQL
* Supabase

## 📁 Project Structure

```text
client-management/
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── db_scripts/
│   ├── config/
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── widgets/
│   │   ├── context/
│   │   └── api/
│
└── README.md
```

## ✨ Current Features

### Client Management API

Implemented REST API functionality:

* Get all clients
* Get client by ID
* Create new client
* Update client information
* Delete client

Backend API has been tested using Postman.

## 🔌 API Endpoints

### Clients

| Method | Endpoint           | Description       |
| ------ | ------------------ | ----------------- |
| GET    | `/api/clients`     | Get all clients   |
| GET    | `/api/clients/:id` | Get client by ID  |
| POST   | `/api/clients`     | Create new client |
| PUT    | `/api/clients/:id` | Update client     |
| DELETE | `/api/clients/:id` | Delete client     |

## 🏗️ Application Architecture

The application follows a separated frontend/backend architecture:

```text
React Frontend
      |
      | HTTP Requests
      ↓
Express REST API
      |
      ↓
PostgreSQL Database
```

The frontend communicates with the backend through REST API endpoints.

## 🔧 Installation

### Clone repository

```bash
git clone git@github.com:AndriyPTdev/client-management.git

cd client-management
```

## Backend Setup

Navigate to backend:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create environment file:

```text
.env
```

Example:

```env
PORT=5001

DATABASE_URL=your_database_connection_string

CLIENT_URL=http://localhost:5173
```

Start backend:

```bash
npm run dev
```

Backend API will run on:

```text
http://localhost:5001/api
```

## Frontend Setup

Navigate to frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Frontend will run on:

```text
http://localhost:5173
```

## 🛠️ Development Roadmap

Planned features:

* [ ] Client creation and editing forms
* [ ] Form validation
* [ ] Authentication system
* [ ] User roles and permissions
* [ ] Client subscriptions management
* [ ] Orders and payments management
* [ ] Statistics dashboard
* [ ] Search and filtering
* [ ] Improved UI/UX

## 🎯 Project Goal

The goal of this project is to build a complete production-style full-stack application while following modern development practices:

* Clean project structure
* Separation of responsibilities
* REST API principles
* Database design
* Scalable frontend architecture
* Professional Git workflow

## 👨‍💻 Author

Andriy

Full-stack development learning project.
