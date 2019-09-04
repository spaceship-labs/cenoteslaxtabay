<?php
    $to = "erick@spaceshiplabs.com, cenotelaxtabay@gmail.com, contacto@cenotelaxtabay.com";
    $subject = "La Xtabay | Reserva";
    $content = trim(file_get_contents("php://input"));
    $decoded = json_decode($content, true);
    //var_dump($decoded);

    $name = isset($decoded['name']) ? strip_tags( $decoded['name'] ): false;
    $email = isset($decoded['email']) ? strip_tags( $decoded['email'] ): false;
    $phone = isset($decoded['phone']) ? strip_tags( $decoded['phone'] ): false;
    $pax = isset($decoded['pax']) ? strip_tags( $decoded['pax'] ): false;
    $startDate = isset($decoded['startDate']) ? strip_tags( $decoded['startDate'] ): false;
    $endDate = isset($decoded['endDate']) ? strip_tags( $decoded['endDate'] ): false;
    $message = isset($decoded['message']) ? strip_tags( $decoded['message'] ): false;
    if( !$name || !$email || !$phone || !$message ){
        echo json_encode(false);
        exit;
    }
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: La Xtabay <no-reply@cenotelaxtabay.com>\r\n";
    $html = "<p><b>Name:</b></p>";
    $html .= "<p>{$name} ( {$email} )</p>";
    $html .= "<p><b>Phone:</b></p>";
    $html .= "<p>{$phone}</p>";
    $html .= "<p><b>Adultos:</b></p>";
    $html .= "<p>{$pax}</p>";
    $html .= "<p><b>Fecha de llegada:</b></p>";
    $html .= "<p>{$startDate}</p>";
    $html .= "<p><b>Fecha de salida:</b></p>";
    $html .= "<p>{$endDate}</p>";
    $html .= "<p><b>Comentarios:</b></p>";
    $html .= "<p>{$message}</p>";
    $mail = mail( $to, $subject, $html, $headers, '-fno-reply@cenotelaxtabay.com' );
    echo json_encode( $mail );
?>