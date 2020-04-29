//3.11
// Se les dará un bono por antigüedad a los empleados de una tienda.
// Si tienen un año, se les dará $100; si tienen 2 años, $200, y así
// sucesivamente hasta los 5 años. Para los que tengan más de 5, el
// bono será de $1000. Realice un algoritmo y represéntelo mediante
// el diagrama de flujo, el pseudocódigo y diagrama N/S que permita
// determinar el bono que recibirá un trabajador.
    
let antiguedad2 = +prompt("Indique la antigüedad del trabajador");

if (antiguedad2 <= 5) {
    console.log(`Bono : $  ${antiguedad2 * 100}`);
}
else {
    console.log(`Bono : $  1000`);
}
