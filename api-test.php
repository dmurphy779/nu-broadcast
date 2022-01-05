<?php

require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://www.aaiscloud.com/newmanu/logon.ashx?nosso=');
$request->setMethod(HTTP_Request2::METHOD_POST);
$request->setConfig(array(
    'follow_redirects' => TRUE
));

$request->setHeader(array(
    'Content-Type' => 'application/x-www-form-urlencoded',
    'Cookie' => 'ASP.NET_SessionId=v5pqr1nozs0btnqdm2wj5jjf; AWSALB=BvLFBHmSpIwxa1vbLW49msLanEGhBoNl1PwIhfWVJvpZR7OiSVxEff/95Ze05+onPibhLvEXl4Ja2czjEJ1YQ5qCnRghfnxTfjSMBQxmhdkHS051CNpTjE1QEsB2; AWSALBCORS=BvLFBHmSpIwxa1vbLW49msLanEGhBoNl1PwIhfWVJvpZR7OiSVxEff/95Ze05+onPibhLvEXl4Ja2czjEJ1YQ5qCnRghfnxTfjSMBQxmhdkHS051CNpTjE1QEsB2'
));
$request->setBody('{\'username\': \'APIUSER\', \'password\':\'NU1933gm2\'}');
try {
    $response = $request->send();
    if ($response->getStatus() == 200) {
        echo $response->getBody();
    } else {
        echo 'Unexpected HTTP status: ' . $response->getStatus() . ' ' .
            $response->getReasonPhrase();
    }
} catch (HTTP_Request2_Exception $e) {
    echo 'E';
}
?>
