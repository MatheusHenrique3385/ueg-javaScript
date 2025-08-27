const custoFabrica = 40000.00;
const percentDist = (custoFabrica*0.12);
const imposto = (custoFabrica * 0.30);

const custoConsumidor = custoFabrica + percentDist + imposto;
console.log(custoConsumidor);