# Task Manager Application

A full-stack Task Manager application built using Java, Spring Boot, MySQL, HTML, CSS, and JavaScript. It allows users to create, view, update, complete, and delete tasks through a web interface backed by REST APIs.

## Features

- Create and save tasks
- View all tasks and retrieve individual tasks by ID
- Edit task titles and descriptions
- Mark tasks as completed
- Delete tasks
- Store task data in a MySQL database
- Interact with the backend through REST API endpoints
- Use a simple web interface built with HTML, CSS, and JavaScript

## Tech Stack

- **Backend:** Java, Spring Boot
- **Database:** MySQL
- **Frontend:** HTML, CSS, JavaScript
- **API:** REST API
- **Build Tool:** Maven
- **Development Tools:** IntelliJ IDEA, Git, GitHub

## REST API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/tasks` | Retrieve all tasks |
| GET | `/tasks/{id}` | Retrieve a task by ID |
| POST | `/tasks` | Create a new task |
| PUT | `/tasks/{id}` | Update an existing task |
| DELETE | `/tasks/{id}` | Delete a task |

### Example Request Body

Use this JSON structure when creating or updating a task:

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
│   └── main/
│       ├── java/
│       │   └── com/pooja/taskmanager/
│       │       ├── controller/
│       │       ├── model/
│       │       ├── repository/
│       │       └── TaskManagerApplication.java
│       └── resources/
│           ├── static/
│           │   ├── index.html
│           │   ├── style.css
│           │   └── script.js
│           └── application.properties
├── pom.xml
└── README.md
```

## Getting Started

### Prerequisites

- Java Development Kit (JDK) compatible with the project
- MySQL Server
- IntelliJ IDEA or another Java IDE
- Maven, if running the project through the command line

### Installation and Setup

**1. Clone the repository**

```bash
git clone https://github.com/pooja-s27/task-manager.git
cd task-manager
```

**2. Open the project**

Open the cloned project in IntelliJ IDEA and allow Maven to load the project dependencies.

**3. Create the MySQL database**

Log in to MySQL and execute:

```sql
CREATE DATABASE task_manager;
```

**4. Configure the database password**

The application reads the database password from the `DB_PASSWORD` environment variable.

In IntelliJ IDEA:

1. Open **Run → Edit Configurations**.
2. Select the `TaskManagerApplication` run configuration.
3. Add an environment variable named `DB_PASSWORD`.
4. Set its value to your own local MySQL password.
5. Apply the changes.

Do not commit your actual database password to GitHub.

**5. Run the application**

Run `TaskManagerApplication.java` from IntelliJ IDEA.

**6. Open the application**

Visit:

http://localhost:8080

## Learning Outcomes

- Developing REST APIs using Spring Boot
- Connecting a Java application to a MySQL database
- Organizing backend code using controllers, models, and repositories
- Connecting a frontend to backend APIs
- Managing source code with Git and GitHub
- Configuring application settings using environment variables

## Future Improvements

- Add input validation and improved error handling
- Improve the user interface and user experience
- Add automated tests for REST API endpoints
- Implement additional task management features
  