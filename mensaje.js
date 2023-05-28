document.getElementById('formulario').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita el envío del formulario por defecto

  var nombre = document.getElementById('nombre').value;
  var email = document.getElementById('email').value;
  var mensaje = document.getElementById('mensaje').value;
  
  // Aquí puedes realizar la validación de los campos recibidos
  
  // Configuración del correo electrónico
  var data = {
    nombre: nombre,
    email: email,
    mensaje: mensaje
  };
  
  // Envío del mensaje a través de una solicitud AJAX
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'enviar.php', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = function() {
    if (xhr.status === 200) {
      alert('Mensaje enviado correctamente.');
    } else {
      alert('Error al enviar el mensaje.');
    }
  };
  xhr.send(JSON.stringify(data));
});
