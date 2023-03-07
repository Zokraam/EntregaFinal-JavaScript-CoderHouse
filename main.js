// Variables globales
let items = [];

// Función para agregar un item
function addItem(e) {
  e.preventDefault();
  const input = document.getElementById("item");
  const value = input.value.trim();
  if (value) {
    // Agregar el item al array
    items.push(value);
    // Guardar el array en el Storage
    localStorage.setItem("items", JSON.stringify(items));
    // Actualizar la lista en el DOM
    updateList();
    // Limpiar el campo de texto
    input.value = "";
  }
}

// Función para actualizar la lista en el DOM
function updateList() {
  const list = document.getElementById("list");
  // Limpiar la lista existente
  list.innerHTML = "";
  // Recorrer el array de items y agregarlos a la lista
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
}

// Función para cargar los items almacenados en el Storage
function loadItems() {
  const storedItems = localStorage.getItem("items");
  if (storedItems) {
    // Convertir el JSON almacenado en el Storage en un array
    items = JSON.parse(storedItems);
    updateList();
  }
}

// Evento de carga de la página
window.addEventListener("load", () => {
  loadItems();
});

// Evento de envío del formulario
const form = document.querySelector("form");
form.addEventListener("submit", addItem);
