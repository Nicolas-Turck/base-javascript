// test javascript for dynamic web pages 
quest = prompt('quel age a tu?');
var rep = 'tu as ', quest, end = ' ans', result;
result = rep + quest + end;
alert(result);

// change string to int with parseInt()
var firstNumber, secondNumber, result;

firstNumber = prompt('Enter number :');
secondNumber = prompt('Enter other number :');
result = parseInt(firstNumber) + parseInt(secondNumber);

alert(result);

// change int to string with ''
var text, numberOne = 5, numberTwo = 7;
text = numberOne + '' + numberTwo;
alert(text);

// confirm if confirm is true
if (confirm('are you Ok  ?')) {
    alert('its Ok !');
}