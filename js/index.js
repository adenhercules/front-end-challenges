var contarValor = 0;

function incrementador() {
    atualizaDisplay(++contarValor);
}

function zerarContador() {
    contarValor = 0;
    atualizaDisplay(contarValor);
}

function atualizaDisplay(val) {
    document.getElementById("counter-label").innerHTML = val;
}