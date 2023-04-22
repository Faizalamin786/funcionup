//- trim() : calls the trim function on a hardcoded string for example ‘ functionUp  ’
//- changetoLowerCase() : changes the case of the string to lower. [Call toLowerCase() on a hardcoded string]
//- changeToUpperCase() : changes the case of the string to upper case [Call toUpperCase() on a hardcoded string]
function trim(str){
    console.log(str.trim())
}
// trim("     functionup   ")
function toLowerCase(str){
    console.log(str.toLowerCase())
}
//toLowerCase("HUSTLER")
function toUpperCase(str){
    console.log(str.toUpperCase())
}
//toUpperCase("faizalzehrila")

module.exports.trim=trim
module.exports.toLowerCase=toLowerCase
module.exports.toUpperCase=toUpperCase
