let isPalindromeNumber = function (x) {
    let stringToArray = x.toString().split("");
    let arrayReverse = stringToArray.reverse();
    let arrayToString = arrayReverse.join("");
    if (x.toString() === arrayToString) {
        return true
    } else {
        return false
    }
}
isPalindromeNumber(121);