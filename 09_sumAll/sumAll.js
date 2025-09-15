const sumAll = function(num_1,num_2) {
    let sum = 0;
    if (num_1 < 0 || num_2 <0 ) {
        return "ERROR"
    }
    else if (Number.isInteger(num_1) === false || Number.isInteger(num_2) === false) {
        return "ERROR"
    }
    else if (num_1 > num_2) {
        for (let i = num_2; i <= num_1; i++) {
            sum+= i
        }
    }
    else {
        for (let i = num_1; i <= num_2;i++) {
            sum+= i
        }
    }
    
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
