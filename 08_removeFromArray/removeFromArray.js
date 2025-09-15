const removeFromArray = function(array, ...args) {
    for (let arg of args) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === arg) {
                delete (array[i]);
            }
        }
    }
    function filtering (value) {
        return value != undefined;
    }
    return (array.filter(filtering));
};

// Do not edit below this line
module.exports = removeFromArray;
