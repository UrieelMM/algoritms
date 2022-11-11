let isPalindrome = function (s) {
    let stringToArray = s.toLowerCase().split("");
    let arrayReverse = stringToArray.reverse();
    let arrayToString = arrayReverse.join("");
    if (s.toLowerCase() === arrayToString) {
        return console.log(true, "Is palindrome")
    } else {
        return console.log(false, "Is not palindrome")
    }
}
isPalindrome("anitalavalatina");