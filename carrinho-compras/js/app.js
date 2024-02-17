function adicionar(){
//recuperar valores nome, quantidade e valor
let produto = document.getElementById('produto').value;
let nomeProduto = produto.split('-')[0];
let valorUnitario = produto.split('R$')[1];
let quantidade = document.getElementById('quantidade');
//alert(nomeProduto.value); 
//alert(nomeProduto);



//calcular o preço, subtotal
let preco = quantidade.value * valorUnitario;



//adicionar no carrinho
//atualizar total
}

function limpar(){

}
