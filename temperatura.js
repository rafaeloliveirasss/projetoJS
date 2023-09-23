function converterTemperatura() {
    // Obter a temperatura e a escala selecionada pelo usuário
    const temperatura = parseFloat(document.getElementById("temperatura").value);
    const escala = document.getElementById("escala").value;

    // Verificar se a temperatura é um número válido
    if (!isNaN(temperatura)) {
        let resultado = 0;

        if (escala === "celsius") {
            // Converter de Celsius para Fahrenheit
            resultado = (temperatura * 9/5) + 32;
        } else if (escala === "fahrenheit") {
            // Converter de Fahrenheit para Celsius
            resultado = (temperatura - 32) * 5/9;
        }

        // Exibir o resultado
        document.getElementById("resultado").innerHTML = `Resultado: ${resultado.toFixed(2)} ${escala.toUpperCase()}`;
    } else {
        alert("Informe uma temperatura válida.");
    }
}
