function filterRange(arr, a, b) {
    let filtered = [];

    for(let item of arr) {
        if ( (item >= a) && (item <= b) ) {
            filtered.push(item);
        }
    }

    return filtered;
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (matching values)

alert( arr ); // 5,3,8,1 (not modified)

/*
// Alternatively

function filterRange(arr, a, b) {
    return arr.filter(item => (item >= a) && (item <= b) );
}
*/
