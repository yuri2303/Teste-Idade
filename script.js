// function clicar() {
//     let idade = 20; 
//         if(idade >= 20){
//             document.getElementById('demo').innerText = 'Olá, você é de Maior'
//         }else(idade <= 16); {
//             document.getElementById('demo').innerText = 'Olá, você é de Menor'
//         }
        
    
// }

function clicar() {
    // Captura o valor do input e converte para número
    let idadeInput = document.getElementById('inputIdade').value;
    let idade = Number(idadeInput);

    // Verifica se o valor é válido
    if (isNaN(idade) || idadeInput === "") {
        document.getElementById('resultado').innerText = 'Por favor, insira uma idade válida.';
        return; // Interrompe a execução caso o valor seja inválido
    }

    // Compara a idade e exibe a mensagem correspondente
    if (idade >= 18) {
        document.getElementById('resultado').innerText = 'Você é maior de idade.';
    } else {
        document.getElementById('resultado').innerText = 'Você é menor de idade!';
    }
}
