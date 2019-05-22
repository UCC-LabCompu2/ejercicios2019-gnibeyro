/**
 * Created by Agus on 6/5/2017.
 */

/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */
function saludar () {
    alert ("Hola mundo!");
}

function convertir (id_elemento, valor_elemento) {

    if (isNaN(valor_elemento)){
        alert("El valor de "+id_elemento+" debe ser numerico.");
        document.getElementById(id_elemeto).value = "";
    }

    if (!isNaN(valor_elemento)) {

        if (id_elemento == 'metro') {
            document.getElementById("pulgada").value = valor_elemento * 39.3701;
            document.getElementById("pie").value = valor_elemento * 3.28084;
            document.getElementById("yarda").value = valor_elemento * 1.09361;
        }

        if (id_elemento == 'pulgada') {
            document.getElementById("metro").value = valor_elemento * 0.0254;
            document.getElementById("pie").value = valor_elemento * 0.0833;
            document.getElementById("yarda").value = valor_elemento * 0.0277778;
        }

        if (id_elemento == 'pie') {

        }
    }
}