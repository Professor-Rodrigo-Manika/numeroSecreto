alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random () *numeroMaximo +1);
console.log(numeroSecreto)
let chute
let tentativas = 1;

// enquanto chute não

while (chute!= numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    //se o chute for certeiro
    {if (chute == numeroSecreto){
        break
    
    } else {
        if(numeroSecreto > chute) {
            alert(`O número secreto é maior que ${chute}`)
        } if(numeroSecreto < chute){
            alert(`O número secreto é menor que ${chute}`)
        }
        tentativas++;
    }
    }
    
}
let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa'
alert(`Isso aí, você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

//if (tentativas > 1){
//    alert(`Isso aí, você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
//} else{
//    alert(`Isso aí, você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
//}




