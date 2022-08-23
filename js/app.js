import { validar } from "./validacion_form.js";

const nombre = document.querySelector("#nombre");
const asunto = document.querySelector("#asunto");
const mensaje = document.querySelector("#mensaje");

const botonEnviar =document.querySelector("#enviar");
const inputs = document.querySelectorAll("input");
const form = document.querySelector(".rodapie__form")

botonEnviar.addEventListener("click",(event)=>{
    event.preventDefault();
    const respuesta = document.querySelector(".input-message-error");
    if(nombre.value.length ==0 || asunto.value.length ==0 || mensaje.value.length ==0){
        respuesta.innerHTML="Recuerde que debe diligenciar todos los campos del formulario";
        inputs.forEach( input =>{
            input.addEventListener('blur',(input)=>{
                validar(input.target);
            })
        });
    }else{
        respuesta.innerHTML="Gracias por Contactarnos, Pronto estaremos en contacto con usted!!!";
        form.reset();
    }
});
