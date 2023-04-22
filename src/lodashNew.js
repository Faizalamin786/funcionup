const mylodash =require("lodash")
/*Using the package ‘lodash’ solve below problems(Write all this in route.js in /test-me route handler)
- Create an array of strings containing the names all the months of a year and split the array into 4 equally sized sub-arrays using the chunk function. Print these sub-arrays on console.
- Create an array containing the first 10 odd numbers. Using the tail function, return the last 9 elements of it and print them on console.
- Create 5 arrays of numbers containing a few duplicate values. Using the function union create a merged array with only unique values and print them on console
- Use the function fromPairs to create an object containing key value pairs. For example [“horror”,”The Shining"],[“drama”,”Titanic"],[“thriller”,”Shutter Island"],[“fantasy”,”Pans Labyrinth"]
*/

function chunk(array ,size){
    console.log(mylodash.chunk(array,size))
}
function tail(array){
    console.log(mylodash.tail(array))
}
function union(array){
    console.log(mylodash.union(...array))
}
function fromPairs(array){
    console.log(mylodash.fromPairs(array))
}
module.exports.chunk = chunk
module.exports.tail = tail 
module.exports.union=union
module.exports.fromPairs=fromPairs