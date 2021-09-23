//-----------1:IMPRIMIR TODOS LOS NUMEROA DECIMALES,DEL 0 AL 9, UTILIZANDO UNA REPETICION
var  suma= 0.1;
var i= 0;
for (var i=0; i<=9; i+0.1){
   i = parseFloat(i) + parseFloat(suma);
  console.log(+i)
}