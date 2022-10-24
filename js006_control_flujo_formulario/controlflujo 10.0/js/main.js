
let btnquote = document.getElementById("btnquote");
let btnprint = document.getElementById("btnprint");

btnquote.addEventListener("click", function (e){
    e.preventDefault();
    let hours = parseInt(document.getElementById("inputhours").value);
    let rate = parseFloat(document.getElementById("inputrate").value);
    let cardtext = document.getElementById("cardtext");
    let cardcost = document.getElementById("cardcost");
    let iva = document.getElementById("checkiva").checked;
    let extras = document.getElementById("inputextras");
    let email = document.getElementById("inputemail").value;
    let name = document.getElementById("inputname").value;
    let fixedcost = parseFloat(document.getElementById("inputfcost").value);
    fixedcost = (isNaN(fixedcost) ? 0 : fixedcost);
    let changes = parseFloat(document.getElementById("inputchanges").value);
    changes = (isNaN(changes) ? 0 : changes);
    let flag = true;

    if (isNaN(hours)) {
        console.log("horas not a number");
        document.getElementById("inputhours").style.borderColor = "#FF0000";
        flag=false;
    } else { 
        document.getElementById("inputhours").value = hours;
        document.getElementById("inputhours").style.borderColor = "";
    }
    
    if (isNaN(rate)) {
        console.log("rate not a number");
        document.getElementById("inputrate").style.borderColor = "#FF0000";
        flag=false;
       } else { 
            document.getElementById("inputrate").value = rate;
            document.getElementById("inputrate").style.borderColor = "";
        }
    
    
    if (flag) {
        cardtext.innerHTML = `Email: ${email}, <br>Name: ${name}, <br> texto: <br> ${getRequeriments(extras)}
        `;
        cardcost.innerHTML += "Hours: "  + hours
    + "<br> Rate: $" + rate 
    + "<hr>" 
    + "<br>Mano de obra: $" + price(hours, rate)
    + "<br>" + "hosting: $" + year(extras)
    + "<hr>" 
    + "<br> IVA: $" + fiva(hours, rate, iva)
    + "<br> Total: $" + quote(hours, rate, iva, extras, changes, fixedcost).toFixed(2);
    }
});



function quote(h, r, iva, ex, p, fc) {
    p /= 100; /* p = p/100; */ /* change management */
    let result = (h*r) * (1+p) ;
/*   (inicio; cindicion; incremento/decremento) */
    let inx = 0; /* inicio */
    do{ /* condicion */
        console.log( ex.options[inx].selected);
        if (ex.options[inx].selected) {
            result += parseFloat(ex.options[inx].value);
        }
        inx++; /* incremento/decremento */
    } while(inx < ex.options.length); /* for inx */
    result += fc; /* fixed cost */


    if (iva){
        result *= 1.16;
    }

    return result;
    }

    function price(h, r){
        let hr = h*r
        return hr;
    }

function fiva(h, r, iva) {
    if (iva){
        return h*r*0.16;
    } 
    else {
        return 0;
    }
}

function year(index) {
    let year = 0;
    if (index==1) {  
        year += 1500; 
    } else if (index==2) {
        year += 2500; 
    } else if (index==3){
        year += 5000;
    }

    return year;
}

//normal
btnprint.addEventListener("click", function (e){
    e.preventDefault();
    window.print();
});

//arrow
const getRequeriments = (ex) => { 
let str = "";
 for (let inx = 0; inx <ex.options.lenght; inx++) {
    console.log( ex.options[inx].selected);
    if (ex.options[inx].selected) {
        str = ex.options[inx].text + "<br>";
    }
 }
 return str;
}