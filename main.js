function tocaSomPom() {
    //document defini o escopo como sendo o documento. html
    // querySelector seleciona um elemento HTML
    // # seleciona apartir do id
    document.querySelector('#som_tecla_pom').play();
}
// Quando a telca _pom é clicada chama a função tocaSomPom 
// codigo em desuso
// document.querySelector('.tecla_pom').onclick= tocaSomPom;

// constante que ira armazenar em uma lsita a referencia para as teclas
const listaDeTeclas = document.querySelectorAll('.tecla');

// Exemplod euso de uma tecla indexida 
// listaDeTeclas[0].onclick = tocaSomPom;

// criando uma variavel para controlar o laço 
let contador = 0;
//contador que vai atribuir a função a cada tecla 
while(contador <listaDeTeclas.length)
{
    listaDeTeclas[contador].onclick = tocaSomPom;
    contador++;
    console.log(contador);
}