<?php

    include "../connection.php";

    $idRistorante = $_GET['id_ristorante'];

    $stmt = $conn->prepare("SELECT latitudine as lat, longitudine as lon FROM ristorante WHERE id_ristorante = ?");
    $stmt->bind_param("i", $idRistorante);

    if($stmt->execute()) {

        $result = $stmt->get_result();
        $row = $result->fetch_assoc();

    } else {
        header("Location: ../../pages/error.html");
        exit;
    }

    $lat = $row['lat'];
    $lon = $row['lon'];
    $data = array('lat'=>$lat , 'lon'=>$lon);
    echo json_encode($data);

