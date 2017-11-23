let radio = 6


// Forma 1.
/*function areaCirculo(radio){
	return Math.PI * (radio * radio)
}*/

// Forma 2.
/*let areaCirculo =  function(radio){
	return Math.PI * (radio * radio)	
}*/

// Forma 3.
/*let areaCirculo = (radio) => {
	return Math.PI * (radio * radio)	
}*/

// Forma 4.
let areaCirculo = (radio) => Math.PI * (radio * radio)

//console.log(areaCirculo(6))
console.log(`El área del circulo de radio ${radio} es: ${areaCirculo(radio)}`)