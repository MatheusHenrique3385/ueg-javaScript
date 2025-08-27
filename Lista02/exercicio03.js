const taxa =2;
const apMensal = 8;
const nMeses = 12;
const valorAcomulado = ((Math.pow((1+taxa),nMeses)-1)/taxa)*apMensal;
console.log(valorAcomulado);