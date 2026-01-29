// Loader
let percent = 0;
const loader = document.getElementById("loader");
const percentText = document.getElementById("loaderPercent");

const interval = setInterval(() => {
  percent += Math.random() * 20;
  if (percent >= 100) {
    percent = 100;
    clearInterval(interval);
    setTimeout(() => loader.style.display = "none", 400);
  }
  percentText.textContent = Math.floor(percent) + "%";
}, 150);

// Theme toggle
document.getElementById("themeToggle").onclick = () => {
  const body = document.body;
  body.dataset.theme = body.dataset.theme === "dark" ? "light" : "dark";
};

// Language toggle (EN / AR)
document.getElementById("langToggle").onclick = () => {
  const html = document.documentElement;
  const body = document.body;

  if (body.dataset.lang === "en") {
    body.dataset.lang = "ar";
    html.dir = "rtl";
    html.lang = "ar";
  } else {
    body.dataset.lang = "en";
    html.dir = "ltr";
    html.lang = "en";
  }
};

// Skill bars animation
const skills = document.querySelectorAll(".skill");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const percent = entry.target.dataset.percent;
      entry.target.querySelector(".fill").style.width = percent + "%";
    }
  });
}, { threshold: 0.5 });

skills.forEach(skill => observer.observe(skill));

// Stats counter
document.querySelectorAll("[data-count]").forEach(el => {
  const target = +el.dataset.count;
  let current = 0;
  const step = target / 60;

  const count = () => {
    current += step;
    if (current < target) {
      el.textContent = Math.floor(current);
      requestAnimationFrame(count);
    } else {
      el.textContent = target;
    }
  };

  observer.observe(el);
  observer.callback = () => count();
});

// Highlight current page in navbar
const current = location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".nav-link").forEach(link => {
  const href = link.getAttribute("href");
  if (href === current) link.classList.add("active");
});
