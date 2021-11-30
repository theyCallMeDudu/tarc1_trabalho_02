$( document ).ready(function() {

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

    $('#iveco').click(function() {
        let iveco = $('#div-iveco').css('display');
        console.log(iveco);
        if (iveco == 'none') {
            $('#div-iveco').show('slow');
        } else {
            $('#div-iveco').hide('slow');
        }
    });



});