function loadTasks() {
    fetch("/tasks")
        .then(response => response.json())
        .then(tasks => {
            const taskList = document.getElementById("taskList");

            taskList.innerHTML = "";

            tasks.forEach(task => {
                const taskDiv = document.createElement("div");
                taskDiv.className = task.completed ? "task completed" : "task";

                taskDiv.innerHTML = `
                    <h3>${task.title}</h3>
                    <p>${task.description}</p>
                    <p>Completed: ${task.completed}</p>

                    <button onclick="editTask(${task.id})">Edit</button>

                    <button onclick="completeTask(${task.id})">
                        ${task.completed ? "Completed" : "Mark Complete"}
                    </button>

                    <button onclick="deleteTask(${task.id})">Delete</button>

                    <div id="edit-${task.id}"></div>
                `;
                taskList.appendChild(taskDiv);
            });
        });
}


function addTask() {

    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;

        if (title.trim() === "" || description.trim() === "") {
            alert("Please enter both title and description.");
            return;
        }

    const task = {
        title: title,
        description: description,
        completed: false
    };

    fetch("/tasks", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(task)
    })
        .then(response => response.json())
        .then(() => {

            document.getElementById("title").value = "";
            document.getElementById("description").value = "";

            document.getElementById("message").innerText =
                "Task added successfully!";

            loadTasks();
        });
}
function editTask(id) {

    const editArea = document.getElementById(`edit-${id}`);

    editArea.innerHTML = `
        <input type="text" id="edit-title-${id}" placeholder="New title">
        <input type="text" id="edit-description-${id}" placeholder="New description">

        <button onclick="saveEdit(${id})">Save</button>
        <button onclick="loadTasks()">Cancel</button>
    `;
}
function saveEdit(id) {

    const newTitle = document.getElementById(`edit-title-${id}`).value;
    const newDescription = document.getElementById(`edit-description-${id}`).value;

    fetch(`/tasks/${id}`)
        .then(response => response.json())
        .then(task => {

            const updatedTask = {
                title: newTitle,
                description: newDescription,
                completed: task.completed
            };

            return fetch(`/tasks/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updatedTask)
            });
        })
        .then(response => response.json())
        .then(() => {
            document.getElementById("message").innerText =
                "Task updated successfully!";

            loadTasks();
        });
}
function completeTask(id) {

    fetch(`/tasks/${id}`)
        .then(response => response.json())
        .then(task => {

            task.completed = true;

            fetch(`/tasks/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(task)
            })
                .then(response => response.json())
                .then(() => {
                    document.getElementById("message").innerText =
                        "Task marked as completed!";

                    loadTasks();
                });
        });
}
function deleteTask(id) {

    fetch(`/tasks/${id}`, {
        method: "DELETE"
    })
        .then(response => response.text())
        .then(() => {
            document.getElementById("message").innerText =
                "Task deleted successfully!";

            loadTasks();
        });
}


loadTasks();