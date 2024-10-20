<?php

$googleMapPath = "js/google-map.js";
$key = $_POST["key"];

if (file_exists("../" . $googleMapPath)){
    $content = file_get_contents("../" . $googleMapPath);
    preg_match("/googleApiKey\s=\s\'(.+)\';\n/", $content, $result);
    if (!empty($result)){
        if ($result[1] !== $key){
            if (strlen($key) > 30){
                sendQuery($key, $googleMapPath);
            }else{
                echo -1;
            }
        }
    }
}else{
    sendQuery($key, $googleMapPath);
}

echo $googleMapPath;


function sendQuery($key, $path){
    $result = file_get_contents("https://maps.google.com/maps/api/js?key=" . $key . "&sensor=false&libraries=geometry,places&v=3.7");
    if (strlen($result) > 0){
        $result = "var googleApiKey = '" . $key . "';\n" . $result;
        file_put_contents("../" . $path, $result);
    }else{
        echo -1;
        die();
    }

    return $result;
}
