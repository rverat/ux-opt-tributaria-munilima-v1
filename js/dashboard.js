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

        document.body.classList.toggle("menu-open");

    }

    // DESKTOP

    else{

        sidebar.classList.toggle("hide");

        // CAMBIO LOGO

        if(sidebar.classList.contains("hide")){

            logoSidebar.src = "assets/escudo.png";

        }else{

            logoSidebar.src = "assets/logo.png";

        }

    }

});


// CLICK FUERA DEL MENU

document.addEventListener("click",(e)=>{

    if(
        window.innerWidth < 992 &&
        !sidebar.contains(e.target) &&
        !toggleBtn.contains(e.target)
    ){

        sidebar.classList.remove("show");

        document.body.classList.remove("menu-open");

    }

});


// LIMPIAR EN RESIZE

window.addEventListener("resize",()=>{

    if(window.innerWidth >= 992){

        sidebar.classList.remove("show");

        document.body.classList.remove("menu-open");

    }

});