# Belajar LinkedIn Class - REST API

## 📌 Overview
REST API sederhana untuk mengelola **Users, Classes, dan Enrollments** pada platform **Belajar LinkedIn Class**.  
Dibuat menggunakan **Node.js + Express + MySQL**.

---

## ✨ Features
- **Users**
  - Registrasi user
  - Login sederhana
- **Classes**
  - Tambah kelas
  - Lihat daftar kelas
  - Detail kelas
  - Edit kelas
  - Hapus kelas
- **Enrollments**
  - User bisa daftar ke kelas tertentu
  - Lihat daftar enrollment

---

## 🗂 Database Design

### Tables
1. **users**
   - idusers (PK, auto increment)
   - name (string)
   - email (string, unique)
   - password (string)

2. **classes**
   - id (PK, auto increment)
   - title (string)
   - description (text)

3. **enrollments**
   - id (PK, auto increment)
   - user_id (FK → users.id)
   - class_id (FK → classes.id)

Relasi:
- 1 user dapat ikut banyak class
- 1 class dapat diikuti banyak user

---

## 🔑 API Endpoints

### Users
- **POST /users/**
  - Request:
    ```json
    { "name": "Fadhil", "email": "fadhil@mail.com", "password": "123456" }
    ```
  - Response:
    ```json
    { "message": "REGISTER success", "data": { "id": 1, "name": "Fadhil", "email": "fadhil@mail.com" } }
    ```

- **POST /users/login**
  - Request:
    ```json
    { "email": "fadhil@mail.com", "password": "123456" }
    ```
  - Response:
    ```json
    { "message": "LOGIN success", "data": { "id": 1, "name": "Fadhil", "email": "fadhil@mail.com" } }
    ```

- **GET /users**
  - Response:
    ```json
    { "message": "GET all users success", "data": [ { "id": 1, "name": "Fadhil", "email": "fadhil@mail.com" } ] }
    ```

- **PATCH /users/:id**
- **DELETE /users/:id**

---

### Classes
- **POST /classes**
  - Tambah kelas baru

- **GET /classes**
  - Lihat daftar kelas

- **GET /classes/:id**
  - Detail kelas

- **PATCH /classes/:id**
  - Edit kelas

- **DELETE /classes/:id**
  - Hapus kelas

---

### Enrollments
- **POST /enrollments**
  - Request:
    ```json
    { "user_id": 1, "class_id": 2 }
    ```
  - Response:
    ```json
    { "message": "ENROLL success", "data": { "id": 1, "user_id": 1, "class_id": 2 } }
    ```

- **GET /enrollments**
  - Response:
    ```json
    { "message": "GET all enrollments success", "data": [ { "id": 1, "user_id": 1, "class_id": 2 } ] }
    ```

---

## 🚀 How to Run

1. Clone project  
   ```bash
   git clone https://github.com/FadhilR12/jagoLinkedIn_Case_Assessment.git
   cd project
   ```

2. Install dependencies  
   ```bash
   npm install
   ```

3. Setup database di MySQL  
   ```sql
   CREATE DATABASE belajar_linkedin;
   ```

4. Copy `.env.example` menjadi `.env`, isi dengan konfigurasi database  
   ```
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=yourpassword
   DB_NAME=belajar_linkedin
   PORT=3000
   ```

5. Run server  
   ```bash
   npm start
   ```

API akan berjalan di:  
```
http://localhost:3000
```
