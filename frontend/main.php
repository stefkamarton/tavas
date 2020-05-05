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
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home<span class="sr-only">(current)</span></a>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <button class="btn btn-primary my-2 my-sm-0"
                            type="submit"
                            onclick="login()"
                            >Login</button>
                    <button class="btn btn-outline-primary my-2 my-sm-0"
                            type="submit"
                            onclick="logout()"
                            >Logout</button>
                </form>
            </div>

        </nav>

        <div class="container">
            <form action="" method="post" class="ajax" enctype="multipart/form-data">
                <div class="row">


                    <div class="col-sm">
                        <div class="row" style="margin-top: 1rem;">
                            <div class="col-lg">

                                <div class="form-group">
                                    <label for="exampleFormControlFile1" class="">Upload a picture from a lake</label>
                                    <br>
                                    <input type="file" class="btn btn-primary btn-block" name="file" id="exampleFormControlFile1" required="required">
                                </div>

                            </div>
                        </div>
                        <div class="hidden">
                            <div class="dropdown-divider"></div>

                            <div class="row" style="margin-top: 1rem;">
                                <div class="col-lg">
                                    <label for="customRange2">Lake's estimated size (small, medium, large)</label>
                                    <input type="range" class="custom-range" min="0" max="2" name="size" id="lake-size" onchange="changeLakeSize()">
                                </div>  
                            </div>

                            <div class="dropdown-divider"></div>

                            <div class="row" style="margin-top: 1rem;">
                                <div class="input-group mb-3">
                                    <input type="text"
                                           class="form-control"
                                           style="margin-left: 1rem; margin-right: 1rem;"
                                           placeholder="Lake's name"
                                           aria-label="Lake's name"
                                           aria-describedby="basic-addon1"
                                           id="lake-name"
                                           name="name"
                                           onchange="changeLakeName()"
                                           required="required">
                                </div>
                            </div>

                            <div class="dropdown-divider"></div>



                            <div class="dropdown-divider" style="margin-top: 2rem; margin-bottom: 2rem;"></div>

                            <div class="row" style="margin-top: 1rem;">

                                <div class="input-group mb-3" style="margin-left: 1rem; margin-right: 1rem;">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1">Altitude (m)</span>
                                    </div>
                                    <input type="text"
                                           class="form-control"
                                           aria-label="Altitude"
                                           aria-describedby="lake-altitude"
                                           id="lake-altitude"
                                           >
                                </div>
                                <div class="input-group mb-3" style="margin-left: 1rem; margin-right: 1rem;">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1">Sensor width (mm)</span>
                                    </div>
                                    <input type="text"
                                           class="form-control"
                                           aria-label="Sensor width"
                                           aria-describedby="sensor-width"
                                           id="lake-sensor"
                                           >
                                </div>
                                <div class="input-group mb-3" style="margin-left: 1rem; margin-right: 1rem;">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1">Focus length (mm)</span>
                                    </div>
                                    <input type="text"
                                           class="form-control"
                                           aria-label="Focus length"
                                           aria-describedby="focus-length"
                                           id="focus-length"
                                           >
                                </div>
                                <div class="input-group mb-3" style="margin-left: 1rem; margin-right: 1rem;">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1">Depth (m)</span>
                                    </div>
                                    <input type="number"
                                           class="form-control"
                                           aria-label="Depth"
                                           aria-describedby="lake-depth"
                                           id="lake-depth"
                                           onchange="changeLakeDepth()"
                                           >
                                </div>

                                <div class="input-group mb-3" style="margin-left: 1rem; margin-right: 1rem;">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1">Surface (m<sup>2</sup>)</span>
                                    </div>
                                    <input type="text"
                                           class="form-control"
                                           readonly="readonly"
                                           aria-label="Surface"
                                           name="lake-surface"
                                           aria-describedby="lake-surface"
                                           id="lake-surface"
                                           onchange="changeLakeSurface()"
                                           >
                                </div>
                            </div>
                            <div class="input-group mb-3" style="margin-left: 1rem; margin-right: 1rem;">

                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1">RGB</span>

                                </div>
                                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                                    Pick color
                                </button>

                                <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered" role="document" style="max-width:2000px;max-height:500px;overflow:auto;">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                <canvas id="myCanvas" width="1000" height="1000">
                                                    Your user agent does not support the HTML5 Canvas element.
                                                </canvas>
                                            </div>
                                            <div class="modal-footer">
                                                <div class="pickedcolor" style="margin-left:50px;line-height: 50px;text-align:center;border:2px solid rgba(0,0,0,0.2);width:200px;height:50px"> Choosed color</div>

                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div class="pickedcolor" style=" margin-left:50px;line-height: 50px;text-align:center;border:2px solid rgba(0,0,0,0.2);width:200px;height:50px"> Choosed color</div>
                                <input type="text" style="display: none;"
                                       class="form-control"
                                       readonly="readonly"
                                       aria-label="red"
                                       name="red"
                                       placeholder="red"
                                       aria-describedby="red"
                                       id="red"
                                       >
                                <input type="text"
                                       class="form-control" style="display: none;"
                                       readonly="readonly"
                                       aria-label="green"
                                       name="green"
                                       aria-describedby="green"
                                       placeholder="green"
                                       id="green"
                                       >
                                <input type="text"
                                       class="form-control" style="display: none;"
                                       readonly="readonly"
                                       aria-label="blue"
                                       name="blue"
                                       placeholder="blue"
                                       aria-describedby="blue"
                                       id="blue"
                                       >


                            </div>
                            <div class="row" style="margin-top: 1rem;">
                                <a class="btn btn-primary btn-lg btn-block submit"
                                   style="margin-left: 1rem; margin-right: 1rem;"
                                   >Calculate lake's size</a>
                            </div>
                        </div></div>

                </div>
            

            <div class="col-lg">
                <div class="row" style="position: relative;margin-top: 1rem;">
                    <div style="position:absolute;top:0;left:0;">
                        <canvas id="backgroundCanvas" width="1000px" height="750px" style="z-index:10;background-color:transparent;"></canvas>
                    </div>
                    <img src="" id="uploaded-img" style="display:none;width: 1000px; margin-top: 1rem; margin-left: 1rem; margin-right: 1rem;" alt="">

                </div>
            </div>
            <div class="col-lg">
                <div class="row" style="margin-top: 1rem;">
                    <a class="btn btn-primary btn-lg btn-block save"
                       style="margin-left: 1rem; margin-right: 1rem;"
                       >Save</a>
                </div></div></form>

        </div>
    </div>

    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/fabric.js/1.7.22/fabric.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    <script src="script.js"></script>
    <script src="polygon-draw.js"></script>

</body>
</html>