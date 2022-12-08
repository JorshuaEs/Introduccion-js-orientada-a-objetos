//Importacion de clases
import {Cliente} from './cliente.js';
import {CuentaCorriente} from './cuentaCorriente.js';

const cliente = new Cliente('Leonardo','12454852','213213');
const cliente2 = new Cliente('Maria','12585555','47755555');

const cuentaDeLeonardo = new CuentaCorriente(cliente, '1', '001');
const cuentaDeMaria = new CuentaCorriente(cliente2, '2', '002');

//cuentaDeLeonardo-#saldo = 10;
let saldo = cuentaDeLeonardo.verSaldo();

saldo = cuentaDeLeonardo.depositoEnCuenta(150);

console.log(CuentaCorriente.cantidadCuentas);


new CuentaCorriente(cliente2, '2', '002');
new CuentaCorriente(cliente2, '2', '002');
new CuentaCorriente(cliente2, '2', '002');
new CuentaCorriente(cliente2, '2', '002');
new CuentaCorriente(cliente2, '2', '002');
new CuentaCorriente(cliente2, '2', '002');
new CuentaCorriente(cliente2, '2', '002');
console.log(CuentaCorriente.cantidadCuentas);