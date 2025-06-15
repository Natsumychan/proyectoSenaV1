document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Inicio de sesión enviado.');
    window.location.href = '../HTML/dashboard-patient.html';
});

function togglePassword() {
    const password = document.getElementById("password");
    password.type = password.type === "password" ? "text" : "password";
}

function cambiarVista(tipo) {
    const titulo = document.getElementById("tituloInicio");
    const btnPaciente = document.getElementById("btnPaciente");
    const btnPersonal = document.getElementById("btnPersonal");

    if (tipo === "paciente") {
      titulo.textContent = "Iniciar sesión como paciente";
      btnPaciente.classList.add("active");
      btnPersonal.classList.remove("active");
    } else {
      titulo.textContent = "Iniciar sesión como personal";
      btnPersonal.classList.add("active");
      btnPaciente.classList.remove("active");
    }
  }
