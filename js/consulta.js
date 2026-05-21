// SIDEBAR

const toggleBtn = document.getElementById("toggleBtn");

const sidebar = document.getElementById("sidebar");

const logoSidebar = document.getElementById("logoSidebar");

toggleBtn.addEventListener("click", () => {

    sidebar.classList.toggle("hide");

    // CAMBIAR LOGO

    if(sidebar.classList.contains("hide")){

        logoSidebar.src = "assets/escudo.png";

    }else{

        logoSidebar.src = "assets/logo.png";

    }

});