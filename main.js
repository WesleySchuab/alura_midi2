function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        //alert('Elemento não encontrado');
        console.log('Elemento não encontrado ou seletor inválido');
    }

}
// Quando a telca _pom é clicada chama a função tocaSomPom 
// document.querySelector('.tecla_pom').onclick= tocaSomPom;

// constante que ira armazenar em uma lista a referencia para as teclas
const listaDeTeclas = document.querySelectorAll('.tecla');

// Exemplod euso de uma tecla indexida 
// listaDeTeclas[0].onclick = tocaSomPom;

// criando uma variavel para controlar o laço 
/*
let contador = 0;

//contador que vai atribuir a função a cada tecla 
 while (contador < listaDeTeclas.length) {
    //chama a função toca som quando uma tecla é clicada
    // Em desuso
    // listaDeTeclas[contador].onclick = tocaSomPom;

    // Armazena qual é a tecla atual
    const tecla = listaDeTeclas[contador];

    // constante que vai armazenar qual é a função que deve ser chamada com base no id que foi clicado
    // .classList[1]; é um atributo que retorna uma lista e o nome da telca é o segundo elemento localizado no  indice 1
    const instrumento = tecla.classList[1];

    // template string
    const idAudio = `#som_${instrumento}`
    //console.log(idAudio);

     tecla.onclick = function (){
         tocaSom(idAudio);
     }

    contador++;
    console.log(contador);
}
 */
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {
        if(evento.code === 'Space' || evento.code === 'Enter')
        tecla.classList.add('ativa')
    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa')
    }
}