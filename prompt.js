var prompt = require('readline-sync').question


function getNumber(question) {
    var input = prompt(question);
    return input * 1;
}


function getText(question) {
    return(prompt(question));
}

exports.getNumber = getNumber;
exports.getText = getText;