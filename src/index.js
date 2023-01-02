import { navAnimation, navToggle } from '../nav'
import { createTaskBtn, createTaskModal, closeTask } from '../newtask'
import { Tasks, Task, addTask, TaskCreator, openTask, closeModifyTaskModal, getTaskFromInput } from '../alltasks';

navAnimation();

addTask("Compiti Italiano", "Dante pg256", "High", "2023-01-31")
addTask("Compiti Matematica", "Frazioni pg456", "Medium", "2023-01-31")
