const imagenes = ["imagen-header1", "imagen-header2", "imagen-header3"];

var contador = 1;

setInterval(cambio, 10000);

function cambio() {
  if (contador >= 3) {
    contador = 1;
    $("#imagen-header" + 3).removeClass("no_opacidad")
    $("#imagen-header" + 3).addClass("opacidad");
    $("#imagen-header" + contador).removeClass("opacidad")
    $("#imagen-header" + contador).addClass("no_opacidad");
  } else {
    $("#imagen-header" + contador).removeClass("no_opacidad")
    $("#imagen-header" + contador).addClass("opacidad");
    contador++;
    $("#imagen-header" + contador).removeClass("opacidad")
    $("#imagen-header" + contador).addClass("no_opacidad");
  }
}
