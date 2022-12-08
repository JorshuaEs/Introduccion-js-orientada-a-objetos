//Importacion de clases
import {Cliente} from './cliente.js';
import {CuentaCorriente} from './cuentaCorriente.js';

const cliente = new Cliente();
cliente.nombreCliente = 'Leonardo';
cliente.dniCliente = '12454852';
cliente.rutCliente = '213213';

const cuentaDeLeonardo = new CuentaCorriente();
cuentaDeLeonardo.numero = '1';
cuentaDeLeonardo.agencia = '001';
cuentaDeLeonardo.cliente = cliente;//composición de clases unir clases que estan relacionadas de alguna forma



let saldo = cuentaDeLeonardo.verSaldo();


saldo = cuentaDeLeonardo.depositoEnCuenta(150);
console.log(`El saldo actual (Cuenta Leonardo) ${saldo}`);

const cliente2 = new Cliente();
cliente2.nombreCliente = 'Maria';
cliente2.dniCliente = '12585555';
cliente2.rutCliente = '47755555';

const cuentaDeMaria = new CuentaCorriente();
cuentaDeMaria.numero = '2';
cuentaDeMaria.agencia = '001';
cuentaDeMaria.cliente = cliente;

cuentaDeLeonardo.transferirParaCuenta(100, cuentaDeMaria)

const saldoMaria = cuentaDeMaria.verSaldo();
console.log(`El saldo actual (Cuenta Maria) ${saldoMaria}`);

const saldoLeonardo = cuentaDeLeonardo.verSaldo();
console.log(`El saldo actual (Cuenta Leonardo) ${saldoLeonardo}`);