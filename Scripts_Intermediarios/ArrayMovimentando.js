
let numero = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29];

Array.prototype.insertFirstPosition = function(value) { 
  
  for (let i = this.length; i >= 0; i--) { 
    this[i] = this[i - 1]; 
  } 
  this[0] = value;
};
numero.insertFirstPosition(-1);
console.log(numero)