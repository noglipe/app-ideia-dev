function converter(numero) {
    stringNumero = numero.value;

    if (stringNumero.length <= 8) {
        bin2dec(stringNumero);
    } else {
        var oitoDigitos = document.getElementById("oitoDigitos");

        oitoDigitos.classList.add("text-uppercase");
        oitoDigitos.classList.add("h2");
        oitoDigitos.classList.add("text-danger");

        window.setTimeout('removerClass()', 2000);

    }
}

function removerClass() {
    var imput = document.getElementById("numeroBin")
    imput.value = " ";
    imput.blur();
    oitoDigitos.classList.remove("text-uppercase");
    oitoDigitos.classList.remove("h2");
    oitoDigitos.classList.remove("text-danger");
}

function bin2dec(stringNumero) {
    var exibir = document.getElementById("exibir");

    numeroDecimal = 0;

    for (var cont in stringNumero) {
        numeroBinario = parseInt(stringNumero[cont]);
        expoente = parseInt(cont) + 1;
        numeroDecimal = numeroDecimal + (numeroBinario * Math.pow(2, expoente));
    }

    exibir.innerHTML = "Decimal: " + numeroDecimal;
}