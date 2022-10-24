let nombres =[ "Martín Nuñez", "Alexander Delgado", "Miguel Nuñez", "Mafer Hernández",
                "Mario Zarate", "Juan Manuel Valadez", "Akari Gutiérrez", "Nohemí Castañeda",
                "Gadi Medero", "Gustavo González", "Luis Enrique Medina"];
console.log(nombres.length);
console.log(nombres[4]); //Mario
let tabla = document.getElementById("tabla_nombres");
tabla.innerHTML = `<thead><tr><th scope="col">#</th><th scope="col">Nombre</th>
        <th scope="col">Apellido</th></tr></thead><tbody>`;
let a = "";    let n = "";
for (let cont = 0; cont < nombres.length; cont++)  {
    console.log(nombres[cont].split(" ").length);
    if (nombres[cont].split(" ").length==2) {
        n = nombres[cont].split(" ")[0];
        a = nombres[cont].split(" ")[1];
    } else {
        n = nombres[cont].split(" ")[0] + " " + nombres[cont].split(" ")[1];
        a = nombres[cont].split(" ")[2];
    }//else
    tabla.innerHTML+= `<tr> <th scope="row">${cont}</th>
            <td>${n}</td>
            <td>${a}</td></tr>`;
}//for cont
tabla.innerHTML += `</tbody>`; 