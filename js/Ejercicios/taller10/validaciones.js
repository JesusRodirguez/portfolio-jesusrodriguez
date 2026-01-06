const form = document.querySelector("form");

const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const password = document.getElementById("password");
const confirmar = document.getElementById("confirmar");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let valido = true;

  // LIMPIAR ERRORES
  limpiarErrores();

  // NOMBRE
  if (nombre.value.trim().length < 3) {
    mostrarError(nombre, "El nombre debe tener al menos 3 caracteres");
    valido = false;
  }

  // CORREO
  if (!validarEmail(correo.value)) {
    mostrarError(correo, "Correo electrónico inválido");
    valido = false;
  }

  // CONTRASEÑA
  if (password.value.length < 8) {
    mostrarError(password, "La contraseña debe tener mínimo 8 caracteres");
    valido = false;
  }

  // CONFIRMAR CONTRASEÑA
  if (password.value !== confirmar.value) {
    mostrarError(confirmar, "Las contraseñas no coinciden");
    valido = false;
  }

  if (valido) {
    alert(" Formulario válido, enviando...");
    form.reset();
  }
});

// FUNCIONES
function mostrarError(input, mensaje) {
  input.classList.add("error");

  const msg = document.createElement("small");
  msg.innerText = mensaje;
  msg.classList.add("error-text");

  input.parentElement.appendChild(msg);
}

function limpiarErrores() {
  document.querySelectorAll(".error").forEach(el => el.classList.remove("error"));
  document.querySelectorAll(".error-text").forEach(el => el.remove());
}

function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
