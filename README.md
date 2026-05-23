# Student Management System

A full-stack Student Management System built using:

- Next.js
- React
- TypeScript
- Tailwind CSS
- SQLite
- Nodemailer
- Axios
- OTP Authentication
- Role-Based Authorization
- Vercel Deployment

---

# Live Demo

```text
https://fnal-exam-node-js.vercel.app
```

---

# Features

## Authentication System

- Username & Password Login
- OTP Email Verification
- Protected Routes
- Role-Based Authorization
- AccessToken & RefreshToken Simulation

---

## Admin Features

Admin can:

- Create students
- Edit students
- Delete students
- View students

---

## User Features

User can:

- View students only

---

## Students CRUD

- Create Student
- Read Students
- Update Student
- Delete Student

---

## Database

- SQLite Database
- Real SQL CRUD operations
- Local lightweight database

---

## Deployment

- GitHub Integration
- CI/CD Pipeline
- Vercel Deployment
- Automatic Redeployment

---

# Technologies Used

| Technology      | Purpose            |
| --------------- | ------------------ |
| Next.js         | Frontend + Backend |
| React           | UI Components      |
| TypeScript      | Type Safety        |
| Tailwind CSS    | Styling            |
| Axios           | API Requests       |
| React Hot Toast | Notifications      |
| Nodemailer      | OTP Emails         |
| SQLite3         | Database           |
| Git & GitHub    | Version Control    |
| Vercel          | Deployment         |

---

# Project Structure

```text
student-management/
│
├── app/
├── components/
├── services/
├── database/
├── types/
├── utils/
├── public/
└── README.md
```

---

# Authentication Flow

```text
User Login
↓
Validate Credentials
↓
Send OTP Email
↓
Verify OTP
↓
Generate Tokens
↓
Store Token
↓
Dashboard Access
```

---

# Roles

## Admin

```text
Create
Edit
Delete
View
```

---

## User

```text
View Only
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/ahmadsaf39/FnalExamNode.js.git
```

---

## Open Project

```bash
cd student-management
```

---

## Install Dependencies

```bash
npm install
```

---

# Environment Variables

Create:

```text
.env.local
```

Add:

```env
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_google_app_password
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

---

# Run Development Server

```bash
npm run dev
```

---

# Production Deployment

The project is deployed using:

```text
Vercel + GitHub CI/CD
```

Every Git push automatically redeploys the application.

---

# SQLite Database

Database file:

```text
database/students.db
```

Table:

```sql
students
```

Columns:

```text
id
name
email
```

---

# OTP Email System

OTP emails are sent using:

```text
Nodemailer + Gmail SMTP
```

Environment variables securely store email credentials.

---

# CI/CD Pipeline

```text
VS Code
↓
Git Commit
↓
Git Push
↓
GitHub
↓
Vercel
↓
Automatic Build
↓
Automatic Deployment
```

---

# API Routes

## Students API

```http
GET    /api/students
POST   /api/students
PUT    /api/students/:id
DELETE /api/students/:id
```

---

## OTP API

```http
POST /api/send-otp
```

---

# Test Accounts

## Admin

```text
username: admin
password: 1234
```

---

## User

```text
username: user
password: 1234
```

---

# Security Features

- OTP Verification
- Protected Routes
- Role-Based Authorization
- Environment Variables
- Token Authentication
- Axios Interceptor

---

# Author

```text
Ahmad Safarjalani
Computer Science Student
```
