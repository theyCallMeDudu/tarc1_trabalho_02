(function(){ // funcao anonima
    var matches = 0;

    var images = [];

    var flippedCards = [];

    var modalGameOver = document.querySelector("#modal-game-over");

    var modalGameOverByTime = document.querySelector("#modal-game-over-by-time");

    var imgMatchSign = document.querySelector("#img-match-sign");

    for (var i = 0; i < 16; i++) {
        var img = {
            src: "img/jogo-da-memoria/" + i + ".jpg", // cada objeto dentro do for recebe um caminho para a imagem da carta
            id:  i % 8
        };

        images.push(img);
    }

    document.getElementById('timer').innerHTML =
    05 + ":" + 00;
    
    // Inicia o jogo
    startGame();
    

    // Função que inicia/reinicia o jogo
    function startGame() {
        // Inicia o contador (5 min)
        startTimer();

        // Zera o numero de acertos quando o jogo comeca
        matches = 0;

        // Array de cartas viradas. Sempre começa zerado.
        flippedCards = [];

        // Embaralha as cartas
        images = randomSort(images);

        var frontFaces = document.getElementsByClassName("front");
        var backFaces = document.getElementsByClassName("back"); 

        for(var i = 0; i < 16; i++) {
            frontFaces[i].classList.remove("flipped", "match");
            backFaces[i].classList.remove("flipped", "match");

            var card = document.querySelector('#card' + i);
            card.style.left = i % 8 === 0 ? 25 + "px" : i % 8 * 165 + 25 + "px";
            card.style.top = i < 8 ? 50 + "px" : 300 + "px";

            card.addEventListener("click", flipCard, false);

            frontFaces[i].style.background = "url('" + images[i].src + "')"; // recebe os caminhos das imagens
            frontFaces[i].setAttribute("id", images[i].id); // recebe os id's das imagens
        }

        modalGameOver.style.zIndex = -2;
        modalGameOver.style.opacity = 0;
        modalGameOver.removeEventListener("click", startGame, false);
    }

    // Função que embaralha as cartas
    function randomSort(oldArray) {
        // cria um array vazio
        var newArray = [];

        // avalia o número de elementos do array
        while(newArray.length !== oldArray.length) {
            
            // cria um índice com valor aleatório
            var i = Math.floor(Math.random() * oldArray.length);    

            // avalia se o elemento indicado já existe no novo array
            if (newArray.indexOf(oldArray[i]) < 0) {
                
                // insere o elemento indicado no novo array
                newArray.push(oldArray[i]);

            }

        }
        return newArray;
    }

    // Função que vira as cartas.
    function flipCard() {
        // se o array tiver menos que 2 cartas viradas, pega a carta e insere no array
        if (flippedCards.length < 2) {
            // pega todas as cartas pela classe face
            var faces = this.getElementsByClassName("face");

            // caso o jogador clique duas vezes na mesma carta, nada acontece
            if (faces[0].classList.length > 2) {
                return;
            }

            // classList pega a lista de classes atribuídas ao elemento
            faces[0].classList.toggle("flipped"); // face[0] representa o verso da carta
            faces[1].classList.toggle("flipped"); // face[1] representa a frente da carta    

            flippedCards.push(this);

            // compara duas cartas e verificar se elas combinam (um acerto)
            if (flippedCards.length === 2) {
                if (flippedCards[0].childNodes[3].id === flippedCards[1].childNodes[3].id) {
                    flippedCards[0].childNodes[1].classList.toggle("match");
                    flippedCards[0].childNodes[3].classList.toggle("match");
                    flippedCards[1].childNodes[1].classList.toggle("match");
                    flippedCards[1].childNodes[3].classList.toggle("match");

                    // chama função que exibe efeito visual de acerto
                    matchCardSign();

                    // incrementa a quantidade de acertos
                    matches++;

                    // reinicia o array de cartas viradas
                    flippedCards = [];

                    // se o numero de acertos chega a 8, o jogo acaba
                    if (matches === 8) {
                        gameOver();
                    }
                }
            }

        } else {
            flippedCards[0].childNodes[1].classList.toggle("flipped");
            flippedCards[0].childNodes[3].classList.toggle("flipped");
            flippedCards[1].childNodes[1].classList.toggle("flipped");
            flippedCards[1].childNodes[3].classList.toggle("flipped");

            flippedCards = [];
        }
    }

    // Função que decreta o fim do jogo
    function gameOver() {
        modalGameOver.style.zIndex = 10;
        modalGameOver.style.opacity = 1;
        modalGameOver.addEventListener("click", startGame, false);
    }

    // Função que exibe o efeito visual de acerto
    function matchCardSign() {
        imgMatchSign.style.zIndex = 1;
        imgMatchSign.style.top = 150 + "px";
        imgMatchSign.style.opacity = 1;
        setTimeout(function() {
            imgMatchSign.style.zIndex = -1;
            imgMatchSign.style.top = 250 + "px";
            imgMatchSign.style.opacity = 0; 
        }, 1500);
    }

    function startTimer() {
        var presentTime = document.getElementById('timer').innerHTML;
        var timeArray = presentTime.split(/[:]+/);
        var m = timeArray[0];
        var s = checkSecond((timeArray[1] - 1));
        if(s==59){m=m-1}
        
        if(m < 0){
            return
        } else if (m == 0 && s <= 00) {
            document.getElementById('timer').style.color = "red";
            document.getElementById('game-status').innerHTML = "GAME OVER";
            setInterval(location.reload(), 30000);
        }
        
        document.getElementById('timer').innerHTML =
          m + ":" + s;
        console.log(m)
        setTimeout(startTimer, 1200); 
      }
      
      function checkSecond(sec) {
        if (sec < 10 && sec >= 0) {sec = "0" + sec}; // adiciona zero na frente de números menores que 10
        if (sec < 0) {sec = "59"};
        return sec;
      }
}());