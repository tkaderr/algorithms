var addBinary = function(a, b) {
    var i = a.length - 1;
    var j = b.length - 1;
    var carry = 0;
    var result = "";
    while(i >= 0 || j >= 0) {
        var m = i < 0 ? 0 : a[i] | 0;
        var n = j < 0 ? 0 : b[j] | 0;
        carry += m + n; // sum of two digits
        result = carry % 2 + result; // string concat
        carry = carry / 2 | 0; // remove decimals,  1 / 2 = 0.5, only get 0
        i--;
        j--;
    }
    if(carry !== 0) {
        result = carry + result;
    }
    return result;
};
