
function jogar() {
    var pegardado = document.getElementById('face')
    var sorteio = Math.floor(Math.random() * 6 + 1);
    
    
    switch (sorteio) {
        case 1:
            pegardado.src = "imagens/face 1.png";

            break;
        case 2:
            pegardado.src = "imagens/face 2.png";

            break;
        case 3:
            pegardado.src = "imagens/face 3.png";

            break;
        case 4:
            pegardado.src = "imagens/face 4.png";

            break;
        case 5:
            pegardado.src = "imagens/face 5.png";

            break;
        case 6:
            pegardado.src = "imagens/face 6.png";

            break;



        default:
            // caso contrário
            break

    }
    console.log(sorteio)


}

