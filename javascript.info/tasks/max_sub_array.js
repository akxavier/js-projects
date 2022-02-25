function getMaxSubSum (arr) {
    let maxSum = 0;
    let partialSum = 0;

    for (let i = 0; i < arr.length; i++) {
        partialSum += arr[i];
        maxSum = Math.max(maxSum, partialSum);

        if(partialSum < 0) {
            partialSum = 0;
        }
    }

    return maxSum;
}

alert( getMaxSubSum([-2, -1, 1, 2]) )