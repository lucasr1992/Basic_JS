let movie = 'Lord of The Rings'
function starWarsFan(){
    const movie = 'Star Wars'
    return movie;
}

function marvelFan(){
    movie = 'Avengers'
    return movie;
}

function blizzardFun(){
    const isFan = true;
    let phrase = 'Warcraft'
    console.log('Before if: ' + phrase)
    if(isFan){
        let phrase = 'initial text'
        phrase = 'For the Horde'
        console.log('Inside if: ' + phrase);
    }
    phrase = 'For the Alliance!'
    console.log('After if: ' + phrase)
}
console.log(movie)
console.log(starWarsFan())
console.log(marvelFan())
console.log(movie)
blizzardFun()
