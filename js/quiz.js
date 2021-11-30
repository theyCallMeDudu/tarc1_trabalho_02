class Quiz {

    comecarQuiz(nome) {
        const dadosJogador = {
            nome : nome,
            pontuacao : 0
        }

        this.salvarQuizEmLocalStorage(dadosJogador);

        location.href = "quiz.html";
    }
        
    salvarQuizEmLocalStorage(dadosJogador) {
        let quiz;

        quiz = this.getQuizLocalStorage();

        quiz.push(dadosJogador);

        localStorage.setItem('quiz', JSON.stringify(quiz));
    }

    getQuizLocalStorage() {
        let quizLocalStorage;

        if (localStorage.getItem('quiz') === null) {
            quizLocalStorage = [];
        } else {
            quizLocalStorage = JSON.parse(localStorage.getItem('quiz'));
        }

        return quizLocalStorage;
    }

    lerLocalStorage(e) {
       e.preventDefault();
       
       document.getElementById('div-resultados').hidden = false;
       

       let quizLocalStorage;
       
       quizLocalStorage = this.getQuizLocalStorage();
       
        quizLocalStorage.sort((a, b) => {
            return b.pontuacao - a.pontuacao;
        });

       quizLocalStorage.forEach(quiz => {
            const linha = document.createElement('tr');
            linha.innerHTML = `
                <td>${quiz.nome}</td>
                <td>${quiz.pontuacao}</td>
            `;

            resultados.appendChild(linha);
       });
    }



}