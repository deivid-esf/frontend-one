async function buscaEndereco(cep){
  var mensagemErro = document.getElementById('erro');
  mensagemErro.innerHTML = ''
  
  try {
    let consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    let consultaCEPConvertida = await consultaCEP.json();

    const cidade = document.getElementById('cidade');
    const logradouro = document.getElementById('endereco');
    const estado = document.getElementById('estado');
    const bairro = document.getElementById('bairro')

    cidade.value = consultaCEPConvertida.localidade;
    estado.value = consultaCEPConvertida.uf;
    logradouro.value = consultaCEPConvertida.logradouro;
    bairro.value = consultaCEPConvertida.bairro
    console.log(consultaCEPConvertida);
    return consultaCEPConvertida;
  } catch (erro) {
    mensagemErro.innerHTML = `<p>CEP inválido. Tente novamente!</p>`
    console.log(erro);
  }
}

var cep = document.getElementById('cep');
cep.addEventListener('focusout', () => buscaEndereco(cep.value))