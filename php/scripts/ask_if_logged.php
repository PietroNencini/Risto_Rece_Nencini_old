<?php

    session_start();

    $response_body = ["logged" => false];

    if(isset($_SESSION["session_user"])) {
        $response_body["logged"] = true;
    }

    echo json_encode($response_body);