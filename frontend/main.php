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

    <div class="row">
      <div class="col-sm">
	<form action="" method="post" class="ajax" enctype="multipart/form-data">
        <div class="row" style="margin-top: 1rem;">
          <div class="col-lg">
            
              <div class="form-group">
                <label for="exampleFormControlFile1" class="">Upload a picture from a lake</label>
                <br>
                <input type="file" class="btn btn-primary btn-block" name="file" id="exampleFormControlFile1">
              </div>
            
          </div>
        </div>

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
                   onchange="changeLakeName()"
                   >
          </div>
        </div>

        <div class="dropdown-divider"></div>

        <div class="row" style="margin-top: 1rem;">
          <a class="btn btn-primary btn-lg btn-block submit"
                  style="margin-left: 1rem; margin-right: 1rem;"
                  >Calculate lake's size</a>
        </div>
</form>
        <div class="dropdown-divider" style="margin-top: 2rem; margin-bottom: 2rem;"></div>

        <div class="row" style="margin-top: 1rem;">

          <div class="input-group mb-3" style="margin-left: 1rem; margin-right: 1rem;">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">Height&nbsp;</span>
            </div>
            <input type="number"
                   class="form-control"
                   placeholder="m" 
                   aria-label="Height"
                   aria-describedby="lake-height"
                   id="lake-height"
                   onchange="changeLakeHeight()"
                   >
          </div>

          <div class="input-group mb-3" style="margin-left: 1rem; margin-right: 1rem;">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">Depth&nbsp;&nbsp;</span>
            </div>
            <input type="number"
                   class="form-control"
                   placeholder="m"
                   aria-label="Depth"
                   aria-describedby="lake-depth"
                   id="lake-depth"
                   onchange="changeLakeDepth()"
                   >
          </div>

          <div class="input-group mb-3" style="margin-left: 1rem; margin-right: 1rem;">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">Surface</span>
            </div>
            <input type="number"
                   class="form-control"
                   placeholder="m^2"
                   aria-label="Surface"
                   aria-describedby="lake-surface"
                   id="lake-surface"
                   onchange="changeLakeSurface()"
                   >
          </div>
        </div>


      </div>

      <div class="col-lg">
        <div class="row" style="margin-top: 1rem;">
          <img src="" id="uploaded-img" style="width: 600px; margin-top: 1rem; margin-left: 1rem; margin-right: 1rem;" alt="">
        </div>
      </div>

    </div>
  </div>

  <!-- Optional JavaScript -->
  <!-- jQuery first, then Popper.js, then Bootstrap JS -->
  <script src="https://code.jquery.com/jquery-3.4.1.min.js" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
  <script src="script.js"></script>
</body>
</html>