<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $data = json_decode(file_get_contents('php://input'), true);

  $nombre = $data['nombre'];
  $email = $data['email'];
  $mensaje = $data['mensaje'];

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
    http_response_code(200);
  } else {
    http_response_code(500);
  }
}
