const icon = document.querySelector("#icon");
const page = document.querySelector(".fullpage");
const body = document.querySelector(".container");

icon.addEventListener("click", () => {
    page.style.display = "block";
    body.style.overflow = 'hidden';
})
