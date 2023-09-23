let valores = [];

function adicionarValores() {
    const quantidade = parseInt(document.getElementById("quantidade").value);
    if (!isNaN(quantidade) && quantidade > 0) {
        valores = [];
        for (let i = 1; i <= quantidade; i++) {
            const valor = parseFloat(prompt(`Insira o valor ${i}:`));
            if (!isNaN(valor)) {
                valores.push(valor);
            }
        }
        document.getElementById("valoresInseridos").innerHTML = `Valores Inseridos: ${valores.join(", ")}`;
    } else {
        alert("Informe uma quantidade válida maior que zero.");
    }
}

function mostrarValores() {
    document.getElementById("resultado").innerHTML = `Valores Inseridos: ${valores.join(", ")}`;
}

function mostrarMaiorValor() {
    const maiorValor = Math.max(...valores);
    document.getElementById("resultado").innerHTML = `Maior Valor: ${maiorValor}`;
}

function mostrarMenorValor() {
    const menorValor = Math.min(...valores);
    document.getElementById("resultado").innerHTML = `Menor Valor: ${menorValor}`;
}
