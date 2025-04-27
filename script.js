// Esperar a que cargue el DOM
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('formRegistro');
    const mensajeExito = document.getElementById('mensajeExito');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      event.stopPropagation();
  
      if (validarFormulario()) {
        // Mostrar mensaje de éxito
        mensajeExito.classList.remove('d-none');
        mensajeExito.classList.add('animate__animated', 'animate__fadeInDown');
  
        // Resetear formulario después de 2 segundos
        setTimeout(() => {
          form.reset();
          form.classList.remove('was-validated');
          mensajeExito.classList.add('d-none');
          mensajeExito.classList.remove('animate__animated', 'animate__fadeInDown');
        }, 3000);
      } else {
        form.classList.add('was-validated');
      }
    });
  
    function validarFormulario() {
      let valido = true;
  
      // Validar campos de texto
      const campos = form.querySelectorAll('input[required]');
      campos.forEach(campo => {
        if (!campo.value.trim()) {
          valido = false;
        }
      });
  
      // Validar al menos un checkbox seleccionado
      const checkboxes = form.querySelectorAll('input[type="checkbox"]');
      const algunCheckboxMarcado = Array.from(checkboxes).some(checkbox => checkbox.checked);
  
      if (!algunCheckboxMarcado) {
        valido = false;
      }
  
      return valido;
    }
  });
  