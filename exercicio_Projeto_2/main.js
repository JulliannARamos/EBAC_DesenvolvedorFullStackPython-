const form = document.getElementById('form-contatos');

let linhas = ''; //acrescentar uma nova linha

form.addEventListener('submit', function (e){
    e.preventDefault();

    adicionaLinha();

}); 

function adicionaLinha() {
    const inputNomeContato= document.getElementById('nome-contato');
    const inputTelContato= document.getElementById('tel-contato');
    
    
    


    let linha = '<tr>'; //cria coluna
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputTelContato.value}</td>`;
    linha += '</tr>'; 

    linhas += linha; //concatenar 

    const corpoTabela = document.querySelector('tbody');//recuperar corpo da tabela
    corpoTabela.innerHTML = linhas;//inserir o conteudo dentro de uma tag

    inputNomeContato.value = '';// limpar o campo
    inputTelContato.value = ''; 

}