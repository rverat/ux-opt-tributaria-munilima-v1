function togglePassword(id){

const input =
document.getElementById(id);

input.type =
input.type === "password"
? "text"
: "password";

}

const registroForm =
document.getElementById("registroForm");

registroForm.addEventListener("submit",(e)=>{

e.preventDefault();

const pass =
document.getElementById("password").value;

const confirm =
document.getElementById("confirmPassword").value;

if(pass !== confirm){

alert("Las contraseñas no coinciden");

return;

}

const modal =
new bootstrap.Modal(
document.getElementById("successModal")
);

modal.show();

});