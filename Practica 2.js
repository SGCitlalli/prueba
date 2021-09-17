
//Ejercicio 1
var dinero= 350;
if(dinero>400){
    console.log("compar una paleta de maquillaje ");

}else{
    console.log("compar un labial");

}
//Ejercicio 2
var dinero= 20;
if(dinero>30){
    console.log("comprar pan de dulce");

}else{
    console.log("comprar bolillo");

}

//Ejercicio 3
var pizza= 450;
if(pizza<450){
    console.log("No se compra la pizza");

}else{
    console.log("Se compra una amburguesa");
}

//Ejercicio 4
var dinero=15;
if(dinero>20){
    console.log("comprar un chocolate");

}else{
    console.log("comprar una paleta");
}

//Ejercicio 5
var dinero=20000;
if(dinero>22000){
    console.log("comprar Laptop Lenovo");
}else{
    console.log("compara Laptop Dell");
}


//Ejercicio 6
var saludo="hola amigos";

switch(saludo){
    case "hola":
        console.log("hola");
    break;
    case "amiga hola":
        console.log("amiga hola");
    break;
    default:
        console.log("no hay hola");
    break;

}

//Ejercicio 7
var dinero="1000";

switch(dinero){
    case "1":
        console.log("comprar dos blusas");
    break;
    case "2":
        console.log("comprar un pantalo y una blusa");
    break;
    case "3":
        console.log("comprar dos pantalones");
    break;
    default:
        console.log("no comprar nada");
    break;

}

//Ejercicio 8
var libro="la quinta ola";

switch(libro){
    case "bajo la misma estrella":
        console.log("romance");
    break;
    case "los juegos del hambre":
        console.log("ciencia ficcion");
    break;
    case "cuentos magicos ":
        console.log("infantil");
    break;
    default:
        console.log("no conozco ningun libro");
    break;
}

// Ejercicio 9
var dinero="100";

switch(dinero){
    case "1":
        console.log("comprar una libretas y un paquete de colores ");
    break;
    case "2":
        console.log("compara dos libretas y un lapiz");
    break;
    case "3":
        console.log("comprar cuatro libretas");
    break;
    default:
        console.log("no tenemos dinero");
    break;
}

//Ejercicio 10
var tenis="20000";

switch(tenis){
    case "azules":
        console.log(" me quedan grandes ");
    break;
    case "negros":
        console.log("no son de mi numero");
    break;
    case "rosas":
        console.log("no me alcanza el dinero");
    break;
    default:
        console.log("no hay dinero");
    break;
}

//Ejercicio 11
var n = 1;
if(n > 10) {
    console.log("compara una paleta");
}else {
    switch (n) {
        case 1:
            console.log(1);
            break;
        case 2:
            console.log(2);
            break;
        case 3:
            console.log(3);
            break;
        case 4:
            console.log(4);
            break;
        default:
            console.log("es menor a 1");
            break;  
}

}

//Ejercicio 12
var color = cafe;
switch (raza) {
    case "animal":
        if(color=cafe){
            console.log("la raza es promedia y el color es cafe");
          }
        break;
    case "pastor aleman":
        if(color=cafe ){
             console.log("la raza es pastor aleman y el color es cafe");
          }
        break;
    case "labrador":
        if(color=cafe){
            console.log("la raza es labrador y el color es cafe");
        }
    default:
        console.log("la raza no es conocida ni el color");
        break;

}

//Ejercicio 13
var libreria = gandhi;
var ubicacion = ciudad;
switch (libreria) {
    case "gandhi":
        if(ubicacion=ciudad){
            console.log("la libreria gandhi esta ubicada en la cuidad de mexico");
          }
        break;
    case "el sotano":
        if(ubicacion=ciudad){
             console.log("la libreria el sotano esta ubicada en la cuidad de mexico");
          }
        break;
    case "el quijote":
        if(ubicacion=texcoco){
            console.log("la libreria el quijote esta ubicada en texcoco");
        }
    default:
        console.log("las librerias estaban cerradas");
        break;

}

//Ejercicio 14
var zapateria= flexi;
var ubicacion = texcoco;
switch (zapateria) {
    case "flexi":
        if(ubicacion=texcoco){
            console.log("la zapateria flexi esta ubicada en texcoco");
          }
        break;
    case "saporo":
        if(ubicacion=acolman){
             console.log("la zapateria esta ubicada en acolman");
          }
        break;
    case "leon":
        if(ubicacion=cuidad){
            console.log("la zapateria leon esta ubicada en la cuidad de mexico");
        }
    default:
        console.log("las zapaterias estaban cerradas");
        break;

}

//Ejercicio 15
var mascota= felix;
var  hogar = xometla;
switch (mascota) {
    case "felix":
        if(hogar=xometla){
            console.log("la mascota  llamada felix tiene su hogar en xomtela");
          }
        break;
    case "romeo":
        if(hogar=chipil){
             console.log("la mascota llamada romeo tiene su hogar en chipil");
          }
        break;
    case "campana":
        if(hogar=acolman){
            console.log("la mascota llamada camapana tiene su hogar en acolman");
        }
    default:
        console.log("no se encotro un hogar");
        break;

}
