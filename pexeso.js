import confetti from 'https://cdn.skypack.dev/canvas-confetti';


var numofturned = 0;
var lastturned = null;
var elements = 8*2;
var cards = [0, 0, 0, 0, 0, 0, 0, 0];

function turnCard(cardid) {

    confetti();

    var c = true;
    
    for(var b = 0; b < 8; b++){
        if(cards[b] == 1){
            if(b+1 == cardid%8){
                c= false;
            } 
        }
    }

    if (cardid != lastturned && c == true){
        
        if (cardid%8 == lastturned%8){
            cards[(cardid-1)%8] = 1;
        }

        numofturned = numofturned + 1;

        if(numofturned > 2){
    
            for(var a = 1; a <= elements; a++){
                questionmark(a); 
            }
            numofturned = 1;
        }
        picture(cardid);
        if (lastturned == null){
            lastturned = cardid;
        } else {
            lastturned = null;
        }

    }

    var d = 0;

    for(var b = 0; b < 8; b++){
        if(cards[b] == 1){
            if(b+1 == cardid%8){
                d = d + 1;
            } 
        }
    } 
    if (d == 8){
        confetti();
    }
}

function picture(cardid) {

    const el = document.getElementById("card-" + cardid);

    if(cardid > 8){
        cardid = cardid - 8;
    }
    if(cardid < 3){
        el.src ='img/obr' + cardid +'.jfif';
    } else {
        el.src = 'img/obr' + cardid +'.jpg';
    }
}

function questionmark(a) {

    const el = document.getElementById("card-" + a);

    el.src = 'img/otaznik.png';

    for(var b = 0; b < 8; b++){
        if(cards[b] == 1){
            picture(b + 1);
            picture(b+8 + 1);
        }
    }
}

let elmt = document.getElementById('stav-hry');
