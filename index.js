// ----- Typing effect (simple + accessible) -----
const typedStrings = ["Samridhi"];
let tIndex = 0, cIndex = 0;
const typedEl = () => document.querySelector(".typedText");

function type() {
  const el = typedEl();
  if (!el) return;
  const word = typedStrings[tIndex];
  if (cIndex < word.length) {
    el.textContent = word.slice(0, cIndex + 1);
    cIndex++;
    setTimeout(type, 90);
  } else {
    setTimeout(erase, 1300);
  }
}
function erase() {
  const el = typedEl();
  if (!el) return;
  const word = typedStrings[tIndex];
  if (cIndex > 0) {
    el.textContent = word.slice(0, cIndex - 1);
    cIndex--;
    setTimeout(erase, 50);
  } else {
    tIndex = (tIndex + 1) % typedStrings.length;
    setTimeout(type, 300);
  }
}
document.addEventListener("DOMContentLoaded", type);

// ----- Data -----
const education = [
  {
    title: "Bachelor of Computer Applications (BCA)",
    date: "2022 – 2025",
    img: "images/dav logo.png",
    org: "DAV College, Jalandhar",
    link: "https://davjalandhar.com/"
  },
  {
    title: "Shiv Jyoti Public School (12th)",
    date: "2021 – 2022",
    img: "images/school logo.jpg",
    org: "Shiv Jyoti Public School",
    link: "https://www.shivjyotipublicschool.com/aspxpages/Index/HomePage.aspx"
  },
  {
    title: "Shiv Jyoti Public School (10th)",
    date: "2018 – 2019",
    img: "images/school logo.jpg",
    org: "Shiv Jyoti Public School",
    link: "https://www.shivjyotipublicschool.com/aspxpages/Index/HomePage.aspx"
  }
];

const certifications = [
  {
    title: "Full Stack Web Development",
    org: "Udemy",
    date: "July 2025",
    img: "images/udemy.png",
    link: "images/udemy.png"
  },
  {
    title: "Program In Professional Edge",
    org: "NIIT Foundation (Infosys Foundation)",
    date: "January 2025",
    img: "images/NIIT certiification.jpg",
    link: "images/NIIT certiification.jpg"
  },
  {
    title: "AI Agents & The Future of Jobs",
    org: "Capable",
    date: "March 2025",
    img: "images/capable.jpeg",
    link: "images/capable.jpeg"
  },
  {
    title: "HackmManthan 2025",
    issuingorganization: "Eventeye",
    date: "October 2025",
    img: "images/010_Samridhi.jpg",
    link: "images/010_Samridhi.jpg"
  },
  {
    title: "GeeksForGeeks",
    issuingorganization: "Eventeye",
    date: "October 2025",
    img: "images/geeksforgeeks.png",
    link: "images/geeksforgeeks.png"
  },
  {
    title: "GeeksForGeeks",
    issuingorganization: "Eventeye",
    date: "October 2025",
    img: "images/geeks2.png",
    link: "images/geeks2.png"
  },
  {
    title: "Growbinar",
    issuingorganization: "Eventeye",
    date: "October 2025",
    img: "images/growbinar.png",
    link: "images/growbinar.png"
  }
];

const hackathons = [
  {
    title: "Smart India Hackathon (SIH) 2025",
    hours: "36 Hours",
    date: "25–26 September, 2025",
    org: "Ministry of Education, Govt. of India",
    img: "images/SIH2.webp",
    link: "https://youtube.com/shorts/UgknW1UnugA?feature=share"
  },
  {
    title: "HackManthan 2025",
    hours: "24 Hours",
    date: "3–4 October, 2025",
    org: "Eventeye",
    img: "images/eventeye.jpg",
    link: "#"
  }
];

// ✅ Projects Data
const projects = [
  {
    title: "EventElite – Event Management System",
    desc: "A full-stack event management platform where admins can create, manage, and approve college events. It supports student logins, faculty approvals.",
    tech: "Node.js • Express.js • MySQL • HTML • CSS • JavaScript",
    img: "images/eventelite.png",
    logo: "images/event.png",
    video: "https://drive.google.com/file/d/10kDCAQKnYFqjEvtqFlLe11RaMw3n3gmq/view?usp=drive_link",
  },
  {
    title: "Portfolio Website",
    desc: "A personal digital portfolio highlighting my education, achievements, and hackathons with a light gradient UI and smooth animations.",
    tech: "HTML • CSS • JavaScript",
    img: "images/portfolio.png",
    logo: "images/portfolio.png",
    video: "https://youtu.be/BJCPOfq4rOg",
  },
  {
    title: "To-Do List Web App",
    desc: "A dynamic to-do list application built with React.js on CodeSandbox. It allows users to add, edit, and delete tasks with a smooth, responsive interface.",
    tech: "React.js • HTML • CSS • JavaScript",
    img: "images/todo.png",
    logo: "images/todolist.png",
    video: "https://youtu.be/rNEWHPeCkdc",
  },
  {
    title: "Cropora",
    desc: "Cropora is a smart agriculture management system that helps farmers and students monitor crop growth, manage data efficiently, and make informed decisions using modern web technology.",
    tech: "XML • Kotlin • Java",
    img: "images/cropora.png",
    logo: "images/cropora.png",
    video: "https://youtube.com/shorts/UgknW1UnugA?feature=share",
  },
  {
    title: "Simon Game",
    desc: "A fun and interactive memory-based game. The game challenges players to follow and repeat an increasing sequence of colors and sounds, testing memory and focus with smooth animations.",
    tech: "HTML • CSS • Jquery • JavaScript",
    img: "images/todo.png",
    logo: "images/simon.png",
    video: "https://youtu.be/FcwoRPsZ9mc",
  },
  {
    title: "Drum Kit",
    desc: "An interactive virtual drum kit. Each key press triggers realistic drum sounds with smooth visual animations, providing an engaging way to play and experiment with rhythm directly in the browser.",
    tech: "HTML • CSS • Jquery • JavaScript",
    img: "images/todo.png",
    logo: "images/drumkit.png",
    video: "https://youtu.be/hpmkBlVtyhA",
  }
];

// ----- Unified Card Factory -----
function createCard(item) {
  const {
    title, desc, tech, img, logo, org, date, link, live, code, video, hours
  } = item;

  const card = document.createElement("div");
  card.className = "card reveal";

  // Projects
  if (tech || desc || logo) {
    card.innerHTML = `
      <div class="thumb">
        ${img ? `<img src="${img}" alt="${title}">` : ""}
        ${logo ? `<img src="${logo}" class="card-logo" alt="${title} Logo">` : ""}
      </div>
      <h3>${title}</h3>
      ${desc ? `<p class="desc">${desc}</p>` : ""}
      ${tech ? `<p class="meta">${tech}</p>` : ""}
      <div class="btn-row">
        ${video ? `<a class="btn-mini video-btn" href="${video}" target="_blank">Watch Demo</a>` : ""}
      </div>
    `;
  }
  // Hackathons
  // Hackathons
// Hackathons
else if (hours) {
  const metaInfo = `
    ${org ? `<strong>Organized by:</strong> ${org}<br>` : ""}
    ${date ? `<strong>Date:</strong> ${date}<br>` : ""}
    ${hours ? `<strong>Duration:</strong> ${hours}` : ""}
  `;

  card.innerHTML = `
    <div class="thumb">${img ? `<img src="${img}" alt="${title}">` : ""}</div>
    <h3>${title}</h3>
    <p class="meta"><strong>${org || ""}</strong></p>
    <p class="meta">${date || ""}</p>
    <p class="meta">${hours}</p>
    <div class="btn-row">
      <a class="btn-mini" href="#" data-modal="open" data-img="${img}" data-title="${title}" data-meta='${metaInfo.replace(/\n/g, " ")}'>View</a>
    </div>
  `;
}


  // Certifications / Education
  else {
    card.innerHTML = `
      <div class="thumb">${img ? `<img src="${img}" alt="${title}">` : ""}</div>
      <h3>${title}</h3>
      <p class="meta"><strong>${org || item.issuingorganization || ""}</strong></p>
      <p class="meta">${date || ""}</p>
      <div class="btn-row">
        <a class="btn-mini" href="#" data-modal="open" data-img="${link}" data-title="${title}">View</a>
      </div>
    `;
  }

  return card;
}

// ----- Render Sections -----
function renderGrid(containerId, items) {
  const root = document.getElementById(containerId);
  if (!root) return;
  root.innerHTML = "";
  items.forEach(item => root.appendChild(createCard(item)));
}

document.addEventListener("DOMContentLoaded", () => {
  renderGrid("eduContainer", education);
  renderGrid("certContainer", certifications);
  renderGrid("hackContainer", hackathons);
  renderGrid("projectContainer", projects);
});

// ----- Modal -----
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const closeBtn = document.querySelector(".modal .close");

document.addEventListener("click", (e) => {
  const t = e.target.closest("[data-modal='open']");
  if (t) {
    e.preventDefault(); // ✅ Prevent scroll-to-top
     modalImg.src = t.dataset.img || "";
    modalTitle.textContent = t.dataset.title || "";
    modalMeta.innerHTML = t.dataset.meta || ""; // ✅ show hackathon info
    modal.classList.remove("hidden");
  }
  if (e.target === modal || e.target === closeBtn) {
    modal.classList.add("hidden");
  }
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") modal.classList.add("hidden");
});

// ----- Intersection Observer -----
const revealEls = () => document.querySelectorAll(".reveal");
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });
window.addEventListener("DOMContentLoaded", () => revealEls().forEach(el => io.observe(el)));

// ----- Active nav highlighting -----
const sections = [...document.querySelectorAll("section[id]")];
const navLinks = [...document.querySelectorAll(".nav-link")];

const spy = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute("id");
      navLinks.forEach(a => a.classList.toggle("active", a.getAttribute("href") === `#${id}`));
    }
  });
}, { rootMargin: "-55% 0px -40% 0px" });
sections.forEach(s => spy.observe(s));

// ----- Back to top -----
const backTop = document.querySelector(".back-to-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 500) backTop.classList.add("show");
  else backTop.classList.remove("show");
});
backTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

// ----- Mobile nav -----
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.getElementById("navMenu");
navToggle?.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});
document.addEventListener("click", (e) => {
  if (!e.target.closest(".nav") && navMenu?.classList.contains("open")) {
    navMenu.classList.remove("open");
    navToggle?.setAttribute("aria-expanded", "false");
  }
});

// ----- Year -----
document.getElementById("year").textContent = new Date().getFullYear();
