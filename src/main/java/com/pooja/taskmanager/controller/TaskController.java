package com.pooja.taskmanager.controller;

import com.pooja.taskmanager.model.Task;
import com.pooja.taskmanager.repository.TaskRepository;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class TaskController {

    private final TaskRepository taskRepository;

    public TaskController(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    // GET all tasks
    @GetMapping("/tasks")
    public List<Task> getTasks() {
        return taskRepository.findAll();
    }
    @GetMapping("/tasks/{id}")
    public Task getTask(@PathVariable Long id) {
        return taskRepository.findById(id).orElse(null);
    }

    // POST - create a new task
    @PostMapping("/tasks")
    public Task createTask(@RequestBody Task task) {
        return taskRepository.save(task);
    }

    // PUT - update a task
    @PutMapping("/tasks/{id}")
    public Task updateTask(@PathVariable Long id,
                           @RequestBody Task updatedTask) {

        Task task = taskRepository.findById(id).orElse(null);

        if (task == null) {
            return null;
        }

        task.setTitle(updatedTask.getTitle());
        task.setDescription(updatedTask.getDescription());
        task.setCompleted(updatedTask.isCompleted());

        return taskRepository.save(task);
    }

    // DELETE - delete a task
    @DeleteMapping("/tasks/{id}")
    public String deleteTask(@PathVariable Long id) {

        if (!taskRepository.existsById(id)) {
            return "Task not found";
        }

        taskRepository.deleteById(id);

        return "Task deleted successfully";
    }
}