function mul(value1, value2) {
    var letter = "";
    var remainder = 0;
    var quotient = 0;
    var result = "";

    quotient = value1 * value2;
    
    while (quotient !== 0) {
        remainder = quotient % 13;
        
        quotient = Math.floor(quotient / 13);
        switch (remainder) {
            case 10: remainder = "A"; break;
            case 11: remainder = "B"; break;
            case 12: remainder = "C"; break;
        }
        result = remainder + result;
    }
    

    return result;
}

var answer = mul(9 6);
console.log(answer);