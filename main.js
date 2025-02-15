const controle = document.querySelectorAll("[data-controle]");
const estatistica =document.querySelectorAll("[data-estatistica]")
const pecas = {
    "bracos": {
      "forca": 29,
      "poder": 35,
      "energia": -21,
      "velocidade": -5,
    },
  
    "blindagem": {
      "forca": 41,
      "poder": 20,
      "energia": 0,
      "velocidade": -20,
    },
    "nucleos": {
      "forca": 0,
      "poder": 7,
      "energia": 48,
      "velocidade": -24,
    },
   "pernas": {
      "forca": 27,
      "poder": 21,
      "energia": -32,
      "velocidade": 42,
    },
    "foguetes": {
      "forca": 0,
      "poder": 28,
      "energia": 0,
      "velocidade": -2,
    },
  };
const cores = document.querySelectorAll("[data-cor]")

for (contador = 0; contador<controle.length; contador ++){

    const teclas = controle[contador];

    //Click!
    teclas.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        atualizaEstatisticas(evento.target.dataset.peca)
    })
}

function manipulaDados (operacao, controle){ 

    const peças = controle.querySelector("[data-contador]"); 

    if(operacao === "+"){
        peças.value = parseInt(peças.value) +1;
    } else {
        peças.value = parseInt(peças.value) -1;
    }
}

function atualizaEstatisticas(peca){

estatistica.forEach( (elemento) => {
    elemento.textContent = parseInt(elemento.textContent) +  pecas[peca][elemento.dataset.estatistica]
});

}

cores.forEach( (elemento) => {
  elemento.addEventListener("click" , (evento) => {
    TrocaCor(elemento.dataset.cor)
  })
})

function TrocaCor (cor){
  document.querySelector(".robo").src ="img/robotron" + cor + ".png";
}

