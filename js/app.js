//tipo vehículo
let carro = document.getElementById("car");
let moto = document.getElementById("mBike");
let otr = document.getElementById("otr");
let camion = document.getElementById("truck");
let bicicleta = document.getElementById("bike");


//obtengo el formulario
let cForm = document.getElementById("contentForm");
//Variable de la descripción
let asD = document.createElement("p");
//button
let butg = document.createElement("button");
//salto de linea
let br = document.createElement("br");
let br2 = document.createElement("br");
let br3 = document.createElement("br");
//INPUTS
let usoTitle = document.getElementById("use");
//inputs de uso carro
let contentformP = document.createElement("input");
let contentformC = document.createElement("input");
let contentformLt = document.createElement("input");
//inputs de banda carro
let contentformAs = document.createElement("input");
let contentformS = document.createElement("input");
let contentformH = document.createElement("input");
let contentformAt = document.createElement("input");
let contentformRt = document.createElement("input");
let contentformMt = document.createElement("input");
//INPUTS Neumático moto
let contentformTT = document.createElement("input");
let contentformTL = document.createElement("input");
//inputs banda moto
let contentformSc = document.createElement("input");
let contentformCI = document.createElement("input");
let contentformSS = document.createElement("input");
let contentformTRL = document.createElement("input");

//Funcion de llamada
function universal(){
    validate();
    carroForm();
    motosForm();
}

//Funcion de validación
function validate(){
    if(carro.checked == false && moto.checked == false && otr.checked == false && camion.checked == false && bicicleta.checked == false){
        alert("Selecciona un valor");
    }else{
        console.log("seleccionaste una opcion");
    }

}


//Genera el formulario de carros
function carroForm(){
    if(carro.checked){
        
        usoTitle.innerHTML = "Uso y tipo de banda del carro";

        
        contentformP.setAttribute("type", "checkbox");
        contentformP.setAttribute("id", "p");
        let labelFormP = document.createElement("label");
        labelFormP.textContent ="P";

       
        contentformC.setAttribute("type", "checkbox");
        contentformC.setAttribute("id", "c");
        let labelFormC = document.createElement("label");
        labelFormC.textContent ="C";

        
        contentformLt.setAttribute("type", "checkbox");
        contentformLt.setAttribute("id", "lt");
        let labelFormLt = document.createElement("label");
        labelFormLt.textContent ="LT";

        let br = document.createElement("br");
        let br2 = document.createElement("br");

        
        contentformAs.setAttribute("type", "checkbox");
        contentformAs.setAttribute("id", "as");
        contentformAs.setAttribute("value", "asimetrica");
        let labelFormAs = document.createElement("label");
        labelFormAs.textContent ="Asimetrica";
        
        
        contentformS.setAttribute("type", "checkbox");
        contentformS.setAttribute("id", "s");
        let labelFormS = document.createElement("label");
        labelFormS.textContent ="Simetrica";

        
        contentformH.setAttribute("type", "checkbox");
        contentformH.setAttribute("id", "h");
        let labelFormH = document.createElement("label");
        labelFormH.textContent ="Hp/Ht";

        
        contentformAt.setAttribute("type", "checkbox");
        contentformAt.setAttribute("id", "at");
        let labelFormAt = document.createElement("label");
        labelFormAt.textContent ="At";

        
        contentformRt.setAttribute("type", "checkbox");
        contentformRt.setAttribute("id", "rt");
        let labelFormRt = document.createElement("label");
        labelFormRt.textContent ="Rt";

        
        contentformMt.setAttribute("type", "checkbox");
        contentformMt.setAttribute("id", "mt");
        let labelFormMt = document.createElement("label");
        labelFormMt.textContent ="Mt";

        let br3 = document.createElement("br");
        let br4 = document.createElement("br");
        
        
        butg.textContent = "Generar Descripcion";
        butg.setAttribute("type", "button");
        butg.setAttribute("id", "buttondc");
        butg.addEventListener("click", generarDescC);

        let br5 = document.createElement("br");
        let br6 = document.createElement("br");
        
        

        document.getElementById("contentForm").appendChild(contentformP);
        document.getElementById("contentForm").appendChild(labelFormP);
        document.getElementById("contentForm").appendChild(contentformC);
        document.getElementById("contentForm").appendChild(labelFormC);
        document.getElementById("contentForm").appendChild(contentformLt);
        document.getElementById("contentForm").appendChild(labelFormLt);
        document.getElementById("contentForm").appendChild(br);
        document.getElementById("contentForm").appendChild(br2);
        document.getElementById("contentForm").appendChild(contentformAs);
        document.getElementById("contentForm").appendChild(labelFormAs);
        document.getElementById("contentForm").appendChild(contentformS);
        document.getElementById("contentForm").appendChild(labelFormS);
        document.getElementById("contentForm").appendChild(contentformH);
        document.getElementById("contentForm").appendChild(labelFormH);
        document.getElementById("contentForm").appendChild(contentformAt);
        document.getElementById("contentForm").appendChild(labelFormAt);
        document.getElementById("contentForm").appendChild(contentformRt);
        document.getElementById("contentForm").appendChild(labelFormRt);
        document.getElementById("contentForm").appendChild(contentformMt);
        document.getElementById("contentForm").appendChild(labelFormMt);
        document.getElementById("contentForm").appendChild(br3);
        document.getElementById("contentForm").appendChild(br4);
        document.getElementById("contentForm").appendChild(butg);
        document.getElementById("contentForm").appendChild(br5);
        document.getElementById("contentForm").appendChild(br6);
        document.getElementById("contentForm").appendChild(asD);
    }
}

function motosForm(){
    if(moto.checked){
        usoTitle.innerHTML = "Uso y Neumático de la moto";

        contentformTT.setAttribute("type", "checkbox");
        contentformTT.setAttribute("id", "p");
        let labelFormTT = document.createElement("label");
        labelFormTT.textContent ="TT";

        contentformTL.setAttribute("type", "checkbox");
        contentformTL.setAttribute("id", "p");
        let labelFormTL = document.createElement("label");
        labelFormTL.textContent ="TL";

        contentformSc.setAttribute("type", "checkbox");
        contentformSc.setAttribute("id", "p");
        let labelFormSc = document.createElement("label");
        labelFormSc.textContent ="Scooter";

        contentformCI.setAttribute("type", "checkbox");
        contentformCI.setAttribute("id", "p");
        let labelFormCI = document.createElement("label");
        labelFormCI.textContent ="Ciudad";

        contentformTRL.setAttribute("type", "checkbox");
        contentformTRL.setAttribute("id", "p");
        let labelFormTRL = document.createElement("label");
        labelFormTRL.textContent ="Trail";

        contentformSS.setAttribute("type", "checkbox");
        contentformSS.setAttribute("id", "p");
        let labelFormSS = document.createElement("label");
        labelFormSS.textContent ="Super Sport";

        butg.textContent = "Generar Descripcion";
        butg.setAttribute("type", "button");
        butg.setAttribute("id", "buttondc");
        butg.addEventListener("click", generarDescM);

        document.getElementById("contentForm").appendChild(labelFormTT);
        document.getElementById("contentForm").appendChild(contentformTT);
        document.getElementById("contentForm").appendChild(labelFormTL);
        document.getElementById("contentForm").appendChild(contentformTL);
        document.getElementById("contentForm").appendChild(br);
        document.getElementById("contentForm").appendChild(br2);
        document.getElementById("contentForm").appendChild(labelFormSc);
        document.getElementById("contentForm").appendChild(contentformSc);
        document.getElementById("contentForm").appendChild(labelFormCI);
        document.getElementById("contentForm").appendChild(contentformCI);
        document.getElementById("contentForm").appendChild(labelFormTRL);
        document.getElementById("contentForm").appendChild(contentformTRL);
        document.getElementById("contentForm").appendChild(labelFormSS);
        document.getElementById("contentForm").appendChild(contentformSS);
        document.getElementById("contentForm").appendChild(br);
        document.getElementById("contentForm").appendChild(br3);
        document.getElementById("contentForm").appendChild(butg);

    }
}

//Genera la descripción de carros
function generarDescC(){
    if(carro.checked){
        switch (carro.checked) {
            case contentformAs.checked && contentformP.checked:
                asD.textContent ="llanta as y p seleccionada";
                break;
            case contentformAs.checked:
                asD.textContent ="Asimetrica seleccionada";
                break;
            case contentformS.checked && contentformP.checked:
                asD.textContent ="llanta s y p seleccionada";
                break;    
            case contentformS.checked:
                asD.textContent ="Simetrica seleccionada";
                break;
            case contentformH.checked:
                asD.textContent ="Alto rendimiento seleccionada";
                break;
            case contentformAt.checked && contentformLt.checked:
                asD.textContent ="llanta at y lt seleccionada";
                break;    
            case contentformAt.checked:
                asD.textContent ="At seleccionada";
                break;
            case contentformAt.checked && contentformLt.checked:
                asD.textContent ="llanta rt y lt seleccionada";
                break;    
            case contentformRt.checked:
                asD.textContent ="Llanta mixta";
                break;
            case contentformAt.checked && contentformLt.checked:
                asD.textContent ="llanta mt y lt seleccionada";
                break;    
            case contentformMt.checked:
                asD.textContent ="mT Seleccionada";
                break;            
            default: asD.textContent = "Selecciona algo"
                break;
        }
    }
    
}

function generarDescM() {
    
}



