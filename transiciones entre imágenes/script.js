const imagenes = [
  "pexels-emilio-sánchez-13350430.jpg",
  "pexels-javier-gonzalez-1143416.jpg",
  "pexels-reinhard-bruckner-4605666.jpg",
];

var contador = 0;

setInterval(function rotar_imagenes() {
  setTimeout(zoom_fuera, 1000);
  setTimeout(cambio, 2000);
  setTimeout(zoom_dentro, 1000);

}, 5000);

function zoom_fuera() {
  $("#imagen-header").fadeOut(1000);
}

function zoom_dentro() {
  $("#imagen-header").fadeIn(1000);
}

function cambio() {
  if (contador >= 2) {
    contador = 0;
    $("#imagen-header").attr("src", imagenes[contador]);
  } else {
    contador++;
    $("#imagen-header").attr("src", imagenes[contador]);
  }
}
