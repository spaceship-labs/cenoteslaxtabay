<?php
    $to = "erick@spaceshiplabs.com, cenotelaxtabay@gmail.com, contacto@cenotelaxtabay.com";
    $subject = "La Xtabay | Contact";
    $name = isset($_POST['boreal_name']) ? strip_tags( $_POST['boreal_name'] ): false;
    $email = isset($_POST['boreal_email']) ? strip_tags( $_POST['boreal_email'] ): false;
    $phone = isset($_POST['boreal_phone']) ? strip_tags( $_POST['boreal_phone'] ): false;
    $message = isset($_POST['boreal_message']) ? strip_tags( $_POST['boreal_message'] ): false;
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
    $html .= "<p><b>Message:</b></p>";
    $html .= "<p>{$message}</p>";
    $mail = mail( $to, $subject, $html, $headers, '-fno-reply@cenotelaxtabay.com' );
    echo json_encode( $mail );
?>