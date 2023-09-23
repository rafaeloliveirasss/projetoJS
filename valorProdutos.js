function calcularTotal() {
    // Obter os valores dos produtos e quantidades vendidas
    const valor1 = parseFloat(document.getElementById("valor1").value) || 0;
    const quantidade1 = parseInt(document.getElementById("quantidade1").value) || 0;

    const valor2 = parseFloat(document.getElementById("valor2").value) || 0;
    const quantidade2 = parseInt(document.getElementById("quantidade2").value) || 0;

    const valor3 = parseFloat(document.getElementById("valor3").value) || 0;
    const quantidade3 = parseInt(document.getElementById("quantidade3").value) || 0;

    // Calcular os totais individuais de cada produto
    const totalIndividual1 = valor1 * quantidade1;
    const totalIndividual2 = valor2 * quantidade2;
    const totalIndividual3 = valor3 * quantidade3;

    // Exibir os totais individuais de cada produto
    document.getElementById("totalIndividual1").textContent = totalIndividual1.toFixed(2);
    document.getElementById("totalIndividual2").textContent = totalIndividual2.toFixed(2);
    document.getElementById("totalIndividual3").textContent = totalIndividual3.toFixed(2);

    // Calcular o total da venda
    const totalVenda = totalIndividual1 + totalIndividual2 + totalIndividual3;

    // Exibir o resultado da soma total
    document.getElementById("totalVenda").innerHTML = `<p>Total da Venda: R$ ${totalVenda.toFixed(2)}</p>`;
}
