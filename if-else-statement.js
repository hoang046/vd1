var pass = 50;
var score = 75;
var msg;
if (score > pass) {
    msg = 'Congretulation, you passed!';
} else {
    msg = 'Have annther go!';
}
var el = document.getElementById(elementld: 'answer');
el.textContent = msg;