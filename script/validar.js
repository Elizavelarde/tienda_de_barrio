function limpiarErrores(){
    var errores = document.getElementsByClassName("error");
    for(var i = 0; i < errores.length; i++){
      errores[i].innerHTML = "";
    }
  }

let formulario = document.getElementById("form_login");
let usuario = formulario.usuario;
let contrasena= formulario.contrasena; 

function validar(e){
 limpiarErrores();

  if (usuario.value.trim().length ==0){
  document.getElementById("error_usuario").innerText="Campo obligatorio";
        formulario.focus();
        return false;
 } else if (contrasena.value.trim().length==0) {
  document.getElementById("error_contrasena").innerText="Contraseña requerida";
  return false;
 } else if (contrasena.value.trim().length < 5) {
  document.getElementById("error_contrasena").innerText="Mínimo 5 caracteres";
  return false;
 }

}






// formulario.addEventListener("submit", validar);