$( document ).ready(function() {

    function movimenta_relogio() {
        
        // Relógio Analógico
        const graus_seg = 6;
        const graus_min = 6;
        const graus_hora = 30;

        /* Retorna o primeiro elemento dentro do documento (usando ordenação
        em profundidade, pré-ordenada e transversal dos nós do documento) 
        que corresponde ao grupo especificado de seletores. */
        const seconds   = document.querySelector(".seg");
        const minutes = document.querySelector(".min");
        const hours = document.querySelector(".horas");
        
        let data = new Date();
        let ss   = data.getSeconds() * graus_seg;
        let min  = data.getMinutes() * graus_min;
        let hh   = data.getHours() * graus_hora;

        /* A Propriedade CSS transform permite modificar o espaço coordenado do modelo de
        formatação CSS. Usando-a, elementos podem ser traduzidos, rotacionados, ter seu
        tamanho ajustado e inclinados de acordo com os valores definidos. */
        seconds.style.transform = `rotateZ(${ss}deg)`;
        minutes.style.transform = `rotateZ(${min}deg)`;
        hours.style.transform = `rotateZ(${hh}deg)`;

    //------------------------------------------------------------------------------------------

        // Relógio Digital
        const horas = document.querySelector('#hs');
        const minutos = document.querySelector('#mins');
        const segundos = document.querySelector('#secs');
        const ampm = document.querySelector('#ampm');

        let h = new Date().getHours();
        let m = new Date().getMinutes();
        let s = new Date().getSeconds();
        let am = "AM";

        // AM ou PM
        if (h > 12) {
        // h = h - 12     .... deixar a hora com só com os 12 números
        am = "PM";
        }

        // Inserir zero
        h = (h < 10) ? "0" + h : h;
        m = (m < 10) ? "0" + m : m;
        s = (s < 10) ? "0" + s : s;

        horas.innerHTML = h + ":";
        minutos.innerHTML = m + ":";
        segundos.innerHTML = s + "&nbsp";
        ampm.innerHTML = am;

    }

    setInterval(movimenta_relogio, 1000);


    // Clique na tag com id 'volvo'
    $('#volvo').click(function() {
        let volvo = $('#div-volvo').css('display');
        console.log(volvo);
        if (volvo == 'none') {
            $('#div-volvo').show('slow');
        } else {
            $('#div-volvo').hide('slow');
        }
    });
    
    $('#scania').click(function() {
        let scania = $('#div-scania').css('display');
        console.log(scania);
        if (scania == 'none') {
            $('#div-scania').show('slow');
        } else {
            $('#div-scania').hide('slow');
        }
    });

    $('#mercedes').click(function() {
        let mercedes = $('#div-mercedes').css('display');
        console.log(mercedes);
        if (mercedes == 'none') {
            $('#div-mercedes').show('slow');
        } else {
            $('#div-mercedes').hide('slow');
        }
    });

    $('#man').click(function() {
        let man = $('#div-man').css('display');
        console.log(man);
        if (man == 'none') {
            $('#div-man').show('slow');
        } else {
            $('#div-man').hide('slow');
        }
    });

    $('#renault').click(function() {
        let renault = $('#div-renault').css('display');
        console.log(renault);
        if (renault == 'none') {
            $('#div-renault').show('slow');
        } else {
            $('#div-renault').hide('slow');
        }
    });

    $('#daf').click(function() {
        let daf = $('#div-daf').css('display');
        console.log(daf);
        if (daf == 'none') {
            $('#div-daf').show('slow');
        } else {
            $('#div-daf').hide('slow');
        }
    });



});