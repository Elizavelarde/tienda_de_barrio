let form_registro = document.getElementById("form_registro");

let nombre = form_registro.nombre;
let apellidos = form_registro.apellidos;
let cedula = form_registro.cedula;
let direccion = form_registro.direccion;
let email = form_registro.email;
let celular = form_registro.celular;
let telefono = form_registro.telefono;
let contrasena1 = form_registro.contrasena1;
let vercontrasena = form_registro.vercontrasena;

function validar_registro(e){

  if (nombre.value.trim().length==""){
    document.getElementById("error_nombre").innerText="Debes escribir tu nombre";
    form_registro.focus();
    return false;
  } 
}