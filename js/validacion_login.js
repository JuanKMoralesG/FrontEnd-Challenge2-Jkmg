const usuario = document.querySelector("#usuario");
const clave = document.querySelector("#clave");
const respuesta = document.querySelector(".input-message-error-login");
const botonInicio = document.querySelector("#inicioSesion")

botonInicio.addEventListener('click',(event)=>{
    event.preventDefault();
    console.log(usuario.value,clave.value);

    validarUsuario();

});

function validarUsuario(){
    var regex = /\S+@\S+\.\S+/;
    //console.log(regex.test(usuario.value));
    if (regex.test(usuario.value)==false){
        respuesta.innerHTML=("Formato Incorrecto, El formato del correo electrónico es: email@dominio.com");
    }
    else{
        if(usuario.value=="juan@prueba.com" && clave.value=="alura"){
            respuesta.innerHTML=("Datos Correctos, Bienvenido!!!");
            window.location.href ="./home_admin.html";
        }
        else{
            respuesta.innerHTML=("Datos Incorrectos, Intente de Nuevo");
        }
    }
}



