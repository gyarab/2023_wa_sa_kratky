var otaznik = false;

function turnCard(cardid) {
    otaznik = !otaznik
    console.log(otaznik)

    const el = document.getElementById("card-" + cardid)
    if (otaznik) {
        el.innerHTML = '<img src="img/pepe' + cardid +'.jfif" alt="pepecard">';
    }
    else {
        el.innerHTML = '<img src="img/otaznik.png" alt="pepecard">';
    }
}

let el = document.getElementById('stav-hry')