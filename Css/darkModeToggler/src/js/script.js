const animetedFloat = document.querySelector("#animetedFloat");
const btn = document.getElementById("btnToggleMode");
const html = document.querySelector("html");


btn.addEventListener("click", () => {
    if (html.classList.contains("dark")) {
        btn.classList.remove("animatedToDark");
        btn.classList.add("animatedToLight");
        html.classList.remove("dark");
    } else {
        btn.classList.remove("animatedToLight");
        btn.classList.add("animatedToDark");
        html.classList.add("dark");
    }
})