const form = document.getElementById("loginForm");

const mostrarPass =
document.getElementById("mostrarPass");

const password =
document.getElementById("password");

mostrarPass.addEventListener("change",()=>{

password.type =
mostrarPass.checked
? "text"
: "password";

});

form.addEventListener("submit",(e)=>{

e.preventDefault();

const tipo =
document.getElementById("tipoDoc").value;

const doc =
document.getElementById("documento").value;

const pass =
password.value;

if(
tipo==="DNI" &&
doc==="12345678" &&
pass==="admin123"
){

const modal =
new bootstrap.Modal(
document.getElementById("successModal")
);

modal.show();

setTimeout(()=>{

window.location.href="dashboard.html";

},2500);

}
else{

const errorModal =
new bootstrap.Modal(
document.getElementById("errorModal")
);

errorModal.show();

}

});