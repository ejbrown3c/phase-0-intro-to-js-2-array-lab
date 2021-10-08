// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat () {
    cats.push("Ralph");
    return cats;
}


function destructivelyPrependCat() {
    cats.unshift("Bob");
    return cats;
}


function destructivelyRemoveLastCat() {
    cats.pop();
    return cats;
}

function destructivelyRemoveFirstCat() {
    cats.shift()
    return cats;
}
const cats1= ["Broom"]
function appendCat () {
    let cats1 = ([...cats, "Broom"]);
    return cats1;
}

const cats2 = ["Arnold"]
function prependCat () {
    let cats2 = (["Arnold", ...cats]);
    return cats2;
}

function removeLastCat () {
    var cats3=cats.slice(0, cats.length-1);
    return cats3;
}

function removeFirstCat() {
    var cats3 =cats.slice(1);
    return cats3;
}
