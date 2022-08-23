import { productServices } from "../services/product_service.js";

const formulario = document.querySelector("[data-form]");

const obtenerInfo = () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    if(id== null){
        window.location.href = "../screens/error.html"
    }

    const nombre = document.querySelector("[data-nombre]");
    const cant = document.querySelector("[data-cant]");
    const valor = document.querySelector("[data-valor]");

    productServices.detalleProducto(id).then((producto) => {
        nombre.value = producto.nombre;
        cant.value = producto.cant;
        valor.value = producto.valor;
    });
}

obtenerInfo();

formulario.addEventListener('submit', (evento)=>{
    evento.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const nombre = document.querySelector("[data-nombre]").value;
    const cant = document.querySelector("[data-cant]").value;
    const valor = document.querySelector("[data-valor]").value;

    console.log(nombre," ",cant," ",valor);

    productServices.actualizarProducto(nombre,cant,valor,id).then(()=>{
        window.location.href = "../screens/editada_complete.html"
    });

})


