console.log("script.js loaded");

const btn = document.getElementById("themeBtn");
console.log("themeBtn found?", !!btn);

function setTheme(isDark) {
  document.body.classList.toggle("dark", isDark);
  localStorage.setItem("theme", isDark ? "dark" : "light");
  if (btn) btn.textContent = isDark ? "Light mode" : "Dark mode";
}

const saved = localStorage.getItem("theme");
setTheme(saved === "dark");

if (btn) {
  btn.addEventListener("click", () => {
    const isDarkNow = document.body.classList.contains("dark");
    setTheme(!isDarkNow);
  });
}
