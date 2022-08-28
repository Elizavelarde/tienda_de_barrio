function limpiarErrores(){
  var errores = document.getElementsByClassName("error");
  for(var i = 0; i < errores.length; i++){
    errores[i].innerHTML = "";
  }
}

let form_registro = document.getElementById("form_registro");
let nombre = form_registro.nombre;
let apellidos = form_registro.apellidos;
let cedula = form_registro.cedula;
let direccion = form_registro.direccion;
let email = form_registro.email;
let telefono = form_registro.telefono;
let contrasena1 = form_registro.contrasena1;
let vercontrasena = form_registro.vercontrasena;

function validar_registro(e){
  limpiarErrores();

  if (nombre.value.trim().length==""){
    document.getElementById("error_nombre").innerText="Debes escribir tu nombre";
    form_registro.focus();
    return false;
  } else if (apellidos.value.trim().length=="") {
    document.getElementById("error_apellidos").innerText="Debes escribir apellido";
    return false;
  } else if (cedula.value.trim().length=="") {
    document.getElementById("error_ncedula").innerText="Escribe tu cédula";
    return false;
  }   else if (direccion.value.trim().length=="") {
    document.getElementById("error_ndireccion").innerText="Escribe tu dirección";
    return false;
  } 
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.value.trim().length=="") {
    document.getElementById("error_email").innerText="Escribe tu dirección de correo";
    return false;
  } if (!re.test(form_registro.email.value)) {
    document.getElementById("error_email").innerText="Correo incorrecto";
    return false;
} 
if (telefono.value.trim().length=="") {
 document.getElementById("error_ntelefono").innerText="Escribe número de celular o fijo"; 
 return false;
}
if (contrasena1.value.trim().length=="") {
  document.getElementById("error_contrasena1").innerText="Debes poner una contraseña"
  return false;
} else if (contrasena1.value.trim().length < 5) {
  document.getElementById("error_contrasena1").innerText="Escribe una contraseña con mínio 5 caracteres";
  return false;
} else if (vercontrasena.value.trim().length=="") {
  document.getElementById("error_vercontrasena").innerText="Repite tu contraseña";
  return false;
} else if (contrasena1.value != vercontrasena.value) {
  document.getElementById("error_vercontrasena").innerText="Contraseña incorrecta";
  return false;
} 
}