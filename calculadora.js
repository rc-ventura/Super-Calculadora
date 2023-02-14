
//funcao calcular que é disparado por um evento de clique
//chama as funções de operações da calculadora
function calcular() {
    
    //pega os valores do inputs 
    const inputA = Number(document.getElementById("inputA").value);
    const inputB = Number(document.getElementById("inputB").value);

    //operações da calculadora
    adicao(inputA, inputB);
    subtracaoAB(inputA, inputB);
    subtracaoBA(inputB, inputA);
    multiplicacao(inputA, inputB);
    divisaoAB(inputA, inputB);
    divisaoBA(inputB, inputA);
    potenciaAB(inputA, inputB);
    potenciaBA(inputB, inputA);
    raizA(inputA);
    raizB(inputB);
    fatorialA(inputA);
    fatorialB(inputB);
    porcentagemAB(inputA, inputB);
    porcentagemBA(inputB, inputA);
    media(inputA, inputB);
    //limpaInput();

}

//funcao soma
function adicao(a, b) {
    //pega o elemento p e guarda em uma variavel
    let resultadoSoma = document.getElementById("soma")

    //guarda em uma variavel a operacao
    let soma = a + b;

    //imprime o resultado da operacao com uma casa decimal no HTML p
    resultadoSoma.innerHTML = soma.toFixed(1);

}

//calcula a multiplição de A com B
function multiplicacao(a, b) {
    let resultadoMultiplicacao = document.getElementById("multiplicacao")

    let multiplicacao = a * b;

    resultadoMultiplicacao.innerHTML = multiplicacao.toFixed(1);

}

//calcula  a subtracão de A com B
function subtracaoAB(a, b) {
    let resultadoSubtracaoAB = document.getElementById("subtracaoAB")

    let subtracaoAB = a - b;

    resultadoSubtracaoAB.innerHTML = subtracaoAB.toFixed(1);

}

//calcula a subtração de B com A 
function subtracaoBA(b, a) {
    let resultadoSubtracaoBA = document.getElementById("subtracaoBA")

    let subtracaoBA = b - a;

    resultadoSubtracaoBA.innerHTML = subtracaoBA.toFixed(1);

}

//calcula a divisao de A com B 
function divisaoAB(a, b) {
    let resultadoDivisaoAB = document.getElementById("divisaoAB")

    let divisaoAB = a / b;

    resultadoDivisaoAB.innerHTML = divisaoAB.toFixed(1);

}

//calcula a divisao de B com A 
function divisaoBA(b, a) {
    let resultadoDivisaoBA = document.getElementById("divisaoBA")

    let divisaoBA = b / a;

    resultadoDivisaoBA.innerHTML = divisaoBA.toFixed(1);

}

//calcula a potencia de A na base B
function potenciaAB(a, b) {
    let resultadoPotenciaAB = document.getElementById("potenciaAB")

    let potenciaAB = a ** b;

    resultadoPotenciaAB.innerHTML = potenciaAB.toFixed(1);

}

//calcula a potencia de B na base A
function potenciaBA(b, a) {
    let resultadoPotenciaBA = document.getElementById("potenciaBA")

    let potenciaBA = b ** a;

    resultadoPotenciaBA.innerHTML = potenciaBA.toFixed(1);

}

//calcula raiz quadrada de A
function raizA (a) {
    let resultadoRaizA = document.getElementById("raizA")

    let raizA = Math.sqrt(a);

    resultadoRaizA.innerHTML = raizA.toFixed(1);

}

//calcula raiz quadrada de B
function raizB  (b) {
    let resultadoRaizB = document.getElementById("raizB")

    let raizB = Math.sqrt(b);

    resultadoRaizB.innerHTML = raizB.toFixed(1);

}

//calcula fatorial de A
function fatorialA(a) {
    let resultadoFatorialA = document.getElementById("fatorialA")
    
    let fatorialA = a
    let index = fatorialA -1
    let calculoFatorialA = fatorialA

    for (let i = index; i > 1 ; i--){

        calculoFatorialA = calculoFatorialA * i  // calculo *=i
    }

    resultadoFatorialA.innerHTML = calculoFatorialA.toFixed(1);
}

//calcula fatorial de B
function fatorialB(b) {
    let resultadoFatorialB = document.getElementById("fatorialB")
    
    let fatorialB = b
    let index = fatorialB -1
    let calculoFatorialB = fatorialB

    for (let i = index; i > 1 ; i--){

        calculoFatorialB = calculoFatorialB * i  // calculo *=i
    }

    resultadoFatorialB.innerHTML = calculoFatorialB.toFixed(1);
}

//função que calcula a porcentagem de A em relação ao B
function porcentagemAB(a, b) {
    let resultadoPorcentagemAB = document.getElementById("porcentagemAB")

    let porcentagemAB = (b * 100) / a;

    resultadoPorcentagemAB.innerHTML = `${porcentagemAB.toFixed(1)}%`;

}

//função que calcula a porcentagem de B em relação ao A
function porcentagemBA(b, a) {
    let resultadoPorcentagemBA = document.getElementById("porcentagemBA")

    let porcentagemBA = (a * 100) / b;

    resultadoPorcentagemBA.innerHTML = `${porcentagemBA.toFixed(1)}%`;

}

//calcula media de A com B
function media(a, b) {
    let resultadoMedia = document.getElementById("media")

    let media = (a + b) / 2;

    resultadoMedia.innerHTML = media.toFixed(1);

}

//limpa o input
//function limpaInput(){
  //  inputA.value = 0
   // inputB.value = 0
   // inputA.focus();
    
//}