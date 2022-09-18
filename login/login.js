const inputs = document.querySelectorAll("input");

inputs.forEach((el) => {
  const label = el.nextElementSibling;
  el.addEventListener("focus", () => {
    label.classList.add("active");
    el.setAttribute("style", "border: 2px solid #6747c7");
  });
  el.addEventListener("blur", () => {
    if (el.value == "") {
      label.classList.remove("active");
      el.setAttribute("style", "border: 1px solid #00000030");
    }
  });
});

const form = document.querySelector("form");

const email = document.querySelector(".email");
const password = document.querySelector(".password");

const ValidateEmail = () => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
    return true;
  }
  return false;
};

const eye = document.querySelector(".eye-icon");
eye.addEventListener("click", () => {
  if (eye.classList.contains("fa-eye")) {
    eye.classList.remove("fa-eye");
    eye.classList.add("fa-eye-slash");
    password.type = "text";
  } else {
    eye.classList.add("fa-eye");
    eye.classList.remove("fa-eye-slash");
    password.type = "password";
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (password.value == "") {
    const label = password.nextElementSibling;
    password.style.borderColor = "#fc5185";
    label.classList.add("invalid");
    password.parentElement.classList.add("animate-err");
    password.parentElement.addEventListener("animationend", () => {
      password.parentElement.classList.remove("animate-err");
    });
    return false;
  }
  if (!ValidateEmail()) {
    const label = email.nextElementSibling;
    email.style.borderColor = "#fc5185";
    label.classList.add("invalid");
    email.parentElement.classList.add("animate-err");
    email.parentElement.addEventListener("animationend", () => {
      email.parentElement.classList.remove("animate-err");
    });
    return false;
  }
  window.location = "/";
});
