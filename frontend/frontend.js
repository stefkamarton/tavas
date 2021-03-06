"use strict";

var lake_size = 0;
var lake_name = '';

var picutre_height = 0;
var lake_depth = 0;
var lake_surface = 0;

$(document).ready(function () {
    $(".pickedcolor").hide();
    $(".hidden").hide();
    $("form.ajax .submit").on('click', function () {
        if ($("lake-height").val() !== "" &&
                $("lake-depth").val() !== "" &&
                $("lake-name").val() !== "") {
            var form = $(this).closest("form");
            Ajax(form, "upload");
            $("#uploaded-img").show();
        }
    });
    $("form.ajax .save").on('click', function () {
        var form = $(this).closest("form");
            Ajax(form, "save");
    });
});

function Ajax(obj, method) {
    var datatags = $(obj).closest('form').data();
    var formData = new FormData($(obj).closest('form')[0]);
    formData.append("__method__", method);
    $.each(datatags, function (key, value) {
        formData.append("__" + key + "__", value);
    });

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

window.addEventListener('load', function () {
    document.querySelector('input[type="file"]').addEventListener('change', function () {
        if (this.files && this.files[0]) {
            var img = document.querySelector('img');  
            img.src = URL.createObjectURL(this.files[0]); 
            $(".hidden").show(500);
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
        console.log(this.height)
        document.getElementById("myCanvas").setAttribute("width", this.width);
        document.getElementById("myCanvas").setAttribute("height", this.height);
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
