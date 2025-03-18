let amigos = [];  // Arreglo para guardar los amigos

//Agregar a un amigo a la lista
function agregarAmigo() {
    const amigoInput = document.getElementById("amigo");
    //Elimina espacio en blanco al inicio, final y repetidos de una cadena de texto
    const amigoNombre = amigoInput.value.trim();

    //Valida que no este vacío y que sea un nombre
    if(amigoNombre === "" || !isNaN(amigoNombre)){
        alert("Por favor, ingresa un nombre válido.");
        amigoInput.value = "";
        return;
    }
    
    amigos.push(amigoNombre);
    actualizarListaAmigos();
    amigoInput.value = ""; //Limpia el campo de texto
}

//genera una lista dinamica
function actualizarListaAmigos(){
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

//compara si el valor de length es igual a cero nos da el alert
function sortearAmigo(){
    if (amigos.length === 0) {
        alert("Por favor, añada al menos un amigo.");
        return;
    }

    // nos da nombres aleatorios
    const amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];
    mostrarResultado(amigoSecreto);
}

function mostrarResultado(amigo) {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>Tu Amigo secreto es: <strong>${amigo}</strong></li>`;                
}