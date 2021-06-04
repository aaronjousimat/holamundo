//funcion para sumar dos numeros
function Suma(numero1,numero2){
	let n1,n2,sum;
	n1=parseFloat(numero1);
	n2=parseFloat(numero2);
	sum=n1+n2;
	//alert("La suma es: "+sum);
	document.getElementById("resultadoSuma").innerHTML="<h1>La suma es: " + sum +"</h1>";
}

function Resta(numero1,numero2){
	let n1,n2,res;
	n1=parseFloat(numero1);
	n2=parseFloat(numero2);
	res=n1-n2;
	document.getElementById("resultadoResta").innerHTML="<h1>La resta es: " + res +"</h1>";
	//alert("La resta es: "+res)
}

function Multiplicacion(numero1,numero2){
	let n1,n2,mul;
	n1=parseFloat(numero1);
	n2=parseFloat(numero2);
	mul=n1*n2;
	document.getElementById("resultadoMultiplicacion").innerHTML="<h1>La multiplicación es: " + mul +"</h1>";
	///window.print(mul);//
	//alert("La multiplicación es: "+mul)

	}

function Division(numero1,numero2){
	let n1,n2,mul;
	n1=parseFloat(numero1);
	n2=parseFloat(numero2);
	div=n1/n2;
	document.getElementById("resultadoDivision").innerHTML="<h1>La división es: " + div +"</h1>";
	//alert("La división es: "+div)
}





//crear funciones den java script
//document.write("Sos hijo.<br>")
//function calcular_suma(){
	//alert("Hola, bienvenido!");
//}
//funcion para sumar dos numeros
/*let nombre=prompt("Ingresa tu nombre");
let edad=prompt("Ingresa tu edad.");
document.write("Hola "+nombre+"<br>");
document.write("Tu edad es: "+edad+"<br>");

let num1=parseInt(prompt("Ingresa el primer numero: "));
let num2=parseInt(prompt("Ingresa el segundo numero: "));

let suma=num1+num2;
document.write("La suma es: " + suma);*/



