'use strict'


function verificar() {
    let codigo = document.getElementById("codigoderastreo").value;
  let cliente = ["ricardo", "Ricardo Barragan Ramos"];
  let empresa = "Senco";
  let formadepago = "contado";
  console.log("funciono");
  let contenedor1 = document.getElementById("contenedor1");
  contenedor1.innerHTML = ` 
    

    <div class="bg-gray-100 w-56 h-auto p-3 rounded-md my-5 mx-10 shadow-xl    ">
        <h1 class="text-lg ">📋Pedido</h1>
        <h2 class="text-xl">${codigo}</h2>
    </div>

    <div class="bg-gray-100 w-56 h-auto p-3 rounded-md my-5 mx-10 shadow-xl ">
        <h1 class="text-lg ">👨‍💼Cliente</h1>
        <h2 class="text-xl">${cliente[1]}</h2>
    </div>

    <div class="bg-gray-100 w-64 h-auto p-3 rounded-md my-5 mx-10 shadow-xl ">
        <h1 class="text-lg ">🏢Empresa</h1>
        <h2 class="text-xl">${empresa}</h2>
    </div>

    <div class="bg-gray-100 w-64 h-auto p-3 rounded-md my-5 mx-10 shadow-xl ">
        <h1 class="text-lg ">💵Forma de pago</h1>
        <h2 class="text-xl">${formadepago}</h2>
    </div>
    `;
  
  }
        


