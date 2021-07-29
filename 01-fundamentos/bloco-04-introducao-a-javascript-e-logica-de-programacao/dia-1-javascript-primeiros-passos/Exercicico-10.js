let custoDoProduto = (32 * 0,2);
let valorDeVenda = 60;
let lucro = valorDeVenda - custoDoProduto;

if (lucro * 1000){
    console.log("Seu lucro é:" + lucro);
}
else if(custoDoProduto < 0){
    console.log("Erro! Digite novamente seu valor");
}
else if (valorDeVenda < 0){
    console.log("Erro! Digite novamente seu valor");
}
