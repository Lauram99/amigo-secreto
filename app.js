// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos=[];
let vacio='';
let nombresActualizados=[];


function agregarAmigo(){
    let valorIngresado= document.getElementById('amigo').value;
    if (valorIngresado == vacio){
        alert('Por favor, ingrese un nombre');
        limpiarcaja();
    } else{
        amigos.push(valorIngresado);
        limpiarcaja();
        actualizarLista();
    }
    
}

function limpiarcaja(){
    document.querySelector('#amigo').value = '';
}

function actualizarLista(){
    nombresActualizados = [...new Set(amigos)];
    if (nombresActualizados.size === amigos.length) {
        console.log("No hay nombres repetidos.");
        return nombresActualizados;
        
    } else {
        console.log("Hay nombres repetidos.");
        console.log(nombresActualizados);
        return nombresActualizados;
    }
}

function sortearAmigo(){
    if (nombresActualizados != vacio){
        let nombresSize=nombresActualizados.length;
        console.log(nombresSize);
        let numeroGenerado =  Math.floor(Math.random()*nombresSize);
        console.log(numeroGenerado);
        let amigoSecreto=nombresActualizados[numeroGenerado];
        console.log(amigoSecreto);
        asignarTextoElemento('h2',`Tu amigo secreto es: ${amigoSecreto}`);

        
    }
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


    

