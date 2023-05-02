$(document).ready(function(){
    function teste(){
        $('form').on('submit', function(e){
            e.preventDefault();
            const listaDeTarefas = $('#listaDeTarefas').val();
            const item = $('<li></li>');
            $(`<li>${listaDeTarefas}</li>`).appendTo(item); // corrigido aqui
            $(item).appendTo('ul');
            $('ul').on('click', 'li', function(){
                $(this).addClass('line');
            });
            $('#listaDeTarefas').val(''); // Limpa o valor do input
        });
    };

    teste(); // chama a função teste() para registrar o evento de formulário
});