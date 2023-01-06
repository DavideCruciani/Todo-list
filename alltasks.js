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

export const getTaskFromInput = (event) => {
  event.preventDefault();
  const tname = document.getElementById('tname')
  const tdesc = document.getElementById('tdesc')
  const tpty = document.getElementById('tpty')
  const ddate = document.getElementById('ddate')
  if (tname.value !== "" && tdesc.value !== "" && tpty.value !== "" && ddate.value !== "" && Tasks.find(task => task.name === tname.value) === undefined) {
  const newName = document.getElementById('tname').value
  const newDesc = document.getElementById('tdesc').value
  const newPriority = document.getElementById('tpty').value
  const newDueDate = document.getElementById('ddate').value
  addTask(newName, newDesc, newPriority, newDueDate);
  } else if (Tasks.find(task => task.name === tname.value)) {
    const missMatch = document.querySelector('#miss')
    missMatch.textContent = "You already have a Task with this name"
    return
  }
}

export function TaskCreator(task) {
  const taskCnt = document.createElement('div');
  taskCnt.classList.add("task");
  if (task.priority == "Low") {
    taskCnt.classList.add("low")
  } else if (task.priority == "Medium") {
    taskCnt.classList.add("medium")
  } else {
    taskCnt.classList.add("high")
  }
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
  const info = document.createElement('button');
  taskCntDivider2.appendChild(info);
  info.innerText = "Info";
  info.classList.add("taskBtns")
  info.setAttribute("id", "infoBtn")
  info.addEventListener("click", infoModal)

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

export function infoModal(event) {
  const taskName = event.target.parentElement.parentElement.firstChild.firstChild.textContent;
  const task = Tasks.find(task => task.name === taskName);
  // Add 'active' class to overlay and modal2 elements
  const overlay3 = document.querySelector(".overlay3")
  const modal3 = document.querySelector(".modal3")
  overlay3.classList.add("active");
  modal3.classList.add("active");

  // Set input values to the task values

  const tname3 = document.getElementById('tname3')
  const tdesc3 = document.getElementById('tdesc3')
  const tpty3 = document.getElementById('tpty3')
  const ddate3 = document.getElementById('ddate3')

  tname3.textContent = task.name;
  tdesc3.textContent = task.description;
  tpty3.textContent = task.priority;
  ddate3.textContent = task.dueDate;

  const addButton3 = document.querySelector("#addButton3")
  addButton3.addEventListener("click", closeInfoModal)

}

export function closeInfoModal() {
  const overlay3 = document.querySelector('.overlay3')
  overlay3.classList.remove("active")
  const modal3 = document.querySelector('.modal3')
  modal3.classList.remove("active")
}

export function removeTask(e) {
  const parent = e.target.parentElement.parentElement
  const taskName = e.target.parentElement.parentElement.firstChild.firstChild.textContent;
  for (let i = 0; i < Tasks.length; i++) {
    if (Tasks[i].name == taskName) {
      Tasks.splice(i, 1);
    }
  }
  parent.remove();

}

export function openTask(event) {
  event.preventDefault();
  const taskName = event.target.parentElement.parentElement.firstChild.firstChild.textContent;
  const parent = event.target.parentElement.parentElement;
  const task = Tasks.find(task => task.name === taskName);

  // Add 'active' class to overlay and modal2 elements
  const overlay2 = document.querySelector(".overlay2")
  const modal2 = document.querySelector(".modal2")
  overlay2.classList.add("active");
  modal2.classList.add("active");

  // Set input values to the task values

  const tname2 = document.getElementById('tname2')
  const tdesc2 = document.getElementById('tdesc2')
  const tpty2 = document.getElementById('tpty2')
  const ddate2 = document.getElementById('ddate2')
  const verify = task.name;
  
  tname2.value = task.name;
  tdesc2.value = task.description;
  tpty2.value = task.priority;
  ddate2.value = task.dueDate;

  const addButton2 = document.querySelector("#addButton2")
  addButton2.addEventListener("click", removeOldTask(parent, verify))
  addButton2.addEventListener("click", modifyTaskFromInput)
}

export function removeOldTask(parent, verify) {
  for (let i = 0; i < Tasks.length; i++) {
    if (Tasks[i].name == verify) {
      Tasks.splice(i, 1);
    }
  }
  parent.remove();
}

export const modifyTaskFromInput = (event) => {
  event.preventDefault();
  const tname2 = document.getElementById('tname2')
  const tdesc2 = document.getElementById('tdesc2')
  const tpty2 = document.getElementById('tpty2')
  const ddate2 = document.getElementById('ddate2')
  if (tname2.value !== "" && tdesc2.value !== "" && tpty2.value !== "" && ddate2.value !== "" && Tasks.find(task => task.name === tname2.value) === undefined) {
  const newName = document.getElementById('tname2').value
  const newDesc = document.getElementById('tdesc2').value
  const newPriority = document.getElementById('tpty2').value
  const newDueDate = document.getElementById('ddate2').value
  addTask(newName, newDesc, newPriority, newDueDate);
  const overlay2 = document.querySelector(".overlay2")
  const modal2 = document.querySelector(".modal2")
  overlay2.classList.remove("active");
  modal2.classList.remove("active");
  } else if (Tasks.find(task => task.name === tname2.value)) {
    const missMatch2 = document.querySelector('#miss2')
    missMatch2.textContent = "You already have a Task with this name"
    return
  }
}

export const addButton = document.getElementById("addButton")
addButton.addEventListener('click', getTaskFromInput)


