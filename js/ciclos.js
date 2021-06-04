//condicionales if - else
var a=18;
var b=12;

//identificar le numero mayor
if (a>b) {
document.write("El numero mayor es: "+a+"<br>");
} else {
document.write("El numero mayor es: "+b+"<br>");
}

//ciclo for.
//numero del 0 al 10.

for (var i = 0; i <= 10; i++) {
	document.write(i+"<br>");
}

document.write("<br>");

//ciclo while
var i=0;
while (i<=10){
	document.write(i+"<br>");
	i++;
}

document.write("<br>");

//ciclo do while
var j=0;
do {
document.write(j+"<br>")
j++;
}while (j<=10);

//seleccion multiple.
// casos o switch case.
//Validar si un numero entre 1 y 4,
//1=hijo, 2=hija, 3=padre, 4=madre.
var familia=4;
switch(familia){
	case 1:
	document.write("Sos hijo.<br>")
	break;
	case 2:
	document.write("Sos hija.<br>")
	break;
	case 3:
	document.write("Sos padre.<br>")
	break;
	case 4:
	document.write("Sos madre.<br>")
	break;
	default:
	document.write("La opcion no esta disponible.<br>")
	break
}