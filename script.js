//Cálculo da variável SOMA
let INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) {
    K++;
    SOMA += K;
}

console.log(SOMA); 
// Resultado: 91

// Verificação de um número na sequência de Fibonacci
function pertenceFibonacci(num) {
    let a = 0, b = 1;
    while (a < num) {
        let temp = a;
        a = b;
        b = temp + b;
    }
    return a === num;
}

const numeroInformado = parseInt(prompt("Informe um número: "), 10);
if (pertenceFibonacci(numeroInformado)) {
    console.log(`${numeroInformado} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${numeroInformado} não pertence à sequência de Fibonacci.`);
}

y
//Análise do faturamento diário
const dadosJson = `{
    "faturamento": [
        {"dia": 1, "valor": 1000},
        {"dia": 2, "valor": 2000},
        {"dia": 3, "valor": null},
        {"dia": 4, "valor": 3000},
        {"dia": 5, "valor": 1500}
    ]
}`;

const dados = JSON.parse(dadosJson);

const valores = dados.faturamento
    .map(d => d.valor)
    .filter(valor => valor !== null);

const menor = Math.min(...valores);
const maior = Math.max(...valores);
const media = valores.reduce((acc, valor) => acc + valor, 0) / valores.length;

const diasAcimaMedia = valores.filter(valor => valor > media).length;

console.log(`Menor valor: R$${menor}`);
console.log(`Maior valor: R$${maior}`);
console.log(`Dias acima da média: ${diasAcimaMedia}`);

//Cálculo do percentual de representação de faturamento
const faturamento = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

const total = Object.values(faturamento).reduce((acc, valor) => acc + valor, 0);

for (const estado in faturamento) {
    const percentual = (faturamento[estado] / total) * 100;
    console.log(`${estado}: ${percentual.toFixed(2)}%`);
}


//Inversão de caracteres de uma string
function inverterString(str) {
    let inversa = '';
    for (let i = str.length - 1; i >= 0; i--) {
        inversa += str[i];
    }
    return inversa;
}

const stringInformada = prompt("Informe uma string: ");
console.log(inverterString(stringInformada));
