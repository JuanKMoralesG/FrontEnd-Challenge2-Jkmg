const listaClientes = () => fetch("http://localhost:3000/producto").then(respuesta => respuesta.json());

const crearProducto= (nombre,cant,valor) =>{
    return fetch("http://localhost:3000/producto",{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({nombre,cant,valor, id:uuid.v4()})
    })
}

const eliminarCliente = (id) =>{
    return fetch(`http://localhost:3000/producto/${id}`, {
        method: "DELETE"
    });
}

const detalleProducto = (id) =>{
    return fetch(`http://localhost:3000/producto/${id}`).then((respuesta) => respuesta.json())
}

const actualizarProducto = (nombre,cant,valor,id) => {
    return fetch(`http://localhost:3000/producto/${id}`,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({nombre,cant,valor}) 
    })
    .then((respuesta)=>respuesta)
    .catch((err)=>console.log(err));
}

export const productServices = {
    listaClientes,
    crearProducto,
    eliminarCliente,
    detalleProducto,
    actualizarProducto,
};


