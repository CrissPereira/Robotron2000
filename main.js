const controle = document.querySelectorAll("[data-controle-ajuste]");

for (contador = 0; contador<controle.length; contador ++){

    const teclas = controle[contador];

    teclas.addEventListener("click", (evento) => {manipulaDados(evento.target.textContent, evento.target.parentNode)})

    console.log(teclas.parentNode)
}

function manipulaDados (operacao, controle){ 

    const peças = controle.querySelector("[data-controle-contador]"); 

    if(operacao === "+"){
        peças.value = parseInt(peças.value) +1;
    } else {
        peças.value = parseInt(peças.value) -1;
    }
}



