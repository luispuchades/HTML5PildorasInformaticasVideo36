/*global window*/
/*jslint browser: true, for:true */

/**JavaScript Document
 * Curso: HMTL5 - Pildoras Informáticas - API CANVAS X
 * Origin: Video35.html ==> Superposiciones e Imágenes
 */

// "use strict";


//1. Definición de Objetos y Variables
var elemento;
var imagen;

//1.1 Extracción de elementos desde HTML
elemento = document.getElementById('lienzo');

// Indicamos que se trata de un canvas 2d
imagen = new Image();
imagen.src = 'img/1.jpg';

function manipularImagen(e) {
    // Pasamos como parámetro a la función el elemento desencadendo "event"
    'use strict';

    var lienzo;
    var info_imagen;
    var posicion;
    var x;
    var y;

    lienzo = elemento.getContext('2d');
    // La imagen va a ser igual al elemento que desencadene la acción
    imagen = e.target;
    //Posicionamos la imagen en las coordenadas (0,0)
    lienzo.drawImage(imagen, 0, 0);

    info_imagen = lienzo.getImageData(0, 0, 145, 145);

    for (x = 0; x <= 145; x = x + 1) {
        for (y = 0; y <= 145; y = y + 1) {
            //Le decimos que salte en grupos de cuatro tanto en horizontal (x) como en vertical (y)
            posicion = (info_imagen.width * y * 4) + (x * 4);
            // Generamos el negativo, restando a 255 el color obtenido
            info_imagen.data[posicion] = 255 - info_imagen.data[posicion];
            info_imagen.data[posicion + 1] = 255 - info_imagen.data[posicion + 1];
            info_imagen.data[posicion + 2] = 255 - info_imagen.data[posicion + 2];
        }
    }
// Le decimos que añada los datos que acabamos de definir con la función putImageData
    lienzo.putImageData(info_imagen, 0, 0);
//    lienzo.putImageData(info_imagen, 300,250);
}


function comenzar() {
    'use strict';

    imagen.addEventListener('load', manipularImagen, false);
}


//3. Asignación de Eventos
document.addEventListener('DOMContentLoaded', comenzar, false);
