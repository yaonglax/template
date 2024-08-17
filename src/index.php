<?php 

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

require_once('./phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$message = $_POST['popup-textarea'];


$mail->isSMTP();                                    
$mail->Host = 'smtp.yandex.ru';  																						
$mail->SMTPAuth = true;                          
$mail->Username = 'exampleyaon@yandex.com'; 
$mail->Password = 'icmguaxxulanpufm'; 
$mail->SMTPSecure = 'ssl';                     
$mail->Port = 465; 

$mail->setFrom('exampleyaon@yandex.com');
$mail->addAddress('rbru-metrika@yandex.ru');   
$mail->isHTML(true);                               

$mail->Subject = 'Сообщение с сайта';
$mail->Body    = $message;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    echo 'Success';
}
