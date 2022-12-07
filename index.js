class Cliente
{
    nombreCliente;
    dniCliente;
    numeroCuenta;
    saldoCuenta;
}//clase, es el molde para generar las instacias necesarias para manejar la información
const cliente1 = new Cliente();

cliente1.nombreCliente ="Jose";
cliente1.dniCliente = "13232";
cliente1.numeroCuenta = "12343250";
cliente1.saldoCuenta = 2000;

const cliente2 = new Cliente();

cliente2.nombreCliente = "Leonardo";
cliente2.dniCliente = "13804050";
cliente2.numeroCuenta = "123434343"
cliente2.saldoCuenta = 1000;

const cliente3 = new Cliente();

cliente3.nombreCliente = "Maria";
cliente3.dniCliente = "55212";
cliente3.numeroCuenta = "532135135"
cliente3.saldoCuenta = 1254;


console.log(cliente1);
console.log(cliente2);
console.log(cliente2);