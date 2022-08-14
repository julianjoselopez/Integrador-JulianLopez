let producto = document.getElementById("producto");
let precio = document.getElementById("precio");
let agregar = document.getElementById("btnagregar");
let descuento = document.getElementById("btndescuento");
let lista = document.getElementById("lista");
let total = document.getElementById("total");
let productos: string[] = [];
let precios: number[] = [];
let suma: number = 0;
let precioConDescuento: number = 0;

const agregarAlCarrito = () => {
  if (precio.value < 1) {
    alert("ingrese un numero mayor que cero");
  } else {
    productos.push(producto.value);
    precios.push(Number(precio.value));
    lista?.innerHTML += `<li>${producto.value} : $${precio.value}</li>`;
    // vaciar los campos de entrada
    producto.value = "";
    precio.value = "";
    suma = 0;
    for (let indice: number = 0; indice < precios.length; indice++) {
      suma += Number(precios[indice]);
    }

    total?.innerHTML = suma;
  }
};

const hayDescuento = () => {
  if (suma > 2500) {
    precioConDescuento = suma * 0.9;
    descuento1?.innerHTML = `Su compra tiene un descuento de 10 %. Ud Pagará $ ${precioConDescuento}`;
  } else {
    descuento1?.innerHTML = `Con su compra de $ 2500 puede acceder a un descuento del 10 % `;
  }
};

agregar?.addEventListener("click", agregarAlCarrito);
descuento?.addEventListener("click", hayDescuento);
