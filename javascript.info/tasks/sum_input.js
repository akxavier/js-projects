function sumInput() {
    let arr = [];
    let a;

    do {
        a = prompt('Enter a number', '');
        if (a == '' || a == null || isNaN(a) ) {
            break;
        }
        arr.push(+a);        
    } while(1);

    let sum = 0;

    for (let num of arr) {
        sum += num;
    }

    alert(sum);
}

sumInput();