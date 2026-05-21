const fecha = new Date();

document.getElementById("fecha").innerHTML = fecha.toLocaleString(
    "es-PE",
    {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    }
);

const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", () => {

    sidebar.classList.toggle("show");

});

document.addEventListener("click", (e) => {

    const isMobile = window.innerWidth < 992;

    if (
        isMobile &&
        !sidebar.contains(e.target) &&
        !menuBtn.contains(e.target) &&
        sidebar.classList.contains("show")
    ) {

        sidebar.classList.remove("show");

    }

});

window.addEventListener("resize", () => {

    if (window.innerWidth >= 992) {

        sidebar.classList.remove("show");

    }

});