/////////selectores CSS mediante queryselector///////////////////
// let elemento = document.querySelector("ul > li");
// console.log(elemento);
// elemento = document.querySelector("ul > li:last-child");
// console.log(elemento);
// let elementos = document.querySelectorAll("ul > li");
// console.log(elementos);
// let elementosfc = document.querySelectorAll("ul > li:first-child");
// console.log(elementosfc);
// let elementoslc = document.querySelectorAll("ul > li:last-child");
// console.log(elementoslc);
// let elementosnth = document.querySelectorAll("ul > li:nth-child(2)");
// console.log(elementosnth);
///////////////////////////////////////////////////

////////////////cambio de tema///////////////////////
//let elementosPorClase = document.getElementsByClassName("list-group-item");
//console.log(elementosPorClase);

let btnEjecutar = document.getElementById("btnEjecutar");

btnEjecutar.addEventListener("click", function(event) {
    let ul = document.getElementsByClassName("list-group");
   /*  let ul = document.getElementsByTagName(ul); */
   console.log(ul.length);
   console.log(ul[0]);
   let li = document.createElement("li"); //crear li
   li.innerText = "A fourth item"; //dentro de li
   li.className = "list-group-item"; //clase de li
   console.log(li);
//    ul[0].append(li.cloneNode(true)); //append (ultimo de la lista)

//    ul[1].prepend(li.cloneNode(true)); //prepend (primero de la lista)

//    ul[2].before(li.cloneNode(true)); //before (antes del ul)

//    ul[3].after(li.cloneNode(true)); //after (despues del ul)

/////de esta forma estamos agregando html/////
//    ul[4].insertAdjacentHTML("beforeend","<li class=`list-group-item`> a fifth item</li>");

////de esta forma agregamos el elemento creado/////
ul[4].insertAdjacentElement("beforeend", li);
});