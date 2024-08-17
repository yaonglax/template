<?php 

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}
require 'vendor/autoload.php';
require_once('./phpmailer/PHPMailerAutoload.php');

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$message = $_POST['popup-textarea'];


$mail->isSMTP();                                    
$mail->Host = $_ENV['SMTP_HOST'];  																						
$mail->SMTPAuth = true;                          
$mail->Username = $_ENV['SMTP_USER']; 
$mail->Password = $_ENV['SMTP_PASS']; 
$mail->SMTPSecure = 'ssl';                     
$mail->Port = $_ENV['SMTP_PORT']; 

$mail->setFrom($_ENV['SMTP_USER']);
$mail->addAddress($_ENV['SMTP_EMAILTO']);   
$mail->isHTML(true);                               

$mail->Subject = 'Сообщение с сайта';
$mail->Body    = $message;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    echo 'Success';
}
