function calcularIMC (){
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const resultado = document.getElementById("resultado");
    
if (peso > 0 && altura > 0){
    const imc = peso /(altura *altura);
    let classificacao= "";


if (imc < 18.5) classificacao = "Abaixo do Peso";
else if (imc < 25) classificacao = "Peso Normal";
else if (imc < 30) classificacao = "Sobrepeso";
else classificacao = "Obesidade";

resultado.textContent = `Imc: ${imc.toFixed(2)} (${classificacao})`;
}// fecha primeiro if
else {
    resultado.textContent = "Digite valores válidos";
}
} // fecha principal