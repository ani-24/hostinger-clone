const input = document.querySelector(".search-domain");
const inputContainer = input.parentElement;
const searchBtn = input.nextElementSibling;

input.addEventListener("input", () => {
  if (input.value !== "") {
    inputContainer.style.border = "1px solid #d63163";
    searchBtn.style.background = "#d63163";
    searchBtn.classList.remove("cursor-not-allowed", "pointer-events-none");
    searchBtn.classList.add("cursor-pointer", "pointer-events-auto");
  } else {
    inputContainer.style.border = "1px solid transparent";
    searchBtn.style.background = "#6b7280";
    searchBtn.classList.remove("cursor-pointer", "pointer-events-auto");
    searchBtn.classList.add("cursor-not-allowed", "pointer-events-none");
  }
});

// Counter

const addCommas = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const counterSpan = document.querySelector(".counter");
let counter = 1273000;
const final = 1278620;

const count = () => {
  if (counter <= final) {
    counterSpan.innerText = addCommas(counter);
    counter += 20;
    setTimeout(count, 1);
  }
};

setTimeout(count, 1750);

document.addEventListener("DOMContentLoaded", () => {
  counterSpan.innerHTML = addCommas(1000000);
});

// Animate on scroll

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.filter = "blur(0)";
      }
    });
  },
  { threshold: 0.7 }
);

const blurredOut = document.querySelectorAll(".blurred-out");
blurredOut.forEach((el) => observer.observe(el));

// Language

const language = document.querySelector(".language");
const languageListContainer = document.querySelector(
  ".language-list-container"
);
const listClose = document.querySelector(".list-close");

language.addEventListener("click", () => {
  if (document.body.classList.contains("h-screen")) {
    document.body.classList.remove("h-screen", "overflow-hidden");
    languageListContainer.classList.add("hidden");
  } else {
    document.body.classList.add("h-screen", "overflow-hidden");
    languageListContainer.classList.remove("hidden");
    window.scrollTo({ top: 0 });
  }
});

listClose.addEventListener("click", () => {
  document.body.classList.remove("h-screen", "overflow-hidden");
  languageListContainer.classList.add("hidden");
});

// Search Language

const searchInput = document.querySelector(".search-language");
const languageList = document.querySelector(".language-list");

const languages = document.querySelectorAll(".language-list > div");

searchInput.addEventListener("input", () => {
  languages.forEach((el) => {
    el.classList.remove("pointer-events-auto", "opacity-100");
    el.classList.add("pointer-events-none", "opacity-30");
    if (el.innerText.toLowerCase().includes(searchInput.value.toLowerCase())) {
      el.classList.remove("pointer-events-none", "opacity-30");
      el.classList.add("pointer-events-auto", "opacity-100");
    }
  });
});

// Dropdown

const listItems = document.querySelectorAll(".nav-item");

listItems.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    const dropdown = el.nextElementSibling;
    dropdown.setAttribute("style", "opacity: 1; pointer-events: all");
  });
  el.parentElement.addEventListener("mouseleave", () => {
    const dropdown = el.nextElementSibling;
    dropdown.setAttribute("style", "opacity: 0; pointer-events: none");
  });
});

// Sidenav

const hamburger = document.querySelector(".hamburger");
const sidenav = document.querySelector(".sidenav");

const closeSidenav = document.querySelector(".close-sidenav");

hamburger.addEventListener("click", () => {
  sidenav.classList.toggle("-right-full");
});

closeSidenav.addEventListener("click", () => {
  sidenav.classList.add("-right-full");
});

const sidenavItems = document.querySelectorAll(".sidenav-item");

sidenavItems.forEach((item) => {
  item.addEventListener("click", () => {
    const dropdown = item.querySelector(".sidenav-dropdown");
    if (dropdown.classList.contains("hide")) {
      dropdown.classList.remove("hide");
      dropdown.style.height = "100%";
    } else {
      dropdown.style.height = 0;
      dropdown.classList.add("hide");
    }
  });
});
