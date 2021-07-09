import Cliente from "./Cliente.js";
import ContaCorrente from "./ContaCorrente.js";

const cliente1 = new Cliente("Leonardo", 50090090090);
const cliente2 = new Cliente("Alice", 20050090020);

const contaCorrente1 = new ContaCorrente(cliente1, 1001);
const contaCorrente2 = new ContaCorrente(cliente2, 1002);

contaCorrente1.depositar(500);
contaCorrente1.transferir(70, contaCorrente2);

console.log(contaCorrente1);
