// Get buttons
const loginBtn = document.getElementById("login");
const logoutBtn = document.getElementById("logout");
const changeBtn = document.getElementById("change");

// Functions
function login() {
    const status = document.getElementById("status");
    status.innerText = "Online";
    status.className = "online";
}

function logout() {
    const status = document.getElementById("status");
    status.innerText = "Offline";
    status.className = "offline";
}

function changeCourse() {
    const course = document.getElementById("course");
    course.innerText = "Data Management";
}

// Add event listeners
loginBtn.addEventListener("click", login);
logoutBtn.addEventListener("click", logout);
changeBtn.addEventListener("click", changeCourse);