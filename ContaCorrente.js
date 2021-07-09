import Cliente from "./Cliente.js";

class ContaCorrente {
  static numeroDeContas = 0;
  agencia;

  #cliente;
  #saldo = 0;

  set cliente(cliente) {
    if (cliente instanceof Cliente) this.#cliente = cliente;
  }

  get cliente() {
    return this.#cliente;
  }

  get saldo() {
    return this.#saldo;
  }

  constructor(cliente, agencia) {
    this.agencia = agencia;
    this.cliente = cliente;
    ContaCorrente.numeroDeContas += 1;
  }

  sacar(valor) {
    if (this.#saldo >= valor) {
      this.#saldo -= valor;
      return valor;
    }
  }

  depositar(valor) {
    if (valor > 0) {
      this.#saldo += valor;
      return valor;
    }
  }

  transferir(valor, conta) {
    const valorSacado = this.sacar(valor);

    conta.depositar(valorSacado);
  }
}

export default ContaCorrente;
