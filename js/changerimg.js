const imagenes = ["src/1.jpg", "src/2.jpg", "src/3.jpg", "src/4.jpg", "src/5.jpg", "src/6.jpg", "src/7.jpg", "src/8.jpg"]
const imgPC = document.querySelector('#gallery1')
const imgPC2 = document.querySelector('#gallery2')
const galeria = imgPC.querySelectorAll('.change1')
const galeria2 = imgPC2.querySelectorAll('.change2')
const deviceback = document.getElementById("deviceback");
var ancho = window.innerWidth
var auxiliar = 0
let NumArray = []


//Genera numeros del 0 al 7 desordenados sin repetir
while (NumArray.length < imagenes.length) {
    const num = Math.floor(Math.random() * imagenes.length);
    if (NumArray.indexOf(num) == -1) {
        NumArray.push(num);
    }
}

if (ancho > 790) {


    //Empieza a asignar esos numeros desordenados

    for (var i = 0; i < galeria.length; i++) {

        galeria[i].src = imagenes[NumArray[i]];

        galeria2[i].src = imagenes[NumArray[i + 4]]

    }

    window.addEventListener("load", () => {


        for (var i = 0; i <= 3; i++) {
            galeria[i].style.animation = 'fade 10s infinite'
            galeria2[i].style.animation = 'fade 10s infinite'
        }
        
        //Ejecuta la funcion fade para el pase de imagenes

        setTimeout(fadeImg, 0)

        function fadeImg() {
            galeria[(auxiliar - 1 + galeria.length) % galeria.length].style.visibility = 'collapse';
            galeria[auxiliar].style.visibility = 'visible'
            galeria2[(auxiliar - 1 + galeria2.length) % galeria2.length].style.visibility = 'collapse';
            galeria2[auxiliar].style.visibility = 'visible'
            galeria[auxiliar].style.zIndex = '10000'
            galeria2[auxiliar].style.zIndex = '10000'

            if (auxiliar >= 3) {
                auxiliar = 0
                for (var i = 0; i <= 3; i++) {
                    galeria[i].style.zIndex = '0'
                    galeria2[i].style.zIndex = '0'
                }

            } else {
                auxiliar++;
            }
        }

        setInterval(fadeImg, 10000);
    })


} else {
    //Carga la parte de las imagenes para dispositivo movil
    window.addEventListener("load", () => {
        setTimeout(imgsdevices, 0);
        setInterval(imgsdevices, 10000);
        deviceback.style.animation = 'fade 10s infinite';

        function imgsdevices() {
            if (auxiliar >= imagenes.length - 1) {
                auxiliar = 0;

            } else {
                auxiliar++;
            }

            deviceback.style.backgroundImage = "url(" + imagenes[NumArray[auxiliar]] + ")";
        }
    })
}
