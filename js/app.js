let gdesc = document.querySelector("#gd").addEventListener("click", function(e){
    e.preventDefault();
});
//tipo vehículo
let carro = document.getElementById("tc");
let moto = document.querySelector("#tm");
//Construcción
let radial = document.getElementById("rcr");
let convencional = document.getElementById("rcc")
//uso
let pasajeros = document.getElementById("p");
let LT = document.getElementById("lt");
let comercial = document.getElementById("cml");
let otr = document.getElementById("otr");
//tipo banda
let simetrica = document.getElementById("si");
let asimetrica= document.getElementById("as");
let unidireccional = document.getElementById("un");
let hp = document.getElementById("hp");
let ht = document.getElementById("ht");
let at = document.getElementById("at");
let rt = document.getElementById("rt");
let mt = document.getElementById("mt");

let tablet = document.createElement("p");

function buttonde(){
    
    carrox();
    createt();
}

function carrox(){
   if (carro.checked && radial.checked && pasajeros.checked && asimetrica.checked) {
    tablet.textContent = "la llanta es de carro, de construccion radial y para pasajeros, asimetrica";
   }else if (carro.checked && radial.checked && pasajeros.checked && simetrica.checked) {
    tablet.textContent = "la llanta es de carro, de construccion radial y para pasajeros, simetrica";
   }else if (carro.checked && radial.checked && pasajeros.checked && hp.checked || ht.checked) {
    tablet.textContent = "la llanta es de carro, de construccion radial y para pasajeros, de alto rendimiento";
}
}

function createt(){ 
            document.querySelector("#st").appendChild(tablet);
}




