let listaCompras = []; 
let resultado = ''; 
let precoProdutos = [];
let qtdProdutos = [];



// solicita os itens da lista de compras 
for (let index = 1; index <= 2 ; index++) {
    let produto = prompt('Informe o produto:    '); 
    listaCompras.push(produto);

// Adiciona preço ao produto
   let preco = parseFloat(prompt('Insira o preço: ')); 
    precoProdutos.push(preco); 


// Adiciona quantidade de produtos 
    let qtdItens = parseInt(prompt('Insira a quantidade de itens'))
    qtdProdutos.push(qtdItens); 

}

// formato a informação para apresentar na tela 

for( let index = 0; index < 2; index++) {
    resultado = resultado + (index+1) + ' - ' + listaCompras[index] + ' -  R$ '  + precoProdutos[index] +  ' -  qtd: ' +  qtdProdutos[index] + '<br>';  

    let total =  total + (preco * qtdItens);
    total = 'O valor total a pagar é:  ' + total;  

}


document.getElementById('total').innerHTML = total; 
document.getElementById('resultado').innerHTML = resultado;

// preco * qtd 
// total = 
