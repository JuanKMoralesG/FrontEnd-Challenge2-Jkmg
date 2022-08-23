import { productServices } from "../services/product_service.js";

const crearNuevaLinea = (nombre,cant,valor,id) =>{
    const linea= document.createElement("tr");
    const contenido= `
        <td class="td" data-td>${nombre}</td>
        <td>${cant}</td>
        <td>${valor}</td>
        <td>
            <ul class="table__button-control">
                <li>
                    <a href="../screens/editar.html?id=${id}" class="simple-button simple-button--edit">Editar</a>
                </li>
                <li>
                    <button class="simple-button simple-buton--delete" type="button" id="${id}">
                        Eliminar
                    </button>
                </li>
            </ul>
        </td>`;
    linea.innerHTML = contenido;
    const btn = linea.querySelector("button");
    btn.addEventListener("click",() => {
        const id = btn.id;
        productServices.eliminarCliente(id),then( respuesta => {
            console.log(respuesta);
        }).catch((error)=>alert("Ocurrio un Error"));
    })
    return linea;
};
const table = document.querySelector("[data-table]");

productServices.listaClientes().then((data)=>{
    data.forEach(({nombre,cant,valor,id}) =>{
        const nuevaLinea = crearNuevaLinea(nombre,cant,valor,id);
        table.appendChild(nuevaLinea);
    });
}).catch((error)=>alert("Ocurrio un Error"));

