let arr = [5, 2, 1, -10, 8];

// ... your code to sort it in decreasing order
function  sortFunc(a, b) {
    return (a - b);
}

arr.sort(sortFunc).reverse();

alert( arr ); // 8, 5, 2, 1, -10

/*
// Alternatively
arr.sort( (a, b) => b - a );
*/