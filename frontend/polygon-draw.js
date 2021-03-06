"use strict";

var canvas = new fabric.Canvas('backgroundCanvas');
var polygon_count = 1;
var array_length;
var circle_count = 1;
var fill_color = "rgba(255, 0, 0, 0.5)";

var small_size = 100;
var medium_size = 300;
var large_size = 500;

var image_width = 3968;

function readCoordinates(coordinates) {
    canvas._objects = [];
    let coordinate_pairs = coordinates.split(" ");
    let index;
    for (index = 0; index < coordinate_pairs.length; index++) {
        if (index % 100 == 0) {
            addCircle(coordinate_pairs[index].split(',')[0], coordinate_pairs[index].split(',')[1]);
        }
    }

    calculateSize();
}

function addCircle(x, y) {
    let circle = new fabric.Circle({
        left: x,
        top: y,
        radius: 7,
        hasBorders: false,
        hasControls: false,
        polygonNo: polygon_count,
        name: "draggableCircle",
        circleNo: circle_count,
        fill: "rgba(0, 0, 0, 0.5)",
        hasRotatingPoint: false,
        originX: 'center',
        originY: 'center'
    });
    canvas.add(circle);
    circle_count++;
}

canvas.on('object:moving', function (option) {
    var object = option.target;
    canvas.forEachObject(function (obj) {
        if (obj.name == "Polygon") {
            if (obj.PolygonNumber == object.polygonNo) {
                var points = window["polygon" + object.polygonNo].get("points");
                points[object.circleNo - 1].x = object.left;
                points[object.circleNo - 1].y = object.top;
                window["polygon" + object.polygonNo].set({
                    points: points
                });
            }
        }
    })

    calculateSize();
});

function GSD() {
    var sensor_width = $("#lake-sensor").val();
    var focal_length = $("#focus-length").val();
    var altitude = $("#lake-altitude").val();
    console.log(sensor_width);
    console.log(altitude);
    console.log(focal_length);
    return (sensor_width * altitude * 100) / (focal_length * image_width);
}

function calculateSize() {
    let all_coordinates = [];
    let index;
    let i;
    for (index = 1; index < canvas._objects.length; index++) {
        all_coordinates.push({x: canvas._objects[index].left, y: canvas._objects[index].top});
    }
    let coords = "";
    for (i=1;i<all_coordinates.length - 1; i++){
        coords = coords+" "+all_coordinates[i].x+","+all_coordinates[i].y
    }
    $("#svg_coord").val(coords);
    let sum = 0;
    for (index = 0; index < all_coordinates.length - 1; index++) {
        let act_sum = all_coordinates[index].x * all_coordinates[index + 1].y - all_coordinates[index].y * all_coordinates[index + 1].x;
        sum += isNaN(act_sum) ? 0 : act_sum;
    }
    let surface = Math.abs(sum / 2);
    let small_surface = surface / 2;

    let volume = surface * small_size / 2 + small_surface * small_size / 2; //in pixels

    console.log("vol: " + volume);
    volume = (volume * GSD()) / 10000;
    console.log("vol in m3: " + volume);
    if (!isNaN(volume)) {
        $("#lake-surface").val(volume);
    } else {
        $("#lake-surface").val("You don't give enough parameter!");
    }
}

function drawPolygon() {
    array_length = circle_count;
    circle_count = 1;
    var objects = canvas.getObjects();
    var points = [];
    for (var i = 0; objects.length > i; i++) {
        if (objects[i].polygonNo === polygon_count) {
            points.push({
                x: objects[i].left,
                y: objects[i].top
            });
            canvas.renderAll();
        }
    }
    window["polygon" + polygon_count] = new fabric.Polygon(points, {
        fill: fill_color,
        PolygonNumber: polygon_count,
        name: "Polygon",
        selectable: false,
        noofcircles: array_length,
        objectCaching: false
    });
    canvas.add(window["polygon" + polygon_count]);
    canvas.sendToBack(window["polygon" + polygon_count])
    canvas.renderAll();
    polygon_count++;
}
