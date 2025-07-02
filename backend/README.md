
# 🛠️ Helpdesk System

A role-based Helpdesk web application for managing tickets, users, and operational workflows. Built using **React** for the frontend and **Node.js/Express** for backend authentication and role control.

---

## 🧾 Table of Contents

1. [Overview](#overview)  
2. [Features](#features)  
3. [Login Credentials](#login-credentials)  
4. [User Roles](#user-roles)  
5. [Authentication](#authentication)  
6. [Sidebar Navigation](#sidebar-navigation)  
7. [Technologies Used](#technologies-used)  
8. [Getting Started](#getting-started)  

---

## 📌 Overview

This project provides a structured Helpdesk management system for users to raise tickets and support teams to track and resolve them. The interface and dashboard content vary based on the user's role.

---

## 🚀 Features

- Role-based login system
- Ticket submission and tracking
- Performance dashboard
- Ticket approval (for operation team)
- Admin tools: user logs, settings, and database access

---

## 🔐 Login Credentials

> These credentials are for testing/demo purposes.

| Role              | Username        | Password   |
|-------------------|------------------|------------|
| admin             | `admin1`         | `admin123` |
|technicalSupport | `techsupport1`   | `tech123`  |
| operationTeam  | `operation1`     | `ops123`   |
| user              | `user1`          | `user123`  |

---

## 👥 User Roles

### 🔹 Admin
- View overall dashboard
- Manage database and settings
- View user log history

### 🧰 Technical Support
- Dashboard for assigned tickets
- View/Manage their own tickets
- Track team performance

### ⚙️ Operation Team
- Approve/Reject tickets
- Dashboard and ticket overview
- Monitor performance


---

## 🔐 Authentication

### ➕ Signup

- **Endpoint:** `POST /api/v1/auth/signUp`
- **Fields:**  
  - `name`  
  - `email`  
  - `password`  
  - `role` *(admin, technicalSupport, operationTeam, user)*

### 🔐 Login

- **Endpoint:** `POST /api/v1/auth/signIn`
- **Fields:**  
  - `username`  
  - `password`

On successful login:
- User is authenticated using JWT/session
- Sidebar and access are dynamically adjusted based on role

---

## 📚 Sidebar Navigation

Role-specific sidebar navigation using `react-router-dom` and `react-icons`.

### Example Menus:

#### 🟢 Admin

- `/admin/dashboard`
- `/admin/database`
- `/admin/settings`
- `/admin/logs`

#### 🔧 Technical Support

- `/technicalsupport/dashboard`
- `/technicalsupport/ticket`
- `/technicalsupport/performance`

#### ⚙️ Operation Team

- `/operation/dashboard`
- `/operation/ticket-approval`
- `/operation/ticket`
- `/operation/performance`

#### 🙋 User

- `/user/dashboard`
- `/user/new-ticket`
- `/user/ticket`

---

## 🧪 Technologies Used

- React  
- React Router DOM  
- Tailwind CSS  
- React Icons  
- Express / Node.js  
- JWT (for authentication)  
- MongoDB 

---

## ⚙️ Getting Started

### Clone the Repository

```bash
git clone https://github.com/RaviSharma8392/Helpdesk.git
