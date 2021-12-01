const quiz = new Quiz();
const btnComecar = document.getElementById('btn-comecar');
const resultados = document.getElementById('resultados');
const btnResultados = document.getElementById('btn-resultados');

carregarEventos();

function carregarEventos() {
    btnComecar.addEventListener('click', verificar);

    btnResultados.addEventListener('click', (e) => {quiz.lerLocalStorage(e)});
}

function verificar(e) {
    e.preventDefault();

    let nome = document.getElementById('nome').value;

    if (nome === '') {
        alert('Opa! Preencha seu nome para começar!');
    } else {
        quiz.comecarQuiz(nome);
        // quiz.saudarJogador(nome);
    }
}