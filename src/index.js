import { navAnimation, navToggle } from '../nav'
import { createTaskBtn, createTaskModal, closeTask } from '../newtask'
import { Tasks, Task, addTask, TaskCreator, openTask, getTaskFromInput, modifyTaskFromInput, removeOldTask, showAllTasks, tickTask } from '../alltasks';
import { showTodayTasks } from '../todaytasks';
import { showWeekTasks } from '../weeklytasks';

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

showAllTasks();

navAnimation();

const ShowAllTasksButton = document.getElementById("all-tasks-button")
ShowAllTasksButton.addEventListener("click", showAllTasks)

const ShowTodayTasksButton = document.getElementById("today-tasks-button")
ShowTodayTasksButton.addEventListener("click", showTodayTasks)

const ShowWeeklyTasksButton = document.getElementById("week-tasks-button")
ShowWeeklyTasksButton.addEventListener("click", showWeekTasks)


