const quiz = new Quiz();
const avancar = document.getElementById('btn-avancar');

carregarEventos();

function carregarEventos() {
    document.addEventListener('DOMContentLoaded', mostrar);
    avancar.addEventListener('click', verificar);
}

let i = 0;
let resposta;

function mostrar() {
    fetch('js/perguntas.json')
        .then(response => {
            return response.json();
        })
        .then(response => {

            if (i == response.length - 1) {
                location.href = 'index.html';
            } else {   
                //console.log(response);
                document.getElementById('titulo-pergunta').innerHTML = `${i + 1}. ${response[i].tituloPergunta}`
                document.getElementById('opcao1').innerHTML = response[i].opcoes[0].alternativa1;
                document.getElementById('opcao2').innerHTML = response[i].opcoes[0].alternativa2;
                document.getElementById('opcao3').innerHTML = response[i].opcoes[0].alternativa3;
                document.getElementById('opcao4').innerHTML = response[i].opcoes[0].alternativa4;
                
                resposta = response[i].resposta;

                i++;
                console.log("i = ", i);
                console.log("response length = ", response.length);
            }
        })
        .catch(error => {
            console.log(error.message);
        })
}

function verificar() {

    mostrar();

    const tipo = document.querySelector('input[name="alternativas"]:checked').value;
    
    let respostaLocalStorage;
    respostaLocalStorage = quiz.getQuizLocalStorage();

    let tamanho = respostaLocalStorage.length;

    if (resposta == tipo) {
        respostaLocalStorage[tamanho - 1].pontuacao = respostaLocalStorage[tamanho - 1].pontuacao + 1;
        
        localStorage.setItem('quiz', JSON.stringify(respostaLocalStorage));
    } 
    else {
        respostaLocalStorage[tamanho - 1].pontuacao = respostaLocalStorage[tamanho - 1].pontuacao + 0;
        
        localStorage.setItem('quiz', JSON.stringify(respostaLocalStorage));
    }
}