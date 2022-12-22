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
}