//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//
var Bob = function() {};

var isUpperCase = function(str) {
    if (str === str.toUpperCase())
        return true;
    else
        return false;
};

var isNumeric = function(str) {
    if (str.match(/[A-z]/))
        return false;
    else
        return true;
};

var isBlank = function(str) {
    if (str.length === 0 ||
        str.match(/^\s*$/))
        return true;
    else
        return false;
};

Bob.prototype.hey = function(input) {
    if (isBlank(input)) {
        return "Fine. Be that way!";
    }

    var lastChar = input[input.length - 1];

    if (lastChar === ".") {
        return "Whatever.";
    } else if (lastChar === "!") {
        if (isUpperCase(input))
            return "Whoa, chill out!";
        else
            return "Whatever.";
    } else if (lastChar === "?") {
        if (isUpperCase(input) &&
            !isNumeric(input))
            return "Whoa, chill out!";
        else
            return "Sure.";
    } else {
        if (isUpperCase(input) &&
            !isNumeric(input))
            return "Whoa, chill out!";
        else
            return "Whatever.";
    }
};

module.exports = Bob;
