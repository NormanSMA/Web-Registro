function validarFormulario() {
    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const carrera = document.getElementById('carrera').value.trim();
    const conferencias = document.querySelectorAll('input[name="conferencia"]:checked');

    if (nombre === '' || correo === '' || carrera === '') {
        alert('Por favor, complete todos los campos obligatorios.');
        return false;
    }

    const correoInstitucional = /^[a-zA-Z0-9._%+-]+@uam\.edu\.ni$/;
    if (!correoInstitucional.test(correo)) {
        alert('Ingrese un correo institucional válido (ejemplo@uam.edu.ni).');
        return false;
    }

    if (conferencias.length === 0) {
        alert('Seleccione al menos una conferencia.');
        return false;
    }

    alert('¡Registro exitoso! Nos pondremos en contacto contigo.');
    return true;
}
