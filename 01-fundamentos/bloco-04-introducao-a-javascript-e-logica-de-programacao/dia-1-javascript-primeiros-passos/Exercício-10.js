let custoDoProduto = (4 * 0.2);
let valorDeVenda = 16;
let lucro = valorDeVenda - custoDoProduto;

if (lucro * 1000){
    console.log("Seu lucro é:" + lucro);
}
else if(custoDoProduto <=0 || valorDeVenda <=0){
    console.log("Erro! Digite novamente seu valor");
}