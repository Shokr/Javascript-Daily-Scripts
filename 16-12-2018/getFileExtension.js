console.log('======================')
console.log('==>Shokr@github.com<==')
console.log('======================')

var file1 = "50.xsl"
var file2 = "30.doc"

var x = getFileExtension(file1) //returs xsl
var y = getFileExtension(file2) //returs doc

console.log(x, y);

function getFileExtension(filename) {
    // Solution 1: Regular Expression
    //return (/[.]/.exec(filename)) ? /[^.]+$/.exec(filename)[0] : undefined

    // Solution 2: String split method
    return filename.split('.').pop()
}