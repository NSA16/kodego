function doFibonaccisequence(limit) {

    let numbers = [0,1];
    let n1 = 0;
    let n2 = 1;
    let newValue = 0;

    if(limit <= 1){
        number = numbers.pop();
    }

    for (let i=0; i< limit-2; i++){

        newValue = n1 + n2;
        n1= n2;
        n2 = newValue;
        numbers.push(newValue);
    }

    return numbers;
}