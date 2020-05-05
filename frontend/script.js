"use strict";
$(document).ready(function () {
    $(".pickedcolor").hide();
    $("form.ajax .submit").on('click', function () {
        if ($("lake-height").val() !== "" &&
                $("lake-depth").val() !== "" &&
                $("lake-name").val() !== "") {
            var form = $(this).closest("form");
            Ajax(form);
        }
    });
});

var lake_size = 0;
var lake_name = '';

var picutre_height = 0;
var lake_depth = 0;
var lake_surface = 0;

function Ajax(obj) {
    var datatags = $(obj).closest('form').data();
    var formData = new FormData($(obj).closest('form')[0]);
    $.each(datatags, function (key, value) {
        formData.append("__" + key + "__", value);
    });
    console.log(formData);

    $.ajax({
        type: "POST",
        url: "/feltoltes",
        dataType: "json",
        processData: false,
        contentType: false,
        data: formData,
        xhr: function () {
            var xhr = new window.XMLHttpRequest();
            xhr.upload.addEventListener("progress", function (evt) {
                if (evt.lengthComputable) {
                    var percentComplete = (evt.loaded / evt.total) * 100;

                    if (percentComplete == 100) {
                        var prevent_leave = false;
                    } else {
                        var prevent_leave = true;

                    }
                    $(window).on('beforeunload', function () {
                        if (prevent_leave) {
                            return "Your files are not completely uploaded...";
                        }
                    });
                    var percentVal = Math.round(percentComplete) + '%';
                }
            }, false);
            return xhr;
        },
        success: function (data, textStatus) {
            console.log(data.coord);
            readCoordinates(data.coord);
            drawPolygon();
        },
        error: function (req, status, err) {
            alert("bajvan");
        }
    });
}

function changeLakeSize() {
    lake_size = $('#lake-size').val();
}

function changeLakeName() {
    lake_name = $('#lake-name').val();
}

function calculateLakeSize() {

}

function changeLakeHeight() {
    let input = $('#lake-height').val();
    if (input !== '') {
        picutre_height = input;
    }
}

function changeLakeDepth() {
    let input = $('#lake-depth').val();
    if (input !== '') {
        lake_depth = input;
    }
}

function changeLakeSurface() {
    let input = $('#lake-surface').val();
    if (input !== '') {
        lake_surface = input;
    }
}

function login() {

}

function logout() {

}

window.addEventListener('load', function () {
    document.querySelector('input[type="file"]').addEventListener('change', function () {
        if (this.files && this.files[0]) {
            var img = document.querySelector('img');  // $('img')[0]
            img.src = URL.createObjectURL(this.files[0]); // set src to blob url
            // img.onload = imageIsLoaded;
            ColorPick(URL.createObjectURL(this.files[0]));
        }
    });
});
function ColorPick(imgsrc) {
    var canvas = $("#myCanvas").get(0);
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    var image = new Image();
    
    
    $(image).load(function () {
        /*$("#myCanvas").css("height",this.height);
         $("#myCanvas").css("width",this.width);*/
        console.log(this.height)
        document.getElementById("myCanvas").setAttribute("width",this.width);
        document.getElementById("myCanvas").setAttribute("height",this.height);
        ctx.drawImage(image, 0, 0); 
    });
    image.src = imgsrc;
    
    $(canvas).click(function (e) {   
        var canvasOffset = $(canvas).offset();
        var canvasX = Math.floor(e.pageX - canvasOffset.left);
        var canvasY = Math.floor(e.pageY - canvasOffset.top);

        var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        var pixels = imageData.data;
        var pixelRedIndex = ((canvasY - 1) * (imageData.width * 4)) + ((canvasX - 1) * 4);
        var pixelcolor = "rgba(" + pixels[pixelRedIndex] + ", " + pixels[pixelRedIndex + 1] + ", " + pixels[pixelRedIndex + 2] + ", " + pixels[pixelRedIndex + 3] + ")";
        $("#red").val(pixels[pixelRedIndex]);
        $("#blue").val(pixels[pixelRedIndex + 2]);
        $("#green").val(pixels[pixelRedIndex + 1]);
        $(".pickedcolor").css("backgroundColor", pixelcolor);
        $(".pickedcolor").show();
    });

}

function imageIsLoaded() {
    alert(this.src);  // blob url
    // update width and height ...
}