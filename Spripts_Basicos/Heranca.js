function Book(titulo, paginas, genero){
  this.titulo = titulo
  this.paginas = paginas
  this.genero = genero
}

class ITBook extends Book{
  constructor( title, pages, gener, technology){ // caso eu queira colocar mais um item no Book Technology preciso usar constructor
    super(title, pages, gener); // como se fosse isso > title = Book.titulo, pages = Book.paginas, gener = Book.genero 
    this.technology = technology;
  }    
}

class testeBook extends Book{

}



let jsBook = new ITBook('Aprendendo JS', '356', 'Estudos', 'JavaScript')
console.log(jsBook.titulo)

let tsBook = new testeBook('Teste Titulo', '999', 'qualquer um')
console.log(tsBook.paginas)