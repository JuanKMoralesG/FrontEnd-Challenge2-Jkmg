export function validar(input){
    
    const tipoDeInput = input.dataset.tipo;

    if(input.validity.valid){
        input.parentElement.classList.remove(".rodapie__form-input--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML="";
    }else {
        input.parentElement.classList.add(".rodapie__form-input--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML=mostrarMensajeError(tipoDeInput,input);
    }
}

const tipoErrores=[
    "valueMissing",
    "patterMismatch",
]

const mensajesError ={
    nombre: {
        valueMissing:"El Nombre No puede estar Vacio",
        patterMismatch: "El Nombre debe Contener Máximo 40 Caracteres"
    },
    asunto:{
        valueMissing:"El Asunto No puede estar Vacio",
        patterMismatch: "El Asunto debe Contener Máximo 40 Caracteres"
    },
    mensaje:{
        valueMissing:"El Mensaje No puede estar Vacio",
        patterMismatch: "La Mensaje debe Contener Máximo 120 Caracteres"
    },
}

function mostrarMensajeError(tipoDeInput,input){
    let msj= "";
    tipoErrores.forEach( error =>{
        if(input.validity[error]){
            msj= mensajesError[tipoDeInput][error];
        }
    })
    return msj
}


