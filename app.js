const productos = [
  { nombre: 'iPhone 13', precio: 1000, stock: 10 },
  { nombre: 'Samsung Galaxy S21', precio: 850, stock: 5 },
  { nombre: 'Xiaomi Redmi Note 12', precio: 300, stock: 0 },
  { nombre: 'Motorola G20', precio: 250, stock: 3 },
  { nombre: 'Huawei P50', precio: 750, stock: 0 },
  { nombre: 'Realme 11', precio: 400, stock: 2 },
  { nombre: 'iPhone 13', precio: 1000, stock: 10 },
  { nombre: 'Samsung Galaxy S21', precio: 850, stock: 5 },
  { nombre: 'Xiaomi Redmi Note 12', precio: 300, stock: 0 },
  { nombre: 'Motorola G20', precio: 250, stock: 3 },
  { nombre: 'Huawei P50', precio: 750, stock: 0 },
  { nombre: 'Realme 11', precio: 400, stock: 2 }
];

const tbody = document.querySelector('#tabla-productos tbody');
const btnFiltrar = document.getElementById(`btn-filtrar`);
const btnLimpiar =document.getElementById(`btn-limpiar`);

function renderTabla(lista){
    tbody.innerHTML=``;

lista.forEach(producto => {
  const fila = document.createElement('tr');

  if (producto.stock === 0) {
    fila.classList.add('sin-stock');
  } else if (producto.stock <= 5) {
    fila.classList.add('stock-bajo');
  }

  fila.innerHTML = `
    <td>${producto.nombre}</td>
    <td>$${producto.precio}</td>
    <td>${producto.stock}</td>
  `;

  tbody.appendChild(fila);
});
}
renderTabla(productos); 


btnFiltrar.addEventListener(`click`, () =>{
    const productosCriticos = productos.filter(p => p.stock === 0 || p.stock <= 5);
    renderTabla(productosCriticos);
})

btnLimpiar.addEventListener(`click`, () =>{
    renderTabla(productos);
});