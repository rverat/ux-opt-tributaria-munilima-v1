// ======================================
// SIDEBAR
// ======================================

const toggleBtn = document.getElementById("toggleBtn");

const sidebar = document.getElementById("sidebar");

const logoSidebar = document.getElementById("logoSidebar");

toggleBtn.addEventListener("click",()=>{

    // MOBILE

    if(window.innerWidth < 992){

        sidebar.classList.toggle("show");

    }

    // DESKTOP

    else{

        sidebar.classList.toggle("hide");

        if(sidebar.classList.contains("hide")){

            logoSidebar.src = "assets/escudo.png";

        }else{

            logoSidebar.src = "assets/logo.png";

        }

    }

});


// CERRAR SIDEBAR MOBILE AL HACER CLICK FUERA

document.addEventListener("click",(e)=>{

    const mobile = window.innerWidth < 992;

    if(
        mobile &&
        !sidebar.contains(e.target) &&
        !toggleBtn.contains(e.target)
    ){

        sidebar.classList.remove("show");

    }

});


// LIMPIAR AL VOLVER A DESKTOP

window.addEventListener("resize",()=>{

    if(window.innerWidth >= 992){

        sidebar.classList.remove("show");

    }

});

// ======================================
// SCROLL SUAVE
// ======================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const destino = document.querySelector(
            this.getAttribute("href")
        );

        destino.scrollIntoView({
            behavior:"smooth"
        });

    });

});


// ======================================
// ROTAR ICONOS ACCORDION
// ======================================

const accordions = document.querySelectorAll(".accordion-button");

accordions.forEach(btn => {

    btn.addEventListener("click", () => {

        setTimeout(() => {

            accordions.forEach(item => {

                item.classList.remove("accordion-active");

            });

            if(!btn.classList.contains("collapsed")){

                btn.classList.add("accordion-active");

            }

        },200);

    });

});


// ======================================
// RESALTAR MENÚ ACTIVO
// ======================================

const currentPage = window.location.pathname
    .split("/")
    .pop();

document.querySelectorAll(".menu li a")
    .forEach(link => {

        const href = link.getAttribute("href");

        if(href === currentPage){

            link.parentElement.classList.add("active");

        }

});


// ======================================
// BOTÓN VOLVER ARRIBA
// ======================================

const btnTop = document.createElement("button");

btnTop.innerHTML = `
    <i class="bi bi-arrow-up"></i>
`;

btnTop.className = "btn-top";

document.body.appendChild(btnTop);


// ESTILO

btnTop.style.position = "fixed";
btnTop.style.bottom = "25px";
btnTop.style.right = "25px";
btnTop.style.width = "50px";
btnTop.style.height = "50px";
btnTop.style.borderRadius = "50%";
btnTop.style.border = "none";
btnTop.style.background = "#0b2c5f";
btnTop.style.color = "#fff";
btnTop.style.display = "none";
btnTop.style.zIndex = "999";
btnTop.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";


// MOSTRAR

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        btnTop.style.display = "block";

    }else{

        btnTop.style.display = "none";

    }

});


// SUBIR

btnTop.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});