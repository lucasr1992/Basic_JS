let [x, y] = ['a', 'b'] //  let x = 'a';  let y = 'b';

console.log("valor de X: ", x, " valor de y: ", y)

function troca(){
    let [p, g] = ['a', 'b'];
    [p, g] = [g, p] 
    console.log("VAL P: ",p,  " VAL G: ", g)
    return p, g;
}

// var valor = x;  x = y;  y = valor;

troca();


