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
setupTodoList();

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

function setupMotivationQuote() {
  let motivationQuote = document.querySelector(".motivation-2 h2");
  let motivationAnthor = document.querySelector(".motivation-3 h2");
  async function fetchQuote() {
    let response = await fetch("https://api.quotable.io/random");
    data = await response.json();
    motivationQuote.innerHTML = data.content;
    motivationAnthor.innerHTML = data.authorSlug;
  }
  fetchQuote();
}
setupMotivationQuote();

function setupPomoTimer() {
  let totalSeconds = 25 * 60;
  let timeInterval = null;
  let isWorkSession = true;

  let timer = document.querySelector(".pomo-timer h2");
  let startbtn = document.querySelector(".start-timer");
  let pausebtn = document.querySelector(".pause-timer");
  let resetbtn = document.querySelector(".reset-timer");
  let wordAndBreak = document.querySelector('.pomo-timer h3')

  function upDateTime() {
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    let timeSet = `${String(minutes).padStart("2", "0")}:${String(seconds).padStart("2", "0")}`;
    timer.innerHTML = timeSet;
  }

  function startTimer() {
    clearInterval(timeInterval);
    if (isWorkSession) {
      timeInterval = setInterval(() => {
        if (totalSeconds > 0) {
          totalSeconds--;
          upDateTime();
        } else {
          isWorkSession = false;
          clearInterval(timeInterval);
          timer.innerHTML = "5:00";
          wordAndBreak.innerHTML = 'Take a Break';
          totalSeconds = 5 * 60;
        }
      }, 1000);
    } else {
      timeInterval = setInterval(() => {
        if (totalSeconds > 0) {
          totalSeconds--;
          upDateTime();
        } else {
          isWorkSession = true;
          clearInterval(timeInterval);
          timer.innerHTML = "25:00";
          wordAndBreak.innerHTML = 'Work Session';
          totalSeconds = 25 * 60;
        }
      }, 1000);
    }
  }

  function pauseTimer() {
    clearInterval(timeInterval);
  }

  function resetTimer() {
    clearInterval(timeInterval);
    totalSeconds = 25 * 60;
    timer.innerHTML = "25:00";
  }

  startbtn.addEventListener("click", startTimer);
  pausebtn.addEventListener("click", pauseTimer);
  resetbtn.addEventListener("click", resetTimer);
}
setupPomoTimer();

function setupDailyGoals() {
  let goalForm = document.querySelector(".goal-form-panel form");
  let goalInput = document.querySelector(".goal-form-panel form input");

  let goals = [];
  if (localStorage.getItem("dailyGoals")) {
    goals = JSON.parse(localStorage.getItem("dailyGoals"));
  }

  function renderGoals() {
    localStorage.setItem("dailyGoals", JSON.stringify(goals));
    let goalList = document.querySelector(".goal-list");
    let goalListMarkup = "";
    goals.forEach((goal) => {
      goalListMarkup += `<div class="goal-item ${goal.completed ? "goal-done" : ""}">
              <p>${goal.text}</p>
              <div class="goal-actions">
                <button class="complete-goal-button">${goal.completed ? "Completed" : "Not Complete"}</button>
                <button class="delete-goal-button">Delete</button>
              </div>
            </div>`;
    });
    goalList.innerHTML = goalListMarkup;

    let completeButtons = document.querySelectorAll(".complete-goal-button");
    completeButtons.forEach((completeButton, index) => {
      completeButton.addEventListener("click", () => {
        goals[index].completed = !goals[index].completed;
        renderGoals();
      });
    });

    let deleteButtons = document.querySelectorAll(".delete-goal-button");
    deleteButtons.forEach((deleteButton, index) => {
      deleteButton.addEventListener("click", () => {
        goals.splice(index, 1);
        renderGoals();
      });
    });
  }

  renderGoals();

  goalForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!goalInput.value.trim()) return;

    goals.push({ text: goalInput.value, completed: false });
    renderGoals();

    goalInput.value = "";
  });
}
setupDailyGoals();
