// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.



let amigos =[];
let numeroR= 0;
let ListaHTML = document.getElementById('listaAmigos');

function asignarTexto(etiqueta,textoo){
    txtHTML= document.querySelector(etiqueta);
    txtHTML.innerHTML= textoo;
    

}
function limpiarCaja(){
    document.querySelector('#amigo').value = '';  // se usa para limpiar las cajas donde el usuario ingresa datos  + '<br>'

}


function IngresandoDatosLI(){
    ListaHTML.innerHTML = '';
    ListaHTML.style.color='';
    ListaHTML.style.fontWeight = '';
    for (i = 0; i < amigos.length; i++) {
        ListaHTML.innerHTML+= '<li>'+amigos[i]+'</li>';
    }

}

function agregarAmigo(){
    let valorIngresado = document.getElementById('amigo').value ; // funcion para llamar al ID del index.html
    
    if(valorIngresado == ''){
        alert('Por favor, inserte un nombre');
    }else {
        if(amigos.includes(PrimeraLetraMayuscula(valorIngresado))){
            alert(`El Nombre Ingresado ${valorIngresado}, ya existe en la Lista ` );
            limpiarCaja();
        }else{
            amigos.push(PrimeraLetraMayuscula(valorIngresado));
            //asignarTexto('li',amigos);
            IngresandoDatosLI();
            limpiarCaja();
    }
    }
    return;
}


function PrimeraLetraMayuscula(NombreIngresado){
    let Letra1 = NombreIngresado.charAt(0).toUpperCase();
    let OracionTotal = NombreIngresado.slice(1);

    return Letra1 + OracionTotal;
}

//Activar con la tecla enter
document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        agregarAmigo();
    }
});


//cambiar color letra
function CambioColor(name,color2) {
    var a = document.getElementById(name);
    a.style.color = color2;
}

function sortearAmigo(){
    let numerogeneradooo=0
    if (amigos.length == 0 ){
        alert('No Ingresaste ningun nombre')
    }else{
        numerogeneradooo =  parseInt(Math.random()*amigos.length);
        //alert(numerogeneradooo)
        //alert(`El Amigo Secreto ganador es  = ${amigos[numerogeneradooo]}`);
        var VarTemp = amigos[numerogeneradooo]
        //clean Listas
        amigos=[];
        ListaHTML.innerHTML = '';
        ListaHTML.innerHTML=`El amigo secreto sorteado es : ${VarTemp} `;
        ListaHTML.style.color='green';
        ListaHTML.style.fontWeight = 'bold';

    }

}