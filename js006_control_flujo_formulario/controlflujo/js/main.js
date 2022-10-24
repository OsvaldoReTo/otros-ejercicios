
let btnquote = document.getElementById("btnquote");


btnquote.addEventListener("click", function (e){
    e.preventDefault();
    let hours = parseInt(document.getElementById("inputhours").value);
    let rate = parseFloat(document.getElementById("inputrate").value);
    let cardtext = document.getElementById("cardtext");
    let iva = document.getElementById("checkiva").checked;
    let extras = document.getElementById("inputextras");
    console.log(extras.selectedIndex); /* funciona por numero de opcion, puedes ver en la consola */
    console.log(iva);
    cardtext.innerHTML += "Hours: "  + hours
    + "<br> Rate: $" + rate 
    + "<hr>" 
    + "<br> IVA: $" + fiva(hours, rate, iva)
    + "<br> Total: $" + quote(hours, rate, iva, extras.selectedIndex);
});

function quote(h, r, iva, index) {
    let result = 0;
    if (iva==true){
        result = h*r*1.16;
    } else {
        result = h*r;
    }

    if (index==1) {  
        result += 1500; 
    } else if (index==2) {
        result += 2500; 
    } else if (index==3){
        result += 5000;
    }
    return result;
    }



function fiva(h, r, iva) {
    if (iva){
        return h*r*0.16;
    } 
    else {
        return 0;
    }
}
