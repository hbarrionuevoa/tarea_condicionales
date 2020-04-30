//4.1
// Un profesor tiene un salario inicial de $1500, y recibe un incremento
// de 10 % anual durante 6 años. ¿Cuál es su salario al cabo de 6
// años? ¿Qué salario ha recibido en cada uno de los 6 años? Realice el
// algoritmo y represente la solución mediante el diagrama de flujo, el
// pseudocódigo y el diagrama N/S, utilizando el ciclo apropiado.

let i=0;
// let incremento =0;
let salarioInicial = 1500;

while (i<6) {
    salarioInicial=salarioInicial*1.10;
    i+=1
    console.log(`Salario por año ${i}= ${salarioInicial.toFixed(3)}`);
}