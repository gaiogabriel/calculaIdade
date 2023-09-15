function calculaIdade() {

    let anoNascimento = prompt("Digite o ano em que você nasceu:");
    let anoAtual = prompt("Digite o ano em que estamos:");

    if (isNaN(anoAtual)) {
        alert("Erro ao digitar!");
        let dataAtual = new Date();
        anoAtual = dataAtual.getFullYear;
    }
    if (anoNascimento > anoAtual) {
        console.log("Você digitou a data de nascimento maior que a data atual. Tente novamente!");
        calculaIdade();
    }
    let idade = anoAtual - anoNascimento;
    console.log("Você tem ", idade, "anos de idade!");
    }

    calculaIdade()