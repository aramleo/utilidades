const imagenes = ["imagen-header1", "imagen-header2", "imagen-header3"];

var contador = 1;

setInterval(function rotar_imagenes() {
  // setTimeout(cambio, 2000);
}, 5000);

function zoom_fuera(valor) {
  valor.fadeOut(1000);
}

function zoom_dentro(valor) {
  valor.fadeIn(1000);
}

function cambio() {
  if (contador >= 3) {
    contador = 1;
    setTimeout(zoom_fuera($("#imagen-header"+3)),1000)
    $("#imagen-header"+3).css("display", 'none');
    setTimeout(zoom_dentro($("#imagen-header"+contador)),1000)
    $("#imagen-header"+contador).css("display", 'block');
  } else {
    setTimeout(zoom_fuera($("#imagen-header"+3)),1000)
    $("#imagen-header"+contador).css("display", 'none');
    contador++;
    setTimeout(zoom_dentro($("#imagen-header"+contador)),1000)
    $("#imagen-header"+contador).css("display", 'block');
  }
}
