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
    saldo;
    agencia;

    constructor(){
        this.saldo = 0;
        this.numero = '';
        this.agencia = '';
    }

    depositoEnCuenta(valor){
        this.saldo += valor;//this define la cuenta corriente actual
    } 

    retirarDeCuenta(valor){
        this.saldo -= valor;  //tambén se puede utilizar this.saldo = this.saldo - valor
    }
}

cuentaDeLeonardo = new CuentaCorriente();
//cuentaDeLeonardo.saldo = 0; una forma de corregir el error de tipo de dato

cuentaDeLeonardo.depositoEnCuenta(100);
console.log(cuentaDeLeonardo);
cuentaDeLeonardo.retirarDeCuenta(50);
console.log(cuentaDeLeonardo);