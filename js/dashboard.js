const fecha = new Date();
document.getElementById("fecha").innerHTML = fecha.toLocaleString();

const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("show");
});