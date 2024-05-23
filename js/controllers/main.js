import { serviceProduct } from "../services/product-service.js";

const listProductos = document.querySelector("[data-product]");
// const form = document.querySelector("[data-form]");

console.log(listProductos)

function crearCard(name, price, image, id){
  const producto = document.createElement("div");
  producto.className="card";
  producto.innerHTML = `<img src="${image}" alt="ejemplo" class="img"/>
             <div class="card_container_info">
               <p>${name}</p>
               <div class="card_container_value">
               <p>${price} "$$"</p>
               <button class="delete-button" data-id="${id}">
               <img src="./img/iconBorrar.png" alt="Eliminar" data-eliminar/>
              </button>
               </div>
           </div>`;

  return producto;
}

async function listarProductos(){
  const listaProductos = await serviceProduct.listarProductos()

  console.log(listProductos)

  listaProductos.forEach(producto => listProductos.appendChild(crearCard(producto.name, producto.price, producto.image, producto.id)));
}

listarProductos();

// seccion eliminar productos

listProductos.addEventListener("click", async (event) => {
  event.preventDefault();

  const suprimir = event.target.closest(".delete-button");
  if(suprimir){
    const itemId = suprimir.dataset.id;
    try {
      await serviceProduct.eliminarProducto(itemId);
      alert("Producto eliminado exitosamente ");

      const cardSuprimir = suprimir.closest(".card");

      if(cardSuprimir){
        cardSuprimir.remove();
      }else {
        console.error("No se puede encontrar el elemento padre");
      }
    } catch (err){
      console.error("Error al eliminar el producto:", err);
    }
  }
});