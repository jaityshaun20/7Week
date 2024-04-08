function isNumber(value) {
    return typeof value === 'number';
}
function isString(value) {
    return typeof value === 'string';
}
var mixedArray = [];
mixedArray.push("pink", "head", "nose", "bag", "pen", 1, 2, 3, 4, 5);
mixedArray.forEach(function (item) {
    if (isString(item)) {
        console.log("string:", item);
    }
    else if (isNumber(item)) {
        console.log("number:", item);
    }
});
