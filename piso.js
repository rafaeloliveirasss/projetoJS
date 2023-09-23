function calcularCusto() {
    // Obter o comprimento e a largura do cômodo
    const comprimento = parseFloat(document.getElementById("comprimento").value) || 0;
    const largura = parseFloat(document.getElementById("largura").value) || 0;

    // Preço por metro quadrado
    const precoPorMetroQuadrado = 36.00;

    // Calcular a área do cômodo (comprimento x largura)
    const areaCoomodo = comprimento * largura;

    // Calcular o custo de assentamento de piso (área x preço por metro quadrado)
    const custoAssentamento = areaCoomodo * precoPorMetroQuadrado;

    // Exibir o resultado
    document.getElementById("resultado").innerHTML = `Custo de Assentamento de Piso: R$ ${custoAssentamento.toFixed(2)}`;
}
