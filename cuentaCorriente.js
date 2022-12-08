export class CuentaCorriente
{
    cliente;
    numero;
    agencia;
    #saldo;//variables con atributos privados

    constructor(){
        this.cliente = null;
        this.numero = '';
        this.agencia = '';
        this.#saldo = 0;

    }

    depositoEnCuenta(valor){
        if(valor > 0)//condicion para que acepte unicamente valores positivos
            this.#saldo += valor;//this define la cuenta corriente actual
        return this.#saldo;
    } 

    retirarDeCuenta(valor){
        if(valor <= this.#saldo)//condición para no pasar el valor que se tiene y quedar en negativo
        this.#saldo -= valor;  //tambén se puede utilizar this.saldo = this.saldo - valor
        return this.#saldo;
    }
    
    verSaldo(){
        return this.#saldo;
    }
    
    transferirParaCuenta(valor, cuentaDestino){
        this.retirarDeCuenta(valor);
        cuentaDestino.depositoEnCuenta(valor);
    }
}
