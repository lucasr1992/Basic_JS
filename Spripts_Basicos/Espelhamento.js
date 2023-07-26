function restParametros(x, y, ...a){
    document.write(a.length);
    return (x+y)*a.length;
}

console.log(restParametros(1, 2, 'hello', true));