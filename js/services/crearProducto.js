import { serviceProduct } from "./product-service.js";

const formulario = document.querySelector("[data-formulario]");

async function crearProducto(evento){

    evento.preventDefault();
    const name = document.querySelector("[data-nombre]").value;
    const price = document.querySelector("[data-precio]").value;
    const image = document.querySelector("[data-imagen]").value;

    await serviceProduct.enviarProducto(name,price, image);

    console.log("envio exitoso")
}


formulario.addEventListener("submit", evento => crearProducto(evento));
