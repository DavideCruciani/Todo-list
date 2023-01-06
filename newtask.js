export { createTaskBtn, createTaskModal, closeTask }

const createTaskBtn = document.getElementById("create-task-button")

function createTaskModal() {

  const overlay = document.querySelector(".overlay")
  overlay.classList.add("active")

  const modal = document.querySelector(".modal")
  modal.classList.add("active")

  overlay.addEventListener('click', closeTask)
}

createTaskBtn.addEventListener('click', createTaskModal)

function closeTask() {
  const overlay = document.querySelector('.overlay')
  overlay.classList.remove("active")
  const modal = document.querySelector('.modal')
  modal.classList.remove("active")
  const missMatch = document.querySelector('#miss')
  missMatch.textContent = ""
  const newName = document.getElementById('tname')
  const newDesc = document.getElementById('tdesc')
  const newPriority = document.getElementById('tpty')
  const newDueDate = document.getElementById('ddate')
  
  newName.value = ""
  newDesc.value = ""
  newPriority.value = ""
  newDueDate.value = ""
}