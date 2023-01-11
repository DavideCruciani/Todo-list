import { Tasks } from "./alltasks";

export function showTodayTasks() {
  const ShowTodayTaskButton = document.getElementById("today-tasks-button")
  ShowTodayTaskButton.classList.add("active-nav-button")
  const ShowWeeklyTaskButton = document.getElementById("week-tasks-button")
  ShowWeeklyTaskButton.classList.remove("active-nav-button")
  const ShowAllTaskButton = document.getElementById("all-tasks-button")
  ShowAllTaskButton.classList.remove("active-nav-button")
  const savedTasks = localStorage.getItem('tasks');
  Tasks = JSON.parse(savedTasks);
  Tasks.forEach(task => todayTasks(task));
}

function todayTasks(task) {
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  var currentDate = `${year}-0${month}-${day}`;
  if (month > 9) {
    var currentDate = `${year}-${month}-${day}`;
  }
  if (task.dueDate == currentDate) {
    let taskDivs = document.getElementsByClassName('task');
    for (let taskDiv of taskDivs) {
      let firstTaskDivs = taskDiv.getElementsByClassName('taskCntDivider');
      for (let firstTaskDiv of firstTaskDivs) {
          let ps = firstTaskDiv.getElementsByTagName('p');
          for (let p of ps) {
              if (p.textContent === task.name) {
                  taskDiv.classList.add("shownTask")
                  break;
              }
          }
      }
    }
  } else {
    let taskDivs = document.getElementsByClassName('task');
  for (let taskDiv of taskDivs) {
    let firstTaskDivs = taskDiv.getElementsByClassName('taskCntDivider');
    for (let firstTaskDiv of firstTaskDivs) {
        let ps = firstTaskDiv.getElementsByTagName('p');
        for (let p of ps) {
            if (p.textContent === task.name) {
              taskDiv.classList.remove("shownTask")
              taskDiv.classList.add("hiddenTask")
              break;
            }
        }
    }
  }
  }
}