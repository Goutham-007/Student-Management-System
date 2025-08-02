Student Management System

A full-stack Student Management System built using Spring Boot (Java) for the backend and React for the frontend. This system allows administrators to manage students efficiently with CRUD operations.

Author
Goutham Raj 

Tech Stack

Frontend:
React
Axios
tailwindcss

Backend:
Spring Boot
Spring Data JPA
MySQL
REST APIs


Features

Add, update, delete and view students
Clean and responsive UI
RESTful API integration
Separate frontend and backend architecture


Installation & Setup

Backend (Spring Boot)

cd backend
./mvnw spring-boot:run

Frontend (React)

cd frontend
npm install
npm start

Project Structure

StudentManagementSystem
    backend
   src/main/java/... (Spring Boot code) 

   frontend/
      src/ (React components)


API Endpoints

| Method | Endpoint                      | Description                            | Access       |
|--------|-------------------------------|----------------------------------------|--------------|
| GET    | `/api/student/task/`          | Get all student task records           | Public/Admin |
| POST   | `/api/student/task/add`       | Create a new student task              | Public/Admin |
| PUT    | `/api/student/task/{id}`      | Update an existing student task by ID | Public/Admin |
| DELETE | `/api/student/task/{id}`      | Delete a student task by ID           | Public/Admin |



Snapshots

<img width="867" height="553" alt="image" src="https://github.com/user-attachments/assets/eb6866ab-6a89-46c6-b0ce-70eb32a60cdf" />

