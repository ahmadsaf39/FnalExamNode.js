# Technologies & Packages Used

This document explains:

- what we installed
- why we installed it
- how and where we used it in the project

---

# Next.js

## Installation

```bash
npx create-next-app@latest
```

## Why We Installed It

Next.js was used as the main framework for:

- frontend development
- backend API routes
- routing system
- layouts
- deployment

---

## How We Used It

Used:

- App Router
- API Routes
- layouts
- pages
- server/client rendering

---

## Where We Used It

```text
app/
app/api/
app/dashboard/
```

---

# React

## Installation

Installed automatically with Next.js.

---

## Why We Installed It

React was used to build:

- reusable UI components
- dynamic interfaces
- state management

---

## How We Used It

Used:

- useState
- useEffect
- reusable components

---

## Where We Used It

```text
StudentCard
Navbar
Sidebar
AddStudentForm
```

---

# TypeScript

## Installation

Installed automatically with Next.js TypeScript template.

---

## Why We Installed It

TypeScript improves:

- code safety
- type checking
- error prevention
- developer experience

---

## How We Used It

Used:

- interfaces
- typed props
- typed API requests

---

## Where We Used It

```text
types/student.types.ts
StudentCardProps
CreateStudentRequest
```

---

# Tailwind CSS

## Installation

```bash
npm install tailwindcss @tailwindcss/postcss postcss
```

---

## Why We Installed It

Tailwind CSS was used for:

- fast styling
- responsive UI
- utility-first CSS design

---

## How We Used It

Used utility classes directly inside components.

---

## Where We Used It

Example:

```tsx
className = "bg-black px-4 py-2 text-white";
```

---

# Axios

## Installation

```bash
npm install axios
```

---

## Why We Installed It

Axios was used for:

- API requests
- backend communication
- interceptors

---

## How We Used It

Created centralized Axios instance.

Used:

- GET requests
- POST requests
- PUT requests
- DELETE requests

---

## Where We Used It

```text
services/api.ts
services/student.service.ts
services/auth.service.ts
```

---

# Axios Interceptor

## Why We Installed It

Interceptor was used to:

- automatically attach tokens
- manage authentication
- handle unauthorized requests

---

## How We Used It

Before requests:

- token is read from localStorage
- Authorization header added automatically

---

## Where We Used It

```text
services/api.ts
```

---

# React Hot Toast

## Installation

```bash
npm install react-hot-toast
```

---

## Why We Installed It

React Hot Toast was used for:

- notifications
- validation messages
- success/error feedback

---

## How We Used It

Displayed:

- invalid login
- invalid OTP
- validation errors
- CRUD success/error messages

---

## Where We Used It

Example:

```tsx
toast.error("Invalid email");
toast.success("Student created");
```

---

# Nodemailer

## Installation

```bash
npm install nodemailer
npm install --save-dev @types/nodemailer
```

---

## Why We Installed It

Nodemailer was used to:
send OTP emails through Gmail SMTP.

---

## How We Used It

Created email transporter and OTP email sending logic.

---

## Where We Used It

```text
app/api/send-otp/route.ts
```

---

# SQLite3

## Installation

```bash
npm install sqlite3
npm install --save-dev @types/sqlite3
```

---

## Why We Installed It

SQLite was used as:

- lightweight database
- local database solution
- easy SQL integration

without needing external database servers.

---

## How We Used It

Used for:

- storing students
- CRUD operations

---

## Where We Used It

```text
database/database.ts
database/students.db
```

---

# Vercel

## Installation

No installation required.

Used through:
https://vercel.com

---

## Why We Used It

Vercel was used for:

- deployment
- hosting
- CI/CD pipeline
- automatic redeployment

---

## How We Used It

Connected:
GitHub → Vercel

Every Git push automatically redeploys the website.

---

## Where We Used It

```text
Production Deployment
```

---

# Git

## Installation

```bash
git init
```

---

## Why We Installed It

Git was used for:

- version control
- tracking changes
- source management

---

## How We Used It

Used:

- commits
- branches
- pushes

---

## Where We Used It

Commands:

```bash
git add .
git commit -m ""
git push origin development
```

---

# GitHub

## Installation

No installation required.

Used through:
https://github.com

---

## Why We Used It

GitHub was used for:

- remote repository hosting
- collaboration
- CI/CD integration

---

## How We Used It

Connected repository with Vercel deployment.

---

## Where We Used It

```text
GitHub Repository
```

---

# Environment Variables

## Why We Used Them

Environment variables were used to securely store:

- email credentials
- API URLs
- configuration

---

## How We Used Them

Stored sensitive values inside:

```text
.env.local
```

---

## Where We Used Them

```env
EMAIL_USER=
EMAIL_PASS=
NEXT_PUBLIC_API_URL=
```

---

# ProtectedRoute

## Why We Used It

ProtectedRoute prevents unauthorized access to dashboard pages.

---

## How We Used It

Checks:
token existence

before allowing access.

---

## Where We Used It

```text
components/auth/ProtectedRoute.tsx
```

---

# RoleGuard

## Why We Used It

RoleGuard restricts access depending on user role.

---

## How We Used It

Checks:
Admin or User role

before showing protected features.

---

## Where We Used It

```text
components/auth/RoleGuard.tsx
```

---

# OTP Authentication

## Why We Used It

OTP adds:
second authentication layer

for improved security.

---

## How We Used It

After successful login:

- OTP generated
- OTP emailed
- user verifies OTP

---

## Where We Used It

```text
app/api/send-otp/route.ts
app/otp/page.tsx
```

---

# SQLite Database Browser

## Why We Used It

Used to:

- view SQLite database
- inspect tables
- debug student records

---

## How We Used It

Opened:
students.db

inside DB Browser for SQLite.
