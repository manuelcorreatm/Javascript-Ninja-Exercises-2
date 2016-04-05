function addRec(arr) {
    if (arr.length > 0) {
        return arr.pop() + addRec(arr);
    } else {
        return 0;
    }
    
}

var arr = [1, 3, 5, 7];
var sum = addRec(arr); // 16

console.log(sum);