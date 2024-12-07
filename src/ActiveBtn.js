export function setupActiveBtn(btns) {
  btns.forEach((el) => {
    el.addEventListener("click", (event) => {
      btns.forEach((el) => el.classList.remove("active"));
      event.target.classList.add("active");
    });
  });
}
