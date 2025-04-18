const container = document.querySelector("#toggleMode");
const btn = document.getElementById("btnToggleMode");
const html = document.querySelector("html");

const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");
const userPrefersDark = localStorage.getItem("theme") === "dark" && matchMedia.matches;
const userPrefersThemeLight = localStorage.getItem("theme") === "light";


const addDarkMode = () => {
    container.classList.remove("animatedToLight");
    container.classList.add("animatedToDark");
    html.classList.add("dark");
    localStorage.setItem("theme", "dark");
}

const addLightMode = () => {
    container.classList.remove("animatedToDark");
    container.classList.add("animatedToLight");
    html.classList.remove("dark");
    localStorage.setItem("theme", "light");
}

btn.addEventListener("click", () => {
    if (html.classList.contains("dark")) {
        addLightMode();
        return;
    }

    addDarkMode();
});

matchMedia.addEventListener("change", (e) => {
    if (e.matches) {
        addDarkMode();
        return;
    }

    addLightMode();
});