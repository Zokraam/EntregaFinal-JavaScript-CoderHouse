// let cardContainer = document.getElementById("card__container");
// let cart = document.getElementById("cart");
// let cartItemsContainer = document.getElementById("cartItems__container");

// let productos = [];

// const getDatos = async () => {
//   try {
//     const response = await fetch("./productos.json");
//     const data = await response.json();

//     productos = data;

//     cardCreator(productos);
//   } catch (error) {
//     console.log(error);
//   }
// };
// getDatos();

// function cardCreator(productos) {
//   productos.forEach((producto) => {
//     const div = document.createElement("div");
//     div.setAttribute("class", "col");
// div.innerHTML = `
//         <div class="card text-light" style="background-color: #0000009f; height: 100%">
//             <img src=${producto.imagen} class="card-img-top" alt="..." />
//             <div class="card-body">
//                 <h5 class="card-title">ARS$${producto.precio}</h5>
//                 <p class="card-text">${producto.descripcion}</p>

//                 <a href="#" class="btn btn-light" id="btn__${producto.id}">Añadir al carrito</a>
//             </div>
//         </div>
//     `;
//     cardContainer.append(div);

//     let boton = document.getElementById(`btn__${producto.id}`);

//     boton.addEventListener("click", (e) => {
//       e.preventDefault();
//       let nombreProducto = localStorage.length + 1;
//       localStorage.setItem(`Producto N°${nombreProducto}`, JSON.stringify(producto));
//       Toastify({
//         text: `Se agregó un producto a tu carrito!`,
//         duration: 3000,
//       }).showToast();
//     });
//   });
//   carrito();
// }

// const agregarAlCarrito = (prodId) => {
//   const item = productos.find((prod) => prod.id === prodId);
//   carrito.push(item);
//   carritoRefresh();
//   console.log(carrito);
// };

// const eliminarDelCarrito = (prodId) => {
//   const indice = carrito.findIndex((prod) => prod.id === prodId);
//   console.log(indice);
//   carrito.splice(indice, 1);
//   localStorage.setItem("carrito", JSON.stringify(carrito));
//   console.log(carrito);
//   carritoRefresh();
// };

// function carrito() {
//   let carritoActual = [];

//   for (let i = 0; i < localStorage.length; i++) {
//     carritoActual.push(localStorage.getItem(localStorage.key(i)));
//   }
// }

// botonVaciar.addEventListener("click", () => {
//   Swal.fire({
//     title: "Esta seguro que desea vaciar su carrito?",
//     text: "Se perderan todos los productos cargados!",
//     icon: "warning",
//     showCancelButton: true,
//     confirmButtonColor: "#d33",
//     cancelButtonColor: "#adff2f",
//     confirmButtonText: "Si, Vaciarlo!",
//     cancelButtonText: "Cancelar",
//   }).then((result) => {
//     if (result.isConfirmed) {
//       Swal.fire("Carrito vaciado!", "Su carrito se encuentra vaciado y listo para ser llenado nuevamente.", "success");
//       carrito.length = 0;
//       localStorage.setItem("carrito", JSON.stringify(carrito));
//       carritoRefresh();
//     }
//   });
// });

// const carritoRefresh = () => {
//   contenedorCarrito.innerHTML = "";
//   carrito.forEach((prod) => {
//     const div = document.createElement("div");
//     div.className = "productoEnCarrito";
//     div.innerHTML = `
//           <p>${prod.nombre}</p>
//           <p>Precio:$${prod.precio}</p>
//           <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
//           <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
//           `;
//     contenedorCarrito.appendChild(div);
//     localStorage.setItem("carrito", JSON.stringify(carrito));
//   });
//   contadorCarrito.innerText = carrito.length;
//   precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0);
// };

let stockProductos = [];
fetch("./productos.json")
  .then((response) => response.json())
  .then((data) => {
    stockProductos = data;
    chargeProducts(stockProductos);
  });

let cardContainer = document.getElementById("card__container");
const contenedorProductos = document.getElementById("contenedor-productos");
const contenedorProductos2 = document.getElementById("productos2-contenedor");
const contenedorCarrito = document.getElementById("carrito-contenedor");
const botonVaciar = document.getElementById("vaciar-carrito");
const contadorCarrito = document.getElementById("contadorCarrito");

let carrito = [];
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
    carritoRefresh();
  }
});

function chargeProducts() {
  stockProductos.forEach((producto) => {
    const div = document.createElement("div");
    div.setAttribute("class", "col");
    div.innerHTML = `
        <div class="card text-light" style="background-color: #0000009f; height: 100%">
            <img src=${producto.imagen} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">ARS$${producto.precio}</h5>
                <p class="card-text">${producto.descripcion}</p>
                <a href="#" class="btn btn-light" id="agregar${producto.id}">Añadir al carrito</a>
            </div>
        </div>
    `;
    cardContainer.append(div);
    const boton = document.getElementById(`agregar${producto.id}`);
    boton.addEventListener("click", () => {
      agregarAlCarrito(producto.id);
      Toastify({
        text: "Se agregó un producto",
        offset: {
          x: 0, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
          y: 60, // vertical axis - can be a number or a string indicating unity. eg: '2em'
        },
        style: {
          background: "#ffd000",
        },
        duration: 2000,
      }).showToast();
    });
  });
}

const agregarAlCarrito = (prodId) => {
  const item = stockProductos.find((prod) => prod.id === prodId);
  carrito.push(item);
  carritoRefresh();
  console.log(carrito);
};

const eliminarDelCarrito = (prodId) => {
  const indice = carrito.findIndex((prod) => prod.id === prodId);
  console.log(indice);
  carrito.splice(indice, 1);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  console.log(carrito);
  carritoRefresh();
};

botonVaciar.addEventListener("click", () => {
  Swal.fire({
    title: "Esta seguro que desea vaciar su carrito?",
    text: "Se perderan todos los productos cargados!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#adff2f",
    confirmButtonText: "Si, Vaciarlo!",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Carrito vaciado!", "Su carrito se encuentra vaciado y listo para ser llenado nuevamente.", "success");
      carrito.length = 0;
      localStorage.setItem("carrito", JSON.stringify(carrito));
      carritoRefresh();
    }
  });
});
const carritoRefresh = () => {
  contenedorCarrito.innerHTML = "";
  carrito.forEach((prod) => {
    const div = document.createElement("div");
    div.className = "productoEnCarrito";
    div.innerHTML = `
          <p>${prod.nombre}</p>
          <p>Precio:$${prod.precio}</p>
          <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
          `;
    contenedorCarrito.appendChild(div);
    localStorage.setItem("carrito", JSON.stringify(carrito));
  });
  contadorCarrito.innerText = carrito.length;
  precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.precio, 0);
};
