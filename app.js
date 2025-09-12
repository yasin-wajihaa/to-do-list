const showBtn = document.getElementById("addBtn");
const inputDiv = document.getElementById("inputContainer");

showBtn.addEventListener("click", function() {
    inputDiv.style.display = "block";
    showBtn.style.display = "none";
});

const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

function addTask() {
    const text = taskInput.value.trim();
    if (!text) return;

    const li = document.createElement("li");
    li.textContent = text;
    taskList.appendChild(li);

    inputDiv.style.display = "None";
    showBtn.style.display = "block";

    taskInput.value = "";
    taskInput.focus();
}

addTaskButton.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") addTask();
});


// li.innerHTML = '<input type="checkbox"> <span>taskInput</span> <button>x</button>';