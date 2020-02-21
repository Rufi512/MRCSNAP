var imagenes= new Array();
imagenes[0]="src/2.jpg";
imagenes[1]="src/4.jpg";
imagenes[2]="src/6.jpg";
imagenes[3]="src/8.jpg";

var imagenes2= new Array();
imagenes2[0]="src/1.jpg";
imagenes2[1]="src/3.jpg";
imagenes2[2]="src/5.jpg";
imagenes2[3]="src/7.jpg";

function cambiarimg(){
  var changer=document.getElementById("change1");
  var changer2=document.getElementById("change2");
  changer.src=imagenes[i];
  changer2.src=imagenes2[i];

}

var i=Math.round(Math.random()*3);

window.addEventListener("load", cambiarimg, false);
