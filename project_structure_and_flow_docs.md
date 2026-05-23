# structure.md

```text
student-management/
│
├── app/ → Contains pages, layouts, and API routes.
│   ├── api/ → Backend APIs inside Next.js.
│   ├── dashboard/ → Protected dashboard pages.
│   ├── login/ → Login page.
│   ├── otp/ → OTP verification page.
│   ├── layout.tsx → Main global layout.
│   ├── page.tsx → Home page.
│   └── globals.css → Global styles and Tailwind.
│
├── components/ → Reusable UI components.
│   ├── auth/ → Authentication protection components.
│   ├── forms/ → Forms components.
│   ├── layouts/ → Navbar and Sidebar.
│   ├── tables/ → StudentCard component.
│   └── ui/ → Reusable UI utilities.
│
├── database/ → SQLite database files.
│   ├── database.ts → Database connection.
│   └── students.db → SQLite database.
│
├── services/ → API communication layer.
│   ├── api.ts → Axios configuration.
│   ├── auth.service.ts → Authentication logic.
│   └── student.service.ts → Students CRUD requests.
│
├── types/ → TypeScript interfaces.
│   └── student.types.ts → Students types.
│
├── utils/ → Reusable constants and helpers.
│   ├── constants.ts → Routes, roles, tokens.
│   └── helpers.ts → Helper functions.
│
├── .env.local → Environment variables.
├── middleware.ts → Route protection middleware.
├── package.json → Project dependencies.
└── tsconfig.json → TypeScript configuration.
```


# authentication.md

# Authentication System

## Login Flow

```text
User enters username and password
↓
Credentials checked in auth.service.ts
↓
OTP email sent using Nodemailer
↓
User enters OTP
↓
OTP verified
↓
Token stored in localStorage
↓
Redirect to dashboard
```

---

# Static Accounts

## Admin

```text
username: admin
password: 1234
```

Admin permissions:

```text
Create
Edit
Delete
View
```

---

## User

```text
username: user
password: 1234
```

User permissions:

```text
View only
```

---

# OTP Authentication

## File

```text
app/api/send-otp/route.ts
```

Responsibilities:

```text
Generate OTP
Send email
Verify OTP
```

---

# Authentication Files

```text
app/login/page.tsx
app/otp/page.tsx
services/auth.service.ts
components/auth/ProtectedRoute.tsx
components/auth/RoleGuard.tsx
```

---

# Token System

```text
Token stored in localStorage
```

Used for:

```text
Protected routes
Authentication checking
Authorization
```

---

# Environment Variables

```env
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=google_app_password
```

Used for secure email authentication.


# flow.md

# Application Flow

## Main System Flow

```text
User opens website
↓
Login page
↓
Enter credentials
↓
OTP email sent
↓
OTP verification
↓
Dashboard access
```

---

# Students CRUD Flow

## Create Student

```text
AddStudentForm
↓
student.service.ts
↓
/api/students
↓
SQLite database
```

---

## Read Students

```text
StudentsPage
↓
getStudents()
↓
/api/students
↓
SQLite database
```

---

## Update Student

```text
StudentCard Edit
↓
updateStudent()
↓
/api/students/[id]
↓
SQLite database
```

---

## Delete Student

```text
Delete Button
↓
deleteStudent()
↓
/api/students/[id]
↓
SQLite database
```

---

# Role Flow

## Admin

```text
Can:
Create
Edit
Delete
View
```

---

## User

```text
Can:
View only
```

---

# Deployment Flow

```text
VS Code
↓
Git Commit
↓
Git Push
↓
GitHub
↓
Vercel CI/CD
↓
Automatic Deployment
↓
Website Online
```

---

# Full Architecture Flow

```text
Frontend UI
↓
Components
↓
Services Layer
↓
Next.js API Routes
↓
SQLite Database
↓
Response Back To Frontend
```

