# Task Manager Application

A full-stack Task Management application built using Java, Spring Boot, MySQL, HTML, CSS, and JavaScript. The application allows users to create, view, update, complete, and delete tasks through a web interface backed by REST APIs.

## Features

- Create and save new tasks
- View all tasks and retrieve individual tasks by ID
- Update task titles, descriptions, and completion status
- Delete tasks
- Store task data in a MySQL database
- Interact with tasks through REST API endpoints
- Simple web interface built with HTML, CSS, and JavaScript

## Tech Stack

- **Backend:** Java, Spring Boot
- **Database:** MySQL
- **Frontend:** HTML, CSS, JavaScript
- **API:** REST API
- **Tools:** IntelliJ IDEA, Git, GitHub

## REST API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/tasks` | Retrieve all tasks |
| GET | `/tasks/{id}` | Retrieve a task by ID |
| POST | `/tasks` | Create a new task |
| PUT | `/tasks/{id}` | Update an existing task |
| DELETE | `/tasks/{id}` | Delete a task |

### Example Request Body

Use the following JSON structure when creating or updating a task:

```json
{
  "title": "Complete assignment",
  "description": "Finish the Java assignment",
  "completed": false
}
```

## Project Structure

```text
task-manager/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/pooja/taskmanager/
│   │   │       ├── controller/
│   │   │       ├── model/
│   │   │       ├── repository/
│   │   │       └── TaskManagerApplication.java
│   │   └── resources/
│   │       ├── static/
│   │       │   ├── index.html
│   │       │   ├── style.css
│   │       │   └── script.js
│   │       └── application.properties
├── pom.xml
└── README.md
```

## Getting Started

### Prerequisites

- Java Development Kit (JDK)
- MySQL Server
- IntelliJ IDEA or another Java IDE
- Maven (or the included Maven wrapper)

### Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/pooja-s27/task-manager.git
   ```

2. Open the project in IntelliJ IDEA.

3. Create a MySQL database named `taskmanager`.

4. Configure the database connection using the project's `application.properties` file. Set your database password through the `DB_PASSWORD` environment variable, as configured by the application.

5. Run `TaskManagerApplication.java`.

6. Open the application in your browser:

   `http://localhost:8080`

## Learning Outcomes

- Building REST APIs with Spring Boot
- Connecting a Java application to MySQL
- Organizing backend code using controllers, models, and repositories
- Connecting a frontend to backend APIs
- Using Git and GitHub for version control

## Future Improvements

- Add input validation and improved error handling
- Return appropriate HTTP status codes for unsuccessful requests
- Add automated tests for REST API endpoints
- Improve the user interface and user experience