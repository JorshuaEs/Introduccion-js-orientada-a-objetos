//Importacion de clases
import {CuentaCorriente} from './cuentaCorriente.js';



const cuentaDeLeonardo = new CuentaCorriente();
//cuentaDeLeonardo.saldo = 0; una forma de corregir el error de tipo de dato
let saldo = cuentaDeLeonardo.verSaldo();
console.log(`El saldo actual es ${saldo}`);


saldo = cuentaDeLeonardo.depositoEnCuenta(150);
console.log(`El saldo actual es ${saldo}`);

saldo = cuentaDeLeonardo.retirarDeCuenta(100);
console.log(`El saldo actual es ${saldo}`);

saldo = cuentaDeLeonardo.depositoEnCuenta(10);
console.log(`El saldo actual es ${saldo}`);