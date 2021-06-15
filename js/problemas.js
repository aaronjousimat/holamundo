function numeroMenor(numero1,numero2,numero3){
	let n1,n2,n3,;
	n1=parseFloat(numero1);
	n2=parseFloat(numero2);
	n3=parseFloat(numero3);

	if (n1<n2) {
		if (n1<n3) {
		
			document.getElementById("resultado").innerHTML="<h1>El número menor es: " + n1 +"</h1>";
		}
	}
	//alert("La suma es: "+sum);
	
}


function diaSemana(numero1){
	let n1;
	n1=parseFloat(numero1);

	switch(n1){
	case 1:
	document.getElementById("dia").innerHTML="<h1>El día de la semana es Lunes. <br></h1>";
	break;
	case 2:
	document.getElementById("dia").innerHTML="<h1>El día de la semana es Martes. <br></h1>";
	break;
	case 3:
	document.getElementById("dia").innerHTML="<h1>El día de la semana es Miércoles. <br></h1>";
	break;
	case 4:
	document.getElementById("dia").innerHTML="<h1>El día de la semana es Jueves. <br></h1>";
	break;
	case 5:
	document.getElementById("dia").innerHTML="<h1>El día de la semana es Viernes. <br></h1>";
	break;
	case 6:
	document.getElementById("dia").innerHTML="<h1>El día de la semana es Sábado. <br></h1>";
	break;
	case 7:
	document.getElementById("dia").innerHTML="<h1>El día de la semana es Domingo. <br></h1>";
	break;
	default:
	document.getElementById("dia").innerHTML="<h1>Te equivocaste de opción. <br></h1>";
	break
}
	//alert("La suma es: "+sum);
	
}







function Suma(numero1,numero2){
	let n1,n2,sum;
	n1=parseFloat(numero1);
	n2=parseFloat(numero2);
	sum=n1+n2;
	//alert("La suma es: "+sum);
	document.getElementById("resultadoSuma").innerHTML="<h1>La suma es: " + sum +"</h1>";
}