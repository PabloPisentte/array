var qpx=[10,20,30,40];
var media=0;
media=(qpx[0]+qpx[1]+qpx[2]+qpx[3])/4;
console.log("La media del array es: "+media);
function qpxxx(qpx){
    var maximo=Math.max(...qpx);
    var minimo=Math.min(...qpx);
    console.log("El mayor es: "+maximo);
    console.log("El minimo es: "+minimo);
}
qpxxx(qpx);