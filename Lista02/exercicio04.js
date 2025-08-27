const prestacao = 750;
const  juros = 8;
const tempoDeAtraso = 6;
const taxaDeJuros = juros / 100;
const prestacaoAtualizada = prestacao + (prestacao * taxaDeJuros * tempoDeAtraso);   
console.log (prestacaoAtualizada);