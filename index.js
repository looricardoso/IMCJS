const botaoCalcular = document.getElementById('calcular');
const pesoDigitado = document.getElementById('peso');
const alturaDigitada = document.getElementById('altura');
const imc = document.getElementById('seuImc');
const diag = document.getElementById('diagnostico');
const pesoIdeal = document.getElementById('pesoIdeal');

const calcularMedidas = (evento) => {
    evento.preventDefault();

    let valorPeso = parseFloat(pesoDigitado.value.replace(',','.'));
    let valorAltura = parseFloat(alturaDigitada.value.replace(',','.'));
    let calculo = valorPeso/(valorAltura*valorAltura);
    let resultado = calculo.toFixed(2);

    if (resultado < 17) {
        imc.innerText = `Seu IMC é ${resultado} kg/m².`;
        diag.innerText = 'Diagnósito: Muito abaixo do peso';
    } else if (resultado >= 17 && resultado <= 18.49) {
        imc.innerText = `Seu IMC é ${resultado} kg/m².`;
        diag.innerText = 'Diagnósito: Abaixo do peso';
    } else if (resultado >= 18.5 && resultado <= 24.99) {
        imc.innerText = `Seu IMC é ${resultado} kg/m².`;
        diag.innerText = 'Diagnósito: Peso normal';
    } else if (resultado >= 25 && resultado <= 29.99) {
        imc.innerText = `Seu IMC é ${resultado} kg/m².`;
        diag.innerText = 'Diagnósito: Acima do peso';
    } else if (resultado >= 30 && resultado <= 34.99) {
        imc.innerText = `Seu IMC é ${resultado} kg/m².`;
        diag.innerText = 'Diagnósito: Obesidade I';
    } else if (resultado >= 35 && resultado <= 39.99) {
        imc.innerText = `Seu IMC é ${resultado} kg/m².`;
        diag.innerText = 'Diagnósito: Obesidade II (severa)';
    } else {
        imc.innerText = `Seu IMC é ${resultado} kg/m².`;
        diag.innerText = 'Diagnósito: Obesidade III (mórbida)';
    };
};

botaoCalcular.addEventListener('click', calcularMedidas);