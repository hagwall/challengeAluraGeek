async function listarProductos(){
    const conexion = await fetch("http://localhost:3000/productos");
    const conexionConvertida = conexion.json();

    // console.log(conexionConvertida);
    return conexionConvertida;
}

async function enviarProducto(name, price, image){
    const conexion = await fetch("http://localhost:3000/productos", {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({
            name: name,
            price: price,
            image: image
        })
    });

    const conexionConvertida = conexion.json();

    return conexionConvertida;
}

const eliminarProducto = (id) =>{
    return fetch(`http://localhost:3000/productos/${id}`,{
        method: "DELETE",
        headers: {
            "Content-Type":"application/json",
        },
    })
    .then((res) => res.json())
    .catch((err) => console.log(err));
}
export const serviceProduct={
    listarProductos, enviarProducto, eliminarProducto
}
