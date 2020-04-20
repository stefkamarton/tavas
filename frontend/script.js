"use strict";

var lake_size = 0;
var lake_name = '';

var picutre_height = 0;
var lake_depth = 0;
var lake_surface = 0;

function changeLakeSize(){
  lake_size = $('#lake-size').val();
}

function changeLakeName(){
  lake_name = $('#lake-name').val();
}

function calculateLakeSize(){

}

function changeLakeHeight(){
  let input = $('#lake-height').val();
  if(input !== ''){
    picutre_height = input;
  }
}

function changeLakeDepth(){
  let input = $('#lake-depth').val();
  if(input !== ''){
    lake_depth = input;
  }
}

function changeLakeSurface(){
  let input = $('#lake-surface').val();
  if(input !== ''){
    lake_surface = input;
  }
}

function login(){

}

function logout(){
  
}

window.addEventListener('load', function() {
  document.querySelector('input[type="file"]').addEventListener('change', function() {
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