"use strict";
$(document).ready(function () {
    $("form.ajax .submit").on('click', function () {
        var form = $(this).closest("form");
        Ajax(form);
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
            alert("Király");
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
        }
    });
});

function imageIsLoaded() {
    alert(this.src);  // blob url
    // update width and height ...
}