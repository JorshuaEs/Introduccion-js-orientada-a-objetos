//Definición de clases
class Cliente
{
    nombreCliente;
    dniCliente;
    rutCliente;
}//clase, es el molde para generar las instacias necesarias para manejar la información

class CuentaCorriente
{
    numero;
    #saldo;//variables con atributos privados
    agencia;

    constructor(){
        this.#saldo = 0;
        this.numero = '';
        this.agencia = '';
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
}

cuentaDeLeonardo = new CuentaCorriente();
//cuentaDeLeonardo.saldo = 0; una forma de corregir el error de tipo de dato
let saldo = cuentaDeLeonardo.verSaldo();
console.log(`El saldo actual es ${saldo}`);


saldo = cuentaDeLeonardo.depositoEnCuenta(100);
console.log(`El saldo actual es ${saldo}`);

saldo = cuentaDeLeonardo.retirarDeCuenta(100);
console.log(`El saldo actual es ${saldo}`);

saldo = cuentaDeLeonardo.depositoEnCuenta(10);
console.log(`El saldo actual es ${saldo}`);