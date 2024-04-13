const BotaoMostrarProjetos = document.querySelector(".btn-mostrar-projetos");
const ProjetosInativos = document.querySelectorAll('.projeto:not(.ativo)');


BotaoMostrarProjetos.addEventListener('click', () => {

    MostrarmaisProjetos();


    EsconderBotão();

});

function EsconderBotão() {
    BotaoMostrarProjetos.classList.add('remover');
}

function MostrarmaisProjetos() {
    ProjetosInativos.forEach(ProjetoInativo => {
        ProjetoInativo.classList.add('ativo');
    });
}