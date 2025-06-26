let compras= JSON.parse(localStorage.getItem("compras")) || []; //

function comprar() { //função comprar
    let continuar = true; //se a variável "continuar" for verdadeira

    while(continuar) { //laço de repetição while
        let item = prompt("Digite um item:"); //pede ao usuário e guarda na variavel item

        if (item && item.trim() !== " ") { //faz a comparação 
            compras.push(item.trim());
        }
        let resposta = prompt("Adicionar outro item? (s/n)"); //variavel de resposta rebece se quer continuar adicionando items ou não
        if (!resposta || resposta.toLowerCase() !== "s") continuar = false; //comparação para adicionar mais itens na lista  
    }
    localStorage.setItem("compras", JSON.stringify(compras));
}
function atualizarLista(){ //função de atualizar a lista 
    const lista = document.getElementById("listaCompras"); 
    lista.innerHTML = " "; 
    compras.forEach((item,i) => {
    const li = document.createElement("li");
    li.textContent = `${i + 1}. ${item}`; //conta desde o primeiro item, exemplo 1 arroz, 2 carne
    lista.appendChild(li);
    });
}

function limparLista() {
  compras = [];
  localStorage.removeItem("compras");
  atualizarLista();
}

window.addEventListener("DOMContentLoaded", atualizarLista);