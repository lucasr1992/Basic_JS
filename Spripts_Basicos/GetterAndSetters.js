class Person { 
  constructor(name, idade) { 
    this._name = name; 
    this._idade = idade;
  } 
  get name() { 
   return this._name; 
  }
  get idade(){
    return this._idade;
  }

  set idade(old){
    this._idade = old;
  }

  set name(value) { 
   this._name = value; 
  }
}

let lotrChar = new Person('Frodo', 35);
console.log(lotrChar.name); 
lotrChar.name = 'Gandalf';
console.log(lotrChar.name);
lotrChar._name = 'Sam'; 
console.log(lotrChar.name);

