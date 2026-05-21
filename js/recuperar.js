const recuperarForm =
document.getElementById("recuperarForm");

recuperarForm.addEventListener("submit",(e)=>{

e.preventDefault();

const modal =
new bootstrap.Modal(
document.getElementById("correoModal")
);

modal.show();

});