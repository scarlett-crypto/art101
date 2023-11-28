//Scarlett Orkin


function isEven(x) {
    return (x % 2 == 0)
}

console.log("is 1 even?", isEven(1));
console.log("is 2 even?", isEven(2));

Array = [100,83,4,16,42,144,10000]
console.log("my array", array);

var result = array.map(isEven);
console.log("test for evenness of array", results);

var result = array.map(function(x){
    return x ** 0.5;

})
console.log("Squareroot of array:", result)
