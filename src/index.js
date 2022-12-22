import { navToggle, navAnimation } from "../nav";
import { createTaskBtn, createTaskModal, closeTask } from "../newtask"

createTaskBtn.addEventListener('click', createTaskModal)
navAnimation();