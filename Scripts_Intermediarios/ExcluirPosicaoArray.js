let numero = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29];



Array.prototype.reIndex = function(myArray) { 
	const newArray = []; 

	for(let i = 0; i < myArray.length; i++ ) {
		 if (myArray[i] !== undefined) {
			 
			 newArray.push(myArray[i]); 
			} 
		} 
	return newArray;
}

Array.prototype.removeFirstPosition = function() { 
	for (let i = 0; i < this.length; i++) { 
		this[i] = this[i + 1]; 
	} 
	return this.reIndex(this);
};
numero = numero.removeFirstPosition();

console.log(numero)