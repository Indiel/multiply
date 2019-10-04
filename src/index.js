module.exports = function multiply(first, second) {
    let firstArr = first.split('').reverse();
    let secondArr = second.split('').reverse();

    let orderFirst;
    let orderSecond;
    if (secondArr.length > firstArr.length) {
        orderFirst = secondArr;
        orderSecond = firstArr;
    } else {
        orderFirst = firstArr;
        orderSecond = secondArr;
    }

    // function multiplyNumbers() {
    //     let objMultiplyNumbers = {};
    //     let residue;
    //     let result;

    //     for (let i = orderSecond.length - 1, keyI = 0; i >= 0; i--, keyI++) {
    //         objMultiplyNumbers[keyI] = [];
    
    //         residue = '0';
    //         for (let i2 = orderFirst.length - 1, arrI = 0; i2 >= 0; i2--, arrI++) {
    //             result = String((parseInt(orderSecond[i], 10) * parseInt(orderFirst[i2], 10)) + parseInt(residue, 10));
    
    //             if (i2 == 0) {
    //                 result = result.split('');
    //                 objMultiplyNumbers[keyI] = result.concat(objMultiplyNumbers[keyI].reverse());
    //             } else {
    //                 result.length == 1 ? residue = '0' : residue = result.slice(0, -1);
    //                 objMultiplyNumbers[keyI][arrI] = result.slice(-1);
    //             }
    //         }
    //     }

    //     return objMultiplyNumbers;
    // }

    function multiplyNumbers() {
        var arrMultiplyNumbers = [];
        let result;
        for (var i = 0; i < orderFirst.length; i++) {
            for (var j = 0; j < orderSecond.length; j++) {
            result = orderFirst[i] * orderSecond[j];
            arrMultiplyNumbers[i + j] = (arrMultiplyNumbers[i + j]) ? arrMultiplyNumbers[i + j] + result : result;
            }
        }

        return arrMultiplyNumbers;
    }

    function sumNumbers(arr) {
        let residue = '0';
        for (let i = 0; i < arr.length; i++) {
            arr[i] = parseInt(arr[i], 10) + parseInt(residue, 10);
            String(arr[i]).slice(0, -1) ? residue = String(arr[i]).slice(0, -1) : residue = '0';
            arr[i] = String(arr[i]).slice(-1);
        }

        if (residue != '0') {
            arr.push(residue);
        }

        return arr.reverse().join('');
    }

    return sumNumbers(multiplyNumbers());
}
