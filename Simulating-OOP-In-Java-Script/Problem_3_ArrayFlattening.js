Array.prototype.flatten = function flatten() {
 var newArr = [];
    var array = this;
    function innerFlatten(arr){
        for (var i = 0; i < arr.length; i++) {
            if(arr[i] instanceof Array ){
                innerFlatten(arr[i]);
            }
            else{
                newArr.push(arr[i]);
            }

        }
    }
    innerFlatten(array);
    return newArr;
}
var array = [1, 2, 3, 4];
console.log(array.flatten());

var array = [1, 2, [[7,8], 4], [5, 6]];
console.log(array.flatten());
console.log(array);
