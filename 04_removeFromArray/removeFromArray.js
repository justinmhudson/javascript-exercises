const removeFromArray = (array, ...items) => {
    for (let item of items) {
        let itemIndex = array.indexOf(item);
        while (itemIndex !== -1) {
            array.splice(itemIndex, 1);
            itemIndex = array.indexOf(item);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
