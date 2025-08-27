const consumoMedio = 12.5;
const preçoDoLitro = 6.44;
const tempoDeViagem = 4;
const velocidadeMedia = 100;
let distancia = tempoDeViagem * velocidadeMedia;
let quantidadeDeLitros = distancia / consumoMedio;
let custo = quantidadeDeLitros * preçoDoLitro;
console.log("O custo da viagem R$ " + custo);
