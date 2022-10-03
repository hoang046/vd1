var score = 75;
var msg;
if (score >= 50) {
    msg = 'Congretulations!';
    msg += ' Proceed to the next round.';
}
var el = document.getElementById(elementld: 'answer');
el.textContent = msg;