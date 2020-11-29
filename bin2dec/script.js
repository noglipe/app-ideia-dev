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

    const regex = /[a-zA-Z]/;
    const regex2 = /[0-9]/i;
    if (regex.test(stringNumero)) {
        var imput = document.getElementById("numeroBin")

        alert("Apenas Números binários");

        imput.value = stringNumero.slice(0, -1);

        bin2dec(imput.value);
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
        if ((numeroBinario == 0) || (numeroBinario == 1)) {
            expoente = parseInt(cont) + 1;
            numeroDecimal = numeroDecimal + (numeroBinario * Math.pow(2, expoente));
        } else {
            var imput = document.getElementById("numeroBin")
            alert("Apenas Números binários");
            imput.value = stringNumero.slice(0, -1);

            bin2dec(imput.value);
        }
    }

    exibir.innerHTML = "Decimal: " + numeroDecimal;
}