function setupFeatureNavigation() {
  let featureCards = document.querySelectorAll(".feature-card");
  let featurePages = document.querySelectorAll(".feature-page");
  let closeButtons = document.querySelectorAll(".feature-page .close-button");

  featureCards.forEach((featureCard) => {
    featureCard.addEventListener("click", () => {
      featurePages[featureCard.id].style.display = "block";
    });
  });

  closeButtons.forEach((closeButton) => {
    closeButton.addEventListener("click", () => {
      featurePages[closeButton.id].style.display = "none";
    });
  });
}
setupFeatureNavigation();

function setupTodoList() {
  let taskForm = document.querySelector(".task-form-panel form");
  let taskTitleInput = document.querySelector(".task-form-panel form input");
  let taskDetailsInput = document.querySelector(
    ".task-form-panel form textarea",
  );
  let importantTaskCheckbox = document.querySelector(
    ".task-form-panel form #check",
  );
  let isTaskCompleted = false;

  let tasks = [];
  if (localStorage.getItem("newTask")) {
    tasks = JSON.parse(localStorage.getItem("newTask"));
  } else {
    console.log("Task list is empty");
  }

  function renderTasks() {
    localStorage.setItem("newTask", JSON.stringify(tasks));
    let taskList = document.querySelector(".task-list");
    let taskListMarkup = "";
    tasks.forEach((task) => {
      taskListMarkup += `<div class="task-item">
              <div class="task-content">
                <h5>${task.task} <span class=${task.imp}>important </span></h5>
                <details>
                  <summary>More details</summary>
                  <p>${task.details}</p>
                </details>
              </div>
              <div class="task-actions">
                <button class="complete-task-button">${task.completeTask ? "Completed" : "Not Complete"}</button>
                <button class="delete-task-button">Delete</button>
              </div>
            </div>`;
    });
    taskList.innerHTML = taskListMarkup;

    let completeButtons = document.querySelectorAll(".complete-task-button");
    completeButtons.forEach((completeButton, index) => {
      completeButton.addEventListener("click", () => {
        if (tasks[index].completeTask === false) {
          tasks[index].completeTask = true;
        } else {
          tasks[index].completeTask = false;
        }
        localStorage.setItem("newTask", JSON.stringify(tasks));
        renderTasks();
      });
    });
    let deleteButtons = document.querySelectorAll(".delete-task-button");
    deleteButtons.forEach((deleteButton, index) => {
      deleteButton.addEventListener("click", () => {
        tasks.splice(index, 1);
        localStorage.setItem("newTask", JSON.stringify(tasks));
        renderTasks();
      });
    });
  }

  renderTasks();

  taskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let task = {
      task: `${taskTitleInput.value}`,
      details: `${taskDetailsInput.value}`,
      imp: importantTaskCheckbox.checked,
      completeTask: isTaskCompleted,
    };
    tasks.push(task);

    localStorage.setItem("newTask", JSON.stringify(tasks));
    renderTasks();

    taskTitleInput.value = "";
    taskDetailsInput.value = "";
    importantTaskCheckbox.checked = false;
    isTaskCompleted = false;

    location.reload();
  });
}
// setupTodoList();

function setupDailyPlanner() {
  let dayPlanData = JSON.parse(localStorage.getItem("dayPlanData")) || {};

  let hours = Array.from(
    { length: 18 },
    (_, idx) => `${6 + idx}:00-${7 + idx}:00`,
  );
  let wholeDaySum = "";
  hours.forEach((elem, idx) => {
    wholeDaySum += `<div class="day-planner-time">
            <p>${elem}</p>
            <input id=${idx} type="text" placeholder="..." value=${
              dayPlanData[idx] || ""
            }>
          </div>`;
  });

  let dayPlanner = document.querySelector(".day-planner");

  dayPlanner.innerHTML = wholeDaySum;

  let dayPlannerInput = document.querySelectorAll(".day-planner input");
  dayPlannerInput.forEach((elem) => {
    elem.addEventListener("input", () => {
      dayPlanData[elem.id] = elem.value;
      localStorage.setItem("dayPlanData", JSON.stringify(dayPlanData));
    });
  });
}
setupDailyPlanner();