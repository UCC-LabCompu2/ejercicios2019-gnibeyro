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

function dibujarCircCuad () {
    var canvas= document.getElementById("myCanvas");
    var ctx= canvas.getContext ("2d");

    ctx.fillStyle = "#1854ac";
    ctx.beginPath();
    ctx.rect (0, 0, 30, 40);
    ctx.fill ();
    ctx.closePath();

    ctx.fillStyle = "#ac01a0";
    ctx.beginPath();
    ctx.arc(canvas.width/2, canvas.height/2, 30, 0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
}

function dibujarcuadriculado() {
    var canvas= document.getElementById("myCanvas");
    var ctx= canvas.getContext ("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    ctx.fillStyle= "#000";
    ctx.beginPath();

    for (var i=10; i<canvas.width; i=i+10) {

        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvas.height);
    }

    for (var i=10; i<canvas.height; i=i+10) {

        ctx.moveTo(0, i);
        ctx.lineTo(canvas.width, i);
    }


    ctx.stroke();
    ctx.closePath();


}

function dibujarImg() {
    var canvas= document.getElementById("myCanvas");
    var ctx= canvas.getContext ("2d");

    var img= new Image();
    img.src = "images/auto.png";


    img.onload = function () {
        ctx.drawImage(img, 50, 50);
    }


}