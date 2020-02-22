function act(){
  numail=document.getElementById("numail");
  namereal=document.getElementById("namereal");
  user=document.getElementById("user");
  password=document.getElementById("password");

  numail.addEventListener("input", validar, false);
  namereal.addEventListener("input", validar, false);
  user.addEventListener("input", validar, false);
  password.addEventListener("input", validar, false);

validar();

}

function validar(){

  if (numail.value=="") {
    numail.setCustomValidity("Ajustate a escribir tu Email o Numero de Telefono!");
  }

  else{
    numail.setCustomValidity("");
  }



if (namereal.value=="") {
    namereal.setCustomValidity("Escribe tu Nombre");
  }

  else{
    namereal.setCustomValidity("");


}

if (user.value=="") {
    user.setCustomValidity("Escribe un Nombre para tu usuario!");
  }

  else{
    user.setCustomValidity("");
  }



if (password.value=="") {
    password.setCustomValidity("Escribe una contraseña!");
  }

  else{
    password.setCustomValidity("");
  }

}

window.addEventListener("load",act,false);
