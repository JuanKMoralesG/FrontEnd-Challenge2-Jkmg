import { productServices } from "../services/product_service.js";

const formulario = document.querySelector(".agregar__form");

formulario.addEventListener("submit", (evento) =>{
    evento.preventDefault();
    const nombre=document.querySelector("[data-nombre]").value;
    const cant=document.querySelector("[data-cant]").value;
    const valor=document.querySelector("[data-valor]").value;
    productServices.crearProducto(nombre,cant,valor).then(() =>{
        window.location.href = "../screens/agregar_complete.html";
    }).catch((error)=>console.log(err));
});