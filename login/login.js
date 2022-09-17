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
