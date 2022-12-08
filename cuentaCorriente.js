import {Cliente} from './cliente.js';

export class CuentaCorriente
{
    #cliente;
    numero;
    agencia;
    #saldo;//variables con atributos privados
    static cantidadCuentas = 0;//declarar un atributo estatico, es un atributo en general e incambiante

    //set es parecido a una funcion pero no es una como tal

    //permite gestionar de una mejor manera las variables utilizadas como atributos privados
    set cliente(valor){
        if(valor instanceof Cliente)
        this.#cliente = valor;
    }

    get cliente(){
        return this.#cliente;
    }

    constructor(cliente, numero, agencia){//Contructor es una funcion que se ejecuta cuando se genera una instancia
        this.cliente= cliente;
        this.numero = numero;
        this.agencia = agencia;
        this.#saldo = 0;
        CuentaCorriente.cantidadCuentas++;

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
