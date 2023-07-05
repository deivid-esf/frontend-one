let btnOrdenarPorPreco = document.getElementById("btnOrdenarPorPreco")

btnOrdenarPorPreco.addEventListener('click', ordenarPorPreço);

function ordenarPorPreço () {
  let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);
  exibirOsLivrosNaTela(livrosOrdenados)
}