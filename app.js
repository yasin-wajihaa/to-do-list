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

    let li = document.createElement("li");
    
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("taskCheck");

    let span = document.createElement("span");
    span.textContent = text;
    span.classList.add("taskText");

    let delBtn = document.createElement("button");
    delBtn.textContent = "x";
    delBtn.classList.add("deleteBtn");

    checkbox.addEventListener("change", function(){
    if (checkbox.checked) {
        span.classList.add("done");
    } else{
        span.classList.remove("done");
    }
    });

    delBtn.addEventListener("click", function(){
        li.remove();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(delBtn);

    taskList.appendChild(li);

    inputDiv.style.display = "None";
    showBtn.style.display = "block";

    taskInput.value = "";
    // taskInput.focus();

}

addTaskButton.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") addTask();
});