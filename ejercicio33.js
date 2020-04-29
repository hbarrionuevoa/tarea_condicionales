//3.3
// El 14 de febrero una persona desea comprarle un regalo al ser querido
// que más aprecia en ese momento, su dilema radica en qué regalo
// puede hacerle, las alternativas que tiene son las siguientes:

let dinero = +prompt("Ingrese el dinero que tiene para su regalo");

if (dinero <=10) {
    console.log(`El regalo será tarjeta`);
    
}else if (dinero >11 && dinero <=100) {
        console.log(`El regalo sera chocolates`);
}else if (dinero >100 && dinero <=250) {
        console.log(`El regalo será flores`);
}else if (dinero >251) {
        console.log(`El regalo será anillo`);
}