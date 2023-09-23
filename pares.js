function exibirNumerosPares() {
    // Limpar resultados anteriores
    document.getElementById("numerosPares").innerHTML = "";
    document.getElementById("somaTotal").innerHTML = "";

    // Obter o valor informado pelo usuário
    const valor = parseInt(document.getElementById("valor").value);

    if (!isNaN(valor) && valor >= 1) {
        let numerosPares = [];
        let soma = 0;

        // Encontrar números pares e calcular a soma
        for (let i = 2; i <= valor; i += 2) {
            numerosPares.push(i);
            soma += i;
        }

        // Exibir números pares e soma
        document.getElementById("numerosPares").innerHTML = numerosPares.join(", ");
        document.getElementById("somaTotal").innerHTML = soma;
    } else {
        alert("Informe um valor válido (maior ou igual a 1).");
    }
}
