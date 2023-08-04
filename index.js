var cats= ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(Ralph) {
    cats.push("Ralph");
}

function destructivelyPrependCat(Bob) {
    cats.unshift("Bob");
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function destructivelyRemoveLastCat() {
    cats.pop();
}


function appendCat(Broom) {
    var newCats = [...cats, "Broom"];
    return newCats;
}

function prependCat(Arnold) {
    var newCats2 = ["Arnold", ...cats];
    return newCats2;
}

function removeLastCat() {
    var newCats3 = cats.slice(0, cats.length - 1);
    return newCats3;
}

function removeFirstCat() {
    var newCats4 = cats.slice(1);
    return newCats4;
}
