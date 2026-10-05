// =========================
// PEGAR O VISOR
// =========================

const visor = document.getElementById("visor");


// =========================
// ADICIONAR VALOR NO VISOR
// =========================

function adicionar(valor) {

    visor.value += valor;

}


// =========================
// LIMPAR A CALCULADORA
// =========================

function limpar() {

    visor.value = "";

}


// =========================
// CALCULAR
// =========================

function calcular() {

    try {

        visor.value = eval(visor.value);

    } catch (erro) {

        visor.value = "Erro";

    }

}