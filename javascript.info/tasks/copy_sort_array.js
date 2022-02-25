function copySorted(arr) {
    let copy = [];
    for(let item of arr)
        copy.push(item);

    return copy.sort();
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (no changes)


/*
// Alternatively
function copySorted(arr) {
    return arr.slice().sort();
}
*/