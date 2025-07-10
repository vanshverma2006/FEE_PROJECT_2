const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});
// function toggleMode() {
//   document.body.classList.toggle("dark-mode");
// }
function setMode(mode) {
  if (mode === 'dark') {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
  localStorage.setItem('theme', mode);
}

window.addEventListener('DOMContentLoaded', () => {
  const savedMode = localStorage.getItem('theme') || 'light';
  setMode(savedMode);
  const themeSelect = document.querySelector('.mode-toggle');
  if (themeSelect) {
    themeSelect.value = savedMode;
  }
});