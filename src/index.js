import { navAnimation, navToggle } from '../nav'
import { createTaskBtn, createTaskModal, closeTask } from '../newtask'
import { Tasks, Task, addTask, TaskCreator, openTask, getTaskFromInput, modifyTaskFromInput, removeOldTask } from '../alltasks';

function defaultTasks() {
  if (localStorage.getItem('pageLoaded') === null) {
    addTask("Compiti Italiano", "Dante pg256", "High", "2023-01-31")
    addTask("Compiti Matematica", "Frazioni pg456", "Medium", "2023-01-31")
    localStorage.setItem('pageLoaded', true);
  }
}

window.onload = defaultTasks;

const savedTasks = localStorage.getItem('tasks');
if (savedTasks) {
  Tasks = JSON.parse(savedTasks);
  Tasks.forEach(task => TaskCreator(task));
}

navAnimation();


