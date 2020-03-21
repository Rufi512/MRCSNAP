var imagenes = new Array();
imagenes[0] = "src/2.jpg";
imagenes[1] = "src/4.jpg";
imagenes[2] = "src/6.jpg";
imagenes[3] = "src/8.jpg";



var imagenes2 = new Array();
imagenes2[0] = "src/1.jpg";
imagenes2[1] = "src/3.jpg";
imagenes2[2] = "src/5.jpg";
imagenes2[3] = "src/7.jpg";

var imagenesdev = new Array();
imagenesdev[0] = "src/mobile/1d.jpg";
imagenesdev[1] = "src/mobile/2d.jpg";
imagenesdev[2] = "src/mobile/3d.jpg";
imagenesdev[3] = "src/mobile/4d.jpg";
imagenesdev[4] = "src/mobile/5d.jpg";
imagenesdev[5] = "src/mobile/6d.jpg";



var i = 0;
var ancho = window.innerWidth; //Se almacena el ancho de la pantalla

const pc = () => {
    i = Math.round(Math.random() * 3); //Al iniciar las imágenes pueden ser mostrada comenzado desde x posición ordenada
    setTimeout(cambiarimg, 0);
    setInterval(cambiarimg, 10000);
};
cambiarimg = () => {
    if (i > 3) { //Si el contador i es mayor que 3 (Si el contador es mayor que el array) reiniciara en 0
        i = 0;
    } else {
    var changer = document.getElementById("change1");
    var changer2 = document.getElementById("change2");
    changer.src = imagenes[i];
    changer2.src = imagenes2[i];
    i++;
}

};

const device = () => {
    i = Math.round(Math.random() * 5);
    setTimeout(imgsdevices, 0);
    setInterval(imgsdevices, 10000);
};

const imgsdevices = () => {
    var deviceback = document.getElementById("deviceback");
    deviceback.style.backgroundImage = "url(" + imagenesdev[i] + ")";

    if (i >= 5) {
        i = 0;

    } else {
        i++;
    }

};


if (ancho > 790) { //Dependiendo del ancho de las pantallas se ejecutara x función
    pc();
} else {
    device();
}
