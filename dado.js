// NUMERO DE DADOS
var i = 0;
for (; i < 6; i++) {

    sorteio = Math.floor(Math.random() * 10 + 1);
    console.log(sorteio)
    if (sorteio==sorteio){
        resultado= jogar()
    }

    

}

// IMAGENS RELACIONADAS AOS NUMEROS SORTEADOS
function jogar() {
    
     htmlid= ["imagem1","imagem2","imagem3","imagem4","imagem5","imagem6"];
     
    
    switch (sorteio) {
        
    
    case 1:
    document.getElementById(htmlid[0]).innerHTML= "<img src='imagens/face 1.png'>.<h1>Falha Crítica &#x1F62D;<h1/>"

    break;
    case 2:
    document.getElementById(htmlid[1]).innerHTML = "<img src='imagens/face 2.png'>"

    break;
    case 3:
    document.getElementById(htmlid[2]).innerHTML = "<img src='imagens/face 3.png'>"

    break;
    case 4:
    document.getElementById(htmlid[3]).innerHTML = "<img src='imagens/face 4.png'>"

    break;
    case 5:
    document.getElementById(htmlid[4]).innerHTML = "<img src='imagens/face 5.png'>"

    break;
    case 6:
    document.getElementById(htmlid[5]).innerHTML = "<img src='imagens/face 6.png'>.<h1>Sucesso &#128526;<h1/>"

    break;



    default:
    // caso contrário
    break

}
}
