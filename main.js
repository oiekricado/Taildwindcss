"use strict";

function verificar() {
  let codigo = document.getElementById("codigoderastreo").value;
  let cliente = ["ricardo", "Ricardo Barragan Ramos"];
  let empresa = "Senco";
  let formadepago = "contado";
  let autorizacion = "12/10/21";
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

    if (autorizacion.length !== 0) {
        let barra = document.getElementById("contenedor2");
        barra.innerHTML = `
            <div id="barra" class="bg-purple-300 h-10 w-10 rounded-full ">
            `;}

    if (diseño.length !== 0) {
          let barra = document.getElementById("contenedor2");
          barra.innerHTML = `
            <div id="barra" class="bg-red-200 h-10 w-10 rounded-full ">
                `;}
    if (impresion.length !== 0) {
          let barra = document.getElementById("contenedor2");
          barra.innerHTML = `
            <div id="barra" class="bg-red-200 h-10 w-10 rounded-full ">
                `;}
    if (taller.length !== 0) {
          let barra = document.getElementById("contenedor2");
          barra.innerHTML = `
            <div id="barra" class="bg-red-200 h-10 w-10 rounded-full ">
                `;}
    if (entregado.length !== 0) {
          let barra = document.getElementById("contenedor2");
          barra.innerHTML = `
            <div id="barra" class="bg-red-200 h-10 w-10 rounded-full ">
                `;}


                
  
  let fechaprueba = "12/10/2021";
  let fechaautorizacion = document.getElementById("autorizacionfecha");
  fechaautorizacion.innerHTML = fechaprueba;


  

  console.log("todo cargo bien");

  
}
