function calcularGasto() {
    // Obter a quilometragem e o valor do combustível
    const quilometragem = parseFloat(document.getElementById("quilometragem").value) || 0;
    const valorCombustivel = parseFloat(document.getElementById("valorCombustivel").value) || 0;

    // Taxa de consumo do veículo (8 km/litro)
    const taxaConsumo = 8;

    // Calcular o gasto de combustível
    const gastoCombustivel = quilometragem / taxaConsumo * valorCombustivel;

    // Exibir o resultado
    document.getElementById("resultado").innerHTML = `Gasto de Combustível: R$ ${gastoCombustivel.toFixed(2)}`;
}
