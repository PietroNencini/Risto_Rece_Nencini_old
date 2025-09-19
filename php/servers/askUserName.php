<?php

    session_start();

    $response_body = ["username" => null];

    if(isset($_SESSION["session_user"])) {
        $response_body["username"] = $_SESSION["session_user"];
    }

    echo json_encode($response_body);