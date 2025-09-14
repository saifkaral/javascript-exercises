const repeatString = function(String,times) {
    let newstr = ""
    if (times < 0) {
        return "ERROR"
    }
    else {
        for (let i = 0; i<times;i++) {
            newstr+=String;
        }
    }
    
    return newstr;
};

// Do not edit below this line
module.exports = repeatString;
