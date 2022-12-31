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
        const body = document.querySelector("body")

        const newoverlay = document.createElement("div")
        newoverlay.classList.add("newoverlay")
        newoverlay.classList.add("active")
        body.appendChild(newoverlay)

        const TaskModifyModal = document.createElement("div")
        TaskModifyModal.classList.add("TaskModifyModal")
        body.appendChild(TaskModifyModal)

        const newForm = document.createElement("form")
        TaskModifyModal.appendChild(newForm)

        const newFormTitle = document.createElement("h3")
        newFormTitle.textContent = "Modify This Task"
        newForm.appendChild(newFormTitle)

        const nameInput = document.createElement("input")
        nameInput.setAttribute("type", "text")
        nameInput.setAttribute("id", "tname")
        nameInput.setAttribute("name", "tname")
        nameInput.setAttribute("placeholder", "Name")
        nameInput.value = Tasks[i].name
        newForm.appendChild(nameInput)

        const nameInputLabel = document.createElement("label")
        nameInputLabel.setAttribute("id", "miss")
        nameInputLabel.setAttribute("for", "tname")
        newForm.appendChild(nameInputLabel)

        const descriptionTextArea = document.createElement("textarea")
        descriptionTextArea.setAttribute("id", "tdesc")
        descriptionTextArea.setAttribute("name", "tdesc")
        descriptionTextArea.setAttribute("maxlength", "150")
        descriptionTextArea.setAttribute("placeholder", "Description")
        descriptionTextArea.value = Tasks[i].description
        newForm.appendChild(descriptionTextArea)

        const priorityInput = document.createElement("input")
        priorityInput.setAttribute("type", "text")
        priorityInput.setAttribute("id", "tpty")
        priorityInput.setAttribute("name", "tpty")
        priorityInput.setAttribute("placeholder", "Priority")
        priorityInput.value = Tasks[i].priority
        newForm.appendChild(priorityInput)

        const dueDateInputLabel = document.createElement("label")
        dueDateInputLabel.setAttribute("for", "ddate")
        dueDateInputLabel.textContent = "Due Date"
        newForm.appendChild(dueDateInputLabel)

        const dueDateInput = document.createElement("input")
        dueDateInput.setAttribute("type", "date")
        dueDateInput.setAttribute("id", "ddate")
        dueDateInput.setAttribute("name", "ddate")
        dueDateInput.value = Tasks[i].dueDate
        newForm.appendChild(dueDateInput)
        
        const modifyTaskButton = document.createElement("button")
        modifyTaskButton.textContent = "MODIFY"
        modifyTaskButton.setAttribute("id", "addButton")
        newForm.appendChild(modifyTaskButton)



        console.log(`${Tasks[i].name} ${Tasks[i].description} ${Tasks[i].priority} ${Tasks[i].dueDate}`);
        
        newoverlay.addEventListener('click', closeModifyTaskModal)
      }
    }


}

export function closeModifyTaskModal() {
  const newoverlay = document.querySelector('.newoverlay');
  newoverlay.remove()

  const TaskModifyModal = document.querySelector('.TaskModifyModal');
  TaskModifyModal.remove();
}


export const addButton = document.getElementById("addButton")
addButton.addEventListener('click', getTaskFromInput)


