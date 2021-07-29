let peca = "Rainha";

switch (peca){
    case "Peão":
        console.log("movimento para frente");
        break;

    case "Cavalo":
        console.log("movimento para trás");
        break;

    case "Torre":
        console.log("movimento para o lado esquerdo");
        break;

    case "Bispo":
        console.log("movimento para o lado direito");
        break;

    default:
        console.log("erro")
}