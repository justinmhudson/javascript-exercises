const sumAll = function(a, b) {
    inputArray = [a, b];
    let errorMessage = '';
    let sum = 0;

    let smallerNumber = Math.min(...inputArray);
    let largerNumber = Math.max(...inputArray);
    
    inputArray.forEach(element => {
        if(typeof element !== 'number' || element < 0 || element % 1 !== 0) {
            errorMessage = 'ERROR';
        }
    });

    if (errorMessage === 'ERROR') {
        return errorMessage;
    } else {
        for(let i = smallerNumber; i <= largerNumber; i++) {
            sum += i;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
