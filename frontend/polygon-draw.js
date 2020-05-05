var canvas = new fabric.Canvas('backgroundCanvas');
var polygon_count = 1;
var array_length;
var circle_count = 1;
var fill_color = "rgba(46, 240, 56, 0.5)";

function readCoordinates(coordinates){
  let coordinate_pairs = coordinates.split(" ");
  let index;
  for(index = 0; index < coordinate_pairs.length; index++){
    if(index % 30 == 0){
      addCircle(coordinate_pairs[index].split(',')[0], coordinate_pairs[index].split(',')[1]);
    }
  }
}

function addCircle(x,y){
  circle = new fabric.Circle({
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

canvas.on('object:moving', function(option) {
  var object = option.target;
  canvas.forEachObject(function(obj) {
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

  let all_coordinates = [];
  let index;
  for(index = 1; index < canvas._objects.length; index++){
    all_coordinates.push({x: canvas._objects[index].left, y: canvas._objects[index].top});
  }

  let sum = 0;
  for(index = 0; index < all_coordinates.length - 1; index++){
    let act_sum = all_coordinates[index].x * all_coordinates[index + 1].y - all_coordinates[index].y * all_coordinates[index + 1].x;
    sum += isNaN(act_sum) ? 0 : act_sum;
  }
  console.log("area: " + Math.abs(sum/2));
});

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
