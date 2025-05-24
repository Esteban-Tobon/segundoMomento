// 
//  precio de la pizza seleccionada
function obtenerPrecioPizza() {
    const precios = {
        "queso": 14000,
        "jamon_y_Queso": 16000,
        "especial": 20000
    };
    const tipoPizza = document.getElementById("tip_pizza").value;

    if (!tipoPizza || !precios[tipoPizza]) {
        alert("Selecciona un tipo de pizza válido.");
        return 0; // devuelve 0 si es inválido
    }

    return precios[tipoPizza];
}


//  obtener ingredientes extra 
function obtenerIngredientesExtra() {
  const ingredientes = [];
  if (document.getElementById("maiz").checked) ingredientes.push("maiz");
  if (document.getElementById("queso_extra").checked) ingredientes.push("queso");
  if (document.getElementById("peperoni").checked) ingredientes.push("peperoni");
  return ingredientes;
}

// calcular el precio de los ingredientes extra
function calcularPrecioIngredientesExtra(ingredientes) 
{
    const precios = {
        "maiz": 2000,
        "queso": 10000,
        "peperoni": 15000
    };
    let total = 0;
    ingredientes.forEach(ingrediente => {
        if (precios[ingrediente]) {
            total += precios[ingrediente];
        }
    });
    return total;
}

//calcular total general
function calcularTotal(precioPizza, cantidad, precioExtras) {
  return (precioPizza * cantidad) + precioExtras;
}

function mostrarResumen() {
  const tipoPizza = document.getElementById("tip_pizza").value;
  const cantidad = parseInt(document.getElementById("cantidad").value);
  const ingredientes = obtenerIngredientesExtra();

  const precioBase = obtenerPrecioPizza();
  const precioExtras = calcularPrecioIngredientesExtra(ingredientes);
  const total = calcularTotal(precioBase, cantidad, precioExtras);

  const resumenHTML = `
    <h3>Resumen del pedido:</h3>
    <p><strong>Tipo de pizza:</strong> ${tipoPizza}</p>
    <p><strong>Cantidad:</strong> ${cantidad}</p>
    <p><strong>Ingredientes extra:</strong> ${ingredientes.length > 0 ? ingredientes.join(", ") : "Ninguno"}</p>
    <p><strong>Total a pagar:</strong> $${total.toLocaleString("es-CO")}</p>
  `;
  document.getElementById("resumen_pedido").innerHTML = resumenHTML;
}

// Asignar evento al botón
document.getElementById("calcular_total").addEventListener("click", mostrarResumen);