// 3.2
// Realice un algoritmo para determinar el sueldo semanal de un trabajador
// con base en las horas trabajadas y el pago por hora, considerando 
//que después de las 40 horas cada hora se considera como
// excedente y se paga el doble.


let pago_por_horas = +prompt("Ingrese el pago por horas");
let horas_trabajadas = +prompt("Ingrese las horas trabajadas");

if (horas_trabajadas > 40) {
    horas_extras=(horas_trabajadas-40);
    excedente=horas_extras*(pago_por_horas*2);
    console.log(`EL sueldo del trabajador es ${excedente+(horas_trabajadas*pago_por_horas)}`);
    
} else {
   console.log(`El sueldo del trabajador es ${pago_por_horas*horas_trabajadas}`);
   
}


