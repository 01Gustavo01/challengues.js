//funcionamento botão comprar
//comprar ingresso por local escolhido
//diminuir do total
//quando total for atigido, não permitir mais vendas

function comprar(){
    let tipo = document.getElementById('tipo-ingresso');
    let qtd = parseInt(document.getElementById('qtd').value);

    if(tipo.value == 'pista'){
        comprarPista(qtd);
    }else if(tipo.value == 'superior'){
        comprarSuperior(qtd);
    }else if(tipo.value == 'inferior'){
        comprarInferior(qtd);
    }
}
function comprarPista(qtd){
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (qtd > qtdPista)/*textContent para puxar texto e não tag HTML*/{
        alert('Quantidade indisponível para tipo de pista');
    }else{
    
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra realizada com sucesso!');
    }
}
function comprarSuperior(qtd){
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (qtd > qtdSuperior)/*textContent para puxar texto e não tag HTML*/{
        alert('Quantidade indisponível para tipo de pista');
    }else{
        qtdSuperior= qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Compra realizada com sucesso!');
    }
}
function comprarInferior(qtd){
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (qtd > qtdInferior)/*textContent para puxar texto e não tag HTML*/{
        alert('Quantidade indisponível para tipo de pista');
    }else{
        qtdInferior= qtdInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('Compra realizada com sucesso!');
    }
}

    /*switch (tipoIngresso) {
        case "inferior":
            quantidade = parseInt(document.getElementById("qtd-inferior").textContent);
            break;
        case "superior":
            quantidade = parseInt(document.getElementById("qtd-superior").textContent);
            break;
        case "pista":
            quantidade = parseInt(document.getElementById("qtd-pista").textContent);
            break;
        default:
            quantidade = 0;
    }
    return quantidade;

    let total = qtd - quantidade;

    let campoTotal = document.getElementById('lista');
    campoTotal.textContent = `${total}`;
    document.getElementById('qtd').value = 1;*/
