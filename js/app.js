let gdesc = document.querySelector("#gd").addEventListener("click", function(e){
    e.preventDefault();
});
//Modelo
let modeloVeh = document.getElementById("modelo");
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

let inputForm = document.createElement("input");
inputForm.setAttribute("type", "checkbox");
let labelForm = document.createElement("label");
labelForm.innerHTML = "TT";

function buttonde(){
    
    carrox();
    createForm();
    createt();
    vaciar();
    
}

function carrox(){
   if (carro.checked && radial.checked && pasajeros.checked && asimetrica.checked) {
    tablet.textContent = `la llanta es de carro, de construccion ${radial.value} y para pasajeros, asimetrica del modelo ${modeloVeh.value}`;
   }else if (carro.checked && radial.checked && pasajeros.checked && simetrica.checked) {
    tablet.textContent = "la llanta es de carro, de construccion radial y para pasajeros, simetrica";
   }else if (carro.checked && radial.checked && pasajeros.checked && hp.checked || ht.checked) {
    tablet.textContent = "la llanta es de carro, de construccion radial y para pasajeros, de alto rendimiento";
}else if (carro.checked == false) {
    
}
}
//modulo de concatenacion
//tablet.textContent = `la llanta es de carro, de construccion ${radial.value} y para pasajeros, asimetrica`;
//------------------------------------------------//
//modulo de vaciado de checkbox
let DescriptionForm = document.getElementById("descform");
function vaciar(){
    DescriptionForm.reset();
}
//Modulo captacion de datos
//tablet.textContent = `la llanta es de carro, de construccion ${radial.value} y para pasajeros, asimetrica del modelo ${modeloVeh.value}`;

//Modulo de creacion de html 
function createForm(){
    if(moto.checked == true){
        
        document.getElementById("motoForm").appendChild(inputForm);
        document.getElementById("motoForm").appendChild(labelForm);
        console.log("moto seleccionada")
    }
    
}
function createt(){ 
            document.querySelector("#st").appendChild(tablet);
}




