import { Tasks } from "./alltasks";

export function showWeekTasks() {
  const ShowWeeklyTaskButton = document.getElementById("week-tasks-button")
  ShowWeeklyTaskButton.classList.add("active-nav-button")
  const ShowTodayTaskButton = document.getElementById("today-tasks-button")
  ShowTodayTaskButton.classList.remove("active-nav-button")
  const ShowAllTaskButton = document.getElementById("all-tasks-button")
  ShowAllTaskButton.classList.remove("active-nav-button")
  const savedTasks = localStorage.getItem('tasks');
  Tasks = JSON.parse(savedTasks);
  Tasks.forEach(task => weekTasks(task));
}

function weekTasks(task) {
  const date = new Date();
  let day = date.getDate();
  let week = day + 8;
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  var currentDate = `${year}-0${month}-${day}`;
  let taskday = task.dueDate.slice(-2)
  let taskmonth = task.dueDate.slice(5, -3)
  let taskyear = task.dueDate.slice(0, -6)
  if (month > 9) {
    if (task.dueDate == currentDate || taskyear == year && taskmonth == month && week > taskday && taskday > day || taskyear == year && taskmonth == month && (day + 7) >= taskday > day) {
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
  } else {
  if (task.dueDate == currentDate || taskyear == year && taskmonth == `0${month}` && week > taskday && taskday > day || taskyear == year && taskmonth == month && (day + 7) >= taskday > day) {
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
}