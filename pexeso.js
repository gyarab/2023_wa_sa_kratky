var numofturned = 0;
var elements = 8*2;

function turnCard(cardid) {
    
    numofturned = numofturned + 1;

    if(numofturned > 2){

        for(var a = 1; a <= elements; a++){
            questionmark(a); 
        }
        numofturned = 1;
    }
    picture(cardid);
}

function picture(cardid) {

    const el = document.getElementById("card-" + cardid);

    if(cardid > 8){
        cardid = cardid - 8
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
}

let elmt = document.getElementById('stav-hry');
