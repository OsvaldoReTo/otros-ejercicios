/* 
let a = parseInt(document.getElementById("campo_a").value);
let b = parseInt(document.getElementById("campo_b").value);
let c = parseInt(document.getElementById("campo_c").value);

let res1 = document.getElementById("resultado1");
let res2 = document.getElementById("resultado2");
res1.innerHTML = 0;
res2.innerHTML = 0; */

/* FormulaGeneralPositiva */
/* function formulaGeneralPositiva(a, b, c) {
    let x;
    x = (-b + Math.sqrt((b * b) - (4 * a * c))) / (2 * a);
    return x;
} */
/* FormulaGeneralNegativa */
/* function formulaGeneralNegativa(a, b, c) {
    let x;
    x = (-b - Math.sqrt((b * b) - (4 * a * c))) / (2 * a);
    return x;
} */

/* Boton formula */
let botonFG = document.getElementById("boton_formula");

botonFG.addEventListener("click", function (e) { 
    e.preventDefault();
    console.log("botonFG click");
    let a = parseInt(document.getElementById("campo_a").value);
    let b = parseInt(document.getElementById("campo_b").value);
    let c = parseInt(document.getElementById("campo_c").value);
        document.getElementById("campox1").value = fgnegativo(a, b, c);
        document.getElementById("campox2").value = fgpositivo(a, b, c);
}); 

/* formula alternativa */
const fgnegativo = function (a, b, c) {
    let x;
    x = (-b - Math.sqrt((b * b) - (4 * a * c))) / (2 * a);
    return x;
}
const fgpositivo = function (a, b, c) {
    let x;
    x = (-b + Math.sqrt((b * b) - (4 * a * c))) / (2 * a);
    return x;
}