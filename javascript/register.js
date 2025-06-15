
const alergiaCheckbox = document.getElementById('alergia');
const medicamentoInput = document.getElementById('medicamento');

alergiaCheckbox.addEventListener('change', () => {
    if (alergiaCheckbox.checked) {
        medicamentoInput.disabled = false;
        medicamentoInput.required = true;
        medicamentoInput.focus();
    } else {
        medicamentoInput.disabled = true;
        medicamentoInput.required = false;
        medicamentoInput.value = '';
    }
});

function validarFormulario() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden.');
        return false;
    }

    if (alergiaCheckbox.checked && medicamentoInput.value.trim() === '') {
        alert('Por favor, ingrese el nombre del medicamento al que es alérgico.');
        return false;
    }

    return true; // formulario válido
}
