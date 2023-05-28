<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $nombre = $_POST['nombre'];
  $email = $_POST['email'];
  $mensaje = $_POST['mensaje'];
  // Aquí puedes realizar la validación de los campos recibidos

  // Configuración del correo electrónico
  $to = 'miguellaguna51@gmail.com';
  $subject = 'Nuevo mensaje desde el formulario de contacto';
  $message = "Nombre: $nombre\n";
  $message .= "Email: $email\n";
  $message .= "Mensaje:\n$mensaje";
  $headers = "From: $email\r\nReply-To: $email\r\n";

  // Envío del correo electrónico
  if (mail($to, $subject, $message, $headers)) {
    echo 'Mensaje enviado correctamente.';
  } else {
    echo 'Error al enviar el mensaje.';
  }
}
