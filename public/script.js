async function loadTasks() {

const res = await fetch("/tasks");
const tasks = await res.json();

const list = document.getElementById("taskList");
list.innerHTML = "";

tasks.forEach(task => {

const li = document.createElement("li");
li.textContent = task;
list.appendChild(li);

});

}

async function addTask() {

const task = document.getElementById("taskInput").value;

await fetch("/tasks", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({ task })
});

document.getElementById("taskInput").value = "";

loadTasks();

}

loadTasks();