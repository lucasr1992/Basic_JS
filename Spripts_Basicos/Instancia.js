function Book(titulo, pages, genero){
    this.titulo = titulo
    this.pages = pages
    this.genero = genero
}

var livro = new Book('carrocel', 25, 'sua irmã')

livro.pages = 444;

document.write(livro.titulo);
document.write(' '+livro.pages);

