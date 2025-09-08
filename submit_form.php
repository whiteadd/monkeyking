<?php
if($_SERVER["REQUEST_METHOD"]=="POST"){
    $name = htmlspecialchars($_POST['name']);
    $contact = htmlspecialchars($_POST['contact']);
    $message = htmlspecialchars($_POST['message']);

    $to = "info@weddingexample.com";  // 실제 상담 이메일로 변경
    $subject = "상담 신청: $name";
    $body = "이름: $name\n연락처: $contact\n문의 내용:\n$message";
    $headers = "From: noreply@weddingexample.com";

    if(mail($to,$subject,$body,$headers)){
        echo "상담 신청이 전송되었습니다!";
    } else {
        echo "상담 신청 전송에 실패했습니다.";
    }
}
?>
