const productos = [
  { id: 1, nombre: "Remera", precio: 2500 },
  { id: 2, nombre: "Jean", precio: 4000 },
  { id: 3, nombre: "Zapatilla", precio: 12500 },
  { id: 4, nombre: "Musculosa", precio: 2000 },
  { id: 5, nombre: "Short", precio: 3000 },
  { id: 6, nombre: "Camisa", precio: 4500 },
];

let listado = productos.map((productos) => productos.id + "_" + productos.nombre + " $" + productos.precio);
let nombrePrecio = productos.map((productos) => productos.nombre + " $" + productos.precio);
let precios = productos.map((productos) => productos.precio);

total_compra = 0;
total_prod = [];

function Main() {
  let usuario = prompt("Ingrese su nombre");
  op = prompt("Holaaa " + usuario + ", elige opcion del producto deseado:\n" + listado.join("\n") + "\n7_Salir");
  while (op != 7) {
    total_compra = total_compra + buscarPrecio(op);
    total_prod.push(nombrePrecio[op - 1]);
    alert("Productos seleccionados:\n" + total_prod.join("\n") + "\nCOMPRA TOTAL: $" + total_compra);
    op = prompt("Elige opcion del producto deseado:\n" + listado.join("\n") + "\n7_Salir \nCOMPRA TOTAL: $" + total_compra);
    if (op == 7) {
      alert("Compra finalizada, muchas gracias por elegirnos!!");
    }
  }
}

function buscarPrecio(op) {
  const buscarPrecio = precios[op - 1];
  return buscarPrecio;
}
Main();
