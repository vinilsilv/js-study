const duplicatesArray = [1, 1, 2, 2, 3, 4, 7];
const anotherArray = [2, 8, 10, 7];

const mergedArray = [...duplicatesArray, ...anotherArray]

const noDuplicates = [...new Set(mergedArray)];

console.log(noDuplicates)