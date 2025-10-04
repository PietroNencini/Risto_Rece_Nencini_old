<?php
    session_start();
    
    include "connection.php";

    //todo MOSTRARE PER PRIMO IL RISTORANTE CON LA MEDIA RECENSIONI PIÙ ALTA (SUPER CONSIGLIATO:)
    
    ?>

<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!--* TITOLO DELLA PAGINA-->
    <title>Ristoranti & rece</title>
    <!--* FAVICON-->
    <link rel="icon" type="image/x-icon" href="../images/icons/R&R_definitivo.png">
    <!--* BOOTSTRAP-->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <!--* CSS PERSONALE-->
    <link rel="stylesheet" href="../css/styles.css">
</head>
<body>

    <header class="nav_bar_keeper w-100 bg-warning">
        <div class="container">
            <!--Javascript è il tuo turno-->
        </div>
    </header>

    <!--finestra di LOGOUT (si apre al click del pulsante prima)-->
    <div id="logout-box" class="d-none"></div>

    <!--? SCRIPT DI BOOTSTRAP-->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
        crossorigin="anonymous"></script>
    <!--? JAVASCRIPT PERSONALE-->
    <script src="../javascript/frontend/script.js"></script>
    <script type="module" src="../javascript/frontend/navbar.js"></script>
    <script type="module" src="../javascript/frontend/logout.js"></script>
    <script src="../javascript/frontend/footer.js"></script>
</body>
</html>