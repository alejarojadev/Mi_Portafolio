const nombre = document.getElementById("name");
const correo = document.getElementById("email");
const asunto = document.getElementById("asunto");
const mensaje = document.getElementById("mensaje");
const boton = document.getElementById("boton");

const msnName = document.getElementById("msn_name");
const msnCorreo = document.getElementById("msn_email");
const msnAsunto = document.getElementById("msn_asunto");
const msnMensaje = document.getElementById("msn_mensaje");

const msn = document.getElementById("msn");
const form = document.getElementById("form");

msn.innerHTML = "";
msnName.innerHTML = "";
msnCorreo.innerHTML = "";
msnAsunto.innerHTML = "";
msnMensaje.innerHTML = "";

function validarName() {
  if (nombre.value.length == 0) {
    msnName.style.display = "flex";
    msnName.innerHTML = "El campo Nombre no debe estar vacio.";
  } else {
    if (nombre.value.length > 50) {
      msnName.style.display = "flex";
      msnName.innerHTML =
        "El campo Nombre no debe superar los 50 caracteres, escribe nuevamente su nombre,por favor.";
      nombre.value = "";
    } else {
      msnName.style.display = "none";
    }
  }
}

function validarCorreo() {
  if (correo.value.length == 0) {
    msnCorreo.style.display = "flex";
    msnCorreo.innerHTML = "El campo Email no debe estar vacio.";
  } else {
    let valEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!valEmail.test(correo.value)) {
      msnCorreo.style.display = "flex";
      msnCorreo.innerHTML = "Ingresa un email valido por favor";
      correo.value = "";
    } else {
      msnCorreo.style.display = "none";
    }
  }
}

function validarAsunto() {
  if (asunto.value.length == 0) {
    msnAsunto.style.display = "flex";
    msnAsunto.innerHTML = "El campo Asunto no debe estar vacio.";
  } else {
    if (asunto.value.length > 50) {
      msnAsunto.style.display = "flex";
      msnAsunto.innerHTML =
        "El campo Asunto no debe superar los 50 caracteres, escribe nuevamente el asunto,por favor.";
      asunto.value = "";
    } else {
      msnAsunto.style.display = "none";
    }
  }
}

function validarMensaje() {
  if (mensaje.value.length == 0) {
    msnMensaje.style.display = "flex";
    msnMensaje.innerHTML = "El campo mensaje no debe estar vacio.";
  } else {
    if (mensaje.value.length > 300) {
      msnMensaje.style.display = "flex";
      msnMensaje.innerHTML =
        "El campo mensaje no debe superar los 300 caracteres, escribe nuevamente su mensaje,por favor.";
      mensaje.value = "";
    } else {
      msnMensaje.style.display = "none";
    }
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  msn.style.display = "none";
  if (
    asunto.value.length != 0 &&
    mensaje.value.length != 0 &&
    correo.value.length != 0 &&
    nombre.value.length != 0
  ) {
    msn.style.display = "flex";
    msn.innerHTML = " Gracias, su mensaje fue enviado";
  } else {
    msn.style.display = "flex";
    msn.innerHTML =
      "Por favor verifique que todos los campos esten diligenciados corectamente ";
  }
});
