document.getElementById("inner").innerText = "My First Javascript";

function myFunction() {
  document.getElementById("change").innerHTML = "Paragraph Changed.";
}

let x = 20;
let y = 30;
let z = x + y;
const fname = "Ravina";
document.getElementById("age").innerHTML = fname + " is " + x + " years old.";

document.getElementById("no").innerHTML = "The value of x is " + x;

document.getElementById("noo").innerHTML = "the value of z is" + z;

const cars = ["Tesla", "Thar", "Fortuner"];
cars[0] = "Scorpio";
cars.push("Audi");
document.getElementById("cars").innerHTML = cars;

let text = "123456789";
let min = Math.min(...text);
let max = Math.max(...text);
document.getElementById("math").innerHTML =
  "Minimum is: " + min + "<br>Maximum is: " + max;

function vote() {
  let votebale;
  let age = Number(document.getElementById("voting").value);
  if (isNaN(age)) {
    voteable = "Input is not a number";
  } else {
    voteable = age < 18 ? "Too young" : "Old enough";
  }
  document.getElementById("votes").innerHTML = voteable + " to vote";
}

let age = 10;
let country = "INDIA";
let texts = "You can Not drive";
if ((country = "INDIA" && age >= 16)) {
  texts = "You can drive!";
}
document.getElementById("drive").innerHTML = texts;

const hour = new Date().getHours();
let greeting;
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
document.getElementById("time").innerHTML = greeting;

let tech;
if (Math.random() < 0.5) {
  tech = "<a href='https://www.hardkore.tech/'> Visit Hardkore Tech</a>";
} else {
  tech = "<a href='https://wwf.org'>Visit WWF</a>";
}
document.getElementById("site").innerHTML = tech;

let day;
let date = new Date().getDay();
switch (date) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
}
document.getElementById("days").innerHTML = "Today is " + day;

let lop = "";
for (let i = 0; i < 5; i++) {
  lop += "The number is " + i + "<br>";
}
document.getElementById("loop").innerHTML = lop;

let cont = "";
loop1: for (let j = 1; j < 5; j++) {
  loop2: for (let i = 1; i < 5; i++) {
    if (i === 3) {
      continue loop1;
    }
    cont += i + "<br>";
  }
}
document.getElementById("continue").innerHTML = cont;

document.getElementById("image").src = "landscape.jpg";

document.getElementById("dite").innerHTML = "Date : " + Date();

function myMove() {
  let id = null;
  const elem = document.getElementById("animate");
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + "px";
      elem.style.left = pos + "px";
    }
  }
}

const box = document.getElementById("box");
box.addEventListener("mouseover", function () {
  box.innerHTML = "Mouse is over me!";
});
box.addEventListener("mouseout", function () {
  box.innerHTML = "Mouse is out!";
});

let myInterval;
let count = 0;
const btnStart = document.getElementById("start");
const btnStop = document.getElementById("stop");
btnStart.addEventListener("click", function () {
  myInterval = setInterval(counter, 1000);
});
btnStop.addEventListener("click", function () {
  clearInterval(myInterval);
});
function counter() {
  count++;
  document.getElementById("counter").innerHTML = count;
}

function upperCase() {
  const x = document.getElementById("dname");
  x.value = x.value.toUpperCase();
}

let tasks = [];
function displayTasks() {
  let html = "";
  for (let i = 0; i < tasks.length; i++) {
    html +=
      "<li>" +
      tasks[i] +
      "<button onclick='removeTask(" +
      i +
      ")';> x </button> </li>";
  }
  document.getElementById("list").innerHTML = html;
}
function addTask() {
  let taskInput = document.getElementById("task");
  let text = taskInput.value;
  if (text === "") {
    return;
  }
  tasks.push(text);
  taskInput.value = "";
  saveTasks();
  displayTasks();
}
function removeTask(i) {
  tasks.splice(i, 1);
  saveTasks();
  displayTasks();
}
function clearAll() {
  tasks = [];
  saveTasks();
  displayTasks();
}
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
function loadTasks() {
  let saved = localStorage.getItem("tasks");
  if (saved !== null) {
    tasks = JSON.parse(saved);
  }
}
loadTasks();
displayTasks();
