const removeFromArray = (array, ...items) => {
    for (const item of items) {
        let itemIndex = array.indexOf(item);
        if (item >= 0) {
            let removedItem = array.splice(itemIndex, 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
