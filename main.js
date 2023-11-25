function tocaSomPom()
{
    //document defini o escopo como sendo o documento. html
    // querySelector seleciona um elemento HTML
    // # seleciona apartir do id
    document.querySelector('#som_tecla_pom').play()
}
// Quando a telca _pom é clicada chama a função tocaSomPom 
document.querySelector('.tecla_pom').onclick= tocaSomPom;