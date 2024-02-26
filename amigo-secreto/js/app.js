let amigos = [];

function adicionarParticipante(){
    let amigo = document.getElementById('nome-amigo');
    if(amigo.value == ''){
        alert("Insira um valor válido");
        return; //para de executar
    }

    if(amigos.includes(amigo.value)){
        alert('Nome já adicionado');
        return;
    }  
    let lista = document.getElementById('lista-amigos');
    amigos.push(amigo.value);

    if(lista.textContent == ''){
        lista.textContent = amigo.value;
    }else{
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }
    amigo.value = '';
}

function sortear(){
    if(amigos.length < 4){
       alert('Add unless 4 friends'); 
       return;  
    }
    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio');

    
    for (let i=0; i < amigos.length; i++){
        if(i == amigos.length -1){
        sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '-->'+ amigos[0] + '<br>';
        }else{
        sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '-->'+ amigos[i+1] + '<br>';
        }
    }
}

function embaralha(lista){
    for(let indice = lista.length; indice; indice--){
        const indiceAleatorio = Math.floor(Math.random()*indice);

        [lista[indice-1], lista[indiceAleatorio]] =
        [lista[indiceAleatorio], lista[indice-1]];
    }
}

function reiniciar(){
    amigos =[];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}







/*// Array para armazenar os nomes dos participantes
let participantes = [];
// Array para armazenar os resultados do sorteio
let sorteio = [];

// Função para adicionar um participante à lista
function adicionarParticipante() {//------------------------------------------------------------------------adicionar
    // Obtém o nome do participante do input
    let nome = document.getElementById('nome-amigo').value.trim();
    // Verifica se o nome é válido
    if (nome === "") {
        alert("Digite um nome válido!");
        return;
    }

    // Adiciona o nome à lista de participantes
    participantes.push(nome);
    // Atualiza a lista de participantes exibida na página
    atualizarListaParticipantes();
    // Limpa o input após adicionar o nome
    document.getElementById('nome-amigo').value = "";
}

// Função para atualizar a lista de participantes exibida na página
function atualizarListaParticipantes() {//---------------------------------------------------------------------atualizar
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = ""; // Limpa a lista antes de atualizar
    // Para cada participante, cria um item de lista e o adiciona à lista na página
    participantes.forEach(function(nome) {
        let itemLista = document.createElement('li');
        itemLista.textContent = nome;
        lista.appendChild(itemLista);
    });
}

// Função para realizar o sorteio
function sortear() {//------------------------------------------------------------------------------------------sortear
    // Verifica se há participantes suficientes para o sorteio
    if (participantes.length < 2) {
        alert("É necessário pelo menos dois participantes para realizar o sorteio!");
        return;
    }
    // Embaralha a ordem dos participantes
    let participantesEmbaralhados = participantes.slice(); // Cria uma cópia do array de participantes
    shuffleArray(participantesEmbaralhados); // Embaralha a cópia
    // Associa cada participante a outro participante
    for (let i = 0; i < participantes.length; i++) {
        let participanteAtual = participantes[i];
        let participanteSorteado = participantesEmbaralhados[(i + 1) % participantes.length]; // Usa o operador módulo para garantir que o índice não ultrapasse o tamanho do array
        sorteio.push(participanteAtual + " -> " + participanteSorteado); // Adiciona o resultado do sorteio ao array de sorteio
    }
    // Exibe o resultado do sorteio na página
    exibirResultadoSorteio();
}

// Função para embaralhar os elementos de um array (algoritmo de Fisher-Yates)
function shuffleArray(array) {//-------------------------------------------------------------------------------embaralhar
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Troca os elementos de posição
    }
}

// Função para exibir o resultado do sorteio na página
function exibirResultadoSorteio() {//-----------------------------------------------------------------------------exibir
    let listaResultado = document.getElementById('lista-sorteio');
    listaResultado.innerHTML = ""; // Limpa a lista antes de atualizar
    // Para cada resultado do sorteio, cria um item de lista e o adiciona à lista na página
    sorteio.forEach(function(resultado) {
        let itemLista = document.createElement('li');
        itemLista.textContent = resultado;
        listaResultado.appendChild(itemLista);
    });
}

// Função para reiniciar o sorteio, limpando os arrays de participantes e de sorteio
function reiniciar() {//-----------------------------------------------------------------------------------------reiniciar
    participantes = []; // Limpa o array de participantes
    sorteio = []; // Limpa o array de sorteio
    atualizarListaParticipantes(); // Limpa a lista de participantes exibida na página
    exibirResultadoSorteio(); // Limpa a lista de resultado de sorteio exibida na página
}
*/