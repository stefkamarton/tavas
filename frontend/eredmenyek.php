<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Amount of water estimater</title>

        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">

    </head>
    <body>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <button class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse"
                 id="navbarSupportedContent"
                 >
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="https://tavas.stefka.hu">Home<span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="https://tavas.stefka.hu/results">Result<span class="sr-only">(current)</span></a>
                    </li>
                </ul>
            </div>

        </nav>
        <?php
        $servername = "localhost";
        $username = "c0_tavas";
        $password = "Yy5cjABWz7_i";
        try {
            $conn = new PDO("mysql:host=$servername;dbname=c0_tavas", $username, $password);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $stmt = $conn->prepare("SELECT * FROM lakes ORDER BY id DESC");
            $stmt->execute($array);
            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            die("Can't connect to the database");
        }
        ?>

        <div class="container">
            <?php for ($i = 0; $i < count($result); $i++) { ?>
            <div class="row">
                
                    <div class="col-sm" style="width:33%;padding-bottom:25px;margin-bottom:25px;border-bottom: 1px solid rgba(0,0,0,0.1);">
                        <div style="text-align:center;"><img style="width:50%;max-height:300px;overflow: hidden;" src="https://tavas.stefka.hu/<?php echo $result[$i]["picture"];?>"></div>
                        <table style="width:80%;margin:0 auto;margin-top:20px;">
                            <tbody>
                                <tr>
                                    <td>Name:</td>
                                    <td><?php echo $result[$i]["name"];?></td>
                                </tr>
                                <tr>
                                    <td>Date:</td>
                                    <td><?php echo $result[$i]["date"];?></td>
                                </tr>
                                <tr>
                                    <td>Picked color:</td>
                                    <td style="background-color:rgba(<?php echo $result[$i]['red']?>,<?php echo $result[$i]['green']?>,<?php echo $result[$i]['blue']?>)"></td>
                                </tr>
                                <tr>
                                    <td>Altitude:</td>
                                    <td><?php echo $result[$i]["altitude"];?> m</td>
                                </tr>
                                <tr>
                                    <td>Sensor width:</td>
                                    <td><?php echo $result[$i]["sensor_width"];?> mm</td>
                                </tr>
                                <tr>
                                    <td>Focus Length:</td>
                                    <td><?php echo $result[$i]["focus_length"];?> mm</td>
                                </tr>
                                <tr>
                                    <td>Depth:</td>
                                    <td><?php echo $result[$i]["depth"];?> m</td>
                                </tr>
                                <tr>
                                    <td>Surface:</td>
                                    <td><?php echo $result[$i]["surface"];?> liter</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
           
            </div>
                 <?php } ?>
        </div>

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/fabric.js/1.7.22/fabric.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
        <script src="script.js"></script>
        <script src="polygon-draw.js"></script>

    </body>
</html>
<style>
    tr{
        border:1px solid rgba(0,0,0,0.1);
    }
    tr td:first-child{
        border-right: 1px solid rgba(0,0,0,0.1);
    }
    td{
        padding:5px 10px;
    }
    tr td:last-child{
        text-align: center;
    }
    </style>