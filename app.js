const  _ = require('lodash')

const arr = [1, [2, [3, 5,], 4]]
const newArr = _.flattenDeep(arr)
console.log(newArr);

