$( document ).ready(function() {

var i = 0;
function cambiarImagen(){
  var imagenes = [
    "images/header.png",
    "images/header2.png",
    "images/header3.png"
  ];
  if(i<imagenes.length-1){
    i++;
  } else {
    i=0;
  }
  $('#imagenfondo').fadeOut('slow', function () {

      $('#imagenfondo').css({ 'background-image': 'url("'+imagenes[i]+'")' });

      $('#imagenfondo').fadeIn('slow');
  });
}
setInterval(cambiarImagen, 30000);

});
