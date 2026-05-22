// ===============================
// SIDEBAR
// ===============================

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


// CLICK FUERA DEL MENU (MOBILE)

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


// LIMPIAR AL VOLVER A DESKTOP

window.addEventListener("resize",()=>{

    if(window.innerWidth >= 992){

        sidebar.classList.remove("show");

        document.body.classList.remove("menu-open");

    }

});


// ===============================
// ELEMENTOS
// ===============================

const tipoDeclaracion = document.getElementById("tipoDeclaracion");

const camposExtra = document.querySelectorAll(".campo-extra");

const btnBuscar = document.getElementById("btnBuscar");

const resultadoBusqueda = document.getElementById("resultadoBusqueda");

const btnGenerar = document.querySelector(".btn-generar");


// ===============================
// ESTADO INICIAL
// ===============================

btnBuscar.disabled = true;
btnGenerar.disabled = true;


// ===============================
// CAMPOS DINÁMICOS
// ===============================

tipoDeclaracion.addEventListener("change", () => {

    const valor = tipoDeclaracion.value;

    // RESET
    resultadoBusqueda.classList.add("d-none");
    btnGenerar.disabled = true;

    // OCULTAR TODO
    camposExtra.forEach(campo => {
        campo.classList.add("d-none");
    });

    // LIMPIAR CONTENIDO DINÁMICO
    document.querySelectorAll(".campo-dinamico").forEach(e => e.remove());

    // VEHICULAR
    if (valor === "vehiculo") {

        crearCampo(
            "Placa",
            `
            <select class="form-select campo-requerido" id="placa">
                <option value="">Seleccione</option>
                <option>AIB214</option>
                <option>BCD541</option>
            </select>
            `
        );

        crearCampo(
            "Periodo",
            `
            <select class="form-select campo-requerido" id="periodo">
                <option value="">Seleccione</option>
                <option>2024</option>
                <option>2025</option>
            </select>
            `
        );

    }

    // PREDIAL
    if (valor === "predial") {

        crearCampo(
            "Código Predio",
            `
            <input type="text"
                   class="form-control campo-requerido"
                   id="codigoPredio"
                   placeholder="Ingrese código">
            `
        );

        crearCampo(
            "Periodo",
            `
            <select class="form-select campo-requerido" id="periodo">
                <option value="">Seleccione</option>
                <option>2024</option>
                <option>2025</option>
            </select>
            `
        );

    }

    // VALIDAR CAMPOS
    setTimeout(validarFormulario, 100);

});


// ===============================
// CREAR CAMPOS
// ===============================

function crearCampo(label, contenido) {

    const contenedor = document.createElement("div");

    contenedor.className = "col-md-3 campo-dinamico";

    contenedor.innerHTML = `
        <label>${label}</label>
        ${contenido}
    `;

    document.querySelector(".row.align-items-end")
        .insertBefore(
            contenedor,
            btnBuscar.parentElement
        );

}


// ===============================
// VALIDAR FORMULARIO
// ===============================

function validarFormulario() {

    const campos = document.querySelectorAll(".campo-requerido");

    campos.forEach(campo => {

        campo.addEventListener("change", verificarCampos);

        campo.addEventListener("keyup", verificarCampos);

    });

}


function verificarCampos() {

    const campos = document.querySelectorAll(".campo-requerido");

    let completo = true;

    campos.forEach(campo => {

        if (campo.value.trim() === "") {
            completo = false;
        }

    });

    btnBuscar.disabled = !completo;

}


// ===============================
// BUSCAR
// ===============================

btnBuscar.addEventListener("click", () => {

    resultadoBusqueda.classList.remove("d-none");

    // reset selección
    btnGenerar.disabled = true;

});


// ===============================
// SELECCIÓN DE TABLA
// ===============================

document.addEventListener("change", (e) => {

    if (e.target.name === "registro") {

        btnGenerar.disabled = false;

    }

});


// ======================================
// DESCARGAR PDF
// ======================================

const btnDescargarPdf =
    document.getElementById("btnDescargarPdf");

btnDescargarPdf.addEventListener("click", () => {

    // ABRIR PDF EN NUEVA PESTAÑA
    window.open(
        "assets/pdf/declaracion.pdf",
        "_blank"
    );

    // REDIRECCIÓN
    setTimeout(() => {

        window.location.href = "dashboard.html";

    }, 1000);

});