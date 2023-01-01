import { closeTask } from "./newtask";

export let Tasks = [];

export class Task {
  constructor(name, description, priority, dueDate) {
    this.name = name;
    this.description = description;
    this.priority = priority
    this.dueDate = dueDate;
  }
};

export function addTask(name, desc, priority, dueDate) {
  let task = new Task(name, desc, priority, dueDate);
  Tasks.push(task);
  TaskCreator(task);
}

const getTaskFromInput = (event) => {
  event.preventDefault();
  if (tname.value != "" && tdesc.value != "" && tpty.value != "" && ddate.value != "" && tname.value && Tasks.find(task => task.name != tname.value)) {
  const newName = document.getElementById('tname').value
  const newDesc = document.getElementById('tdesc').value
  const newPriority = document.getElementById('tpty').value
  const newDueDate = document.getElementById('ddate').value
  addTask(newName, newDesc, newPriority, newDueDate);
  } else if (Tasks.find(task => task.name === tname.value)) {
    const missMatch = document.querySelector('#miss')
    missMatch.textContent = "You already have a Task with this name"
    return
  } else {
    return
  }
}

export function TaskCreator(task) {

  const taskCnt = document.createElement('div');
  taskCnt.classList.add("task");
  const taskContainer = document.getElementById("content-holder")
  taskContainer.appendChild(taskCnt);
  const taskCntDivider = document.createElement('div')
  taskCntDivider.classList.add("taskCntDivider")
  taskCnt.appendChild(taskCntDivider);
  const parag = document.createElement('p');
  taskCntDivider.appendChild(parag);
  parag.innerText = task.name;
  const dueDt = document.createElement('p');
  dueDt.classList.add("DueDate")
  taskCntDivider.appendChild(dueDt);
  dueDt.innerText = task.dueDate;


  const taskCntDivider2 = document.createElement('div')
  taskCnt.appendChild(taskCntDivider2);
  taskCntDivider2.classList.add("taskCntDivider2")
  const remove = document.createElement('button');
  taskCntDivider2.appendChild(remove);
  remove.innerText = "Remove";
  remove.classList.add("taskBtns")
  remove.setAttribute("id", "removeBtn")
  remove.addEventListener('click', removeTask);

  const modifyTask = document.createElement('button');
  taskCntDivider2.appendChild(modifyTask);
  modifyTask.innerText = "Modify";
  modifyTask.classList.add("taskBtns")
  modifyTask.setAttribute("id", "modifyBtn")
  modifyTask.addEventListener('click', openTask);

  const newName = document.getElementById('tname')
  const newDesc = document.getElementById('tdesc')
  const newPriority = document.getElementById('tpty')
  const newDueDate = document.getElementById('ddate')

  newName.value = ""
  newDesc.value = ""
  newPriority.value = ""
  newDueDate.value = ""

  modifyTask.addEventListener('click', openTask)
  closeTask();
}

export function removeTask(e) {
  const parent = e.target.parentElement.parentElement
  const taskName = e.target.parentElement.parentElement.firstChild.textContent;
  for (let i = 0; i < Tasks.length; i++) {
    if (Tasks[i].name == taskName) {
      Tasks.splice(i, 1);
    }
  }
  parent.remove();

}

export function openTask(e) {
  const taskName = e.target.parentElement.parentElement.firstChild.firstChild.textContent;
    for (let i = 0; i < Tasks.length; i++) {
      if (Tasks[i].name == taskName) {
        const modal2 = document.querySelector(".modal2")
        modal2.classList.add("active")
        const overlay = document.querySelector('.overlay')
        overlay.classList.add("active")
        overlay.addEventListener('click', closeModifyTaskModal)
      }
    }


}

export function closeModifyTaskModal() {
  const overlay = document.querySelector('.overlay')
  overlay.classList.remove("active")

  const modal2 = document.querySelector(".modal2")
  modal2.classList.remove("active")
}

export const addButton = document.getElementById("addButton")
addButton.addEventListener('click', getTaskFromInput)


